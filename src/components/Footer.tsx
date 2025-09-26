import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Mail, MapPin, Phone, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/20 to-background border-t border-border/50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Leaf className="w-8 h-8 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-black text-foreground">HerbTrace</h3>
                <p className="text-muted-foreground text-sm font-inter">Blockchain Botanicals</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed font-inter">
              Revolutionizing Ayurvedic herb traceability with blockchain technology, 
              ensuring authenticity from farm to pharmacy.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-xl transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-nature-neon-teal hover:bg-nature-neon-teal/10 rounded-xl transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up">
            <h4 className="text-xl font-orbitron font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground font-inter">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors duration-300">How It Works</a></li>
              <li><a href="#dashboard" className="hover:text-primary transition-colors duration-300">Live Dashboard</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors duration-300">Benefits</a></li>
              <li><a href="#verify" className="hover:text-primary transition-colors duration-300">Verify Products</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>

          {/* For Stakeholders */}
          <div className="animate-slide-up">
            <h4 className="text-xl font-orbitron font-bold text-foreground mb-6">For Stakeholders</h4>
            <ul className="space-y-3 text-muted-foreground font-inter">
              <li><a href="#farmers" className="hover:text-accent transition-colors duration-300">Farmers & Collectors</a></li>
              <li><a href="#processors" className="hover:text-accent transition-colors duration-300">Processors</a></li>
              <li><a href="#manufacturers" className="hover:text-accent transition-colors duration-300">Manufacturers</a></li>
              <li><a href="#retailers" className="hover:text-accent transition-colors duration-300">Retailers</a></li>
              <li><a href="#consumers" className="hover:text-accent transition-colors duration-300">Consumers</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="animate-fade-in">
            <h4 className="text-xl font-orbitron font-bold text-foreground mb-6">Stay Connected</h4>
            <div className="space-y-4 text-muted-foreground mb-8">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-muted/20 border border-border/30">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-inter">hello@herbtrace.com</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-muted/20 border border-border/30">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-inter">+91 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-muted/20 border border-border/30">
                <MapPin className="w-5 h-5 text-nature-neon-teal" />
                <span className="font-inter">Mumbai, India</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="font-orbitron font-bold text-foreground">Newsletter</p>
              <div className="flex space-x-3">
                <Input 
                  placeholder="Your email" 
                  className="bg-muted/20 border-border/30 text-foreground placeholder:text-muted-foreground rounded-xl font-inter focus:border-primary/50 transition-colors"
                />
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-orbitron font-bold rounded-xl px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-10 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <p className="text-muted-foreground font-inter">
              © 2024 HerbTrace. All rights reserved. Built with blockchain technology for Ayurvedic excellence.
            </p>
            <div className="flex items-center space-x-8 font-inter text-muted-foreground">
              <a href="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="/security" className="hover:text-primary transition-colors duration-300">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;