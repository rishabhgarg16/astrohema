"use client";

import { siteConfig } from "@/data/site-config";

interface FreeConsultationBannerProps {
  type?: "vastu" | "general";
  className?: string;
}

export function FreeConsultationBanner({ type = "general", className = "" }: FreeConsultationBannerProps) {
  const isVastu = type === "vastu";

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 ${className}`}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-10 top-0 w-40 h-40 rounded-full border-4 border-white" />
        <div className="absolute right-10 bottom-0 w-60 h-60 rounded-full border-4 border-white" />
        <div className="absolute left-1/3 top-1/2 w-32 h-32 rounded-full border-4 border-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">🎁</span>
            <span className="text-sm font-semibold uppercase tracking-wide">
              Limited Time Offer
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {isVastu ? (
              <>
                Get Your <span className="text-yellow-300">FREE Vastu Consultation</span>
              </>
            ) : (
              <>
                Your <span className="text-yellow-300">First Consultation</span> is FREE!
              </>
            )}
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {isVastu ? (
              "Discover Vastu defects in your home or office and get personalized remedies. No obligations, completely free!"
            ) : (
              "Start your journey with Astro Hema. Get expert guidance on your life's most important questions - absolutely free for first-time clients!"
            )}
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="font-semibold mb-1">15-20 Minutes</div>
              <div className="text-sm text-white/80">Quick & Effective</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold mb-1">Phone or WhatsApp</div>
              <div className="text-sm text-white/80">Your Convenience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">✅</div>
              <div className="font-semibold mb-1">No Obligations</div>
              <div className="text-sm text-white/80">100% Free Service</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi! I want to claim my ${isVastu ? 'FREE Vastu consultation' : 'FREE first consultation'}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-orange-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Claim Free {isVastu ? 'Vastu' : ''} Consultation</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/30 transition-all border-2 border-white/50"
            >
              <span>📞</span>
              <span>Call Now</span>
            </a>
          </div>

          {/* Trust badge */}
          <p className="mt-6 text-sm text-white/70">
            🔒 Your information is 100% confidential • No credit card required • Available {siteConfig.contact.availability.weekdays}
          </p>
        </div>
      </div>
    </div>
  );
}
