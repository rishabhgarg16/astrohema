import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Book Astrology Consultation - Kundali Reading & Guidance",
  description: "Book personalized astrology consultation with expert Vedic astrologer. Get accurate predictions, career guidance, health solutions, and life advice. Online & phone consultation available.",
  keywords: [
    'astrology consultation',
    'kundali reading',
    'vedic astrology',
    'horoscope consultation',
    'astrologer consultation',
    'birth chart reading',
    'astrology guidance',
    'life predictions',
    'online astrology',
    'phone consultation',
  ],
  alternates: {
    canonical: 'https://astrohema.com/consultation',
  },
  openGraph: {
    title: "Book Astrology Consultation | Expert Vedic Astrologer",
    description: "Get personalized astrology consultation and accurate life guidance from 20+ years experienced astrologer.",
    url: 'https://astrohema.com/consultation',
    type: 'website',
  },
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-accent-soft via-white to-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                🔮 Book Astrology Consultation
              </h1>
              <p className="text-xl text-muted mb-8">
                Get Personalized Guidance from Expert Vedic Astrologer
              </p>
              <p className="text-lg text-muted mb-8">
                20+ years of experience | 500+ happy clients | Featured in NEWS18, NDTV, ABP Live
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I want to book astrology consultation`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
                >
                  <span>💬</span>
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent text-lg font-semibold rounded-full hover:bg-accent hover:text-white transition-all"
                >
                  <span>📞</span>
                  <span>Call: {siteConfig.contact.phone}</span>
                </a>
              </div>
              <p className="mt-6 text-sm text-muted">
                ⏰ {siteConfig.contact.availability.weekdays} | Same-day appointments available
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Consultation Services</span>
              </h2>
              <p className="text-lg text-muted">Comprehensive astrological guidance for all life aspects</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.services.map((service, idx) => {
                // Map service titles to dedicated pages
                const getServiceLink = (title: string) => {
                  if (title === "Match Making") return "/services/match-making";
                  if (title === "Love & Relationship") return "/services/love-consultation";
                  if (title === "Remedies & Solutions") return "/services/gemstones";
                  return "/consultation";
                };

                return (
                  <Link
                    key={idx}
                    href={getServiceLink(service.title)}
                    className="bg-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all group"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted mb-4">{service.description}</p>
                    <span className="text-accent font-medium hover:underline inline-flex items-center gap-2">
                      <span>Learn More</span>
                      <span>→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Choose Your <span className="text-accent">Consultation Type</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📱",
                  title: "Phone Consultation",
                  desc: "Talk directly over phone call",
                  features: [
                    "30-45 minutes session",
                    "Immediate answers",
                    "Record for reference",
                    "Convenient & comfortable"
                  ],
                  cta: "Book Phone Call"
                },
                {
                  icon: "💻",
                  title: "Video Consultation",
                  desc: "Face-to-face via Zoom/Google Meet",
                  features: [
                    "45-60 minutes session",
                    "Personal interaction",
                    "Share charts visually",
                    "More detailed discussion"
                  ],
                  cta: "Book Video Call",
                  popular: true
                },
                {
                  icon: "📍",
                  title: "In-Person Meeting",
                  desc: "Visit our office in Delhi",
                  features: [
                    "1 hour session",
                    "Complete privacy",
                    "Detailed analysis",
                    "Perfect for complex cases"
                  ],
                  cta: "Book Office Visit"
                }
              ].map((type, idx) => (
                <div
                  key={idx}
                  className={`bg-card rounded-2xl p-8 border-2 ${
                    type.popular ? 'border-accent shadow-lg' : 'border-accent/10'
                  } relative`}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{type.title}</h3>
                  <p className="text-muted mb-6">{type.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-muted">
                        <span className="text-accent">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I want to book ${type.title}`}
                    className="block w-full text-center px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all"
                  >
                    {type.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What to <span className="text-accent">Expect in Consultation</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📊", title: "Complete Kundali Analysis", desc: "Detailed birth chart examination with all planetary positions" },
                { icon: "🎯", title: "Life Predictions", desc: "Career, marriage, health, wealth predictions for different life phases" },
                { icon: "⚠️", title: "Problem Identification", desc: "Identify doshas, challenges, and obstacles in your chart" },
                { icon: "💡", title: "Personalized Remedies", desc: "Practical solutions, mantras, gemstones, and rituals specific to you" },
                { icon: "📅", title: "Timing Guidance", desc: "Best periods for important decisions and activities" },
                { icon: "❓", title: "Q&A Session", desc: "Ask unlimited questions about any life aspect" },
                { icon: "📄", title: "Report (Optional)", desc: "Written report of consultation available on request" },
                { icon: "🔄", title: "Follow-up Support", desc: "Free follow-up guidance via WhatsApp/call" },
              ].map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 border border-accent/10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  How to <span className="text-accent">Prepare for Consultation</span>
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Gather Birth Details",
                      desc: "Your exact date of birth, time of birth (from birth certificate), and place of birth"
                    },
                    {
                      title: "Prepare Your Questions",
                      desc: "Write down specific questions you want answers for (career, marriage, health, etc.)"
                    },
                    {
                      title: "Choose Quiet Place",
                      desc: "For phone/video calls, be in a quiet, private place where you can talk freely"
                    },
                    {
                      title: "Have Pen & Paper",
                      desc: "To note down important points, remedies, and guidance"
                    },
                    {
                      title: "Be Open & Honest",
                      desc: "Share your concerns openly for accurate analysis and better solutions"
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                        <p className="text-sm text-muted">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Astro Hema?</h3>
                <div className="space-y-4">
                  {siteConfig.whyChoose.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-white rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-accent">{siteConfig.stats[3].value}</span>
                    <span className="text-muted">{siteConfig.stats[3].label}</span>
                  </div>
                  <p className="text-sm text-muted">Based on 500+ consultations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Client <span className="text-accent">Testimonials</span>
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

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-accent to-accent/80 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Clarity on Your Life?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Book your personalized astrology consultation today. Get accurate predictions and practical solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I want to book consultation. My DOB: [Date] [Time] [Place]`}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-accent text-lg font-semibold rounded-full hover:bg-accent-soft transition-all hover:scale-105"
              >
                <span className="text-2xl">💬</span>
                <span>Book on WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                <span className="text-2xl">📞</span>
                <span>Call: {siteConfig.contact.phone}</span>
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm opacity-90">📞 Alternative: {siteConfig.contact.phone_alternate}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm opacity-90">⏰ {siteConfig.contact.availability.weekdays}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I want to book astrology consultation`}
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
