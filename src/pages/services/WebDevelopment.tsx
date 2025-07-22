import { useState, useEffect } from "react";
import { Code, Smartphone, Globe, Zap, Shield, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const WebDevelopment = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    const sectionsTimer = setTimeout(() => setSectionsVisible(true), 600);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(sectionsTimer);
    };
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description: "Bespoke websites built to your exact specifications",
      features: ["Responsive Design", "CMS Integration", "SEO Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile app development",
      features: ["iOS & Android Apps", "React Native", "Progressive Web Apps"]
    },
    {
      icon: Rocket,
      title: "E-commerce Solutions",
      description: "Complete online stores that drive sales and conversions",
      features: ["Payment Integration", "Inventory Management", "Analytics Dashboard"]
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Robust security measures and lightning-fast performance",
      features: ["SSL Certificates", "Performance Optimization", "Security Audits"]
    }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS",
    "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "REST APIs"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className={`flex items-center justify-center gap-4 mb-8 fade-up ${heroVisible ? 'visible' : ''}`}>
              <Code className="w-16 h-16 text-primary" />
              <h1 className="text-6xl md:text-7xl font-bold">
                Web <span className="gradient-text">Development</span>
              </h1>
            </div>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed fade-up ${heroVisible ? 'visible' : ''}`} 
               style={{ transitionDelay: '200ms' }}>
              High-performance websites and applications that convert visitors into customers. 
              Built with modern technologies and optimized for speed, security, and scalability.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-up ${heroVisible ? 'visible' : ''}`}
                 style={{ transitionDelay: '400ms' }}>
              <Button className="btn-hero">Start Your Project</Button>
              <Button variant="outline" className="btn-outline-hero">
                <Zap className="w-4 h-4 mr-2" />
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl font-bold mb-4">Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we create digital solutions that grow with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-service fade-up ${sectionsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technologies We Use</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center text-white hover:bg-white/10 transition-all duration-300"
              >
                <div className="font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your development needs and create a solution that drives results.
          </p>
          <Button className="btn-hero">Get Your Free Consultation</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;