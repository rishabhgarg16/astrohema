"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site-config";

type HeroSlide = {
  badge: string;
  titleHighlight: string;
  titleRest: string;
  description: string;
  bullets: string[];
  imageSrc?: string;
  imageAlt?: string;
};

const slides: HeroSlide[] = [
  {
    badge: "Trusted by 500+ Families",
    titleHighlight: "Vastu & Kundali",
    titleRest: " guidance for your home & family",
    description:
      "Balance the energy of your home and understand your birth chart to invite prosperity, harmony and peace.",
    bullets: ["Home & Office Vastu", "Family harmony", "Remedies without fear"],
  },
  {
    badge: "Career & Business Decisions",
    titleHighlight: "Astrology for Career",
    titleRest: " clarity & growth",
    description:
      "Use your planetary strengths to choose the right career, business moves and timings for major decisions.",
    bullets: ["Career path clarity", "Business decisions", "Favourable timelines"],
  },
  {
    badge: "Relationships & Marriage",
    titleHighlight: "Match Making &",
    titleRest: " relationship guidance",
    description:
      "Deep Kundali-based compatibility, practical remedies and clear guidance for marriage and relationships.",
    bullets: ["Match making", "Relationship guidance", "Practical remedies"],
  },
];

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[activeIndex];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background orbits */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-0 w-72 h-72 rounded-full border-2 border-amber-300/40" />
        <div className="absolute -right-16 bottom-10 w-96 h-96 rounded-full border border-orange-400/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#fed7aa_0,_transparent_55%)] opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft border border-accent/20 rounded-full text-xs sm:text-sm font-medium text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{slide.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
              <span className="block text-accent">{slide.titleHighlight}</span>
              <span className="block">{slide.titleRest}</span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {slide.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted">
              {slide.bullets.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-[11px] text-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-3 px-8 py-3.5 bg-accent text-white text-sm sm:text-base font-semibold rounded-full hover:bg-orange-600 transition-all hover:scale-[1.02]"
              >
                <span className="text-xl">📞</span>
                <span>Call for Consultation</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-3.5 bg-white border border-accent text-accent text-sm sm:text-base font-semibold rounded-full hover:bg-accent-soft transition-all"
              >
                <span className="text-xl">💬</span>
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Carousel dots */}
            <div className="flex items-center gap-2 pt-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeIndex
                      ? "w-7 bg-accent"
                      : "w-2.5 bg-accent-soft"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: circular badge */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-amber-500 opacity-80 blur-2xl" />
              <div className="relative w-full h-full rounded-full border-4 border-amber-200 bg-card/80 shadow-xl flex items-center justify-center">
                {slide.imageSrc ? (
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt ?? siteConfig.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(min-width: 1024px) 18rem, 16rem"
                  />
                ) : (
                  <div className="text-center px-6">
                    <div className="text-5xl mb-3">🕉️</div>
                    <p className="text-lg sm:text-xl font-semibold text-foreground">
                      {siteConfig.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted mt-1">
                      Vastu, Kundali &amp; Astrology Expert
                    </p>
                    <p className="text-xs text-muted mt-2">
                      1:1 personalised guidance for your home, career and
                      relationships.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() =>
            setActiveIndex(
              (prev) => (prev - 1 + slides.length) % slides.length,
            )
          }
          className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-card/80 border border-accent/20 text-accent shadow-sm hover:bg-accent-soft transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() =>
            setActiveIndex((prev) => (prev + 1) % slides.length)
          }
          className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-card/80 border border-accent/20 text-accent shadow-sm hover:bg-accent-soft transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}