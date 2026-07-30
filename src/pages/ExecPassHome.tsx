import PricingDisclaimer from "@/components/PricingDisclaimer";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCurrency } from "@/contexts/CurrencyContext";
import {
  ArrowRight,
  Plane,
  ScanLine,
  Armchair,
  MessageCircle,
  Check,
  Plus,
  Minus,
  Ticket,
  Luggage,
  Wifi,
  BadgeEuro,
  BookOpen,
  Zap,
  Crown,
} from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { preCheckoutPath } from "@/lib/booking";

/* --------------------------------- Hero --------------------------------- */
const Hero = () => {
  const { search } = useLocation();
  return (
    <section className="ep-bg-paper">
      <div className="mx-auto max-w-container px-6 pt-8 pb-16">
        <div
          className="grid lg:grid-cols-2 overflow-hidden ep-shadow-soft"
          style={{ borderRadius: 24 }}
        >
          {/* Brand panel */}
          <div
            className="relative p-10 md:p-14 flex flex-col justify-between min-h-[420px] lg:min-h-[600px]"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--ep-void)) 0%, hsl(var(--ep-graphite)) 60%, hsl(var(--ep-graphite-2)) 100%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, transparent 0 58px, hsl(var(--ep-bright)) 58px 59px)",
              }}
            />
            <div className="relative">
              <span className="ep-chip inline-flex items-center rounded-full border border-line-dark px-4 py-1.5 text-bright/85 uppercase tracking-[0.16em]">
                The travel membership · Worldwide
              </span>
            </div>
            <div className="relative mt-16">
              <div className="ep-mono text-flare-bright mb-6">ONE SUBSCRIPTION · EVERY JOURNEY</div>
              <div className="ep-display text-bright text-[64px] md:text-[88px] leading-[0.95]">
                Exec
                <br />
                Pass<span className="text-flare">.</span>
              </div>
              <p className="mt-5 text-[17px] text-steel italic" style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                Fly clever.
              </p>
            </div>
          </div>

          {/* Action panel */}
          <div className="ep-bg-void p-10 md:p-14 flex flex-col justify-center">
            <div className="ep-mono text-flare-bright mb-6">◆ TRAVEL, MEMBERSHIP-STYLE</div>
            <h1 className="ep-display text-[44px] md:text-[56px] leading-[1.0]">
              <span className="text-bright">Every travel perk.</span>{" "}
              <span className="text-flare">One membership.</span>
            </h1>
            <p className="mt-6 text-[17px] text-steel max-w-prose">
              Exec Pass is the travel subscription that handles the tedious parts of flying — fast
              track security, automatic check-in, lounges, compensation claims, luggage recovery and
              global data — with a human concierge behind all of it. Two plans, one goal: fly clever.
            </p>

            <Link
              to={preCheckoutPath(undefined, search)}
              className="mt-10 ep-btn-type text-[14px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-8 py-4 inline-flex items-center justify-center gap-3 ep-ease ep-press rounded-full"
            >
              Join Exec Pass <ArrowRight size={16} />
            </Link>
            <p className="mt-4 text-[13px] text-steel text-center">
              Secure · Instant confirmation · 24/7 human support
            </p>
            <div className="mt-6 text-center">
              <Link to="/how-it-works" className="ep-mono text-bright hover:text-flare-bright ep-ease">
                See how it works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------ Stats strip ----------------------------- */
const STATS = [
  ["100,000+", "Travellers served across our network"],
  ["200+", "Airports in our network"],
  ["500+", "Lounges available worldwide"],
  ["24/7", "Human concierge support"],
];

