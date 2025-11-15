# Getting Started with Astro Hema Website

## What's Been Built

A complete, production-ready website for Astro Hema with:

✅ **Modern Tech Stack**: Next.js 15 + TypeScript + Tailwind CSS  
✅ **Conversion-Focused Design**: Multiple Call & WhatsApp CTAs throughout  
✅ **Complete Sections**:
- Hero with strong value proposition
- Trust metrics (stats)
- Services grid (6 services)
- "Why Choose" section
- Client testimonials
- Full contact section with form
- Footer with quick links
- Floating WhatsApp button

✅ **Easy Content Management**: All content in one file (`src/data/site-config.ts`)  
✅ **SEO Optimized**: Proper metadata, semantic HTML  
✅ **Fully Responsive**: Mobile, tablet, desktop  
✅ **Zero Lint Errors**: Clean, production-ready code  
✅ **Ready to Deploy**: Vercel-optimized configuration

## View the Website

The development server is already running!

**Open:** http://localhost:3000

## Next Steps

### 1. Update Content with Real Information

Edit `/web/src/data/site-config.ts` to update:

- **Phone number** (currently: +919876543210)
- **Email** (currently: hello@astrohema.com)
- **WhatsApp** (currently: 919876543210)
- **Services** descriptions
- **Testimonials** (add real client reviews)
- **Stats** (years of experience, clients served, etc.)

### 2. Add Real Images (Optional)

Replace placeholder emoji/icons with real photos:

- Astro Hema's professional photo for hero section
- Service icons
- Client photos for testimonials (if available)

### 3. Deploy to Vercel

**Option A: Connect GitHub (Recommended)**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Complete Astro Hema website"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Done! Your site will be live in ~1 minute.

**Option B: Deploy from Terminal**

```bash
cd web
npm i -g vercel
vercel
```

### 4. Set Up Custom Domain (Optional)

After deploying to Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., astrohema.com)
4. Follow Vercel's instructions to update DNS

## Making Changes

All content updates can be done by editing one file:

**`/web/src/data/site-config.ts`**

After making changes:

1. Save the file
2. The development server will auto-reload
3. Check http://localhost:3000 to see changes
4. Commit and push to auto-deploy to production

## Design Notes

### Colors

- **Primary (Red):** #b91c1c - Used for CTAs and accents
- **Background (Cream):** #fdf4e3 - Warm, welcoming feel
- **Text (Brown):** #1b0b0b - High contrast, readable
- **Cards:** #ffffff - Clean, professional

### Typography

- **Sans-serif:** Geist Sans (clean, modern)
- **Monospace:** Geist Mono (for technical elements)

### Key Features

- Sticky header with Call/WhatsApp buttons
- Floating WhatsApp button (bottom-right)
- Multiple conversion points throughout the page
- Trust signals (years, clients, satisfaction rate)
- Social proof (testimonials)
- Clear contact information

## Support

Questions? Check:

- Main README: `/web/README.md`
- Site config: `/web/src/data/site-config.ts`
- Homepage code: `/web/src/app/page.tsx`

---

Built with focus on **conversion, trust, and authenticity** for the Indian astrology market.

