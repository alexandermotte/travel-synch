import PricingDisclaimer from "@/components/PricingDisclaimer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LangLink } from "@/components/LangLink";
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
import { useT } from "@/i18n/LanguageContext";

/* --------------------------------- Hero --------------------------------- */
const Hero = () => {
  const { search } = useLocation();
  const t = useT("home");
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
                {t("hero.badge")}
              </span>
            </div>
            <div className="relative mt-16">
              <div className="ep-mono text-flare-bright mb-6">{t("hero.kicker")}</div>
              <div className="ep-display text-bright text-[64px] md:text-[88px] leading-[0.95]">
                {t("hero.brandLine1")}
                <br />
                {t("hero.brandLine2")}<span className="text-flare">.</span>
              </div>
              <p className="mt-5 text-[17px] text-steel italic" style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                {t("hero.tagline")}
              </p>
            </div>
          </div>

          {/* Action panel */}
          <div className="ep-bg-void p-10 md:p-14 flex flex-col justify-center">
            <div className="ep-mono text-flare-bright mb-6">{t("hero.panelKicker")}</div>
            <h1 className="ep-display text-[44px] md:text-[56px] leading-[1.0]">
              <span className="text-bright">{t("hero.titleA")}</span>{" "}
              <span className="text-flare">{t("hero.titleB")}</span>
            </h1>
            <p className="mt-6 text-[17px] text-steel max-w-prose">
              {t("hero.body")}
            </p>

            <LangLink
              to={preCheckoutPath(undefined, search)}
              className="mt-10 ep-btn-type text-[14px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-8 py-4 inline-flex items-center justify-center gap-3 ep-ease ep-press rounded-full"
            >
              {t("hero.join")} <ArrowRight size={16} />
            </LangLink>
            <p className="mt-4 text-[13px] text-steel text-center">
              {t("hero.trust")}
            </p>
            <div className="mt-6 text-center">
              <LangLink to="/how-it-works" className="ep-mono text-bright hover:text-flare-bright ep-ease">
                {t("hero.howItWorks")}
              </LangLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------ Stats strip ----------------------------- */
const StatsStrip = () => {
  const t = useT("home");
  const stats = t<{ value: string; label: string }[]>("stats.items");
  return (
    <section className="ep-bg-paper">
      <div className="mx-auto max-w-container px-6 pb-16">
        <div className="ep-mono text-flare-ink text-center mb-8">{t("stats.kicker")}</div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
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
};

/* -------------------------------- Services ------------------------------ */
const serviceIcons: Record<string, typeof Plane> = {
  "fast-track": Plane,
  checkin: ScanLine,
  lounges: Armchair,
  compensation: BadgeEuro,
  luggage: Luggage,
  esim: Wifi,
  attractions: Ticket,
  guides: BookOpen,
  concierge: MessageCircle,
};

const Services = () => {
  const t = useT("home");
  const services = t<{ id: string; name: string; body: string }[]>("services.items");
  return (
    <section className="ep-bg-paper">
      <div className="mx-auto max-w-container px-6 pb-24 md:pb-32">
        <div className="ep-mono text-flare-ink mb-6">{t("services.kicker")}</div>
        <h2 className="ep-heading text-ink text-[44px] md:text-[64px] max-w-3xl">
          {t("services.title")}
        </h2>
        <p className="mt-6 max-w-prose text-[17px] text-ink-muted">
          {t("services.body")}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.id];
            return (
              <div
                key={s.name}
                className="p-8 ep-bg-concrete ep-shadow-soft ep-ease"
                style={{ borderRadius: 20 }}
              >
                <div className="ep-icon-plate mb-6">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="ep-mono text-ink-muted mb-2">0{i + 1}</div>
                <h3 className="ep-heading text-[22px] text-ink">{s.name}</h3>
                <p className="mt-3 text-[15px] text-ink-muted">{s.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <LangLink to="/how-it-works" className="ep-mono text-flare-ink hover:text-ink ep-ease">
            {t("services.howItWorks")}
          </LangLink>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------- Plans --------------------------------- */
const planIcons: Record<string, typeof Zap> = {
  medium: Zap,
  premium: Crown,
};
const planPrices: Record<string, number> = {
  medium: 49,
  premium: 79,
};

const Plans = () => {
  const { search } = useLocation();
  const { formatPrice } = useCurrency();
  const t = useT("home");
  const plans = t<{ id: string; name: string; period: string; tagline: string; features: string[] }[]>(
    "membership.plans"
  );
  return (
    <section className="ep-bg-paper border-y border-line">
      <div className="mx-auto max-w-container px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="ep-mono text-flare-ink mb-6">{t("membership.kicker")}</div>
          <h2 className="ep-heading text-ink text-[40px] md:text-[56px]">
            {t("membership.title")}
          </h2>
          <p className="mt-6 text-[17px] text-ink-muted">
            {t("membership.body")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((p) => {
            const highlight = p.id === "premium";
            const Icon = planIcons[p.id];
            return (
              <div
                key={p.id}
                className={`relative p-8 md:p-10 flex flex-col ep-shadow-soft ${
                  highlight ? "ep-bg-void" : "ep-bg-concrete"
                }`}
                style={{ borderRadius: 24 }}
              >
                {highlight && (
                  <span className="ep-chip absolute top-6 right-6 rounded-full bg-flare text-white px-3 py-1 uppercase tracking-[0.14em]">
                    {t("membership.mostChosen")}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`ep-icon-plate ${highlight ? "!text-white !bg-white/15" : ""}`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className={`ep-mono ${highlight ? "text-flare-bright" : "text-ink-muted"}`}>
                    {p.name.toUpperCase()}
                  </div>
                </div>

                <h3 className={`ep-heading text-[26px] ${highlight ? "text-bright" : "text-ink"}`}>
                  {p.tagline}
                </h3>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`ep-heading text-[40px] leading-none ${highlight ? "text-bright" : "text-ink"}`}
                  >
                    {formatPrice(planPrices[p.id])}
                  </span>
                  <span className={`text-[14px] ${highlight ? "text-steel" : "text-ink-muted"}`}>
                    {p.period}
                  </span>
                </div>
                <p className={`mt-2 text-[13px] ${highlight ? "text-steel" : "text-flare-ink"}`}>
                  {t("membership.trial")}
                </p>

                <ul className="mt-8 space-y-3.5 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-1 shrink-0 ${highlight ? "text-flare-bright" : "text-flare-ink"}`}
                      />
                      <span className={`text-[15px] ${highlight ? "text-steel" : "text-ink-muted"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <LangLink
                  to={preCheckoutPath(p.id as "medium" | "premium", search)}
                  className={`mt-10 ep-btn-type text-[13px] uppercase tracking-wider px-6 py-4 inline-flex items-center justify-center gap-3 ep-ease ep-press rounded-full ${
                    highlight
                      ? "bg-flare hover:bg-flare-bright text-white"
                      : "bg-flare/10 text-flare-ink hover:bg-flare hover:text-white"
                  }`}
                >
                  {t("membership.choose")} {p.name} <ArrowRight size={15} />
                </LangLink>
              </div>
            );
          })}
        </div>

        <PricingDisclaimer className="mt-8 mx-auto" />
      </div>
    </section>
  );
};

/* -------------------------- Difference / comparison --------------------- */
const Difference = () => {
  const t = useT("home");
  const rows = t<[string, string, string][]>("difference.rows");
  return (
    <section className="ep-bg-paper border-b border-line">
      <div className="mx-auto max-w-container px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <div className="ep-mono text-flare-ink mb-6">{t("difference.kicker")}</div>
            <h2 className="ep-heading text-ink text-[38px] md:text-[48px]">
              {t("difference.title")}
            </h2>
            <p className="mt-6 text-[16px] text-ink-muted max-w-prose">
              {t("difference.body")}
            </p>
          </div>
          <div className="md:col-span-8">
            <div
              className="grid grid-cols-3 border border-line ep-bg-concrete overflow-hidden"
              style={{ borderRadius: 20 }}
            >
              <div className="p-5 ep-mono text-ink-muted border-b border-line min-w-0">{t("difference.colTask")}</div>
              <div className="p-5 ep-mono text-ink-muted border-b border-l border-line min-w-0">{t("difference.colOwn")}</div>
              <div className="p-5 ep-mono text-flare-ink border-b border-l border-line min-w-0">{t("difference.colExec")}</div>

              {rows.map(([label, a, b], i, arr) => (
                <div key={label} className="contents">
                  <div className={`p-5 text-[15px] text-ink min-w-0 break-words ${i < arr.length - 1 ? "border-b border-line" : ""}`}>{label}</div>
                  <div className={`p-5 text-[15px] text-ink-muted border-l border-line min-w-0 break-words ${i < arr.length - 1 ? "border-b" : ""}`}>{a}</div>
                  <div className={`p-5 text-[15px] text-ink border-l border-line min-w-0 break-words ${i < arr.length - 1 ? "border-b" : ""}`}>
                    <span className="inline-flex flex-wrap items-start gap-2 min-w-0">
                      <Check size={14} className="text-flare-ink shrink-0 mt-1" /> <span className="break-words">{b}</span>
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
};

/* --------------------------------- FAQ ---------------------------------- */
const FAQ = () => {
  const [open, setOpen] = useState(0);
  const t = useT("home");
  const faqs = t<{ q: string; a: string }[]>("faq.items");
  return (
    <section className="ep-bg-paper">
      <div className="mx-auto max-w-container px-6 py-24 md:py-32">
        <div className="ep-mono text-flare-ink mb-6">{t("faq.kicker")}</div>
        <h2 className="ep-heading text-ink text-[44px] md:text-[56px] max-w-3xl">
          {t("faq.title")}
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
  const t = useT("home");
  return (
    <section className="ep-bg-void ep-wash-void">
      <div className="mx-auto max-w-container px-6 py-28 md:py-32">
        <div className="ep-mono text-flare-bright mb-8">{t("cta.kicker")}</div>
        <h2 className="ep-heading text-bright text-[48px] md:text-[88px] max-w-4xl leading-[1.0]">
          {t("cta.titleLine1")}<br />{t("cta.titleLine2")}
        </h2>
        <p className="mt-8 max-w-prose text-[19px] text-steel">
          {t("cta.body")}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <LangLink
            to={preCheckoutPath(undefined, search)}
            className="ep-btn-type text-[14px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-8 py-4 inline-flex items-center gap-3 ep-ease ep-press rounded-full"
          >
            {t("cta.join")} <ArrowRight size={16} />
          </LangLink>
          <LangLink to="/how-it-works" className="ep-mono text-bright hover:text-flare-bright ep-ease">
            {t("cta.howItWorks")}
          </LangLink>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- Page --------------------------------- */
const ExecPassHome = () => {
  const t = useT("home");

  useEffect(() => {
    document.title = t("documentTitle");
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
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
