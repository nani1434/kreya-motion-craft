import { useState, useEffect } from "react";
import { Palette, Pen, Layout, Package, Eye, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import video_image from "../../images/Video_services.jpeg";
import branding from "../../images/branding/branding.jpg"
import trust from "../../images/branding/trust.png"
import standout from "../../images/branding/STANDOUT.png"
import loyalty from "../../images/branding/loyalty.png"
import value from "../../images/branding/VALUE.png"
import startegic from "../../images/icons/STRATEGIC_THINKING.svg"
import distinct from "../../images/icons/DISTINCTVISUAL_IDENTITY.svg"
import clear from "../../images/icons/CLEAR_BRAN MESSAGING.svg"
import complete from "../../images/icons/COMPLETE_BRANDINGSUPPORT.svg"

const BrandIdentity = () => {
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
      icon: Pen,
      title: "Brand Strategy",
      // description: "Professional commercials that drive brand awareness and sales",
      features: ["Analyze your market, audience, and competition", 
                  "Define your brand positioning and core values", 
                  "Build a strategic roadmap for long-term growth"]
    },
    {
      icon: Package,
      title: "Visual Identity Design",
      // description: "Engaging content optimized for social media platforms",
      features: ["Design memorable logos and brand marks", 
                "Create cohesive color palettes and typography", 
                "Develop a consistent visual language across all media"]
    },
    {
      icon: Eye,
      title: "Brand Messaging & Storytelling",
      // description: "Professional content for internal and external communications",
      features: ["Define your brand voice and tone of communication", 
                 "Craft impactful taglines, headlines, and messaging", 
                 "Build authentic stories that connect emotionally"]
    },
    {
      icon: FileText,
      title: "Brand Collateral Design",
      // description: "Custom animations that bring your ideas to life",
      features: ["Design business cards, brochures, and stationery", 
                 "Create packaging that reflects your brand identity", 
                 "Ensure consistency across all printed and digital materials"]
    },
    // {
    //   icon: FileText,
    //   title: "Digital Branding",
    //   // description: "Custom animations that bring your ideas to life",
    //   features: ["Design engaging and responsive websites", 
    //              "Create branded content for social platforms", 
    //              "Enhance digital presence through cohesive design and messaging"]
    // }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your brand's values, mission, and target audience"
    },
    {
      step: "02", 
      title: "Research",
      description: "Analyzing market trends and competitor landscape"
    },
    {
      step: "03",
      title: "Concept",
      description: "Developing initial design concepts and directions"
    },
    {
      step: "04",
      title: "Design",
      description: "Creating refined designs with multiple iterations"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Final brand package with comprehensive guidelines"
    }
  ];

  const kreya = [
    {
      title: "Strategic Thinking",
      description: "At Kreya, we begin every brand identity project with a clear strategy. We take the time to understand your business, goals, and audience to ensure your brand is rooted in purpose and built to grow.",
      thumbnail: startegic,
    },
    {
      title: "Distinct Visual Identity",
      description: "We create visuals that not only look good but leave a lasting impression. From logos to color palettes and typography, every element is carefully designed to make your brand stand out.",
      thumbnail: distinct,
    },
    {
      title: "Clear Brand Messaging",
      description: "Your brand’s voice matters. We help you define how your brand sounds and communicates, so your message connects with your audience clearly and consistently across all platforms.",
      thumbnail: clear,
    },
        {
      title: "Complete Branding Support",
      description: "From the first idea to the final rollout, we offer full support. Whether you need brand guidelines, packaging, or digital branding, we ensure everything works together to tell your story effectively.",
      thumbnail: complete,
    }
  ];

    const img_sect = [
    {
      title: "Stand ",
      title_col: "Out",
      description: "In today’s saturated market, consumers are bombarded with countless choices. A strong brand identity helps you cut through the noise and be instantly recognizable. By establishing a clear voice, tone, and visual style, your brand can create a distinct presence that not only captures attention but also stays top-of-mind with your audience.",
      thumbnail: standout,
    },
    {
      title: "Build ",
      title_col: "Trust",
      description: "Trust is the foundation of any successful customer relationship. When your branding is consistent across every platform—website, social media, packaging, and beyond—it signals professionalism and reliability. Customers are more likely to engage with and purchase from a brand that appears stable, cohesive, and dependable.",
      thumbnail: trust,
    },
    {
      title: "Inspire ",
      title_col: "Loyalty",
      description: "Great brands don’t just sell products—they build relationships. When your brand reflects values, emotions, or aspirations your audience relates to, it creates a deeper connection. This emotional resonance fosters loyalty, encouraging customers to return, recommend, and advocate for your brand over time.",
      thumbnail: loyalty,
    },
        {
      title: "Show Your ",
      title_col: "Value",
      description: "Your brand should clearly articulate what makes you different—and better. Whether it’s innovation, quality, service, or experience, your brand must highlight the unique value you bring to the table. Strong branding ensures this message is consistently communicated, helping customers understand why they should choose you over competitors.",
      thumbnail: value,
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className={`flex items-center justify-center gap-4 mb-8 fade-up ${heroVisible ? 'visible' : ''}`}>
              <Palette className="w-16 h-16 text-primary" />
              <h1 className="text-6xl md:text-7xl font-bold">
                Brand <span className="gradient-text">Identity</span>
              </h1>
            </div>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed fade-up ${heroVisible ? 'visible' : ''}`} 
               style={{ transitionDelay: '200ms' }}>
              Visual systems that speak to your audience and stand out from the competition. 
              We create memorable brand identities that drive recognition and loyalty.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-up ${heroVisible ? 'visible' : ''}`}
                 style={{ transitionDelay: '400ms' }}>
              <Button className="btn-hero"  onClick={() => navigate("/About")}>Get Started</Button>
             
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-24 pt-24 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* <p className="text-lg font-bold">Bring Your Brand Story to Life</p> */}
            <h2 className="text-4xl font-bold pb-4"> <span className="gradient-text">Brand</span> Identity</h2>
            <p className="text-lg text-muted-foreground indent-8">
              At Kreya Branding, we believe that a brand is more than just a logo or a color palette — it’s the essence of a business and the way it connects with its audience. We work closely with businesses to craft meaningful brand strategies that define their voice, values, and unique positioning in the market. Our goal is to build brands that are not only visually striking but also rooted in purpose and clarity. </p>
            <p className="text-lg text-muted-foreground indent-8">Our process combines strategic thinking with creative excellence. From brand discovery and market research to naming, messaging, and visual identity design, we ensure every touchpoint reflects a consistent and compelling brand story. Whether launching a new brand or refreshing an existing one, we help businesses make a lasting impression that fosters loyalty and trust.</p>
            <p className="text-lg text-muted-foreground indent-8">At the heart of our work is a deep understanding of people — what they value, how they think, and what drives them to connect. That’s why our branding solutions are built to resonate emotionally, engage meaningfully, and grow sustainably in today’s competitive landscape.
            </p>
          </div>
          <div>
            <img
              src={branding}
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
            <h2 className="text-4xl font-bold mb-12">Why <span className="gradient-text">Branding </span>Matters</h2>
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


      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Our <span className="gradient-text">Core Branding</span> Services</h2>
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
      {/* Why Video Matters for Your Brand Section ends*/}

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

      {/* Process Section */}
      {/* <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Design Process</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures your brand identity reflects your values and resonates with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Portfolio Preview */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Brand Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped brands establish strong visual identities that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 aspect-square flex items-center justify-center mb-6 group-hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <Palette className="w-24 h-24 text-primary/30" />
                </div>
                <h3 className="text-xl font-bold mb-2">Brand Identity Project {item}</h3>
                <p className="text-muted-foreground">Complete brand identity system with logo, colors, and guidelines.</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-24 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Build Your <span className="gradient-text">Brand Identity</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a brand identity that sets you apart and drives recognition.
          </p>
          <Button className="btn-hero">Start Your Brand Project</Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default BrandIdentity;