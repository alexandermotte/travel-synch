import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { LangLink } from "@/components/LangLink";
import { preCheckoutPath } from "@/lib/booking";
import { useT } from "@/i18n/LanguageContext";

const About = () => {
  const { search } = useLocation();
  const t = useT("about");
  const values = t<{ title: string; body: string }[]>("values.items");

  useEffect(() => {
    document.title = "ExecPass - About";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
        path="/about"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Exec Pass",
            legalName: "Marvelliant B.V.",
            url: "https://exec-pass.com",
            email: "contact@exec-pass.com",
            telephone: "+44 20 3936 2491",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bos en Lommerplein 280",
              postalCode: "1055RW",
              addressLocality: "Amsterdam",
              addressCountry: "NL",
            },
            sameAs: ["https://fasttrack.exec-pass.com/en"],
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
            <p className="mt-8 max-w-prose text-[19px] text-steel">{t("hero.body")}</p>
          </div>
        </section>

        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 py-24">
            <h2 className="ep-display text-ink text-[38px] md:text-[48px] max-w-3xl">
              {t("values.title")}
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((v, i) => (
                <div key={v.title} className="p-8 ep-bg-concrete ep-shadow-soft" style={{ borderRadius: 20 }}>
                  <div className="ep-chip text-ink-muted mb-3">0{i + 1}</div>
                  <h3 className="ep-display text-[22px] text-ink">{v.title}</h3>
                  <p className="mt-3 text-[15px] text-ink-muted">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 ep-bg-concrete ep-shadow-soft max-w-2xl" style={{ borderRadius: 20 }}>
              <div className="ep-mono text-flare-ink mb-4">{t("operator.kicker")}</div>
              <address className="not-italic text-[16px] text-ink leading-relaxed">
                {t("operator.addressLine1")}<br />
                {t("operator.addressLine2")}<br />
                {t("operator.addressLine3")}
              </address>
              <p className="ep-chip text-ink-muted mt-4">{t("operator.registration")}</p>
              <LangLink
                to={preCheckoutPath(undefined, search)}
                className="ep-btn-type text-[13px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-6 py-3 mt-8 ep-ease ep-press"
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

export default About;
