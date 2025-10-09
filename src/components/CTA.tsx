import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-sand/50 to-sky/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Unlock Travel Savings?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Access exclusive arrangements with continuous support from our travel specialists. Best rates guaranteed.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
            onClick={() => window.location.href = '/pre-checkout'}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
