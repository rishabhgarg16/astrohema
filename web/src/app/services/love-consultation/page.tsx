import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Love & Relationship Consultation | Breakup Solutions",
  description: "Expert astrological guidance for love problems, breakup solutions, relationship compatibility, and marriage timing. Get personalized remedies from Vedic astrologer.",
  keywords: [
    'love astrology',
    'relationship problems',
    'breakup solution',
    'love compatibility',
    'marriage timing',
    'relationship astrology',
    'love problem solution',
    'patch up astrology',
    'ex back astrology',
    'love marriage astrology',
  ],
  alternates: {
    canonical: 'https://astrohema.com/services/love-consultation',
  },
  openGraph: {
    title: "Love & Relationship Consultation | Astro Hema",
    description: "Get expert astrological solutions for love problems, breakups, and relationship issues.",
    url: 'https://astrohema.com/services/love-consultation',
    type: 'website',
  },
};

export default function LoveConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 via-white to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                ❤️ Love & Relationship Consultation
              </h1>
              <p className="text-xl text-muted mb-8">
                Expert Astrological Solutions for Love Problems, Breakups & Relationship Issues
              </p>
              <p className="text-lg text-muted mb-8">
                Get personalized guidance and remedies for your love life based on Vedic astrology. Whether it's understanding compatibility, healing from breakup, or finding true love - we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need help with love/relationship problem`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
                >
                  <span>💬</span>
                  <span>Get Help Now - 100% Confidential</span>
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">🔒 Completely Private & Secure Consultation</p>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Common <span className="text-accent">Love & Relationship Problems</span> We Solve
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "💔", title: "Breakup & Separation", desc: "Healing and moving forward after breakup, or getting ex back if destined" },
                { icon: "🤝", title: "Love Compatibility", desc: "Check if your partner is right for you based on Kundali matching" },
                { icon: "👪", title: "Family Opposition", desc: "Solutions when family doesn't approve of your relationship" },
                { icon: "💑", title: "Love Marriage Issues", desc: "Overcome obstacles in love marriage, convince parents" },
                { icon: "🔄", title: "On-Off Relationships", desc: "Understand why relationship keeps breaking and fixing, find stability" },
                { icon: "📱", title: "Long Distance Love", desc: "Maintain and strengthen long-distance relationships" },
                { icon: "⏰", title: "Marriage Timing", desc: "When will you get married? Best time for marriage" },
                { icon: "🎯", title: "Finding True Love", desc: "When and how will you meet your soulmate?" },
                { icon: "😢", title: "One-Sided Love", desc: "Does your love have a future? What to do?" },
                { icon: "🔮", title: "Love Predictions", desc: "Complete love life predictions based on your chart" },
                { icon: "💬", title: "Communication Issues", desc: "Improve understanding and communication with partner" },
                { icon: "🎁", title: "Trust Issues", desc: "Rebuild trust and strengthen relationship bond" },
              ].map((item, idx) => (
                <div key={idx} className="bg-card rounded-2xl p-6 border border-accent/10 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Analyze */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How We <span className="text-accent">Help You</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📊", title: "Kundali Analysis", desc: "Analyze 7th house (marriage), Venus, and relationship planets" },
                { icon: "💕", title: "Compatibility Check", desc: "Check compatibility with your partner or potential match" },
                { icon: "🔍", title: "Problem Identification", desc: "Identify astrological reasons for relationship issues" },
                { icon: "🎯", title: "Personalized Remedies", desc: "Specific mantras, gemstones, and rituals for your situation" },
                { icon: "⏰", title: "Timing Predictions", desc: "When will things improve? Best time for important decisions" },
                { icon: "📅", title: "Future Guidance", desc: "What to expect in your love life going forward" },
                { icon: "💬", title: "Communication Tips", desc: "Best ways to approach and talk to your partner" },
                { icon: "🕉️", title: "Spiritual Solutions", desc: "Vedic remedies for strengthening relationship" },
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

        {/* Success Stories */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Real <span className="text-accent">Success Stories</span>
              </h2>
              <p className="text-lg text-muted">Lives transformed through astrology guidance</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Neha, 28",
                  problem: "Breakup after 5 years",
                  result: "Patch up within 2 months with remedies. Now happily married!",
                  rating: 5
                },
                {
                  name: "Rahul, 32",
                  problem: "Parents against love marriage",
                  result: "Parents agreed after muhurat suggestion. Married last month!",
                  rating: 5
                },
                {
                  name: "Priya, 25",
                  problem: "One-sided love for 2 years",
                  result: "Found clarity, moved on, met better match through family.",
                  rating: 5
                }
              ].map((story, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 border border-accent/10">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <span key={i} className="text-accent text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted mb-2"><strong>Problem:</strong> {story.problem}</p>
                  <p className="text-sm text-accent mb-3"><strong>Result:</strong> {story.result}</p>
                  <p className="text-sm font-medium text-foreground">- {story.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why Choose <span className="text-accent">Astro Hema</span> for Love Consultation?
                </h2>
                <div className="space-y-4">
                  {[
                    "20+ years of experience in relationship astrology",
                    "100% confidential and private consultation",
                    "Practical solutions, not just predictions",
                    "Understand from both emotional and astrological perspective",
                    "Remedies that actually work in modern relationships",
                    "Compassionate and non-judgmental guidance",
                    "Available via phone, video call, or WhatsApp",
                    "Follow-up support until issue resolves",
                    "Affordable consultation fees",
                    "500+ successful relationship cases resolved"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-accent text-xl flex-shrink-0">✓</span>
                      <span className="text-muted">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">🔒 Confidentiality Guaranteed</h3>
                <p className="text-muted mb-6">
                  We understand love matters are personal and sensitive. Your consultation is 100% private and confidential. We never share your information with anyone.
                </p>
                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What to Prepare:</h4>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• Your birth details (date, time, place)</li>
                    <li>• Partner's birth details (if available)</li>
                    <li>• Brief description of your situation</li>
                    <li>• Specific questions you want answered</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need private consultation for love problem`}
                  className="block w-full text-center px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all"
                >
                  Book Private Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Other <span className="text-accent">Services You May Need</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/services/match-making"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">💑</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Marriage Match Making</h3>
                <p className="text-muted text-sm mb-3">Check Kundali compatibility before marriage for long-term happiness</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
              <Link
                href="/services/gemstones"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">💎</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Gemstone Remedies</h3>
                <p className="text-muted text-sm mb-3">Strengthen Venus and relationship planets for better love life</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
              <Link
                href="/consultation"
                className="bg-card rounded-xl p-6 border border-accent/10 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">🔮</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Complete Kundali Reading</h3>
                <p className="text-muted text-sm mb-3">Get detailed analysis of all life aspects including love and marriage</p>
                <span className="text-accent font-medium text-sm group-hover:underline">Learn More →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-600 via-rose-600 to-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Don't Suffer in Silence
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Get expert guidance to solve your love problems. Every situation has a solution in astrology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I'm going through love problem and need help`}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-accent text-lg font-semibold rounded-full hover:bg-accent-soft transition-all hover:scale-105"
              >
                <span className="text-2xl">💬</span>
                <span>Talk to Expert on WhatsApp</span>
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
              Available {siteConfig.contact.availability.weekdays} | Same-day consultation available
            </p>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need help with love/relationship problem`}
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
