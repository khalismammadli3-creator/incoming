import { Metadata } from 'next'
import Link from 'next/link'
import RejectionFAQ from './RejectionFAQ'

export const metadata: Metadata = {
  title: 'Azerbaijan Visa Rejection Reasons 2026 — How to Avoid Denial | Lumivara Travel',
  description:
    'Learn the most common reasons Azerbaijan e-Visa applications are rejected and how to avoid them. Correct mistakes before reapplying.',
  keywords: [
    'Azerbaijan visa rejection reasons',
    'why was my Azerbaijan visa rejected',
    'Azerbaijan e-visa denied',
    'Azerbaijan visa rejection how to reapply',
    'Azerbaijan e-visa rejection',
    'Azerbaijan visa refused',
    'Azerbaijan visa application rejected',
    'how to avoid Azerbaijan visa rejection',
  ],
  alternates: { canonical: 'https://incoming.lumivaratravel.az/visa-guide/rejection-reasons/' },
  openGraph: {
    title: 'Azerbaijan Visa Rejection Reasons 2026 — How to Avoid Denial | Lumivara Travel',
    description:
      'Learn the most common reasons Azerbaijan e-Visa applications are rejected and how to avoid them. Correct mistakes before reapplying.',
    url: 'https://incoming.lumivaratravel.az/visa-guide/rejection-reasons/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Azerbaijan — Baku skyline, Lumivara Travel DMC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azerbaijan Visa Rejection Reasons 2026 — How to Avoid Denial | Lumivara Travel',
    description:
      'Learn the most common reasons Azerbaijan e-Visa applications are rejected and how to avoid them.',
    images: ['/images/hero.webp'],
  },
}

export default function RejectionReasonsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/visa-guide" className="inline-flex items-center gap-1.5 text-accent/80 hover:text-accent text-sm font-medium mb-3 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Azerbaijan Visa Guide
          </Link>
          <span className="block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Visa Rejections</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-0 mb-5">
            Azerbaijan e-Visa Rejection Reasons — And How to Avoid Them
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            The Azerbaijan e-Visa has a very high approval rate — most applications from eligible countries are approved when submitted correctly. Understanding the most common rejection reasons helps you avoid mistakes and get approved on your first attempt.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">

        {/* Most common rejection reasons */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Common Reasons</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">Most Common Azerbaijan e-Visa Rejection Reasons</h2>
          <div className="space-y-4">
            {[
              {
                number: '01',
                title: 'Incorrect or mismatched information',
                detail: 'Name, passport number, or date of birth entered differently from your passport. Always copy details exactly as they appear — including spelling, spacing, and punctuation.',
              },
              {
                number: '02',
                title: 'Poor quality passport photo',
                detail: 'Blurry photo, wrong background colour, wearing glasses or a hat, or photo not meeting size requirements. Use a recent, clear photo with a plain white background, facing forward.',
              },
              {
                number: '03',
                title: 'Poor quality passport scan',
                detail: 'Blurry scan, glare, or the MRZ lines (the two rows of numbers at the bottom of your passport bio page) not fully visible. Scan in good lighting and ensure all text is sharp.',
              },
              {
                number: '04',
                title: 'Passport validity issues',
                detail: 'Your passport must be valid for at least 3 months beyond the e-Visa expiry date. Check your passport expiry carefully before applying.',
              },
              {
                number: '05',
                title: 'Ineligible nationality',
                detail: 'Only citizens of eligible countries can apply for the Azerbaijan e-Visa. Check the full list of eligible nationalities at evisa.gov.az before applying.',
              },
              {
                number: '06',
                title: 'Previous visa violations',
                detail: 'A history of overstaying or violating visa conditions in Azerbaijan or other countries may result in rejection.',
              },
              {
                number: '07',
                title: 'Incomplete application',
                detail: 'Missing required fields or documents. Review the entire application carefully before submitting — all fields must be completed.',
              },
              {
                number: '08',
                title: 'Security or background check issues',
                detail: 'Applications may be rejected for security reasons without a detailed explanation. There is no further recourse in these cases.',
              },
              {
                number: '09',
                title: 'Travel document mismatch',
                detail: 'The passport used to apply must be the same passport used for travel. If your passport is renewed or replaced after applying, the original e-Visa becomes invalid and a new application is required.',
              },
            ].map((item) => (
              <div key={item.number} className="flex items-start gap-2 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm">
                <span className="flex-shrink-0 text-accent font-bold text-lg font-mono">{item.number}</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Warning box */}
        <section>
          <div className="border-l-4 border-accent bg-accent/10 rounded-r-2xl px-6 py-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Never Submit Duplicate Applications</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Never submit duplicate applications for the same passport at the same time — this will result in automatic rejection. Always wait for a decision on your existing application before submitting a new one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What happens if rejected */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">If Rejected</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">What Happens If Your Visa Is Rejected</h2>
          <ul className="space-y-3">
            {[
              { icon: '📧', text: 'You will receive an email notification with the rejection reason' },
              { icon: '💰', text: 'The government fee ($20 USD) is non-refundable' },
              { icon: '↩️', text: 'The service fee ($9 USD) is refunded to your original payment method if rejected' },
              { icon: '🔄', text: 'You can reapply immediately after correcting the issues — there is no mandatory waiting period' },
              { icon: '🚫', text: 'There is no formal appeal process — reapplication is the only option' },
              { icon: '✅', text: 'A previous rejection does not automatically affect a new application if the issues are corrected' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-gray-700 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to reapply */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Reapplying</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">How to Reapply After a Rejection</h2>
          <ol className="space-y-4">
            {[
              'Read the rejection email carefully to understand the specific reason for denial',
              'Fix all identified issues — incorrect details, photo quality, passport scan, or any other flagged problem',
              'Submit a completely new application at evisa.gov.az — you cannot edit or resubmit the original',
              'Pay the $29 USD fee again (the $9 service fee from your rejected application will have been refunded)',
              'Allow sufficient processing time — 3 working days standard, or 3 hours with urgent processing',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-accent text-primary font-bold text-sm rounded-full flex items-center justify-center">{i + 1}</span>
                <span className="text-gray-700 leading-relaxed pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">Frequently Asked Questions — Rejected Azerbaijan Visa</h2>
          <RejectionFAQ />
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-2xl px-8 py-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Planning Your Azerbaijan Trip?</h2>
          <p className="text-blue-200 mb-3 leading-relaxed max-w-xl mx-auto">
            Lumivara Travel handles complete itineraries, airport transfers and private tours across Azerbaijan — so once your visa is sorted, everything else is taken care of.
          </p>
          <Link href="/inquiry" className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5">
            Request a Free Proposal
          </Link>
        </section>

        {/* Disclaimer */}
        <p className="text-gray-400 text-xs leading-relaxed text-center border-t border-gray-100 pt-8">
          Visa policies are subject to change. Always verify current requirements at evisa.gov.az before applying.
        </p>

      </div>
    </>
  )
}
