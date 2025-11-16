# Astro Hema Brand Guidelines

## Brand Overview

**Mission**: To provide authentic Vedic astrology and Vastu consultations that empower modern families to make informed life decisions.

**Vision**: To be India's most trusted online astrology platform, combining ancient wisdom with modern accessibility.

**Brand Personality**: Trustworthy, Spiritual, Knowledgeable, Compassionate, Modern

---

## Visual Identity

### Logo Usage

- **Primary Logo**: Circular logo with spiritual symbol (🕉️ or actual logo image)
- **Size**: Minimum 40px × 40px
- **Clear Space**: Maintain at least 10px padding around logo
- **Always use with brand name**: "Astro Hema" text alongside logo

### Color Palette

**Primary Colors**:
- **Accent (Orange/Saffron)**: `#D97706` - Represents spirituality, energy, wisdom
  - Use for: CTAs, highlights, important elements
  - Tailwind: `accent`, `text-accent`, `bg-accent`

- **Foreground (Dark)**: `#1F2937` - Main text color
  - Use for: Headers, primary text
  - Tailwind: `text-foreground`

**Secondary Colors**:
- **Muted (Gray)**: `#6B7280` - Supporting text
  - Use for: Descriptions, secondary information
  - Tailwind: `text-muted`

- **Card (White)**: `#FFFFFF` - Background for cards
  - Tailwind: `bg-card`

- **Accent Soft (Light Orange)**: `#FEF3C7` - Soft backgrounds
  - Tailwind: `bg-accent-soft`

**Gradients** (for hero sections and CTAs):
```css
/* Hero Gradient */
from-accent-soft via-white to-accent-soft

/* CTA Gradient */
from-accent to-accent/80
```

### Typography

**Font Stack**: System fonts for fast loading
```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
```

**Hierarchy**:
- **H1 (Hero)**: 4xl-6xl, font-bold (48-60px)
- **H2 (Section)**: 3xl-4xl, font-bold (36-48px)
- **H3 (Card Title)**: xl-2xl, font-semibold (20-24px)
- **Body**: base-lg (16-18px)
- **Small Text**: sm (14px)

**Accent Text**: Use `text-accent` class for highlighted words in headers

### Spacing & Layout

**Container**:
- Max width: 7xl (1280px)
- Padding: px-4 sm:px-6 lg:px-8

**Section Spacing**:
- Vertical: py-16 sm:py-24 (64-96px)
- Gap between elements: 6-12 (24-48px)

**Card Styling**:
```tsx
className="bg-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all"
```

### Icons & Emojis

**Use emojis for visual appeal**:
- ✨ Sparkle - Logo, magic, highlights
- 🔮 Crystal Ball - Predictions, consultations
- 💑 Couple - Match making, relationships
- ❤️ Heart - Love consultation
- 💎 Gem - Gemstones, premium services
- 🌟 Star - Daily horoscope, ratings
- 📞 Phone - Call CTA
- 💬 Chat - WhatsApp CTA
- 🕉️ Om - Spiritual, Vedic astrology

---

## Component Patterns

### Header (Navigation)

**Structure**:
- Sticky at top: `sticky top-0 z-50`
- Background: `bg-card/90 backdrop-blur-sm`
- Border: `border-b border-accent/10`
- Height: `h-16` (64px)

**Components**:
1. Logo + Brand Name (left)
2. Navigation Menu (center) - Desktop only
3. CTA Buttons (right): Call + WhatsApp

### Call-to-Action Buttons

**Primary CTA** (WhatsApp):
```tsx
className="px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
```

**Secondary CTA** (Call):
```tsx
className="px-8 py-4 border-2 border-accent text-accent text-lg font-semibold rounded-full hover:bg-accent hover:text-white transition-all"
```

### Service Cards

**Standard Card**:
```tsx
<div className="bg-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all group">
  <div className="text-4xl mb-4">{icon}</div>
  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
    {title}
  </h3>
  <p className="text-muted mb-4">{description}</p>
  <Link className="text-accent font-medium hover:underline">
    Learn More →
  </Link>
</div>
```

### Hero Sections

**Pattern**:
```tsx
<section className="py-16 sm:py-24 bg-gradient-to-br from-accent-soft via-white to-accent-soft">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
        {emoji} {title}
      </h1>
      <p className="text-xl text-muted mb-8">{subtitle}</p>
      {/* CTAs */}
    </div>
  </div>
</section>
```

### Footer

