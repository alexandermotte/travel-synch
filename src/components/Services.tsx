import { Card } from "@/components/ui/card";
import { Sparkles, Zap, CheckCircle, Coffee, Ticket, BookOpen } from "lucide-react";
import travelFamily from "@/assets/travel-family.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Service Conciergerie",
    description: "Notre service de conciergerie sur mesure répond à tous vos besoins : réservations stratégiques, transport sans faille, assistance personnalisée pour un voyage sans souci.",
  },
  {
    icon: Zap,
    title: "Accès Fast Track",
    description: "Évitez les files d'attente interminables. Notre service Fast Track accélère toutes vos formalités aéroportuaires pour une expérience fluide et agréable.",
  },
  {
    icon: CheckCircle,
    title: "Enregistrement Automatique",
    description: "Oubliez les tracas des enregistrements manuels. Notre système intelligent vous enregistre automatiquement, vous offrant plus de temps pour vous détendre.",
  },
  {
    icon: Coffee,
    title: "Salons Aéroport Premium",
    description: "Échappez à l'agitation des terminaux. Profitez de nos salons exclusifs avec collations, Wi-Fi haut débit et espaces confortables pour vous relaxer.",
  },
  {
    icon: Ticket,
    title: "Accès Prioritaire Attractions",
    description: "Réservez votre place dans les attractions et musées les plus prisés. Des monuments emblématiques aux trésors cachés, ne manquez aucune expérience inoubliable.",
  },
  {
    icon: BookOpen,
    title: "Guides de Voyage Numériques",
    description: "Accédez à une collection de guides exclusifs remplis de conseils d'initiés, itinéraires détaillés et secrets locaux. Parfait pour préparer ou explorer en temps réel.",
  },
];

export const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-sand/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant max-w-5xl mx-auto">
          <img 
            src={travelFamily} 
            alt="Voyageurs heureux à l'aéroport" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nos Services Premium</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card border-border hover:shadow-elegant transition-smooth group"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
