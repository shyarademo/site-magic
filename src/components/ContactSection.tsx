import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Navigation } from "lucide-react";
import { type SiteData } from "@/data/siteDataSchema";
import { Button } from "@/components/ui/button";

interface Props {
  data: SiteData;
}

const ContactSection = ({ data }: Props) => {
  const { contact, branding } = data;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            CONTACT US
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="grid gap-8 md:grid-cols-3">
            {/* Address Card */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-card-foreground font-serif">Royal Tour & Travels</h3>
              <p className="mb-4 text-sm text-muted-foreground font-sans">{contact.address}</p>
              <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary font-sans hover:underline">
                <Navigation className="h-4 w-4" /> GET DIRECTIONS
              </a>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-card-foreground font-serif">Royal Tour & Travels</h3>
              {contact.phones.map((p) => (
                <p key={p} className="mb-2 text-sm text-muted-foreground font-sans">{p}</p>
              ))}
              <a href={`tel:${branding.phones[0]}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary font-sans hover:underline">
                <Phone className="h-4 w-4" /> CALL NOW
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-card-foreground font-serif">Royal Tour & Travels</h3>
              {contact.phones.map((p) => (
                <p key={p} className="mb-2 text-sm text-muted-foreground font-sans">{p}</p>
              ))}
              <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary font-sans hover:underline">
                <MessageCircle className="h-4 w-4" /> WHATSAPP NOW
              </a>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center text-muted-foreground font-sans"
          >
            {contact.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
