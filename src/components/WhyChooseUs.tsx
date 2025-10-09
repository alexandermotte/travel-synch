import { Card } from "@/components/ui/card";
import { Headphones, DollarSign, Shield, Smartphone } from "lucide-react";
import loungePremium from "@/assets/lounge-premium.jpg";

const features = [
  {
    icon: Headphones,
    title: "Support Humain 24/7",
    description: "Nos experts voyage sont disponibles en permanence pour vous accompagner. Aucun robot, uniquement de vrais spécialistes à votre écoute.",
  },
  {
    icon: DollarSign,
    title: "Meilleur Rapport Qualité-Prix",
    description: "Grâce à nos partenaires triés sur le volet, profitez des tarifs les plus compétitifs sans compromis sur la qualité. Zéro frais cachés, transparence totale.",
  },
  {
    icon: Shield,
    title: "Tranquillité d'Esprit Garantie",
    description: "Réservez sans stress avec une flexibilité maximale et une plateforme intuitive conçue pour vous simplifier la vie.",
  },
  {
    icon: Smartphone,
    title: "Technologie de Pointe",
    description: "Ne restez pas à la traîne. Notre plateforme innovante révolutionne la façon dont vous réservez et gérez vos voyages.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
          <p className="text-lg text-muted-foreground">Des offres irrésistibles et un service d'exception</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 md:p-8 bg-card border-border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant max-w-5xl mx-auto">
          <img 
            src={loungePremium} 
            alt="Salon d'aéroport premium" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
