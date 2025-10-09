import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-blue">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Welcome to the privacy policy for my-trip-online.com. We respect your privacy and are committed 
              to protecting your personal data.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                My Trip Online is operated by Eudialyte Limited, registered in Cyprus. 
                For any questions regarding our data policy, contact us at contact@my-trip-online.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Identity information (name, email, phone number)</li>
                <li>Transaction data related to your bookings</li>
                <li>Technical data (IP address, browser type)</li>
                <li>Usage data (how you use our website)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use your data to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide and manage your subscription</li>
                <li>Process your bookings and transactions</li>
                <li>Communicate with you about services</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal data. 
                We use secure payment providers that comply with PCI DSS standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions or to exercise your rights, contact us at contact@my-trip-online.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
