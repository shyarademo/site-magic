

# Royal Tour & Travels — Complete Website Redesign

## Overview
A modern, professional redesign of the Royal Tour & Travels taxi service website (Bodhgaya). All content, branding, colors, images, and layout will be driven entirely from a single `siteData.json` file. A Zod validation schema will enforce required fields and show a friendly in-browser error overlay if the JSON is misconfigured. An `EDITING_GUIDE.md` will document every field.

---

## Pages & Structure

### 1. Home Page (Single-page with sections)
A polished, modern landing page with smooth scroll navigation between these sections:

- **Hero Section** — Bold headline "Book a Car Taxi - Anytime Anywhere", tagline, prominent "Book a Taxi" CTA button (links to WhatsApp/phone), and a hero image carousel of vehicles
- **Services Cards** — Three feature cards: Local/Outstation & Round Trip, Airport Pick up & Drop, Best Tour Packages (with icons and descriptions from current site)
- **Our Fleet** — Card grid showcasing all 6 vehicles (Swift Dezire, Innova Crysta, Ertiga/Rumion, Scorpio, Skoda Slavia, Hyundai Verna) with seating capacity, AC, carrier, toll, driver allowance details and "Call Now" / "Check Availability" CTAs
- **Pricing Section** — Clean, tabbed pricing tables:
  - Local rates per vehicle (4hr/8hr/10hr packages, meter charge, extra hr charge)
  - Outside Gaya rates (meter, minimum KM/day, night halt)
  - Route-based fare table (Airport, Junction, Patna, Rajgir, Deoghar, Varanasi, Ranchi, etc.)
- **Why Choose Us** — Three value-prop cards: Pay To Driver, No Hidden Fees, Trust & Safety
- **Stats Counter** — Animated counters: 4821+ Satisfied Clients, 700+ Tour Packages, 05+ Team Members, 25+ Taxi Cars
- **Testimonials** — Carousel of 3 client reviews (Pritham Sinha, Akhlesh Yadav, Rahul Jatwa) with full review text and location
- **Contact Section** — Address, phone numbers, Call Now / WhatsApp Now / Get Directions buttons
- **Footer** — Navigation links, copyright text, tagline

### 2. Terms & Conditions Page
Full content from the current T&C page rendered cleanly with proper headings:
- Booking and Payment, Service Use, Liability, Cancellation and Refund Policy (with charge tiers), Additional Charges, Modifications, Dispute Resolution, Communication

### 3. Privacy Policy Page
Full content from the current Privacy Policy rendered with proper headings:
- Consent, Information We Collect, How We Use Your Information, Log Files, Advertising Partners Privacy Policies, Third Party Privacy Policies, CCPA Rights, GDPR Rights, Children's Information, Changes, Contact

---

## Design & UX Approach

- **Modern, warm color palette** — Rich gold/amber primary (inspired by current branding), dark navy text, clean white backgrounds, subtle warm grays
- **Professional typography** — Clean sans-serif font pairing for headings and body
- **Responsive design** — Fully mobile-friendly with hamburger menu navigation
- **Floating action buttons** — Sticky Call and WhatsApp buttons on all pages (bottom-right corner)
- **Smooth animations** — Fade-in on scroll for sections, animated stat counters
- **Clear CTAs** — Every section guides the user toward calling or WhatsApp booking
- **Easy navigation** — Sticky header with nav links, smooth scrolling between sections on the home page

---

## Technical Architecture

### `siteData.json`
A single JSON file containing ALL site content organized by sections:
- `branding` — Company name, tagline, logo URL, phone numbers, WhatsApp number, address
- `colors` — Primary, secondary, accent colors (HSL values)
- `navigation` — Menu items and links
- `hero` — Headline, subheadline, description, CTA text, carousel images
- `services` — Array of service cards (icon, title, description)
- `fleet` — Array of vehicles (name, image, seats, features, pricing tiers)
- `pricing` — Local rates, outstation rates, route-based fare table
- `whyChooseUs` — Array of value proposition cards
- `stats` — Array of stat counters
- `testimonials` — Array of reviews (quote, name, location)
- `contact` — Address, phones, map link, WhatsApp link
- `footer` — Copyright text, tagline, links
- `termsAndConditions` — Structured T&C content (sections with titles and content)
- `privacyPolicy` — Structured privacy policy content (sections with titles and content)

### Zod Validation
- Schema validates every required field in `siteData.json` at app startup
- If validation fails, a friendly error overlay appears in the browser showing exactly which fields are missing or invalid, with human-readable messages
- No cryptic errors — clear field names and what's expected

### `EDITING_GUIDE.md`
- Documents every JSON field with description, type, required vs optional, formatting rules, and examples
- Organized by section matching the JSON structure
- Includes tips for non-technical editors (image URLs, phone format, color format)

---

## Content
All text, pricing, reviews, contact info, T&C, and Privacy Policy content will be copied exactly as-is from the current website PDFs into the `siteData.json` file.

