import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Marriage Match Making & Kundali Matching Consultation",
  description: "Expert Kundali matching for marriage. Get detailed compatibility analysis, gun milan, mangal dosha check, and marriage predictions from experienced Vedic astrologer.",
  keywords: [
    'kundali matching',
    'marriage match making',
    'gun milan',
    'compatibility analysis',
    'horoscope matching',
    'marriage astrology',
    'mangal dosha',
    'kundali milan',
    'love compatibility',
    'arranged marriage astrology',
  ],
  alternates: {
    canonical: 'https://astrohema.com/services/match-making',
  },
  openGraph: {
    title: "Marriage Match Making | Kundali Matching | Astro Hema",
    description: "Get accurate Kundali matching and marriage compatibility analysis from expert astrologer.",
    url: 'https://astrohema.com/services/match-making',
    type: 'website',
  },
};

export default function MatchMakingPage() {
  const aspects = [
    { name: "Gun Milan", score: "36 Points", desc: "Ashtakoot compatibility analysis" },
    { name: "Mangal Dosha", check: "Presence & Remedies", desc: "Mars affliction check" },
    { name: "Nadi Dosha", check: "Compatibility", desc: "Health & progeny prediction" },
    { name: "Bhakoot Dosha", check: "Family Harmony", desc: "Wealth & prosperity compatibility" },
    { name: "Gana Milan", check: "Temperament Match", desc: "Personality compatibility" },
    { name: "Vashya", check: "Mutual Attraction", desc: "Love & control dynamics" },
    { name: "Rajju Dosha", check: "Longevity", desc: "Marriage duration analysis" },
    { name: "Vedha", check: "Obstacles", desc: "Potential challenges identification" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 via-white to-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                💑 Marriage Match Making
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-6">
                Kundali Matching for Happy Marriage
              </h2>
              <p className="text-lg text-muted mb-8">
                Get expert Kundali matching with detailed compatibility analysis. Ensure a harmonious and prosperous married life with Vedic astrology guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I want Kundali matching for marriage`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
                >
                  <span>💬</span>
                  <span>Book Kundali Matching</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent text-lg font-semibold rounded-full hover:bg-accent hover:text-white transition-all"
                >
                  <span>📞</span>
                  <span>Call: {siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Analyze */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Comprehensive <span className="text-accent">Match Making Analysis</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                We analyze all crucial aspects of Kundali matching to ensure compatibility
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aspects.map((aspect, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{aspect.name}</h3>
                  <p className="text-accent font-medium mb-2">{aspect.score || aspect.check}</p>
                  <p className="text-sm text-muted">{aspect.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What You Get in <span className="text-accent">Match Making Report</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "📊", title: "Gun Milan Score", desc: "Detailed 36-point Ashtakoot matching with explanation" },
                { icon: "⚡", title: "Mangal Dosha Analysis", desc: "Mars affliction check for both partners with remedies" },
                { icon: "💕", title: "Love Compatibility", desc: "Emotional and mental compatibility assessment" },
                { icon: "👨‍👩‍👧‍👦", title: "Family Harmony", desc: "Relationship with in-laws and family predictions" },
                { icon: "👶", title: "Children Prospects", desc: "Progeny predictions and timing analysis" },
                { icon: "💰", title: "Financial Compatibility", desc: "Wealth creation and financial harmony after marriage" },
                { icon: "🏠", title: "Domestic Happiness", desc: "Peace and harmony in married life prediction" },
                { icon: "⏰", title: "Marriage Timing", desc: "Best muhurat and auspicious dates for marriage" },
                { icon: "🔮", title: "Long-term Predictions", desc: "Future prospects and challenges in married life" },
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

        {/* Process */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Simple <span className="text-accent">3-Step Process</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Share Birth Details",
                  desc: "Provide birth date, time, and place for both bride and groom",
                  icon: "📝"
                },
                {
                  step: "2",
                  title: "Expert Analysis",
                  desc: "Our expert astrologer analyzes both Kundalis in detail",
                  icon: "🔍"
                },
                {
                  step: "3",
                  title: "Get Detailed Report",
                  desc: "Receive comprehensive report with compatibility score and remedies",
                  icon: "📄"
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why <span className="text-accent">Kundali Matching</span> is Important?
                </h2>
                <div className="space-y-4">
                  {[
                    "Ensures long-term compatibility and harmony",
                    "Identifies potential challenges before marriage",
                    "Checks for doshas that may affect married life",
                    "Predicts progeny and children prospects",
                    "Assesses financial stability after marriage",
                    "Determines emotional and mental compatibility",
                    "Finds right timing for marriage",
                    "Provides remedies for problematic combinations",
                    "Ensures family peace and happiness",
                    "Follows traditional Vedic principles"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-accent text-xl flex-shrink-0">✓</span>
                      <span className="text-muted">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Important Questions We Answer</h3>
                <div className="space-y-4">
                  {[
                    "Is this the right match for marriage?",
                    "What is the Gun Milan score?",
                    "Is there Mangal Dosha? How to resolve it?",
                    "Will the marriage be happy and harmonious?",
                    "What challenges might we face?",
                    "When is the best time to get married?",
                    "Will there be children? When?",
                    "How will in-law relationships be?",
                  ].map((q, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <span className="text-accent">❓</span>
                      <span className="text-sm text-foreground">{q}</span>
                    </div>
                  ))}
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
                href="/services/love-consultation"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Love & Relationship Consultation</h3>
                <p className="text-muted text-sm mb-3">Get guidance on love problems, breakups, and relationship issues</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
              <Link
                href="/services/gemstones"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">💎</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Gemstone Remedies</h3>
                <p className="text-muted text-sm mb-3">Wear right gemstones to strengthen marriage and family harmony</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
              <Link
                href="/consultation"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">🔮</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Complete Kundali Reading</h3>
                <p className="text-muted text-sm mb-3">Comprehensive life predictions including marriage timing and prospects</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-accent to-accent/80 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Check Marriage Compatibility?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Get expert Kundali matching with detailed compatibility report and remedies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I want Kundali matching. Bride DOB: [Date] [Time] [Place]. Groom DOB: [Date] [Time] [Place]`}
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
            <p className="mt-6 text-sm opacity-80">
              Get detailed report within 24-48 hours | {siteConfig.contact.availability.weekdays}
            </p>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I want Kundali matching for marriage`}
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
