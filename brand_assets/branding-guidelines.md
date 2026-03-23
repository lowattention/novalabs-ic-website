# Nova Labs — Brand Guidelines

**Version 1.0 | March 2026**

Nova Labs® is a registered trademark of Nova Labs, Inc. (Reg. No. 4934993 / Serial No. 86536314).

---

## 1. Logo

Nova Labs has two active logo identities: the **Nova Labs primary logo** and the **Nova Labs Innovation Center (IC) logo**. Both are in active use and governed by the rules below.

### Nova Labs Primary Logo

Use `Updated_NL_Logo_with_RegisterMark-01.png` as the default logo for org-wide Nova Labs materials. This is the preferred version and includes the registered trademark symbol. The mark features the Nova Labs gear icon alongside the "NOVA Labs®" wordmark.

`New_LOGO_R-01.png` is available as an alternate primary lockup where context requires it.

### Nova Labs Innovation Center Logo

Use `NL_IC.png` for all Innovation Center–specific content, including the IC website, IC event materials, and IC-branded communications.

The IC logo extends the primary Nova Labs mark with two additions:
- A **lightbulb** integrated into the gear icon, representing innovation and ideas
- An **"Innovation Center" wordmark** in IC Teal (`#00AABD`), set inside a teal rectangular border beneath the Nova Labs mark

The IC logo is the primary logo for this website.

### When to Use Each Logo

| Context                                    | Logo to use                     |
|--------------------------------------------|---------------------------------|
| Nova Labs Innovation Center website        | IC logo (`NL_IC.png`)           |
| IC events, classes, and communications     | IC logo (`NL_IC.png`)           |
| Org-wide Nova Labs materials               | Primary Nova Labs logo          |
| Co-branded materials (NL + IC together)    | Primary Nova Labs logo; IC logo may appear as a secondary mark |

### Usage Rules
- **Always** pair the gear+lightbulb icon with the full wordmark (Nova Labs + Innovation Center). Never use the gear alone, and never use the gear+lightbulb without the accompanying text.
- Do not rotate, distort, recolor, or add effects to either logo.
- Do not place either logo on backgrounds that reduce contrast or legibility.
- Maintain clear space around the logo equal to the height of the "N" in "Nova" on all sides.
- Do not separate the "Innovation Center" box from the Nova Labs mark — the IC logo is a single lockup.

### Logo Variants

The following variants are required. Files should be stored in `brand_assets/` and named consistently. Current filenames reflect assets already in the folder; recommended filenames are the target state once all variants are created.

**Nova Labs Primary Logo**

| Variant             | Current file                                  | Recommended file name        | Status            | Use case                                        |
|---------------------|-----------------------------------------------|------------------------------|-------------------|-------------------------------------------------|
| Primary (color)     | `Updated_NL_Logo_with_RegisterMark-01.png`    | `logo-primary.svg`           | Available (PNG)   | Default use on white and light backgrounds      |
| Secondary (color)   | `New_LOGO_R-01.png`                           | `logo-secondary.svg`         | Available (PNG)   | Alternate primary lockup                        |
| Reversed (white)    | —                                             | `logo-reversed-white.svg`    | **Needs creating** | Dark backgrounds, nav bar, dark overlays       |
| Monochrome (black)  | —                                             | `logo-mono-black.svg`        | **Needs creating** | Single-color print, documents, fax/legal       |
| Monochrome (white)  | —                                             | `logo-mono-white.svg`        | **Needs creating** | Single-color applications on dark surfaces     |
| Favicon / mark only | —                                             | `favicon.ico` / `icon-32.png`| **Needs creating** | Browser tabs, app icons, 16–32px contexts      |

**Nova Labs Innovation Center Logo**

