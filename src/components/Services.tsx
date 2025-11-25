import { Sparkles, Zap, CheckCircle, Coffee, Ticket, BookOpen } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Personal Concierge",
    description: "Your dedicated travel assistant handles every detail from bookings to transport, delivering a completely stress-free experience tailored to your preferences.",
    size: "large"
  },
  {
    icon: Zap,
    title: "Fast Track Access",
    description: "Bypass the queues and breeze through airport procedures. Experience a seamless departure with our priority processing service.",
    size: "large"
  },
  {
    icon: CheckCircle,
    title: "Smart Check-In",
    description: "Say goodbye to manual check-ins. Our intelligent system handles everything automatically, giving you more time to prepare for your trip.",
    size: "medium"
  },
  {
    icon: Coffee,
    title: "Premium Lounges",
    description: "Escape the terminal chaos. Relax in exclusive lounges featuring refreshments, high-speed internet, and comfortable spaces before your flight.",
    size: "medium"
  },
  {
    icon: Ticket,
    title: "Skip-the-Line Tickets",
    description: "Gain instant access to world-class attractions and museums. From famous landmarks to hidden treasures, experience it all without the wait.",
    size: "medium"
  },
  {
    icon: BookOpen,
    title: "Digital Travel Guides",
    description: "Unlock curated guides packed with insider knowledge, detailed itineraries, and local secrets. Perfect for both planning and on-the-go exploration.",
    size: "wide"
  }
];

export const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-sand/30 via-background to-sky/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Services</h2>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>
        
        {/* Masonry-style grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Row 1 - Two large cards */}
          <div className="md:col-span-6 group relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm rounded-[2rem] p-10 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute top-6 right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{services[0].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{services[0].description}</p>
            </div>
          </div>
          
          <div className="md:col-span-6 group relative bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-sm rounded-[2rem] p-10 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10">
            <div className="absolute top-6 right-6 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{services[1].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{services[1].description}</p>
            </div>
          </div>
          
          {/* Row 2 - Three medium cards */}
          <div className="md:col-span-4 group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <CheckCircle className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3">{services[2].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{services[2].description}</p>
          </div>
          
          <div className="md:col-span-4 group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl md:translate-y-12">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <Coffee className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-3">{services[3].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{services[3].description}</p>
          </div>
          
          <div className="md:col-span-4 group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <Ticket className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3">{services[4].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{services[4].description}</p>
          </div>
          
          {/* Row 3 - One wide card */}
          <div className="md:col-span-12 group relative bg-gradient-to-r from-secondary/30 via-sand/30 to-sky/30 backdrop-blur-sm rounded-[2rem] p-10 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="h-10 w-10 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{services[5].title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{services[5].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
