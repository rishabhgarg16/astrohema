# SEO Setup Guide for Astro Hema

This document explains all the SEO improvements implemented for the Astro Hema website and provides instructions for Google Search Console setup.

## ✅ What Has Been Implemented

### 1. **Structured Data (JSON-LD Schema.org)**

We've added rich structured data to help Google understand your website better and potentially display rich results in search.

#### Homepage (`/web/src/app/page.tsx`):
- **Organization Schema**: Business information, contact details, logo
- **WebSite Schema**: Site-level information with search action
- **LocalBusiness Schema**: Physical business details, opening hours, ratings
- **ProfessionalService Schema**: Service types and areas served

#### Courses Page (`/web/src/app/courses/page.tsx`):
- **Course Schema**: All courses with provider information
- **BreadcrumbList Schema**: Navigation hierarchy

**Benefits:**
- Enhanced search results with star ratings, business hours
- Knowledge panel eligibility
- Rich snippets for courses
- Better site navigation in search results

### 2. **XML Sitemap** (`/web/src/app/sitemap.ts`)

Automatically generated sitemap that lists all important pages:
- Homepage (priority: 1.0)
- Courses page (priority: 0.8)

**Access URL:** `https://astrohema.com/sitemap.xml`

**Benefits:**
- Helps Google discover and index all pages
- Indicates page importance and update frequency
- Faster indexing of new content

### 3. **Robots.txt** (`/web/src/app/robots.ts`)

Controls how search engines crawl your website:
- Allows all search engines to crawl all pages
- Points to sitemap location
- Blocks potential admin/API paths

**Access URL:** `https://astrohema.com/robots.txt`

**Benefits:**
- Guides search engine crawlers efficiently
- Prevents indexing of unnecessary pages

### 4. **Enhanced Meta Tags**

#### Global Metadata (`/web/src/app/layout.tsx`):
- **Title Template**: Dynamic titles for all pages
- **Meta Description**: Compelling description for search results
- **Keywords**: 13 targeted keywords related to astrology services
- **Open Graph**: Social media sharing optimization (Facebook, LinkedIn)
- **Twitter Cards**: Twitter sharing optimization
- **Viewport & Format Detection**: Mobile optimization
- **Canonical URLs**: Prevents duplicate content issues

#### Page-Specific Metadata:
- **Courses Page**: Custom title, description, and keywords
- **Open Graph images**: Separate images for homepage and courses page

**Benefits:**
- Better click-through rates from search results
- Attractive social media previews when shared
- Targeted keyword optimization

### 5. **SEO-Friendly URL Structure**

- Clean URLs: `/`, `/courses`
- No unnecessary parameters
- Descriptive page paths

### 6. **Internal Linking Optimization**

- Clear navigation menu
- Footer links to all major sections
- Service cards link to WhatsApp (CTA)
- Breadcrumb structure on courses page

---

## 🚀 Next Steps: Google Search Console Setup

To maximize your chances of getting Google Sitelinks, follow these steps:

### Step 1: Verify Website Ownership

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Property**
   - Click "Add Property"
   - Enter: `https://astrohema.com`
   - Choose verification method (recommended: HTML file or DNS)

3. **HTML File Verification** (Easiest for Next.js):
   - Download the verification file from Google
   - Place it in `/web/public/` folder
   - It will be accessible at `https://astrohema.com/google[xxxx].html`
   - Click "Verify" in Search Console

   **OR**

4. **DNS Verification** (If you manage DNS):
   - Add the TXT record provided by Google to your domain's DNS settings
   - Wait for DNS propagation (can take 24-48 hours)
   - Click "Verify"

5. **Update verification code in code**:
   - Open `/web/src/app/layout.tsx`
   - Find line: `google: 'your-google-verification-code'`
   - Replace with your actual verification code from Google Search Console

### Step 2: Submit Sitemap

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Google will start crawling your site using the sitemap

### Step 3: Request Indexing

1. In Search Console, go to **URL Inspection**
2. Enter your homepage URL: `https://astrohema.com`
3. Click **Request Indexing**
4. Repeat for courses page: `https://astrohema.com/courses`

### Step 4: Monitor Search Performance

Check these sections in Google Search Console:
- **Coverage**: Ensure pages are indexed
- **Performance**: Track impressions, clicks, CTR
- **Sitelinks**: Will appear automatically once site gains authority

---

## 📊 Requirements for Google Sitelinks

Google shows sitelinks automatically based on these factors:

### 1. **Site Authority & Age**
- Domain needs to build authority over time
- Consistent traffic and user engagement
- Quality backlinks from reputable sites

### 2. **Brand Searches**
- Users need to search for "Astro Hema" specifically
- More branded searches = higher chance of sitelinks

### 3. **Clear Site Structure** ✅ (Already implemented)
- Logical navigation hierarchy
- Well-organized internal linking
- Breadcrumb navigation

### 4. **Quality Content** ✅ (Already implemented)
- Unique, relevant content on each page
- Clear page titles and descriptions
- Proper heading hierarchy (H1, H2, H3)

### 5. **User Engagement**
- Low bounce rate
- Time spent on site
- Return visitors

### 6. **Technical SEO** ✅ (Already implemented)
- Fast page load times
- Mobile-friendly design
- HTTPS enabled
- Structured data markup

---

## 🎯 Timeline Expectations

**Realistic expectations for sitelinks:**

