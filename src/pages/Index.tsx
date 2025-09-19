import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DashboardsSection from "@/components/DashboardsSection";
import FlowSection from "@/components/FlowSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <DashboardsSection />
      <FlowSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
