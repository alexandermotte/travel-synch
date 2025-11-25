import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Globe, Star, Sparkles } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

export const Hero = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sand via-sky to-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center gap-4">
            <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm animate-fade-in">
              <Plane className="h-8 w-8 text-primary" />
            </div>
            <div className="p-4 rounded-2xl bg-accent/10 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Globe className="h-8 w-8 text-accent" />
            </div>
            <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Star className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
            Experience Travel Without Limits
          </h1>
          <p className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transform your journey with Travel Synch. Access premium travel services and exclusive rates starting at just {formatPrice(49)} per quarter.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg shadow-elegant transition-smooth animate-fade-in"
            style={{ animationDelay: "0.2s" }}
            onClick={() => window.location.href = '/pre-checkout'}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-accent mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Airports</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-3xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 opacity-20">
        <Sparkles className="h-12 w-12 text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 opacity-20">
        <Sparkles className="h-8 w-8 text-accent animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};
