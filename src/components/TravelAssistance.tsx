import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const TravelAssistance = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Votre Assistance Voyage Réinventée
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              Nous allons bien au-delà des agences de voyage traditionnelles. Nous avons centralisé tous les aspects de la gestion et réservation de voyages dans une plateforme intuitive qui connecte voyageurs et gestionnaires.
            </p>
            <p>
              Nous avons enrichi votre expérience en nous intégrant aux aéroports les plus prestigieux et aux fournisseurs de services premium du monde entier. Enregistrement automatisé, fast track, salons aéroport et services de conciergerie exclusifs garantissent un voyage fluide et supérieur, parfaitement adapté à vos besoins.
            </p>
            <p>
              De plus, notre assistance personnalisée vous garantit une expérience de vacances unique, axée sur la commodité et des aventures sur mesure, sans avoir à chercher les meilleures options par vous-même.
            </p>
            <p className="font-medium text-foreground">
              Avec Travel Synch, obtenez bien plus qu'avec votre agence de voyage habituelle.
            </p>
          </div>
          <div className="text-center">
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
      </div>
    </section>
  );
};
