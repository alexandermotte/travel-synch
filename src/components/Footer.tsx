import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const currencies = [
  { code: "USD", label: "United States Dollars" },
  { code: "EUR", label: "Euros" },
  { code: "GBP", label: "Great Britain Pounds" },
];

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
  { label: "Travel Assistance", href: "/travel-assistance" },
  { label: "Airport Fast Track", href: "/fast-track" },
  { label: "Automated Check-In", href: "/check-in" },
  { label: "Airport Lounges", href: "/lounges" },
  { label: "Concierge Services", href: "/concierge" },
];

export const Footer = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Currency Selector */}
          <div>
            <h3 className="font-semibold mb-4">Currency</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {selectedCurrency}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-popover">
                {currencies.map((currency) => (
                  <DropdownMenuItem
                    key={currency.code}
                    onClick={() => setSelectedCurrency(currency.code)}
                    className="cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">{currency.code}</div>
                      <div className="text-xs text-muted-foreground">{currency.label}</div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              <p className="font-medium text-foreground">Eudialyte Limited</p>
              <p>Vladimirou Kafkaridi 2A<br />Nicosia, 2202<br />Cyprus</p>
              <a
                href="mailto:contact@my-trip-online.com"
                className="block hover:text-primary transition-smooth"
              >
                contact@my-trip-online.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 My Trip Online. All rights reserved.
            </p>
            <div className="text-xl font-bold text-primary">My Trip Online</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
