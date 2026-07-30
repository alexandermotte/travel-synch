import { useEffect, useState } from "react";
import { MessageCircle, Mail, Phone, Loader2, CheckCircle, ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }).max(100),
  lastName: z.string().trim().max(100),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  phone: z.string().trim().min(1, { message: "Phone number is required" }).max(30),
  message: z.string().trim().min(1, { message: "Please write a message" }).max(1000),
});


const ROUTES = [
  {
    icon: MessageCircle,
    label: "WhatsApp concierge",
    value: "+44 20 3936 2491",
    href: "https://wa.me/442039362491",
    note: "24/7, nine languages. Fastest route for anything time-critical.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@exec-pass.com",
    href: "mailto:contact@exec-pass.com",
    note: "For account, billing and documentation requests.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 20 3936 2491",
    href: "tel:+442039362491",
    note: "Every day, 09:00–20:00 CET.",
  },
];

const ExecPassContact = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "ExecPass - Contact";
    window.scrollTo(0, 0);
  }, []);

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
        title="Contact Exec Pass — WhatsApp, email and phone support"
        description="Reach the Exec Pass concierge 24/7 on WhatsApp, by email at contact@exec-pass.com, or by phone daily from 09:00 to 20:00 CET."
        path="/contact"
      />
      <ExecPassHeader />
      <main>
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 pt-20 pb-24 md:pt-24 md:pb-28">
            <div className="ep-mono text-flare-bright mb-8">CONTACT</div>
            <h1 className="ep-display text-bright text-[48px] md:text-[80px] leading-[1.0] max-w-4xl">
              A human, always.
            </h1>
            <p className="mt-8 max-w-prose text-[19px] text-steel">
              Three ways to reach the concierge team. No ticket forms, no chatbots.
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
            <div className="mt-16 max-w-2xl">
              <div className="ep-mono text-flare-ink mb-4">SEND A MESSAGE</div>
              <h2 className="ep-heading text-[30px] md:text-[36px] text-ink">Write to us directly</h2>
              <p className="mt-3 text-[16px] text-ink-muted">
                Fill in the form and the concierge team will get back to you shortly.
              </p>

              {submitted ? (
                <div className="mt-8 p-10 ep-bg-concrete ep-shadow-soft text-center" style={{ borderRadius: 20 }}>
                  <CheckCircle className="h-12 w-12 text-flare mx-auto mb-5" />
                  <h3 className="ep-heading text-[22px] text-ink mb-2">Message sent</h3>
                  <p className="text-[15px] text-ink-muted mb-5">We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[14px] text-flare-ink underline underline-offset-2"
                  >
                    Send another message
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
                      <label htmlFor="firstName" className="block text-[14px] font-medium text-ink-muted mb-2">First name*</label>
                      <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} maxLength={100} className={inputClass} placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[14px] font-medium text-ink-muted mb-2">Last name</label>
                      <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} maxLength={100} className={inputClass} placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-ink-muted mb-2">Email address*</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} maxLength={255} className={inputClass} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[14px] font-medium text-ink-muted mb-2">Phone number*</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} maxLength={30} className={inputClass} placeholder="+44 20 3936 2491" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[14px] font-medium text-ink-muted mb-2">How can we help you?*</label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} maxLength={1000} className={`${inputClass} resize-none`} placeholder="Tell us what you need…" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ep-btn-type w-full inline-flex items-center justify-center gap-2 rounded-xl bg-flare-fill px-6 py-4 text-bright hover:bg-flare-fill-hover disabled:opacity-60 ep-ease ep-press"
                  >
                    {isSubmitting ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending…</>) : (<>Submit now<ArrowRight className="h-4 w-4" /></>)}
                  </button>
                </form>
              )}

              {/* Disclaimer */}
              <div className="mt-6 text-[13px] text-ink-muted/80 leading-relaxed space-y-3">
                <p>
                  The information collected through this form is processed by Marvelliant B.V., acting as
                  data controller, for the purpose of handling your request. Fields marked with an asterisk
                  (*) are mandatory; failure to provide this information may prevent us from processing your
                  request. This processing is based on our legitimate interest in responding to your
                  enquiries. The data collected includes your identification and contact details, as well as
                  any information you choose to provide in your message.
                </p>
                <p>
                  You have the right to access, rectify, erase, and restrict the processing of your data, the
                  right to object to such processing, and the right to data portability. Where processing is
                  based on your consent, you may withdraw it at any time without affecting the lawfulness of
                  processing carried out before such withdrawal. You may exercise these rights by writing to{" "}
                  <a href="mailto:contact@exec-pass.com" className="text-flare-ink underline underline-offset-2">
                    contact@exec-pass.com
                  </a>
                  . You also have the right to lodge a complaint with the competent supervisory authority, in
                  particular the data protection authority of your country of residence within the European
                  Union.
                </p>
                <p>
                  To learn more about how your data is managed, please refer to our{" "}
                  <Link to="/privacy" className="text-flare-ink underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>


            <div className="mt-16 p-8 ep-bg-concrete ep-shadow-soft max-w-2xl" style={{ borderRadius: 20 }}>
              <div className="ep-mono text-flare-ink mb-4">REGISTERED OFFICE</div>
              <address className="not-italic text-[16px] text-ink leading-relaxed">
                MARVELLIANT B.V.<br />
                Bos en Lommerplein 280<br />
                1055RW Amsterdam, Netherlands
              </address>
              <p className="ep-chip text-ink-muted mt-4">KVK 96513519 · RSIN 867643298</p>
            </div>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassContact;