const StatsStrip = () => (
  <section className="ep-bg-paper">
    <div className="mx-auto max-w-container px-6 pb-16">
      <div className="ep-mono text-flare-ink text-center mb-8">EXEC PASS, IN NUMBERS</div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(([value, label]) => (
          <div
            key={label}
            className="ep-bg-concrete ep-shadow-soft p-8"
            style={{ borderRadius: 20 }}
          >
            <div className="ep-heading text-[34px] text-ink leading-none">{value}</div>
            <div className="mt-3 ep-mono text-ink-muted">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* -------------------------------- Services ------------------------------ */
const services = [
  {
    icon: Plane,
    name: "Fast Track security",
    body: "A dedicated priority lane at every included terminal — past the general queue, straight through.",
  },
  {
    icon: ScanLine,
    name: "Automatic check-in",
    body: "We check you in the moment the airline opens the window, and send the boarding pass to your phone.",
  },
  {
    icon: Armchair,
    name: "500+ airport lounges",
    body: "Member rates on more than five hundred lounges worldwide, booked from the same place as your lane.",
  },
  {
    icon: BadgeEuro,
    name: "Flight compensation",
    body: "Delayed, cancelled or bumped? We file the claim and chase the airline for what you're owed.",
  },
  {
    icon: Luggage,
    name: "Luggage recovery",
    body: "Bags gone missing? We take over tracking and the claims paperwork until they're back with you.",
  },
  {
    icon: Wifi,
    name: "eSIM data abroad",
    body: "Instant mobile data on landing — no SIM swaps, no roaming bills, activated before you taxi in.",
  },
  {
    icon: Ticket,
    name: "Attractions & museums",
    body: "Member pricing and skip-the-line entry at landmarks, museums and experiences in the cities you fly to.",
  },
  {
    icon: BookOpen,
    name: "Travel guides & e-books",
    body: "Curated destination guides with insider routes, timings and local detail for the places you land in.",
  },
  {
    icon: MessageCircle,
    name: "24/7 human concierge",
    body: "A specialist on WhatsApp around the clock for changes, rebookings and ground logistics. Not a chatbot.",
  },
];

const Services = () => (
  <section className="ep-bg-paper">
    <div className="mx-auto max-w-container px-6 pb-24 md:pb-32">
      <div className="ep-mono text-flare-ink mb-6">01 / WHAT MEMBERSHIP INCLUDES</div>
      <h2 className="ep-heading text-ink text-[44px] md:text-[64px] max-w-3xl">
        Everything you need, in one membership.
      </h2>
      <p className="mt-6 max-w-prose text-[17px] text-ink-muted">
        Nine travel services that would normally mean nine accounts, nine invoices and nine support
        queues. With Exec Pass they sit behind a single subscription.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.name}
            className="p-8 ep-bg-concrete ep-shadow-soft ep-ease"
            style={{ borderRadius: 20 }}
          >
            <div className="ep-icon-plate mb-6">
              <s.icon size={20} strokeWidth={2} />
            </div>
            <div className="ep-mono text-ink-muted mb-2">0{i + 1}</div>
            <h3 className="ep-heading text-[22px] text-ink">{s.name}</h3>
            <p className="mt-3 text-[15px] text-ink-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link to="/how-it-works" className="ep-mono text-flare-ink hover:text-ink ep-ease">
          How it works →
        </Link>
      </div>
    </div>
  </section>
);

/* -------------------------------- Plans --------------------------------- */
const plans = [
  {
    id: "medium",
    name: "Medium",
    icon: Zap,
    price: 49,
    period: "every 3 months",
    tagline: "For the traveller who flies a few times a quarter.",
    highlight: false,
    features: [
      "2 Fast Track accesses per month",
      "Automatic check-in included",
      "Member rates on 500+ lounges",
      "2 flight compensation claims per quarter",
      "2 luggage recovery claims per quarter",
      "1 eSIM for data abroad",
      "24/7 concierge on WhatsApp",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    icon: Crown,
    price: 79,
    period: "every 3 months",
    tagline: "For the frequent flyer who lives out of a terminal.",
    highlight: true,
    features: [
      "5 Fast Track accesses per month",
      "Automatic check-in included",
      "Best member rates on 500+ lounges",
      "Unlimited flight compensation claims",
      "Unlimited luggage recovery claims",
      "2 eSIMs plus virtual number",
      "Discounted attraction & museum tickets",
      "Curated travel e-books & guides",
      "Priority 24/7 concierge",
    ],
  },
];

const Plans = () => {
  const { search } = useLocation();
  const { formatPrice } = useCurrency();
  return (
    <section className="ep-bg-paper border-y border-line">
      <div className="mx-auto max-w-container px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="ep-mono text-flare-ink mb-6">02 / TWO WAYS TO FLY CLEVER</div>
          <h2 className="ep-heading text-ink text-[40px] md:text-[56px]">
            Pick your membership.
          </h2>
          <p className="mt-6 text-[17px] text-ink-muted">
            Both plans are billed as a simple travel subscription and can be cancelled at any time.
            Current pricing and terms are shown before you confirm.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`relative p-8 md:p-10 flex flex-col ep-shadow-soft ${
                p.highlight ? "ep-bg-void" : "ep-bg-concrete"
              }`}
              style={{ borderRadius: 24 }}
            >
              {p.highlight && (
                <span className="ep-chip absolute top-6 right-6 rounded-full bg-flare text-white px-3 py-1 uppercase tracking-[0.14em]">
                  Most chosen
                </span>
              )}
              <div className="flex items-center gap-3 mb-6">
                <div className="ep-icon-plate">
                  <p.icon size={20} strokeWidth={2} />
                </div>
                <div className={`ep-mono ${p.highlight ? "text-flare-bright" : "text-ink-muted"}`}>
                  {p.name.toUpperCase()}
                </div>
              </div>

              <h3 className={`ep-heading text-[26px] ${p.highlight ? "text-bright" : "text-ink"}`}>
                {p.tagline}
              </h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className={`ep-heading text-[40px] leading-none ${p.highlight ? "text-bright" : "text-ink"}`}
                >
                  {formatPrice(p.price)}
                </span>
                <span className={`text-[14px] ${p.highlight ? "text-steel" : "text-ink-muted"}`}>
                  {p.period}
                </span>
              </div>
              <p className={`mt-2 text-[13px] ${p.highlight ? "text-steel" : "text-flare-ink"}`}>
                3-day free trial · Cancel anytime
              </p>

              <ul className="mt-8 space-y-3.5 flex-grow">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-1 shrink-0 ${p.highlight ? "text-flare-bright" : "text-flare-ink"}`}
                    />
                    <span className={`text-[15px] ${p.highlight ? "text-steel" : "text-ink-muted"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={preCheckoutPath(p.id as "medium" | "premium", search)}
                className={`mt-10 ep-btn-type text-[13px] uppercase tracking-wider px-6 py-4 inline-flex items-center justify-center gap-3 ep-ease ep-press rounded-full ${
                  p.highlight
                    ? "bg-flare hover:bg-flare-bright text-white"
                    : "bg-flare/10 text-flare-ink hover:bg-flare hover:text-white"
                }`}
              >
                Choose {p.name} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        <PricingDisclaimer className="mt-8 mx-auto" />
      </div>
    </section>
  );
};

/* -------------------------- Difference / comparison --------------------- */
const Difference = () => (
  <section className="ep-bg-paper border-b border-line">
    <div className="mx-auto max-w-container px-6 py-24">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="ep-mono text-flare-ink mb-6">03 / DIFFERENCE</div>
          <h2 className="ep-heading text-ink text-[38px] md:text-[48px]">
            One brand for the whole journey.
          </h2>
          <p className="mt-6 text-[16px] text-ink-muted max-w-prose">
            Travelling well is usually a stack of separate services. Exec Pass replaces the stack
            with a membership.
          </p>
        </div>
        <div className="md:col-span-8">
          <div
            className="grid grid-cols-3 border border-line ep-bg-concrete overflow-hidden"
            style={{ borderRadius: 20 }}
          >
            <div className="p-5 ep-mono text-ink-muted border-b border-line">TRAVEL TASK</div>
            <div className="p-5 ep-mono text-ink-muted border-b border-l border-line">ON YOUR OWN</div>
            <div className="p-5 ep-mono text-flare-ink border-b border-l border-line">WITH EXEC PASS</div>

            {[
              ["Security lane", "General queue", "Fast Track priority"],
              ["Check-in", "You, at the desk", "Automatic, on your phone"],
              ["Lounges", "Third-party sites", "500+ at member rates"],
              ["Delayed flight", "Airline claim forms", "We file and chase it"],
              ["Lost luggage", "Endless follow-ups", "We handle the claim"],
              ["Data abroad", "Roaming charges", "eSIM included"],
              ["Change of plans", "Hold music", "Concierge on WhatsApp"],
            ].map(([label, a, b], i, arr) => (
              <div key={label} className="contents">
                <div className={`p-5 text-[15px] text-ink ${i < arr.length - 1 ? "border-b border-line" : ""}`}>{label}</div>
                <div className={`p-5 text-[15px] text-ink-muted border-l border-line ${i < arr.length - 1 ? "border-b" : ""}`}>{a}</div>
                <div className={`p-5 text-[15px] text-ink border-l border-line ${i < arr.length - 1 ? "border-b" : ""}`}>
                  <span className="inline-flex items-center gap-2">
                    <Check size={14} className="text-flare-ink" /> {b}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* --------------------------------- FAQ ---------------------------------- */
const faqs = [
  {
    q: "What is Exec Pass?",
    a: "A travel membership. One subscription covers Fast Track security, automatic check-in, lounge access, compensation and luggage claims, eSIM data, attraction tickets and a 24/7 human concierge.",
  },
  {
    q: "What is the difference between the two plans?",
    a: "Medium suits travellers flying a few times a quarter: 2 Fast Track accesses a month, check-in, lounge rates, one eSIM and a capped number of claims. Premium is built for frequent flyers: 5 Fast Track accesses a month, unlimited compensation and luggage claims, two eSIMs, ticket discounts and priority concierge.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Exec Pass is a rolling travel subscription you can cancel at any time from your member area. The full terms are shown before you confirm.",
  },
  {
    q: "Which airports are covered?",
    a: "More than 200 airports in our network operate a Fast Track lane we can book, and over 500 lounges are available to members. Coverage is shown before you confirm each booking.",
  },
  {
    q: "How do I reach support?",
    a: "A human concierge is available 24/7 on WhatsApp, in nine languages, for changes, rebookings, claims and ground logistics.",
  },
  {
    q: "Is Exec Pass an airport or an airline?",
    a: "No. Exec Pass is not affiliated with any airport or airline. We are an independent travel brand that arranges priority services on your behalf.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="ep-bg-paper">
      <div className="mx-auto max-w-container px-6 py-24 md:py-32">
        <div className="ep-mono text-flare-ink mb-6">04 / QUESTIONS</div>
        <h2 className="ep-heading text-ink text-[44px] md:text-[56px] max-w-3xl">
          Answers, before you ask.
        </h2>

        <div className="mt-14 max-w-3xl border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left ep-ease"
                >
                  <span className="ep-heading text-ink text-[22px] md:text-[24px]">{f.q}</span>
                  <span className="ep-icon-plate shrink-0 mt-1">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-16 text-[16px] text-ink-muted max-w-prose animate-ep-fade-up">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* --------------------------- Closing CTA band --------------------------- */
const ClosingCTA = () => {
  const { search } = useLocation();
  return (
  <section className="ep-bg-void ep-wash-void">
    <div className="mx-auto max-w-container px-6 py-28 md:py-32">
      <div className="ep-mono text-flare-bright mb-8">READY WHEN YOU ARE</div>
      <h2 className="ep-heading text-bright text-[48px] md:text-[88px] max-w-4xl leading-[1.0]">
        The airport, handled.<br />Fly clever.
      </h2>
      <p className="mt-8 max-w-prose text-[19px] text-steel">
        One membership takes care of security, check-in, lounges, claims and connectivity —
        so you walk in late and still make the gate.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link
          to={preCheckoutPath(undefined, search)}
          className="ep-btn-type text-[14px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-8 py-4 inline-flex items-center gap-3 ep-ease ep-press rounded-full"
        >
          Join Exec Pass <ArrowRight size={16} />
        </Link>
        <Link to="/how-it-works" className="ep-mono text-bright hover:text-flare-bright ep-ease">
          See how it works →
        </Link>
      </div>
    </div>
  </section>
  );
};

/* ---------------------------------- Page --------------------------------- */
const ExecPassHome = () => {
  useEffect(() => {
    document.title = "ExecPass - Fly clever.";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title="Exec Pass — the travel membership that helps you fly clever"
        description="One travel subscription: Fast Track security at 200+ airports, automatic check-in, 500+ lounges, flight compensation, luggage recovery, eSIM data and a 24/7 concierge. Two plans."
        path="/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Exec Pass",
            url: "https://exec-pass.com",
          },
        ]}
      />
      <ExecPassHeader />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Plans />
        <Difference />
        <FAQ />
        <ClosingCTA />
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassHome;
