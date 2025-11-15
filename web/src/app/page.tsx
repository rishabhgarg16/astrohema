import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-sm border-b border-accent/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
            <span className="text-xl font-semibold text-foreground">{siteConfig.name}</span>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-colors"
            >
              <span>📞</span>
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 border-2 border-accent rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 border border-accent/30 rounded-full"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-accent-soft border border-accent/20 rounded-full text-sm font-medium text-accent">
                  Trusted by 500+ Families
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  {siteConfig.tagline.split("Vastu, Kundali")[0]}
                  <span className="text-accent">Vastu, Kundali</span>
                  {siteConfig.tagline.split("Vastu, Kundali")[1]}
                </h1>
                <p className="text-lg sm:text-xl text-muted leading-relaxed">
                  {siteConfig.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
                  >
                    <span className="text-2xl">📞</span>
                    <span>Call for Consultation</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-accent text-accent text-lg font-semibold rounded-full hover:bg-accent-soft transition-all"
                  >
                    <span className="text-2xl">💬</span>
                    <span>WhatsApp Us</span>
                  </a>
                </div>
                <div className="flex items-center gap-6 pt-6 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Hindi & English</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full"></div>
                  <div className="relative w-full h-full rounded-full border-4 border-accent/20 flex items-center justify-center bg-card">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🪔</div>
                      <p className="text-xl font-semibold text-foreground">Astro Hema</p>
                      <p className="text-muted mt-2">Certified Astrologer</p>
                      <p className="text-sm text-muted mt-1">Vastu & Kundali Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              {siteConfig.services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-4">{service.description}</p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                  >
                    <span>Book Now</span>
                    <span>→</span>
                  </a>
                </div>
              ))}
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
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
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
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option>Select a service</option>
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
              <p className="text-sm opacity-80">
                Authentic Vedic astrology and Vastu consultations for modern families.
              </p>
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
                <li>Kundali Analysis</li>
                <li>Vastu Consultation</li>
                <li>Match Making</li>
                <li>Career Guidance</li>
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
