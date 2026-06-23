import { Metadata } from 'next'
import Link from 'next/link'
import CostFAQ from './CostFAQ'

export const metadata: Metadata = {
  title: 'Azerbaijan Visa Cost 2026 — Official Fee Guide | Lumivara Travel',
  description:
    'The official Azerbaijan e-Visa costs $29 USD ($20 government fee + $9 service fee). Learn the true cost and avoid overpaying on third-party sites. Apply at evisa.gov.az.',
  keywords: [
    'Azerbaijan visa cost 2026',
    'how much is Azerbaijan visa fee',
    'Azerbaijan e-visa price',
    'Azerbaijan visa fee official',
    'Azerbaijan visa cost for tourists',
    'Azerbaijan e-Visa fee',
    'ASAN visa fee',
    'Azerbaijan visa fee USD',
  ],
  alternates: { canonical: 'https://incoming.lumivaratravel.az/visa-guide/cost/' },
  openGraph: {
    title: 'Azerbaijan Visa Cost 2026 — Official Fee Guide | Lumivara Travel',
    description:
      'The official Azerbaijan e-Visa costs $29 USD. Avoid third-party sites charging $60–$130 for the same visa — always apply at evisa.gov.az.',
    url: 'https://incoming.lumivaratravel.az/visa-guide/cost/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Azerbaijan — Baku skyline, Lumivara Travel DMC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azerbaijan Visa Cost 2026 — Official Fee Guide | Lumivara Travel',
    description:
      'The official Azerbaijan e-Visa costs $29 USD. Avoid third-party sites charging $60–$130. Always apply at evisa.gov.az.',
    images: ['/images/hero.webp'],
  },
}

export default function VisaCostPage() {
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
          <span className="block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Visa Fees</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-0 mb-5">
            Azerbaijan Visa Cost 2026 — How Much Does It Really Cost?
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Many travellers are confused about the true Azerbaijan visa cost because third-party websites charge significantly more than the official fee. This guide breaks down the exact official costs directly from the ASAN Visa government portal at evisa.gov.az.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">

        {/* Official fee breakdown */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Official Fees</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">Official Azerbaijan e-Visa Fee Breakdown</h2>
          <div className="bg-white border-2 border-accent/30 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-accent/10 px-6 py-4 border-b border-accent/20">
              <p className="font-semibold text-gray-900 text-sm uppercase tracking-wider">2026 Official Fee — evisa.gov.az</p>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { label: 'Government fee', value: '$20 USD', note: '' },
                { label: 'ASAN service fee', value: '$9 USD', note: '' },
                { label: 'Total official fee', value: '$29 USD', bold: true },
                { label: 'Urgent processing (3 hours)', value: '$29 USD', note: 'Please verify the current urgent processing fee directly at evisa.gov.az as fees may vary' },
              ].map((item) => (
                <div key={item.label} className={`flex items-center justify-between px-6 py-4 gap-2 ${item.bold ? 'bg-accent/5' : ''}`}>
                  <div>
                    <span className={`${item.bold ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{item.label}</span>
                    {item.note && <span className="ml-2 text-xs text-gray-400">{item.note}</span>}
                  </div>
                  <span className={`flex-shrink-0 ${item.bold ? 'font-bold text-accent text-xl' : 'font-semibold text-gray-900'}`}>{item.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Payment methods accepted:</strong> Visa, Mastercard, UnionPay, JCB</p>
            </div>
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
                <p className="font-semibold text-gray-900 mb-1">Warning — Avoid Overpaying</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Third-party visa websites charge between <strong>$60–$130 USD</strong> for the same Azerbaijan e-Visa. The official fee is <strong>$29 USD</strong>. Always apply at <strong>evisa.gov.az</strong> to pay the correct amount — there is no advantage to using a third-party service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is included */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Fee Includes</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">What Is Included in the $29 USD Fee</h2>
          <ul className="space-y-3">
            {[
              { icon: '✅', text: 'Government visa processing fee' },
              { icon: '✅', text: 'ASAN Visa service fee' },
              { icon: '✅', text: 'Email delivery of your approved e-Visa document' },
              { icon: '✅', text: 'No hidden charges — the total cost is exactly $29 USD' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-gray-700 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What is NOT included */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Not Included</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">What Is NOT Included in the Fee</h2>
          <ul className="space-y-3">
            {[
              { icon: '❌', text: 'Travel insurance — recommended but not mandatory for the e-Visa application' },
              { icon: '❌', text: 'Embassy visa fees — these are different, typically higher, and apply only to those needing multiple-entry or long-stay visas not available through the e-Visa system' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-gray-700 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Is the fee refundable */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Refund Policy</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">Is the Azerbaijan Visa Fee Refundable?</h2>
          <p className="text-gray-600 leading-relaxed">
            If your application is <strong>rejected</strong>, the <strong>$9 USD ASAN service fee is refunded</strong> to your original payment method. However, the <strong>$20 USD government processing fee is non-refundable</strong> under any circumstances — including rejection, errors in your application, or choosing not to travel. Always carefully double-check your passport number, date of birth, travel dates, and passport photo before submitting your application at evisa.gov.az.
          </p>
        </section>

        {/* Group and family applications */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Groups &amp; Families</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">Group and Family Application Fees</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            The official ASAN Visa portal supports family applications for <strong>2–10 persons</strong> and group applications for <strong>10–300 persons</strong>, all submitted through the same portal. The visa cost per person remains the same regardless of group size — each individual pays the standard <strong>$29 USD</strong> fee and receives their own e-Visa document.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { label: 'Individual application', value: '$29 USD per person' },
              { label: 'Family application (2–10)', value: '$29 USD per person' },
              { label: 'Group application (10–300)', value: '$29 USD per person' },
              { label: 'Urgent processing (any size)', value: '$29 USD per person' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm flex items-center justify-between gap-2">
                <span className="text-gray-500 text-sm font-medium">{item.label}</span>
                <span className="font-bold text-gray-900 text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">Frequently Asked Questions — Azerbaijan Visa Cost</h2>
          <CostFAQ />
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
          Visa fees are subject to change. Always verify current fees at evisa.gov.az before applying.
        </p>

      </div>
    </>
  )
}
