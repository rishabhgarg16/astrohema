# Wikidata Setup Guide for Astro Hema

## 🎯 **Goal: Create Wikidata Item for Hemlata Garg (Astro Hema)**

This helps Google recognize Astro Hema as a verified entity and is critical for the Knowledge Panel.

---

## 📝 **STEP-BY-STEP INSTRUCTIONS**

### **Step 1: Create New Item**

1. Go to: https://www.wikidata.org/wiki/Special:NewItem
2. You'll see a form with these fields:

---

### **Step 2: Fill Out the Form**

#### **Label (English):**
```
Hemlata Garg
```

#### **Description (English):**
```
Indian Vedic astrologer, Vastu expert, and YouTube content creator
```

#### **Label (Hindi):**
```
हेमलता गर्ग
```

#### **Description (Hindi):**
```
भारतीय वैदिक ज्योतिषी, वास्तु विशेषज्ञ और यूट्यूब निर्माता
```

#### **Aliases (Also known as):**
```
Astro Hema
Astrohema
Hemlata Astrologer
```

Click **"Create"**

---

### **Step 3: Add Statements (Properties)**

After creating the item, you'll be on the item page. Now add these properties:

---

#### **1. Instance of (P31)**
- Click "+ Add statement"
- Property: `instance of` (P31)
- Value: Search for `human` (Q5)
- Click "publish"

---

#### **2. Sex or Gender (P21)**
- Property: `sex or gender` (P21)
- Value: Search for `female` (Q6581072)
- Click "publish"

---

#### **3. Country of Citizenship (P27)**
- Property: `country of citizenship` (P27)
- Value: Search for `India` (Q668)
- Click "publish"

---

#### **4. Occupation (P106)**
- Property: `occupation` (P106)
- Value: Search for `astrologer` (Q185351)
- Click "publish"

Add another occupation:
- Click "+ Add value" on the same property
- Value: Search for `YouTuber` (Q17125263)
- Click "publish"

Add another occupation:
- Click "+ Add value"
- Value: Search for `Vastu Shastra consultant` (if exists, or skip)

---

#### **5. Languages Spoken/Written (P1412)**
- Property: `languages spoken, written or signed` (P1412)
- Value: Search for `Hindi` (Q1568)
- Click "publish"

Add another language:
- Click "+ Add value"
- Value: Search for `English` (Q1860)
- Click "publish"

---

#### **6. Field of Work (P101)**
- Property: `field of work` (P101)
- Value: Search for `astrology` (Q34362)
- Click "publish"

Add another field:
- Click "+ Add value"
- Value: Search for `Vastu Shastra` (Q1353106)
- Click "publish"

---

#### **7. Official Website (P856)**
- Property: `official website` (P856)
- Value: `https://astrohema.com`
- Click "publish"

---

#### **8. YouTube Channel ID (P2397)**
- Property: `YouTube channel ID` (P2397)
- Value: `UCYmK7KqBE9zvQxVZ-oQqg7w` (get this from your YouTube channel URL)

**How to find YouTube Channel ID:**
1. Go to YouTube Studio
2. Click Settings → Channel
3. Copy the Channel ID
4. Paste here

Click "publish"

---

#### **9. Instagram Username (P2003)**
- Property: `Instagram username` (P2003)
- Value: `astrohema708`
- Click "publish"

---

#### **10. Facebook Profile ID (P2013)**
- Property: `Facebook profile ID` (P2013)
- Value: `astrohema` (just the username part from facebook.com/astrohema)
- Click "publish"

---

#### **11. Telegram Username (P3789)**
- Property: `Telegram username` (P3789)
- Value: `astrohema`
- Click "publish"

---

#### **12. Based In (P937)** (Optional but recommended)
- Property: `work location` (P937)
- Value: Search for `Delhi` (Q1353)
- Click "publish"

---

#### **13. Notable Work (P800)** (Optional - helps with credibility)
- Property: `notable work` (P800)
- Value: You can create this as free text: `Astro Hema YouTube Channel with 3.6M+ views`
- Click "publish"

---

### **Step 4: Add Identifiers (If Available)**

If you have these, add them:

#### **IMDb ID (P345)** - If featured in any media
#### **Twitter Username (P2002)** - If you have Twitter/X account

---

### **Step 5: Add References/Sources**

For each statement, you can add references to make it more credible:

1. Click "edit" next to any statement
2. Click "+ add reference"
3. Add:
   - **Reference URL (P854):** `https://astrohema.com`
   - **Retrieved (P813):** Today's date
   - **Language of work (P407):** English

This shows you're providing sources for the information.

---

## 📋 **COMPLETE WIKIDATA STRUCTURE**

Here's what your final Wikidata item should look like:

```
Hemlata Garg (Astro Hema)
Indian Vedic astrologer, Vastu expert, and YouTube content creator

STATEMENTS:
├─ Instance of: human
├─ Sex or gender: female
├─ Country of citizenship: India
├─ Occupation: astrologer, YouTuber
├─ Languages: Hindi, English
├─ Field of work: astrology, Vastu Shastra
├─ Official website: https://astrohema.com
├─ YouTube channel ID: UCYmK7KqBE9zvQxVZ-oQqg7w
├─ Instagram username: astrohema708
├─ Facebook profile: astrohema
├─ Telegram username: astrohema
├─ Work location: Delhi
└─ Notable work: Astro Hema YouTube Channel (3.6M+ views)

IDENTIFIERS:
└─ Wikidata item: Q[your number will be assigned]

ALSO KNOWN AS:
Astro Hema, Astrohema, Hemlata Astrologer
```

---

## 🎯 **IMPORTANT TIPS**

