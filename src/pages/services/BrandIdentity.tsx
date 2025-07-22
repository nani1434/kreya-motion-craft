import { useState, useEffect } from "react";
import { Palette, Pen, Layout, Package, Eye, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BrandIdentity = () => {
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
      icon: Pen,
      title: "Logo Design",
      description: "Distinctive logos that represent your brand's essence",
      features: ["Custom Logo Creation", "Brand Mark Design", "Logo Variations"]
    },
    {
      icon: Eye,
      title: "Visual Identity",
      description: "Comprehensive visual systems that ensure consistency",
      features: ["Color Palettes", "Typography Systems", "Visual Elements"]
    },
    {
      icon: FileText,
      title: "Brand Guidelines",
      description: "Detailed documentation for brand consistency",
      features: ["Usage Guidelines", "Brand Standards", "Asset Libraries"]
    },
    {
      icon: Package,
      title: "Brand Applications",
      description: "Real-world applications of your brand identity",
      features: ["Business Cards", "Letterheads", "Marketing Materials"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your brand's values, mission, and target audience"
    },
    {
      step: "02", 
      title: "Research",
      description: "Analyzing market trends and competitor landscape"
    },
    {
      step: "03",
      title: "Concept",
      description: "Developing initial design concepts and directions"
    },
    {
      step: "04",
      title: "Design",
      description: "Creating refined designs with multiple iterations"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Final brand package with comprehensive guidelines"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className={`flex items-center justify-center gap-4 mb-8 fade-up ${heroVisible ? 'visible' : ''}`}>
              <Palette className="w-16 h-16 text-primary" />
              <h1 className="text-6xl md:text-7xl font-bold">
                Brand <span className="gradient-text">Identity</span>
              </h1>
            </div>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed fade-up ${heroVisible ? 'visible' : ''}`} 
               style={{ transitionDelay: '200ms' }}>
              Visual systems that speak to your audience and stand out from the competition. 
              We create memorable brand identities that drive recognition and loyalty.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-up ${heroVisible ? 'visible' : ''}`}
                 style={{ transitionDelay: '400ms' }}>
              <Button className="btn-hero">Start Your Brand Journey</Button>
              <Button variant="outline" className="btn-outline-hero">
                <Layout className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl font-bold mb-4">Brand Identity Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete brand identity solutions from logo design to comprehensive brand guidelines.
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

      {/* Process Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Design Process</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures your brand identity reflects your values and resonates with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Brand Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped brands establish strong visual identities that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 aspect-square flex items-center justify-center mb-6 group-hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <Palette className="w-24 h-24 text-primary/30" />
                </div>
                <h3 className="text-xl font-bold mb-2">Brand Identity Project {item}</h3>
                <p className="text-muted-foreground">Complete brand identity system with logo, colors, and guidelines.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Build Your <span className="gradient-text">Brand Identity</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a brand identity that sets you apart and drives recognition.
          </p>
          <Button className="btn-hero">Start Your Brand Project</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandIdentity;