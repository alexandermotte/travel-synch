import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, Menu, X, Shield } from "lucide-react";
import { useCurrency, currencies } from "@/contexts/CurrencyContext";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const { currency, setCurrency } = useCurrency();
  const { user, isAdmin, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary tracking-tight">Travel Synch</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium transition-smooth hover:text-primary">
              Home
            </a>
            <a href="/services" className="text-sm font-medium transition-smooth hover:text-primary">
              Services
            </a>
            <a href="/contact" className="text-sm font-medium transition-smooth hover:text-primary">
              Contact
            </a>
            <a href="/unsubscribe" className="text-sm font-medium transition-smooth hover:text-primary">
              Unsubscribe
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <a href="tel:+442039360018" className="hidden lg:flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              <Phone className="h-4 w-4" />
              <span>+44 203 936 0018</span>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  {currency}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-popover">
                {currencies.map((curr) => (
                  <DropdownMenuItem
                    key={curr.code}
                    onClick={() => setCurrency(curr.code)}
                    className="cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">{curr.code}</div>
                      <div className="text-xs text-muted-foreground">{curr.label}</div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {isAdmin && (
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex"
                onClick={() => window.location.href = '/admin'}
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin
              </Button>
            )}

            {user ? (
              <Button
                variant="default"
                size="sm"
                className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={signOut}
              >
                Déconnexion
              </Button>
            ) : (
              <Button
                variant="default"
                size="sm"
                className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.location.href = '/auth'}
              >
                Login
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <a href="/" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
              Home
            </a>
            <a href="/services" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
              Services
            </a>
            <a href="/contact" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
              Contact
            </a>
            <a href="/unsubscribe" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
              Unsubscribe
            </a>
            <a href="tel:+442039360018" className="flex items-center space-x-2 py-2 text-sm font-medium text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+44 203 936 0018</span>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                  {currency}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-full bg-popover">
                {currencies.map((curr) => (
                  <DropdownMenuItem
                    key={curr.code}
                    onClick={() => setCurrency(curr.code)}
                    className="cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">{curr.code}</div>
                      <div className="text-xs text-muted-foreground">{curr.label}</div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {isAdmin && (
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.location.href = '/admin'}
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin
              </Button>
            )}

            {user ? (
              <Button
                variant="default"
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={signOut}
              >
                Déconnexion
              </Button>
            ) : (
              <Button
                variant="default"
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.location.href = '/auth'}
              >
                Login
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
