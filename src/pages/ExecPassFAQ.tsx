import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { useCurrency } from "@/contexts/CurrencyContext";
import { preCheckoutPath } from "@/lib/booking";

/** Pre-purchase questions about the Exec Pass membership. Account questions live in the booking app. */
const buildFaqs = (price: (n: number) => string) => [
  {
    q: "How does Exec Pass work?",
    a: `Exec Pass is a travel membership. One subscription gives you access to Fast Track security, Smart Check-In, airport lounges, attraction ticket discounts, flight compensation and lost luggage claims, travel e-books and e-SIM connectivity.\n\nThere are no hidden fees and no inflated prices — you pay a flat membership fee of ${price(
      49,
    )} or ${price(79)} every 3 months and use the benefits whenever you travel.`,
  },
  {
    q: "What is the difference between Medium and Premium?",
    a: `Medium (${price(
      49,
    )} every 3 months) includes 2 Fast Track accesses per month, Smart Check-In, limited attraction discounts, 2 flight compensation and 2 lost luggage claims per quarter, and 1 e-SIM.\n\nPremium (${price(
      79,
    )} every 3 months) includes 5 Fast Track accesses per month, Smart Check-In, exclusive attraction and lounge discounts, unlimited compensation and lost luggage claims, travel e-books, and 2 e-SIMs plus a virtual phone number.`,
  },
  {
    q: "When can I start using my benefits?",
    a: "Straight away. Your membership starts with a 3-day free trial, and benefits activate after your first successful payment — simply book a Fast Track or a Smart Check-In to become an active member and everything else unlocks with it.",
  },
  {
    q: "Is this a one-time payment?",
    a: `No — Exec Pass is a membership, not a one-off purchase. After the 3-day free trial your plan renews automatically every 3 months at ${price(
      49,
    )} (Medium) or ${price(79)} (Premium), charged to the card you signed up with, so your benefits never lapse.`,
  },
  {
    q: "Will my membership renew automatically?",
    a: "Yes, so you don't have to think about it. At the end of each trial or billing period we charge the same card you subscribed with. You can cancel at any moment before the renewal date, with no cancellation fee.",
  },
  {
    q: "Can I cancel at any time?",
    a: "You are free to cancel whenever you like. Use the cancellation page or contact our support team, available seven days a week. To avoid automatic renewal, make sure your cancellation is completed before the end of the current trial or billing period.",
  },
  {
    q: "Do I need to change how I book flights?",
    a: "No. Keep booking flights however you already do. Add the flight details to your member area and we handle the airport side — security, check-in, lounge access and claims.",
  },
  {
    q: "Which airports are covered?",
    a: "Fast Track is available at more than 200 airports and lounge access at 500+ locations worldwide. Availability for your specific terminal is confirmed before you complete any booking.",
  },
  {
    q: "How do I reach support?",
    a: "A human concierge is available seven days a week for changes, rebookings and ground logistics, and you can always write to contact@exec-pass.com.",
  },
  {
    q: "Is Exec Pass an airline or an airport?",
    a: "No. Exec Pass is an independent travel membership operated by Marvelliant B.V. and is not affiliated with any airline or airport authority. We book priority travel services on your behalf.",
  },
];


const ExecPassFAQ = () => {
  const { search } = useLocation();
  const { formatPrice } = useCurrency();
  const faqs = buildFaqs(formatPrice);
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
            mainEntity: faqs.map((f) => ({
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
              {faqs.map((f, i) => {
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
              <Link
                to={preCheckoutPath(undefined, search)}
                className="ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-8 py-4 ep-ease ep-press"
                style={{ borderRadius: 12 }}
              >
                Join Exec Pass <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassFAQ;
