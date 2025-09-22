import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Mail, MapPin, Phone, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nature-forest text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-nature-turmeric to-accent rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-nature-forest" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HerbTrace</h3>
                <p className="text-nature-sage text-sm">Blockchain Botanicals</p>
              </div>
            </div>
            <p className="text-nature-sage leading-relaxed">
              Revolutionizing Ayurvedic herb traceability with blockchain technology, 
              ensuring authenticity from farm to pharmacy.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-nature-sage hover:text-white hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-nature-sage hover:text-white hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-nature-sage hover:text-white hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-nature-sage">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Live Dashboard</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#verify" className="hover:text-white transition-colors">Verify Products</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* For Stakeholders */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Stakeholders</h4>
            <ul className="space-y-2 text-nature-sage">
              <li><a href="#farmers" className="hover:text-white transition-colors">Farmers & Collectors</a></li>
              <li><a href="#processors" className="hover:text-white transition-colors">Processors</a></li>
              <li><a href="#manufacturers" className="hover:text-white transition-colors">Manufacturers</a></li>
              <li><a href="#retailers" className="hover:text-white transition-colors">Retailers</a></li>
              <li><a href="#consumers" className="hover:text-white transition-colors">Consumers</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="space-y-3 text-nature-sage mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@herbtrace.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Newsletter</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-nature-sage"
                />
                <Button className="bg-nature-turmeric hover:bg-nature-turmeric/90 text-nature-forest">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-nature-sage text-sm">
              © 2024 HerbTrace. All rights reserved. Built with blockchain technology for Ayurvedic excellence.
            </p>
            <div className="flex items-center space-x-6 text-sm text-nature-sage">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/security" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;