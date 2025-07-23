import { useEffect, useState } from "react";
import { Play, ArrowDown, Sparkles, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [flyingElements, setFlyingElements] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    // Generate flying elements
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3000,
    }));
    setFlyingElements(elements);
    
    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("expertise");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 z-10"></div>
        <div 
          className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) scale(1.05)`,
          }}
        ></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-pulse"></div>
      </div>

      {/* Flying Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {flyingElements.map((element) => {
          const icons = [Sparkles, Zap, Star];
          const IconComponent = icons[element.id % icons.length];
          return (
            <div
              key={element.id}
              className="absolute animate-float opacity-20 hover:opacity-40 transition-opacity duration-300"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                animationDelay: `${element.delay}ms`,
                transform: `translate(${mousePosition.x * (element.id % 3 + 1) * 5}px, ${mousePosition.y * (element.id % 3 + 1) * 5}px)`,
              }}
            >
              <IconComponent className="w-6 h-6 text-primary" />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-6xl mx-auto">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            We Build{" "}
            <span className="gradient-text text-glow">Brands</span>
            <br />
            That Move the{" "}
            <span className="gradient-text text-glow">World</span>
          </h1>
        </div>

        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cinematic storytelling meets strategic marketing. We create powerful brand experiences
            that captivate audiences and drive results.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <Button className="btn-hero group flex items-center gap-3 text-lg px-10 py-6 hover:scale-105 transition-all duration-300 magnetic-btn">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Our Reel
          </Button>
          <Button className="btn-outline-hero text-lg px-10 py-6 hover:scale-105 transition-all duration-300 magnetic-btn">
            Start Your Project
          </Button>
        </div>

        {/* Interactive Floating Stats */}
        <div className={`grid grid-cols-3 gap-8 mt-20 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '700ms' }}>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 animate-counter">500+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Projects Delivered</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 animate-counter">50M+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Views Generated</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 animate-counter">200+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-all duration-300 animate-float group hover:scale-110"
      >
        <div className="flex flex-col items-center">
          <ArrowDown className="w-8 h-8 group-hover:translate-y-1 transition-transform duration-300" />
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent mt-2"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;