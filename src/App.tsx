import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import VideoProduction from "./pages/services/VideoProduction";
import BrandIdentity from "./pages/services/BrandIdentity";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import WebDevelopment from "./pages/services/WebDevelopment";
import GrowthStrategy from "./pages/services/GrowthStrategy";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/video-production" element={<VideoProduction />} />
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/growth-strategy" element={<GrowthStrategy />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
