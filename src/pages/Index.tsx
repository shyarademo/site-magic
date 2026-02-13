import { useSiteData } from "@/data/useSiteData";
import ValidationErrorOverlay from "@/components/ValidationErrorOverlay";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const siteData = useSiteData();

  if (siteData.valid === false) {
    return <ValidationErrorOverlay errors={siteData.errors} />;
  }

  const data = siteData.data;

  return (
    <div className="min-h-screen bg-background">
      <Header data={data} />
      <main>
        <HeroSection data={data} />
        <ServicesSection data={data} />
        <FleetSection data={data} />
        <PricingSection data={data} />
        <WhyChooseUs data={data} />
        <StatsSection data={data} />
        <TestimonialsSection data={data} />
        <ContactSection data={data} />
      </main>
      <Footer data={data} />
      <FloatingButtons data={data} />
    </div>
  );
};

export default Index;
