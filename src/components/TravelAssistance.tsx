import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const TravelAssistance = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Travel Assistance Reimagined
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              We redefine travel planning. Our unified platform streamlines every aspect of travel management and booking, seamlessly connecting travelers with travel coordinators.
            </p>
            <p>
              We've elevated your travel experience through partnerships with world-class airports and luxury service providers. Automated check-in, fast track lanes, premium lounges, and exclusive concierge services ensure your journey is flawless and perfectly tailored to you.
            </p>
            <p>
              Our personalized support delivers unique vacation experiences focused on convenience and custom adventures, eliminating the need for you to search for optimal options yourself.
            </p>
            <p className="font-medium text-foreground">
              With Travel Synch, experience far more than traditional travel management companies can offer.
            </p>
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
              onClick={() => window.location.href = '/pre-checkout'}
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
