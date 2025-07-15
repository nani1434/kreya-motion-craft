import { useState, useEffect, useRef } from "react";
import { Video, Palette, Megaphone, TrendingUp, Code, Users, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
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
      subtitle: "Cinematic storytelling that converts",
      description: "From concept to final cut, we create compelling video content that captures attention and drives action. Our team combines creative vision with technical expertise to deliver exceptional results.",
      features: [
        "Commercial & Brand Videos",
        "Documentary-Style Content", 
        "Social Media Video Content",
        "Product Demonstrations",
        "Event Coverage & Highlights",
        "Animation & Motion Graphics"
      ],
      process: ["Strategy & Concept", "Pre-Production Planning", "Professional Filming", "Post-Production & Editing", "Delivery & Distribution"],
      pricing: "Starting at $5,000"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      subtitle: "Visual systems that speak volumes",
      description: "We craft comprehensive brand identities that resonate with your target audience and differentiate you from competitors. Every element is purposefully designed to tell your unique story.",
      features: [
        "Logo Design & Identity",
        "Brand Guidelines & Systems",
        "Color Palette & Typography",
        "Marketing Collateral Design",
        "Packaging & Product Design",
        "Brand Asset Libraries"
      ],
      process: ["Brand Discovery", "Concept Development", "Design Exploration", "Refinement & Testing", "Guidelines Creation"],
      pricing: "Starting at $8,000"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      subtitle: "Data-driven campaigns that deliver ROI",
      description: "Strategic marketing campaigns that combine creativity with analytics to maximize your reach and engagement. We focus on measurable results that grow your business.",
      features: [
        "Social Media Strategy & Management",
        "Content Marketing & SEO",
        "Paid Advertising (Google, Meta, LinkedIn)",
        "Email Marketing Campaigns",
        "Influencer Partnership Management",
        "Analytics & Performance Reporting"
      ],
      process: ["Market Research", "Strategy Development", "Campaign Creation", "Launch & Optimization", "Performance Analysis"],
      pricing: "Starting at $3,000/month"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      subtitle: "Scalable solutions for business growth",
      description: "Comprehensive growth strategies that identify opportunities and create actionable plans for sustainable business expansion. We help you scale efficiently and effectively.",
      features: [
        "Market Analysis & Research",
        "Competitive Intelligence",
        "Growth Planning & Roadmaps",
        "Performance Optimization",
        "Conversion Rate Optimization",
        "Strategic Consulting"
      ],
      process: ["Business Audit", "Market Analysis", "Strategy Formulation", "Implementation Planning", "Ongoing Optimization"],
      pricing: "Starting at $10,000"
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "High-performance digital experiences",
      description: "Custom websites and web applications that not only look stunning but perform exceptionally. We focus on user experience, speed, and conversion optimization.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Mobile App Development",
        "Performance Optimization",
        "SEO Implementation",
        "Ongoing Maintenance & Support"
      ],
      process: ["Requirements Analysis", "Design & Prototyping", "Development & Testing", "Launch & Deployment", "Maintenance & Updates"],
      pricing: "Starting at $12,000"
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      subtitle: "Authentic partnerships that amplify reach",
      description: "Strategic influencer partnerships that build authentic connections with your target audience. We manage the entire process from identification to campaign execution.",
      features: [
        "Influencer Identification & Vetting",
        "Campaign Strategy & Planning",
        "Contract Negotiation & Management",
        "Content Collaboration & Review",
        "Performance Tracking & ROI Analysis",
        "Long-term Partnership Development"
      ],
      process: ["Audience Analysis", "Influencer Research", "Partnership Development", "Campaign Execution", "Results Analysis"],
      pricing: "Starting at $5,000/campaign"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-up">
              Services That <span className="gradient-text">Transform</span>
              <br />Your Brand
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              From strategic planning to creative execution, we offer comprehensive solutions
              that drive growth and create lasting impact for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold">{service.title}</h2>
                      <p className="text-primary font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <Button className="btn-hero group">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <div className="text-lg font-semibold text-primary">
                      {service.pricing}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 aspect-square flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology that ensures exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {["Discover", "Strategy", "Create", "Execute", "Optimize"].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step}</h3>
                <p className="text-gray-300 text-sm">
                  {index === 0 && "Understanding your goals and challenges"}
                  {index === 1 && "Developing the perfect approach"}
                  {index === 2 && "Bringing ideas to life"}
                  {index === 3 && "Launching with precision"}
                  {index === 4 && "Continuous improvement"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          <Button className="btn-hero text-lg px-12 py-6 animate-glow-pulse">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;