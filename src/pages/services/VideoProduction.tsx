import { useState, useEffect, useRef } from "react";
import { Video, Play, Camera, Film, Monitor, Palette } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const VideoProduction = () => {
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
      icon: Camera,
      title: "Commercial Videos",
      description: "Professional commercials that drive brand awareness and sales",
      features: ["30s & 60s Commercials", "Product Showcases", "Brand Documentaries"]
    },
    {
      icon: Film,
      title: "Social Content",
      description: "Engaging content optimized for social media platforms",
      features: ["Instagram Reels", "TikTok Videos", "YouTube Content"]
    },
    {
      icon: Monitor,
      title: "Corporate Videos",
      description: "Professional content for internal and external communications",
      features: ["Company Profiles", "Training Videos", "Event Coverage"]
    },
    {
      icon: Palette,
      title: "Animation & Motion Graphics",
      description: "Custom animations that bring your ideas to life",
      features: ["2D/3D Animation", "Motion Graphics", "Explainer Videos"]
    }
  ];

  const portfolio = [
    {
      title: "TechStart Launch Campaign",
      category: "Commercial",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      views: "2.5M"
    },
    {
      title: "EcoLiving Brand Story",
      category: "Documentary",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      views: "1.8M"
    },
    {
      title: "GlobalRetail Product Demo",
      category: "Product Showcase",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      views: "950K"
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
              <Video className="w-16 h-16 text-primary" />
              <h1 className="text-6xl md:text-7xl font-bold">
                Video <span className="gradient-text">Production</span>
              </h1>
            </div>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed fade-up ${heroVisible ? 'visible' : ''}`} 
               style={{ transitionDelay: '200ms' }}>
              Cinematic storytelling that captivates audiences and drives results. 
              From concept to final delivery, we create video content that converts.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-up ${heroVisible ? 'visible' : ''}`}
                 style={{ transitionDelay: '400ms' }}>
              <Button className="btn-hero">Start Your Project</Button>
              <Button variant="outline" className="btn-outline-hero">
                <Play className="w-4 h-4 mr-2" />
                View Our Reel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl font-bold mb-4">Our Video Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive video production services tailored to your brand's unique needs.
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

      {/* Portfolio Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Work</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how our video content has helped brands connect with their audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {project.views} views
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-primary text-sm">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create <span className="gradient-text">Amazing Videos</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your video production needs and create content that drives results.
          </p>
          <Button className="btn-hero">Get Started Today</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoProduction;