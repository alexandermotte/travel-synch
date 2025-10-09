import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TravelManagement } from "@/components/TravelManagement";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Pricing } from "@/components/Pricing";
import { TravelAssistance } from "@/components/TravelAssistance";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TravelManagement />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <TravelAssistance />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
