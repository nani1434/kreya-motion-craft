import { Video, Palette, Megaphone, TrendingUp, Code, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          setTimeout(() => setCardsVisible(true), 300);
        }
      },
      { threshold: 0.2 }
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
      description: "We design logos, systems, and visuals that capture your story and create instant recognition.",
      features: ["Logo Design", "Visual Identity", "Brand Guidelines"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "We build data-driven campaigns that grow your brand and deliver ROI across digital platforms.",
      features: ["Social Media", "Content Strategy", "Campaign Management"]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "We combine market insights with smart planning to fuel brand acceleration.",
      features: ["Market Analysis", "Growth Planning", "Performance Optimization"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites that load fast, look stunning, and turn visitors into loyal customers.",
      features: ["Custom Development", "E-commerce", "Mobile Optimization"]
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "We connect you with the right creators to build trust and drive meaningful impact.",
      features: ["Influencer Partnerships", "Campaign Management", "Performance Tracking"]
    }
  ];

  return (
    <section id="expertise" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 fade-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Where Brands <span className="gradient-text">Come Alive </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From positioning to perception, we shape brand experiences that captivate, connect, and convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service group fade-up ${
                cardsVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
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
                <a 
                  href={`/services/${service.title.toLowerCase().replace(' ', '-')}`} 
                  className="text-primary font-semibold group-hover:underline transition-all duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;