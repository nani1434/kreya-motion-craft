import { useState, useEffect } from "react";
import { Megaphone, Target, BarChart, TrendingUp, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import video_image from "../../images/Video_services.jpeg";
import dm_1 from "../../images/digitalmarketing/dm_1.png"
import target from "../../images/digitalmarketing/TargetwithPrecision.png"
import incres from "../../images/digitalmarketing/increasebrandvisbility.png"
import enage from "../../images/digitalmarketing/engageacrosschannels.png"
import measure from "../../images/digitalmarketing/measurewhatmatters.png"
import approch from "../../images/icons/strategi_ approch.svg"
import soultions from "../../images/icons/customized_solution.svg"
import reporting from "../../images/icons/clear_reporting.svg"
import support from "../../images/icons/Dedicated_Support.svg"





const DigitalMarketing = () => {
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
      icon: Users,
      title: "Audience Targeting",
      // description: "Professional commercials that drive brand awareness and sales",
      features: ["Reach the right people using behavior & interest-based data", 
                  "Tailored messaging for specific customer segments", 
                  "Increase relevance and reduce wasted ad spend"]
    },
    {
      icon: Target,
      title: "Brand Visibility",
      // description: "Engaging content optimized for social media platforms",
      features: ["Boost presence across search engines and social platforms", 
                "Consistent branding across all digital touchpoints", 
                "Stay top-of-mind with your target audience"]
    },
    {
      icon: BarChart,
      title: "Cross-Platform Engagement",
      // description: "Professional content for internal and external communications",
      features: ["Connect with users on web, mobile, and social", 
                 "Unified brand experience across all channels", 
                 "Drive interaction through multi-channel content"]
    },
    {
      icon: Zap,
      title: "Performance Analytics",
      // description: "Custom animations that bring your ideas to life",
      features: ["Real-time tracking of campaign performance", 
                 "Identify what works and optimize continuously", 
                 "Transparent reporting with actionable insights"]
    },
    {
      icon: Zap,
      title: "Cost-Effective Campaigns",
      // description: "Custom animations that bring your ideas to life",
      features: ["Maximize ROI with smart budget allocation", 
                 "Focus on high-performing channels", 
                 "Optimize spend through continuous testing"]
    }
  ];


  const kreya = [
    {
      title: "Strategic Approach",
      description: "We combine your business goals with the latest industry trends to build smart, results-driven campaigns that make an impact.",
      thumbnail: approch,
    },
    {
      title: "Customized Solutions",
      description: "No two businesses are the same. Our strategies are tailored to match your audience, objectives, and budget for maximum effectiveness.",
      thumbnail: soultions,
    },
    {
      title: "Clear Reporting",
      description: "Stay informed with regular updates and easy-to-understand insights that help you track progress and fine-tune performance confidently.",
      thumbnail: reporting,
    },
        {
      title: "Dedicated Support",
      description: "From planning to execution, our expert team works closely with you to ensure smooth delivery and ongoing success.",
      thumbnail: support,
    }
  ];

  const results = [
    { metric: "250%", description: "Average ROI Increase" },
    { metric: "150%", description: "Lead Generation Growth" },
    { metric: "300%", description: "Social Engagement Boost" },
    { metric: "180%", description: "Conversion Rate Improvement" }
  ];

  const img_sect = [
    {
      title: "Target with ",
      title_col: "Precision",
      description: "Leverage advanced targeting tools to reach the right people based on location, interests, behavior, and demographics—maximizing your marketing efficiency and relevance.",
      thumbnail: target,
    },
    {
      title: "Increase ",
      title_col: "Brand Visibility",
      description: "Digital marketing enhances your presence across search engines, social media, and online platforms—ensuring your brand is seen, remembered, and trusted by more people.",
      thumbnail: incres,
    },
    {
      title: "Engage Across ",
      title_col: "Channels",
      description: "Deliver consistent and interactive experiences across multiple touchpoints—from Google to Instagram—keeping your audience engaged and connected with your brand.",
      thumbnail: enage,
    },
    {
      title: "Measure What ",
      title_col: "Matters",
      description: "Real-time analytics let you monitor campaigns, optimize performance, and make data-driven decisions—ensuring every marketing rupee works harder for your business.",
      thumbnail: measure,
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
              <Megaphone className="w-16 h-16 text-primary" />
              <h1 className="text-6xl md:text-7xl font-bold">
                Digital <span className="gradient-text">Marketing</span>
              </h1>
            </div>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed fade-up ${heroVisible ? 'visible' : ''}`} 
               style={{ transitionDelay: '200ms' }}>
              Data-driven campaigns that deliver measurable results and ROI. 
              We combine creative strategy with performance marketing to grow your business.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-up ${heroVisible ? 'visible' : ''}`}
                 style={{ transitionDelay: '400ms' }}>
              <Button className="btn-hero">Get Started</Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}

      {/* Our Video Services Grid */}
      <section className="px-24 pt-24 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg font-bold">Bring Your Brand Story to Life</p>
            <h2 className="text-4xl font-bold pb-4">Digital <span className="gradient-text">Marketing</span> Services</h2>
            <p className="text-lg text-muted-foreground indent-8">
              At Kreya Branding, we help businesses grow through smart, creative, and data-driven digital marketing strategies. We understand that every brand is unique, which is why we tailor our approach to meet your specific goals—whether that’s building awareness, attracting new customers, or driving sales. Our team combines insight, innovation, and the latest tools to deliver real, measurable results.            </p>
            <p className="text-lg text-muted-foreground indent-8">
              From SEO and social media marketing to paid advertising, content creation, and email campaigns, we offer a full spectrum of digital marketing services designed to elevate your brand. We don’t just focus on clicks and impressions—we focus on creating meaningful engagement that converts. With a deep understanding of audience behavior and digital trends, we ensure your brand stands out in a competitive online space.            </p>
            <p className="text-lg text-muted-foreground indent-8">
              Whether you're launching a new product or scaling an existing business, Kreya Branding provides the strategic support and execution you need to grow faster, smarter, and stronger in the digital landscape.            </p>
          </div>
          <div>
            <img
              src={dm_1}
              alt="Our Video Services"
              className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* image content section */}
      {img_sect.map((simg, index) => (
      <section className="px-24 pt-24 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
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
      </section>
      ))}

      {/*Card Section*/}
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
     {/* why chose kreya ends*/}

      {/* Results Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Proven Results</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our data-driven approach consistently delivers outstanding results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={result.metric} className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">{result.metric}</div>
                <div className="text-gray-300">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <Button className="btn-hero">Get Your Free Strategy Session</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;