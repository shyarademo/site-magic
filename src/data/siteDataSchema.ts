import { z } from "zod";

const navigationItemSchema = z.object({
  label: z.string().min(1, "Navigation label is required"),
  href: z.string().min(1, "Navigation href is required"),
});

const serviceSchema = z.object({
  icon: z.string().min(1, "Service icon name is required"),
  title: z.string().min(1, "Service title is required"),
  description: z.string().min(1, "Service description is required"),
});

const fleetItemSchema = z.object({
  name: z.string().min(1, "Vehicle name is required"),
  image: z.string().url("Vehicle image must be a valid URL"),
  seats: z.string().min(1, "Seating capacity is required"),
  ac: z.boolean(),
  carrier: z.boolean(),
  tollIncluded: z.boolean(),
  driverAllowance: z.string().min(1, "Driver allowance info is required"),
  description: z.string().min(1, "Vehicle description is required"),
});

const pricingTableSchema = z.object({
  title: z.string().min(1, "Pricing table title is required"),
  headers: z.array(z.string()).min(2, "At least 2 column headers required"),
  rows: z.array(z.array(z.string()).min(2)).min(1, "At least 1 row required"),
});

const whyChooseUsItemSchema = z.object({
  icon: z.string().min(1, "Icon name is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

const statSchema = z.object({
  value: z.number().min(0, "Stat value must be non-negative"),
  suffix: z.string().optional().default("+"),
  label: z.string().min(1, "Stat label is required"),
});

const testimonialSchema = z.object({
  name: z.string().min(1, "Reviewer name is required"),
  location: z.string().min(1, "Reviewer location is required"),
  rating: z.number().min(1).max(5),
  quote: z.string().min(1, "Review text is required"),
});

const legalSectionSchema = z.object({
  title: z.string().min(1, "Section title is required"),
  content: z.string().min(1, "Section content is required"),
});

export const siteDataSchema = z.object({
  branding: z.object({
    companyName: z.string().min(1, "Company name is required"),
    tagline: z.string().min(1, "Tagline is required"),
    logoText: z.string().min(1, "Logo text is required"),
    phones: z.array(z.string()).min(1, "At least one phone number is required"),
    whatsappNumber: z.string().min(1, "WhatsApp number is required"),
    email: z.string().email("Must be a valid email address"),
    address: z.string().min(1, "Address is required"),
  }),
  colors: z.object({
    primary: z.string().min(1, "Primary color (HSL) is required"),
    primaryForeground: z.string().min(1, "Primary foreground color is required"),
    secondary: z.string().min(1, "Secondary color is required"),
    secondaryForeground: z.string().min(1, "Secondary foreground color is required"),
    accent: z.string().min(1, "Accent color is required"),
    accentForeground: z.string().min(1, "Accent foreground color is required"),
  }),
  navigation: z.array(navigationItemSchema).min(1, "At least one nav item required"),
  hero: z.object({
    headline: z.string().min(1, "Hero headline is required"),
    subheadline: z.string().min(1, "Hero subheadline is required"),
    description: z.string().min(1, "Hero description is required"),
    ctaText: z.string().min(1, "CTA button text is required"),
    ctaLink: z.string().url("CTA link must be a valid URL"),
    images: z.array(z.string().url()).min(1, "At least one hero image URL required"),
  }),
  services: z.array(serviceSchema).min(1, "At least one service is required"),
  fleet: z.array(fleetItemSchema).min(1, "At least one vehicle is required"),
  pricing: z.object({
    local: pricingTableSchema,
    outstation: pricingTableSchema,
    routes: pricingTableSchema,
  }),
  whyChooseUs: z.array(whyChooseUsItemSchema).min(1),
  stats: z.array(statSchema).min(1, "At least one stat is required"),
  testimonials: z.array(testimonialSchema).min(1, "At least one testimonial is required"),
  contact: z.object({
    address: z.string().min(1, "Contact address is required"),
    phones: z.array(z.string()).min(1, "At least one phone number required"),
    email: z.string().email("Must be a valid email"),
    whatsappLink: z.string().url("WhatsApp link must be a valid URL"),
    mapLink: z.string().url("Map link must be a valid URL"),
  }),
  footer: z.object({
    copyright: z.string().min(1, "Copyright text is required"),
    tagline: z.string().min(1, "Footer tagline is required"),
    links: z.array(z.object({
      label: z.string().min(1),
      href: z.string().min(1),
    })).min(1),
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

export type ValidationSuccess = { success: true; data: SiteData };
export type ValidationFailure = { success: false; errors: string[] };
export type ValidationResult = ValidationSuccess | ValidationFailure;

export function validateSiteData(data: unknown): ValidationResult {
  const result = siteDataSchema.safeParse(data);
  if (result.success) {
    return { success: true as const, data: result.data };
  }
  const errors = result.error.issues.map(
    (issue) => `${issue.path.join(" → ")}: ${issue.message}`
  );
  return { success: false as const, errors };
}
