import { Metadata } from 'next'
import Link from 'next/link'
import ThailandVisaFAQ from './ThailandVisaFAQ'

export const metadata: Metadata = {
  title: 'Azerbaijan Visa for Thai Citizens 2026 | Lumivara Travel',
  description:
    'Complete guide to the Azerbaijan e-Visa for Thai passport holders. Apply online at evisa.gov.az — $29 USD total fee, 3 working days standard processing, single entry, up to 30 days stay. No visa on arrival for Thai citizens.',
  keywords: [
    'Azerbaijan visa for Thai citizens',
    'Azerbaijan e-visa Thailand 2026',
    'how to apply Azerbaijan visa from Thailand',
    'Azerbaijan visa fee for Thai nationals',
    'Azerbaijan e-Visa Thailand',
    'Azerbaijan visa requirements Thailand',
    'ASAN visa Thailand',
    'evisa Azerbaijan Thailand',
  ],
  alternates: { canonical: 'https://incoming.lumivaratravel.az/visa-guide/thailand/' },
  openGraph: {
    title: 'Azerbaijan Visa for Thai Citizens 2026 | Lumivara Travel',
    description:
      'Thai passport holders can apply for the Azerbaijan e-Visa online at evisa.gov.az — $29 USD, 3 working days, single entry, up to 30 days. No visa on arrival.',
    url: 'https://incoming.lumivaratravel.az/visa-guide/thailand/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Azerbaijan — Baku skyline, Lumivara Travel DMC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azerbaijan Visa for Thai Citizens 2026 | Lumivara Travel',
    description:
      'Thai passport holders can apply for the Azerbaijan e-Visa online — $29 USD, 3 working days, single entry. No visa on arrival for Thai citizens.',
    images: ['/images/hero.webp'],
  },
}

export default function ThailandVisaGuidePage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/visa-guide" className="inline-flex items-center gap-1.5 text-accent/80 hover:text-accent text-sm font-medium mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Azerbaijan Visa Guide
          </Link>
          <span className="block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Thai Citizens</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-0 mb-5">
            Azerbaijan Visa for Thai Citizens — Complete 2026 Guide
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Thai passport holders are eligible for the Azerbaijan e-Visa and can apply entirely online without visiting an embassy. Note: there is no Azerbaijan visa on arrival for Thai citizens — the e-Visa must be obtained in advance through the official portal.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Key Facts</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">Azerbaijan Visa at a Glance — Thai Passport</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            The Azerbaijan visa fee for Thai nationals in 2026 is <strong>$29 USD</strong> in total — paid directly through the official government portal at evisa.gov.az.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Visa required', value: 'Yes' },
              { label: 'Visa on arrival', value: 'No' },
              { label: 'e-Visa available', value: 'Yes' },
              { label: 'Official portal', value: 'evisa.gov.az' },
              { label: 'Total fee', value: '$29 USD' },
              { label: 'Standard processing', value: '3 working days' },
              { label: 'Urgent processing', value: '3 hours' },
              { label: 'Stay permitted', value: 'Up to 30 days' },
              { label: 'Visa validity', value: '90 days from issuance' },
              { label: 'Entry type', value: 'Single entry' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm flex items-center justify-between gap-4">
                <span className="text-gray-500 text-sm font-medium">{item.label}</span>
                <span className={`font-bold text-right ${item.value === 'No' ? 'text-red-500' : item.value === 'Yes' ? 'text-green-600' : 'text-gray-900'}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Documents Required</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">What You Need to Apply</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">Before submitting your Azerbaijan e-Visa application on the ASAN Visa portal, have the following documents ready:</p>
          <ul className="space-y-3">
            {[
              { icon: '🛂', text: 'Valid Thai passport with at least 3 months of validity remaining beyond the e-Visa expiry date' },
              { icon: '📷', text: 'Digital passport photo with a plain white background (clear, recent, facing forward)' },
              { icon: '📧', text: 'A valid email address — your approved e-Visa will be sent here' },
              { icon: '💳', text: 'Credit or debit card accepted by the portal: Visa, Mastercard, UnionPay or JCB' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-gray-700 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Step by Step</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">How to Apply — Azerbaijan e-Visa from Thailand</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The Azerbaijan e-Visa application steps for Thai citizens below cover the full process on the official ASAN Visa portal — from registration to receiving your visa by email:
          </p>
          <ol className="space-y-4">
            {[
              'Go to evisa.gov.az — the only official government portal for Azerbaijan e-Visa applications',
              "Click 'New Application' on the homepage",
              'Fill in your personal details and Thai passport information accurately',
              'Upload your passport bio page and your digital passport photo',
              'Pay the official Azerbaijan visa fee of $29 USD securely online by card',
              'Receive your approved Azerbaijan e-Visa by email within 3 working days (or 3 hours if urgent)',
              'Print the e-Visa and present it on arrival at Heydar Aliyev International Airport, Baku',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-accent text-primary font-bold text-sm rounded-full flex items-center justify-center">{i + 1}</span>
                <span className="text-gray-700 leading-relaxed pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <div className="border-l-4 border-accent bg-accent/10 rounded-r-2xl px-6 py-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Warning — Avoid Third-Party Visa Websites</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Always apply directly at <strong>evisa.gov.az</strong>. Several third-party websites charge up to $69 USD for the same visa — if you are wondering how much the Azerbaijan visa costs for Thai nationals, the answer is $29 USD through the official portal, not the inflated prices charged elsewhere. Lumivara Travel does not process visas — we always recommend applying through the official source only.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-6">Frequently Asked Questions — Azerbaijan Visa for Thai Citizens</h2>
          <ThailandVisaFAQ />
        </section>

        <section className="bg-primary rounded-2xl px-8 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Planning a Trip to Azerbaijan from Thailand?</h2>
          <p className="text-blue-200 mb-7 leading-relaxed max-w-xl mx-auto">
            Lumivara Travel handles complete itineraries, airport transfers, hotels and private tours across Azerbaijan — tailored for Thai travellers and groups.
          </p>
          <Link href="/inquiry" className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5">
            Request a Free Proposal
          </Link>
        </section>

        <p className="text-gray-400 text-xs leading-relaxed text-center border-t border-gray-100 pt-8">
          Visa information is subject to change. Always verify current requirements at evisa.gov.az before applying.
        </p>

      </div>
    </>
  )
}
