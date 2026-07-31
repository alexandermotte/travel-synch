import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { LangLink } from "@/components/LangLink";
import { useCurrency } from "@/contexts/CurrencyContext";
import { preCheckoutPath } from "@/lib/booking";
import { useT } from "@/i18n/LanguageContext";

/** Pre-purchase questions about the Exec Pass membership. Account questions live in the booking app. */
const buildFaqs = (
  items: { q: string; a: string }[],
  price: (n: number) => string,
) =>
  items.map((f) => ({
    q: f.q,
    a: f.a.replace(/\{\{price49\}\}/g, price(49)).replace(/\{\{price79\}\}/g, price(79)),
  }));

const ExecPassFAQ = () => {
  const { search } = useLocation();
  const { formatPrice } = useCurrency();
  const t = useT("faq");
  const rawItems = t<{ q: string; a: string }[]>("items");
  const faqs = buildFaqs(rawItems, formatPrice);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    document.title = "ExecPass - FAQ";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
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
            <div className="ep-mono text-flare-bright mb-8">{t("hero.kicker")}</div>
            <h1 className="ep-display text-bright text-[48px] md:text-[80px] leading-[1.0] max-w-4xl">
              {t("hero.title")}
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
                      <p className="pb-6 pr-16 text-[16px] text-ink-muted max-w-prose whitespace-pre-line leading-relaxed animate-ep-fade-up">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-14">
              <LangLink
                to={preCheckoutPath(undefined, search)}
                className="ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-8 py-4 ep-ease ep-press"
                style={{ borderRadius: 12 }}
              >
                {t("cta")} <ArrowRight size={16} />
              </LangLink>
            </div>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassFAQ;
