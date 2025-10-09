import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import airportImage from "@/assets/airport-interior.jpg";

export const Hero = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sand via-sky to-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Voyagez Plus, Dépensez Moins !
            </h1>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Avec Travel Synch, transformez votre manière de voyager. Bénéficiez d'un accès privilégié aux meilleurs tarifs et services premium dès {formatPrice(49)} tous les trois mois.
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
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={airportImage} 
              alt="Modern airport terminal" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};