| Variant             | Current file   | Recommended file name        | Status            | Use case                                        |
|---------------------|----------------|------------------------------|-------------------|-------------------------------------------------|
| IC Primary (color)  | `NL_IC.png`    | `logo-ic-primary.svg`        | Available (PNG)   | Default IC use on white and light backgrounds   |
| IC Reversed         | —              | `logo-ic-reversed.svg`       | **Needs creating** | IC logo on dark backgrounds; teal elements become white |
| IC Monochrome       | —              | `logo-ic-mono-black.svg`     | **Needs creating** | Single-color print for IC materials            |
| IC Favicon          | —              | `favicon-ic.ico`             | **Needs creating** | IC-specific browser tabs and app icons         |

SVG is the preferred format for all logo files going forward. The existing PNG files are acceptable for current use but should be replaced with SVG equivalents. The gear+lightbulb+wordmark lockup must be used in all IC variants — the icon must never appear alone.

### Minimum Size

| Medium  | Minimum size                    |
|---------|---------------------------------|
| Digital | 120px wide                      |
| Print   | 1 inch wide                     |
| Favicon | 16×16px (simplified mark only)  |

Below 120px on screen, the wordmark detail may become illegible. At favicon scale (16–32px), use a simplified version of the gear mark only — the wordmark should be omitted at this size. A dedicated favicon asset should be created for this purpose.

### Logo on Colored Backgrounds

Approved background pairings:

| Background              | Logo variant to use          |
|-------------------------|------------------------------|
| White `#FFFFFF`         | Primary (color)              |
| Light Accent `#F5F5F5`  | Primary (color)              |
| Dark Nav `#2A2A2A`      | Reversed (white)             |
| Black                   | Reversed (white)             |

> **[MISSING]** Rules for logo on Nova Orange (`#F36E3D`) or other colored backgrounds have not yet been defined. When established, add the approved variant and any exclusion zones here. As an interim rule: do not place the logo on Nova Orange or any colored background until a tested variant is approved.

---

## 2. Color Palette

### Primary Colors

| Name               | Hex       | RGB              | Usage                          |
|--------------------|-----------|------------------|--------------------------------|
| Nova Orange        | `#F36E3D` | rgb(243, 110, 61)| Primary brand color, CTAs, accents |
| Nova Gray          | `#59595C` | rgb(89, 89, 92)  | Body text, secondary UI elements |

### Innovation Center Color

| Name               | Hex       | RGB              | Usage                          |
|--------------------|-----------|------------------|--------------------------------|
| IC Teal            | `#00AABD` | rgb(0, 170, 189) | Innovation Center sub-brand only — IC logo wordmark, IC-specific UI accents |

> **Note:** The IC Teal value `#00AABD` is sampled from `NL_IC.png` and should be verified against the original source file or design asset. IC Teal is reserved exclusively for Innovation Center contexts. Do not use it as a general Nova Labs brand color.

### Secondary & UI Colors

| Name               | Hex       | RGB              | Usage                          |
|--------------------|-----------|------------------|--------------------------------|
| Link Blue          | `#009AE3` | rgb(0, 154, 227) | Hyperlinks, interactive elements |
| Light Accent       | `#F5F5F5` | rgb(245, 245, 245)| Backgrounds, dividers, cards  |
| White              | `#FFFFFF` | rgb(255, 255, 255)| Main page background           |
| Near Black         | `#1A1A1A` | rgb(26, 26, 26)  | Heading text color (light mode); dark mode page background |
| Dark Nav           | `#2A2A2A` | rgb(42, 42, 42)  | Navigation bar background; dark UI surfaces |
| Nav Text           | `#C0C0C0` | rgb(192, 192, 192)| Navigation bar text            |

### Color Usage Rules
- Nova Orange is the primary action color. Use it for buttons, highlights, and key UI elements.
- Never use Nova Orange as a large background fill — it is an accent, not a base color.
- Link Blue is reserved for interactive, clickable text. Do not apply it to decorative or non-interactive elements.
- Maintain WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text) at minimum.

### Utility Tints

A small set of tints and shades for each primary color covers the most common UI states. Use these instead of reaching for arbitrary opacity values.

**Nova Orange — `#F36E3D`**

