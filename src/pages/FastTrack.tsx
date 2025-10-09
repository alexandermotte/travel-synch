import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Sparkles, MousePointerClick, CheckCircle2 } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import fastTrackImage from "@/assets/fast-track.jpg";

const FastTrack = () => {
  const { formatPrice } = useCurrency();

  const features = [
    {
      icon: Zap,
      title: "SPEEDY PROCESS",
      heading: "Skip long queues",
      description: "Tired of waiting? Fast Track gives you access to a dedicated lane straight to the security checkpoint.",
      detail: "Access to boarding gate quicker and without rushing with our pass available for all passengers."
    },
    {
      icon: Sparkles,
      title: "SMOOTH AND EASY",
      heading: "Enjoy the comfort",
      description: "Fully enjoy an instant, smooth airport experience with a network of +300 connected airports worldwide.",
      detail: "This service is ideal for those wanting a stress-free experience and more time to relax, eat and shop at the airport"
    },
    {
      icon: MousePointerClick,
      title: "CONVENIENT",
      heading: "A few clicks away",
      description: "Check the availability of your airport and book now your Fast Track in a matter of seconds.",
      detail: "Show your ticket at the Fast track lane at the airport even with your phone locked."
    }
  ];

  const benefits = [
    "Premium service to frequent flyers who value their time",
    "Avoid the hassle of long lines and delays at the airport",
    "Available at major airports around the world",
    "Tailored to meet the needs of everyone who demand convenience and comfort"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sand via-sky to-secondary/30 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Fast Track - from {formatPrice(5)}
              </h1>
              <p className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Less queuing at airports, faster boarding to gate
              </p>
              
              <div className="space-y-4 mb-8">
                <Select>
                  <SelectTrigger className="w-full max-w-md">
                    <SelectValue placeholder="Select Airport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdg">Paris Charles de Gaulle (CDG)</SelectItem>
                    <SelectItem value="ory">Paris Orly (ORY)</SelectItem>
                    <SelectItem value="lhr">London Heathrow (LHR)</SelectItem>
                    <SelectItem value="ams">Amsterdam Schiphol (AMS)</SelectItem>
                    <SelectItem value="fra">Frankfurt (FRA)</SelectItem>
                    <SelectItem value="mad">Madrid (MAD)</SelectItem>
                    <SelectItem value="bcn">Barcelona (BCN)</SelectItem>
                    <SelectItem value="fco">Rome Fiumicino (FCO)</SelectItem>
                    <SelectItem value="dxb">Dubai (DXB)</SelectItem>
                    <SelectItem value="jfk">New York JFK (JFK)</SelectItem>
                  </SelectContent>
                </Select>
                
                <p className="text-sm text-muted-foreground">
                  With your first Fast Track purchase, get a 3-day free trial of Travel Synch's subscription, then {formatPrice(49)} every quarter. Cancel anytime.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
                onClick={() => window.location.href = '/pre-checkout?plan=fast-track'}
              >
                Book Now
              </Button>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={fastTrackImage} 
                alt="Fast Track airport security" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-elegant transition-smooth">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-primary tracking-wider">{feature.title}</p>
                      <h3 className="text-2xl font-bold">{feature.heading}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                      <p className="text-sm text-muted-foreground">{feature.detail}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-sky/50 to-sand/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Premium Fast Track Service
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide a premium service to frequent flyers who value their time and want to avoid the hassle of long lines and delays at the airport.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Card className="p-6 bg-card/50 backdrop-blur">
              <p className="text-center text-muted-foreground">
                Travel Synch subscription allows you to access fast track, check-in, lounges and more premium services. With your first Fast Track purchase, get a 3-day free trial of Travel Synch's subscription, then {formatPrice(49)} every quarter. Cancel anytime.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SEE YOUR AIRPORT AVAILABILITY
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At your airport
            </p>
            <p className="text-muted-foreground mb-8">
              Check availability for your airport and get your Fast Track now.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
              onClick={() => window.location.href = '/pre-checkout?plan=fast-track'}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FastTrack;
