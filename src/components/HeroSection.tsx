import { motion } from "framer-motion";
import { type SiteData } from "@/data/siteDataSchema";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  data: SiteData;
}

const HeroSection = ({ data }: Props) => {
  const { hero, branding } = data;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero.images[0]}
          alt="Taxi service"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary font-sans">
            {hero.subheadline}
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/80 font-sans">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={hero.ctaLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gold-gradient border-0 text-white text-base font-sans px-8">
                {hero.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href={`tel:${branding.phones[0]}`}>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base font-sans px-8">
                Call {branding.phones[0]}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-background">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
