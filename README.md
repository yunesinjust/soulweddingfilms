# SoulWeddingFilms

Wedding videography & photography portfolio website. Built with Next.js, TypeScript, Tailwind CSS, and next-intl for German/English i18n.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/de` (German) by default.

### Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. No special configuration needed — Vercel auto-detects Next.js
4. Set environment variables if needed (see `.env.example`)

## How to customize

### Add your own images

Replace the Unsplash placeholder URLs in the locale files (`src/messages/de.json` and `src/messages/en.json`) with your own image paths.

For local images, place them in the `public/images/` folder:

```
public/images/
├── hero/        → Hero background image or video
├── portfolio/   → Wedding cover images and galleries
├── about/       → Your portrait photo
└── og/          → Open Graph social sharing images
```

Then reference them as `/images/hero/my-image.jpg` in the locale files.

### Switch hero to video

In `src/app/[locale]/page.tsx`, replace the `<Image>` in the hero section with:

```tsx
<video autoPlay muted loop playsInline className="w-full h-full object-cover">
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

### Edit copy / translations

All text lives in two JSON files:

- `src/messages/de.json` — German (primary)
- `src/messages/en.json` — English

Edit any string and it updates site-wide.

### Update package prices

In both locale JSON files, find `services.packages` and update the `price` field for each package. Also update the `contact.form.packageOptions` to match.

### Set up the contact form

1. Create a form at [formspree.io](https://formspree.io)
2. Copy the endpoint URL
3. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in your `.env.local` file

### Update contact info

In both locale files, search for `TODO` and replace:

- `contact.email` — your email address
- `contact.instagram` — your Instagram handle
- `impressum.content` — your legal notice (required by German law)
- `datenschutz.content` — your privacy policy (required by German law)
- `about.greeting` — your name
- `about.story` — your personal story

## Project structure

```
src/
├── app/
│   ├── [locale]/          → All pages (Home, Portfolio, Services, About, Contact, Legal)
│   ├── globals.css        → Tailwind + custom theme
│   ├── sitemap.ts         → Auto-generated sitemap
│   └── robots.ts          → robots.txt
├── components/            → Shared UI components
├── i18n/                  → next-intl configuration
└── messages/              → Locale JSON files (de.json, en.json)
```

## Tech stack

- **Next.js** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- **next-intl** for internationalization
- **Formspree** for contact form submissions
