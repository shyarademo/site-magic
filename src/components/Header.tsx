import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { type SiteData } from "@/data/siteDataSchema";
import { Button } from "@/components/ui/button";

interface Props {
  data: SiteData;
}

const Header = ({ data }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navy-gradient shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient">
            <span className="text-lg font-bold text-white font-serif">R</span>
          </div>
          <span className="text-lg font-bold font-sans text-white">
            {data.branding.companyName}
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {data.navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors font-sans ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${data.branding.phones[0]}`}>
            <Button size="sm" className="ml-2 gold-gradient border-0 text-white font-sans">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 lg:hidden text-white hover:bg-white/10"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 navy-gradient px-4 pb-4 lg:hidden">
          {data.navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`block w-full rounded-lg px-3 py-3 text-left text-sm font-medium font-sans ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${data.branding.phones[0]}`} className="mt-2 block">
            <Button className="w-full gold-gradient border-0 text-white font-sans">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
