import { useState, useEffect, useRef } from "react";
import { Video, Play, Camera, Film, Monitor, Palette } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import video_image from "../../images/Video_services.jpeg";
import creative_edge from "../../images/Icons/CREATIVE_EDGE.svg"
import concept_development from "../../images/Icons/CONCEPT_DEVELOPMENT.svg"
import video_production from "../../images/videoproduction/Video_Production.png"
import boost_engagemnt from "../../images/videoproduction/boosts_engagement.png"
import improves_cover from "../../images/videoproduction/Improves_Conversion.png"
import seo from "../../images/videoproduction/seof.png"
import strength from "../../images/videoproduction/strengthensidentity.png"
import collbor from "../../images/icons/COLLATERAL_DESIGN.svg"
import top from "../../images/icons/TOPTIER_QUALITY.svg"
import results from "../../images/icons/RESULTS_DRIVEN.svg"


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
      title: "Concept Development",
      // description: "Professional commercials that drive brand awareness and sales",
      features: ["Craft compelling narratives aligned with your brand goals", 
                  "Focus on audience engagement and emotional connection", 
                  "Develop creative direction that drives results"]
    },
    {
      icon: Film,
      title: "Scriptwriting & Storyboarding",
      // description: "Engaging content optimized for social media platforms",
      features: ["Write clear, impactful scripts that tell your story", 
                "Visual planning through detailed storyboards", 
                "Align messaging and visuals before production begins"]
    },
    {
      icon: Monitor,
      title: "Production & Filming",
      // description: "Professional content for internal and external communications",
      features: ["Use high-end equipment for cinematic quality", 
                 "Professional crews ensure smooth on-site execution", 
                 "Capture visuals that resonate and inspire"]
    },
    {
      icon: Palette,
      title: "Editing & Motion Graphics",
      // description: "Custom animations that bring your ideas to life",
      features: ["Clean, dynamic edits for maximum impact", 
                 "Add motion graphics, animation, and sound design", 
                 "Polish the final cut into a compelling visual story"]
    },
    {
      icon: Palette,
      title: "Promotional & Social Videos",
      // description: "Custom animations that bring your ideas to life",
      features: ["Create content tailored for digital platforms", 
                 "Format and optimize for YouTube, Instagram, LinkedIn & more", 
                 "Drive engagement through shareable, platform-specific videos"]
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

  const kreya = [
    {
      title: "Creative Edge",
      description: "At Kreya, we combine innovative ideas with strong storytelling to create videos that captivate and connect with your audience.",
      thumbnail: creative_edge 
,
    },
    {
      title: "Top-Tier Quality",
      description: "From sharp visuals to crisp audio and seamless editing, we use the best tools and talent to deliver high-quality production every time.",
      thumbnail: collbor,
    },
    {
      title: "Collaborative Process",
      description: "Your vision matters. We work closely with you at every step — from initial brief to the final cut — ensuring the outcome reflects your goals.",
      thumbnail: top,
    },
        {
      title: "Results-Driven",
      description: "Our videos don’t just look great — they’re built to deliver real results, from boosting engagement to driving conversions.",
      thumbnail: results,
    }
  ];

  const img_sect = [
    {
      title: "Boosts",
      title_col: " Engagement",
      description: "Videos naturally invite interaction. Whether it’s likes, comments, or shares, video content generates more engagement across platforms—helping your brand reach wider audiences and build stronger connections with viewers.",
      thumbnail: boost_engagemnt,
    },
    {
      title: "Improves",
      title_col: " Conversion",
      description: "Video has a proven impact on business performance. From product demos to customer testimonials, compelling video content can influence buying decisions, drive more inquiries, and increase conversion rates significantly.",
      thumbnail: improves_cover,
    },
    {
      title: "SEO",
      title_col: " Friendly",
      description: "Search engines prioritize video-rich websites. Adding video not only improves your site's engagement metrics like time-on-page, but also increases the chance of ranking higher in search results, bringing more organic traffic.",
      thumbnail: seo,
    },
        {
      title: "Strengthens",
      title_col: "Identity",
      description: "Well-crafted video content tells a story—your brand story. These narratives create emotional impact and are easier to remember, helping your brand stay top-of-mind long after the video ends.",
      thumbnail: strength,
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
              <Button className="btn-hero">Get Started</Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Our Video Services Grid */}
      <section className="px-24 pt-24 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* <p className="text-lg font-bold">Bring Your Brand Story to Life</p> */}
            <h2 className="text-4xl font-bold pb-4">Video <span className="gradient-text">Production</span> Services</h2>
            <p className="text-lg text-muted-foreground indent-8">
              At Kreya Branding, we turn your ideas into impactful visual stories through expert video production. Whether it’s a product showcase, corporate video, brand film, or social media content, we bring your vision to life with high-quality visuals, clear messaging, and purpose-driven storytelling.
            </p>
            <p className="text-lg text-muted-foreground indent-8">
              Our end-to-end video production services cover everything from scripting and storyboarding to shooting, editing, and post-production. We focus on creating content that not only looks stunning but also aligns with your brand strategy and drives real engagement. With every video, we aim to inform, inspire, and convert — helping your brand stand out and connect with your audience meaningfully.
            </p>
          </div>
          <div>
            <img
              src={video_production}
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
            <h2 className="text-4xl font-bold mb-4">Why <span className="gradient-text">Video Matters </span>for Your Brand</h2>
          </div>
        </div>

      {img_sect.map((simg, index) => (
        <div className="px-24 pt-24 bg-background container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {index % 2 !== 0 ? (
          <>
            <div className="md:col-span-3">
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
            <div className="md:col-span-3">
              <h2 className="text-4xl font-bold">{simg.title} <span className="gradient-text">{simg.title_col}</span></h2>
              <p className="text-lg text-muted-foreground">{simg.description}</p>
            </div>
          </>
          )}
        </div>
      ))}
      </section>
      {/* ---image content Section ends---*/}

      {/* Services Section */}
      <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
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

      {/* ---image content Section ends---*/}


      {/* why chose kreya */}

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Chose Kreya?</h2>
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