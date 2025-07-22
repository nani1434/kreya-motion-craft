import { useState, useEffect, useRef } from "react";
import { Award, Users, Target, Zap } from "lucide-react";

const StorySection = () => {
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

  const milestones = [
    {
      icon: Target,
      year: "2019",
      title: "The Beginning",
      description: "Founded with a vision to transform how brands connect with their audiences through powerful storytelling."
    },
    {
      icon: Users,
      year: "2021",
      title: "Team Growth", 
      description: "Expanded our team of creative professionals and strategists to serve clients across multiple industries."
    },
    {
      icon: Award,
      year: "2022",
      title: "Recognition",
      description: "Received industry awards for our innovative campaigns and outstanding client results."
    },
    {
      icon: Zap,
      year: "2024",
      title: "Innovation",
      description: "Leading the way with cutting-edge digital strategies and AI-powered creative solutions."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              The <span className="gradient-text">KREYA</span> Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                KREYA was born from a simple belief: every brand has a unique story waiting to be told. 
                In 2019, we set out to bridge the gap between creative vision and strategic execution, 
                helping businesses transform their ideas into powerful brand experiences.
              </p>
              <p>
                What started as a small creative studio has evolved into a full-service agency that 
                combines cinematic storytelling with data-driven strategies. We don't just create 
                content – we craft experiences that resonate, engage, and convert.
              </p>
              <p>
                Today, KREYA stands at the forefront of digital innovation, helping brands navigate 
                the ever-changing landscape of modern marketing. Our approach is simple: understand 
                your audience, tell your story authentically, and measure what matters.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white border border-gray-100 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Brands Transformed</div>
              </div>
              <div className="text-center p-6 bg-white border border-gray-100 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">250%</div>
                <div className="text-sm text-muted-foreground">Average ROI Increase</div>
              </div>
            </div>
          </div>

          {/* Story Image */}
          <div className={`fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
                alt="KREYA team collaboration"
                className="w-full h-[500px] object-cover rounded-2xl shadow-[var(--shadow-elegant)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-lg font-semibold">Our Creative Process</div>
                <div className="text-sm opacity-80">Where ideas come to life</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className={`text-3xl font-bold text-center mb-16 fade-up ${visible ? 'visible' : ''}`} 
              style={{ transitionDelay: '600ms' }}>
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 fade-up ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 4) * 200}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'order-3'}`}>
                    <div className="inline-block bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] max-w-md">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <milestone.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{milestone.title}</div>
                          <div className="text-primary font-semibold">{milestone.year}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`flex-1 ${index % 2 === 1 ? 'order-1' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;