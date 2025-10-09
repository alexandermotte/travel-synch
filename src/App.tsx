import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import PreCheckout from "./pages/PreCheckout";
import Services from "./pages/Services";
import FastTrack from "./pages/FastTrack";
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
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/pre-checkout" element={<PreCheckout />} />
              <Route path="/services" element={<Services />} />
              <Route path="/fast-track" element={<FastTrack />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/unsubscribe" element={<Unsubscribe />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/subscription-terms" element={<SubscriptionTerms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
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
