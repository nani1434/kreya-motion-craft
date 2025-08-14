import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import kreya_logo from "../../src/images/kreya_brand.jpeg"


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Video Production", path: "/services/video" },
      { name: "Brand Identity", path: "/services/branding" },
      { name: "Digital Marketing", path: "/services/marketing" },
      { name: "Web Development", path: "/services/web" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Projects", path: "/projects" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="section-dark">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-4 text-white">
              Stay Updated with <span className="gradient-text">Kreya</span>
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest insights on branding, marketing trends, and creative inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-hero px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
                <Link to="/" className="flex items-center">
                  <img 
                    src={kreya_logo}
                    alt="KREYA" 
                    className="h-8 transition-opacity duration-300"
                  />
          </Link>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                We create powerful brand experiences that captivate audiences and drive results
                through cinematic storytelling and strategic marketing.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@kreya.agency</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-lg mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} Kreya. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Crafted with passion in Los Angeles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;