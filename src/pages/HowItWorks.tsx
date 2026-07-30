import PricingDisclaimer from "@/components/PricingDisclaimer";
import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  UserPlus,
  CalendarCheck,
  DoorOpen,
  Zap,
  CheckSquare,
  Armchair,
  PlaneTakeoff,
  Luggage,
  Wifi,
  Ticket,
  BookOpen,
  ConciergeBell,
  Globe,
  Clock,
  Headphones,
  CreditCard,
  Shield,
} from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { preCheckoutPath } from "@/lib/booking";
import { useCurrency } from "@/contexts/CurrencyContext";

const STEPS = [
  {
    icon: UserPlus,
    title: "Join",
    body: "Pick Medium or Premium, start your 3-day free trial and enrol in about two minutes. One membership covers every service below.",
  },
  {
    icon: CalendarCheck,
    title: "Book as normal",
    body: "Keep booking flights however you already do. Add your flight details and Exec Pass handles the priority lane, the check-in window and the lounge.",
  },
  {
    icon: DoorOpen,
    title: "Fly clever",
    body: "Arrive, walk the Fast Track lane, boarding pass already on your phone. Concierge on hand 24/7 if anything moves.",
  },
];

type TabId =
  | "membership"
  | "fast-track"
  | "check-in"
  | "lounges"
  | "compensation"
  | "lost-luggage"
  | "esim"
  | "tickets"
  | "concierge";

const TABS: { id: TabId; label: string; icon: typeof Zap; items: { title: string; body: string }[] }[] = [
  {
    id: "membership",
    label: "The membership",
    icon: Armchair,
    items: [
      { title: "One subscription", body: "Every Exec Pass service sits behind a single quarterly membership — no per-service purchases, no add-ons at the gate." },
      { title: "Two tiers", body: "Medium for regular trips, Premium for people who live out of a terminal. Same services, different volumes." },
      { title: "Cancel anytime", body: "Manage or cancel your membership from your account. Benefits activate after your first successful payment." },
    ],
  },
  {
    id: "fast-track",
    label: "Fast Track",
    icon: Zap,
    items: [
      { title: "Dedicated lane", body: "Walk straight to the security checkpoint past the general queue, at over 200 airports worldwide." },
      { title: "Book per trip", body: "Reserve your Fast Track slot for each flight from your account — up to 2 a month on Medium, 5 on Premium." },
      { title: "Time saving", body: "Reach the gate faster and without rushing, even on a tight connection." },
    ],
  },
  {
    id: "check-in",
    label: "Automatic check-in",
    icon: CheckSquare,
    items: [
      { title: "Automated", body: "We watch the airline window and check you in the moment it opens — no desk, no airline app." },
      { title: "Boarding pass first", body: "Your pass lands on your phone while you're still on the way to the airport." },
      { title: "Unlimited on Premium", body: "Medium includes automatic check-in; Premium removes the cap entirely." },
    ],
  },
  {
    id: "lounges",
    label: "Lounges",
    icon: Armchair,
    items: [
      { title: "500+ lounges", body: "Member rates on airport lounges across the network, regardless of airline or ticket class." },
      { title: "Book in seconds", body: "Reserve from your account before you fly, or on the spot when a delay hits." },
      { title: "Better on Premium", body: "Premium members get the best available member rate on every lounge." },
    ],
  },
  {
    id: "compensation",
    label: "Flight compensation",
    icon: PlaneTakeoff,
    items: [
      { title: "We file the claim", body: "Delayed, cancelled or overbooked? Submit the flight and our team handles the airline." },
      { title: "No paperwork", body: "Regulation, evidence and follow-up are handled for you — you just track the status." },
      { title: "Unlimited on Premium", body: "2 claims per quarter on Medium, unlimited on Premium." },
    ],
  },
  {
    id: "lost-luggage",
    label: "Luggage recovery",
    icon: Luggage,
    items: [
      { title: "Report once", body: "Log the missing bag with us and we chase the airline's baggage system on your behalf." },
      { title: "Status updates", body: "You get progress updates instead of hold music and reference numbers." },
      { title: "Unlimited on Premium", body: "2 recovery cases per quarter on Medium, unlimited on Premium." },
    ],
  },
  {
    id: "esim",
    label: "eSIM data",
    icon: Wifi,
    items: [
      { title: "Land connected", body: "Activate a travel eSIM before you fly and skip roaming charges and airport SIM desks." },
      { title: "Global coverage", body: "Data plans across the destinations Exec Pass members fly to most." },
      { title: "Two on Premium", body: "1 eSIM included on Medium; Premium adds a second plus a virtual number." },
    ],
  },
  {
    id: "tickets",
    label: "Tickets & e-books",
    icon: Ticket,
    items: [
      { title: "Attractions", body: "Discounted museum and attraction tickets in major destination cities." },
      { title: "Travel e-books", body: "City guides and travel e-books included with your membership library." },
      { title: "Premium extras", body: "Attraction discounts are a Premium benefit; e-books are included on both tiers." },
    ],
  },
  {
    id: "concierge",
    label: "Concierge",
    icon: ConciergeBell,
    items: [
      { title: "24/7 humans", body: "A real travel team on WhatsApp or email, whatever timezone you're stuck in." },
      { title: "When plans move", body: "Rebooking, transfers, lounge changes — hand it over instead of queueing at a service desk." },
      { title: "Both tiers", body: "Concierge support is included on Medium and Premium." },
    ],
  },
];

