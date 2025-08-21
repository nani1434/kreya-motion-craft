import { useState, useEffect } from "react";
import { Code, Smartphone, Globe, Zap, Shield, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import video_image from "../../images/Video_services.jpeg";
import web_2 from "../../images/website/web_2.png"
import make from "../../images/website/MakeaBoldFirstImpression.png"
import design from "../../images/website/DesignforEveryDevice.png"
import enhance from "../../images/website/EnhanceUserExperience.png"
import lay from "../../images/website/Lay a ScalableDigitalFoundation.png"
import builts from "../../images/icons/Custom_BuiltSolutions.svg"
import speed from "../../images/icons/Speed_Performance.svg"
import goal from "../../images/icons/Goal_OrientedDesign.svg"
import service from "../../images/icons/Full_ServiceSupport.svg"


const WebDevelopment = () => {
  const navigate = useNavigate();  
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
      icon: Globe,
      title: "Strong First Impression",
      // description: "Professional commercials that drive brand awareness and sales",
      features: ["Build trust with a polished, professional website", 
                  "Reflect your brand’s identity from the first click", 
                  "Create credibility and user confidence instantly"]
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Design",
      // description: "Engaging content optimized for social media platforms",
      features: ["Fully responsive across phones, tablets, and desktops", 
                "Optimized user experience for every device", 
                "Ensure fast load times and intuitive navigation"]
    },
    {
      icon: Rocket,
      title: "User Experience (UX) Optimization",
      // description: "Professional content for internal and external communications",
      features: ["Simple, clean layout for easy navigation", 
                 "Guide visitors toward desired actions", 
                 "Boost engagement and lower bounce rates"]
    },
    {
      icon: Shield,
      title: "SEO & Performance Integration",
      // description: "Custom animations that bring your ideas to life",
      features: ["Built-in SEO best practices for better rankings", 
                 "Fast-loading pages for improved user retention", 
                 "Clean code structure for long-term performance"]
    },
    // {
    //   icon: Shield,
    //   title: "Scalable Digital Foundation",
    //   // description: "Custom animations that bring your ideas to life",
    //   features: ["Future-ready platforms that grow with your business", 
    //              "Easy integration with tools and marketing platforms", 
    //              "Built to support ongoing campaigns and traffic"]
    // }
  ];

    const kreya = [
    {
      title: "Custom-Built Solutions",
      description: "We don’t use cookie-cutter templates — your website is designed specifically for your brand and goals.",
      thumbnail: builts,
    },
    {
      title: "Speed & Performance",
      description: "We build websites that are fast, secure, and optimized for performance from day one.",
      thumbnail: speed,
    },
    {
      title: "Goal-Oriented Design",
      description: "Every feature and layout is built to support your objectives — from lead generation to sales.",
      thumbnail:  goal,
    },
        {
      title: "Full-Service Support",
      description: "From planning to launch and beyond, our team is with you at every step of the web journey.",
      thumbnail: service,
    }
  ];

  const img_sect = [
    {
      title: "Make a Bold ",
      title_col: "First Impression",
      description: "Your website is often the first touchpoint. A clean, modern design helps build trust and instantly reflects your brand’s professionalism.",
      thumbnail: make,
    },
    {
      title: "Design for Every ",
      title_col: "Device",
      description: "With users browsing across phones, tablets, and desktops, a responsive site ensures seamless experiences—no matter the screen size.",
      thumbnail: design,
    },
    {
      title: "Enhance ",
      title_col: "User Experience",
      description: "Smooth navigation, fast load times, and intuitive layouts keep users engaged longer and increase the likelihood they’ll take action.",
      thumbnail: enhance,
    },
    {
      title: "Lay a Scalable ",
      title_col: "Digital Foundation",
      description: "Your website becomes the hub of your digital efforts—ready to scale with your business, support campaigns, and drive long-term growth.",
      thumbnail: lay,
    }
  ]

  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS",
    "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "REST APIs"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className={`flex items-center justify-center gap-4 mb-8 fade-up ${heroVisible ? 'visible' : ''}`}>
              <Code className="w-16 h-16 text-primary" />
              <h1 className="text-6xl md:text-7xl font-bold">
                Web <span className="gradient-text">Development</span>
              </h1>
            </div>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed fade-up ${heroVisible ? 'visible' : ''}`} 
               style={{ transitionDelay: '200ms' }}>
              High-performance websites and applications that convert visitors into customers. 
              Built with modern technologies and optimized for speed, security, and scalability.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-up ${heroVisible ? 'visible' : ''}`}
                 style={{ transitionDelay: '400ms' }}>
              <Button className="btn-hero"  onClick={() => navigate("/About")}>Get Started</Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {/* Our Video Services Grid */}
      <section className="px-24 pt-24 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* <p className="text-lg font-bold">Bring Your Brand Story to Life</p> */}
            <h2 className="text-4xl font-bold pb-4">Web <span className="gradient-text">Development </span> Services</h2>
            <p className="text-lg text-muted-foreground indent-8">
              At Kreya Branding, we craft custom, high-performing websites built to align with your business goals. Whether you're a growing startup or an established brand, we design digital experiences that are not only visually engaging but also strategically built to drive conversions. Every element we create is focused on functionality, speed, and user experience.
            </p>
            <p className="text-lg text-muted-foreground indent-8">
              From e-commerce platforms that drive sales to responsive, mobile-first designs that ensure seamless browsing across devices, we combine clean aesthetics with smart technology. Our development team ensures that your site is fast, secure, and optimized for search engines, helping you attract and retain the right audience.            </p>
            <p className="text-lg text-muted-foreground indent-8">
              More than just websites—we build digital platforms that support your brand’s growth, deliver measurable results, and leave a lasting impression. At Kreya Branding, your website becomes a powerful business tool, not just a digital placeholder.            </p>
          </div>
          <div>
            <img
              src={web_2}
              alt="Our Video Services"
              className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* image content section */}
     <section className="pt-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-12">Why <span className="gradient-text">Web Development </span>Matters</h2>
          </div>
        </div>
      {img_sect.map((simg, index) => (
        <div
          key={index}
          className={`${
            index === 0 ? "px-24 bg-background container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8" 
                        : "px-24 pt-24 bg-background container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8"
          }`}
        >          
        {index % 2 !== 0 ? (
          <>
            <div className="md:col-span-3 flex flex-col justify-center h-full">
              <h2 className="text-4xl font-bold">{simg.title}<span className="gradient-text">{simg.title_col}</span></h2>
              <p className="text-lg text-muted-foreground">{simg.description}</p>
            </div>
            <div className="md:col-span-2">
              <img
                src={simg.thumbnail}
                alt="Our Video Services"
                className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </>
          ) : (
          <>
            <div className="md:col-span-2">
              <img
                src={simg.thumbnail}
                alt="Our Video Services"
                className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-3 flex flex-col justify-center h-full">
              <h2 className="text-4xl font-bold">{simg.title} <span className="gradient-text">{simg.title_col}</span></h2>
              <p className="text-lg text-muted-foreground">{simg.description}</p>
            </div>
          </>
          )}
        </div>
      ))}
      </section>


      {/*Card Section*/}
     <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Our <span className="gradient-text">Web development</span> Services</h2>
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
                {/* <p className="text-muted-foreground mb-6">{service.description}</p> */}
                <ul className="space-y-2 mx-1">
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


     {/* why chose kreya */}

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Chose <span className="gradient-text">Kreya?</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our professional services help businesses strengthen their brand identity and strategy.
            </p>
          </div>

          {/* Grid for the boxes */}
          <div className="grid md:grid-cols-2 gap-8">  
            {kreya.map((kbox, index) => (
            <div className="section-dark p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex items-center space-x-6">
              <div className="flex-shrink-0">
                <img 
                  src={kbox.thumbnail} 
                  alt="Our Video Services"
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>  
              <div>
                <h3 className="text-xl font-bold text-white">{kbox.title}</h3>
                <p className="text-gray-400 mt-2">{kbox.description}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
     {/* why chose kreya ends*/}

      {/* Technologies Section */}
      {/* <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technologies We Use</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center text-white hover:bg-white/10 transition-all duration-300"
              >
                <div className="font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your development needs and create a solution that drives results.
          </p>
          <Button className="btn-hero">Get Your Free Consultation</Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default WebDevelopment;