| Token              | Hex       | Use case                                         |
|--------------------|-----------|--------------------------------------------------|
| Orange Wash        | `#FEF0EB` | Badge backgrounds, alert tints, subtle highlights |
| Orange Light       | `#FAC3AF` | Disabled states, placeholder fills               |
| Orange Base        | `#F36E3D` | CTAs, active brand elements                      |
| Orange Hover       | `#E05A2A` | Button hover state (light mode — darker than base) |
| Orange Active      | `#C94E22` | Button pressed / active state                    |

**Nova Gray — `#59595C`**

| Token              | Hex       | Use case                                         |
|--------------------|-----------|--------------------------------------------------|
| Gray Wash          | `#F5F5F5` | Page section backgrounds, dividers (same as Light Accent) |
| Gray Light         | `#D6D6D7` | Borders, disabled inputs, subtle separators      |
| Gray Base          | `#59595C` | Body text, secondary UI elements                 |
| Gray Dark          | `#3D3D40` | Strong secondary text, icon emphasis             |
| Gray Darkest       | `#2A2A2A` | Navigation background (also used as dark surface)|

**IC Teal — `#00AABD`** *(Innovation Center contexts only)*

| Token              | Hex       | Use case                                         |
|--------------------|-----------|--------------------------------------------------|
| Teal Wash          | `#E5F7F9` | IC section backgrounds, IC badge backgrounds     |
| Teal Light         | `#7FD4DF` | IC disabled states, IC decorative elements       |
| Teal Base          | `#00AABD` | IC logo wordmark, IC border elements, IC CTAs    |
| Teal Hover         | `#008FA0` | IC button hover state                            |
| Teal Active        | `#007585` | IC button pressed / active state                 |

### Semantic Colors

Semantic colors are brand-influenced — standard hues adjusted to feel at home alongside the Nova Labs palette. Apply these consistently across all feedback states, form validation, and alert components.

**Success**

| Token           | Hex       | Use case                              |
|-----------------|-----------|---------------------------------------|
| Success Base    | `#2E9E6B` | Success icons, borders, active states |
| Success Light   | `#E8F7F1` | Success alert / toast background      |
| Success Text    | `#1A6B47` | Text on success light background      |

**Error**

| Token           | Hex       | Use case                              |
|-----------------|-----------|---------------------------------------|
| Error Base      | `#D94035` | Error icons, borders, destructive actions |
| Error Light     | `#FBEAE9` | Error alert / toast background        |
| Error Text      | `#A32B22` | Text on error light background        |

**Warning**

| Token           | Hex       | Use case                              |
|-----------------|-----------|---------------------------------------|
| Warning Base    | `#E8951A` | Warning icons, borders (amber — harmonizes with Nova Orange) |
| Warning Light   | `#FEF6E8` | Warning alert / toast background      |
| Warning Text    | `#8A5500` | Text on warning light background      |

**Info**

| Token           | Hex       | Use case                              |
|-----------------|-----------|---------------------------------------|
| Info Base       | `#009AE3` | Info icons, borders (reuses Link Blue)|
| Info Light      | `#E5F5FC` | Info alert / toast background         |
| Info Text       | `#006FA3` | Text on info light background         |

### Dark Mode Palette

Dark mode is built on a neutral dark gray base (`#1A1A1A`), with elevated surfaces stepping lighter to create depth. Nova Orange carries over unchanged — it reads well against dark surfaces.

**Surfaces**

| Token              | Hex       | Use case                                         |
|--------------------|-----------|--------------------------------------------------|
| Background         | `#1A1A1A` | Page base / root background                      |
| Surface            | `#242424` | Cards, panels, elevated containers               |
| Surface Floating   | `#2E2E2E` | Modals, dropdowns, tooltips                      |
| Border             | `#3A3A3A` | Dividers, input borders, subtle outlines         |

**Text**

