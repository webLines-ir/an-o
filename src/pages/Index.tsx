import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import BreadShowcase from "@/components/BreadShowcase";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StorySection />
      <BreadShowcase />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
