import { useEffect, useState } from "react";
import { Play, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("expertise");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 z-10"></div>
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            We Build{" "}
            <span className="gradient-text text-glow">Brands</span>
            <br />
            That Move the{" "}
            <span className="gradient-text text-glow">World</span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cinematic storytelling meets strategic marketing. We create powerful brand experiences
            that captivate audiences and drive results.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button className="btn-hero group flex items-center gap-3 text-lg px-10 py-6">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Our Reel
          </Button>
          <Button className="btn-outline-hero text-lg px-10 py-6">
            Start Your Project
          </Button>
        </div>

        {/* Floating Stats */}
        <div className={`grid grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50M+</div>
            <div className="text-gray-400">Views Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-colors duration-300 animate-float"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;