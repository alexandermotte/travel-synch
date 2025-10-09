import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

export const Hero = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky via-background to-sand py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Plan Your Next Holiday!
          </h1>
          <p className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            You can tailor your perfect holiday with Travel Synch. We assist you in making smarter travel choices by providing the lowest fares from {formatPrice(49)} every three months.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
            onClick={() => window.location.href = '/pre-checkout'}
          >
            Start Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};
