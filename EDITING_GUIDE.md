# Royal Tour & Travels — Site Editing Guide

This document explains every field in `src/data/siteData.json`. Edit that file to update all website content — no code changes needed.

---

## Branding (`branding`)

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `companyName` | string | ✅ | Company name shown in header and footer | `"Royal Tour & Travels"` |
| `tagline` | string | ✅ | Short tagline | `"Your Trusted Travel Partner"` |
| `logoText` | string | ✅ | Text used in the logo circle | `"Royal Tour & Travels"` |
| `phones` | string[] | ✅ | Phone numbers (include country code) | `["+91 9661838900"]` |
| `whatsappNumber` | string | ✅ | WhatsApp number without `+` or spaces | `"919661838900"` |
| `email` | string | ✅ | Contact email address | `"info@example.com"` |
| `address` | string | ✅ | Full address | `"Near Mahabodhi Temple, Bodhgaya"` |

---

## Colors (`colors`)

All colors are in **HSL format** without the `hsl()` wrapper — just the three values.

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `primary` | ✅ | Main brand color (gold/amber) | `"38 92% 50%"` |
| `primaryForeground` | ✅ | Text on primary color | `"0 0% 100%"` |
| `secondary` | ✅ | Secondary color (dark navy) | `"220 25% 14%"` |
| `secondaryForeground` | ✅ | Text on secondary | `"0 0% 100%"` |
| `accent` | ✅ | Light accent color | `"38 100% 95%"` |
| `accentForeground` | ✅ | Text on accent | `"38 92% 30%"` |

**Tip:** Use an HSL color picker (e.g., https://hslpicker.com) and copy the 3 values.

---

## Navigation (`navigation`)

Array of menu items. Each item:

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `label` | ✅ | Menu text | `"Services"` |
| `href` | ✅ | Link target. Use `#sectionId` for same-page scroll | `"#services"` |

---

## Hero Section (`hero`)

| Field | Required | Description |
|-------|----------|-------------|
| `headline` | ✅ | Main heading text |
| `subheadline` | ✅ | Badge text above headline |
| `description` | ✅ | Paragraph below headline |
| `ctaText` | ✅ | Call-to-action button text |
| `ctaLink` | ✅ | Full URL for CTA (e.g., WhatsApp link) |
| `images` | ✅ | Array of image URLs (at least 1) |

---

## Services (`services`)

Array of service cards. Each item:

| Field | Required | Description |
|-------|----------|-------------|
| `icon` | ✅ | Lucide icon name: `"MapPin"`, `"Plane"`, or `"Package"` |
| `title` | ✅ | Service title |
| `description` | ✅ | Service description |

---

## Fleet (`fleet`)

Array of vehicles. Each item:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Vehicle name |
| `image` | URL | ✅ | Vehicle photo URL |
| `seats` | string | ✅ | Seating (e.g., `"4 + 1 Driver"`) |
| `ac` | boolean | ✅ | Has AC? `true`/`false` |
| `carrier` | boolean | ✅ | Has roof carrier? |
| `tollIncluded` | boolean | ✅ | Toll included? |
| `driverAllowance` | string | ✅ | Driver allowance info |
| `description` | string | ✅ | Short description |

---

## Pricing (`pricing`)

Three pricing tables: `local`, `outstation`, `routes`. Each has:

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Table heading |
| `headers` | ✅ | Array of column header strings |
| `rows` | ✅ | Array of arrays — each inner array is one row's cells |

**Example row:** `["Swift Dezire", "₹1,200", "₹1,800", "₹2,200", "₹12/km", "₹150/hr"]`

---

## Why Choose Us (`whyChooseUs`)

Array of value proposition cards:

| Field | Required | Description |
|-------|----------|-------------|
| `icon` | ✅ | Lucide icon name: `"Wallet"`, `"ShieldCheck"`, or `"Heart"` |
| `title` | ✅ | Card title |
| `description` | ✅ | Card description |

---

## Stats (`stats`)

Array of counter items:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | number | ✅ | The number to animate to |
| `suffix` | string | optional | Text after number (default: `"+"`) |
| `label` | string | ✅ | Label below number |

---

## Testimonials (`testimonials`)

Array of reviews:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Reviewer name |
| `location` | string | ✅ | Reviewer location |
| `rating` | number | ✅ | 1–5 star rating |
| `quote` | string | ✅ | Full review text |

---

## Contact (`contact`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `address` | string | ✅ | Full address |
| `phones` | string[] | ✅ | Phone numbers |
| `email` | string | ✅ | Email address |
| `whatsappLink` | URL | ✅ | Full WhatsApp URL |
| `mapLink` | URL | ✅ | Google Maps URL |

---

## Footer (`footer`)

| Field | Required | Description |
|-------|----------|-------------|
| `copyright` | ✅ | Copyright text |
| `tagline` | ✅ | Footer tagline |
| `links` | ✅ | Array of `{label, href}` objects |

---

## Terms & Conditions (`termsAndConditions`)

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Page heading |
| `lastUpdated` | ✅ | Year or date string |
| `sections` | ✅ | Array of `{title, content}` objects |

---

## Privacy Policy (`privacyPolicy`)

Same structure as Terms & Conditions:

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Page heading |
| `lastUpdated` | ✅ | Year or date string |
| `sections` | ✅ | Array of `{title, content}` objects |

---

## Tips for Non-Technical Editors

1. **Always keep the JSON valid** — Use a JSON validator (e.g., https://jsonlint.com) before saving
2. **Image URLs** — Use full URLs starting with `https://`. You can upload images to any hosting service and paste the URL
3. **Phone format** — Include country code: `"+91 9661838900"`
4. **WhatsApp number** — Numbers only, no spaces or `+`: `"919661838900"`
5. **Colors** — Use HSL values without `hsl()`: `"38 92% 50%"`
6. **If something breaks** — The site will show a friendly error overlay telling you exactly which field is wrong
