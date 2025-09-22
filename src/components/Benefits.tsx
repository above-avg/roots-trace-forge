import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Leaf, TrendingUp, Award, Globe } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Complete Transparency",
      description: "Every step documented on blockchain from soil to shelf, ensuring complete visibility and trust in your herbal supply chain.",
      color: "from-nature-green to-nature-forest"
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description: "Direct connection between collectors and consumers, ensuring fair pricing and recognition for sustainable farming practices.",
      color: "from-nature-turmeric to-accent"
    },
    {
      icon: Leaf,
      title: "Quality Assurance",
      description: "Lab-tested purity standards with immutable quality records, guaranteeing authentic Ayurvedic herb potency and safety.",
      color: "from-nature-sage to-nature-green"
    },
    {
      icon: TrendingUp,
      title: "Market Premium",
      description: "Verified provenance commands higher market prices for both collectors and manufacturers of authentic herbal products.",
      color: "from-accent to-nature-turmeric"
    },
    {
      icon: Award,
      title: "Certification Integration",
      description: "Seamless integration with organic, fair trade, and sustainability certifications for comprehensive credential management.",
      color: "from-nature-forest to-nature-green"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International compliance with pharmaceutical regulations and export requirements for global Ayurvedic product distribution.",
      color: "from-nature-turmeric to-nature-sage"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Traceability Accuracy", description: "Blockchain-verified records" },
    { number: "2.5M+", label: "Herbs Tracked", description: "Across 15+ varieties" },
    { number: "30%", label: "Premium Pricing", description: "For verified products" },
    { number: "5,000+", label: "Active Collectors", description: "Worldwide network" }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-background to-nature-sage/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-nature-green">HerbTrace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing the Ayurvedic industry with blockchain technology that benefits every stakeholder 
            from farmers to final consumers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nature-green/30 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-nature-green transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-nature-green to-nature-forest rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Proven Impact</h3>
            <p className="text-nature-sage text-lg">Real numbers from our growing network of verified herb collectors and manufacturers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-nature-turmeric mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-nature-sage text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-nature-turmeric/10 px-8 py-4 rounded-full mb-6">
            <span className="w-4 h-4 bg-nature-turmeric rounded-full animate-pulse"></span>
            <span className="text-nature-forest font-semibold text-lg">Join 5,000+ verified collectors today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;