import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useCurrency } from "@/contexts/CurrencyContext";

const FAQ = () => {
  const { formatPrice } = useCurrency();

  const faqs = [
    {
      question: "How does My Trip Online work?",
      answer: `My Trip Online is a subscription-based service that gives you access to fast track, flight check-in, lounge entry, attraction discounts, concierge support, and travel eBooks—all for just ${formatPrice(79)}. We don't charge hidden fees. Instead, we provide premium travel perks and personal assistance to help you enjoy smoother, faster, and more enjoyable trips.`,
    },
    {
      question: "When can I start enjoying my My Trip Online benefits?",
      answer: "Right after subscribing to My Trip Online, log in to your member zone using the email and password you used at sign-up. Once logged in, you'll get immediate access to fast track services, flight check-in support, lounge access, attraction discounts, concierge support, travel eBooks, and more.",
    },
    {
      question: "Will my subscription be renewed automatically?",
      answer: `Yes! At the end of your subscription or trial period, we will charge the fee of ${formatPrice(79)} to the same card you used when subscribing. You may cancel your subscription at any moment before we take payment.`,
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. Simply visit the unsubscribe page or contact our Customer Support team, available seven days a week. To avoid automatic renewal, ensure your cancellation happens before the end of your subscription or trial period.",
    },
    {
      question: "Do I get unlimited discounts with my subscription?",
      answer: "Absolutely. You can use My Trip Online services as often as you like during your subscription. From airport fast track to lounge access and concierge support, everything is available whenever you travel. Plus, our attraction discounts can be shared with your group. The more you use it, the more value you get!",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">FAQ</h1>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 md:p-8 bg-card border-border">
                  <h2 className="text-xl font-semibold mb-4">{faq.question}</h2>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-secondary/30 border-border text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our customer support team is here to help you every day from 9 AM to 8 PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+442039360018"
                  className="text-primary hover:underline font-medium"
                >
                  +44 203 936 0018
                </a>
                <span className="hidden sm:inline text-muted-foreground">|</span>
                <a
                  href="mailto:contact@my-trip-online.com"
                  className="text-primary hover:underline font-medium"
                >
                  contact@my-trip-online.com
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
