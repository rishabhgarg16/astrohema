import { siteConfig } from "@/data/site-config";
import { HomeHero } from "@/components/home-hero";
import { Header } from "@/components/header";

export default function Home() {
  const faqData = [
    {
      question: "How can I book a consultation?",
      answer: `You can book a consultation by calling us at ${siteConfig.contact.phone} or messaging us on WhatsApp. We'll schedule a convenient time for your personalized session.`
    },
    {
      question: "What information do I need for a Kundali reading?",
      answer: "For an accurate Kundali reading, we need your exact date of birth, time of birth, and place of birth. The more accurate the information, the more precise the analysis will be."
    },
    {
      question: "How long does a consultation take?",
      answer: "A standard consultation typically takes 30-45 minutes, depending on the complexity of your questions and the depth of analysis required. We ensure you have enough time to discuss all your concerns."
    },
    {
      question: "Do you provide online consultations?",
      answer: "Yes! We offer online consultations via phone or video call for clients who cannot visit in person. The quality and depth of consultation remains the same."
    },
    {
      question: "What is the consultation fee?",
      answer: "Consultation fees vary based on the type of service. Please call us or message on WhatsApp for detailed pricing information."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://astrohema.com/#organization",
        "name": siteConfig.name,
        "url": "https://astrohema.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://astrohema.com/logo.png"
        },
        "description": siteConfig.description,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"]
        },
        "sameAs": [
          `https://wa.me/${siteConfig.contact.whatsapp}`,
          siteConfig.social.linkedin.company,
          siteConfig.social.linkedin.personal,
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.twitter,
          siteConfig.social.youtube,
          siteConfig.social.telegram,
          siteConfig.social.whatsapp_channel
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://astrohema.com/#website",
        "url": "https://astrohema.com",
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": "https://astrohema.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://astrohema.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://astrohema.com/#business",
        "name": siteConfig.name,
        "image": "https://astrohema.com/logo.png",
        "url": "https://astrohema.com",
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.6139",
          "longitude": "77.2090"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        },
        "review": siteConfig.testimonials.map(testimonial => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": testimonial.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": testimonial.rating,
            "bestRating": "5"
          },
          "reviewBody": testimonial.text,
          "publisher": {
            "@type": "Organization",
            "name": siteConfig.name
          }
        }))
      },
      {
        "@type": "ProfessionalService",
        "name": siteConfig.name,
        "description": siteConfig.description,
        "serviceType": ["Astrology Consultation", "Vastu Consultation", "Numerology", "Kundali Reading"],
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "offers": siteConfig.services.map(service => ({
          "@type": "Offer",
          "name": service.title,
          "description": service.description,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://astrohema.com"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://astrohema.com/#founder",
        "name": "Astro Hema", // TODO: Replace with actual founder name
        "jobTitle": "Founder & Chief Astrologer",
        "worksFor": {
          "@id": "https://astrohema.com/#organization"
        },
        "url": "https://astrohema.com",
        "sameAs": [
          siteConfig.social.linkedin.personal,
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.twitter,
          siteConfig.social.youtube,
          siteConfig.social.telegram,
          siteConfig.social.whatsapp_channel
        ],
        "knowsAbout": [
          "Vedic Astrology",
          "Vastu Shastra",
          "Kundali Analysis",
          "Numerology",
          "Lal Kitab",
          "Tarot Reading"
        ],
        "description": "Certified Vedic Astrologer and Vastu consultant with 20+ years of experience",
        "email": siteConfig.contact.email,
        "telephone": siteConfig.contact.phone
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <Header />

      <main>
        <HomeHero />

        {/* Trust Metrics */}
        <section className="py-12 bg-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl sm:text-5xl font-bold">{stat.value}</div>
                  <div className="text-sm sm:text-base opacity-90 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-accent-soft to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Astrology: Your Guide To Life's<br />
                  <span className="text-accent">Journey & Path To Success!</span>
                </h2>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  We believe astrology is pure science, and we aim to create such a social impact on you that science and astrology through its resources of the astrology chart, kundali, etc. As we step into our journey, we strive to build a community where we are a part of your daily routine right from our astrology by date of birth, name, time, palm reading, and face reading, to all other online astrology, numerology, and Vastu services.
                </p>
                <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-accent/20">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{siteConfig.stats[0].value}</div>
                    <div className="text-sm text-muted">With Vastu, Kundali, And Predictions</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-200 via-orange-300 to-amber-400 p-1">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="text-7xl mb-4">🕉️</div>
                      <p className="text-xl font-semibold text-foreground mb-2">Astro Hema</p>
                      <p className="text-sm text-muted">Expert in Vedic Astrology</p>
                      <p className="text-sm text-muted mt-4">Vastu, Kundali & Numerology Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In The Media Section */}
        <section className="py-12 bg-white border-y border-accent/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-muted mb-6">
                As Featured In
              </h3>
            </div>
            <div className="relative">
              <div className="flex animate-scroll">
                {/* First set of logos */}
                <div className="flex items-center gap-12 px-6">
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent whitespace-nowrap">NEWS18</div>
                      <div className="text-xs text-muted">India</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent whitespace-nowrap">NDTV</div>
                      <div className="text-xs text-muted">India</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent whitespace-nowrap">ABP Live</div>
                      <div className="text-xs text-muted">News</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent whitespace-nowrap">Outlook</div>
                      <div className="text-xs text-muted">India</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent whitespace-nowrap">IANS</div>
                      <div className="text-xs text-muted">India</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent whitespace-nowrap">Business Standard</div>
                      <div className="text-xs text-muted">News</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent whitespace-nowrap">ANI</div>
                      <div className="text-xs text-muted">News</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent whitespace-nowrap">Rajbharat</div>
                      <div className="text-xs text-muted">News</div>
                    </div>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 px-6">
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent whitespace-nowrap">NEWS18</div>
                      <div className="text-xs text-muted">India</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent whitespace-nowrap">NDTV</div>
                      <div className="text-xs text-muted">India</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent whitespace-nowrap">ABP Live</div>
                      <div className="text-xs text-muted">News</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent whitespace-nowrap">Outlook</div>
                      <div className="text-xs text-muted">India</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent whitespace-nowrap">IANS</div>
                      <div className="text-xs text-muted">India</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent whitespace-nowrap">Business Standard</div>
                      <div className="text-xs text-muted">News</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent whitespace-nowrap">ANI</div>
                      <div className="text-xs text-muted">News</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-16 min-w-[140px]">
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent whitespace-nowrap">Rajbharat</div>
                      <div className="text-xs text-muted">News</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Services</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Personalized astrological solutions for life's most pressing challenges
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.services.map((service, idx) => {
                // Map service titles to dedicated pages
                const getServiceLink = (title: string) => {
                  if (title === "Kundali Analysis") return "/consultation";
                  if (title === "Match Making") return "/services/match-making";
                  if (title === "Career & Finance") return "/consultation";
                  if (title === "Love & Relationship") return "/services/love-consultation";
                  if (title === "Health Guidance") return "/consultation";
                  if (title === "Remedies & Solutions") return "/services/gemstones";
                  return "/consultation";
                };

                return (
                  <a
                    key={idx}
                    href={getServiceLink(service.title)}
                    className="bg-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all group block"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:underline">
                      <span>Learn More</span>
                      <span>→</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-accent">Astro Hema</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.whyChoose.map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What Our <span className="text-accent">Clients Say</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 border border-accent/10">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-accent text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-accent to-accent/80 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Discover Your Path?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Book a personalized consultation with Astro Hema today and get clarity on your life's important decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-accent text-lg font-semibold rounded-full hover:bg-accent-soft transition-all hover:scale-105"
              >
                <span className="text-2xl">📞</span>
                <span>Call: {siteConfig.contact.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>How can I book a consultation?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  You can book a consultation by calling us at {siteConfig.contact.phone} or messaging us on WhatsApp. We'll schedule a convenient time for your personalized session.
                </div>
              </details>
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>What information do I need for a Kundali reading?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  For an accurate Kundali reading, we need your exact date of birth, time of birth, and place of birth. The more accurate the information, the more precise the analysis will be.
                </div>
              </details>
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>How long does a consultation take?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  A standard consultation typically takes 30-45 minutes, depending on the complexity of your questions and the depth of analysis required. We ensure you have enough time to discuss all your concerns.
                </div>
              </details>
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>Do you provide online consultations?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  Yes! We offer online consultations via phone or video call for clients who cannot visit in person. The quality and depth of consultation remains the same.
                </div>
              </details>
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>What is the consultation fee?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  Consultation fees vary based on the type of service. Please call us or message on WhatsApp for detailed pricing information.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="text-lg text-muted mb-8">
                  Have questions? We're here to help. Reach out via phone, WhatsApp, or email.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-accent hover:underline">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">WhatsApp</div>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-accent hover:underline">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🕐</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Availability</div>
                      <p className="text-muted">{siteConfig.contact.availability.weekdays}</p>
                      <p className="text-muted text-sm">{siteConfig.contact.availability.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-accent/10">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
                <form action="https://formspree.io/f/xanyqveo" method="POST" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Select a service</option>
                      <option>Kundali Analysis</option>
                      <option>Vastu Consultation</option>
                      <option>Match Making</option>
                      <option>Career Guidance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Tell us about your requirements"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Submit
                  </button>
                  <p className="text-sm text-muted text-center">
                    Or call us directly at{" "}
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-accent font-medium hover:underline">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <span className="text-xl font-semibold">Astro Hema</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Authentic Vedic astrology and Vastu consultations for modern families.
              </p>
              <div className="flex gap-3 mb-6">
                <a
                  href={siteConfig.social.linkedin.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.whatsapp_channel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="WhatsApp Channel"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-sm">Subscribe to Our Newsletter</h4>
                <form action="https://formspree.io/f/xanyqveo" method="POST" className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input type="hidden" name="_subject" value="Newsletter Subscription" />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/consultation" className="hover:text-accent transition-colors">Kundali Analysis</a></li>
                <li><a href="/services/match-making" className="hover:text-accent transition-colors">Match Making</a></li>
                <li><a href="/services/love-consultation" className="hover:text-accent transition-colors">Love & Relationships</a></li>
                <li><a href="/services/gemstones" className="hover:text-accent transition-colors">Gemstone Consultation</a></li>
                <li><a href="/services/daily-horoscope" className="hover:text-accent transition-colors">Daily Horoscope</a></li>
                <li><a href="/courses" className="hover:text-accent transition-colors">Astrology Courses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Phone: {siteConfig.contact.phone}</li>
                <li>Email: {siteConfig.contact.email}</li>
                <li>{siteConfig.contact.availability.weekdays}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80">
            <p>© 2025 Astro Hema. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