| Token              | Hex       | Use case                                         |
|--------------------|-----------|--------------------------------------------------|
| Heading            | `#F5F5F5` | H1–H6 on dark backgrounds                       |
| Body               | `#E0E0E0` | Default body copy                                |
| Secondary          | `#A0A0A0` | Captions, placeholders, metadata                 |
| Disabled           | `#5A5A5A` | Disabled text and UI elements                    |

**Brand & Interactive**

| Token              | Hex       | Use case                                         |
|--------------------|-----------|--------------------------------------------------|
| Nova Orange        | `#F36E3D` | Unchanged — CTAs and accents on dark             |
| Orange Hover       | `#F58560` | Button hover state (dark mode — lighter than base, not the same as light mode hover `#E05A2A`) |
| Link Blue          | `#33AEEA` | Lightened for contrast on dark backgrounds       |

Semantic colors (success, error, warning, info) use the same base values in dark mode, but pair with their respective light-tint backgrounds only when contrast is sufficient. If a light background token fails WCAG AA on a dark surface, substitute the surface token (`#242424`) and adjust text color accordingly.

---

## 3. Typography

### Typefaces

Nova Labs uses a two-typeface system: **Futura** for headings and UI, and **Source Serif 4** for body copy. This pairing balances Futura's geometric precision with Source Serif 4's warmth and readability — reinforcing the brand's mix of maker craft and community character.

| Role                  | Typeface         | Weight        | Notes                                      |
|-----------------------|------------------|---------------|--------------------------------------------|
| Brand wordmark "Labs" | Futura           | Heavy         | Logo use only — do not replicate in UI     |
| Display / hero        | Futura           | Bold          | Large hero headings, campaign type         |
| H1–H3 headings        | Futura           | Bold          | Major section and page headings            |
| H4–H6 headings        | Futura           | Medium        | Sub-section headings, callouts             |
| Body copy             | Source Serif 4   | Regular (400) | All long-form text, articles, descriptions |
| Body emphasis         | Source Serif 4   | SemiBold (600)| Inline emphasis within body text           |
| UI labels / nav       | Futura           | Medium        | Buttons, navigation, form labels, captions |
| Captions / fine print | Futura           | Book          | 14px minimum, secondary information        |

### Font Delivery

> **[MISSING]** The delivery method for Futura has not been confirmed. Futura is a licensed typeface and is not available on Google Fonts. Confirm whether it is:
> - Self-hosted (font files stored in the project)
> - Loaded via Adobe Fonts (Typekit)
> - Or a substitute is in use
>
> **Source Serif 4** is available free via Google Fonts: `https://fonts.google.com/specimen/Source+Serif+4`

#### Web Fallback Stacks

```css
/* Headings & UI */
font-family: "Futura", "Century Gothic", "Trebuchet MS", sans-serif;

/* Body copy */
font-family: "Source Serif 4", "Georgia", "Times New Roman", serif;
```

### Type Scale

Base size: **18px**. The scale uses a **1.25× (Major Third)** ratio. Round to the nearest whole pixel.

| Level       | Size  | Typeface       | Weight | Line-height | Letter-spacing  | Case           |
|-------------|-------|----------------|--------|-------------|-----------------|----------------|
| Display     | 69px  | Futura         | Bold   | 1.1         | −0.03em         | Sentence case  |
| H1          | 55px  | Futura         | Bold   | 1.15        | −0.03em         | Sentence case  |
| H2          | 44px  | Futura         | Bold   | 1.2         | −0.02em         | Sentence case  |
| H3          | 35px  | Futura         | Bold   | 1.25        | −0.02em         | Sentence case  |
| H4          | 28px  | Futura         | Medium | 1.3         | −0.01em         | Sentence case  |
| H5          | 23px  | Futura         | Medium | 1.4         | 0               | Sentence case  |
| H6          | 18px  | Futura         | Medium | 1.5         | 0.02em          | Sentence case  |
| Body        | 18px  | Source Serif 4 | 400    | 1.7         | 0               | —              |
| Small / UI  | 16px  | Futura         | Medium | 1.5         | 0               | —              |
| Caption     | 14px  | Futura         | Book   | 1.5         | 0.01em          | —              |

