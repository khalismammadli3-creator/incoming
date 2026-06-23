import { Metadata } from 'next'
import Link from 'next/link'
import IndonesiaVisaFAQ from './IndonesiaVisaFAQ'

export const metadata: Metadata = {
  title: 'Azerbaijan Visa on Arrival for Indonesian Citizens 2026 | Lumivara Travel',
  description:
    'Indonesian passport holders receive a 30-day visa on arrival at Heydar Aliyev International Airport in Baku. No advance application needed. Full guide from Lumivara Travel.',
  keywords: [
    'Azerbaijan visa on arrival Indonesian citizens',
    'Azerbaijan visa Indonesia 2026',
    'Indonesia Azerbaijan visa on arrival',
    'Azerbaijan visa for Indonesian passport',
    'Baku visa on arrival Indonesia',
    'Azerbaijan entry requirements Indonesia',
    'Azerbaijan travel Indonesia',
    'Heydar Aliyev airport visa on arrival',
  ],
  alternates: { canonical: 'https://incoming.lumivaratravel.az/visa-guide/indonesia/' },
  openGraph: {
    title: 'Azerbaijan Visa on Arrival for Indonesian Citizens 2026 | Lumivara Travel',
    description:
      'Indonesian passport holders receive a 30-day visa on arrival at Heydar Aliyev International Airport. No advance application needed.',
    url: 'https://incoming.lumivaratravel.az/visa-guide/indonesia/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Azerbaijan — Baku skyline, Lumivara Travel DMC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azerbaijan Visa on Arrival for Indonesian Citizens 2026 | Lumivara Travel',
    description: 'Indonesian passport holders receive a 30-day visa on arrival at Heydar Aliyev International Airport.',
    images: ['/images/hero.webp'],
  },
}

export default function IndonesiaVisaGuidePage() {
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
          <span className="block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Indonesian Citizens</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-0 mb-5">
            Azerbaijan Visa on Arrival for Indonesian Citizens — Complete 2026 Guide
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Indonesian passport holders receive a visa on arrival at Heydar Aliyev International Airport in Baku. No advance online application is needed — the visa is issued at the airport immigration desk on arrival.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Key Facts</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">Azerbaijan Visa at a Glance — Indonesian Passport</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Indonesian citizens do not need to apply for a visa in advance. The visa is obtained on arrival at Heydar Aliyev International Airport, Baku. Verify the current visa fee at migration.gov.az before travelling.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Visa required', value: 'Yes' },
              { label: 'Visa on arrival', value: 'Yes' },
              { label: 'e-Visa needed', value: 'No' },
              { label: 'Where to get it', value: 'Airport immigration desk' },
              { label: 'Airport', value: 'Heydar Aliyev International, Baku' },
              { label: 'Duration', value: '30 days' },
              { label: 'Entry type', value: 'Single entry' },
              { label: 'Official source', value: 'migration.gov.az' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm flex items-center justify-between gap-4">
                <span className="text-gray-500 text-sm font-medium">{item.label}</span>
                <span className={`font-bold text-right ${item.value === 'No' ? 'text-red-500' : item.value === 'Yes' ? 'text-green-600' : 'text-gray-900'}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What to Bring</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">Documents to Present at the Immigration Desk</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">Have the following ready when you arrive at Heydar Aliyev International Airport:</p>
          <ul className="space-y-3">
            {[
              { icon: '🛂', text: 'Valid Indonesian passport with sufficient remaining validity' },
              { icon: '✈️', text: 'Return or onward ticket confirming you will leave Azerbaijan within 30 days' },
              { icon: '🏨', text: 'Proof of accommodation — hotel reservation or invitation letter from a host in Azerbaijan' },
              { icon: '💵', text: 'Evidence of sufficient funds for your stay (cash or bank statement)' },
              { icon: '📷', text: 'Passport-sized photo — recommended to bring one in case it is requested' },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-5">How to Get Your Azerbaijan Visa on Arrival</h2>
          <ol className="space-y-4">
            {[
              'Arrive at Heydar Aliyev International Airport in Baku',
              'Proceed to the immigration or visa-on-arrival desk before reaching passport control — follow the signs in the arrivals hall',
              'Present your passport and required documents to the immigration officer',
              'Pay the visa fee at the desk (verify the current fee at migration.gov.az before travelling)',
              'Receive your 30-day visa stamp in your passport and proceed to passport control',
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
                <p className="font-semibold text-gray-900 mb-1">Important — Airport Entry Only</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The visa on arrival facility is <strong>only available at Heydar Aliyev International Airport in Baku</strong>. If you are entering Azerbaijan by land border or sea port, you must obtain a visa in advance through the official evisa.gov.az portal or an Azerbaijani embassy before you travel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-6">Frequently Asked Questions — Azerbaijan Visa for Indonesian Citizens</h2>
          <IndonesiaVisaFAQ />
        </section>

        <section className="bg-primary rounded-2xl px-8 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Planning a Trip to Azerbaijan from Indonesia?</h2>
          <p className="text-blue-200 mb-7 leading-relaxed max-w-xl mx-auto">
            Lumivara Travel handles complete itineraries, airport transfers, hotels and private tours across Azerbaijan — tailored for Indonesian travellers and groups.
          </p>
          <Link href="/inquiry" className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5">
            Request a Free Proposal
          </Link>
        </section>

        <p className="text-gray-400 text-xs leading-relaxed text-center border-t border-gray-100 pt-8">
          Visa information is subject to change. Always verify current requirements at migration.gov.az before travelling.
        </p>

      </div>
    </>
  )
}
