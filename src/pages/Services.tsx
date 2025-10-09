import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Sparkles, Zap, Ticket, BookOpen, Heart, Clock, Plane, Shield, Users, Map, RefreshCw, Star, CheckCircle, Calendar, TrendingUp } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import mobileCheckinImage from "@/assets/mobile-checkin.jpg";
import museumImage from "@/assets/museum-interior.jpg";
import serviceConciergeImage from "@/assets/service-concierge.jpg";
import loungePremiumImage from "@/assets/lounge-premium.jpg";

const Services = () => {
  const { formatPrice } = useCurrency();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeTab, setActiveTab] = useState("subscription");

  useEffect(() => {
    // Handle hash navigation from footer
    const hash = window.location.hash.replace("#", "");
    if (hash && ["subscription", "fast-track", "ticketline", "ebooks", "concierge", "checkin"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: "Serenity",
      description: "It is likely that organising a trip will take a long time and be difficult. Allow us to assist you in planning your ideal vacation.",
    },
    {
      icon: Sparkles,
      title: "Money Well Spent",
      description: "You don't need to travel very far to make your membership worthwhile. You will get the best fares.",
    },
    {
      icon: Clock,
      title: "Customer Support",
      description: "Customer service accessible twenty-four-seven.",
    },
  ];

  const conciergeFeatures = [
    {
      title: "Peace of Mind",
      description: "Although everyone loves holidays, making all the travel arrangements can be time-consuming and stressful. Let us do the work!",
    },
    {
      title: "Save Time",
      description: "A great service for busy people. We pride ourselves in delivering astonishing services on time.",
    },
    {
      title: "Round The Clock Support",
      description: "Our partners help us ensure we can handle any concierge request in any location.",
    },
  ];

  const plans = [
    {
      id: "premium",
      name: "Premium",
      price: 79,
      period: "Every 3 months",
      features: [
        "Up to 5 free Fast-Track accesses per month",
        "Unlimited automated check-ins",
        "Unlimited skip-the-line museum entries",
        "Exclusive discounts on airport lounges",
      ],
      highlighted: true,
    },
    {
      id: "medium",
      name: "Medium",
      price: 49,
      period: "Every 3 months",
      features: [
        "Smart travel, frequent and hassle-free",
        "Up to 2 free Fast-Track accesses per month",
        "Automated check-in included",
        "Priority entry to selected museums",
      ],
      highlighted: false,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-sand/50 via-sky/30 to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Our best-in-class travel management solution will help you save on travel expenses quickly and easily.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
                onClick={() => window.location.href = '/pre-checkout'}
              >
                Start Now
              </Button>
            </div>
          </div>
        </section>

        {/* What we can do for you - Tabs */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What we can do for you</h2>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
                <TabsTrigger value="fast-track">Fast Track</TabsTrigger>
                <TabsTrigger value="ticketline">Attractions</TabsTrigger>
                <TabsTrigger value="ebooks">E-books</TabsTrigger>
                <TabsTrigger value="concierge">Concierge</TabsTrigger>
                <TabsTrigger value="checkin">Check-In</TabsTrigger>
              </TabsList>

              <TabsContent value="subscription" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 bg-card border-border text-center">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                        <benefit.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fast-track" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ultimate Fast Track Service</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Navigate through the airport with ease by accessing fast track lanes at hundreds of the world's leading airports.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Best Access</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We ensure priority access, offering the fastest route to your gate.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our customer service is available 24/7 to assist with all your fast track needs.
                    </p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="ticketline" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elegant">
                    <img 
                      src={museumImage} 
                      alt="Museum interior with art galleries" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <Card className="p-6 bg-card border-border">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Stress-Free Access</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Skip the queues and guarantee your entry. We help you pre-book popular sites, museums, and local events.
                      </p>
                    </Card>
                    <Card className="p-6 bg-card border-border">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                        <Star className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Tailored Experiences</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Discover curated recommendations that match your interests. Whether it's art, history, or thrill, we've got the tickets lined up.
                      </p>
                    </Card>
                    <Card className="p-6 bg-card border-border">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                        <Ticket className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Exclusive Deals</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Get access to special offers and bundled passes that save you money while unlocking more experiences.
                      </p>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ebooks" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Knowledge On-the-Go</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Packed with tips, maps, and local secrets — our e-books are perfect companions for spontaneous adventures.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <Map className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Inspiration Anytime</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Browse destination guides and cultural reads wherever you are. No Wi-Fi? No problem — they're always available offline.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <RefreshCw className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our content stays fresh with frequent updates, so you'll always have the latest insights and travel trends.
                    </p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="concierge" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <Plane className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Great Network</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our partners ensure we can handle any concierge request in any location.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <RefreshCw className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexibility</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You are able to change your reservation at any time.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Travel Experts</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We work in this field for many years and build an expertise you can rely on.
                    </p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="checkin" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <Card className="p-6 bg-card border-border">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Smooth Check-In</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our automated check-in system streamlines your travel process, ensuring you can skip the lines.
                      </p>
                    </Card>
                    <Card className="p-6 bg-card border-border">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Be the First to Check-In</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Enjoy the privilege of being among the first to check in, setting the tone for a relaxed travel experience.
                      </p>
                    </Card>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elegant">
                    <img 
                      src={mobileCheckinImage} 
                      alt="Mobile check-in at airport" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Concierge Services */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sand/40 to-sky/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Concierge Services</h2>
              <p className="text-xl text-muted-foreground">Don't have time? We can help!</p>
            </div>
            
            <div className="mb-12 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant max-w-5xl mx-auto">
              <img 
                src={serviceConciergeImage} 
                alt="Professional concierge service" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {conciergeFeatures.map((feature, index) => (
                <Card key={index} className="p-6 bg-card border-border text-center">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                    {index === 0 && <Heart className="h-6 w-6" />}
                    {index === 1 && <Clock className="h-6 w-6" />}
                    {index === 2 && <Users className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Assistance Hub */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Travel Assistance Hub</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Navigate your journey effortlessly with our comprehensive travel assistance hub, featuring exclusive services such as automated check-in, fast track access, airport lounges, travel assistant, and concierge services at competitive rates!
                </p>
                <p>
                  This is the ultimate travel companion offering you seamless travel experiences. From bypassing long queues with our fast track access to enjoying personalized travel and concierge services tailored to your needs, our platform ensures every aspect of your journey is covered.
                </p>
                <p>
                  Discover the convenience of having a personal travel assistant and the luxury of concierge services right at your fingertips. Our travel assistance hub is designed for both organizations and individuals looking for a smoother, more enjoyable travel experience.
                </p>
                <p className="font-medium text-foreground">
                  Travel Synch is your one-stop solution for enhancing your travel with efficiency and style.
                </p>
              </div>
              
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={loungePremiumImage} 
                  alt="Premium travel assistance lounge" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Round The Clock Support */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Round The Clock Support</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
                <p>
                  Travel Synch enhances your travel with round-the-clock support. Enjoy effortless journeys with automated check-in and fast track services, minimizing wait times at airports.
                </p>
                <p>
                  Our travel assistants provide personalized support, ensuring a seamless experience. With our concierge service, expect tailored assistance for any need, big or small.
                </p>
                <p>
                  Stay informed about travel regulations to prepare for your trip. Trust us for unparalleled support, blending convenience with luxury, making each journey memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 md:p-10 ${
                    plan.highlighted
                      ? "border-2 border-primary bg-primary/5 shadow-elegant"
                      : "bg-card border-border"
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-1">
                      <span className="text-4xl md:text-5xl font-bold">{formatPrice(plan.price)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                    size="lg"
                    onClick={() => window.location.href = `/pre-checkout?plan=${plan.id}`}
                  >
                    Try Now
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-sand/30 to-sky/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Got questions</h2>
              <p className="text-center text-muted-foreground mb-8">Contact us anytime</p>
              
              <Card className="p-8 bg-card border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name*
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email*
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      How can we help you?*
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Submit
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to save on your travel?
              </h2>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
                onClick={() => window.location.href = '/pre-checkout'}
              >
                Start Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
