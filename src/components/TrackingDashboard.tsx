import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, User, FlaskConical, CheckCircle, Clock, Package } from "lucide-react";
import blockchainImage from "@/assets/blockchain-network.jpg";

const TrackingDashboard = () => {
  const herbData = {
    name: "Organic Turmeric",
    batchId: "TUR-2024-001234",
    status: "In Transit to Manufacturing",
    collector: "Rajesh Patel",
    farm: "Green Valley Organics",
    location: "Kerala, India",
    harvestDate: "March 15, 2024",
    quality: "Grade A",
    certifications: ["Organic", "Fair Trade", "Blockchain Verified"]
  };

  const journeySteps = [
    { status: "completed", title: "Collection", date: "Mar 15, 2024", location: "Kerala Farm" },
    { status: "completed", title: "Quality Testing", date: "Mar 16, 2024", location: "Regional Lab" },
    { status: "completed", title: "Processing", date: "Mar 18, 2024", location: "Processing Unit" },
    { status: "active", title: "Transportation", date: "Mar 20, 2024", location: "In Transit" },
    { status: "pending", title: "Manufacturing", date: "Expected Mar 22", location: "Mumbai Factory" },
    { status: "pending", title: "Distribution", date: "Expected Mar 25", location: "Retail Network" }
  ];

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-foreground mb-8">
            Live Tracking <span className="text-primary animate-glow">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter font-light leading-relaxed">
            Experience real-time visibility into your herb's journey with our comprehensive tracking system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
          {/* Main Tracking Card */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)]">
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-background">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2 font-orbitron font-bold">{herbData.name}</CardTitle>
                    <p className="text-background/80 font-inter">Batch ID: {herbData.batchId}</p>
                  </div>
                  <Badge variant="secondary" className="bg-background/20 text-background border border-background/30 font-orbitron font-bold">
                    {herbData.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 bg-card/80 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                      <User className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-orbitron font-bold text-foreground">Collector</p>
                        <p className="text-muted-foreground font-inter">{herbData.collector}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-accent/5 border border-accent/10">
                      <MapPin className="w-6 h-6 text-accent" />
                      <div>
                        <p className="font-orbitron font-bold text-foreground">Origin</p>
                        <p className="text-muted-foreground font-inter">{herbData.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-nature-neon-teal/5 border border-nature-neon-teal/10">
                      <Calendar className="w-6 h-6 text-nature-neon-teal" />
                      <div>
                        <p className="font-orbitron font-bold text-foreground">Harvest Date</p>
                        <p className="text-muted-foreground font-inter">{herbData.harvestDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-nature-neon-purple/5 border border-nature-neon-purple/10">
                      <FlaskConical className="w-6 h-6 text-nature-neon-purple" />
                      <div>
                        <p className="font-orbitron font-bold text-foreground">Quality Grade</p>
                        <p className="text-muted-foreground font-inter">{herbData.quality}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {herbData.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 font-inter font-semibold px-4 py-2 rounded-xl">
                      {cert}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-orbitron font-bold text-lg py-6 rounded-2xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-nature)] transition-all duration-300">
                  View Complete Blockchain Record
                </Button>
              </CardContent>
            </Card>

            {/* Journey Timeline */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 shadow-[var(--shadow-soft)] bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 font-orbitron font-bold text-2xl">
                  <Package className="w-7 h-7 text-primary" />
                  <span>Supply Chain Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {journeySteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-muted/20 transition-colors duration-300">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-primary shadow-[var(--shadow-glow)]' :
                        step.status === 'active' ? 'bg-accent animate-glow' :
                        'bg-muted'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="w-7 h-7 text-background" />
                        ) : step.status === 'active' ? (
                          <Clock className="w-7 h-7 text-background animate-pulse" />
                        ) : (
                          <span className="w-4 h-4 bg-muted-foreground rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-orbitron font-bold text-xl ${
                            step.status === 'completed' ? 'text-primary' :
                            step.status === 'active' ? 'text-accent' :
                            'text-muted-foreground'
                          }`}>
                            {step.title}
                          </h4>
                          <span className="text-sm text-muted-foreground font-inter font-medium bg-muted/50 px-3 py-1 rounded-full">{step.date}</span>
                        </div>
                        <p className="text-muted-foreground font-inter">{step.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Blockchain Visualization */}
          <div className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 shadow-[var(--shadow-soft)] bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center font-orbitron font-bold text-xl">Blockchain Network</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-80">
                  <img 
                    src={blockchainImage} 
                    alt="Blockchain network" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                    <div className="text-foreground p-6 w-full">
                      <p className="font-orbitron font-bold text-lg mb-2">Live Network Status</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground font-inter">12,847 verified transactions</p>
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 shadow-[var(--shadow-soft)] bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron font-bold text-xl">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <span className="text-muted-foreground font-inter">Verified Farms</span>
                  <span className="font-orbitron font-bold text-xl text-primary">2,847</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-accent/5 border border-accent/10">
                  <span className="text-muted-foreground font-inter">Active Batches</span>
                  <span className="font-orbitron font-bold text-xl text-accent">18,234</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-nature-neon-teal/5 border border-nature-neon-teal/10">
                  <span className="text-muted-foreground font-inter">Blockchain Records</span>
                  <span className="font-orbitron font-bold text-xl text-nature-neon-teal">1.2M+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingDashboard;