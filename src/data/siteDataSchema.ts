import { z } from "zod";

const navigationItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const serviceCardSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const fleetVehicleSchema = z.object({
  name: z.string().min(1),
  image: z.string().url(),
  seats: z.string().min(1),
  ac: z.boolean(),
  carrier: z.boolean(),
  tollIncluded: z.boolean(),
  driverAllowance: z.string().min(1),
  description: z.string().min(1),
});

const localRateSchema = z.object({
  "4hr40km": z.string(),
  "8hr60km": z.string(),
  "10hr80km": z.string(),
  meterCharge: z.string(),
  extraHrCharge: z.string(),
});

const outstationRateSchema = z.object({
  extraMeter: z.string(),
  minChargesDay: z.string(),
  driverNightHalt: z.string(),
});

const vehicleRateSchema = z.object({
  vehicle: z.string().min(1),
  local: localRateSchema,
  outstation: outstationRateSchema,
});

const whyChooseCardSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const statSchema = z.object({
  value: z.number().min(0),
  suffix: z.string().optional().default("+"),
  label: z.string().min(1),
});

const testimonialSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  rating: z.number().min(1).max(5),
  title: z.string().min(1),
  quote: z.string().min(1),
});

const legalSectionSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export const siteDataSchema = z.object({
  branding: z.object({
    companyName: z.string().min(1),
    tagline: z.string().min(1),
    logoText: z.string().min(1),
    phones: z.array(z.string()).min(1),
    whatsappNumber: z.string().min(1),
    email: z.string().email(),
    address: z.string().min(1),
  }),
  colors: z.object({
    primary: z.string().min(1),
    primaryForeground: z.string().min(1),
    secondary: z.string().min(1),
    secondaryForeground: z.string().min(1),
    accent: z.string().min(1),
    accentForeground: z.string().min(1),
  }),
  navigation: z.array(navigationItemSchema).min(1),
  hero: z.object({
    headline: z.string().min(1),
    subheadline: z.string().min(1),
    description: z.string().min(1),
    ctaText: z.string().min(1),
    ctaLink: z.string().url(),
    secondaryCtaText: z.string().optional(),
    images: z.array(z.string().url()).min(1),
  }),
  services: z.object({
    heading: z.string().min(1),
    subheading: z.string().min(1),
    cards: z.array(serviceCardSchema).min(1),
  }),
  fleet: z.object({
    heading: z.string().min(1),
    subheading: z.string().min(1),
    vehicles: z.array(fleetVehicleSchema).min(1),
  }),
  pricing: z.object({
    heading: z.string().min(1),
    subheading: z.string().min(1),
    vehicleRates: z.array(vehicleRateSchema).min(1),
    routeFares: z.object({
      title: z.string().min(1),
      headers: z.array(z.string()).min(2),
      rows: z.array(z.array(z.string()).min(2)).min(1),
    }),
  }),
  whyChooseUs: z.object({
    heading: z.string().min(1),
    subheading: z.string().min(1),
    cards: z.array(whyChooseCardSchema).min(1),
  }),
  stats: z.array(statSchema).min(1),
  testimonials: z.object({
    heading: z.string().min(1),
    subheading: z.string().min(1),
    reviewsHeading: z.string().min(1),
    reviews: z.array(testimonialSchema).min(1),
  }),
  contact: z.object({
    address: z.string().min(1),
    phones: z.array(z.string()).min(1),
    email: z.string().email(),
    whatsappLink: z.string().url(),
    mapLink: z.string().url(),
    description: z.string().min(1),
  }),
  footer: z.object({
    copyright: z.string().min(1),
    tagline: z.string().min(1),
    links: z.array(z.object({ label: z.string().min(1), href: z.string().min(1) })).min(1),
  }),
  termsAndConditions: z.object({
    title: z.string().min(1),
    lastUpdated: z.string().min(1),
    sections: z.array(legalSectionSchema).min(1),
  }),
  privacyPolicy: z.object({
    title: z.string().min(1),
    lastUpdated: z.string().min(1),
    sections: z.array(legalSectionSchema).min(1),
  }),
});

export type SiteData = z.infer<typeof siteDataSchema>;
