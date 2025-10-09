import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

const plans = [
  {
    id: "medium",
    name: "Essential",
    price: 49,
    period: "Every 3 months",
    description: "Smart travel made simple and stress-free",
    features: [
      "Up to 2 complimentary Fast-Track passes monthly",
      "Automatic check-in service included",
      "Priority access to select museums",
    ],
    highlighted: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 79,
    period: "Every 3 months",
    description: "Unlimited luxury travel experiences",
    features: [
      "Up to 5 complimentary Fast-Track passes monthly",
      "Unlimited automatic check-ins",
      "Unlimited skip-the-line museum access",
      "Exclusive lounge discounts at airports",
    ],
    highlighted: true,
  },
];

export const Pricing = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky/40 to-sand/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground mt-2">Select the membership that matches your travel lifestyle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 border-2 border-primary bg-primary/5 shadow-elegant"
            >
              <div className="text-center mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-4xl md:text-5xl font-bold">{formatPrice(plan.price)}</span>
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
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
                onClick={() => window.location.href = `/pre-checkout?plan=${plan.id}`}
              >
                Start Your Journey
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
