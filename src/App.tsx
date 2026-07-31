import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { bookingUrl } from "@/lib/booking";
import { DEFAULT_LANG, isLang } from "@/i18n/config";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ExecPassHome from "./pages/ExecPassHome";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import ExecPassFAQ from "./pages/ExecPassFAQ";
import ExecPassContact from "./pages/ExecPassContact";
import PreCheckout from "./pages/PreCheckout";
import NotFound from "./pages/NotFound";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SubscriptionTermsPage from "./pages/SubscriptionTermsPage";
import LegalNotice from "./pages/LegalNotice";
import CookiePolicy from "./pages/CookiePolicy";
import ExecPassUnsubscribePage from "./pages/ExecPassUnsubscribePage";


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

/** Any URL without a valid language segment is redirected to the default locale. */
const RedirectToDefaultLang = () => {
  const { pathname, search, hash } = useLocation();
  const clean = pathname === "/" ? "" : pathname;
  return <Navigate to={`/${DEFAULT_LANG}${clean}${search}${hash}`} replace />;
};

/** Routes served under /{lang}/… */
const LocalizedRoutes = () => {
  const { lang } = useParams();
  if (!isLang(lang)) return <RedirectToDefaultLang />;

  return (
    <LanguageProvider lang={lang}>
      <Routes>
        {/* Marketing site */}
        <Route path="" element={<ExecPassHome />} />
        <Route path="about" element={<About />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="faq" element={<ExecPassFAQ />} />
        <Route path="contact" element={<ExecPassContact />} />

        {/* Legacy marketing URLs */}
        <Route path="contacts" element={<Navigate to="../contact" replace />} />
        <Route path="services-pricing" element={<Navigate to="../about" replace />} />
        <Route path="services" element={<Navigate to="../how-it-works" replace />} />

        {/* Legal pages hosted on exec-pass.com */}
        <Route path="terms" element={<TermsConditions />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="subscription-terms" element={<SubscriptionTermsPage />} />
        <Route path="legal-notice" element={<LegalNotice />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="unsubscribe" element={<ExecPassUnsubscribePage />} />
        <Route path="pre-checkout" element={<PreCheckout />} />
        <Route path="fast-track" element={<HandOff path="" />} />
        <Route path="fast-track-form" element={<HandOff path="" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  );
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
              <Route path="/:lang/*" element={<LocalizedRoutes />} />
              <Route path="*" element={<RedirectToDefaultLang />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CurrencyProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
