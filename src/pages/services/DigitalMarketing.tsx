import { useState, useEffect } from "react";
import { Megaphone, Target, BarChart, TrendingUp, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DigitalMarketing = () => {
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
      icon: Users,
      title: "Social Media Marketing",
      description: "Engaging content and strategic campaigns across all platforms",
      features: ["Content Creation", "Community Management", "Paid Social Campaigns"]
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description: "ROI-focused advertising campaigns that drive conversions",
      features: ["Google Ads", "Facebook & Instagram Ads", "LinkedIn Campaigns"]
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance",
      features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis"]
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Streamlined workflows that nurture leads and drive sales",
      features: ["Email Automation", "Lead Scoring", "Customer Journey Mapping"]
    }
  ];

  const results = [
    { metric: "250%", description: "Average ROI Increase" },
    { metric: "150%", description: "Lead Generation Growth" },
    { metric: "300%", description: "Social Engagement Boost" },
    { metric: "180%", description: "Conversion Rate Improvement" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className={`flex items-center justify-center gap-4 mb-8 fade-up ${heroVisible ? 'visible' : ''}`}>
              <Megaphone className="w-16 h-16 text-primary" />
              <h1 className="text-6xl md:text-7xl font-bold">
                Digital <span className="gradient-text">Marketing</span>
              </h1>
            </div>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed fade-up ${heroVisible ? 'visible' : ''}`} 
               style={{ transitionDelay: '200ms' }}>
              Data-driven campaigns that deliver measurable results and ROI. 
              We combine creative strategy with performance marketing to grow your business.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-up ${heroVisible ? 'visible' : ''}`}
                 style={{ transitionDelay: '400ms' }}>
              <Button className="btn-hero">Start Growing Today</Button>
              <Button variant="outline" className="btn-outline-hero">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl font-bold mb-4">Digital Marketing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and maximize ROI.
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

      {/* Results Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Proven Results</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our data-driven approach consistently delivers outstanding results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={result.metric} className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">{result.metric}</div>
                <div className="text-gray-300">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <Button className="btn-hero">Get Your Free Strategy Session</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;