import { Metadata } from 'next'
import Link from 'next/link'
import VisaFAQ from './VisaFAQ'

export const metadata: Metadata = {
  title: 'Azerbaijan Visa Guide 2026 | Lumivara Travel',
  description:
    'Complete guide to the Azerbaijan e-Visa (ASAN Visa): requirements, processing times, step-by-step application, and FAQs. Apply online at evisa.gov.az for single-entry stays of up to 30 days.',
  keywords: [
    'Azerbaijan visa',
    'Azerbaijan e-Visa',
    'Azerbaijan visa requirements',
    'ASAN visa',
    'evisa Azerbaijan',
    'Azerbaijan visa guide',
    'how to get Azerbaijan visa',
  ],
  alternates: { canonical: 'https://incoming.lumivaratravel.az/visa-guide/' },
  openGraph: {
    title: 'Azerbaijan Visa Guide 2026 | Lumivara Travel',
    description:
      'Everything you need to know about the Azerbaijan e-Visa — requirements, ASAN Visa application steps, processing times and FAQs.',
    url: 'https://incoming.lumivaratravel.az/visa-guide/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Azerbaijan — Baku skyline, Lumivara Travel DMC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azerbaijan Visa Guide 2026 | Lumivara Travel',
    description:
      'Everything you need to know about the Azerbaijan e-Visa — requirements, ASAN Visa application steps, processing times and FAQs.',
    images: ['/images/hero.webp'],
  },
}

