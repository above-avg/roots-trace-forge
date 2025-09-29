import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Leaf, TrendingUp, Award, Globe } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Complete Transparency",
      description: "Every step documented on blockchain from soil to shelf, ensuring complete visibility and trust in your herbal supply chain.",
      color: "from-primary to-accent"
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description: "Direct connection between collectors and consumers, ensuring fair pricing and recognition for sustainable farming practices.",
      color: "from-accent to-nature-neon-purple"
    },
    {
      icon: Leaf,
      title: "Quality Assurance",
      description: "Lab-tested purity standards with immutable quality records, guaranteeing authentic Ayurvedic herb potency and safety.",
      color: "from-nature-neon-teal to-nature-neon-cyan"
    },
    {
      icon: TrendingUp,
      title: "Market Premium",
      description: "Verified provenance commands higher market prices for both collectors and manufacturers of authentic herbal products.",
      color: "from-nature-neon-purple to-primary"
    },
    {
      icon: Award,
      title: "Certification Integration",
      description: "Seamless integration with organic, fair trade, and sustainability certifications for comprehensive credential management.",
      color: "from-primary to-nature-neon-teal"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International compliance with pharmaceutical regulations and export requirements for global Ayurvedic product distribution.",
      color: "from-accent to-nature-neon-cyan"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Traceability Accuracy", description: "Blockchain-verified records" },
    { number: "2.5M+", label: "Herbs Tracked", description: "Across 15+ varieties" },
    { number: "30%", label: "Premium Pricing", description: "For verified products" },
    { number: "5,000+", label: "Active Collectors", description: "Worldwide network" }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-foreground mb-8">
            Why Choose <span className="text-primary animate-glow">HerbTrace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter font-light leading-relaxed">
            Revolutionizing the Ayurvedic industry with blockchain technology that benefits every stakeholder 
            from farmers to final consumers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 animate-slide-up">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-[var(--shadow-glow)] transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm hover:-translate-y-3">
                <CardContent className="p-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-soft)]`}>
                    <Icon className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-inter text-lg">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="rounded-3xl p-12 md:p-16 border border-border/50 backdrop-blur-sm">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-orbitron font-black text-foreground mb-6">Proven Impact</h3>
            <p className="text-muted-foreground text-xl font-inter font-light">Real numbers from our growing network of verified herb collectors and manufacturers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl md:text-6xl font-orbitron font-black text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-2xl font-orbitron font-bold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-muted-foreground font-inter">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-accent/10 to-primary/10 px-10 py-6 rounded-full border border-accent/20 backdrop-blur-sm">
            <span className="w-5 h-5 bg-accent rounded-full animate-pulse"></span>
            <span className="text-accent font-orbitron font-bold text-xl">Join 5,000+ verified collectors today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;