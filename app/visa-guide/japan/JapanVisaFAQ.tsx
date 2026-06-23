'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Do Japanese citizens need to apply for a visa before visiting Azerbaijan?',
    answer:
      'No — Japanese passport holders receive a visa on arrival at Heydar Aliyev International Airport in Baku. There is no need to apply online at evisa.gov.az or visit an embassy in advance. Simply arrive at the airport with your valid passport and required documents.',
  },
  {
    question: 'Is visa on arrival available at all Azerbaijan entry points?',
    answer:
      'No — the visa on arrival facility for Japanese citizens is only available at Heydar Aliyev International Airport in Baku. If you plan to enter Azerbaijan by land border or sea port, you must obtain a visa in advance through the official evisa.gov.az portal or an Azerbaijani embassy before travelling.',
  },
  {
    question: 'Can I extend my Azerbaijan visa on arrival?',
    answer:
      'Extensions beyond the initial 30-day stay are not available through the visa on arrival facility. If you need to stay longer, contact the State Migration Service of Azerbaijan in Baku before your permitted stay expires to enquire about longer-stay options.',
  },
  {
    question: 'What documents should I bring for Azerbaijan visa on arrival?',
    answer:
      'You should bring your valid Japanese passport, a return or onward ticket, proof of accommodation (hotel booking or invitation letter), evidence of sufficient funds for your stay, and a passport-sized photo (recommended). Always verify the latest requirements at migration.gov.az before travelling.',
  },
]

export default function JapanVisaFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-light transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            <span className={`flex-shrink-0 w-8 h-8 bg-accent/15 rounded-full flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {openIdx === idx && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
