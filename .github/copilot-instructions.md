# GitHub Copilot Instructions

## Business context

> See `positioning.md` for the full brand positioning statement.
> See `target-customer-profile.md` for ideal customer details (Australian SMBs, 5–25 users, M365).
> See `service-offerings.md` for the three service packages (Digital Workplace Foundation, Secure Workplace, AI Workplace Readiness).
> See `digital-workplace-assessment.md` for the free assessment offer and scorecard structure.

**Company:** Aspect Infotech — Microsoft 365 specialist for Australian small businesses (5–25 users).  
**Tagline:** Secure digital workplaces for Australian small businesses  
**Contact:** contact@aspectinfotech.com  
**Booking:** https://calendly.com/pg-aspectinfotech/30min  
**Site URL:** https://aspectinfotech.com.au  
**Brand colour:** teal (#0f766e / Tailwind `teal-600`)

---

## Architecture

This is the [Lumio Lite Astro](https://github.com/getastrothemes/lumio-lite-astro) template, adapted for Aspect Infotech.

| Concern | Tool |
|---|---|
| Framework | Astro 7 (static output) |
| Styling | Tailwind CSS 4 |
| Icons | `lucide` v1.22 via `src/layouts/helpers/Icons.astro` |
| i18n | Disabled — English only (`settings.multilingual.enable = false`) |
| Deployment | Cloudflare Pages (`wrangler.toml`, `pages_build_output_dir = "./dist"`) |
| Config | `src/config/config.toml` (site, contact, settings) |
| Navigation | `src/config/menu.en.json` |
| Social | `src/config/social.json` |
| i18n strings | `src/i18n/en.json` |

---

## Project structure

```
src/
  config/
    config.toml          # Site title, contact, settings (multilingual disabled)
    menu.en.json         # Navigation (main, footer columns)
    social.json          # LinkedIn + email only
    fonts.json           # Font configuration
  content/
    sections/english/    # Section content files (MDX frontmatter drives all sections)
      home-banner-two.md   # Hero section
      about-company-two.md # About section
      working-process.md   # 3-step process (assessment → scorecard → implement)
      features-grid.md     # 3 feature pills (M365 specialists, Security-first, AI readiness)
      our-services.md      # Services section header/CTA
      contact-section.md   # Contact form + fields
    homepage/english/
      -index.md            # Homepage meta title/description
    services/english/
      -index.md            # Services list page meta
      digital-workplace-foundation.mdx
      secure-workplace.mdx
      ai-workplace-readiness.mdx
  layouts/
    helpers/
      Icons.astro          # Icon registry (lucide); has @ts-nocheck for v1.22 .mjs imports
      Button.astro         # Shared button primitive
      OptimizedImage.astro # Image with WebP optimisation
  i18n/
    en.json              # UI strings (nav button label, footer text, copyright)
  sections.schema.ts     # Zod schemas for all content section frontmatter
  pages/                 # Astro route files (uses content collections)
  styles/
    theme.css            # Tailwind theme tokens
    base.css             # Base heading styles
```

---

## Content conventions

- Editable section content lives in `src/content/sections/english/`.  
- Add or update Zod schemas in `src/sections.schema.ts` when adding new frontmatter fields.  
- For a new section, create both a `.astro` component in `src/layouts/` and a matching `.md` content file in `src/content/sections/english/`.  
- Use `Button.astro`, `Icons.astro`, and `OptimizedImage.astro` for UI primitives.  
- Use nearest Tailwind theme values from `src/styles/theme.css`. Avoid arbitrary values.  
- Do not add heading classes already covered by `base.css` (font weight, tracking, leading).  
- Prefer static rendering; avoid client JavaScript unless absolutely required.

---

## Known issues / gotchas

- `lucide` v1.22 ships `.mjs` icons without `.d.ts` declarations. `Icons.astro` has `// @ts-nocheck` to suppress false TS errors. Build and runtime are unaffected.
- The French content directories were removed. Do not recreate them.
- Blog and case-studies routes exist from the template — not actively used for Aspect Infotech yet.

---

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (runs toml:watch then astro build)
npm run astro-check  # TypeScript check (expect 0 errors)
```
