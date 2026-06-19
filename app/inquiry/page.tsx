import { Metadata } from 'next'
import { Suspense } from 'react'
import InquiryForm from './InquiryForm'

export const metadata: Metadata = {
  title: 'Request a Proposal | Lumivara Travel — Azerbaijan DMC',
  description: 'Submit a travel inquiry to Lumivara Travel\'s Azerbaijan DMC team. Tell us your group size, travel dates and interests — we\'ll send a tailored itinerary and proposal within 24 hours.',
  alternates: { canonical: 'https://incoming.lumivaratravel.az/inquiry/' },
  openGraph: {
    title: 'Request an Azerbaijan Travel Proposal | Lumivara Travel DMC',
    description: 'Submit your group travel inquiry to our Azerbaijan DMC. Bespoke itineraries for leisure groups, corporate travel, MICE and incentive programmes.',
    url: 'https://incoming.lumivaratravel.az/inquiry/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Azerbaijan travel inquiry — Lumivara Travel destination management company' }],
  },
}

export default function InquiryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Plan Your Journey</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">Travel Inquiry</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Tell us about your group and travel plans. We will put together a tailored Azerbaijan itinerary and send you a detailed proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <Suspense>
              <InquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
