import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-blue">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. These Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These are the terms and conditions on which we supply our services to you. Please read these terms carefully before you submit your order to us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information About Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are my-trip-online.com, operated by Eudialyte Limited, registered in Cyprus under company number HE 416378.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Registered office: Vladimirou Kafkaridi 2A, Nicosia, 2202, Cyprus
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Email: contact@my-trip-online.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Our Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We offer:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Concierge services</li>
                <li>Airport Fast Track booking service</li>
                <li>Automated flight Check-In service</li>
                <li>General admin support for travel arrangements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Subscription</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When subscribing, you choose a plan with a trial period and subscription fee. The first fee is due at the end of the trial period.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You can cancel your subscription at any time via our website, member zone, or by contacting customer support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have 14 days after registration to cancel your account. Once we have provided any part of the services, you cannot change your mind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions or complaints, email us at contact@my-trip-online.com or call +44 203 936 0018.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">Last updated: March 2024</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
