import { useState, useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      content: "KREYA transformed our brand completely. Their strategic approach and creative execution exceeded our expectations. Our conversion rates increased by 250% within the first quarter.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GlobalRetail",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: "Working with KREYA was a game-changer. Their video production quality is cinematic, and their digital marketing strategies delivered measurable ROI. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "EcoLiving",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "The team at KREYA understood our vision perfectly. They created a brand identity that resonates with our values and helped us scale from startup to market leader.",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 section-dark">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 fade-up ${visible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 fade-up ${
                visible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary mb-4" />
              
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;