import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plane,
  ScanLine,
  Armchair,
  Ticket,
  Headphones,
  Wifi,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";

const BOOK_URL = "https://fasttrack.exec-pass.com";

/* --------------------------------- Hero --------------------------------- */
const Hero = () => (
  <>
  <section className="relative ep-bg-void ep-wash-void ep-cut-bottom">

    <div className="mx-auto max-w-container px-6 pt-20 pb-40 md:pt-28 md:pb-52 relative">
      {/* Vertical mono data-rail, pinned left */}
      <div
        aria-hidden
        className="absolute left-6 top-24 hidden md:flex flex-col gap-4 ep-mono text-steel"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        <span>GATE · 22B</span>
        <span className="text-flare-bright">DEP 06:40 — BOARDING</span>
        <span>LHR / T5 · AIRSIDE</span>
      </div>

      <div className="md:pl-16 max-w-4xl">
        <div className="ep-mono text-flare-bright mb-8">EXEC PASS / MEMBERSHIP · EST. 2019</div>
        <h1 className="ep-display text-bright text-[64px] leading-[0.95] md:text-[112px] lg:text-[136px]">
          Straight to<br />airside.
        </h1>
        <p className="mt-8 text-[19px] md:text-[21px] text-steel max-w-prose">
          Priority lanes, automated check-in and lounge access on one membership.
          Book the lane once; we handle the rest.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={BOOK_URL}
            className="ep-btn-type text-[14px] uppercase tracking-wider bg-flare-fill hover:bg-flare-fill-hover text-white px-8 py-4 inline-flex items-center gap-3 ep-ease ep-press"
            style={{ borderRadius: 12 }}
          >
            Start free trial <ArrowRight size={16} />
          </a>
          <Link
            to="/services-pricing"
            className="ep-mono text-bright hover:text-flare-bright ep-ease"
          >
            See what&apos;s included →
          </Link>
        </div>
      </div>
    </div>

  </section>
  {/* Boarding-pass strip booking widget straddling the diagonal cut */}
  <BoardingPassStrip />
  </>
);


const BoardingPassStrip = () => (
  <div className="relative z-10 -mt-24 md:-mt-32 mx-auto max-w-container px-6">
    <div className="grid grid-cols-12 gap-0 border border-line-dark bg-graphite text-bright shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]">
      <div className="col-span-12 md:col-span-8 p-6 md:p-8 grid grid-cols-4 gap-6">
        <div>
          <div className="ep-mono text-steel">FROM</div>
          <div className="ep-display text-[28px] mt-1">LHR</div>
          <div className="text-[13px] text-steel mt-1">London Heathrow</div>
        </div>
        <div>
          <div className="ep-mono text-steel">TO</div>
          <div className="ep-display text-[28px] mt-1">FRA</div>
          <div className="text-[13px] text-steel mt-1">Frankfurt Main</div>
        </div>
        <div>
          <div className="ep-mono text-steel">LANE</div>
          <div className="ep-display text-[28px] mt-1">FAST</div>
          <div className="text-[13px] text-steel mt-1">Priority security</div>
        </div>
        <div>
          <div className="ep-mono text-steel">PAX</div>
          <div className="ep-display text-[28px] mt-1">01</div>
          <div className="text-[13px] text-steel mt-1">Adult</div>
        </div>
      </div>

      {/* Perforated stub */}
      <div
        aria-hidden
        className="hidden md:block col-span-0 w-0 relative"
        style={{
          borderLeft: "2px dashed hsl(var(--ep-line-dark))",
          position: "absolute",
          right: "33.333%",
          top: 12,
          bottom: 12,
        }}
      />

      <div className="col-span-12 md:col-span-4 ep-bg-paper p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="ep-mono text-flare-ink">BOOK THE LANE</div>
          <div className="ep-display text-[22px] text-ink mt-2 leading-tight">
            From £10 per pass. Members go free up to five times a month.
          </div>
        </div>
        <a
          href={BOOK_URL}
          className="mt-6 ep-btn-type text-[13px] uppercase tracking-wider bg-flare-fill hover:bg-flare-fill-hover text-white px-5 py-3 inline-flex items-center justify-center gap-2 ep-ease ep-press"
          style={{ borderRadius: 12 }}
        >
          Book fast track <ArrowRight size={14} />
        </a>
      </div>
    </div>
  </div>
);

/* ------------------------------ Trust strip ----------------------------- */
const TrustStrip = () => (
  <section className="ep-bg-paper border-b border-line pt-20">
    <div className="mx-auto max-w-container px-6">
      <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-line">
        <div className="ep-mono text-ink-muted">300+ AIRPORTS · PRIORITY LANES</div>
        <div className="ep-mono text-ink-muted">CHECK-IN AUTOMATED · GATE TO GATE</div>
        <div className="ep-mono text-ink-muted">EN · DE · FR · ES · IT · PL · PT · TR · EL</div>
        <div className="ep-mono text-flare-ink">STRAIGHT TO AIRSIDE.</div>
      </div>
    </div>
  </section>
);

