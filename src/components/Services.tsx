import { Card } from "@/components/ui/card";
import { Sparkles, Zap, CheckCircle, Coffee, Ticket, BookOpen } from "lucide-react";

const services = [{
  icon: Sparkles,
  title: "Personal Concierge",
  description: "Your dedicated travel assistant handles every detail from bookings to transport, delivering a completely stress-free experience tailored to your preferences."
}, {
  icon: Zap,
  title: "Fast Track Access",
  description: "Bypass the queues and breeze through airport procedures. Experience a seamless departure with our priority processing service."
}, {
  icon: CheckCircle,
  title: "Smart Check-In",
  description: "Say goodbye to manual check-ins. Our intelligent system handles everything automatically, giving you more time to prepare for your trip."
}, {
  icon: Coffee,
  title: "Premium Lounges",
  description: "Escape the terminal chaos. Relax in exclusive lounges featuring refreshments, high-speed internet, and comfortable spaces before your flight."
}, {
  icon: Ticket,
  title: "Skip-the-Line Tickets",
  description: "Gain instant access to world-class attractions and museums. From famous landmarks to hidden treasures, experience it all without the wait."
}, {
  icon: BookOpen,
  title: "Digital Travel Guides",
  description: "Unlock curated guides packed with insider knowledge, detailed itineraries, and local secrets. Perfect for both planning and on-the-go exploration."
}];

export const Services = () => {
  const ServiceIcon0 = services[0].icon;
  const ServiceIcon1 = services[1].icon;
  const ServiceIcon2 = services[2].icon;
  const ServiceIcon3 = services[3].icon;
  const ServiceIcon4 = services[4].icon;
  const ServiceIcon5 = services[5].icon;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-sand/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Premium Services</h2>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {/* Large featured cards */}
          <Card className="md:col-span-3 p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/20 hover:shadow-elegant transition-smooth group">
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
              <ServiceIcon0 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{services[0].title}</h3>
            <p className="text-muted-foreground leading-relaxed">{services[0].description}</p>
          </Card>
          
          <Card className="md:col-span-3 p-8 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/20 hover:shadow-elegant transition-smooth group">
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-accent/20 text-accent group-hover:scale-110 transition-transform">
              <ServiceIcon1 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{services[1].title}</h3>
            <p className="text-muted-foreground leading-relaxed">{services[1].description}</p>
          </Card>
          
          {/* Medium cards */}
          <Card className="md:col-span-2 p-6 bg-card border-border hover:shadow-elegant transition-smooth group">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
              <ServiceIcon2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{services[2].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{services[2].description}</p>
          </Card>
          
          <Card className="md:col-span-2 p-6 bg-card border-border hover:shadow-elegant transition-smooth group">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
              <ServiceIcon3 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{services[3].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{services[3].description}</p>
          </Card>
          
          <Card className="md:col-span-2 p-6 bg-card border-border hover:shadow-elegant transition-smooth group">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
              <ServiceIcon4 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{services[4].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{services[4].description}</p>
          </Card>
          
          {/* Full width card */}
          <Card className="md:col-span-6 p-8 bg-gradient-to-r from-secondary/30 to-sand/30 border-border hover:shadow-elegant transition-smooth group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-accent/20 text-accent group-hover:scale-110 transition-transform">
                <ServiceIcon5 className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{services[5].title}</h3>
                <p className="text-muted-foreground leading-relaxed">{services[5].description}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};