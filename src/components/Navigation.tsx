import { Button } from "@/components/ui/button";
import { Leaf, Search, Shield, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-[var(--shadow-glow)]">
              <Leaf className="w-7 h-7 text-background" />
            </div>
            <div>
              <h1 className="text-2xl font-orbitron font-black text-foreground">HerbTrace</h1>
              <p className="text-xs text-muted-foreground font-inter font-medium">Blockchain Botanicals</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 animate-slide-up">
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-inter font-medium">
              How It Works
            </a>
            <a href="#dashboard" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-inter font-medium">
              Dashboard
            </a>
            <a href="#benefits" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-inter font-medium">
              Benefits
            </a>
            <a href="#verify" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-inter font-medium">
              Verify
            </a>
          </div>
          
          <div className="flex items-center space-x-4 animate-fade-in">
            <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 rounded-xl font-inter font-semibold transition-all duration-300">
              <Search className="w-4 h-4 mr-2" />
              Track Herb
            </Button>
            <Button 
              size="sm" 
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-orbitron font-bold rounded-xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-nature)] transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;