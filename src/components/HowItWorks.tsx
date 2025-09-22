import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Truck, FlaskConical, Package, QrCode, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Sprout,
      title: "Harvest & Collection",
      description: "Farmers and wild collectors geo-tag herbs at the source, creating the first blockchain record with location, date, and quality metrics.",
      color: "from-nature-green to-nature-forest"
    },
    {
      icon: QrCode,
      title: "Digital Identity",
      description: "Each batch receives a unique QR code linking to its immutable blockchain record, tracking every detail from soil conditions to harvest methods.",
      color: "from-nature-turmeric to-accent"
    },
    {
      icon: Truck,
      title: "Supply Chain Tracking",
      description: "Real-time tracking through processing facilities, with automated updates at each checkpoint maintaining complete transparency.",
      color: "from-nature-sage to-nature-green"
    },
    {
      icon: FlaskConical,
      title: "Quality Testing",
      description: "Laboratory results are automatically recorded on the blockchain, ensuring purity standards and authenticity verification.",
      color: "from-accent to-nature-turmeric"
    },
    {
      icon: Package,
      title: "Manufacturing",
      description: "Final formulation processes are documented, linking source herbs to finished Ayurvedic products with complete ingredient traceability.",
      color: "from-nature-forest to-nature-green"
    },
    {
      icon: Award,
      title: "Consumer Verification",
      description: "End consumers can scan QR codes to view the complete journey of their herbs, ensuring authenticity and ethical sourcing.",
      color: "from-nature-turmeric to-nature-sage"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-nature-sage/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How <span className="text-nature-green">HerbTrace</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our blockchain-powered system creates an unbreakable chain of trust from the moment herbs are collected 
            to when they reach consumers as Ayurvedic formulations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-nature-green/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-sm font-bold text-nature-green bg-nature-green/10 px-2 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-nature-green transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-nature-green/10 px-6 py-3 rounded-full">
            <span className="w-3 h-3 bg-nature-green rounded-full animate-pulse"></span>
            <span className="text-nature-green font-semibold">Live blockchain updates every 30 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;