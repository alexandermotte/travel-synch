import { Calendar, CheckCircle, BarChart3, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TravelManagement = () => {
  const features = [
    { icon: Calendar, label: "Automated Scheduling" },
    { icon: CheckCircle, label: "Instant Booking" },
    { icon: BarChart3, label: "Real-time Tracking" },
    { icon: Shield, label: "Secure Platform" }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-sky/50 to-sand/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Effortless Travel Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete visibility and control at your fingertips.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-smooth group">
                <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8" />
                </div>
                <p className="font-semibold text-sm">{feature.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
