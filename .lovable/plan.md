

## Navbar Redesign

The current navbar has visibility issues -- it's transparent on the homepage and uses a light background when scrolled, making it hard to read. The reference image shows a dark navy navbar that's always visible with white text and gold accents.

### Changes

**File: `src/components/Header.tsx`**

1. **Always dark navy background** -- Remove the transparent-on-homepage logic. The header will always use `navy-gradient` (dark navy) background with a subtle shadow, matching the reference image exactly.

2. **Always white text** -- Remove the `useLightText` conditional logic. Company name and all nav links will always be white. The active page link will be gold (`text-primary`).

3. **Improved spacing and layout** -- Increase horizontal padding between nav items for a more spacious feel matching the reference.

4. **Call Now button** -- Keep the gold gradient button with phone icon and white text (already matches reference).

5. **Mobile menu** -- Update the mobile dropdown to also use the dark navy background with white text for consistency.

6. **Mobile hamburger icon** -- Always white since the background is always dark.

### Technical Details

- Remove `isHomePage` and `useLightText` variables
- Header background: always `navy-gradient shadow-lg` (no transparency toggle)
- Company name: always `text-white`
- Nav links: `text-white/90 hover:text-white`, active state `text-primary` (gold)
- Mobile menu: `navy-gradient` background with `text-white/90` links
- Hamburger icon: always `text-white`

