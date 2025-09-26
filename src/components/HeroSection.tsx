import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, Leaf } from "lucide-react";
import heroBackground from "@/assets/hero-background-video.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat animate-float"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
        <div className="absolute inset-0 bg-[var(--gradient-hero)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-8 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30 animate-glow">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary font-orbitron font-bold text-lg tracking-wide">Blockchain Botanicals</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-foreground mb-8 leading-tight animate-slide-up">
            From Soil to <span className="text-primary animate-glow">Shelf</span>
            <br />
            Complete Herb <span className="text-accent animate-glow">Traceability</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-fade-in font-inter font-light">
            Revolutionary blockchain-based system tracking Ayurvedic herbs from farmers and wild collectors 
            to your final formulation. Ensuring authenticity, quality, and ethical sourcing every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-orbitron font-bold px-10 py-6 text-lg rounded-2xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-nature)] transition-all duration-300">
              Start Tracking
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button variant="hero" size="lg" className="px-10 py-6 text-lg rounded-2xl font-orbitron font-semibold">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="flex items-center space-x-4 text-foreground/90 group hover:text-foreground transition-colors duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:border-primary/50 transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-orbitron font-bold text-lg">Geo-Tagged Collection</p>
                <p className="text-sm text-muted-foreground font-inter">From source to shelf</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-foreground/90 group hover:text-foreground transition-colors duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/30 group-hover:border-accent/50 transition-all duration-300">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-orbitron font-bold text-lg">Blockchain Verified</p>
                <p className="text-sm text-muted-foreground font-inter">Immutable records</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-foreground/90 group hover:text-foreground transition-colors duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-nature-neon-teal/20 to-nature-neon-cyan/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-nature-neon-teal/30 group-hover:border-nature-neon-teal/50 transition-all duration-300">
                <Leaf className="w-6 h-6 text-nature-neon-teal" />
              </div>
              <div>
                <p className="font-orbitron font-bold text-lg">Quality Assured</p>
                <p className="text-sm text-muted-foreground font-inter">Lab tested purity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-nature-neon-cyan rounded-full animate-pulse delay-700"></div>
    </section>
  );
};

export default HeroSection;