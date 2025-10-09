import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, CheckCircle, Clock, Globe, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const fastTrackFeatures = [{
  icon: TrendingUp,
  title: "Convenience",
  description: "Access dedicated lane straight to the security checkpoint."
}, {
  icon: Globe,
  title: "Available Around The World",
  description: "Our Fast Track service is available in over 300 airports worldwide."
}, {
  icon: Clock,
  title: "Time - Saving",
  description: "Tired of waiting? Access to the boarding gate quicker and without rushing."
}];
const PreCheckout = () => {
  const {
    formatPrice,
    currency
  } = useCurrency();
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<string>("premium");
  const [activeTab, setActiveTab] = useState<string>("fast-track");
  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam === "medium" || planParam === "premium") {
      setSelectedPlan(planParam);
    }
  }, [searchParams]);
  const handleStartTrial = () => {
    const baseUrl = activeTab === "fast-track" ? "https://fast-track.my-trip-online.com" : "https://checkin.my-trip-online.com";
    const params = new URLSearchParams();
    params.append("currency", currency);
    if (selectedPlan === "medium") {
      params.append("product", "_3m_49");
    }
    window.location.href = `${baseUrl}/?${params.toString()}`;
  };
  const plans = [{
    id: "medium",
    name: "Medium",
    price: 49,
    period: "every 3 months",
    trial: "3 days free trial",
    cancel: "Cancel anytime",
    description: "Smart travel, frequent and hassle-free",
    features: ["Up to 2 free Fast-Track accesses per month", "Automated check-in included"]
  }, {
    id: "premium",
    name: "Premium",
    price: 79,
    period: "every 3 months",
    trial: "3 free days",
    cancel: "Cancel anytime",
    description: "",
    features: ["Up to 5 free Fast-Track accesses per month", "Unlimited automated check-ins", "Exclusive discounts on airport lounges"]
  }];
  return <div className="min-h-screen">
      <Header />

      <main>
        {/* What we can do for you */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-sky via-background to-sand">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What we can do for you
              </h1>
            </div>

            <Tabs defaultValue="fast-track" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="fast-track" className="text-base">Fast Track</TabsTrigger>
                <TabsTrigger value="check-in" className="text-base">Automated Check-In</TabsTrigger>
              </TabsList>

              <TabsContent value="fast-track" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {plans.map(plan => <Card key={plan.id} className={`p-8 bg-card border-2 transition-all cursor-pointer ${selectedPlan === plan.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`} onClick={() => setSelectedPlan(plan.id)}>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                          <div className="mb-4">
                            <div className="flex items-baseline mb-1">
                              <span className="text-3xl font-bold text-primary">{formatPrice(plan.price)}</span>
                              <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                            </div>
                            <p className="text-sm text-accent font-medium">{plan.trial}</p>
                            <p className="text-xs text-muted-foreground">{plan.cancel}</p>
                          </div>
                          {plan.description && <p className="text-muted-foreground mb-4">{plan.description}</p>}
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlan === plan.id ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                            {selectedPlan === plan.id && <div className="w-3 h-3 rounded-full bg-white"></div>}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>)}
                      </ul>
                    </Card>)}
                </div>

                {/* Fast Track Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
                  {fastTrackFeatures.map((feature, index) => <Card key={index} className="p-6 bg-card border-border text-center">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </Card>)}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-elegant transition-smooth" onClick={handleStartTrial}>
                    Start Free Trial
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="check-in" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {plans.map(plan => <Card key={plan.id} className={`p-8 bg-card border-2 transition-all cursor-pointer ${selectedPlan === plan.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`} onClick={() => setSelectedPlan(plan.id)}>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                          <div className="mb-4">
                            <div className="flex items-baseline mb-1">
                              <span className="text-3xl font-bold text-primary">{formatPrice(plan.price)}</span>
                              <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                            </div>
                            <p className="text-sm text-accent font-medium">{plan.trial}</p>
                            <p className="text-xs text-muted-foreground">{plan.cancel}</p>
                          </div>
                          {plan.description && <p className="text-muted-foreground mb-4">{plan.description}</p>}
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlan === plan.id ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                            {selectedPlan === plan.id && <div className="w-3 h-3 rounded-full bg-white"></div>}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>)}
                      </ul>
                    </Card>)}
                </div>

                {/* Automated Check-In Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Automated</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Forget the hassle of manual check-ins with our fully automated system.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Time Efficient</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Check in quickly and efficiently, giving you more time to relax.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Seamless Experience</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Enjoy a smooth journey from start to finish with zero stress.
                    </p>
                  </Card>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-elegant transition-smooth" onClick={handleStartTrial}>
                    Start Free Trial
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to save on your travel?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We make special travel arrangements with round the clock support by our travel specialists. Lowest price guaranteed.
              </p>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default PreCheckout;