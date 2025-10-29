import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SubscriptionTerms() {
  useEffect(() => {
    document.title = "ExecPass - Subscription Terms";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ExecPassHeader />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Subscription Terms</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-base">
              The subscription to Marvelliant B.V's services provides access to the following benefits:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>Airport Fast Tracks</li>
              <li>Automated Check-ins</li>
              <li>Travel eBooks</li>
              <li>Airport Lounges</li>
            </ul>

            <p className="text-base">
              The subscription gives you access to the member area for 3 days for free. At the end of this trial period, the monthly subscription at a price of $49 per month or at $79 every 3 months will apply. The payment for the latter will be made by automatic debit on your credit card every month on the anniversary date.
            </p>

            <p className="text-base font-semibold">
              You can cancel the subscription at any time and without any conditions.
            </p>

            <p className="text-base">
              To cancel your subscription, please contact our customer support:
            </p>

            <ul className="list-none pl-0 space-y-1 text-base">
              <li>
                Phone:{" "}
                <a href="tel:+442038567769" className="text-accent hover:underline">
                  +4420 3856 7769
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:contact@exec-pass.com" className="text-accent hover:underline">
                  contact@exec-pass.com
                </a>
              </li>
              <li>
                Unsubscribe form:{" "}
                <Link to="/unsubscribe" className="text-accent hover:underline">
                  https://exec-pass.com/unsubscribe
                </Link>
              </li>
            </ul>

            <p className="text-base">
              Marvelliant B.V does not sell customers' information, and personal data is only used for communicating with customers and providing the desired level of service.
            </p>

            <p className="text-base">
              Marvelliant B.V uses Payment Service Providers that adhere to the required PCI DSS security standards.
            </p>
          </div>
        </div>
      </main>

      <ExecPassFooter />
    </div>
  );
}
