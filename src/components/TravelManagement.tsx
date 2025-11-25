import { Calendar, CheckCircle, BarChart3, Shield } from "lucide-react";

export const TravelManagement = () => {
  const features = [
    { icon: Calendar, label: "Automated Scheduling", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30" },
    { icon: CheckCircle, label: "Instant Booking", color: "from-green-500/20 to-green-500/5", border: "border-green-500/30" },
    { icon: BarChart3, label: "Real-time Tracking", color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30" },
    { icon: Shield, label: "Secure Platform", color: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/30" }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex gap-2 items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Effortless Travel Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete visibility and control at your fingertips.
          </p>
        </div>
        
        {/* Diagonal grid layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-3xl p-8 border-2 ${feature.border} hover:scale-105 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-background/50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.label}</h3>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
