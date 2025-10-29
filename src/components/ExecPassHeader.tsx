import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CurrencyPicker } from "@/components/CurrencyPicker";

export const ExecPassHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Currency selection handled by shared CurrencyPicker component


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/exec-pass-logo.svg" 
              alt="ExecPass" 
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/services-pricing" className="text-sm font-medium hover:text-accent transition-colors">
              Our services
            </Link>
            <Link to="/contacts" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
            <Link to="/unsubscribe" className="text-sm font-medium hover:text-accent transition-colors">
              Unsubscribe
            </Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+442038567769" className="text-sm font-medium hover:text-accent transition-colors">
              +4420 3856 7769
            </a>
            
            {/* Currency Selector */}
            <CurrencyPicker />

            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-accent text-accent hover:bg-accent hover:text-white"
            >
              <a href="https://member.exec-pass.com/" target="_blank" rel="noopener noreferrer">
                LOG IN
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <CurrencyPicker />
              
              <Link
                to="/"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services-pricing"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our services
              </Link>
              <Link
                to="/contacts"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/unsubscribe"
                className="text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Unsubscribe
              </Link>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-accent text-accent hover:bg-accent hover:text-white w-full"
              >
                <a href="https://member.exec-pass.com/" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
              <a href="tel:+442038567769" className="text-sm font-medium text-center py-2 hover:text-accent transition-colors">
                +4420 3856 7769
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
