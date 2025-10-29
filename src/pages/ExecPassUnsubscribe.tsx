import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ExecPassUnsubscribe = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Unsubscribe link sent!", description: "Check your email for the unsubscribe link." });
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      <ExecPassHeader />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">OPTION 1</h2>
              <p className="mb-6">Add your email below. You will receive a link via email to unsubscribe.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-sm font-medium mb-2">Email*</label><input type="email" required className="w-full px-4 py-2 border rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Unsubscribe</Button>
              </form>
            </Card>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">OPTION 2</h2>
              <p className="mb-6">Contact our Customer Service. We will be more than happy to assist you.</p>
              <div className="space-y-4">
                <div><h3 className="font-semibold mb-2">Call us at</h3><p>+4420 3856 7769</p></div>
                <div><h3 className="font-semibold mb-2">Email us at</h3><a href="mailto:contact@exec-pass.com" className="text-accent hover:underline">contact@exec-pass.com</a></div>
                <p className="text-sm text-muted-foreground pt-4">Your satisfaction is our top priority. Please contact us if you have any questions regarding our service or how it works. Our customer service is here to help you every day from 9 AM to 8 PM.</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <ExecPassFooter />
    </div>
  );
};

export default ExecPassUnsubscribe;
