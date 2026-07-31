import PricingDisclaimer from "@/components/PricingDisclaimer";
import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { LangLink } from "@/components/LangLink";
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
import { useT } from "@/i18n/LanguageContext";

const STEP_ICONS = [UserPlus, CalendarCheck, DoorOpen];

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

const TAB_ICONS: Record<TabId, typeof Zap> = {
  membership: Armchair,
  "fast-track": Zap,
  "check-in": CheckSquare,
  lounges: Armchair,
  compensation: PlaneTakeoff,
  "lost-luggage": Luggage,
  esim: Wifi,
  tickets: Ticket,
  concierge: ConciergeBell,
};

const TAB_ORDER: TabId[] = [
  "membership",
  "fast-track",
  "check-in",
  "lounges",
  "compensation",
  "lost-luggage",
  "esim",
  "tickets",
  "concierge",
];

const SERVICE_HUB_ICONS = [Zap, CheckSquare, Armchair, PlaneTakeoff, Luggage, Wifi, Ticket, BookOpen, ConciergeBell];

const WHY_ICONS = [Shield, Clock, Headphones];

const PLAN_META = [
  { id: "medium" as const, price: 49, highlight: false },
  { id: "premium" as const, price: 79, highlight: true },
];

type TabItem = { title: string; body: string };

