import { useState, useEffect } from "react";
import { TrendingUp, Target, BarChart3, Users, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GrowthStrategy = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    setTimeout(() => setSectionsVisible(true), 400);
  }, []);

  const services = [
    {
      icon: Target,
      title: "Market Analysis",
      description: "Deep dive into your market landscape, competitor analysis, and opportunity identification.",
      features: ["Competitive Research", "Market Positioning", "SWOT Analysis", "Opportunity Mapping"]
    },
    {
      icon: BarChart3,
      title: "Growth Planning",
      description: "Strategic roadmaps and actionable plans to accelerate your business growth.",
      features: ["Growth Roadmaps", "KPI Definition", "Revenue Projections", "Milestone Planning"]
    },
    {
      icon: Users,
      title: "Customer Strategy",
      description: "Understanding your audience and developing strategies to acquire and retain customers.",
      features: ["Customer Segmentation", "Journey Mapping", "Retention Strategies", "Acquisition Funnels"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Continuous improvement and optimization of your business processes and marketing efforts.",
      features: ["A/B Testing", "Conversion Optimization", "Process Improvement", "ROI Maximization"]
    }
  ];

  const results = [
    { metric: "300%", description: "Average revenue growth" },
    { metric: "85%", description: "Customer retention rate" },
    { metric: "40%", description: "Cost per acquisition reduction" },
    { metric: "150%", description: "Market share increase" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-4xl mx-auto fade-up ${heroVisible ? 'visible' : ''}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Strategic <span className="gradient-text">Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Data-driven strategies and expert consulting to accelerate your business growth 
              and unlock new opportunities in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero magnetic-btn">
                Start Growth Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="magnetic-btn">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Growth <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive growth strategies tailored to your business needs and market position.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-service group fade-up ${
                  sectionsVisible ? 'visible' : ''
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic approach has delivered exceptional outcomes for businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div
                key={result.metric}
                className={`text-center fade-up ${sectionsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <div className={`max-w-3xl mx-auto fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's develop a growth strategy that drives real results for your business.
            </p>
            <Button size="lg" className="btn-hero magnetic-btn">
              Start Your Growth Strategy
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrowthStrategy;