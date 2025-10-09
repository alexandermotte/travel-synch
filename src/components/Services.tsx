import { Card } from "@/components/ui/card";
import { Sparkles, Zap, CheckCircle, Coffee, Ticket, BookOpen } from "lucide-react";
import travelFamily from "@/assets/travel-family.jpg";
import airportInterior from "@/assets/airport-interior.jpg";
import museumInterior from "@/assets/museum-interior.jpg";
import mobileCheckin from "@/assets/mobile-checkin.jpg";
import fastTrack from "@/assets/fast-track.jpg";
import premiumLoungeInterior from "@/assets/premium-lounge-interior.jpg";
import conciergeDesk from "@/assets/concierge-desk.jpg";
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
  return <section className="py-16 md:py-24 bg-gradient-to-b from-background to-sand/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Premium Services</h2>
        
        <div className="mb-12 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant max-w-5xl mx-auto">
          <img src={travelFamily} alt="Happy travelers at the airport" className="w-full h-full object-cover" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => <Card key={index} className="p-6 md:p-8 bg-card border-border hover:shadow-elegant transition-smooth group">
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant">
            <img src={fastTrack} alt="Modern airport fast track security with elegant design" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant">
            <img src={conciergeDesk} alt="Professional concierge assisting traveler at airport desk" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.slice(3).map((service, index) => <Card key={index + 3} className="p-6 md:p-8 bg-card border-border hover:shadow-elegant transition-smooth group">
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>)}
        </div>

        
      </div>
    </section>;
};