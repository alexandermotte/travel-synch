import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const ExecPassServices = () => {
  const { formatPrice } = useCurrency();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("subscription");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check for tab parameter
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <ExecPassHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Turnkey travel solutions for your next business trip
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                We take pride in delivering
              </p>
              <p className="text-lg md:text-xl font-semibold mb-8">
                tailor-made services for corporate clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Try us, you won't regret it!
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 py-6 text-lg" asChild>
                <Link to="/pre-checkout">Start ExecPass</Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/images/services-hero.png" 
                alt="Services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discover ExecPass Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover ExecPass
            </h2>
            <p className="text-lg text-muted-foreground">
              We committed to give you the most of our experience and knowledge.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent h-auto mb-8">
              <TabsTrigger 
                value="subscription" 
                className="bg-background data-[state=active]:bg-accent data-[state=active]:text-white px-4 py-3 rounded font-semibold"
              >
                Subscription
              </TabsTrigger>
              <TabsTrigger 
                value="checkin" 
                className="bg-background data-[state=active]:bg-accent data-[state=active]:text-white px-4 py-3 rounded font-semibold"
              >
                Flight Check-In
              </TabsTrigger>
              <TabsTrigger 
                value="fasttrack" 
                className="bg-background data-[state=active]:bg-accent data-[state=active]:text-white px-4 py-3 rounded font-semibold"
              >
                Airport Fast Track
              </TabsTrigger>
              <TabsTrigger 
                value="concierge" 
                className="bg-background data-[state=active]:bg-accent data-[state=active]:text-white px-4 py-3 rounded font-semibold"
              >
                Concierge Services
              </TabsTrigger>
              <TabsTrigger 
                value="attractions" 
                className="bg-background data-[state=active]:bg-accent data-[state=active]:text-white px-4 py-3 rounded font-semibold"
              >
                Ticketline to Attractions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="subscription" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Travel Support</h3>
                  <p className="text-muted-foreground">
                    Planning a trip can be time-consuming—our team helps you enjoy a smooth, stress-free journey from airport to destination.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Experts in Travel</h3>
                  <p className="text-muted-foreground">
                    From fast track to flight check-in, lounges, and concierge, our experts are here to assist every step of the way.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Spend less</h3>
                  <p className="text-muted-foreground">
                    Get exclusive access to top landmarks at reduced prices. Your subscription unlocks real value at must-see destinations.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="checkin" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Automated Flight Check-in</h3>
                  <p className="text-muted-foreground">
                    Skip the stress of check-ins. We handle it for you—so you can focus on your journey, not the bureaucracy.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Seamless Travel</h3>
                  <p className="text-muted-foreground">
                    Enjoy a smoother airport experience with automated check-in and boarding pass delivery straight to your inbox.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Reliable Support</h3>
                  <p className="text-muted-foreground">
                    Questions about your check-in or flight status? Our team is here to help, whenever you need us.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="fasttrack" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Fast-track access</h3>
                  <p className="text-muted-foreground">
                    Skip long airport queues with priority security and passport control. Save time and start your journey stress-free.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Effortless experience</h3>
                  <p className="text-muted-foreground">
                    Get through the airport faster with VIP-style access—no waiting, no hassle.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Flexible options</h3>
                  <p className="text-muted-foreground">
                    Available at major airports, whenever you fly. Ideal for both last-minute trips and planned vacations.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="concierge" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Great Network</h3>
                  <p className="text-muted-foreground">
                    Our partners ensure we can handle any concierge request in any location.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Flexibility</h3>
                  <p className="text-muted-foreground">
                    You are able to change your reservation at any time.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Travel Experts</h3>
                  <p className="text-muted-foreground">
                    We work in this field for many years and build an expertise you can rely on.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="attractions" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Attraction Discounts</h3>
                  <p className="text-muted-foreground">
                    Get special prices on must-see landmarks and popular activities to make the most of every destination.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Booking Support</h3>
                  <p className="text-muted-foreground">
                    Our team takes care of your attraction bookings and offers assistance whenever you need it—so you can just enjoy the journey.
                  </p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Online Support Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
              <img 
                src="/images/online-support.png" 
                alt="Online support" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Great Online Support</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Team of experts</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Around the clock support</li>
                    <li>• +15 years of experience</li>
                    <li>• Focus on your needs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Member Zone</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Fast track & flight check-in</li>
                    <li>• Lounge access & concierge support</li>
                    <li>• Discounted tickets & travel eBooks</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Customer Assistance</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Available in less than an hour</li>
                    <li>• Phone, Email or chat</li>
                    <li>• Here for you all the way</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Support Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Excellent Travel Support
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Flying can be stressful—especially with long lines, changing rules, and unfamiliar procedures. That's where we come in.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We assist with flight check-in, airport fast track, and provide clear guidance on what to expect before and during your journey, including traveling with children.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team keeps you informed about airport processes, lounge access, and available perks. We also handle attraction bookings and provide concierge support to ensure a smooth and enjoyable trip.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 py-6 text-lg" asChild>
                <Link to="/pre-checkout">Start Trial</Link>
              </Button>
            </div>
            <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
              <img 
                src="/images/travel-assistant.png" 
                alt="Travel assistant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-accent min-h-[420px]">
              <div className="text-center mb-6">
                <p className="text-sm uppercase tracking-wide text-accent font-semibold mb-4">premium</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold block">{formatPrice(79)}</span>
                </div>
                <p className="text-sm text-muted-foreground">Every 3 months</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Up to 5 free Fast-Track accesses per month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Unlimited automated check-ins</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Unlimited skip-the-line museum entries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Exclusive discounts on airport lounges</span>
                </li>
              </ul>
              
              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <Link to="/pre-checkout">Try Now</Link>
              </Button>
            </Card>

            <Card className="p-8 min-h-[420px]">
              <div className="text-center mb-6">
                <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold mb-4">medium</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold block">{formatPrice(49)}</span>
                </div>
                <p className="text-sm text-muted-foreground">Every 3 months</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Smart travel, frequent and hassle-free</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Up to 2 free Fast-Track accesses per month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Automated check-in included</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Priority entry to selected museums</span>
                </li>
              </ul>
              
              <Button className="w-full" variant="outline" asChild>
                <Link to="/pre-checkout">Try Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Got questions
            </h2>
            <p className="text-center text-muted-foreground mb-8">Contact us anytime</p>
            
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    How can we help you?*
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover premium business travel with ExecPass
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Enhance every trip with priority airport access, corporate perks, and dedicated 24/7 support—all streamlined through your personalized business travel dashboard.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 py-6 text-lg" asChild>
            <Link to="/pre-checkout">Start Trial</Link>
          </Button>
        </div>
      </section>

      <ExecPassFooter />
    </div>
  );
};

export default ExecPassServices;
