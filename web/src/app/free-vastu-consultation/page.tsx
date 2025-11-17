import { Header } from "@/components/header";
import { FreeConsultationBanner } from "@/components/free-consultation-banner";
import { siteConfig } from "@/data/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Vastu Consultation | Astro Hema",
  description: "Get your first Vastu consultation absolutely FREE! Expert Vastu guidance for your home or office. Discover defects and get personalized remedies at no cost.",
  keywords: [
    'free vastu consultation',
    'vastu consultation online',
    'vastu expert',
    'vastu tips for home',
    'vastu shastra',
    'free astrology consultation',
    'vastu defects',
    'vastu remedies'
  ],
  openGraph: {
    title: "Free Vastu Consultation | Astro Hema",
    description: "Get expert Vastu guidance for FREE. Discover defects in your home or office and get personalized remedies.",
    url: 'https://astrohema.com/free-vastu-consultation',
    type: 'website',
  },
};

export default function FreeVastuConsultationPage() {
  const benefits = [
    {
      icon: "🏠",
      title: "Home Vastu Analysis",
      description: "Complete assessment of your home's Vastu alignment and energy flow"
    },
    {
      icon: "💼",
      title: "Office Vastu Check",
      description: "Optimize your workspace for productivity and prosperity"
    },
    {
      icon: "🔍",
      title: "Defect Identification",
      description: "Pinpoint exact Vastu defects causing problems in your life"
    },
    {
      icon: "💡",
      title: "Practical Remedies",
      description: "Get simple, effective solutions that actually work"
    },
    {
      icon: "📱",
      title: "Phone or WhatsApp",
      description: "Consultation via call or video - your choice, your comfort"
    },
    {
      icon: "⚡",
      title: "15-20 Minutes",
      description: "Quick consultation covering key Vastu aspects"
    }
  ];

  const whatYouGet = [
    "✅ Complete Vastu analysis of your main entrance",
    "✅ Bedroom and kitchen direction assessment",
    "✅ Identification of major Vastu defects",
    "✅ 3-5 immediate remedies you can implement",
    "✅ Guidance on furniture placement",
    "✅ Color and element recommendations"
  ];

  const commonProblems = [
    {
      problem: "💰 Financial Problems",
      solution: "Wrong cash/locker placement, main door issues"
    },
    {
      problem: "😰 Health Issues",
      solution: "Bedroom direction, bathroom positioning problems"
    },
    {
      problem: "👨‍👩‍👧 Family Conflicts",
      solution: "Wrong room assignments, color imbalances"
    },
    {
      problem: "📉 Business Losses",
      solution: "Office entrance, desk placement defects"
    },
    {
      problem: "😴 Sleep Problems",
      solution: "Bedroom direction, bed positioning issues"
    },
    {
      problem: "🎓 Children's Studies",
      solution: "Study room direction, student desk placement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Banner */}
        <FreeConsultationBanner type="vastu" />

        {/* What You'll Get */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What's Included in Your <span className="text-accent">FREE Vastu Consultation</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                A comprehensive Vastu analysis covering all major aspects of your home or office
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all hover:shadow-lg"
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                What You'll Receive:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {whatYouGet.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-accent font-semibold mt-6 text-lg">
                All this - Absolutely FREE! No hidden charges, no obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Common Problems Solved */}
        <section className="py-16 sm:py-20 bg-accent-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Problems We Help Solve with <span className="text-accent">Vastu</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Many life problems are caused by Vastu defects. Here's how we can help:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonProblems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-6 border-l-4 border-accent"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-sm text-muted">
                    <span className="font-medium text-accent">Vastu Cause:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-card rounded-2xl p-8 max-w-3xl mx-auto border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🎯 Sound Familiar?
              </h3>
              <p className="text-muted mb-6">
                If you're facing any of these problems, there's a 90% chance it's related to Vastu defects in your space. Get your FREE consultation now and discover the root cause!
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi! I want to claim my FREE Vastu consultation. I'm facing [describe your problem].`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Get My FREE Vastu Consultation</span>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How It <span className="text-accent">Works</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Getting your free Vastu consultation is simple and quick
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "WhatsApp or call us to book your free slot"
                },
                {
                  step: "2",
                  title: "Share Details",
                  description: "Tell us about your main problem and space type"
                },
                {
                  step: "3",
                  title: "Get Consultation",
                  description: "15-20 min call with Vastu analysis and remedies"
                },
                {
                  step: "4",
                  title: "Implement",
                  description: "Apply simple remedies and see results!"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-card rounded-xl p-6 border border-accent/10 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-accent-soft">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Is this really FREE?",
                  a: "Yes! Your first Vastu consultation is 100% free. No hidden charges, no obligations. We want you to experience our expertise before making any commitment."
                },
                {
                  q: "How long is the consultation?",
                  a: "The free consultation is 15-20 minutes, which is enough to identify major Vastu defects and provide initial remedies."
                },
                {
                  q: "What information do I need to provide?",
                  a: "Basic details about your space - direction of entrance, main rooms, and the specific problems you're facing. No complex measurements needed for the initial consultation."
                },
                {
                  q: "Can I get Vastu for both home and office?",
                  a: "The free consultation covers one property. If you need Vastu for both, we can schedule separate consultations."
                },
                {
                  q: "Do I need to share photos or floor plan?",
                  a: "Not mandatory for the free consultation. However, if you have them, they help us provide more accurate guidance."
                },
                {
                  q: "What if I need detailed Vastu report?",
                  a: "After the free consultation, if you need a comprehensive Vastu report with detailed analysis and remedies, we offer paid services starting from ₹2,000."
                }
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-card rounded-lg border border-accent/10"
                >
                  <summary className="cursor-pointer p-4 sm:p-6 font-semibold text-foreground hover:text-accent transition-colors">
                    {faq.q}
                  </summary>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-muted">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-accent to-accent/80 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Don't Let Vastu Defects Hold You Back!
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Discover the hidden Vastu problems in your space and get expert remedies - absolutely FREE!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi! I want to claim my FREE Vastu consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent font-bold px-8 py-4 rounded-full text-lg hover:bg-accent-soft transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp for FREE Consultation</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/30 transition-all"
              >
                <span>📞</span>
                <span>Call Now</span>
              </a>
            </div>
            <p className="mt-6 text-sm opacity-70">
              Available {siteConfig.contact.availability.weekdays} • Same-day consultations available
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
