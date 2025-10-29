import { CurrencyPicker } from "@/components/CurrencyPicker";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Subscription Terms", href: "/subscription-terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "FAQ", href: "/faq" },
];

const moreLinks = [
  { label: "Travel Assistance", href: "/services#subscription" },
  { label: "Airport Fast Track", href: "/services#fast-track" },
  { label: "Automated Check-In", href: "/services#checkin" },
  { label: "Airport Lounges", href: "/services" },
  { label: "Concierge Services", href: "/services#concierge" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Currency Selector */}
          <div>
            <h3 className="font-semibold mb-4">Currency</h3>
            <CurrencyPicker />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">BLOOMBACK LIMITED</p>
              <p>Office 6, Suite A 13 Reeves Way<br />South Woodham Ferrers<br />Chelmsford, Essex, CM3 5XF<br />United Kingdom</p>
              <a
                href="mailto:contact@travel-synch.com"
                className="block hover:text-primary transition-smooth"
              >
                contact@travel-synch.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Travel Synch. All rights reserved.
            </p>
            <span className="text-xl font-display font-bold text-primary">Travel Synch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
