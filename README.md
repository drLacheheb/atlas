# Atlas — Architectural & Maintenance Electrical Services ⚡

**Atlas** (أطلس للكهرباء / Atlas Électricité) is a premium, high-performance, and high-fidelity showcase landing website designed for a professional electrical technical services firm. Built using **Astro**, **Tailwind CSS**, and **TypeScript**, the platform is optimized for local search authority, accessibility, and exceptional visual elegance across desktop and mobile screens.

---

## 🌟 Key Features

1. **Dynamic Tri-lingual i18n Support**
   * Multi-locale routing setup:
     * **Arabic (Default, RTL)** served at the root `/`
     * **English (LTR)** served under the `/en/` subpath prefix
     * **French (LTR)** served under the `/fr/` subpath prefix
   * High-fidelity, type-safe custom translations hook (`useTranslations`) and dictionary system (`translations.ts`).
   * Dynamic path-cleansing locale switcher row (`العربية | English | Français`) that maintains subpage context during transitions (e.g., swapping language on `/fr/faq` automatically routes to `/en/faq` or `/faq`).

2. **Advanced Responsive Design & Performance**
   * Full fluidity and visual compatibility with small-screen mobile displays (iPhone SE, etc.) up to large monitors.
   * Tailored typographic scaling rules between RTL (Arabic) and LTR (English/French) to prevent text clipping and preserve optimal density.
   * Blazing-fast page speeds leveraging **Astro's Sharp Image Compression pipeline**, yielding a **~96% page weight reduction** (~6.1 MB compressed down to 249 KB) by packaging raw heavy background assets into lightweight modern `.webp` resources.

3. **Premium Aesthetics & Micro-Animations**
   * Blueprint-themed tech grids and center-aligned radial overlays, combined with low-opacity structural graphic assets to establish high-fidelity, high-contrast aesthetics.
   * Cubic-bezier staggered scroll-reveal animations (`.reveal`, `.reveal-scale`, `.reveal-left`, `.reveal-right`) utilizing a lightweight native `IntersectionObserver` system.
   * Dynamic card micro-interactions, rising color fills, and glow drop-shadow effects on hover.

4. **SEO & Structured Data (JSON-LD)**
   * Localized structured business schemas (`@type: Electrician` subclass of `LocalBusiness`) dynamically generated in the `<head>` of all layouts to maximize SEO authority.
   * Comprehensive meta definitions, canonical endpoints, and localized OpenGraph (`og:locale`) / Twitter Card configurations.

5. **Portable Production Containerization (Docker)**
   * Multi-stage production `Dockerfile` utilizing lightweight `node:22-alpine` for deterministic dependency resolution and compilation, and high-performance `nginx:alpine` to serve static pages.
   * Custom `nginx.conf` handling **Clean URLs** (rewriting `/en/faq` directly to `/en/faq/index.html` preventing router 404s) and aggressive public caching for asset files.

---

## 📁 Project Structure

```text
/
├── public/                 # Static public assets (Favicons, webmanifest)
├── src/
│   ├── assets/             # Raw heavy background images and graphics (optimized by Astro)
│   ├── components/         # Premium modular UI page sections
│   │   ├── Header.astro    # Navigation bar & dynamic 3-language subpath switcher
│   │   ├── Hero.astro      # Main landing showcase section
│   │   ├── Benefits.astro  # Key business advantages and interactive card deck
│   │   ├── Metrics.astro   # Stat highlights with optimized `<Image />` overlays
│   │   ├── Services.astro  # Interactive services grid with hover rising background fills
│   │   ├── Contact.astro   # Layout contact cards with responsive break-words handles
│   │   └── Footer.astro    # Minimalist footer with bottom legal rows
│   ├── i18n/
│   │   └── translations.ts # Unified language mapping dictionary and translation hook
│   ├── layouts/
│   │   └── Layout.astro    # Base LTR/RTL HTML head shell, JSON-LD schema, & scroll scripts
│   ├── pages/
│   │   ├── index.astro     # Root homepage (Arabic)
│   │   ├── faq.astro       # FAQ page (Arabic)
│   │   ├── privacy.astro   # Privacy Policy (Arabic)
│   │   ├── terms.astro     # Terms of Service (Arabic)
│   │   ├── en/             # English routes subfolder (/en/*)
│   │   └── fr/             # French routes subfolder (/fr/*)
│   └── styles/
│       └── global.css      # Core styling, HSL palette tokens, and keyframe transitions
├── Dockerfile              # Multi-stage production building Docker manifest
├── nginx.conf              # Custom server rules & asset cache headers
├── package.json            # Core dev script declarations and dependencies
└── astro.config.mjs        # Astro configuration with tri-lingual i18n routing
```

---

## 🛠️ Commands & Local Development

Run all commands from the root directory of the project:

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Local Development Server
Starts a hot-reloaded dev server locally:
```bash
pnpm dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
Compiles code, runs the image optimization pipeline, and pre-renders static HTML pages into `./dist/`:
```bash
pnpm build
```

### 4. Local Preview
Verifies the production bundle locally before deployment:
```bash
pnpm preview
```

---

## 🐳 Docker Deployment

The website can be compiled and deployed anywhere using Docker:

### 1. Build Production Image
```bash
docker build -t atlas-web .
```

### 2. Run Container Instance
```bash
docker run -d -p 8080:80 --name atlas-instance atlas-web
```
Open [http://localhost:8080](http://localhost:8080) to access the production container.
