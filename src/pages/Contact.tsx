import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }).max(100),
  lastName: z.string().trim().min(1, { message: "Last name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(1, { message: "Phone number is required" }).max(20),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
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
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
                CONTACT US
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Option 1 - Contact Information */}
                <Card className="p-8 bg-card border-border">
                  <h2 className="text-2xl font-bold mb-4">OPTION 1</h2>
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you for visiting our contact page.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our customer service is ready to provide support over line chat, phone, or email seven days a week from 9:00 am to 8:00 pm.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      You may also find it useful to visit FAQ on our website, as this may help answer any questions you have.
                    </p>
                  </div>

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

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Use the chat below
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Available 9 AM - 8 PM, 7 days a week
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Option 2 - Contact Form */}
                <Card className="p-8 bg-card border-border">
                  <h2 className="text-2xl font-bold mb-4">OPTION 2</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Your satisfaction is our top priority. Alternatively, you can contact us directly via the form below.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First name*
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          maxLength={100}
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last name*
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          maxLength={100}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email address*
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        maxLength={255}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone number*
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        maxLength={20}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message*
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[120px]"
                        maxLength={1000}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Now"}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
