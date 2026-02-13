import { motion } from "framer-motion";
import { Users, Wind, Package, Phone } from "lucide-react";
import { type SiteData } from "@/data/siteDataSchema";
import { Button } from "@/components/ui/button";

interface Props {
  data: SiteData;
}

const FleetSection = ({ data }: Props) => {
  const { fleet, branding } = data;

  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary font-sans">
            {fleet.heading}
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {fleet.subheading}
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground font-sans">
                  {vehicle.seats}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-card-foreground font-sans">{vehicle.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground font-sans">{vehicle.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {vehicle.ac && (
                    <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground font-sans">
                      <Wind className="h-3 w-3" /> AC
                    </span>
                  )}
                  {vehicle.carrier && (
                    <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground font-sans">
                      <Package className="h-3 w-3" /> Carrier
                    </span>
                  )}
                  <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground font-sans">
                    <Users className="h-3 w-3" /> {vehicle.seats}
                  </span>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground font-sans">
                    Toll: {vehicle.tollIncluded ? "INCLUSIVE" : "Extra"}
                  </span>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground font-sans">
                    Driver: {vehicle.driverAllowance}
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${branding.phones[0]}`} className="flex-1">
                    <Button className="w-full gold-gradient border-0 text-white font-sans" size="sm">
                      <Phone className="h-4 w-4" /> CALL NOW
                    </Button>
                  </a>
                  <a href={data.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full font-sans" size="sm">
                      CHECK AVAILABILITY
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
