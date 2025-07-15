import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-up">
              Creative <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              Coming soon - Thoughts on branding, marketing trends, and creative inspiration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Blog Coming Soon</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We're preparing valuable content about creative strategy and industry insights.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;