const HowItWorks = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const { formatPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState<TabId>("membership");
  const tabsRef = useRef<HTMLDivElement>(null);
  const t = useT("howItWorks");

  useEffect(() => {
    document.title = "ExecPass - How It Works";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const tab = searchParams.get("tab") as TabId | null;
    if (tab && TAB_ORDER.includes(tab)) {
      setActiveTab(tab);
      setTimeout(() => tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [searchParams]);

  const steps = t<{ title: string; body: string }[]>("steps.items");
  const tabsDict = t<Record<string, { label: string; items: TabItem[] }>>("tabs.list");
  const hubItems = t<{ label: string; desc: string }[]>("hub.items");
  const whyItems = t<{ title: string; body: string }[]>("why.items");
  type PlanCopy = { name: string; period: string; tagline: string; badge?: string; features: string[] };
  const planMedium = t<PlanCopy>("pricing.plans.medium");
  const planPremium = t<PlanCopy>("pricing.plans.premium");
  const planData: PlanCopy[] = [planMedium, planPremium];

  const currentTab = tabsDict[activeTab];
  const CurrentIcon = TAB_ICONS[activeTab];

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
        path="/how-it-works"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How Exec Pass works",
            step: steps.map((s, i) => ({
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
                <div className="ep-mono text-flare-bright mb-8">{t("hero.eyebrow")}</div>
                <h1 className="ep-display text-bright text-[44px] md:text-[72px] leading-[1.02]">
                  {t("hero.titleLine1")}<br />{t("hero.titleLine2")}
                </h1>
                <p className="mt-8 max-w-prose text-[19px] text-steel">{t("hero.body")}</p>
                <LangLink
                  to={preCheckoutPath(undefined, search)}
                  className="mt-10 ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-8 py-4 ep-ease ep-press rounded-full"
                >
                  {t("hero.cta")} <ArrowRight size={16} />
                </LangLink>
              </div>

              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: t("hero.cards.airports") },
                  { icon: Zap, label: t("hero.cards.fastTrack") },
                  { icon: CreditCard, label: t("hero.cards.price").replace("{price}", formatPrice(49)) },
                  { icon: Headphones, label: t("hero.cards.concierge") },
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
            <div className="ep-mono text-flare-ink mb-6">{t("steps.eyebrow")}</div>
            <h2 className="ep-heading text-ink text-[32px] md:text-[46px] max-w-2xl leading-[1.05]">
              {t("steps.title")}
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => {
                const Icon = STEP_ICONS[i];
                return (
                  <div key={s.title} className="p-8 ep-bg-concrete ep-shadow-soft" style={{ borderRadius: 20 }}>
                    <div className="ep-icon-plate mb-6">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div className="ep-chip text-ink-muted mb-2">{t("steps.stepLabel").replace("{n}", String(i + 1))}</div>
                    <h3 className="ep-heading text-[24px] text-ink">{s.title}</h3>
                    <p className="mt-3 text-[15px] text-ink-muted">{s.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service explorer tabs */}
        <section className="ep-bg-paper" ref={tabsRef}>
          <div className="mx-auto max-w-container px-6 pb-20 md:pb-24">
            <div className="ep-mono text-flare-ink mb-6">{t("tabs.eyebrow")}</div>
            <h2 className="ep-heading text-ink text-[32px] md:text-[46px] max-w-2xl leading-[1.05]">
              {t("tabs.title")}
            </h2>

            <div className="mt-10 flex gap-3 overflow-x-auto pb-3 -mx-6 px-6" style={{ scrollbarWidth: "none" }}>
              {TAB_ORDER.map((id) => {
                const active = id === activeTab;
                const Icon = TAB_ICONS[id];
                const label = tabsDict[id]?.label ?? id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveTab(id)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[14px] ep-ease border ${
                      active
                        ? "bg-flare text-white border-flare"
                        : "ep-bg-concrete text-ink-muted border-line hover:text-ink"
                    }`}
                  >
                    <Icon size={16} /> {label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {currentTab?.items.map((item, i) => (
                <div
                  key={item.title}
                  className="group ep-bg-concrete ep-shadow-soft p-8"
                  style={{ borderRadius: 20 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="ep-icon-plate">
                      <CurrentIcon size={20} strokeWidth={2} />
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
                <div className="ep-mono text-flare-bright mb-6">{t("why.eyebrow")}</div>
                <h2 className="ep-heading text-bright text-[32px] md:text-[46px] leading-[1.05]">
                  {t("why.title")}
                </h2>
                <p className="mt-6 max-w-prose text-[17px] text-steel">{t("why.body")}</p>
              </div>
              <div className="space-y-4">
                {whyItems.map((w, i) => {
                  const Icon = WHY_ICONS[i];
                  return (
                    <div
                      key={w.title}
                      className="flex gap-5 border border-white/10 bg-white/[0.04] p-6"
                      style={{ borderRadius: 20 }}
                    >
                      <span className="ep-icon-plate shrink-0">
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <div>
                        <h3 className="ep-heading text-[18px] text-bright">{w.title}</h3>
                        <p className="mt-1.5 text-[15px] text-steel">{w.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Service hub grid */}
        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 py-20 md:py-24">
            <div className="ep-mono text-flare-ink mb-6">{t("hub.eyebrow")}</div>
            <h2 className="ep-heading text-ink text-[32px] md:text-[46px] max-w-2xl leading-[1.05]">
              {t("hub.title")}
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {hubItems.map((item, i) => {
                const Icon = SERVICE_HUB_ICONS[i];
                return (
                  <div
                    key={item.label}
                    className="ep-bg-concrete ep-shadow-soft p-6 text-center"
                    style={{ borderRadius: 20 }}
                  >
                    <div className="ep-icon-plate mx-auto mb-4">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div className="ep-heading text-[15px] text-ink">{item.label}</div>
                    <div className="mt-1 text-[13px] text-ink-muted">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 pb-24">
            <div className="ep-mono text-flare-ink mb-6">{t("pricing.eyebrow")}</div>
            <h2 className="ep-heading text-ink text-[32px] md:text-[46px] max-w-2xl leading-[1.05]">
              {t("pricing.title")}
            </h2>
            <p className="mt-6 max-w-prose text-[17px] text-ink-muted">{t("pricing.body")}</p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl">
              {PLAN_META.map((meta, idx) => {
                const plan = planData[idx];
                return (
                  <div
                    key={meta.id}
                    className={`relative flex flex-col p-8 md:p-10 ep-shadow-soft ${
                      meta.highlight ? "ep-bg-void ep-wash-void" : "ep-bg-concrete"
                    }`}
                    style={{ borderRadius: 24 }}
                  >
                    {plan.badge && (
                      <span className="ep-chip absolute top-6 right-6 rounded-full bg-flare text-white px-3 py-1 uppercase tracking-[0.14em]">
                        {plan.badge}
                      </span>
                    )}
                    <div className={`ep-mono mb-6 ${meta.highlight ? "text-flare-bright" : "text-ink-muted"}`}>
                      {plan.name.toUpperCase()}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`ep-heading text-[44px] leading-none ${meta.highlight ? "text-bright" : "text-ink"}`}
                      >
                        {formatPrice(meta.price)}
                      </span>
                      <span className={`text-[14px] ${meta.highlight ? "text-steel" : "text-ink-muted"}`}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`mt-2 text-[14px] ${meta.highlight ? "text-flare-bright" : "text-flare-ink"}`}>
                      {t("pricing.trial")}
                    </p>
                    <p className={`text-[13px] ${meta.highlight ? "text-steel" : "text-ink-muted"}`}>
                      {t("pricing.cancel")}
                    </p>
                    <p className={`mt-4 text-[15px] ${meta.highlight ? "text-steel" : "text-ink-muted"}`}>
                      {plan.tagline}
                    </p>

                    <div className={`my-6 h-px ${meta.highlight ? "bg-white/10" : "bg-line"}`} />

                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check
                            size={16}
                            className={`mt-1 shrink-0 ${meta.highlight ? "text-flare-bright" : "text-flare-ink"}`}
                          />
                          <span className={`text-[15px] ${meta.highlight ? "text-steel" : "text-ink-muted"}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <LangLink
                      to={preCheckoutPath(meta.id, search)}
                      className={`mt-8 ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center justify-center gap-3 px-8 py-4 ep-ease ep-press rounded-full ${
                        meta.highlight
                          ? "bg-flare hover:bg-flare-bright text-white"
                          : "border border-line text-ink hover:bg-flare hover:text-white hover:border-flare"
                      }`}
                    >
                      {t("pricing.choose").replace("{name}", plan.name)} <ArrowRight size={16} />
                    </LangLink>
                  </div>
                );
              })}
            </div>

            <PricingDisclaimer className="mt-8" />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 py-20 md:py-24">
            <h2 className="ep-heading text-bright text-[34px] md:text-[52px] max-w-3xl leading-[1.05]">
              {t("closing.title")}
            </h2>
            <p className="mt-6 max-w-prose text-[17px] text-steel">{t("closing.body")}</p>
            <LangLink
              to={preCheckoutPath(undefined, search)}
              className="mt-10 ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-8 py-4 ep-ease ep-press rounded-full"
            >
              {t("closing.cta")} <ArrowRight size={16} />
            </LangLink>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default HowItWorks;
