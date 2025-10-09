import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const airports = [
  { code: "CDG", name: "Paris Charles de Gaulle" },
  { code: "ORY", name: "Paris Orly" },
  { code: "LHR", name: "London Heathrow" },
  { code: "AMS", name: "Amsterdam Schiphol" },
  { code: "FRA", name: "Frankfurt" },
  { code: "MAD", name: "Madrid" },
  { code: "BCN", name: "Barcelona" },
  { code: "FCO", name: "Rome Fiumicino" },
  { code: "DXB", name: "Dubai" },
  { code: "JFK", name: "New York JFK" },
  { code: "LIS", name: "Lisbon - Humberto Delgado Airport" },
];

const FastTrackForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { formatPrice, currency } = useCurrency();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flightDate, setFlightDate] = useState<Date>();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    airport: "",
    adults: "1",
    children: "0",
  });

  const pricePerAdult = 11;
  const pricePerChild = 11;

  const calculateTotal = () => {
    const adultsCount = parseInt(formData.adults) || 0;
    const childrenCount = parseInt(formData.children) || 0;
    return (adultsCount * pricePerAdult) + (childrenCount * pricePerChild);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create customer (public submission, no user_id required)
      const { data: customerData, error: customerError } = await supabase
        .from("customers")
        .insert({
          user_id: null, // NULL for public form submissions
          company_name: `${formData.firstName} ${formData.lastName}`,
          notes: `Airport: ${formData.airport}, Flight Date: ${flightDate ? format(flightDate, "PP") : "Not specified"}, Email: ${formData.email}, Phone: ${formData.phone}`,
        })
        .select()
        .single();

      if (customerError) throw customerError;

      // Generate order number
      const orderNumber = `FT-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;
      
      // Calculate amount
      const totalAmount = calculateTotal();

      // Create order
      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer_id: customerData.id,
          amount: totalAmount,
          currency: currency,
          status: "Not Paid",
          order_number: orderNumber,
          service_type: "Fast Track",
          business: "Fast Track",
          site: "Travel Synch",
        })
        .select()
        .single();

      if (orderError) throw orderError;

      toast({
        title: "Success",
        description: "Your Fast Track booking has been created.",
      });

      // Redirect to payment page
      navigate(`/fast-track-payment/${orderData.id}`, {
        state: {
          orderData,
          customerData,
          formData,
          flightDate,
        },
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Fast Track</h1>
              <p className="text-muted-foreground">Fill in your details to reserve your Fast Track access</p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Flight Information */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Flight Information</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="airport">Airport *</Label>
                    <Select
                      required
                      value={formData.airport}
                      onValueChange={(value) => setFormData({ ...formData, airport: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your airport" />
                      </SelectTrigger>
                      <SelectContent>
                        {airports.map((airport) => (
                          <SelectItem key={airport.code} value={`${airport.name} - ${airport.code}`}>
                            {airport.name} ({airport.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Flight Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {flightDate ? format(flightDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={flightDate}
                          onSelect={setFlightDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="adults">Adults *</Label>
                      <Select
                        value={formData.adults}
                        onValueChange={(value) => setFormData({ ...formData, adults: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} x {formatPrice(pricePerAdult)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="children">Children</Label>
                      <Select
                        value={formData.children}
                        onValueChange={(value) => setFormData({ ...formData, children: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num > 0 && `x ${formatPrice(pricePerChild)}`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span>{formatPrice(calculateTotal())}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    With your first Fast Track purchase, get a 3-day free trial of Travel Synch's subscription, 
                    then {formatPrice(49)} every quarter. Cancel anytime.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Continue to Payment"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FastTrackForm;
