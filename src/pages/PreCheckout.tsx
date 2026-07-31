import PricingDisclaimer from "@/components/PricingDisclaimer";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ArrowRight, Check, Zap, Crown, CheckSquare, Clock, Globe, TrendingUp, ScanLine, Sparkles } from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { BOOKING_ORIGIN, BOOKING_LOCALE, forwardedParams } from "@/lib/booking";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useT } from "@/i18n/LanguageContext";

type PlanId = "medium" | "premium";
type ServiceId = "fast-track" | "check-in";

const CHECKIN_ORIGIN = "https://checkin.exec-pass.com";

const planMeta: Record<PlanId, { icon: typeof Zap; price: number }> = {
  medium: { icon: Zap, price: 49 },
  premium: { icon: Crown, price: 79 },
};

const serviceMeta: Record<ServiceId, { icon: typeof Zap; itemIcons: (typeof Zap)[] }> = {
  "fast-track": { icon: Zap, itemIcons: [TrendingUp, Globe, Clock] },
  "check-in": { icon: CheckSquare, itemIcons: [ScanLine, Clock, Sparkles] },
};

const PreCheckout = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const { formatPrice, currency } = useCurrency();
  const t = useT("preCheckout");
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("premium");
  const [service, setService] = useState<ServiceId>("fast-track");

  const plans = useMemo(
    () =>
      (["medium", "premium"] as PlanId[]).map((id) => ({
        id,
        name: t<string>(`plans.${id}.name`),
        icon: planMeta[id].icon,
        price: planMeta[id].price,
        period: t<string>(`plans.${id}.period`),
        trial: t<string>(`plans.${id}.trial`),
        badge: id === "premium" ? t<string>("plans.premium.badge") : undefined,
        tagline: t<string>(`plans.${id}.tagline`),
        features: t<string[]>(`plans.${id}.features`),
      })),
    [t]
  );

  const serviceDetails = useMemo(() => {
    const build = (id: ServiceId) => {
      const titles = t<{ title: string; body: string }[]>(`services.${id}.items`);
      return {
        icon: serviceMeta[id].icon,
        label: t<string>(`services.${id}.label`),
        items: titles.map((item, i) => ({
          icon: serviceMeta[id].itemIcons[i],
          title: item.title,
          body: item.body,
        })),
      };
    };
    return {
      "fast-track": build("fast-track"),
      "check-in": build("check-in"),
    } as Record<ServiceId, { icon: typeof Zap; label: string; items: { icon: typeof Zap; title: string; body: string }[] }>;
  }, [t]);

  useEffect(() => {
    document.title = t<string>("documentTitle");
    window.scrollTo(0, 0);
  }, [t]);

  useEffect(() => {
    const p = searchParams.get("plan");
    if (p === "medium" || p === "premium") setSelectedPlan(p);
    const s = searchParams.get("service");
    if (s === "check-in" || s === "fast-track") setService(s);
  }, [searchParams]);

  const checkoutUrl = useMemo(() => {
    const origin = service === "fast-track" ? BOOKING_ORIGIN : CHECKIN_ORIGIN;
    const params = forwardedParams(search);
    params.set("currency", currency);
    if (selectedPlan === "medium") params.set("product", "_3m_49");
    return `${origin}/${BOOKING_LOCALE}?${params.toString()}`;
  }, [service, selectedPlan, currency, search]);

  const membershipHeading = t<string>("checkout.membershipHeading")
    .replace("{plan}", plans.find((p) => p.id === selectedPlan)?.name ?? "")
    .replace("{service}", serviceDetails[service].label);

  const billingNotice = t<string>("checkout.billingNotice")
    .replace("{medium}", formatPrice(49))
    .replace("{premium}", formatPrice(79));

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title={t<string>("seo.title")}
        description={t<string>("seo.description")}
        path="/pre-checkout"
      />
      <ExecPassHeader />

      <main>
        {/* Hero */}
        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 pt-14 pb-10">
            <div className="ep-mono text-flare-ink mb-6">{t<string>("hero.step")}</div>
            <h1 className="ep-heading text-ink text-[40px] md:text-[60px] max-w-3xl leading-[1.02]">
              {t<string>("hero.title")}
            </h1>
            <p className="mt-6 max-w-prose text-[17px] text-ink-muted">
              {t<string>("hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 pb-6">
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
              {plans.map((plan) => {
                const active = selectedPlan === plan.id;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    aria-pressed={active}
                    className={`relative text-left p-8 md:p-10 ep-shadow-soft ep-ease border-2 ${
                      active ? "ep-bg-concrete border-flare" : "ep-bg-concrete border-transparent"
                    }`}
                    style={{ borderRadius: 24 }}
                  >
                    {plan.badge && (
                      <span className="ep-chip absolute top-6 right-6 rounded-full bg-flare text-white px-3 py-1 uppercase tracking-[0.14em]">
                        {plan.badge}
                      </span>
                    )}

                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          active ? "border-flare bg-flare" : "border-line"
                        }`}
                      >
                        {active && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                      <span className="ep-mono text-ink-muted">{plan.name.toUpperCase()}</span>
                      <span className="ep-icon-plate ml-auto md:ml-2">
                        <plan.icon size={18} strokeWidth={2} />
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="ep-heading text-[44px] text-ink leading-none">
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-[14px] text-ink-muted">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-[14px] text-flare-ink">{plan.trial}</p>
                    <p className="text-[13px] text-ink-muted">{t<string>("plans.cancelAnytime")}</p>
                    <p className="mt-4 text-[15px] text-ink-muted">{plan.tagline}</p>

                    <div className="my-6 h-px bg-line" />

                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={16} className="mt-1 shrink-0 text-flare-ink" />
                          <span className="text-[15px] text-ink-muted">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>

            <PricingDisclaimer className="mt-6" />
          </div>
        </section>

        {/* Merged service selection + checkout */}
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 py-20 md:py-24">
            <div className="ep-mono text-flare-bright mb-8">{t<string>("checkout.step")}</div>

            {/* Business tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {(Object.keys(serviceDetails) as ServiceId[]).map((id) => {
                const s = serviceDetails[id];
                const active = service === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setService(id)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] ep-ease border ${
                      active
                        ? "bg-flare text-white border-flare"
                        : "text-steel border-[hsl(var(--ep-line-dark))] hover:text-bright hover:border-flare"
                    }`}
                  >
                    <s.icon size={16} /> {s.label}
                  </button>
                );
              })}
            </div>

            <h2 className="ep-heading text-bright text-[36px] md:text-[52px] max-w-3xl leading-[1.05]">
              {membershipHeading}
            </h2>

            {/* Service highlights */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {serviceDetails[service].items.map((item, i) => (
                <div
                  key={item.title}
                  className="ep-bg-graphite border border-[hsl(var(--ep-line-dark))] p-8"
                  style={{ borderRadius: 20 }}
                >
                  <div className="ep-icon-plate mb-6">
                    <item.icon size={20} strokeWidth={2} />
                  </div>
                  <div className="ep-mono text-steel mb-2">0{i + 1}</div>
                  <h3 className="ep-heading text-[22px] text-bright">{item.title}</h3>
                  <p className="mt-3 text-[15px] text-steel">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-prose text-[17px] text-steel">
              {t<string>("checkout.disclaimer")}
            </p>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 ep-btn-type text-[14px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-8 py-4 inline-flex items-center gap-3 ep-ease ep-press rounded-full"
            >
              {t<string>("checkout.cta")} <ArrowRight size={16} />
            </a>

            <p className="mt-6 max-w-2xl text-[13px] text-steel">
              {billingNotice}
            </p>
          </div>
        </section>
      </main>

      <ExecPassFooter />
    </div>
  );
};

export default PreCheckout;
