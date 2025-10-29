import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SubscriptionTerms() {
  return (
    <div className="min-h-screen flex flex-col">
      <ExecPassHeader />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Subscription Terms</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-lg">
              The subscription to Marvelliant B.V's services provides access to the following benefits:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Airport Fast Tracks</li>
              <li>Automated Check-ins</li>
              <li>Travel eBooks</li>
              <li>Airport Lounges</li>
            </ul>

            <p className="text-base">
              The subscription gives you access to the member area for 3 days for free. At the end of this trial period, the monthly subscription at a price of $49 per month or at $79 every 3 months will apply. The payment will be made by automatic debit on your credit card every month on the anniversary date.
            </p>

            <p className="text-base font-semibold">
              You can cancel the subscription at any time and without any conditions.
            </p>

            <p className="text-base">
              To cancel your subscription, please contact our customer support by phone at{" "}
              <a href="tel:+442038567769" className="text-accent hover:underline">
                +4420 3856 7769
              </a>
              , by email at{" "}
              <a href="mailto:contact@exec-pass.com" className="text-accent hover:underline">
                contact@exec-pass.com
              </a>
              {" "}or through our{" "}
              <Link to="/contacts" className="text-accent hover:underline">
                contact form
              </Link>
            </p>

            <p className="text-base">
              Marvelliant B.V does not sell its customers' information, and personal data is only used for the purpose of communicating with customers and providing them with the desired level of service.
            </p>

            <p className="text-base">
              Marvelliant B.V uses Payment Service Providers that adhere to the required PCI DSS security standards.
            </p>

            <div className="mt-12 p-8 bg-muted rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Discover premium business travel with ExecPass</h2>
              <p className="text-base mb-6">
                Enhance every trip with priority airport access, corporate perks, and dedicated 24/7 support—all streamlined through your personalized business travel dashboard.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/services-pricing">Start Trial</Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-sm">
                <strong>Marvelliant B.V</strong><br />
                Bos en Lommerplein, 280<br />
                Amsterdam, 1055RW<br />
                Netherlands
              </p>
              <p className="text-sm mt-4">
                Email:{" "}
                <a href="mailto:contact@exec-pass.com" className="text-accent hover:underline">
                  contact@exec-pass.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <ExecPassFooter />
    </div>
  );
}
