import { useEffect } from "react";
import { useSiteData } from "@/data/useSiteData";
import ValidationErrorOverlay from "@/components/ValidationErrorOverlay";
import Header from "@/components/Header";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const TestimonialsPage = () => {
  const siteData = useSiteData();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (siteData.valid === false) {
    return <ValidationErrorOverlay errors={siteData.errors} />;
  }

  const data = siteData.data;

  return (
    <div className="min-h-screen bg-background">
      <Header data={data} />
      <div className="pt-20">
        <TestimonialsSection data={data} />
      </div>
      <Footer data={data} />
      <FloatingButtons data={data} />
    </div>
  );
};

export default TestimonialsPage;
