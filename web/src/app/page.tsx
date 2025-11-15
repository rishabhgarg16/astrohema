import { siteConfig } from "@/data/site-config";
import { HomeHero } from "@/components/home-hero";

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
            <span className="text-xl font-semibold text-foreground">
              {siteConfig.name}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/" className="text-accent border-b-2 border-accent pb-1">
              Home
            </a>
            <a
              href="/courses"
              className="text-muted hover:text-accent transition-colors pb-1"
            >
              Courses
            </a>
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
        <HomeHero />

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

        {/* About Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-accent-soft to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Astrology: Your Guide To Life's<br />
                  <span className="text-accent">Journey & Path To Success!</span>
                </h2>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  We believe astrology is pure science, and we aim to create such a social impact on you that science and astrology through its resources of the astrology chart, kundali, etc. As we step into our journey, we strive to build a community where we are a part of your daily routine right from our astrology by date of birth, name, time, palm reading, and face reading, to all other online astrology, numerology, and Vastu services.
                </p>
                <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-accent/20">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{siteConfig.stats[0].value}</div>
                    <div className="text-sm text-muted">With Vastu, Kundali, And Predictions</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-200 via-orange-300 to-amber-400 p-1">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="text-7xl mb-4">🕉️</div>
                      <p className="text-xl font-semibold text-foreground mb-2">Astro Hema</p>
                      <p className="text-sm text-muted">Expert in Vedic Astrology</p>
                      <p className="text-sm text-muted mt-4">Vastu, Kundali & Numerology Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
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

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-accent-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>How can I book a consultation?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  You can book a consultation by calling us at {siteConfig.contact.phone} or messaging us on WhatsApp. We'll schedule a convenient time for your personalized session.
                </div>
              </details>
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>What information do I need for a Kundali reading?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  For an accurate Kundali reading, we need your exact date of birth, time of birth, and place of birth. The more accurate the information, the more precise the analysis will be.
                </div>
              </details>
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>How long does a consultation take?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  A standard consultation typically takes 30-45 minutes, depending on the complexity of your questions and the depth of analysis required. We ensure you have enough time to discuss all your concerns.
                </div>
              </details>
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>Do you provide online consultations?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  Yes! We offer online consultations via phone or video call for clients who cannot visit in person. The quality and depth of consultation remains the same.
                </div>
              </details>
              <details className="bg-card rounded-xl border border-accent/10 overflow-hidden group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-accent-soft transition-colors flex justify-between items-center">
                  <span>What is the consultation fee?</span>
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted">
                  Consultation fees vary based on the type of service. Please call us or message on WhatsApp for detailed pricing information.
                </div>
              </details>
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
                <form action="https://formspree.io/f/xanyqveo" method="POST" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
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
                      name="phone"
                      required
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
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Select a service</option>
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
                      name="message"
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
              <p className="text-sm opacity-80 mb-4">
                Authentic Vedic astrology and Vastu consultations for modern families.
              </p>
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-sm">Subscribe to Our Newsletter</h4>
                <form action="https://formspree.io/f/xanyqveo" method="POST" className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input type="hidden" name="_subject" value="Newsletter Subscription" />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
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
