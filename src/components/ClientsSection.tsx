import { useState, useEffect, useRef } from "react";

const ClientsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
    {
      name: "TechStart Inc.",
      logo: "https://via.placeholder.com/200x80/e55729/ffffff?text=TechStart",
      category: "Technology"
    },
    {
      name: "GlobalRetail",
      logo: "https://via.placeholder.com/200x80/3e3d3d/ffffff?text=GlobalRetail",
      category: "Retail"
    },
    {
      name: "EcoLiving",
      logo: "https://via.placeholder.com/200x80/e55729/ffffff?text=EcoLiving",
      category: "Sustainability"
    },
    {
      name: "FinanceHub",
      logo: "https://via.placeholder.com/200x80/3e3d3d/ffffff?text=FinanceHub",
      category: "Finance"
    },
    {
      name: "HealthFirst",
      logo: "https://via.placeholder.com/200x80/e55729/ffffff?text=HealthFirst",
      category: "Healthcare"
    },
    {
      name: "FoodieChain",
      logo: "https://via.placeholder.com/200x80/3e3d3d/ffffff?text=FoodieChain",
      category: "Food & Beverage"
    },
    {
      name: "TravelMax",
      logo: "https://via.placeholder.com/200x80/e55729/ffffff?text=TravelMax",
      category: "Travel"
    },
    {
      name: "BuildCorp",
      logo: "https://via.placeholder.com/200x80/3e3d3d/ffffff?text=BuildCorp",
      category: "Construction"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 fade-up ${visible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to work with industry leaders across various sectors who trust us with their brand growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group flex items-center justify-center p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 fade-up ${
                visible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className={`text-center fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">200+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;