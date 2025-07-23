import { useState, useEffect } from "react";
import { Users, Heart, TrendingUp, Target, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InfluencerMarketing = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    setTimeout(() => setSectionsVisible(true), 400);
  }, []);

  const services = [
    {
      icon: Users,
      title: "Influencer Partnerships",
      description: "Strategic partnerships with authentic influencers who align with your brand values.",
      features: ["Influencer Vetting", "Contract Negotiation", "Relationship Management", "Content Guidelines"]
    },
    {
      icon: Target,
      title: "Campaign Management",
      description: "End-to-end campaign management from strategy to execution and optimization.",
      features: ["Campaign Strategy", "Content Planning", "Timeline Management", "Quality Control"]
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Comprehensive analytics and reporting to measure campaign success and ROI.",
      features: ["Performance Analytics", "ROI Measurement", "Engagement Tracking", "Detailed Reporting"]
    },
    {
      icon: Heart,
      title: "Authentic Storytelling",
      description: "Creating genuine, engaging content that resonates with your target audience.",
      features: ["Content Strategy", "Brand Storytelling", "Audience Analysis", "Creative Direction"]
    }
  ];

  const tiers = [
    {
      name: "Micro-Influencers",
      range: "1K - 100K",
      description: "High engagement rates and niche audiences",
      benefits: ["Higher engagement", "Authentic connections", "Cost-effective", "Niche targeting"]
    },
    {
      name: "Macro-Influencers",
      range: "100K - 1M",
      description: "Broad reach with established credibility",
      benefits: ["Wide reach", "Professional content", "Brand credibility", "Diverse audiences"]
    },
    {
      name: "Celebrity Partners",
      range: "1M+",
      description: "Maximum exposure and brand association",
      benefits: ["Massive reach", "Brand prestige", "Media coverage", "Viral potential"]
    }
  ];

  const results = [
    { metric: "450%", description: "Average engagement increase" },
    { metric: "75%", description: "Brand awareness lift" },
    { metric: "65%", description: "Purchase intent boost" },
    { metric: "200%", description: "Social media growth" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-4xl mx-auto fade-up ${heroVisible ? 'visible' : ''}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Influencer <span className="gradient-text">Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Authentic partnerships that amplify your brand's reach and build genuine 
              connections with your target audience through trusted voices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero magnetic-btn">
                Launch Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="magnetic-btn">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Influencer <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive influencer marketing solutions that drive authentic engagement and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-service group fade-up ${
                  sectionsVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Tiers */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Influencer <span className="gradient-text">Tiers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with influencers across all tiers to match your brand with the perfect voices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`card-service text-center fade-up ${
                  sectionsVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.range}</div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Campaign <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our influencer campaigns consistently deliver exceptional results across key performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div
                key={result.metric}
                className={`text-center fade-up ${sectionsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <div className={`max-w-3xl mx-auto fade-up ${sectionsVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Amplify Your Brand?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's connect your brand with the perfect influencers to drive authentic engagement.
            </p>
            <Button size="lg" className="btn-hero magnetic-btn">
              Start Influencer Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfluencerMarketing;