"use client";

import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-sm border-b border-accent/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-accent/10 flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-semibold text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-muted hover:text-accent transition-colors pb-1">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-muted hover:text-accent transition-colors pb-1 flex items-center gap-1">
              Services
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl border border-accent/10 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-2">
                <Link
                  href="/consultation"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent-soft hover:text-accent transition-colors"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/services/match-making"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent-soft hover:text-accent transition-colors"
                >
                  Match Making
                </Link>
                <Link
                  href="/services/love-consultation"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent-soft hover:text-accent transition-colors"
                >
                  Love & Relationships
                </Link>
                <Link
                  href="/services/gemstones"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent-soft hover:text-accent transition-colors"
                >
                  Gemstone Consultation
                </Link>
                <Link
                  href="/services/daily-horoscope"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent-soft hover:text-accent transition-colors"
                >
                  Daily Horoscope
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/courses"
            className="text-muted hover:text-accent transition-colors pb-1"
          >
            Courses
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-colors text-sm"
          >
            <span>📞</span>
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors text-sm"
          >
            <span>💬</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-accent/10">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted px-2">Services</div>
              <Link
                href="/consultation"
                className="block py-2 pl-4 text-sm text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
              <Link
                href="/services/match-making"
                className="block py-2 pl-4 text-sm text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Match Making
              </Link>
              <Link
                href="/services/love-consultation"
                className="block py-2 pl-4 text-sm text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Love & Relationships
              </Link>
              <Link
                href="/services/gemstones"
                className="block py-2 pl-4 text-sm text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gemstone Consultation
              </Link>
              <Link
                href="/services/daily-horoscope"
                className="block py-2 pl-4 text-sm text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Daily Horoscope
              </Link>
            </div>
            <Link
              href="/courses"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
