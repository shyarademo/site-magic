import { useSiteData } from "@/data/useSiteData";
import ValidationErrorOverlay from "@/components/ValidationErrorOverlay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useEffect } from "react";

const TermsAndConditions = () => {
  const siteData = useSiteData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (siteData.valid === false) {
    return <ValidationErrorOverlay errors={siteData.errors} />;
  }

  const data = siteData.data;
  const tc = data.termsAndConditions;

  return (
    <div className="min-h-screen bg-background">
      <Header data={data} />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-32 lg:px-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">{tc.title}</h1>
        <p className="mb-10 text-sm text-muted-foreground font-sans">Last updated: {tc.lastUpdated}</p>
        <div className="space-y-8">
          {tc.sections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-3 text-xl font-bold text-foreground font-sans">{section.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground font-sans">{section.content}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer data={data} />
      <FloatingButtons data={data} />
    </div>
  );
};

export default TermsAndConditions;
