import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

export const Hero = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-sand via-background to-sky">
      <div className="container mx-auto px-4 py-16">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-40 right-20 w-40 h-40 border-4 border-primary/20 rounded-3xl rotate-12"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 border-4 border-accent/20 rounded-full"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Main content in asymmetric layout */}
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex gap-3 mb-6">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <div className="w-8 h-1 bg-accent rounded-full"></div>
                <div className="w-4 h-1 bg-primary/50 rounded-full"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Experience
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Travel Without
                </span>
                Limits
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Transform your journey with Travel Synch. Access premium travel services and exclusive rates starting at just {formatPrice(49)} per quarter.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-7 text-lg shadow-elegant"
                  onClick={() => window.location.href = '/pre-checkout'}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-10 py-7 text-lg border-2"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Stats cards in vertical arrangement */}
            <div className="col-span-12 lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-3xl p-6 border border-primary/20 transform lg:translate-x-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Expert Support</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm rounded-3xl p-6 border border-accent/20 transform lg:-translate-x-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent">100+</div>
                    <div className="text-sm text-muted-foreground">Airports Worldwide</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-3xl p-6 border border-primary/20 transform lg:translate-x-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
