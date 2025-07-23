import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Video Production", path: "/services/video-production", description: "Cinematic storytelling that captivates" },
    { name: "Brand Identity", path: "/services/brand-identity", description: "Complete brand ecosystems" },
    { name: "Digital Marketing", path: "/services/digital-marketing", description: "Data-driven campaigns" },
    { name: "Growth Strategy", path: "/services/growth-strategy", description: "Strategic consulting to scale" },
    { name: "Web Development", path: "/services/web-development", description: "High-performance websites" },
    { name: "Influencer Marketing", path: "/services/influencer-marketing", description: "Authentic partnerships" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={isScrolled ? "/logo-dark.png" : "/logo-light.png"} 
              alt="KREYA" 
              className="h-8 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.path}
                      className={`relative font-medium transition-colors duration-300 hover:text-primary group ${
                        isScrolled ? "text-foreground" : "text-white"
                      } ${
                        location.pathname === item.path ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`font-medium transition-colors duration-300 hover:text-primary bg-transparent ${
                      isScrolled ? "text-foreground" : "text-white"
                    } ${
                      location.pathname.startsWith('/services') ? "text-primary" : ""
                    }`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-md border border-border/50 shadow-lg">
                    <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/10 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                              All Services
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore our complete range of creative and strategic services.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      {serviceItems.map((service) => (
                        <NavigationMenuLink key={service.name} asChild>
                          <Link
                            to={service.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none text-foreground">
                              {service.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button className="btn-hero magnetic-btn">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 text-foreground hover:text-primary transition-colors duration-300 ${
                  location.pathname === item.path ? "text-primary font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Section */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-sm font-semibold text-muted-foreground mb-3">Services</div>
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className={`block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors duration-300 ${
                    location.pathname === service.path ? "text-primary font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Button className="btn-hero w-full mt-4" onClick={() => setIsOpen(false)}>
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;