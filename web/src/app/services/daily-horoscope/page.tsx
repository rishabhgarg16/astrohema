import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Daily Horoscope - Today's Rashifal for All Zodiac Signs",
  description: "Get accurate daily horoscope predictions for all 12 zodiac signs. Free Rashifal today with lucky numbers, colors, and astrological guidance from expert Vedic astrologer.",
  keywords: [
    'daily horoscope',
    'today rashifal',
    'aaj ka rashifal',
    'zodiac signs',
    'horoscope today',
    'daily astrology',
    'rashi bhavishya',
    'aries horoscope',
    'taurus horoscope',
    'gemini horoscope',
    'daily predictions',
  ],
  alternates: {
    canonical: 'https://astrohema.com/services/daily-horoscope',
  },
  openGraph: {
    title: "Daily Horoscope | Today's Rashifal | Astro Hema",
    description: "Get free daily horoscope for all zodiac signs with accurate predictions and guidance.",
    url: 'https://astrohema.com/services/daily-horoscope',
    type: 'website',
  },
};

export default function DailyHoroscopePage() {
  const zodiacSigns = [
    { name: "Aries (Mesh)", icon: "♈", hindi: "मेष", dates: "Mar 21 - Apr 19" },
    { name: "Taurus (Vrishabh)", icon: "♉", hindi: "वृषभ", dates: "Apr 20 - May 20" },
    { name: "Gemini (Mithun)", icon: "♊", hindi: "मिथुन", dates: "May 21 - Jun 20" },
    { name: "Cancer (Karka)", icon: "♋", hindi: "कर्क", dates: "Jun 21 - Jul 22" },
    { name: "Leo (Simha)", icon: "♌", hindi: "सिंह", dates: "Jul 23 - Aug 22" },
    { name: "Virgo (Kanya)", icon: "♍", hindi: "कन्या", dates: "Aug 23 - Sep 22" },
    { name: "Libra (Tula)", icon: "♎", hindi: "तुला", dates: "Sep 23 - Oct 22" },
    { name: "Scorpio (Vrishchik)", icon: "♏", hindi: "वृश्चिक", dates: "Oct 23 - Nov 21" },
    { name: "Sagittarius (Dhanu)", icon: "♐", hindi: "धनु", dates: "Nov 22 - Dec 21" },
    { name: "Capricorn (Makar)", icon: "♑", hindi: "मकर", dates: "Dec 22 - Jan 19" },
    { name: "Aquarius (Kumbh)", icon: "♒", hindi: "कुंभ", dates: "Jan 20 - Feb 18" },
    { name: "Pisces (Meen)", icon: "♓", hindi: "मीन", dates: "Feb 19 - Mar 20" },
  ];

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
                🌟 Daily Horoscope
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-6">
                आज का राशिफल | Today's Rashifal
              </h2>
              <p className="text-lg text-muted mb-8">
                Get accurate daily predictions for all 12 zodiac signs. Know what the stars have in store for you today!
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
                <span className="text-sm font-medium text-foreground">
                  📺 Watch Daily Horoscope Videos on YouTube
                </span>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-semibold"
                >
                  @AstroHema
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Zodiac Signs */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Select Your <span className="text-accent">Zodiac Sign</span>
              </h2>
              <p className="text-lg text-muted">
                Choose your rashi to get personalized daily predictions
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {zodiacSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all text-center cursor-pointer group"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {sign.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {sign.name}
                  </h3>
                  <p className="text-sm text-accent mb-2">{sign.hindi}</p>
                  <p className="text-xs text-muted">{sign.dates}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-muted mb-6">
                For detailed personalized daily predictions based on YOUR exact birth chart
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I want personalized daily horoscope`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent/90 transition-all"
              >
                Get Personalized Daily Predictions
              </a>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What's Included in <span className="text-accent">Your Daily Horoscope</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🌅", title: "Daily Overview", desc: "General predictions for the day ahead" },
                { icon: "💼", title: "Career & Finance", desc: "Work opportunities and money matters" },
                { icon: "❤️", title: "Love & Relationships", desc: "Romance and family predictions" },
                { icon: "💪", title: "Health & Wellness", desc: "Physical and mental health guidance" },
                { icon: "🎨", title: "Lucky Color", desc: "Today's auspicious color for you" },
                { icon: "🔢", title: "Lucky Number", desc: "Your lucky number for the day" },
                { icon: "⏰", title: "Auspicious Time", desc: "Best muhurat for important tasks" },
                { icon: "⚠️", title: "Things to Avoid", desc: "Activities to skip today" },
                { icon: "🎯", title: "Remedies", desc: "Simple daily remedies for better results" },
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

        {/* YouTube CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 sm:p-12 text-center">
              <div className="text-5xl mb-6">📺</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Watch Daily Horoscope Videos
              </h2>
              <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                Subscribe to our YouTube channel for daily horoscope videos in Hindi & English. Get detailed predictions for all rashis every morning!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-all"
                >
                  <span>▶️</span>
                  <span>Subscribe on YouTube</span>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent text-lg font-semibold rounded-full hover:bg-accent hover:text-white transition-all"
                >
                  <span>📸</span>
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Service */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-accent to-accent/80 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Want More Than Just Daily Horoscope?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Get personalized predictions based on YOUR exact birth chart with detailed Kundali analysis
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">📊 Complete Kundali Reading</h3>
                <p className="text-sm opacity-90">Detailed life predictions based on your birth chart</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">🎯 Personalized Remedies</h3>
                <p className="text-sm opacity-90">Specific solutions for your unique challenges</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I want complete Kundali analysis`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-accent text-lg font-semibold rounded-full hover:bg-accent-soft transition-all hover:scale-105"
            >
              <span className="text-2xl">💬</span>
              <span>Book Complete Kundali Reading</span>
            </a>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I want to know about daily horoscope`}
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
