import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCurrency } from "@/contexts/CurrencyContext";

const SubscriptionTerms = () => {
  const { formatPrice } = useCurrency();

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Subscription Terms</h1>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The subscription to Eudialyte Limited's services provides access to the following benefits:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
                <li>Airport Fast Tracks</li>
                <li>Automated Check-ins</li>
                <li>Travel eBooks</li>
                <li>Airport Lounges</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The subscription gives you access to the member area for 3 days free trial. At the end of this trial period, 
                the subscription at {formatPrice(49)} or {formatPrice(79)} every 3 months will apply. 
                Payment will be made by automatic debit on your credit card on the anniversary date.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                You can cancel the subscription at any time and without any conditions.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                To cancel your subscription, please contact our customer support:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
                <li>Phone: +44 203 936 0018</li>
                <li>Email: contact@my-trip-online.com</li>
                <li>Contact form: <a href="/contact" className="text-primary hover:underline">Contact page</a></li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Eudialyte Limited does not sell customers' information, and personal data is only used for communicating 
                with customers and providing the desired level of service.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Eudialyte Limited uses Payment Service Providers that adhere to the required PCI DSS security standards.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubscriptionTerms;
