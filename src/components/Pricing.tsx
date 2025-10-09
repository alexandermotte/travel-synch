import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Medium",
    price: "$49",
    period: "Every 3 months",
    description: "Smart travel, frequent and hassle-free",
    features: [
      "Up to 2 free Fast-Track accesses per month",
      "Automated check-in included",
      "Priority entry to selected museums",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$79",
    period: "Every 3 months",
    description: "",
    features: [
      "Up to 5 free Fast-Track accesses per month",
      "Unlimited automated check-ins",
      "Unlimited skip-the-line museum entries",
      "Exclusive discounts on airport lounges",
    ],
    highlighted: true,
  },
];

export const Pricing = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 md:p-10 ${
                plan.highlighted
                  ? "border-2 border-primary bg-primary/5 shadow-elegant"
                  : "bg-card border-border"
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{plan.period}</p>
                {plan.description && (
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
                size="lg"
              >
                Try Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