const SERVICE_HUB = [
  { icon: Zap, label: "Fast Track", desc: "Skip the security queue" },
  { icon: CheckSquare, label: "Check-in", desc: "Automated, every flight" },
  { icon: Armchair, label: "Lounges", desc: "500+ worldwide" },
  { icon: PlaneTakeoff, label: "Compensation", desc: "We file the claim" },
  { icon: Luggage, label: "Luggage", desc: "Recovery handled" },
  { icon: Wifi, label: "eSIM data", desc: "Land connected" },
  { icon: Ticket, label: "Tickets", desc: "Attraction discounts" },
  { icon: BookOpen, label: "E-books", desc: "City guides included" },
  { icon: ConciergeBell, label: "Concierge", desc: "24/7 travel team" },
];

const WHY = [
  { icon: Shield, title: "One provider", body: "Fast Track, check-in, claims and concierge under a single membership and a single bill." },
  { icon: Clock, title: "Time back", body: "The airport turns into a corridor, not an obstacle course — every trip, not just the important ones." },
  { icon: Headphones, title: "Always answered", body: "A 24/7 travel team that knows your itinerary before you finish typing." },
];

const PLANS = [
  {
    id: "medium" as const,
    name: "Medium",
    price: 49,
    period: "every 3 months",
    tagline: "Smart travel, frequent and hassle-free.",
    features: [
      "Up to 2 Fast Track accesses per month",
      "Automatic check-in included",
      "Member rates on 500+ lounges",
      "2 flight compensation claims per quarter",
      "2 luggage recovery claims per quarter",
      "1 eSIM for data abroad",
      "24/7 concierge",
    ],
  },
  {
    id: "premium" as const,
    name: "Premium",
    price: 79,
    period: "every 3 months",
    badge: "Most popular",
    highlight: true,
    tagline: "For the frequent flyer who lives out of a terminal.",
    features: [
      "Up to 5 Fast Track accesses per month",
      "Unlimited automatic check-ins",
      "Best member rates on 500+ lounges",
      "Unlimited flight compensation claims",
      "Unlimited luggage recovery claims",
      "2 eSIMs plus virtual number",
      "Discounted attraction & museum tickets",
      "24/7 concierge",
    ],
  },
];

