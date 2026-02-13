import { Link } from "react-router-dom";
import { type SiteData } from "@/data/siteDataSchema";

interface Props {
  data: SiteData;
}

const Footer = ({ data }: Props) => {
  const { footer, branding, contact } = data;

  return (
    <footer className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full gold-gradient">
                <span className="text-sm font-bold text-white font-serif">R</span>
              </div>
              <span className="font-bold text-secondary-foreground font-sans">
                {branding.companyName}
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-sans italic">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-bold text-secondary-foreground font-sans">Quick Links</h4>
            <div className="space-y-2">
              {footer.links.map((link) => (
                <Link key={link.label} to={link.href} className="block text-sm text-secondary-foreground/80 font-sans hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-bold text-secondary-foreground font-sans">Contact</h4>
            <p className="text-sm text-secondary-foreground/80 font-sans">{contact.address}</p>
            {contact.phones.map((p) => (
              <a key={p} href={`tel:${p}`} className="block text-sm text-secondary-foreground/80 font-sans hover:text-primary">
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/70 font-sans">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
