import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const ExecPassContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ fullName: "", email: "", message: "" });

  useEffect(() => {
    document.title = "ExecPass - Contact";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <ExecPassHeader />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div><strong>Call us at:</strong><br/>+4420 3856 7769</div>
                <div><strong>Email us at:</strong><br/><a href="mailto:contact@exec-pass.com" className="text-accent hover:underline">contact@exec-pass.com</a></div>
                <p className="text-sm text-muted-foreground mt-6">
                  Your satisfaction is our top priority. Please contact us if you have any questions regarding our service or how it works. Our customer service is here to help you every day from 9 AM to 8 PM.
                </p>
              </div>
            </Card>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-sm font-medium mb-2">Full Name*</label><input type="text" required className="w-full px-4 py-2 border rounded-md" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} /></div>
                <div><label className="block text-sm font-medium mb-2">Email*</label><input type="email" required className="w-full px-4 py-2 border rounded-md" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
                <div><label className="block text-sm font-medium mb-2">How can we help you?*</label><textarea required rows={5} className="w-full px-4 py-2 border rounded-md" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} /></div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Submit</Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassContact;