**Minimum font size: 14px.** Never render text smaller than 14px in any context.

### Typography Rules

- **Headings:** Always sentence case. Never ALL CAPS in headings (the logo is the sole exception).
- **Body copy:** Source Serif 4 only. Do not use Futura for paragraphs longer than 2–3 sentences.
- **Italic:** Source Serif 4 italic is acceptable for body emphasis. Do not use Futura italic or oblique in UI — reserve oblique for editorial print contexts only.
- **Underline:** Reserved for hyperlinks only. Do not use underline for decorative emphasis.
- **Color:** Body text defaults to Nova Gray (`#59595C`). Headings default to near-black (`#1A1A1A` recommended). Never use Nova Orange as a text color for body copy.
- **Measure:** Optimal line length is 60–75 characters for body copy. Constrain column widths to prevent lines from running too wide.

---

## 4. Voice & Tone

Nova Labs is a community makerspace for makers and hobbyists. Our voice reflects that: human, resourceful, and welcoming to everyone — whether they've never touched a tool or have been building for decades.

### Brand Personality

| Trait        | What it means in practice                                                   |
|--------------|-----------------------------------------------------------------------------|
| **Welcoming** | Every piece of copy should make the reader feel like they belong here. No insider language, no gatekeeping. |
| **Resourceful** | We're problem-solvers. Our writing is practical, clear, and confident — we know our stuff without showing off. |
| **Approachable** | We talk *with* people, not *at* them. Contractions are fine. Sentences can be short. Humor is welcome when it fits. |

### Formality Level: Semi-Formal

We're professional but human. Write the way a knowledgeable friend talks — not like a corporate brochure, and not like a text message.

- **Yes:** "Not sure where to start? We've got you."
- **No:** "Nova Labs facilitates accessible pathways to fabrication expertise."

### Tone by Context

| Context                    | Tone guidance                                                                  |
|----------------------------|--------------------------------------------------------------------------------|
| Marketing / homepage copy  | Energetic and inviting. Lead with what people can *make* or *become*.          |
| Member communications      | Warm and direct. Assume they're already part of the community.                 |
| Technical documentation    | Clear and precise. Step-by-step. No ambiguity. Friendly but efficient.         |
| Error messages / alerts    | Calm and helpful. Explain what happened and what to do next. Never blame the user. |
| Social media               | Conversational and genuine. Celebrate member work. Keep it real, not polished. |

### Words & Phrases to Avoid

| Avoid                            | Use instead                              |
|----------------------------------|------------------------------------------|
| Leverage, utilize, facilitate    | Use, help, make                          |
| Synergy, ecosystem, stakeholders | Community, members, partners             |
| World-class, cutting-edge        | Just describe the thing specifically     |
| Simply, just, easy               | These minimize effort — drop them        |
| Exclusive access / members only  | Welcoming framing: "join us", "open to all members" |

### Writing Style Notes

- **Headings:** Sentence case throughout. See Section 3 (Typography) for the full heading hierarchy and size scale.
- **Oxford comma:** Always use it. ("tools, classes, and community" — not "tools, classes and community")
- **Punctuation in CTAs:** No periods on standalone buttons or short calls to action.
- **Exclamation points:** Use sparingly — one per piece of content at most. Overuse reads as performative.
- **Abbreviations:** Spell out on first use; abbreviate after. Exception: widely understood terms (e.g., CNC, CAD).

---

## 5. Iconography & Illustration

### Icon Library

Nova Labs uses **Font Awesome** as the standard icon library across all digital touchpoints. When a needed icon is not available in Font Awesome, custom icons should be drawn to match the style guidelines below.

### Visual Style

Icons use a **duotone** treatment: two layers of color applied to a single icon shape, creating depth without added complexity. This works well with Nova Labs' brand palette and adds a distinctive look across feature callouts, navigation, and marketing materials.

