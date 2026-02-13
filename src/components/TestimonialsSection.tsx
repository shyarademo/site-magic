import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { type SiteData } from "@/data/siteDataSchema";

interface Props {
  data: SiteData;
}

const TestimonialsSection = ({ data }: Props) => {
  return (
    <section id="testimonials" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary font-sans">
            Reviews
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {data.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border bg-card p-8 shadow-sm"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground font-sans italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-card-foreground font-sans">{t.name}</p>
                <p className="text-xs text-muted-foreground font-sans">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