const HowItWorks = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const { formatPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState<TabId>("membership");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "ExecPass - How It Works";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const tab = searchParams.get("tab") as TabId | null;
    if (tab && TABS.some((t) => t.id === tab)) {
      setActiveTab(tab);
      setTimeout(() => tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [searchParams]);

  const current = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title="How Exec Pass works — services, membership and pricing"
        description="See what the Exec Pass travel membership includes: Fast Track, automatic check-in, lounges, compensation, luggage recovery, eSIM and concierge — plus Medium and Premium pricing."
        path="/how-it-works"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How Exec Pass works",
            step: STEPS.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.body,
            })),
          },
        ]}
      />
      <ExecPassHeader />

      <main>
        {/* Hero */}
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 pt-20 pb-20 md:pt-24 md:pb-24">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="ep-mono text-flare-bright mb-8">HOW IT WORKS</div>
                <h1 className="ep-display text-bright text-[44px] md:text-[72px] leading-[1.02]">
                  One membership.<br />Every travel perk.
                </h1>
                <p className="mt-8 max-w-prose text-[19px] text-steel">
                  Exec Pass is a travel subscription: Fast Track security, automatic check-in,
                  lounges, claims handling, eSIM data and a 24/7 concierge — bundled into one plan
                  so you can fly clever.
                </p>
                <Link
                  to={preCheckoutPath(undefined, search)}
                  className="mt-10 ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-8 py-4 ep-ease ep-press rounded-full"
                >
                  Join Exec Pass <ArrowRight size={16} />
                </Link>
              </div>

              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "200+ airports" },
                  { icon: Zap, label: "Fast Track lanes" },
                  { icon: CreditCard, label: `${formatPrice(49)} / 3 months` },
                  { icon: Headphones, label: "24/7 concierge" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 border border-white/10 bg-white/[0.04] p-6 ${i % 2 === 1 ? "translate-y-6" : ""}`}
                    style={{ borderRadius: 20 }}
                  >
                    <span className="ep-icon-plate">
                      <item.icon size={18} strokeWidth={2} />
                    </span>
                    <span className="text-[15px] text-bright">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Three steps */}
        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 py-20 md:py-24">
            <div className="ep-mono text-flare-ink mb-6">GETTING STARTED</div>
            <h2 className="ep-heading text-ink text-[32px] md:text-[46px] max-w-2xl leading-[1.05]">
              Three steps, then airside.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <div key={s.title} className="p-8 ep-bg-concrete ep-shadow-soft" style={{ borderRadius: 20 }}>
                  <div className="ep-icon-plate mb-6">
                    <s.icon size={20} strokeWidth={2} />
                  </div>
                  <div className="ep-chip text-ink-muted mb-2">STEP 0{i + 1}</div>
                  <h3 className="ep-heading text-[24px] text-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-ink-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service explorer tabs */}
        <section className="ep-bg-paper" ref={tabsRef}>
          <div className="mx-auto max-w-container px-6 pb-20 md:pb-24">
            <div className="ep-mono text-flare-ink mb-6">EXPLORE THE SERVICES</div>
            <h2 className="ep-heading text-ink text-[32px] md:text-[46px] max-w-2xl leading-[1.05]">
              What the membership covers.
            </h2>

            <div className="mt-10 flex gap-3 overflow-x-auto pb-3 -mx-6 px-6" style={{ scrollbarWidth: "none" }}>
              {TABS.map((tab) => {
                const active = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[14px] ep-ease border ${
                      active
                        ? "bg-flare text-white border-flare"
                        : "ep-bg-concrete text-ink-muted border-line hover:text-ink"
                    }`}
                  >
                    <tab.icon size={16} /> {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {current.items.map((item, i) => (
                <div
                  key={item.title}
                  className="group ep-bg-concrete ep-shadow-soft p-8"
                  style={{ borderRadius: 20 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="ep-icon-plate">
                      <current.icon size={20} strokeWidth={2} />
                    </div>
                    <ArrowUpRight size={16} className="text-ink-muted/40" />
                  </div>
                  <div className="ep-mono text-ink-muted mb-2">0{i + 1}</div>
                  <h3 className="ep-heading text-[22px] text-ink">{item.title}</h3>
                  <p className="mt-3 text-[15px] text-ink-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why — dark band */}
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="ep-mono text-flare-bright mb-6">WHY A MEMBERSHIP</div>
                <h2 className="ep-heading text-bright text-[32px] md:text-[46px] leading-[1.05]">
                  Everything in one place, not nine.
                </h2>
                <p className="mt-6 max-w-prose text-[17px] text-steel">
                  Buying Fast Track, lounge passes, claims help and roaming data separately is nine
                  accounts and nine receipts. Exec Pass makes it one.
                </p>
              </div>
              <div className="space-y-4">
                {WHY.map((w) => (
                  <div
                    key={w.title}
                    className="flex gap-5 border border-white/10 bg-white/[0.04] p-6"
                    style={{ borderRadius: 20 }}
                  >
                    <span className="ep-icon-plate shrink-0">
                      <w.icon size={20} strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="ep-heading text-[18px] text-bright">{w.title}</h3>
                      <p className="mt-1.5 text-[15px] text-steel">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service hub grid */}
        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 py-20 md:py-24">
            <div className="ep-mono text-flare-ink mb-6">ALL IN ONE</div>
            <h2 className="ep-heading text-ink text-[32px] md:text-[46px] max-w-2xl leading-[1.05]">
              Nine services. One login.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {SERVICE_HUB.map((item) => (
                <div
                  key={item.label}
                  className="ep-bg-concrete ep-shadow-soft p-6 text-center"
                  style={{ borderRadius: 20 }}
                >
                  <div className="ep-icon-plate mx-auto mb-4">
                    <item.icon size={20} strokeWidth={2} />
                  </div>
                  <div className="ep-heading text-[15px] text-ink">{item.label}</div>
                  <div className="mt-1 text-[13px] text-ink-muted">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 pb-24">
            <div className="ep-mono text-flare-ink mb-6">MEMBERSHIP & PRICING</div>
            <h2 className="ep-heading text-ink text-[32px] md:text-[46px] max-w-2xl leading-[1.05]">
              Pick the plan that matches how you fly.
            </h2>
            <p className="mt-6 max-w-prose text-[17px] text-ink-muted">
              Both plans include every service. The difference is volume — how many Fast Track
              accesses, claims and eSIMs you get each period.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col p-8 md:p-10 ep-shadow-soft ${
                    plan.highlight ? "ep-bg-void ep-wash-void" : "ep-bg-concrete"
                  }`}
                  style={{ borderRadius: 24 }}
                >
                  {plan.badge && (
                    <span className="ep-chip absolute top-6 right-6 rounded-full bg-flare text-white px-3 py-1 uppercase tracking-[0.14em]">
                      {plan.badge}
                    </span>
                  )}
                  <div className={`ep-mono mb-6 ${plan.highlight ? "text-flare-bright" : "text-ink-muted"}`}>
                    {plan.name.toUpperCase()}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`ep-heading text-[44px] leading-none ${plan.highlight ? "text-bright" : "text-ink"}`}
                    >
                      {formatPrice(plan.price)}
                    </span>
                    <span className={`text-[14px] ${plan.highlight ? "text-steel" : "text-ink-muted"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`mt-2 text-[14px] ${plan.highlight ? "text-flare-bright" : "text-flare-ink"}`}>
                    3 days free trial
                  </p>
                  <p className={`text-[13px] ${plan.highlight ? "text-steel" : "text-ink-muted"}`}>
                    Cancel anytime
                  </p>
                  <p className={`mt-4 text-[15px] ${plan.highlight ? "text-steel" : "text-ink-muted"}`}>
                    {plan.tagline}
                  </p>

                  <div className={`my-6 h-px ${plan.highlight ? "bg-white/10" : "bg-line"}`} />

                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className={`mt-1 shrink-0 ${plan.highlight ? "text-flare-bright" : "text-flare-ink"}`}
                        />
                        <span className={`text-[15px] ${plan.highlight ? "text-steel" : "text-ink-muted"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={preCheckoutPath(plan.id, search)}
                    className={`mt-8 ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center justify-center gap-3 px-8 py-4 ep-ease ep-press rounded-full ${
                      plan.highlight
                        ? "bg-flare hover:bg-flare-bright text-white"
                        : "border border-line text-ink hover:bg-flare hover:text-white hover:border-flare"
                    }`}
                  >
                    Choose {plan.name} <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>

            <PricingDisclaimer className="mt-8" />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 py-20 md:py-24">
            <h2 className="ep-heading text-bright text-[34px] md:text-[52px] max-w-3xl leading-[1.05]">
              Ready to fly clever?
            </h2>
            <p className="mt-6 max-w-prose text-[17px] text-steel">
              Start your membership in two minutes. Your first trip with Exec Pass is usually the
              one where you stop budgeting time for the airport.
            </p>
            <Link
              to={preCheckoutPath(undefined, search)}
              className="mt-10 ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-8 py-4 ep-ease ep-press rounded-full"
            >
              Join Exec Pass <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default HowItWorks;
