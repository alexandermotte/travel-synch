import serviceConcierge from "@/assets/service-concierge.jpg";

export const TravelManagement = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-sky/50 to-sand/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-elegant order-2 md:order-1">
            <img 
              src={serviceConcierge} 
              alt="Service de conciergerie moderne" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Effortless Travel Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete visibility and control at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
