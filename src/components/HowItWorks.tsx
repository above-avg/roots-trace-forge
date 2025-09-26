import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Truck, FlaskConical, Package, QrCode, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
      {
        icon: Sprout,
        title: "Harvest & Collection",
        description: "Farmers and wild collectors geo-tag herbs at the source, creating the first blockchain record with location, date, and quality metrics.",
        color: "from-primary to-accent"
      },
      {
        icon: QrCode,
        title: "Digital Identity",
        description: "Each batch receives a unique QR code linking to its immutable blockchain record, tracking every detail from soil conditions to harvest methods.",
        color: "from-accent to-nature-neon-purple"
      },
      {
        icon: Truck,
        title: "Supply Chain Tracking",
        description: "Real-time tracking through processing facilities, with automated updates at each checkpoint maintaining complete transparency.",
        color: "from-nature-neon-teal to-nature-neon-cyan"
      },
      {
        icon: FlaskConical,
        title: "Quality Testing",
        description: "Laboratory results are automatically recorded on the blockchain, ensuring purity standards and authenticity verification.",
        color: "from-nature-neon-purple to-primary"
      },
      {
        icon: Package,
        title: "Manufacturing",
        description: "Final formulation processes are documented, linking source herbs to finished Ayurvedic products with complete ingredient traceability.",
        color: "from-primary to-nature-neon-teal"
      },
      {
        icon: Award,
        title: "Consumer Verification",
        description: "End consumers can scan QR codes to view the complete journey of their herbs, ensuring authenticity and ethical sourcing.",
        color: "from-accent to-nature-neon-cyan"
      }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-foreground mb-8">
            How <span className="text-primary animate-glow">HerbTrace</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter font-light leading-relaxed">
            Our blockchain-powered system creates an unbreakable chain of trust from the moment herbs are collected 
            to when they reach consumers as Ayurvedic formulations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="group hover:shadow-[var(--shadow-glow)] transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-soft)]`}>
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-sm font-orbitron font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/30">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-inter">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-20 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="w-4 h-4 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-orbitron font-bold text-lg">Live blockchain updates every 30 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;