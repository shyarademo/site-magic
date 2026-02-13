import { motion } from "framer-motion";
import { MapPin, Plane, Package } from "lucide-react";
import { type SiteData } from "@/data/siteDataSchema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Plane, Package,
};

interface Props {
  data: SiteData;
}

const ServicesSection = ({ data }: Props) => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary font-sans">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {data.services.map((service, i) => {
            const Icon = iconMap[service.icon] || MapPin;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gold-gradient">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground font-sans">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-sans">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
