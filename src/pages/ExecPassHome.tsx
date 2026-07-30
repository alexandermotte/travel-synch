import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plane,
  ScanLine,
  Armchair,
  MessageCircle,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";

const BOOK_URL = "https://fasttrack.exec-pass.com/en";

/* --------------------------------- Hero --------------------------------- */
const Hero = () => (
  <section className="relative ep-bg-void ep-wash-void">
    <div className="mx-auto max-w-container px-6 pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="max-w-4xl">
        <div className="ep-mono text-flare-bright mb-8">EXEC PASS · AIRPORT PRIORITY</div>
        <h1 className="ep-display text-[56px] leading-[1.0] md:text-[96px] lg:text-[112px]">
          <span className="text-bright">Fast Track.</span>
          <br />
          <span className="text-flare">Fly clever.</span>
        </h1>
        <p className="mt-8 text-[19px] md:text-[21px] text-steel max-w-prose">
          One pass, five hundred lounges, every hub you&apos;ll touch this quarter — priority at
          security, automated check-in, and expert support.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={BOOK_URL}
            className="ep-btn-type text-[14px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-8 py-4 inline-flex items-center gap-3 ep-ease ep-press"
            style={{ borderRadius: 12 }}
          >
            Book Fast Track <ArrowRight size={16} />
          </a>
          <Link to="/services-pricing" className="ep-mono text-bright hover:text-flare-bright ep-ease">
            See what&apos;s included →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------ Stats strip ----------------------------- */
const STATS = [
  ["100,000+", "Travellers served across our network"],
  ["200+", "Airports in our network"],
  ["9", "Languages supported"],
  ["24/7", "Human support"],
];

const StatsStrip = () => (
  <section className="ep-bg-paper">
    <div className="mx-auto max-w-container px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(([value, label]) => (
          <div
            key={label}
            className="ep-bg-concrete ep-shadow-soft p-8"
            style={{ borderRadius: 20 }}
          >
            <div className="ep-display text-[40px] text-flare-ink leading-none">{value}</div>
            <div className="mt-3 text-[15px] text-ink-muted">{label}</div>
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
    name: "Priority Fast Track security",
    body: "A dedicated Fast Track security lane at every included terminal — past the general queue, straight through.",
  },
  {
    icon: Armchair,
    name: "500+ lounges worldwide",
    body: "Access to more than five hundred airport lounges, booked from the same place you book the lane.",
  },
  {
    icon: ScanLine,
    name: "Automatic check-in",
    body: "We check you in the moment the airline opens the window, and send the boarding pass to your phone.",
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
      <div className="ep-mono text-flare-ink mb-6">01 / WHAT YOU GET</div>
      <h2 className="ep-display text-ink text-[44px] md:text-[64px] max-w-3xl">
        Everything handled, gate to gate.
      </h2>
      <p className="mt-6 max-w-prose text-[17px] text-ink-muted">
        Four capabilities that turn the airport into a fifteen-minute problem.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
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
            <h3 className="ep-display text-[24px] text-ink">{s.name}</h3>
            <p className="mt-3 text-[15px] text-ink-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link to="/services-pricing" className="ep-mono text-flare-ink hover:text-ink ep-ease">
          Full service list →
        </Link>
      </div>
    </div>
  </section>
);

/* -------------------------- Difference / comparison --------------------- */
const Difference = () => (
  <section className="ep-bg-paper border-y border-line">
    <div className="mx-auto max-w-container px-6 py-24">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="ep-mono text-flare-ink mb-6">02 / DIFFERENCE</div>
          <h2 className="ep-display text-ink text-[38px] md:text-[48px]">
            Built for the frequent flyer.
          </h2>
          <p className="mt-6 text-[16px] text-ink-muted max-w-prose">
            Airport days are a solved problem. Book the lane once, arrive later, board first.
          </p>
        </div>
        <div className="md:col-span-8">
          <div
            className="grid grid-cols-3 border border-line ep-bg-concrete overflow-hidden"
            style={{ borderRadius: 20 }}
          >
            <div className="p-5 ep-mono text-ink-muted border-b border-line">METRIC</div>
            <div className="p-5 ep-mono text-ink-muted border-b border-l border-line">STANDARD QUEUE</div>
            <div className="p-5 ep-mono text-flare-ink border-b border-l border-line">EXEC PASS</div>

            {[
              ["Security lane", "General", "Fast Track priority"],
              ["Check-in", "You, at the desk", "Automatic, on your phone"],
              ["Lounges", "Third-party site", "500+ in one place"],
              ["Change of plans", "Airline hold music", "Concierge on WhatsApp"],
              ["Airports covered", "One, at a time", "200+"],
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
    q: "What is Fast Track?",
    a: "A dedicated priority lane at airport security. You walk past the general queue and go straight through to airside.",
  },
  {
    q: "How does automatic check-in work?",
    a: "We watch the airline's check-in window and check you in the moment it opens, then send the boarding pass to your phone.",
  },
  {
    q: "Which airports are covered?",
    a: "More than 200 airports in our network operate a Fast Track lane we can book. The booking app tells you before you confirm.",
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

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="ep-bg-paper">
      <div className="mx-auto max-w-container px-6 py-24 md:py-32">
        <div className="ep-mono text-flare-ink mb-6">03 / QUESTIONS</div>
        <h2 className="ep-display text-ink text-[44px] md:text-[56px] max-w-3xl">
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
                  <span className="ep-display text-ink text-[22px] md:text-[24px]">{f.q}</span>
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
const ClosingCTA = () => (
  <section className="ep-bg-void ep-wash-void">
    <div className="mx-auto max-w-container px-6 py-28 md:py-32">
      <div className="ep-mono text-flare-bright mb-8">READY WHEN YOU ARE</div>
      <h2 className="ep-display text-bright text-[48px] md:text-[88px] max-w-4xl leading-[1.0]">
        Book the lane.<br />Walk through.
      </h2>
      <p className="mt-8 max-w-prose text-[19px] text-steel">
        For the frequent business traveller. Priority security, automated check-in, and access to
        five hundred lounges — worldwide.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <a
          href={BOOK_URL}
          className="ep-btn-type text-[14px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-8 py-4 inline-flex items-center gap-3 ep-ease ep-press"
          style={{ borderRadius: 12 }}
        >
          Book Fast Track <ArrowRight size={16} />
        </a>
        <Link to="/services-pricing" className="ep-mono text-bright hover:text-flare-bright ep-ease">
          See what&apos;s included →
        </Link>
      </div>
    </div>
  </section>
);

/* ---------------------------- Mobile sticky CTA -------------------------- */
const MobileStickyCTA = () => (
  <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 ep-bg-void border-t border-line-dark px-4 py-3">
    <a
      href={BOOK_URL}
      className="block ep-btn-type text-[13px] uppercase tracking-wider bg-flare text-white px-5 py-3 text-center"
      style={{ borderRadius: 12 }}
    >
      Book Fast Track
    </a>
  </div>
);

/* ---------------------------------- Page --------------------------------- */
const ExecPassHome = () => {
  useEffect(() => {
    document.title = "ExecPass - Fast Track. Fly clever.";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ep-bg-void">
      <ExecPassHeader />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Difference />
        <FAQ />
        <ClosingCTA />
      </main>
      <ExecPassFooter />
      <MobileStickyCTA />
    </div>
  );
};

export default ExecPassHome;
