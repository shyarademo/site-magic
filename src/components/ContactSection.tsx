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
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary font-sans">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Contact Us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border bg-card p-8 shadow-sm lg:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground font-sans">Address</p>
                    <p className="text-sm text-muted-foreground font-sans">{contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground font-sans">Phone</p>
                    {contact.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="block text-sm text-muted-foreground font-sans hover:text-primary">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground font-sans">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-sm text-muted-foreground font-sans hover:text-primary">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a href={`tel:${branding.phones[0]}`}>
                  <Button className="w-full gold-gradient border-0 text-white font-sans" size="lg">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </Button>
                </a>
                <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-0 font-sans" size="lg">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Now
                  </Button>
                </a>
                <a href={contact.mapLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full font-sans" size="lg">
                    <Navigation className="h-5 w-5" />
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
