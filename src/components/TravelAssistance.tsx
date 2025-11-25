import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Award, Globe, Clock, Shield } from "lucide-react";

export const TravelAssistance = () => {
  const highlights = [
    { icon: Zap, label: "Instant Solutions", color: "text-yellow-500" },
    { icon: Users, label: "Elite Partners", color: "text-blue-500" },
    { icon: Award, label: "Tailored Experience", color: "text-purple-500" }
  ];

  const stats = [
    { icon: Globe, value: "150+", label: "Countries" },
    { icon: Clock, value: "99.9%", label: "Uptime" },
    { icon: Shield, value: "100%", label: "Secure" }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Travel Assistance Reimagined
            </h2>
            
            {/* Icon highlights in a row */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-3 group">
                    <div className="w-20 h-20 rounded-2xl bg-card border-2 border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`h-10 w-10 ${item.color}`} />
                    </div>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Main content with side stats */}
          <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
            {/* Stats sidebar */}
            <div className="md:col-span-3 space-y-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-border text-center">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            {/* Content */}
            <div className="md:col-span-9">
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-10 border border-border space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We redefine travel planning. Our unified platform streamlines every aspect of travel management and booking, seamlessly connecting travelers with travel coordinators.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've elevated your travel experience through partnerships with world-class airports and luxury service providers. Automated check-in, fast track lanes, premium lounges, and exclusive concierge services ensure your journey is flawless and perfectly tailored to you.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our personalized support delivers unique vacation experiences focused on convenience and custom adventures, eliminating the need for you to search for optimal options yourself.
                </p>
                <div className="pt-4">
                  <p className="text-xl font-semibold text-foreground">
                    With Travel Synch, experience far more than traditional travel management companies can offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-7 text-lg shadow-elegant rounded-2xl group"
              onClick={() => window.location.href = '/pre-checkout'}
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