**Structure**:
- Background: `bg-foreground text-white`
- 4 columns on desktop, stacked on mobile
- Social media icons
- Newsletter subscription form
- Quick links to all services

### Floating WhatsApp Button

**Always include**:
```tsx
<a
  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
  className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform z-50"
>
  💬
</a>
```

---

## Content Guidelines

### Tone of Voice

- **Compassionate**: Understand user's problems, offer solutions
- **Authoritative**: 20+ years experience, expert guidance
- **Accessible**: Modern approach to ancient science
- **Respectful**: Honor tradition while being contemporary

### Writing Style

**Headlines**:
- Use power words: Expert, Personalized, Accurate, Comprehensive
- Include benefits: "Get Clarity", "Find Solutions", "Discover"
- Highlight credentials: "20+ Years Experience", "500+ Happy Clients"

**Body Copy**:
- Keep paragraphs short (2-3 sentences)
- Use bullet points for features/benefits
- Include social proof (testimonials, ratings, media mentions)

**CTAs**:
- Action-oriented: "Book Now", "Get Started", "Talk to Expert"
- Include WhatsApp number: Reduces friction
- Pre-filled messages: Make it easy to start conversation

### SEO Best Practices

**Every Page Must Have**:
1. Unique `<title>` tag (50-60 characters)
2. Meta description (150-160 characters)
3. Canonical URL
4. Open Graph tags
5. Schema.org markup (relevant type)
6. H1 tag (only one per page)
7. Alt text for all images
8. Internal links to related pages

**Keywords to Target**:
- astrology consultation
- kundali reading
- match making
- love problem solution
- gemstone recommendation
- daily horoscope
- Vedic astrology
- online astrologer

---

## Page Structure Template

Every service page should follow this structure:

1. **Header** - Shared navigation component
2. **Hero Section** - Gradient background, title, subtitle, dual CTAs
3. **Services/Features Grid** - 3-4 columns of offerings
4. **What's Included** - Detailed breakdown
5. **Why Choose Us** - Credentials, experience, USPs
6. **Testimonials/Success Stories** - Social proof
7. **Related Services** - Internal linking (3 cards)
8. **CTA Section** - Gradient background, strong call-to-action
9. **Footer** - Shared component
10. **Floating WhatsApp** - Always present

---

## Media & Images

### Image Guidelines

- **Format**: WebP primary, JPEG fallback
- **Compression**: Optimize for web (<200KB)
- **Dimensions**:
  - Logo: 200×200px minimum
  - OG Image: 1200×630px
  - Service Icons: Use emojis or SVG (scalable)

### Logo Files Needed

- `/public/logo.jpg` - Main logo
- `/public/favicon.ico` - Browser icon
- `/public/apple-touch-icon.png` - iOS icon
- `/public/og-image.png` - Social media preview

---

## Accessibility

- Maintain color contrast ratio of at least 4.5:1
- All interactive elements keyboard accessible
- Proper semantic HTML (header, nav, main, section, footer)
- ARIA labels for icon buttons
- Focus states visible on all interactive elements

---

## Mobile Responsiveness

**Breakpoints** (Tailwind):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Mobile-First Approach**:
- Start with mobile layout
- Progressively enhance for larger screens
- Test on: iPhone SE (375px), iPad (768px), Desktop (1280px)

---

## Do's and Don'ts

### ✅ Do

- Use consistent spacing (multiples of 4px)
- Include social proof on every page
- Make WhatsApp CTA prominent
- Link related services for better navigation
- Use schema markup for SEO
- Include trust signals (experience, testimonials, media)
- Optimize for mobile
- Use clear, benefit-driven copy

### ❌ Don't

- Use more than 2-3 colors per section
- Make navigation confusing
- Hide contact information
- Use generic stock photos
- Forget alt text on images
- Make buttons too small (minimum 44×44px)
- Use too many fonts
- Ignore loading speed

---

## File Naming Conventions

**Components**: kebab-case.tsx
- `header.tsx`
- `service-card.tsx`
- `cta-button.tsx`

**Pages**: kebab-case/page.tsx
- `/consultation/page.tsx`
- `/services/match-making/page.tsx`

**Images**: descriptive-kebab-case.jpg
- `logo.jpg`
- `og-image-consultation.png`

---

## Version Control

- Commit messages: Descriptive, action-oriented
- Branch naming: feature/service-pages, fix/navigation-menu
- Test before push: Build succeeds, no TypeScript errors

---

*Last Updated: November 2025*
*Version: 1.0*