- **Corner style:** Slightly rounded. Icons should feel precise and technical but not harsh — a subtle corner radius aligns with the approachable character of the brand.
- **Stroke weight:** Medium weight (consistent with Font Awesome's default duotone style). Do not mix thin and heavy stroke weights within the same layout.

### Color Treatment

Icons adapt to their surrounding UI context — they are not locked to a single color combination. Apply the following guidelines per context:

| Context                    | Primary layer         | Secondary layer       |
|----------------------------|-----------------------|-----------------------|
| On white / light background| Nova Orange `#F36E3D` | Nova Gray `#59595C`   |
| On dark backgrounds (nav `#2A2A2A`, dark mode surfaces `#1A1A1A`–`#2E2E2E`) | White `#FFFFFF` | Nova Orange `#F36E3D` |
| On colored / accent areas  | White `#FFFFFF`       | 50% opacity white     |

Never apply colors outside the brand palette to icons. Do not use Link Blue (`#009AE3`) as a duotone icon color — it is reserved for interactive text.

### Sizing Standards

Icons must be legible and consistent across all size contexts. Use the following size scale:

| Size tier    | Pixel range   | Use cases                                      |
|--------------|---------------|------------------------------------------------|
| Small        | 16–20px       | Inline with body text, UI labels, navigation   |
| Medium       | 24–32px       | Buttons, list items, general UI elements       |
| Large        | 48–64px       | Feature callout sections, service highlights   |
| Hero/Display | 96px+         | Marketing headers, wayfinding, signage         |

Always align icons to the optical center relative to adjacent text, not the mathematical center. At small sizes (16–20px), use solid or simplified icon variants if duotone detail becomes unclear.

### Usage Rules

- Do not use icons as decoration. Every icon should reinforce meaning, not fill space.
- Pair icons with a text label whenever possible, especially at small sizes.
- Do not use more than one icon style (e.g., mixing line and duotone) within a single page or layout.
- Maintain consistent sizing within a component — all icons in a feature grid, for example, should be the same size.
- For wayfinding and printed signage, use high-contrast single-color versions of icons at sufficient size for legibility at a distance.

### Illustration

> **[MISSING]** Nova Labs does not yet have a defined illustration style. If illustration is added to the brand, recommend aligning with the icon language: slightly rounded forms, duotone color palette, mechanical/maker subject matter. Avoid generic stock illustration styles.

---

## 6. Photography & Imagery

Nova Labs photography should feel genuine — real people, real work, real community. The goal is to show what it's actually like to be a member and make someone want to be part of it.

### Style

Nova Labs uses a **mix of photography styles** depending on context:

| Style              | When to use                                                              |
|--------------------|--------------------------------------------------------------------------|
| Candid / documentary | Members actively working — hands on tools, mid-process, unposed       |
| Polished editorial  | Hero images, featured projects, print materials where higher production value is appropriate |
| Equipment / detail  | Close-up shots of machines, finished project details, technical features |

No single style is used exclusively. What unites them is authenticity — photos should look like Nova Labs, not a stock library.

### Subject Matter

Primary photographic subjects, in order of priority:

1. **Members making things** — Hands engaged with tools, machines running, work in progress. This is the core of the brand.
2. **Community & events** — Classes, workshops, group builds, social gatherings. Shows Nova Labs as a place, not just equipment.
3. **Finished projects** — Member-made work that demonstrates the range and quality of what gets built here.
4. **Equipment & space** — The shop floor, machines, and tools that make the makerspace distinctive.

### Mood

Photography should feel **warm and community-driven**. The best Nova Labs photos make the viewer feel welcome — like this is a place for them. Favor:

- Genuine expressions over posed smiles
- Collaboration and teaching moments over solo heroics
- Imperfect, in-progress work over only polished final results
- Natural light or realistic workshop lighting over harsh flash

### Color Treatment

Photos should be **natural and true-to-life** — no heavy color grading, filters, or tints. Accurate color is preferred. Minor exposure and contrast adjustments for consistency are acceptable; strong color casts or stylized grades are not.

When applying overlays to photos for UI use (e.g., text legibility on a hero image), use a dark gradient (`rgba(0,0,0,0.5)` to transparent) rather than a brand-color wash.

### People & Representation

Nova Labs is for everyone. Photography should actively reflect that:

- **Show real members**, not models or stock people. Authenticity is more important than perfection.
- **Seek diverse representation** — a range of ages, genders, ethnicities, and experience levels should be visible across the full body of photography.
- Always obtain appropriate consent before publishing photos of identifiable individuals.

### Stock Photography

Real Nova Labs photography is always preferred. Stock photography is acceptable only when original content is not available for a specific need. When using stock:

- Choose images that are candid and realistic in style — avoid overly polished or staged-looking stock.
- Do not use stock photos of people when the context implies they are Nova Labs members.
- Avoid generic "technology" or "innovation" stock tropes (glowing circuits, handshakes in suits, etc.).

### Technical Specifications

#### File Formats

| Format  | When to use                                                                 |
|---------|-----------------------------------------------------------------------------|
| **WebP** | Preferred format for all photos and complex images on the web. Best compression-to-quality ratio with broad browser support. |
| **JPEG** | Acceptable fallback for photos when WebP is not supported or available.    |
| **PNG**  | Graphics, screenshots, and any image requiring a transparent background.   |
| **SVG**  | All icons and logos. Resolution-independent and ideal for brand marks at any size. |

Always serve WebP as the primary source for photos and provide a JPEG fallback where needed (e.g., via `<picture>` with a `<source type="image/webp">` and `<img>` fallback).

Do not use GIF for animations — use CSS animation or video instead. Do not use BMP or TIFF on the web.

#### File Size Limits

| Image type        | Maximum file size |
|-------------------|-------------------|
| Hero / banner     | 500KB             |
| Content / card    | 200KB             |
| Thumbnail         | 100KB             |
| SVG (icons/logos) | 20KB              |

Compress all images before publishing. Use lossless compression for PNG and SVG; use quality 75–85 for WebP and JPEG. Images exceeding these limits will noticeably affect page load performance.

#### Aspect Ratios

| Ratio  | Use case                                                          |
|--------|-------------------------------------------------------------------|
| 16:9   | Hero images, full-width banners, video thumbnails                 |
| 4:3    | General content images, article illustrations, card images        |
| 3:2    | Editorial photography, member spotlights, event coverage          |
| 1:1    | Profile photos, member avatars, square thumbnails                 |

Crop images to the target ratio before uploading — do not rely on CSS to crop or stretch. Ensure the subject of the photo is centered or offset intentionally within the crop.

#### Resolution

> **[MISSING]** A formal resolution standard has not yet been defined. Recommend adopting **2× (Retina-ready)** as the baseline: supply images at twice the intended display size so they render sharply on HiDPI screens. For example, a 400×300px card image should be supplied at 800×600px and scaled down via CSS. Define this formally once confirmed.

---

## 7. Spacing & Layout

### Base Spacing Unit

Nova Labs uses an **8px base grid**. All spacing values — padding, margins, gaps, and offsets — should be multiples of 8. This creates visual consistency and makes layouts feel intentional rather than arbitrary.

| Token   | Value | Common uses                                      |
|---------|-------|--------------------------------------------------|
| `xs`    | 8px   | Icon padding, tight inline gaps                  |
| `sm`    | 16px  | Component internal padding, list item spacing    |
| `md`    | 24px  | Card padding, form field spacing                 |
| `lg`    | 32px  | Section sub-element separation                   |
| `xl`    | 48px  | Component-to-component separation                |
| `2xl`   | 64px  | Section vertical padding (desktop)               |
| `3xl`   | 96px  | Hero and feature section padding (desktop)       |

Do not use arbitrary values like 13px, 22px, or 37px. If a design requires a value not on this scale, round to the nearest token.

### Content Width

The maximum content width is **1024px**. Page content should be horizontally centered with consistent side margins. The full-bleed background (color fills, images) may extend to the viewport edge, but text and interactive elements should remain within the content container.

| Breakpoint | Side margin |
|------------|-------------|
| Mobile     | 16px        |
| Tablet     | 32px        |
| Desktop    | Auto (centered within 1024px max-width) |

### Column Grid

All page layouts use a **12-column grid**. Column gutters are 24px at desktop, 16px at tablet, and 16px at mobile. Layouts should snap to column boundaries — avoid spanning arbitrary fractional widths.

Common column patterns:

| Layout pattern         | Column split   | Use case                              |
|------------------------|----------------|---------------------------------------|
| Full width             | 12 / 12        | Hero sections, banners, full-width media |
| Two equal columns      | 6 / 6          | Feature comparisons, side-by-side content |
| Content + sidebar      | 8 / 4          | Article layouts, detail pages         |
| Three columns          | 4 / 4 / 4      | Feature grids, card rows              |
| Four columns           | 3 / 3 / 3 / 3  | Icon callouts, small cards            |

### Responsive Breakpoints

| Breakpoint | Range          | Grid behavior                                    |
|------------|----------------|--------------------------------------------------|
| Mobile     | < 768px        | Single column; stack all multi-column layouts    |
| Tablet     | 768px–1024px   | 2-column max; 3+ column layouts reduce to 2     |
| Desktop    | 1024px–1440px  | Full 12-column grid active; max-width 1024px     |

Always design mobile-first. Define the mobile layout first, then enhance for larger breakpoints.

### Section Vertical Spacing

Major page sections use **moderate vertical padding** to create clear separation without excessive whitespace.

| Breakpoint | Section padding (top + bottom) |
|------------|-------------------------------|
| Mobile     | 40px                          |
| Tablet     | 48px                          |
| Desktop    | 64px                          |

### Logo Placement

| Template          | Logo position                                               |
|-------------------|-------------------------------------------------------------|
| Navigation bar    | Centered horizontally within the nav bar                   |
| Email header      | Centered, with a minimum of 24px clear space on all sides  |
| Social card       | Bottom-left or bottom-center, clear of key imagery          |
| Print / documents | Top-left or top-center per document template               |

The logo must always appear on a background that provides sufficient contrast. On the dark nav bar (`#2A2A2A`), use the light/reversed logo variant.

---

## 8. Digital Application

### Web

Color values, dark mode tokens, and semantic colors for web use are defined in full in Section 2 (Color Palette). This website is the Nova Labs Innovation Center site — use the IC logo (`NL_IC.png`) as the primary logo throughout. IC Teal (`#00AABD`) may be used as an accent color in IC-specific UI elements on this site.

Key web-specific rules:

- All interactive elements (buttons, links, form controls) must have distinct **hover**, **focus-visible**, and **active** states. No exceptions.
- Focus-visible styles must be clearly visible for keyboard navigation — do not suppress the browser focus ring without providing a custom replacement.
- For dark mode, refer to the Dark Mode Palette in Section 2. The dark mode background is `#1A1A1A`; the nav bar dark color `#2A2A2A` is used for elevated surfaces, not the page base.
- Minimum touch target size for interactive elements: **44×44px** (WCAG 2.5.5).

### Social Media

> **[MISSING]** Recommend defining:
> - Approved profile image variants per platform
> - Post template guidelines (colors, type placement, logo position)
> - Approved aspect ratios for each platform (1:1, 4:5, 16:9, etc.)

---

## 9. Legal & Trademark

Nova Labs® is a registered trademark of Nova Labs, Inc.
- Registration Number: **4934993**
- Serial Number: **86536314**
- Reference: [Justia Trademarks — Nova Labs](https://trademarks.justia.com/865/36/nova-86536314.html)

Always display the ® symbol adjacent to "Nova Labs" in brand materials, especially in headers, footers, and first-use contexts within a document.

---

## 10. Questions & Governance

> **[MISSING]** Recommend adding:
> - Brand owner contact (name, email, or team) for guideline questions
> - Approval process for new brand applications or edge cases
> - Version history and change log for this document
