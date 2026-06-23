import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Experiences in Azerbaijan | Lumivara Travel',
  description:
    'Discover unique hands-on experiences in Azerbaijan with Lumivara Travel — rock climbing, cultural tours, outdoor adventures and more across Baku and beyond.',
  alternates: { canonical: 'https://incoming.lumivaratravel.az/experiences/' },
  openGraph: {
    title: 'Experiences in Azerbaijan | Lumivara Travel',
    description:
      'Discover unique hands-on experiences in Azerbaijan with Lumivara Travel — rock climbing, cultural tours, outdoor adventures and more across Baku and beyond.',
    url: 'https://incoming.lumivaratravel.az/experiences/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Experiences in Azerbaijan — Lumivara Travel' }],
  },
}

const experiences = [
  {
    href: '/experiences/rock-climbing',
    // TODO: Replace with actual rock climbing photo
    image: '/images/gobustan.webp',
    title: 'Nardaran Rock Climbing Adventure',
    location: 'Absheron Peninsula, Baku',
    tags: ['Adventure', 'Outdoor'],
    description:
      'Climb natural rock walls with panoramic Caspian Sea views. UIAA grades 4–7, transfer included, professional guide.',
  },
]

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        {/* TODO: Replace with a dedicated experiences hero photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-32 w-full">
          <span className="block text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Azerbaijan Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Experiences in Azerbaijan
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Go beyond the highlights. Lumivara Travel curates hands-on adventures, cultural encounters and outdoor experiences across Azerbaijan — designed for curious travellers who want to feel a place, not just see it.
          </p>
        </div>
      </section>

      {/* Experiences grid */}
      <section className="py-4 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Experiences</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {experiences.map((exp) => (
              <div
                key={exp.href}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-wider bg-accent/15 text-primary px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{exp.description}</p>
                  <Link
                    href={exp.href}
                    className="mt-3 inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-full font-bold text-sm hover:bg-accent-hover transition-colors self-start"
                  >
                    View Experience
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon teaser */}
      <section className="py-4 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-light rounded-2xl p-3 border border-gray-100">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Coming Soon</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">More Experiences Coming Soon</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We are constantly adding new experiences across Azerbaijan. From cultural cooking classes in Sheki to horseback riding in the Caucasus mountains — stay tuned.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-bold hover:bg-accent-hover transition-colors"
            >
              Contact us about custom experiences
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-4 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-blue-200 leading-relaxed mb-3">
            We build custom experiences for groups and individuals. Tell us what you have in mind.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-3 rounded-full font-bold hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Plan a Custom Experience
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
