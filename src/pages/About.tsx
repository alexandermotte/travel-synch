import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { bookingUrl } from "@/lib/booking";

const VALUES = [
  ["Independent operator", "We are not an airport, an airline or a franchise. We buy priority services and pass them to travellers who value the hour back."],
  ["One funnel, one truth", "Booking, payment and terms live in a single system. No duplicated small print, no conflicting prices."],
  ["Humans on the ground", "A concierge team in nine languages, on WhatsApp, around the clock — not an escalation queue."],
];

const About = () => {
  const { search } = useLocation();
  useEffect(() => {
    document.title = "ExecPass - About";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title="About Exec Pass — the operator behind Fast Track"
        description="Exec Pass is operated by Marvelliant B.V., Amsterdam. An independent airport priority operator serving frequent business travellers across 200+ airports."
        path="/about"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Exec Pass",
            legalName: "Marvelliant B.V.",
            url: "https://exec-pass.com",
            email: "contact@exec-pass.com",
            telephone: "+44 20 3936 2491",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bos en Lommerplein 280",
              postalCode: "1055RW",
              addressLocality: "Amsterdam",
              addressCountry: "NL",
            },
            sameAs: ["https://fasttrack.exec-pass.com/en"],
          },
        ]}
      />
      <ExecPassHeader />
      <main>
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 pt-20 pb-24 md:pt-24 md:pb-28">
            <div className="ep-mono text-flare-bright mb-8">ABOUT</div>
            <h1 className="ep-display text-bright text-[48px] md:text-[80px] leading-[1.0] max-w-4xl">
              The airport, solved.
            </h1>
            <p className="mt-8 max-w-prose text-[19px] text-steel">
              Exec Pass exists for the traveller who treats the terminal as a problem to be solved,
              not a place to linger. We buy priority at security, automate the check-in, and keep a
              human on the other end of the line when plans change.
            </p>
          </div>
        </section>

        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 py-24">
            <h2 className="ep-display text-ink text-[38px] md:text-[48px] max-w-3xl">
              How we work.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {VALUES.map(([title, body], i) => (
                <div key={title} className="p-8 ep-bg-concrete ep-shadow-soft" style={{ borderRadius: 20 }}>
                  <div className="ep-chip text-ink-muted mb-3">0{i + 1}</div>
                  <h3 className="ep-display text-[22px] text-ink">{title}</h3>
                  <p className="mt-3 text-[15px] text-ink-muted">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 ep-bg-concrete ep-shadow-soft max-w-2xl" style={{ borderRadius: 20 }}>
              <div className="ep-mono text-flare-ink mb-4">OPERATOR</div>
              <address className="not-italic text-[16px] text-ink leading-relaxed">
                MARVELLIANT B.V.<br />
                Bos en Lommerplein 280<br />
                1055RW Amsterdam, Netherlands
              </address>
              <p className="ep-chip text-ink-muted mt-4">KVK 96513519 · RSIN 867643298</p>
              <a
                href={bookingUrl("", search)}
                className="ep-btn-type text-[13px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-6 py-3 mt-8 ep-ease ep-press"
                style={{ borderRadius: 12 }}
              >
                Book Fast Track <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default About;