### **1. Use Correct Property IDs**
When adding statements, always search by property name (like "occupation"), Wikidata will show you the P-number.

### **2. Add Multiple Values Where Applicable**
- Multiple languages (Hindi, English)
- Multiple occupations (astrologer, YouTuber)
- Multiple fields (astrology, Vastu)

### **3. Link All Social Media**
Every link you add helps Google verify this is the same person across platforms.

### **4. Add Qualifiers** (Optional but good)
For example, for YouTube:
- Add qualifier: "subscriber count" = 19,700
- Add qualifier: "point in time" = November 2025

---

## ✅ **VERIFICATION CHECKLIST**

After creating, verify you have:
- [ ] Label in English AND Hindi
- [ ] Description in both languages
- [ ] At least 3 aliases
- [ ] Instance of = human
- [ ] Country = India
- [ ] Occupation = astrologer (minimum)
- [ ] Official website link
- [ ] YouTube channel ID
- [ ] Instagram username
- [ ] Facebook profile
- [ ] Languages (Hindi, English)
- [ ] Field of work (astrology)

---

## 🔍 **HOW TO FIND YOUR YOUTUBE CHANNEL ID**

**Method 1: YouTube Studio**
1. Go to https://studio.youtube.com
2. Click Settings (bottom left)
3. Click "Channel"
4. Click "Advanced settings"
5. Copy "Channel ID"

**Method 2: From Channel URL**
1. Go to your channel
2. Look at URL: `youtube.com/channel/UCYmK7KqBE9zvQxVZ-oQqg7w`
3. Everything after `/channel/` is your ID

**Method 3: If you have custom URL**
1. Go to: https://commentpicker.com/youtube-channel-id.php
2. Paste your YouTube URL
3. Get the ID

---

## 📸 **VISUAL GUIDE**

### **What the Form Looks Like:**

```
┌─────────────────────────────────────────┐
│ Create a new Item                       │
├─────────────────────────────────────────┤
│ Label (en): Hemlata Garg               │
│ Description (en): Indian Vedic...      │
│                                         │
│ Label (hi): हेमलता गर्ग                │
│ Description (hi): भारतीय वैदिक...      │
│                                         │
│ Aliases: Astro Hema, Astrohema         │
│                                         │
│         [Create]  [Cancel]              │
└─────────────────────────────────────────┘
```

### **After Creation, Add Statements:**

```
┌─────────────────────────────────────────┐
│ Hemlata Garg                           │
│ Q123456789 (your Wikidata ID)          │
├─────────────────────────────────────────┤
│ Statements                             │
│                                         │
│ instance of          human             │
│ sex or gender        female            │
│ occupation           astrologer        │
│                      YouTuber           │
│ official website     astrohema.com     │
│ YouTube channel ID   UC...             │
│                                         │
│ [+ Add statement]                      │
└─────────────────────────────────────────┘
```

---

## 🚀 **AFTER WIKIDATA IS CREATED**

### **Step 1: Copy Your Wikidata ID**
After creating, you'll get a Wikidata ID like: `Q123456789`

Example: https://www.wikidata.org/wiki/Q123456789

### **Step 2: Add to Your Website**
Update your website's schema markup to include:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hemlata Garg",
  "alternateName": "Astro Hema",
  "sameAs": [
    "https://www.wikidata.org/wiki/Q123456789",  // Your Wikidata ID
    "https://astrohema.com",
    "https://www.youtube.com/channel/UCYmK7KqBE9zvQxVZ-oQqg7w",
    "https://www.instagram.com/astrohema708",
    "https://www.facebook.com/astrohema",
    "https://t.me/astrohema"
  ]
}
```

### **Step 3: Wait for Google to Index**
- Google crawls Wikidata regularly
- Usually takes 2-4 weeks for Google to recognize
- Combined with Google Business Profile = Knowledge Panel in 60-90 days

---

## 💡 **PRO TIPS**

**1. Be Consistent**
Use EXACT same information everywhere:
- Wikidata
- Google Business Profile
- Website schema
- Social media bios

**2. Add Sources**
For each statement, add references pointing to your website or social profiles.

**3. Keep It Updated**
As you gain more followers/subscribers, update the qualifiers on Wikidata.

**4. Link to News Articles**
If you have links to NEWS18, NDTV, ABP Live features, add them as references.

---

## ❓ **COMMON QUESTIONS**

**Q: Can I create Wikidata for my business name "Astro Hema"?**
A: Yes, but create it as a "brand" (Q431289) rather than a person. However, creating one for "Hemlata Garg" (person) is better for Knowledge Panel.

**Q: What if I make a mistake?**
A: Don't worry! Wikidata is a wiki - you can edit anytime. Other editors might also help improve it.

**Q: How long until it helps with Google?**
A: Google crawls Wikidata weekly. Combined with Google Business Profile, expect Knowledge Panel in 60-90 days.

**Q: Do I need a Wikipedia page?**
A: No! Wikidata works independently. Wikipedia helps but is NOT required.

---

## 🎯 **NEXT STEPS AFTER WIKIDATA**

1. ✅ Create Google Business Profile (if not done)
2. ✅ Update website schema with Wikidata ID
3. ✅ Get 50+ Google reviews
4. ✅ Post consistently on all social platforms
5. ✅ Wait 60-90 days for Knowledge Panel to appear

---

## 📞 **NEED HELP?**

If you get stuck:
1. Share your Wikidata item URL (https://www.wikidata.org/wiki/Q...)
2. I can review and suggest improvements
3. Wikidata community is helpful - you can ask on their help page

---

**Bottom Line:** Fill out as many properties as you can. The more complete your Wikidata item, the better Google understands who you are! 🚀
