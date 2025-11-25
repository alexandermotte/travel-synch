import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";

export const CTA = () => {
  const benefits = [
    "Exclusive partner rates",
    "24/7 expert support",
    "Zero hidden fees",
    "Instant booking access"
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-sand/50 via-sky/50 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-primary/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA card with unique shape */}
          <div className="relative">
            {/* Background card with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-[3rem] blur-xl"></div>
            
            <div className="relative bg-card/80 backdrop-blur-xl rounded-[3rem] border-2 border-primary/30 p-12 md:p-16 shadow-2xl">
              {/* Decorative stars */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center rotate-12 shadow-lg">
                <Star className="h-8 w-8 text-accent-foreground fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center -rotate-12 shadow-lg">
                <Star className="h-6 w-6 text-primary-foreground fill-current" />
              </div>
              
              <div className="text-center mb-10">
                <div className="inline-block mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Unlock Travel Savings?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                  Access exclusive arrangements with continuous support from our travel specialists. Best rates guaranteed.
                </p>
                
                {/* Benefits grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-background/50 backdrop-blur-sm rounded-2xl p-4 border border-border hover:border-accent/50 transition-all group">
                      <Check className="h-5 w-5 text-accent mx-auto mb-2 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-medium block">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-7 text-xl shadow-elegant rounded-2xl group relative overflow-hidden"
                  onClick={() => window.location.href = '/pre-checkout'}
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