export default function VisaGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Travel Information</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            Azerbaijan Visa Guide — Everything You Need to Know
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Applying for an Azerbaijan e-Visa is straightforward. This guide walks you through the ASAN Visa system, requirements, processing times, and step-by-step application instructions.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Section 1 — What is the e-Visa */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Overview</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">What is the Azerbaijan e-Visa?</h2>
          <p className="text-gray-600 leading-relaxed">
            Azerbaijan offers an electronic visa — the <strong>Azerbaijan e-Visa</strong> — through the official <strong>ASAN Visa</strong> system. This allows eligible travellers from most countries to apply for their Azerbaijan visa entirely online, without visiting an embassy or consulate. Once approved, the e-Visa is sent directly to your email and must be presented on arrival. The ASAN Visa portal is operated by the State Agency for Public Service and Social Innovations under the President of Azerbaijan and is the only government-authorised online application channel.
          </p>
        </section>

        {/* Warning box */}
        <section>
          <div className="border-l-4 border-accent bg-accent/10 rounded-r-2xl px-6 py-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Important — Use the Official Portal Only</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Always apply through the official government portal at <strong>evisa.gov.az</strong>. Several third-party websites mimic the official portal and charge additional unnecessary fees. Lumivara Travel does not process visas on your behalf — we recommend applying directly through the official source.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Requirements */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Requirements</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">Azerbaijan Visa Requirements</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Before starting your Azerbaijan e-Visa application through the ASAN Visa system, make sure you have the following ready:
          </p>
          <ul className="space-y-3">
            {[
              { icon: '🛂', text: 'A valid passport with at least 6 months of validity remaining beyond your planned travel dates' },
              { icon: '📷', text: 'A digital passport-style photo (clear, recent, plain background)' },
              { icon: '📧', text: 'A valid email address to receive your e-Visa confirmation' },
              { icon: '💳', text: 'A credit or debit card to pay the application fee online' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-gray-700 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3 — Processing times */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Processing Times</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">Processing Times &amp; Visa Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Standard Processing', value: '3 working days' },
              { label: 'Urgent Processing', value: '3 hours' },
              { label: 'Visa Validity', value: 'Up to 90 days from issuance' },
              { label: 'Permitted Stay', value: 'Up to 30 days' },
              { label: 'Entry Type', value: 'Single entry' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm flex items-center justify-between gap-4">
                <span className="text-gray-500 text-sm font-medium">{item.label}</span>
                <span className="text-gray-900 font-bold text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — How to apply */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Step by Step</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">How to Apply for an Azerbaijan e-Visa</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Follow these steps to complete your Azerbaijan visa application through the ASAN Visa portal at evisa.gov.az:
          </p>
          <ol className="space-y-4">
            {[
              'Visit the official ASAN Visa portal at evisa.gov.az',
              "Select 'New Application' from the homepage",
              'Fill in your passport details and personal information accurately',
              'Upload your digital passport photo and any required supporting documents',
              'Pay the Azerbaijan e-Visa fee securely online by credit or debit card',
              'Receive your approved e-Visa by email within your chosen processing time',
              'Print or save your e-Visa digitally — you will need to present it on arrival',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-accent text-primary font-bold text-sm rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-700 leading-relaxed pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 5 — FAQ */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-6">Frequently Asked Questions</h2>
          <VisaFAQ />
        </section>

        {/* Country-specific guides */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Country Guides</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">Visa Guides by Nationality</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Need country-specific visa information? Select your nationality below — requirements differ depending on whether your country receives visa on arrival or must apply via e-Visa in advance.
          </p>

          {/* Visa on Arrival */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                Visa on Arrival at Baku Airport
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { href: '/visa-guide/china', flag: '🇨🇳', code: 'CN', title: 'Azerbaijan Visa on Arrival for Chinese Citizens', country: 'China' },
                { href: '/visa-guide/indonesia', flag: '🇮🇩', code: 'ID', title: 'Azerbaijan Visa on Arrival for Indonesian Citizens', country: 'Indonesia' },
                { href: '/visa-guide/israel', flag: '🇮🇱', code: 'IL', title: 'Azerbaijan Visa on Arrival for Israeli Citizens', country: 'Israel' },
                { href: '/visa-guide/japan', flag: '🇯🇵', code: 'JP', title: 'Azerbaijan Visa on Arrival for Japanese Citizens', country: 'Japan' },
                { href: '/visa-guide/korea', flag: '🇰🇷', code: 'KR', title: 'Azerbaijan Visa on Arrival for South Korean Citizens', country: 'South Korea' },
                { href: '/visa-guide/malaysia', flag: '🇲🇾', code: 'MY', title: 'Azerbaijan Visa on Arrival for Malaysian Citizens', country: 'Malaysia' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.title}
                  className="group flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl px-4 py-6 shadow-sm hover:border-green-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-5xl mb-3 drop-shadow-sm">{item.flag}</span>
                  <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">{item.code}</span>
                  <p className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors text-sm leading-snug">{item.country}</p>
                  <span className="mt-2 text-xs text-green-600/80 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">View guide →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* e-Visa required */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-accent/10 text-primary border border-accent/30 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                e-Visa Required — Apply Online in Advance
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { href: '/visa-guide/india', flag: '🇮🇳', code: 'IN', title: 'Azerbaijan Visa for Indian Citizens', country: 'India' },
                { href: '/visa-guide/pakistan', flag: '🇵🇰', code: 'PK', title: 'Azerbaijan Visa for Pakistani Citizens', country: 'Pakistan' },
                { href: '/visa-guide/thailand', flag: '🇹🇭', code: 'TH', title: 'Azerbaijan Visa for Thai Citizens', country: 'Thailand' },
                { href: '/visa-guide/vietnam', flag: '🇻🇳', code: 'VN', title: 'Azerbaijan Visa for Vietnamese Citizens', country: 'Vietnam' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.title}
                  className="group flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl px-4 py-6 shadow-sm hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-5xl mb-3 drop-shadow-sm">{item.flag}</span>
                  <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">{item.code}</span>
                  <p className="font-semibold text-gray-800 group-hover:text-accent transition-colors text-sm leading-snug">{item.country}</p>
                  <span className="mt-2 text-xs text-accent/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">View guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Fee guide link */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Fee Guide</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">Azerbaijan Visa Cost</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Confused about how much the Azerbaijan visa actually costs? Many third-party sites charge $60–$130 for a visa that costs $29 USD on the official portal.
          </p>
          <Link
            href="/visa-guide/cost"
            className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:border-accent/40 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-accent transition-colors">Azerbaijan Visa Cost 2026 — Official Fee Guide</p>
                <p className="text-sm text-gray-500">$29 USD official fee · What's included · Refund policy · Group fees</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>

        {/* Rejection reasons link */}
        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Rejection Guide</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">Visa Rejection Reasons</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Want to make sure your application is approved first time? Learn the most common reasons applications are rejected and how to avoid them.
          </p>
          <Link
            href="/visa-guide/rejection-reasons"
            className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:border-accent/40 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-accent transition-colors">Azerbaijan Visa Rejection Reasons — How to Avoid Denial</p>
                <p className="text-sm text-gray-500">Common mistakes · What happens if rejected · How to reapply</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>

        {/* Section 6 — CTA */}
        <section className="bg-primary rounded-2xl px-8 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Plan the Rest of Your Trip?</h2>
          <p className="text-blue-200 mb-7 leading-relaxed max-w-xl mx-auto">
            Lumivara Travel handles airport transfers, hotels, private tours, and complete Azerbaijan itineraries — so you can focus on the experience, not the logistics.
          </p>
          <Link
            href="/inquiry"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Request a Free Proposal
          </Link>
        </section>

        {/* Disclaimer */}
        <p className="text-gray-400 text-xs leading-relaxed text-center border-t border-gray-100 pt-8">
          Visa requirements and processes are subject to change. This page is for general guidance only — always confirm the latest Azerbaijan visa requirements directly on the official evisa.gov.az portal before applying.
        </p>

      </div>
    </>
  )
}
