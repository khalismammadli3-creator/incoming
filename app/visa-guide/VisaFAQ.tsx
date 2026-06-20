'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Can I extend my Azerbaijan e-Visa once I arrive?',
    answer:
      'No — the Azerbaijan e-Visa cannot be extended inside the country. If you wish to stay longer, you must leave Azerbaijan and submit a new e-Visa application, or apply for a traditional long-stay visa through an Azerbaijani embassy before your trip.',
  },
  {
    question: 'Is the Azerbaijan e-Visa single or multiple entry?',
    answer:
      'The standard Azerbaijan e-Visa is single entry only. Once you leave Azerbaijan, the visa is no longer valid. If you plan to re-enter — for example after visiting Georgia or Armenia — you will need to apply for a new e-Visa.',
  },
  {
    question: 'What should I do if my Azerbaijan visa application is rejected?',
    answer:
      'If your ASAN visa application is rejected, you will receive a notification by email. You can contact the official portal support team at evisa.gov.az for guidance, or reach out to the nearest Azerbaijani embassy or consulate to explore alternative visa options for your nationality.',
  },
]

export default function VisaFAQ() {
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
