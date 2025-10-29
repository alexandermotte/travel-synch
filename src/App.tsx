import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import ExecPassHome from "./pages/ExecPassHome";
import ExecPassServices from "./pages/ExecPassServices";
import ExecPassFAQ from "./pages/ExecPassFAQ";
import ExecPassContact from "./pages/ExecPassContact";
import ExecPassUnsubscribe from "./pages/ExecPassUnsubscribe";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import PreCheckout from "./pages/PreCheckout";
import Services from "./pages/Services";
import FastTrack from "./pages/FastTrack";
import FastTrackForm from "./pages/FastTrackForm";
import FastTrackPayment from "./pages/FastTrackPayment";
import Contact from "./pages/Contact";
import Unsubscribe from "./pages/Unsubscribe";
import Terms from "./pages/Terms";
import SubscriptionTerms from "./pages/SubscriptionTerms";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import ConfigGenerator from "./pages/ConfigGenerator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Currency context provides global currency state
const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CurrencyProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<ExecPassHome />} />
            <Route path="/services-pricing" element={<ExecPassServices />} />
            <Route path="/faq" element={<ExecPassFAQ />} />
            <Route path="/contacts" element={<ExecPassContact />} />
            <Route path="/unsubscribe" element={<ExecPassUnsubscribe />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/subscription-terms" element={<SubscriptionTerms />} />
            <Route path="/travel-synch" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/pre-checkout" element={<PreCheckout />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fast-track" element={<FastTrack />} />
            <Route path="/fast-track-form" element={<FastTrackForm />} />
            <Route path="/fast-track-payment/:orderId" element={<FastTrackPayment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/config-generator" element={<ConfigGenerator />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CurrencyProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
