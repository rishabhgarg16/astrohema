import { siteConfig } from "@/data/site-config";
import { courseSections } from "@/data/courses";
import { CourseCard } from "@/components/course-card";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with top bar */}
      <header className="border-b border-accent/10 bg-card/95 backdrop-blur-sm">
        <div className="bg-accent text-white text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-end">
            <a
              href="#lead-form"
              className="underline underline-offset-4 font-medium"
            >
              Course Login
            </a>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between bg-card">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-semibold text-foreground">
                {siteConfig.name}
              </span>
              <span className="text-xs text-muted hidden sm:inline">
                Courses & Mentorship
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="/" className="hover:text-accent transition-colors">
              Home
            </a>
            <span className="text-accent border-b-2 border-accent pb-1">
              Courses
            </span>
            <span className="text-muted">Call Consultation</span>
            <span className="text-muted">Ask Our Astrologer</span>
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-white transition-colors"
            >
              <span>📞</span>
              <span>Call</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-amber-800 to-orange-700 text-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-40 top-10 w-96 h-96 rounded-full border border-white/10" />
            <div className="absolute -right-20 bottom-0 w-[28rem] h-[28rem] rounded-full border border-white/15" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_55%)]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 space-y-5">
                <p className="text-sm font-semibold tracking-wide uppercase text-sky-200">
                  Courses by {siteConfig.name}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Be Master &amp; Make Career in{" "}
                  <span className="text-sky-300">Occult Science</span>
                </h1>
                <p className="text-base sm:text-lg text-amber-100/95 max-w-xl">
                  Learn Astrology, Numerology, Tarot, Vastu and Lal Kitab in a
                  structured way with live guidance and practical case studies.
                </p>
                <ul className="grid grid-cols-2 gap-3 text-sm sm:text-base mt-4 max-w-md">
                  {["Astrology", "Numerology", "Tarot", "Vastu", "Lal Kitab"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-amber-50"
                      >
                        <span className="w-5 h-5 rounded-full border border-amber-300 flex items-center justify-center text-xs">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="#lead-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 text-orange-950 font-semibold px-6 py-3 text-sm sm:text-base hover:bg-amber-200 transition-colors"
                  >
                    Explore Courses
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-200 text-amber-50 font-medium px-6 py-3 text-sm sm:text-base hover:bg-white/10 transition-colors"
                  >
                    <span>📞</span>
                    <span>Talk to Team</span>
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-amber-500 opacity-80 blur-2xl" />
                  <div className="relative w-full h-full rounded-full border-4 border-amber-100/70 bg-card/10 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="text-5xl mb-3">📚</div>
                      <p className="text-lg font-semibold">
                        Astro Hema Courses
                      </p>
                      <p className="text-xs text-amber-50/95 mt-1">
                        Live + Recorded sessions
                      </p>
                      <p className="text-xs text-amber-50/90 mt-1">
                        Beginner to Advanced Levels
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course sections */}
        {courseSections.map((section) => (
          <section
            key={section.id}
            className="py-16 sm:py-20"
            aria-labelledby={`${section.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2
                  id={`${section.id}-heading`}
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
                >
                  <span className="text-accent">{section.title}</span>
                </h2>
                {section.description && (
                  <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base">
                    {section.description}
                  </p>
                )}
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.courses.map((course) => (
                  <CourseCard key={course.title} course={course} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Lead generation form */}
        <section id="lead-form" className="py-16 sm:py-20 bg-accent-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-2">
                Fill The Details Below To Know More About Our Upcoming Courses
              </h2>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-[1px] shadow-lg">
              <div className="rounded-3xl bg-orange-50/95 p-6 sm:p-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    Want To Know More About Our Upcoming Course?
                  </h3>
                  <p className="text-sm text-muted max-w-xl mx-auto">
                    Share your details and our team will contact you with batch
                    dates, fees, syllabus and offers.
                  </p>
                </div>
                {/* 
                  NOTE:
                  Replace FORM_ENDPOINT below with your real endpoint from a form service like Formspree.
                  Example (after creating a form on Formspree):
                  const FORM_ENDPOINT = "https://formspree.io/f/abcdxyz";
                */}
                <form
                  className="grid gap-4 sm:grid-cols-2"
                  method="POST"
                  action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Astro Hema course enquiry"
                  />
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="w-full rounded-lg border border-accent/20 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full rounded-lg border border-accent/20 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Phone No.
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        className="w-24 rounded-lg border border-accent/20 px-2 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      >
                        <option>+91</option>
                        <option>+971</option>
                        <option>+1</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        className="flex-1 rounded-lg border border-accent/20 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="Your WhatsApp number"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="course"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Select Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      className="w-full rounded-lg border border-accent/20 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    >
                      <option>Choose a course</option>
                      {courseSections.flatMap((section) =>
                        section.courses.map((course) => (
                          <option key={course.title}>{course.title}</option>
                        ))
                      )}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      className="w-full rounded-lg border border-accent/20 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="Share your learning goals or questions (optional)"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-accent text-white font-semibold py-3 text-sm sm:text-base hover:bg-accent/90 transition-colors"
                    >
                      Submit
                    </button>
                    <p className="mt-2 text-xs text-muted text-center">
                      Our team will reach out to you on WhatsApp within 24
                      hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


