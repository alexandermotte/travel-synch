import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <ExecPassHeader />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-lg">
              Welcome to the privacy policy for www.exec-pass.com ("we", "us" or "our").
            </p>
            
            <p>
              We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website. If you have any question regarding our data policy, please contact us by email at contact@exec-pass.com.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">IMPORTANT INFORMATION AND WHO WE ARE</h2>
              
              <h3 className="text-xl font-semibold mb-3">Contact details</h3>
              <p>
                If you have any questions about this privacy policy, please contact our data privacy manager by emailing contact@exec-pass.com or writing to Marvelliant B.V - Bos en Lommerplein, 280, Amsterdam, 1055RW
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">THE DATA WE COLLECT ABOUT YOU</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, username, title, date of birth and gender</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers</li>
                <li><strong>Transaction Data:</strong> includes details of products and services you have purchased from us</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, login data, browser type and version</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">HOW WE USE YOUR PERSONAL DATA</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
                <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests</li>
                <li>Where we need to comply with a legal obligation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">DATA RETENTION</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for. By law, we have to keep basic information about our customers for six years after they cease being customers.
              </p>
              <p>
                All information from filled in applications that did not result in payment will be deleted within 48 hours.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                For the complete privacy policy or to exercise your rights, please contact us at contact@exec-pass.com
              </p>
            </div>
          </div>
        </div>
      </main>

      <ExecPassFooter />
    </div>
  );
}
