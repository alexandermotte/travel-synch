import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { bookingUrl } from "@/lib/booking";

/** Pre-purchase questions only. Product and account questions live in the booking app. */
const FAQS = [
  {
    q: "What is Fast Track?",
    a: "A dedicated priority lane at airport security. You walk past the general queue and go straight through to airside.",
  },
  {
    q: "Which airports are covered?",
    a: "More than 200 airports in our network operate a Fast Track lane we can book. The booking app confirms availability for your terminal before you commit.",
  },
  {
    q: "What is included?",
    a: "Priority Fast Track security, access to 500+ airport lounges worldwide, automatic check-in with the boarding pass sent to your phone, and a 24/7 human concierge on WhatsApp.",
  },
  {
    q: "How does automatic check-in work?",
    a: "We watch the airline's check-in window and check you in the moment it opens, then send the boarding pass to your phone.",
  },
  {
    q: "Do I need to change how I book flights?",
    a: "No. Book flights however you already do, then add the flight details in the booking app and we handle the airport side.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Cancellation is handled in the booking app, and the full cancellation terms are set out in the Terms & Conditions and Subscription Terms there.",
  },
  {
    q: "How do I reach support?",
    a: "A human concierge is available 24/7 on WhatsApp, in nine languages, for changes, rebookings and ground logistics.",
  },
  {
    q: "Is Exec Pass an airport?",
    a: "No. Exec Pass is not affiliated with any airport. We are an independent operator that books priority services on your behalf.",
  },
];

const ExecPassFAQ = () => {
  const { search } = useLocation();
  const [open, setOpen] = useState(0);

  useEffect(() => {
    document.title = "ExecPass - FAQ";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title="Exec Pass FAQ — coverage, what's included, cancellation"
        description="Answers before you book: what Fast Track is, which airports are covered, what's included, how automatic check-in works and how to cancel."
        path="/faq"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <ExecPassHeader />
      <main>
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 pt-20 pb-24 md:pt-24 md:pb-28">
            <div className="ep-mono text-flare-bright mb-8">QUESTIONS</div>
            <h1 className="ep-display text-bright text-[48px] md:text-[80px] leading-[1.0] max-w-4xl">
              Answers, before you ask.
            </h1>
          </div>
        </section>

        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 py-24">
            <div className="max-w-3xl border-t border-line">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="border-b border-line">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left ep-ease"
                    >
                      <span className="ep-display text-ink text-[22px] md:text-[24px]">{f.q}</span>
                      <span className="ep-icon-plate shrink-0 mt-1">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-6 pr-16 text-[16px] text-ink-muted max-w-prose animate-ep-fade-up">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-14">
              <a
                href={bookingUrl("", search)}
                className="ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-8 py-4 ep-ease ep-press"
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

export default ExecPassFAQ;
