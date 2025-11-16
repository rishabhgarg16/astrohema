import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Gemstone Consultation & Recommendation",
  description: "Get personalized gemstone recommendations based on your Kundali. Expert guidance on wearing gemstones for health, wealth, and prosperity. Book consultation with Astro Hema.",
  keywords: [
    'gemstone recommendation',
    'gemstone astrology',
    'gemstone consultation',
    'lucky gemstone',
    'birthstone astrology',
    'precious stones astrology',
    'gemstone remedies',
    'navratna gemstones',
    'astrological gemstones',
    'gemstone benefits',
  ],
  alternates: {
    canonical: 'https://astrohema.com/services/gemstones',
  },
  openGraph: {
    title: "Gemstone Consultation | Astro Hema",
    description: "Get personalized gemstone recommendations based on your Kundali for health, wealth, and prosperity.",
    url: 'https://astrohema.com/services/gemstones',
    type: 'website',
  },
};

export default function GemstonesPage() {
  const gemstones = [
    {
      name: "Ruby (Manik)",
      planet: "Sun",
      benefits: "Leadership, confidence, vitality, authority",
      color: "🔴"
    },
    {
      name: "Pearl (Moti)",
      planet: "Moon",
      benefits: "Peace of mind, emotional balance, mental clarity",
      color: "⚪"
    },
    {
      name: "Red Coral (Moonga)",
      planet: "Mars",
      benefits: "Courage, energy, passion, protection",
      color: "🔴"
    },
    {
      name: "Emerald (Panna)",
      planet: "Mercury",
      benefits: "Intelligence, communication, business success",
      color: "🟢"
    },
    {
      name: "Yellow Sapphire (Pukhraj)",
      planet: "Jupiter",
      benefits: "Wisdom, prosperity, good fortune, marriage",
      color: "🟡"
    },
    {
      name: "Diamond (Heera)",
      planet: "Venus",
      benefits: "Luxury, love, beauty, artistic talent",
      color: "💎"
    },
    {
      name: "Blue Sapphire (Neelam)",
      planet: "Saturn",
      benefits: "Discipline, focus, career growth, protection",
      color: "🔵"
    },
    {
      name: "Hessonite (Gomed)",
      planet: "Rahu",
      benefits: "Success, mental clarity, removes obstacles",
      color: "🟤"
    },
    {
      name: "Cat's Eye (Lehsunia)",
      planet: "Ketu",
      benefits: "Spiritual growth, intuition, protection from enemies",
      color: "🟡"
    }
  ];

  const faqs = [
    {
      question: "How do I know which gemstone is right for me?",
      answer: "The right gemstone is determined by analyzing your birth chart (Kundali). Each planet in your chart has specific influences, and wearing the appropriate gemstone can strengthen beneficial planets or pacify malefic ones."
    },
    {
      question: "Can I wear multiple gemstones together?",
      answer: "Yes, but only if they are compatible according to your Kundali. Some gemstones complement each other while others may have conflicting energies. A proper consultation ensures the right combination."
    },
    {
      question: "How long does it take to see results from wearing a gemstone?",
      answer: "Results typically start showing within 30-45 days of wearing the gemstone correctly. However, this varies based on the strength of planets in your chart and the quality of the gemstone."
    },
    {
      question: "What is the correct way to wear a gemstone?",
      answer: "Each gemstone should be worn on a specific finger, in a particular metal, and activated on an auspicious day/time. We provide complete guidelines during consultation including mantras and wearing procedures."
    },
    {
      question: "Do gemstones really work?",
      answer: "Gemstones have been used in Vedic astrology for thousands of years. They work by channeling specific planetary energies. When worn correctly based on your Kundali, they can bring positive changes in various life aspects."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-accent-soft via-white to-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                💎 Gemstone Consultation
              </h1>
              <p className="text-xl text-muted mb-8">
                Unlock the Power of Vedic Gemstones Based on Your Kundali
              </p>
              <p className="text-lg text-muted mb-8">
                Get personalized gemstone recommendations from expert Vedic astrologer. Discover which gemstones can enhance your health, wealth, relationships, and overall prosperity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I want gemstone consultation`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
                >
                  <span>💬</span>
                  <span>Book Consultation on WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent text-lg font-semibold rounded-full hover:bg-accent hover:text-white transition-all"
                >
                  <span>📞</span>
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What You Get in <span className="text-accent">Gemstone Consultation</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Detailed Kundali Analysis",
                  description: "Complete birth chart analysis to identify planetary positions and their effects on your life"
                },
                {
                  icon: "💎",
                  title: "Personalized Gemstone Recommendation",
                  description: "Specific gemstones recommended based on your chart, not generic suggestions"
                },
                {
                  icon: "⚖️",
                  title: "Gemstone Quality Guidance",
                  description: "Exact specifications: weight (ratti/carat), quality grade, and authenticity markers"
                },
                {
                  icon: "🖐️",
                  title: "Wearing Instructions",
                  description: "Which finger, which metal, auspicious day/time for wearing the gemstone"
                },
                {
                  icon: "🕉️",
                  title: "Activation Mantras",
                  description: "Sacred mantras to energize your gemstone for maximum benefits"
                },
                {
                  icon: "📅",
                  title: "Muhurat & Remedies",
                  description: "Best time to start wearing and additional remedies if needed"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navratna Gemstones */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Navratna <span className="text-accent">Gemstones</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                The nine sacred gemstones representing the nine planets in Vedic astrology
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gemstones.map((gem, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 border border-accent/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{gem.color}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{gem.name}</h3>
                      <p className="text-sm text-accent">For {gem.planet}</p>
                    </div>
                  </div>
                  <p className="text-muted text-sm">
                    <span className="font-medium">Benefits:</span> {gem.benefits}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-muted mb-6">
                <strong>Important:</strong> Don't wear gemstones without proper consultation. Wrong gemstone can have adverse effects!
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I want to know which gemstone is right for me`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent/90 transition-all"
              >
                Get Your Personalized Recommendation
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Benefits of <span className="text-accent">Wearing Right Gemstones</span>
                </h2>
                <ul className="space-y-4">
                  {[
                    "Strengthen beneficial planets in your Kundali",
                    "Reduce negative effects of malefic planets",
                    "Improve health and vitality",
                    "Enhance career and business success",
                    "Attract wealth and prosperity",
                    "Improve relationships and marriage prospects",
                    "Increase mental peace and emotional stability",
                    "Protection from enemies and negative energies",
                    "Boost confidence and decision-making abilities",
                    "Achieve specific life goals faster"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent text-xl flex-shrink-0">✓</span>
                      <span className="text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Astro Hema?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">20+ Years Experience</h4>
                      <p className="text-sm text-muted">Expert in Vedic gemstone astrology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Detailed Analysis</h4>
                      <p className="text-sm text-muted">Complete Kundali examination, not quick generic advice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💯</span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Authentic Recommendations</h4>
                      <p className="text-sm text-muted">Only recommend gemstones that truly benefit you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Lifetime Support</h4>
                      <p className="text-sm text-muted">Free follow-up guidance on wearing and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Other <span className="text-accent">Services You May Need</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/consultation"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">🔮</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Complete Kundali Reading</h3>
                <p className="text-muted text-sm mb-3">Get detailed birth chart analysis to identify which planets need strengthening</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
              <Link
                href="/services/match-making"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">💑</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Marriage Match Making</h3>
                <p className="text-muted text-sm mb-3">Check compatibility and get gemstone recommendations for both partners</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
              <Link
                href="/services/daily-horoscope"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Daily Horoscope</h3>
                <p className="text-muted text-sm mb-3">Know the best time to wear your gemstone based on daily predictions</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                  <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-4 text-muted">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-accent to-accent/80 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Discover Your Perfect Gemstone?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Book a consultation today and get personalized gemstone recommendations based on your Kundali
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I want gemstone consultation`}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-accent text-lg font-semibold rounded-full hover:bg-accent-soft transition-all hover:scale-105"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp: {siteConfig.contact.phone}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                <span className="text-2xl">📞</span>
                <span>Call Now</span>
              </a>
            </div>
            <p className="mt-6 text-sm opacity-80">
              {siteConfig.contact.availability.weekdays}
            </p>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I want gemstone consultation`}
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
