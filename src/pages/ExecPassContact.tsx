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
                  <div className="ep-display text-[22px] text-ink break-words">{r.value}</div>
                  <p className="mt-3 text-[15px] text-ink-muted">{r.note}</p>
                </a>
              ))}
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
