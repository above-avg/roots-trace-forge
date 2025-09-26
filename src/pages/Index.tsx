import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TrackingDashboard from "@/components/TrackingDashboard";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <TrackingDashboard />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
