import { Phone, MessageCircle } from "lucide-react";
import { type SiteData } from "@/data/siteDataSchema";

interface Props {
  data: SiteData;
}

const FloatingButtons = ({ data }: Props) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={data.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${data.branding.phones[0]}`}
        className="flex h-14 w-14 items-center justify-center rounded-full gold-gradient text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
