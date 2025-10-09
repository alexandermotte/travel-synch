import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Separator } from "@/components/ui/separator";
import { Lock } from "lucide-react";

const FastTrackPayment = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const { formatPrice } = useCurrency();
  const { orderData, customerData, formData, flightDate } = location.state || {};

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    // Payment processing logic will be implemented here
    console.log("Processing payment...", paymentData);
  };

  if (!orderData || !formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky/20 via-background to-sand/20">
      <Header />
      
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
              </div>
              <div className="h-px w-20 bg-border"></div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
              </div>
              <div className="h-px w-20 bg-border"></div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Checkout</h1>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Payment Form */}
              <Card className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Total: {formatPrice(orderData.amount)}</h2>
                  <p className="text-sm text-muted-foreground">
                    With your first Fast Track purchase, get a 3-day free trial My-Trip-Online's subscription, 
                    then {formatPrice(49)} every 3 months. Cancel anytime.
                  </p>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryMonth">Expiry Month</Label>
                      <Select
                        value={paymentData.expiryMonth}
                        onValueChange={(value) => setPaymentData({ ...paymentData, expiryMonth: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => {
                            const month = (i + 1).toString().padStart(2, '0');
                            return (
                              <SelectItem key={month} value={month}>
                                {month}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expiryYear">Expiry Year</Label>
                      <Select
                        value={paymentData.expiryYear}
                        onValueChange={(value) => setPaymentData({ ...paymentData, expiryYear: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        maxLength={4}
                        required
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#FF1744] hover:bg-[#FF1744]/90 text-white font-bold"
                  >
                    FINISH
                  </Button>

                  <div className="space-y-2 text-center text-sm text-muted-foreground">
                    <p>The payment will appear as XP*TRAVEL-SYNCH.COM on your next bank statement</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Lock className="h-4 w-4" />
                      <span className="font-semibold">Secure Payment</span>
                    </div>
                  </div>
                </form>
              </Card>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="p-6 bg-accent/10">
                  <h3 className="text-lg font-bold mb-4 text-center">
                    PLEASE PROCEED WITH PAYMENT TO RECEIVE IMMEDIATELY YOUR FAST TRACK
                  </h3>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Fast Track Summary</h3>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fast-Track:</span>
                      <span className="font-semibold">{formatPrice(orderData.amount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Travel Synch Subscription:</span>
                      <span className="font-semibold">
                        {formatPrice(0)} (after the 3 days free trial you'll be charged {formatPrice(49)})
                      </span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span>{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Airport:</span>
                      <span>{formData.airport}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Adults:</span>
                      <span>{formData.adults} x {formatPrice(11)}</span>
                    </div>
                    {parseInt(formData.children) > 0 && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Children:</span>
                        <span>{formData.children} x {formatPrice(11)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="text-[#FF1744] font-bold">NOT PAID</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-muted/50">
                  <p className="text-sm text-muted-foreground text-center">
                    Skip long queues - 100% secure - Compliant
                  </p>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    The subscription has a 3 days trial offer. If you do not cancel it during this period, 
                    your membership will be automatically activated for a {formatPrice(49)} every 3 month fee. 
                    You can cancel your subscription at any time, before or after the end of the trial period. 
                    Payment must be made by Visa or Mastercard.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FastTrackPayment;
