import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
});

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse({ email });
      setIsSubmitting(true);
      
      // Simulate unsubscribe request
      setTimeout(() => {
        toast.success("Unsubscribe link sent to your email");
        setEmail("");
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0].message);
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-sky via-background to-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Unsubscribe
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Option 1 - Email Form */}
                <Card className="p-8 bg-card border-border">
                  <h2 className="text-2xl font-bold mb-4">OPTION 1</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Add your email below. You will receive a link via email to unsubscribe.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email*
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full"
                        maxLength={255}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Unsubscribe"}
                    </Button>
                  </form>
                </Card>

                {/* Option 2 - Contact Info */}
                <Card className="p-8 bg-card border-border">
                  <h2 className="text-2xl font-bold mb-4">OPTION 2</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Contact our Customer Service. We will be more than happy to assist you.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Call us at
                      </h3>
                      <a
                        href="tel:+442039360018"
                        className="flex items-center space-x-3 text-lg font-medium text-primary hover:text-primary/80 transition-smooth"
                      >
                        <Phone className="h-5 w-5" />
                        <span>+44 203 936 0018</span>
                      </a>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Email us at
                      </h3>
                      <a
                        href="mailto:contact@my-trip-online.com"
                        className="flex items-center space-x-3 text-lg font-medium text-primary hover:text-primary/80 transition-smooth"
                      >
                        <Mail className="h-5 w-5" />
                        <span>contact@my-trip-online.com</span>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Additional Info */}
              <Card className="mt-8 p-8 bg-secondary/30 border-border text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Your satisfaction is our top priority. Please contact us if you have any questions regarding our service or how it works.
                </p>
                <p className="text-muted-foreground mt-4">
                  Our customer service is here to help you every day from 9 AM to 8 PM.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Unsubscribe;
