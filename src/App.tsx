import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { bookingUrl } from "@/lib/booking";
import ExecPassHome from "./pages/ExecPassHome";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import ExecPassFAQ from "./pages/ExecPassFAQ";
import ExecPassContact from "./pages/ExecPassContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Legal text, checkout and account UI live on the booking app / member zone.
 * Legacy Lovable routes hand off instead of duplicating compliance-critical copy.
 */
const HandOff = ({ path }: { path: string }) => {
  const { search } = useLocation();
  useEffect(() => {
    window.location.replace(bookingUrl(path, search));
  }, [path, search]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CurrencyProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Marketing site — the five pages exec-pass.com owns */}
              <Route path="/" element={<ExecPassHome />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/faq" element={<ExecPassFAQ />} />
              <Route path="/contact" element={<ExecPassContact />} />

              {/* Legacy marketing URLs */}
              <Route path="/contacts" element={<Navigate to="/contact" replace />} />
              <Route path="/services-pricing" element={<Navigate to="/about" replace />} />
              <Route path="/services" element={<Navigate to="/how-it-works" replace />} />

              {/* Handed off to the booking app (single source of truth) */}
              <Route path="/terms" element={<HandOff path="terms" />} />
              <Route path="/privacy" element={<HandOff path="privacy" />} />
              <Route path="/subscription-terms" element={<HandOff path="subscription-terms" />} />
              <Route path="/legal-notice" element={<HandOff path="legal-notice" />} />
              <Route path="/cookie-policy" element={<HandOff path="cookie-policy" />} />
              <Route path="/unsubscribe" element={<HandOff path="unsubscribe" />} />
              <Route path="/pre-checkout" element={<HandOff path="" />} />
              <Route path="/fast-track" element={<HandOff path="" />} />
              <Route path="/fast-track-form" element={<HandOff path="" />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CurrencyProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
