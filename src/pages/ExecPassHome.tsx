import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Link } from "react-router-dom";

const ExecPassHome = () => {
  const { formatPrice } = useCurrency();

  return (
    <div className="min-h-screen">
      <ExecPassHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Business Travel Simplified.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Smart tools and exclusive services to streamline your company's travel — from fast-track airport access to automated check-ins and lounge solutions.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
                asChild
              >
                <Link to="/services-pricing">Start ExecPass</Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/images/hero.jpg" 
                alt="Beautiful beach cove" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for your next Business trip
            </h2>
            <p className="text-lg text-muted-foreground">
              Check below all the services we offer to make your business trip as smooth as possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Airport Fast Track", link: "/services-pricing" },
              { name: "Flight Check-In", link: "/services-pricing" },
              { name: "Ticketline to Attractions", link: "/services-pricing" },
              { name: "Concierge Services", link: "/services-pricing" },
              { name: "Travel E-Books", link: "/services-pricing" },
              { name: "Airport Lounges", link: "/services-pricing" },
            ].map((service) => (
              <Card key={service.name} className="p-6 hover:shadow-lg transition-shadow">
                <Link to={service.link} className="block">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Premium Plan */}
            <Card className="p-8 border-2 border-accent">
              <div className="text-center mb-6">
                <p className="text-sm uppercase tracking-wide text-accent font-semibold mb-2">premium</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{formatPrice(79)}</span>
                  <span className="text-muted-foreground">Every 3 months</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Up to 5 free Fast-Track accesses per month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Unlimited automated check-ins</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Unlimited skip-the-line museum entries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Exclusive discounts on airport lounges</span>
                </li>
              </ul>
              
              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <Link to="/services-pricing">Try Now</Link>
              </Button>
            </Card>

            {/* Medium Plan */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold mb-2">medium</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{formatPrice(49)}</span>
                  <span className="text-muted-foreground">Every 3 months</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Smart travel, frequent and hassle-free</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Up to 2 free Fast-Track accesses per month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Automated check-in included</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Priority entry to selected museums</span>
                </li>
              </ul>
              
              <Button className="w-full" variant="outline" asChild>
                <Link to="/services-pricing">Try Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
              <img 
                src="/images/aboutus.jpg" 
                alt="About us" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Great Online Support
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dedicated Business Support</h3>
                  <p className="text-muted-foreground">
                    Our travel specialists are available 24/7 to assist with any request or last-minute change. No chatbots – only real experts ensuring your team's journeys stay on track.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Value for Companies</h3>
                  <p className="text-muted-foreground">
                    By working with carefully selected partners, we deliver competitive corporate rates without compromising on quality. Transparent pricing, no hidden fees – just efficient cost control.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Platform</h3>
                  <p className="text-muted-foreground">
                    Your personalized business travel dashboard centralizes bookings, itineraries, and communications in one place. Intuitive and secure, it simplifies travel management for both your team and administrators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Travel Benefits */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Upgrade your business travel with ExecPass
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-8">
            <p className="text-lg text-muted-foreground">
              Avoid wasted hours at the airport with fast-track access, enjoy priority check-ins, and benefit from corporate partnerships worldwide. Whether it's a quick day trip or an international business mission, we make every step smoother, faster, and stress-free—so your team can focus on business, not logistics.
            </p>
            
            <p className="text-lg text-muted-foreground">
              From hotel bookings and executive transfers to meeting arrangements and client dinners, our concierge team handles the details that matter. No impersonal booking engines, no wasted time—just real experts providing tailored support for your business
            </p>
            
            <p className="text-lg text-muted-foreground">
              With 24/7 dedicated support, our specialists ensure seamless travel for executives and teams. From last-minute flight changes to ground logistics, we proactively manage challenges so your business keeps moving.
            </p>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 py-6 text-lg" asChild>
              <Link to="/services-pricing">Start Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Platform */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover premium business travel with ExecPass
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enhance every trip with priority airport access, corporate perks, and dedicated 24/7 support—all streamlined through your personalized business travel dashboard.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 py-6 text-lg" asChild>
                <Link to="/services-pricing">Start Trial</Link>
              </Button>
            </div>
            <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
              <img 
                src="/images/booking.png" 
                alt="Booking platform" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ExecPassFooter />
    </div>
  );
};

export default ExecPassHome;
