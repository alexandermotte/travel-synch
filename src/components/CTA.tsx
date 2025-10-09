import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-sand/50 to-sky/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Économiser sur Vos Voyages ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bénéficiez d'arrangements exclusifs et d'un support continu par nos spécialistes voyage. Meilleurs prix garantis.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg shadow-elegant transition-smooth"
            onClick={() => window.location.href = '/pre-checkout'}
          >
            Commencer Maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
