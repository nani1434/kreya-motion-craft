import { useState, useEffect, useRef } from "react";
import { Users, Target, Heart, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";

const About = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation on mount
    const timer = setTimeout(() => setHeroVisible(true), 300);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every project, creating work that truly matters."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every detail is crafted with purpose, ensuring maximum impact."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We push boundaries to create fresh, cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best work comes from true partnership with our clients."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b787?w=400&h=400&fit=crop&crop=face",
      bio: "10+ years shaping brand narratives for Fortune 500 companies."
    },
    {
      name: "Marcus Rodriguez",
      role: "Video Production Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning filmmaker with a passion for storytelling."
    },
    {
      name: "Emily Johnson",
      role: "Digital Strategy Director", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Data-driven marketer who turns insights into results."
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer creating seamless digital experiences."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className={`text-6xl md:text-7xl font-bold mb-8 fade-up ${heroVisible ? 'visible' : ''}`}>
              The <span className="gradient-text">Creators</span> Behind
              <br />Your Brand's Story
            </h1>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              We're a collective of passionate creatives, strategists, and innovators 
              dedicated to transforming brands through powerful storytelling and cutting-edge digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold mb-6 fade-up ${valuesVisible ? 'visible' : ''}`}>
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto fade-up ${valuesVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              These core principles guide everything we do and shape how we approach every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center fade-up ${
                  valuesVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <StorySection />

      {/* Team Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Talented individuals who bring diverse expertise and shared passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Create Something <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Let's collaborate to bring your vision to life with powerful storytelling and strategic creativity.
          </p>
          <button className="btn-hero text-lg px-12 py-6 animate-glow-pulse">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;