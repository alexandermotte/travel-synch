import { Card } from "@/components/ui/card";
import { Headphones, DollarSign, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Great Online Support",
    description: "Our travel experts are available 24/7 to assist you with any travel questions. No bots, real people only.",
  },
  {
    icon: DollarSign,
    title: "Great Value",
    description: "By working with our hand picked partners, we offer you the lowest rates with a high quality service. Book with no hidden fees or any other charges.",
  },
  {
    icon: Shield,
    title: "Great Peace Of Mind",
    description: "Enjoy stress-free booking with maximum flexibility and easy-to-use platform.",
  },
  {
    icon: Smartphone,
    title: "Great Platform",
    description: "Don't get left behind with the current wave of technology, which is revolutionising the most efficient ways to book and manage travel.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground">Irresistible online offers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};
