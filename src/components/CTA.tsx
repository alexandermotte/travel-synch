import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const CTA = () => {
  const benefits = [
    "Exclusive partner rates",
    "24/7 expert support",
    "Zero hidden fees",
    "Instant booking access"
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-sand/50 to-sky/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 border-2 border-primary/20 shadow-elegant">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Unlock Travel Savings?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Access exclusive arrangements with continuous support from our travel specialists. Best rates guaranteed.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
                onClick={() => window.location.href = '/pre-checkout'}
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