/* -------------------------------- Services ------------------------------ */
const services = [
  {
    icon: Plane,
    name: "Priority lane access",
    body: "Walk past the security queue through the express lane, at more than 300 major airports.",
    featured: true,
  },
  {
    icon: ScanLine,
    name: "Automated check-in",
    body: "We check you in the moment the window opens, secure the seat, and send the boarding pass to your phone.",
  },
  {
    icon: Armchair,
    name: "Lounge access",
    body: "Book any Priority Pass-partner lounge from the same dashboard. Members get a lower operator rate.",
  },
  {
    icon: Ticket,
    name: "Skip-the-line attractions",
    body: "Priority entry tickets to museums and landmarks in the cities you land in.",
  },
  {
    icon: Headphones,
    name: "Concierge, 24/7",
    body: "A specialist on the line for last-minute changes, rebookings, and ground logistics. Not a chatbot.",
  },
  {
    icon: Wifi,
    name: "Travel hub &amp; e-SIM",
    body: "One dashboard for trips, receipts and data. Add an e-SIM before you land in a new country.",
  },
];

const Services = () => (
  <section className="ep-bg-paper">
    <div className="mx-auto max-w-container px-6 py-24 md:py-32">
      <div className="ep-mono text-flare-ink mb-6">01 / SERVICES</div>
      <h2 className="ep-display text-ink text-[44px] md:text-[64px] max-w-3xl">
        Everything handled, gate to gate.
      </h2>
      <p className="mt-6 max-w-prose text-[17px] text-ink-muted">
        Six services on one membership. Book once, then let the operator run the rest of the trip.
      </p>

      <div className="mt-14 grid gap-px bg-line md:grid-cols-3 border border-line">
        {services.map((s) => (
          <div
            key={s.name}
            className={`p-8 ep-bg-paper ep-ease hover:bg-concrete relative ${
              s.featured ? "ep-cut-corner-tr" : ""
            }`}
            style={{ borderRadius: 4 }}
          >
            <div className="ep-icon-plate mb-6">
              <s.icon size={20} strokeWidth={2} />
            </div>
            <div className="ep-mono text-ink-muted mb-2">0{services.indexOf(s) + 1}</div>
            <h3 className="ep-display text-[22px] text-ink" dangerouslySetInnerHTML={{ __html: s.name }} />
            <p className="mt-3 text-[15px] text-ink-muted" dangerouslySetInnerHTML={{ __html: s.body }} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Link to="/services-pricing" className="ep-mono text-flare-ink hover:text-ink ep-ease">
          Full service list →
        </Link>
      </div>
    </div>
  </section>
);

/* -------------------------- Difference / comparison --------------------- */
const Difference = () => (
  <section className="ep-bg-concrete border-y border-line">
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
          <div className="grid grid-cols-3 border border-line bg-paper">
            <div className="p-5 ep-mono text-ink-muted border-b border-line">METRIC</div>
            <div className="p-5 ep-mono text-ink-muted border-b border-l border-line">STANDARD QUEUE</div>
            <div className="p-5 ep-mono text-flare-ink border-b border-l border-line">EXEC PASS</div>

            {[
              ["Security lane", "General", "Priority"],
              ["Check-in", "You, at the desk", "Automated, on your phone"],
              ["Lounge booking", "Third-party site", "Same membership"],
              ["Change of plans", "Airline hold music", "Operator, 24/7"],
              ["Airports covered", "One, at a time", "300+"],
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

/* ------------------------------ Membership ------------------------------ */
const Membership = () => (
  <section id="membership" className="ep-bg-paper">
    <div className="mx-auto max-w-container px-6 py-24 md:py-32">
      <div className="ep-mono text-flare-ink mb-6">03 / MEMBERSHIP</div>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <h2 className="ep-display text-ink text-[44px] md:text-[64px] max-w-2xl">
          Two tiers. Both include the trial.
        </h2>
        <p className="ep-mono text-ink-muted">3-DAY FREE TRIAL · CANCEL ANYTIME</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Essential */}
        <article className="border border-line bg-paper p-10 flex flex-col" style={{ borderRadius: 4 }}>
          <div className="ep-mono text-ink-muted">ESSENTIAL</div>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="ep-display text-[64px] text-ink leading-none">£49</span>
            <span className="ep-mono text-ink-muted">/ QUARTER</span>
          </div>
          <p className="mt-4 text-[15px] text-ink-muted">The frequent flyer's baseline. Priority lane and automated check-in, on demand.</p>
          <ul className="mt-8 space-y-3 text-[15px] text-ink">
            <li className="flex gap-3"><Check size={16} className="text-flare-ink mt-1 shrink-0" /> Up to 2 free Fast Track passes per month</li>
            <li className="flex gap-3"><Check size={16} className="text-flare-ink mt-1 shrink-0" /> Automated check-in on every flight</li>
            <li className="flex gap-3"><Check size={16} className="text-flare-ink mt-1 shrink-0" /> Priority entry to selected attractions</li>
            <li className="flex gap-3"><Check size={16} className="text-flare-ink mt-1 shrink-0" /> 24/7 operator support</li>
          </ul>
          <a
            href={BOOK_URL}
            className="mt-10 ep-btn-type text-[13px] uppercase tracking-wider border border-ink text-ink hover:bg-ink hover:text-bright px-6 py-3 inline-flex items-center justify-center gap-2 ep-ease ep-press self-start"
            style={{ borderRadius: 12 }}
          >
            Start free trial
          </a>
        </article>

        {/* Executive — featured, cut corner, panel shadow */}
        <article
          className="ep-cut-corner-tr border border-ink bg-graphite text-bright p-10 flex flex-col shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
          style={{ borderRadius: 4 }}
        >
          <div className="flex items-center justify-between">
            <div className="ep-mono text-flare-bright">EXECUTIVE</div>
            <div className="ep-mono text-steel">MOST BOOKED</div>
          </div>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="ep-display text-[64px] text-bright leading-none">£79</span>
            <span className="ep-mono text-steel">/ QUARTER</span>
          </div>
          <p className="mt-4 text-[15px] text-steel">Everything in Essential, with more passes and unlimited automation.</p>
          <ul className="mt-8 space-y-3 text-[15px] text-bright">
            <li className="flex gap-3"><Check size={16} className="text-flare-bright mt-1 shrink-0" /> Up to 5 free Fast Track passes per month</li>
            <li className="flex gap-3"><Check size={16} className="text-flare-bright mt-1 shrink-0" /> Unlimited automated check-ins</li>
            <li className="flex gap-3"><Check size={16} className="text-flare-bright mt-1 shrink-0" /> Unlimited skip-the-line attraction entries</li>
            <li className="flex gap-3"><Check size={16} className="text-flare-bright mt-1 shrink-0" /> Operator rate on lounge access</li>
          </ul>
          <a
            href={BOOK_URL}
            className="mt-10 ep-btn-type text-[13px] uppercase tracking-wider bg-flare-fill hover:bg-flare-fill-hover text-white px-6 py-3 inline-flex items-center justify-center gap-2 ep-ease ep-press self-start"
            style={{ borderRadius: 12 }}
          >
            Start free trial <ArrowRight size={14} />
          </a>
        </article>
      </div>

      <p className="mt-8 max-w-prose text-[13px] text-ink-muted">
        Fast Track passes are charged per use: £10 adult, £10 child, infants free. Passes above your monthly allowance are billed at the same rate.
      </p>
    </div>
  </section>
);

/* --------------------------------- FAQ ---------------------------------- */
const faqs = [
  {
    q: "What is airside?",
    a: "Airside is the operator's word for everything past security — the gates, lounges and jet bridges. Straight to airside means through security first, without the queue.",
  },
  {
    q: "How does the free trial work?",
    a: "Start the trial and use the membership for three days. Cancel any time in that window and you are not charged. If you keep it, the quarterly membership begins.",
  },
  {
    q: "Are the Fast Track passes included?",
    a: "Essential includes up to two free passes a month, Executive up to five. Extra passes are £10 each (adult or child, infants free).",
  },
  {
    q: "Which airports are covered?",
    a: "More than 300 airports operate a priority lane we can book. If the airport does not have one, the dashboard tells you before you pay.",
  },
  {
    q: "Is Exec Pass an airport?",
    a: "No. Exec Pass is not affiliated with any airport. We are an independent operator that books priority services on your behalf.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="ep-bg-paper border-t border-line">
      <div className="mx-auto max-w-container px-6 py-24 md:py-32">
        <div className="ep-mono text-flare-ink mb-6">04 / QUESTIONS</div>
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
  <section className="ep-bg-void ep-wash-void ep-cut-top">
    <div className="mx-auto max-w-container px-6 pt-40 pb-32">
      <div className="ep-mono text-flare-bright mb-8">READY WHEN YOU ARE</div>
      <h2 className="ep-display text-bright text-[56px] md:text-[96px] max-w-4xl leading-[0.98]">
        Book the lane.<br />Walk through.
      </h2>
      <p className="mt-8 max-w-prose text-[19px] text-steel">
        Three days free. Cancel any time. Every service on one membership.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <a
          href={BOOK_URL}
          className="ep-btn-type text-[14px] uppercase tracking-wider bg-flare-fill hover:bg-flare-fill-hover text-white px-8 py-4 inline-flex items-center gap-3 ep-ease ep-press"
          style={{ borderRadius: 12 }}
        >
          Start free trial <ArrowRight size={16} />
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
      className="block ep-btn-type text-[13px] uppercase tracking-wider bg-flare-fill text-white px-5 py-3 text-center"
      style={{ borderRadius: 12 }}
    >
      Start free trial
    </a>
  </div>
);

/* ---------------------------------- Page --------------------------------- */
const ExecPassHome = () => {
  useEffect(() => {
    document.title = "Exec Pass — Straight to airside.";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ep-bg-void">
      <ExecPassHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Difference />
        <Membership />
        <FAQ />
        <ClosingCTA />
      </main>
      <ExecPassFooter />
      <MobileStickyCTA />
    </div>
  );
};

export default ExecPassHome;
