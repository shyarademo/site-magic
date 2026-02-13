import { motion } from "framer-motion";
import { Wallet, ShieldCheck, Heart } from "lucide-react";
import { type SiteData } from "@/data/siteDataSchema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wallet, ShieldCheck, Heart,
};

interface Props {
  data: SiteData;
}

const WhyChooseUs = ({ data }: Props) => {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary font-sans">
            Why Us
          </span>
          <h2 className="text-3xl font-bold text-secondary-foreground sm:text-4xl">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {data.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Wallet;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full gold-gradient">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-secondary-foreground font-sans">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary-foreground/70 font-sans">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
