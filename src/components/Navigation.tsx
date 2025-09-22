import { Button } from "@/components/ui/button";
import { Leaf, Search, Shield, Users } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-nature-green to-nature-forest rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HerbTrace</h1>
              <p className="text-xs text-muted-foreground">Blockchain Botanicals</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#verify" className="text-foreground hover:text-primary transition-colors">
              Verify
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Track Herb
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-nature-green to-nature-forest">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;