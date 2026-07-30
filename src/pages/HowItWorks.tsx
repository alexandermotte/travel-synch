import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, UserPlus, CalendarCheck, DoorOpen } from "lucide-react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";
import { bookingUrl, preCheckoutPath } from "@/lib/booking";

const STEPS = [
  {
    icon: UserPlus,
    title: "Enrol",
    body: "Tell us who is flying and from where. Enrolment happens once, in the booking app, and takes about two minutes.",
  },
  {
    icon: CalendarCheck,
    title: "Book as normal",
    body: "Keep booking flights however you already do. Add your flight details and we handle the priority lane, the check-in window and the lounge.",
  },
  {
    icon: DoorOpen,
    title: "Skip the queue",
    body: "Arrive, walk into the Fast Track lane, and go straight to airside. Boarding pass already on your phone; concierge on WhatsApp if anything moves.",
  },
];

const HowItWorks = () => {
  const { search } = useLocation();
  useEffect(() => {
    document.title = "ExecPass - How It Works";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ep-bg-void">
      <Seo
        title="How Exec Pass works — enrol, book, skip the queue"
        description="Three steps: enrol once, book your flight as normal, then walk the Fast Track lane straight to airside. Automatic check-in and 24/7 concierge included."
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
        <section className="ep-bg-void ep-wash-void">
          <div className="mx-auto max-w-container px-6 pt-20 pb-24 md:pt-24 md:pb-28">
            <div className="ep-mono text-flare-bright mb-8">HOW IT WORKS</div>
            <h1 className="ep-display text-bright text-[48px] md:text-[80px] leading-[1.0] max-w-4xl">
              Three steps.<br />Then airside.
            </h1>
            <p className="mt-8 max-w-prose text-[19px] text-steel">
              No app to learn, no new way of booking flights. Exec Pass slots in around the way you
              already travel.
            </p>
          </div>
        </section>

        <section className="ep-bg-paper">
          <div className="mx-auto max-w-container px-6 py-24">
            <div className="grid gap-6 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <div key={s.title} className="p-8 ep-bg-concrete ep-shadow-soft" style={{ borderRadius: 20 }}>
                  <div className="ep-icon-plate mb-6">
                    <s.icon size={20} strokeWidth={2} />
                  </div>
                  <div className="ep-chip text-ink-muted mb-2">STEP 0{i + 1}</div>
                  <h3 className="ep-display text-[26px] text-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-ink-muted">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <Link
                to={preCheckoutPath(undefined, search)}
                className="ep-btn-type text-[14px] uppercase tracking-wider inline-flex items-center gap-3 bg-flare hover:bg-flare-bright text-white px-8 py-4 ep-ease ep-press"
                style={{ borderRadius: 12 }}
              >
                Join Exec Pass <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default HowItWorks;
