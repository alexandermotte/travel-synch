import { Link } from "react-router-dom";
import { CurrencyPicker } from "@/components/CurrencyPicker";

export const ExecPassFooter = () => {

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/exec-pass-logo-white.svg" 
                alt="ExecPass" 
                className="h-8"
              />
            </Link>
            <p className="text-sm opacity-90">
              We design unique travel arrangements and provide round-the-clock assistance from our travel consultants. Low fares and pro service always guaranteed.
            </p>
            
            {/* Currency Selector */}
            <div className="mt-4">
              <CurrencyPicker variant="dark" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/services-pricing" className="hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/contacts" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><Link to="/subscription-terms" className="hover:opacity-100 transition-opacity">Subscription Terms</Link></li>
              <li><Link to="/terms" className="hover:opacity-100 transition-opacity">Terms and Conditions</Link></li>
              <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold mb-4">More</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services-pricing?tab=fasttrack" className="hover:opacity-100 transition-opacity">Fast Track</Link></li>
              <li><Link to="/services-pricing?tab=checkin" className="hover:opacity-100 transition-opacity">Check-in</Link></li>
              <li><Link to="/services-pricing?tab=attractions" className="hover:opacity-100 transition-opacity">Ticketline to Attractions</Link></li>
              <li><Link to="/services-pricing?tab=concierge" className="hover:opacity-100 transition-opacity">Concierge Service</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Marvelliant B.V</li>
              <li>Bos en Lommerplein, 280</li>
              <li>Amsterdam, 1055RW</li>
              <li>Netherlands</li>
              <li className="pt-2">
                <a href="mailto:contact@exec-pass.com" className="hover:opacity-100 transition-opacity">
                  contact@exec-pass.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-sm text-center opacity-75">
          © {new Date().getFullYear()} ExecPass. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
