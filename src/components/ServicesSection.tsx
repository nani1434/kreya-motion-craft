import { Video, Palette, Megaphone, TrendingUp, Code, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Cinematic storytelling that captivates and converts. From concept to delivery.",
      features: ["Commercial Videos", "Brand Documentaries", "Social Content"]
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand ecosystems that speak to your audience and stand out.",
      features: ["Logo Design", "Visual Identity", "Brand Guidelines"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable results and ROI.",
      features: ["Social Media", "Content Strategy", "Campaign Management"]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Strategic consulting to scale your brand and accelerate growth.",
      features: ["Market Analysis", "Growth Planning", "Performance Optimization"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "High-performance websites that convert visitors into customers.",
      features: ["Custom Development", "E-commerce", "Mobile Optimization"]
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Authentic partnerships that amplify your brand's reach and impact.",
      features: ["Influencer Partnerships", "Campaign Management", "Performance Tracking"]
    }
  ];

  return (
    <section id="expertise" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine creative excellence with strategic thinking to deliver
            exceptional results across all touchpoints of your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service transition-all duration-700 ${
                isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
                <button className="text-primary font-semibold group-hover:underline transition-all duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;