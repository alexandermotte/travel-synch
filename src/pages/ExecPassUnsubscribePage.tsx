import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, CheckCircle2, XCircle, Mail, Phone } from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.string().trim().email({ message: "Enter a valid email address" }).max(255);

const ExecPassUnsubscribePage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tokenStatus, setTokenStatus] = useState<"loading" | "success" | "error" | null>(
    token ? "loading" : null
  );
  const [tokenMessage, setTokenMessage] = useState("");

  useEffect(() => {
    document.title = "ExecPass - Unsubscribe";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("unsubscribe", {
          body: { token, action: "confirm" },
        });
        if (error) throw new Error(error.message);
        if (data?.success) {
          setTokenStatus("success");
          setTokenMessage(data.message || "You have been unsubscribed from our emails.");
        } else {
          setTokenStatus("error");
          setTokenMessage(data?.message || "This unsubscribe link is invalid or has expired.");
        }
      } catch (err) {
        setTokenStatus("error");
        setTokenMessage((err as Error).message || "Something went wrong. Please try again.");
      }
    })();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("unsubscribe", {
        body: {
          email: parsed.data,
          fromEmail: "contact@exec-pass.com",
          origin: window.location.origin,
        },
      });
      if (error) throw new Error(error.message);
      if (!data?.success) throw new Error(data?.message || "Request failed");
      toast.success("Check your inbox", {
        description: "We sent you a link to confirm your unsubscribe request.",
      });
      setEmail("");
    } catch (err) {
      toast.error("We couldn't process that", {
        description: (err as Error).message || "Please try again or contact our team.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[16px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-flare focus:ring-2 focus:ring-flare/20 ep-ease";

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title="Unsubscribe from Exec Pass emails"
        description="Stop receiving Exec Pass emails. Enter your email address and we'll send you a confirmation link, or contact our team directly."
        path="/unsubscribe"
      />
      <ExecPassHeader />
      <main>
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 pt-20 pb-24 md:pt-24 md:pb-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="ep-chip text-flare-bright">Email preferences</div>
              <h1 className="mt-5 text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] text-bright font-display font-semibold tracking-tight">
                Unsubscribe
              </h1>
              <p className="mt-5 text-[17px] text-steel">
                Enter the email address you'd like removed. We'll send a confirmation link — one
                click and you're off the list.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-white p-8 ep-shadow-soft">
              {token ? (
                <div>
                  {tokenStatus === "loading" && (
                    <div className="flex flex-col items-center gap-4 py-6">
                      <Loader2 className="h-7 w-7 animate-spin text-flare" />
                      <p className="text-ink-muted">Confirming your unsubscribe request…</p>
                    </div>
                  )}
                  {tokenStatus === "success" && (
                    <div className="flex items-start gap-3 rounded-2xl border border-flare/20 bg-flare/5 p-5">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-flare" />
                      <div>
                        <h2 className="ep-heading text-ink text-[18px]">You're unsubscribed</h2>
                        <p className="mt-1 text-[15px] text-ink-muted">{tokenMessage}</p>
                      </div>
                    </div>
                  )}
                  {tokenStatus === "error" && (
                    <div className="flex items-start gap-3 rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                      <div>
                        <h2 className="ep-heading text-ink text-[18px]">We couldn't confirm that</h2>
                        <p className="mt-1 text-[15px] text-ink-muted">{tokenMessage}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="unsubscribe-email" className="mb-2 block text-[14px] text-ink-muted">
                      Email address <span className="text-flare">*</span>
                    </label>
                    <input
                      id="unsubscribe-email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ep-btn-type inline-flex w-full items-center justify-center gap-2 rounded-full bg-flare px-6 py-3.5 text-[13px] uppercase tracking-wider text-white ep-ease ep-press hover:bg-flare-bright disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Processing…
                      </>
                    ) : (
                      "Send unsubscribe link"
                    )}
                  </button>
                  <p className="text-center text-[13px] leading-relaxed text-ink-muted">
                    Unsubscribing stops marketing emails. It does not cancel an active membership —
                    for that, contact our team below.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-container px-6 py-16 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="ep-heading text-[26px] text-ink">Prefer to talk to someone?</h2>
              <p className="mt-3 text-[16px] text-ink-muted">
                Our team can remove you from the list and answer anything about your account.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 ep-shadow-soft">
                  <Phone className="mx-auto h-5 w-5 text-flare" />
                  <h3 className="ep-heading mt-4 text-[16px] text-ink">Call us</h3>
                  <a
                    href="tel:+442039362491"
                    className="mt-2 block text-[15px] text-flare hover:text-flare-bright ep-ease"
                  >
                    +44 20 3936 2491
                  </a>
                </div>
                <div className="rounded-2xl bg-white p-6 ep-shadow-soft">
                  <Mail className="mx-auto h-5 w-5 text-flare" />
                  <h3 className="ep-heading mt-4 text-[16px] text-ink">Email us</h3>
                  <a
                    href="mailto:contact@exec-pass.com"
                    className="mt-2 block text-[15px] text-flare hover:text-flare-bright ep-ease"
                  >
                    contact@exec-pass.com
                  </a>
                </div>
              </div>
              <p className="mt-8 text-[13px] text-ink-muted">
                Customer service is available every day from 09:00 to 20:00 CET.
              </p>
            </div>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassUnsubscribePage;
