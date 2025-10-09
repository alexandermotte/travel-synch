import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const TravelAssistance = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our travel assistance
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              We go above and beyond your average travel planner. We've streamlined all aspects of travel management and booking into one easy-to-use platform, that serves and connects travelers and travel managers.
            </p>
            <p>
              We've enriched your travel experience by integrating with top-tier airports and luxury service providers globally, offering automated check-in, fast track, airport lounges and exclusive travel assistant and concierge services. This ensures your journey is seamless and superior, tailored just for you.
            </p>
            <p>
              In addition, our personalized travel assistance guarantees a unique vacation experience, focusing on convenience and bespoke adventures, without the need to search for the best options yourself.
            </p>
            <p className="font-medium text-foreground">
              With Travel Synch, you get so much more than with your usual travel management company.
            </p>
          </div>
          <div className="text-center">
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
      </div>
    </section>
  );
};
