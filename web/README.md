# Astro Hema Website

A modern, conversion-focused website for Astro Hema's astrology consultations, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, authentic design with warm colors optimized for Indian audience
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Static site generation for blazing-fast performance
- 🔍 SEO optimized with proper metadata
- 📞 Multiple CTAs (Call, WhatsApp) throughout the page
- 💬 Floating WhatsApp button for easy access
- 🎯 Sales-focused layout with trust signals and testimonials
- 🔧 Easy content management through centralized config file

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## Updating Content

All website content (services, testimonials, contact info, etc.) can be updated in one place:

**`src/data/site-config.ts`**

This file contains:
- Contact information (phone, email, WhatsApp)
- Services list
- Testimonials
- Trust metrics
- "Why Choose" reasons

Simply edit this file and the entire website will update automatically.

### Example: Updating Phone Number

```typescript
// In src/data/site-config.ts
export const siteConfig = {
  contact: {
    phone: "+919876543210",  // Change this
    whatsapp: "919876543210", // And this (without +)
    // ...
  }
}
```

## Project Structure

```
web/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles & design tokens
│   └── data/
│       └── site-config.ts    # All website content
├── public/                   # Static assets
└── package.json
```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

That's it! Your site will be live with automatic deployments on every push to main.

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Color Palette

The design uses a warm, trust-building palette:

- **Background:** Soft cream (#fdf4e3)
- **Accent:** Rich red (#b91c1c)
- **Text:** Deep brown (#1b0b0b)
- **Cards:** Pure white (#ffffff)

## Support

For questions or issues, contact hello@astrohema.com

---

Built with ❤️ for Astro Hema
