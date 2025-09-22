import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-herbs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ayurvedic herbs harvest" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nature-forest/90 via-nature-green/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-nature-turmeric/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Leaf className="w-6 h-6 text-nature-turmeric" />
            </div>
            <span className="text-nature-turmeric font-semibold text-lg">Blockchain Botanicals</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            From Soil to <span className="text-nature-turmeric">Shelf</span>
            <br />
            Complete Herb <span className="text-nature-turmeric">Traceability</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Revolutionary blockchain-based system tracking Ayurvedic herbs from farmers and wild collectors 
            to your final formulation. Ensuring authenticity, quality, and ethical sourcing every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-nature-turmeric hover:bg-nature-turmeric/90 text-nature-forest font-semibold px-8 py-4">
              Start Tracking
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Geo-Tagged Collection</p>
                <p className="text-sm text-white/70">From source to shelf</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Blockchain Verified</p>
                <p className="text-sm text-white/70">Immutable records</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Quality Assured</p>
                <p className="text-sm text-white/70">Lab tested purity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-nature-turmeric rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/50 rounded-full animate-pulse delay-300"></div>
    </section>
  );
};

export default HeroSection;