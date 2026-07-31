import { useEffect, useState } from "react";
import { MessageCircle, Mail, Phone, Loader2, CheckCircle, ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { LangLink } from "@/components/LangLink";
import { useT } from "@/i18n/LanguageContext";

const ExecPassContact = () => {
  const t = useT("contact");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactSchema = z.object({
    firstName: z.string().trim().min(1, { message: t("validation.firstNameRequired") }).max(100),
    lastName: z.string().trim().max(100),
    email: z.string().trim().email({ message: t("validation.invalidEmail") }).max(255),
    phone: z.string().trim().min(1, { message: t("validation.phoneRequired") }).max(30),
    message: z.string().trim().min(1, { message: t("validation.messageRequired") }).max(1000),
  });

  const ROUTES = [
    {
      icon: MessageCircle,
      label: t("routes.whatsapp.label"),
      value: "+44 20 3936 2491",
      href: "https://wa.me/442039362491",
      note: t("routes.whatsapp.note"),
    },
    {
      icon: Mail,
      label: t("routes.email.label"),
      value: "contact@exec-pass.com",
      href: "mailto:contact@exec-pass.com",
      note: t("routes.email.note"),
    },
    {
      icon: Phone,
      label: t("routes.phone.label"),
      value: "+44 20 3936 2491",
      href: "tel:+442039362491",
      note: t("routes.phone.note"),
    },
  ];

  useEffect(() => {
    document.title = t("pageTitle");
    window.scrollTo(0, 0);
  }, [t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/[a-zA-Z]/g, "") : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    }, 800);
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[16px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-flare focus:ring-2 focus:ring-flare/20 ep-ease";


  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
        path="/contact"
      />
      <ExecPassHeader />
      <main>
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 pt-20 pb-24 md:pt-24 md:pb-28">
            <div className="ep-mono text-flare-bright mb-8">{t("hero.eyebrow")}</div>
            <h1 className="ep-display text-bright text-[48px] md:text-[80px] leading-[1.0] max-w-4xl">
              {t("hero.title")}
            </h1>
            <p className="mt-8 max-w-prose text-[19px] text-steel">
              {t("hero.subtitle")}
            </p>
          </div>
        </section>

        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 py-24">
            <div className="grid gap-6 md:grid-cols-3">
              {ROUTES.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  className="p-8 ep-bg-concrete ep-shadow-soft ep-ease block"
                  style={{ borderRadius: 20 }}
                >
                  <div className="ep-icon-plate mb-6">
                    <r.icon size={20} strokeWidth={2} />
                  </div>
                  <div className="ep-mono text-ink-muted mb-2">{r.label}</div>
                  <div className="ep-heading text-[20px] text-ink break-words">{r.value}</div>
                  <p className="mt-3 text-[15px] text-ink-muted">{r.note}</p>
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="mt-16">
              <div className="ep-mono text-flare-ink mb-4">{t("form.eyebrow")}</div>
              <h2 className="ep-heading text-[30px] md:text-[36px] text-ink">{t("form.title")}</h2>
              <p className="mt-3 text-[16px] text-ink-muted">
                {t("form.subtitle")}
              </p>

              {submitted ? (
                <div className="mt-8 p-10 ep-bg-concrete ep-shadow-soft text-center" style={{ borderRadius: 20 }}>
                  <CheckCircle className="h-12 w-12 text-flare mx-auto mb-5" />
                  <h3 className="ep-heading text-[22px] text-ink mb-2">{t("success.title")}</h3>
                  <p className="text-[15px] text-ink-muted mb-5">{t("success.subtitle")}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[14px] text-flare-ink underline underline-offset-2"
                  >
                    {t("success.another")}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 p-8 ep-bg-concrete ep-shadow-soft space-y-5"
                  style={{ borderRadius: 20 }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-[14px] font-medium text-ink-muted mb-2">{t("form.firstName")}</label>
                      <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} maxLength={100} className={inputClass} placeholder={t("form.firstNamePlaceholder")} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[14px] font-medium text-ink-muted mb-2">{t("form.lastName")}</label>
                      <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} maxLength={100} className={inputClass} placeholder={t("form.lastNamePlaceholder")} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-ink-muted mb-2">{t("form.email")}</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} maxLength={255} className={inputClass} placeholder={t("form.emailPlaceholder")} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[14px] font-medium text-ink-muted mb-2">{t("form.phone")}</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} maxLength={30} className={inputClass} placeholder={t("form.phonePlaceholder")} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[14px] font-medium text-ink-muted mb-2">{t("form.message")}</label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} maxLength={1000} className={`${inputClass} resize-none`} placeholder={t("form.messagePlaceholder")} />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ep-btn-type w-full inline-flex items-center justify-center gap-2 rounded-xl bg-flare-fill px-6 py-4 text-bright hover:bg-flare-fill-hover disabled:opacity-60 ep-ease ep-press"
                  >
                    {isSubmitting ? (<><Loader2 className="h-4 w-4 animate-spin" />{t("form.sending")}</>) : (<>{t("form.submit")}<ArrowRight className="h-4 w-4" /></>)}
                  </button>
                </form>
              )}

              {/* Disclaimer */}
              <div className="mt-6 text-[13px] text-ink-muted/80 leading-relaxed space-y-3">
                <p>
                  {t("disclaimer.p1")}
                </p>
                <p>
                  {t("disclaimer.p2Before")}{" "}
                  <a href="mailto:contact@exec-pass.com" className="text-flare-ink underline underline-offset-2">
                    contact@exec-pass.com
                  </a>
                  {t("disclaimer.p2After")}
                </p>
                <p>
                  {t("disclaimer.p3Before")}{" "}
                  <LangLink to="/privacy" className="text-flare-ink underline underline-offset-2">
                    {t("disclaimer.p3Link")}
                  </LangLink>
                  .
                </p>
              </div>
            </div>


            <div className="mt-16 p-8 ep-bg-concrete ep-shadow-soft" style={{ borderRadius: 20 }}>
              <div className="ep-mono text-flare-ink mb-4">{t("office.eyebrow")}</div>
              <address className="not-italic text-[16px] text-ink leading-relaxed">
                {t("office.line1")}<br />
                {t("office.line2")}<br />
                {t("office.line3")}
              </address>
              <p className="ep-chip text-ink-muted mt-4">{t("office.reg")}</p>
            </div>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassContact;
