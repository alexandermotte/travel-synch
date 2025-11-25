import { Card } from "@/components/ui/card";
import { Headphones, DollarSign, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Expert Support 24/7",
    description: "Real travel specialists available around the clock to assist you. No automated responses—just genuine expertise whenever you need it.",
  },
  {
    icon: DollarSign,
    title: "Unbeatable Value",
    description: "Through our carefully selected partners, enjoy the most competitive rates with premium quality. Complete transparency with zero hidden charges.",
  },
  {
    icon: Shield,
    title: "Complete Peace of Mind",
    description: "Book with confidence using our flexible platform designed for a stress-free experience from start to finish.",
  },
  {
    icon: Smartphone,
    title: "Cutting-Edge Platform",
    description: "Stay ahead with our innovative technology that transforms how you book and manage your travel experiences.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-lg text-muted-foreground">Exceptional offers with world-class service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="relative p-8 bg-card border-2 border-border hover:border-accent transition-smooth group overflow-hidden">
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Number badge */}
              <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary/50">
                {index + 1}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
