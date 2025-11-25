import { Headphones, DollarSign, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Expert Support 24/7",
    description: "Real travel specialists available around the clock to assist you. No automated responses—just genuine expertise whenever you need it.",
    accent: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: DollarSign,
    title: "Unbeatable Value",
    description: "Through our carefully selected partners, enjoy the most competitive rates with premium quality. Complete transparency with zero hidden charges.",
    accent: "from-green-500/20 to-green-500/5",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600"
  },
  {
    icon: Shield,
    title: "Complete Peace of Mind",
    description: "Book with confidence using our flexible platform designed for a stress-free experience from start to finish.",
    accent: "from-purple-500/20 to-purple-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600"
  },
  {
    icon: Smartphone,
    title: "Cutting-Edge Platform",
    description: "Stay ahead with our innovative technology that transforms how you book and manage your travel experiences.",
    accent: "from-orange-500/20 to-orange-500/5",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600"
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-secondary/30 via-background to-sand/20 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border-4 border-primary/10 rounded-full"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 border-4 border-accent/10 rounded-3xl rotate-45"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exceptional offers with world-class service
          </p>
        </div>

        {/* Alternating cards layout */}
        <div className="max-w-6xl mx-auto space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Icon side */}
                <div className={`w-full md:w-1/3 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                  <div className={`relative group w-40 h-40 rounded-[2rem] bg-gradient-to-br ${feature.accent} backdrop-blur-sm border-2 border-border flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-20 h-20 rounded-2xl ${feature.iconBg} flex items-center justify-center`}>
                      <Icon className={`h-10 w-10 ${feature.iconColor}`} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent/20 rounded-full blur-xl"></div>
                  </div>
                </div>
                
                {/* Content side */}
                <div className="w-full md:w-2/3">
                  <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
                    <div className={`inline-block px-4 py-1 rounded-full ${feature.iconBg} ${feature.iconColor} text-sm font-semibold mb-4`}>
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
