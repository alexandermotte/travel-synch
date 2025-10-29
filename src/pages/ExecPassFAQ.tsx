import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExecPassFAQ = () => {
  const faqs = [
    {
      question: "How does ExecPass work?",
      answer: "ExecPass is a subscription-based service that gives you access to fast track, flight check-in, lounge entry, attraction discounts, concierge support, and travel eBooks—all for just $79. We don't charge hidden fees or use cookies to inflate prices. Instead, we provide premium travel perks and personal assistance to help you enjoy smoother, faster, and more enjoyable trips. All your travel tools and benefits, in one secure place. Simple as that!"
    },
    {
      question: "When can I start enjoying my ExecPass benefits?",
      answer: "Right after subscribing to ExecPass, log in to your member zone using the email and password you used at sign-up. Once logged in, you'll get immediate access to fast track services, flight check-in support, lounge access, attraction discounts, concierge support, travel eBooks, and more—all designed to make your journey smoother and more enjoyable."
    },
    {
      question: "What's the 3-day trial?",
      answer: "Once you've subscribed to ExecPass, you have up to 3 days to change your mind. If you cancel your subscription within the 3 days following your purchase, you won't be charged the subscription fee. However, if you are happy with what we have to offer, after a trial, your subscription will be automatically activated."
    },
    {
      question: "Will my subscription be renewed automatically?",
      answer: "Yes, so you won't have to worry about handling it on your own! At the end of your subscription or trial period, we will charge the fee of $79 to the same card you used when subscribing to our service. You may cancel your subscription at any moment, so if you don't want to continue being our member, make sure you cancel before we take payment!"
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "You are to cancel your subscription at any time. To do so, simply visit this page or get in touch with our dedicated Customer Support team, they are available seven days a week to help you find all the answers. To avoid your subscription being renewed automatically, please ensure your cancellation happens before the end of your subscription or trial period."
    },
    {
      question: "Do I get unlimited discounts with my subscription?",
      answer: "Absolutely. You can use ExecPass services as often as you like during your subscription. From airport fast track to lounge access and concierge support, everything is available whenever you travel. Plus, our attraction discounts can be shared—everyone in your group can benefit. The more you use it, the more value you get!"
    }
  ];

  return (
    <div className="min-h-screen">
      <ExecPassHeader />
      
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQ</h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center bg-secondary/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Discover premium business travel with ExecPass</h2>
            <p className="text-muted-foreground mb-6">
              Enhance every trip with priority airport access, corporate perks, and dedicated 24/7 support—all streamlined through your personalized business travel dashboard.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/pre-checkout">Start Trial</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassFAQ;
