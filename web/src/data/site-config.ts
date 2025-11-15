// Site configuration and content
// Update this file to change phone numbers, services, testimonials, etc.

export const siteConfig = {
  name: "Astro Hema",
  tagline: "Your Guide to Vastu, Kundali & Life Clarity",
  description: "Authentic astrology consultations for modern Indian families. Get personalized guidance on career, relationships, home harmony, and life decisions.",
  
  contact: {
    phone: "+918130140412",
    email: "hello@astrohema.com",
    whatsapp: "918130140412", // Without + sign for wa.me links
    availability: {
      weekdays: "Mon - Sat: 9:00 AM - 7:00 PM",
      weekend: "Sunday: By appointment only"
    }
  },

  stats: [
    { value: "20+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Kundali Readings" },
    { value: "95%", label: "Satisfaction Rate" }
  ],

  services: [
    {
      icon: "📊",
      title: "Kundali Analysis",
      description: "Complete birth chart reading with detailed predictions and remedies"
    },
    {
      icon: "🏠",
      title: "Vastu Consultation",
      description: "Home and office Vastu guidance for prosperity and peace"
    },
    {
      icon: "💑",
      title: "Match Making",
      description: "Compatibility analysis for marriage and relationships"
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description: "Find your ideal career path based on planetary positions"
    },
    {
      icon: "👶",
      title: "Baby Name Suggestion",
      description: "Auspicious name recommendations based on numerology"
    },
    {
      icon: "🔮",
      title: "Remedies & Solutions",
      description: "Practical remedies for doshas and life challenges"
    }
  ],

  whyChoose: [
    {
      icon: "🎓",
      title: "Certified Expert",
      description: "Trained in traditional Vedic astrology and Vastu Shastra"
    },
    {
      icon: "💝",
      title: "Personalized Approach",
      description: "Every consultation is tailored to your unique birth chart"
    },
    {
      icon: "🔒",
      title: "100% Confidential",
      description: "Your personal information is completely secure"
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "Get answers within 24 hours on call or WhatsApp"
    }
  ],

  testimonials: [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Astro Hema's Kundali reading was incredibly accurate. Her guidance helped me make the right career decision. Highly recommended!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "The Vastu consultation for our new home was very detailed. We've noticed positive changes in our family life since following her advice.",
      rating: 5
    },
    {
      name: "Anjali Verma",
      location: "Bangalore",
      text: "Her match making analysis was spot on. She explained everything clearly and gave practical remedies. Very satisfied!",
      rating: 5
    }
  ]
};

