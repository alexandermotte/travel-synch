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
        <div className="border-t border-background/20 pt-6 text-sm opacity-75">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span>© {new Date().getFullYear()} ExecPass. All rights reserved.</span>
            <div className="flex items-center gap-2">
              {/* Visa Logo */}
              <svg className="h-6 w-auto" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="780" height="500" rx="40" fill="white"/>
                <path d="M293.2 348.7L331.4 151.3H391.4L353.2 348.7H293.2Z" fill="#1A1F71"/>
                <path d="M560.3 157.3C548.1 152.5 528.7 147.3 504.9 147.3C445.5 147.3 403.3 179.3 403 223.3C402.7 256.3 433.3 274.7 456.3 285.7C480 297 488.6 304.3 488.5 314.7C488.3 330.7 469.1 337.7 451.3 337.7C426.7 337.7 413.5 334.3 393.1 325.3L384.5 321.3L375.1 375.3C390.1 382.3 417.7 388.3 446.3 388.7C509.7 388.7 551.1 357.3 551.5 310.7C551.7 284.3 535.5 264.3 500.1 247.7C479.1 237.3 466.1 230.3 466.3 219.3C466.3 209.3 477.9 198.7 502.9 198.7C523.5 198.3 538.5 202.7 550.1 207.5L555.5 210.1L564.5 157.3H560.3Z" fill="#1A1F71"/>
                <path d="M658.9 151.3C645.5 151.3 635.5 155.3 629.5 168.7L543.1 348.7H606.5L618.9 314.7H695.7L702.9 348.7H759.7L710.5 151.3H658.9ZM635.7 269.3C640.1 257.3 659.7 205.3 659.7 205.3C659.3 205.7 664.1 193.3 666.9 185.3L670.5 203.7C670.5 203.7 682.5 257.3 685.1 269.3H635.7Z" fill="#1A1F71"/>
                <path d="M247.1 151.3L188.1 283.3L181.7 251.3C170.5 216.3 138.1 178.3 101.5 159.3L155.7 348.3H219.5L311.3 151.3H247.1Z" fill="#1A1F71"/>
                <path d="M140.1 151.3H45.3L44.5 155.7C119.7 175.3 168.9 218.7 185.7 270.3L168.5 169.3C165.7 156.3 155.3 152.3 140.1 151.3Z" fill="#F9A533"/>
              </svg>
              {/* Mastercard Logo */}
              <svg className="h-6 w-auto" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="780" height="500" rx="40" fill="white"/>
                <circle cx="312" cy="250" r="150" fill="#EB001B"/>
                <circle cx="468" cy="250" r="150" fill="#F79E1B"/>
                <path d="M390 130.9C356.1 157.9 334 199.9 334 247C334 294.1 356.1 336.1 390 363.1C423.9 336.1 446 294.1 446 247C446 199.9 423.9 157.9 390 130.9Z" fill="#FF5F00"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
