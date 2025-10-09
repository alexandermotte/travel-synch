import { Card } from "@/components/ui/card";
import { Sparkles, Zap, CheckCircle, Coffee, Ticket, BookOpen } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Concierge Service",
    description: "Our bespoke concierge service caters to your every need, from making essential reservations to arranging seamless transportation, ensuring a worry-free journey.",
  },
  {
    icon: Zap,
    title: "Fast Track",
    description: "Skip the lines with our fast track service. We expedite your airport formalities, making your travel experience smoother and more enjoyable.",
  },
  {
    icon: CheckCircle,
    title: "Automated Check-In",
    description: "Forget the hassle of manual check-ins. Our automated system ensures you're checked in quickly and efficiently, giving you more time to relax and prepare for your journey.",
  },
  {
    icon: Coffee,
    title: "Airport Lounges",
    description: "Enjoy comfort away from crowds. Our lounges offer a serene escape with snacks, Wi-Fi, and more for a relaxing travel experience.",
  },
  {
    icon: Ticket,
    title: "Ticketline to Attractions",
    description: "Secure your spot at top attractions and museums with ease. From iconic landmarks to hidden gems, we make sure you don't miss out on unforgettable experiences.",
  },
  {
    icon: BookOpen,
    title: "Travel E-books",
    description: "Access curated travel e-books filled with insider tips, destination guides and local insights. Perfect for planning ahead or exploring on the go.",
  },
];

export const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-sand/30">
      <div className="container mx-auto px-4">
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
