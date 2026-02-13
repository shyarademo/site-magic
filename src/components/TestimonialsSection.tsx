import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { type SiteData } from "@/data/siteDataSchema";

interface Props {
  data: SiteData;
}

const TestimonialsSection = ({ data }: Props) => {
  const { testimonials } = data;

  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-2xl mx-auto">
            {testimonials.subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground">{testimonials.reviewsHeading}</h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.reviews.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative rounded-2xl border bg-card p-8 shadow-sm"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-2 font-bold text-card-foreground font-sans">"{t.title}"</p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground font-sans italic">
                {t.quote}
              </p>
              <div>
                <p className="font-bold text-card-foreground font-sans">— {t.name}</p>
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