- **Week 1-2**: Site gets indexed by Google
- **Month 1-3**: Site appears in search results for branded queries
- **Month 3-6**: Search rankings improve, traffic increases
- **Month 6-12**: Sitelinks may start appearing for branded searches (if traffic is good)

**Note:** Sitelinks are NOT guaranteed. Google decides algorithmically based on:
- Search volume for your brand name
- User engagement metrics
- Site quality and authority

---

## 📝 Additional SEO Recommendations

### 1. **Create Logo Image**
Create a logo image and place it at `/web/public/logo.png`
- Recommended size: 512x512 px (square)
- Format: PNG with transparency
- This is referenced in the Organization schema

### 2. **Create Open Graph Images**
Create social sharing images:
- `/web/public/og-image.png` (1200 x 630 px) - Homepage
- `/web/public/og-image-courses.png` (1200 x 630 px) - Courses page

These images appear when your website is shared on:
- Facebook
- LinkedIn
- Twitter
- WhatsApp
- Other social platforms

### 3. **Google My Business** (Optional but Recommended)
If you have a physical location or serve a local area:
1. Create a Google Business Profile
2. Link it to your website
3. This helps with local SEO and Google Maps

### 4. **Regular Content Updates**
- Update blog/news section regularly (if added)
- Keep course information current
- Add new testimonials over time

### 5. **Mobile Optimization** ✅ (Already implemented)
Your site is already mobile-responsive and mobile-friendly

### 6. **Page Speed Optimization**
Current setup is already optimized with:
- Next.js static generation
- Optimized images
- Minimal JavaScript
- CSS variables for performance

To further improve:
```bash
cd web
npm run build
# Check the build output for page sizes
```

### 7. **Analytics Setup** (Recommended)
Add Google Analytics 4 to track:
- Visitor behavior
- Popular pages
- Conversion tracking
- Traffic sources

**To add GA4:**
1. Create a Google Analytics 4 property
2. Get your Measurement ID (e.g., G-XXXXXXXXXX)
3. Add it to `/web/src/app/layout.tsx`:

```tsx
// In the <head> section
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🔍 Testing Your SEO Implementation

### 1. **Rich Results Test**
Test your structured data:
- Go to: https://search.google.com/test/rich-results
- Enter: `https://astrohema.com`
- Check for errors or warnings

### 2. **Mobile-Friendly Test**
- Go to: https://search.google.com/test/mobile-friendly
- Enter: `https://astrohema.com`
- Ensure it passes

### 3. **PageSpeed Insights**
- Go to: https://pagespeed.web.dev/
- Enter: `https://astrohema.com`
- Aim for scores above 90

### 4. **Lighthouse (in Chrome DevTools)**
```
1. Open your website in Chrome
2. Press F12 (DevTools)
3. Go to "Lighthouse" tab
4. Click "Generate Report"
5. Check SEO score (aim for 95+)
```

---

## 📋 SEO Checklist

After deployment, verify:

- [ ] Website is live at https://astrohema.com
- [ ] Sitemap is accessible at https://astrohema.com/sitemap.xml
- [ ] Robots.txt is accessible at https://astrohema.com/robots.txt
- [ ] Logo image exists at /web/public/logo.png
- [ ] OG images exist at /web/public/og-image.png and /web/public/og-image-courses.png
- [ ] Google Search Console is set up and verified
- [ ] Sitemap is submitted to Search Console
- [ ] Homepage and courses page are indexed
- [ ] Rich results test passes
- [ ] Mobile-friendly test passes
- [ ] All meta tags display correctly (view page source)
- [ ] Social sharing works correctly (test on WhatsApp/Facebook)
- [ ] Contact phone and email are clickable
- [ ] WhatsApp links work correctly

---

## 🎓 Understanding the Code

### Where to Find SEO Elements:

1. **Structured Data**: 
   - Homepage: `/web/src/app/page.tsx` (lines 5-87)
   - Courses: `/web/src/app/courses/page.tsx` (lines 32-86)

2. **Meta Tags**:
   - Global: `/web/src/app/layout.tsx` (lines 16-66)
   - Courses: `/web/src/app/courses/page.tsx` (lines 6-30)

3. **Sitemap**: `/web/src/app/sitemap.ts`

4. **Robots**: `/web/src/app/robots.ts`

### How to Update:

**Change website URL:**
- Update all instances of `https://astrohema.com` in:
  - `/web/src/app/layout.tsx`
  - `/web/src/app/page.tsx`
  - `/web/src/app/courses/page.tsx`
  - `/web/src/app/sitemap.ts`
  - `/web/src/app/robots.ts`

**Add new pages:**
- Add to sitemap in `/web/src/app/sitemap.ts`

**Change business hours:**
- Update in `/web/src/app/page.tsx` (LocalBusiness schema)

---

## 🆘 Troubleshooting

### Sitelinks not showing?
- Be patient (can take 6-12 months)
- Ensure you have branded search traffic
- Check site structure is clear
- Verify all pages are indexed

### Rich results not appearing?
- Use Rich Results Test tool
- Fix any errors shown
- Allow 2-4 weeks after fixes

### Pages not indexed?
- Check robots.txt is not blocking
- Submit URLs via Search Console
- Check for crawl errors in Search Console

---

## 📞 Support

For technical questions about this implementation, refer to:
- Next.js Metadata Documentation: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Google Search Central: https://developers.google.com/search/docs
- Schema.org Documentation: https://schema.org/

---

**Last Updated:** November 2025
**Website:** https://astrohema.com
**Implementation:** All SEO features are production-ready
