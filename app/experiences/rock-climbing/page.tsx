import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nardaran Rock Climbing Experience Baku — Caspian Sea Views | Lumivara Travel',
  description:
    'Rock climbing in Baku on the Caspian coast. UIAA grades 4–7, transfer included, professional guide. Just 40 minutes from central Baku at the Nardaran climbing area.',
  keywords: [
    'rock climbing Baku',
    'Nardaran rock climbing',
    'climbing experience Azerbaijan',
    'Caspian Sea rock climbing',
    'adventure tours Baku',
    'rock climbing Azerbaijan',
    'outdoor activities Baku',
    'UIAA climbing Azerbaijan',
  ],
  alternates: { canonical: 'https://incoming.lumivaratravel.az/experiences/rock-climbing/' },
  openGraph: {
    title: 'Nardaran Rock Climbing Experience Baku — Caspian Sea Views | Lumivara Travel',
    description:
      'Rock climbing in Baku on the Caspian coast. UIAA grades 4–7, transfer included, professional guide. Just 40 minutes from central Baku at the Nardaran climbing area.',
    // TODO: Replace with actual rock climbing photo
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Nardaran Rock Climbing — Caspian Sea, Baku' }],
    url: 'https://incoming.lumivaratravel.az/experiences/rock-climbing/',
  },
}

export default function RockClimbingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* TODO: Replace with actual rock climbing photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-32">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-1.5 text-accent/80 hover:text-accent text-sm font-medium mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Experiences
          </Link>
          <span className="block text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Adventure · Absheron Peninsula
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Nardaran Rock Climbing Experience — Baku
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Climb natural rock walls with panoramic Caspian Sea views, just 40 minutes from central Baku
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Highlights */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Highlights</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-4">What Makes This Experience Special</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '🧗', text: 'Climb natural rock walls with panoramic views of the Caspian Sea' },
              { icon: '📊', text: 'Top rope and lead routes across UIAA grades 4–7' },
              { icon: '🌊', text: 'Post-climb swim in the sea during summer mornings' },
              { icon: '🔩', text: 'Pre-placed bolts and solid rock with varied holds' },
              { icon: '🗺️', text: 'Stunning outdoor setting just 40 minutes from central Baku' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inline photo 1 */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
          {/* TODO: Replace with rock climbing photo 1 */}
          <img
            src="/images/gobustan.webp"
            alt="Nardaran rock climbing area, Absheron Peninsula"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Full description */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About This Experience</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-3">Nardaran Climbing Area</h2>
          <div className="prose prose-gray max-w-none space-y-3 text-gray-600 leading-relaxed">
            <p>
              Head to the Nardaran climbing area, located on the Absheron Peninsula along the Caspian coast, just 40 minutes from central Baku. Enjoy top rope and lead routes across UIAA grades 4–7, with pre-placed bolts and solid rock packed with varied holds. Climb natural rock walls with panoramic views of the Caspian Sea.
            </p>
            <p>
              Choose from multiple routes across difficulty levels, ideal for climbers looking to level up in a stunning outdoor setting. Visit in summer to take advantage of the cool morning air, great light, and the option to swim in the sea after your climb. The area is also accessible on calm winter days for those who prefer quieter crags.
            </p>
          </div>
        </section>

        {/* Inline photo 2 */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
          {/* TODO: Replace with rock climbing photo 2 */}
          <img
            src="/images/khinalig.webp"
            alt="Rock climbing routes at Nardaran, Baku"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Included / Not included */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What&apos;s Included</span>
              <h2 className="text-xl font-bold text-gray-900 mt-1 mb-3">Included in This Experience</h2>
              <ul className="space-y-2">
                {[
                  'Pre-placed bolts and anchor points',
                  'Detailed route map',
                  'Professional climbing guide',
                  'Transfer from anywhere in Baku',
                  'Safety briefing',
                  'Climbing gear rental (harness, helmet, rope)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Not Included</span>
              <h2 className="text-xl font-bold text-gray-900 mt-1 mb-3">Not Part of This Experience</h2>
              <ul className="space-y-2">
                {[
                  'Food and drinks',
                  'Travel insurance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Inline photo 3 */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
          {/* TODO: Replace with rock climbing photo 3 */}
          <img
            src="/images/gabala.webp"
            alt="Caspian Sea views from the Nardaran climbing area"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Important information */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Important Information</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-4">Before You Go</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'What to bring', icon: '🎒', text: 'Sunscreen, water, comfortable clothes, climbing gear, helmet' },
              { label: 'Not suitable for', icon: '⚠️', text: 'People afraid of heights; people without climbing experience' },
              { label: 'Not allowed', icon: '🚫', text: 'Alcohol and drugs' },
              { label: 'Best seasons', icon: '📅', text: 'Spring and autumn; summer mornings and evenings; calm sunny days in winter' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-2xl px-5 py-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-2">
            <div className="border-l-4 border-accent bg-accent/10 rounded-r-2xl px-5 py-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Winter conditions:</strong> Winter visits are subject to wind — check conditions before heading out.
              </p>
            </div>
            <div className="border-l-4 border-accent bg-accent/10 rounded-r-2xl px-5 py-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Skill level:</strong> Recommended for intermediate and experienced climbers. Beginners must be accompanied by a trained guide.
              </p>
            </div>
          </div>
        </section>

        {/* Inline photo 4 */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
          {/* TODO: Replace with rock climbing photo 4 */}
          <img
            src="/images/guba.webp"
            alt="Views from Nardaran rock climbing area, Absheron Peninsula"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Difficulty & details bar */}
        <section>
          <div className="bg-primary rounded-2xl px-6 py-5">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-3">At a Glance</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { label: 'Location', value: 'Nardaran, Absheron Peninsula, Baku' },
                { label: 'Distance from Baku', value: '40 minutes' },
                { label: 'Difficulty', value: 'UIAA grades 4–7' },
                { label: 'Type', value: 'Top rope & lead climbing' },
                { label: 'Best season', value: 'Spring & Autumn' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-blue-300 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border border-gray-100 rounded-2xl px-8 py-8 text-center shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Ready to Climb?</h2>
          <p className="text-gray-600 mb-5 leading-relaxed max-w-xl mx-auto">
            Book this experience with Lumivara Travel — we handle transfers, guides, and gear so you can focus on the climb.
          </p>
          <Link
            href="/inquiry"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Book This Experience
          </Link>
        </section>

      </div>
    </>
  )
}
