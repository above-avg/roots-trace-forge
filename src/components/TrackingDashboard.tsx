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
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Live Tracking <span className="text-nature-green">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real-time visibility into your herb's journey with our comprehensive tracking system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tracking Card */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-nature-green to-nature-forest text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{herbData.name}</CardTitle>
                    <p className="text-nature-sage">Batch ID: {herbData.batchId}</p>
                  </div>
                  <Badge variant="secondary" className="bg-nature-turmeric text-nature-forest">
                    {herbData.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-nature-green" />
                      <div>
                        <p className="font-semibold text-foreground">Collector</p>
                        <p className="text-muted-foreground">{herbData.collector}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-nature-green" />
                      <div>
                        <p className="font-semibold text-foreground">Origin</p>
                        <p className="text-muted-foreground">{herbData.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-nature-green" />
                      <div>
                        <p className="font-semibold text-foreground">Harvest Date</p>
                        <p className="text-muted-foreground">{herbData.harvestDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FlaskConical className="w-5 h-5 text-nature-green" />
                      <div>
                        <p className="font-semibold text-foreground">Quality Grade</p>
                        <p className="text-muted-foreground">{herbData.quality}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {herbData.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="border-nature-green text-nature-green">
                      {cert}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-to-r from-nature-green to-nature-forest">
                  View Complete Blockchain Record
                </Button>
              </CardContent>
            </Card>

            {/* Journey Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-6 h-6 text-nature-green" />
                  <span>Supply Chain Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {journeySteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-nature-green' :
                        step.status === 'active' ? 'bg-nature-turmeric' :
                        'bg-muted'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : step.status === 'active' ? (
                          <Clock className="w-5 h-5 text-white animate-pulse" />
                        ) : (
                          <span className="w-3 h-3 bg-muted-foreground rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${
                            step.status === 'completed' ? 'text-nature-green' :
                            step.status === 'active' ? 'text-nature-turmeric' :
                            'text-muted-foreground'
                          }`}>
                            {step.title}
                          </h4>
                          <span className="text-sm text-muted-foreground">{step.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Blockchain Visualization */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-center">Blockchain Network</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img 
                    src={blockchainImage} 
                    alt="Blockchain network" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/80 to-transparent flex items-end">
                    <div className="text-white p-4">
                      <p className="text-sm font-semibold">Live Network Status</p>
                      <p className="text-xs opacity-90">12,847 verified transactions</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Verified Farms</span>
                  <span className="font-bold text-nature-green">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Batches</span>
                  <span className="font-bold text-nature-turmeric">18,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Blockchain Records</span>
                  <span className="font-bold text-nature-forest">1.2M+</span>
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