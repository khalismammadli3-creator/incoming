'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is there visa on arrival for Indonesian citizens in Azerbaijan?',
    answer:
      'No — Indonesian passport holders cannot obtain a visa on arrival in Azerbaijan. The Azerbaijan e-Visa must be applied for in advance through the official ASAN Visa portal at evisa.gov.az. The process is entirely online and takes as little as 3 hours with urgent processing.',
  },
  {
    question: 'How much does the Azerbaijan visa cost for Indonesian citizens?',
    answer:
      'The total cost of an Azerbaijan e-Visa for Indonesian citizens is $29 USD, made up of a $20 USD government fee and a $9 USD service fee. This is payable online by Visa, Mastercard, UnionPay or JCB card. Several third-party websites charge significantly more — always apply at the official evisa.gov.az portal to pay only the official fee.',
  },
  {
    question: 'Can I extend my Azerbaijan e-Visa after arrival?',
    answer:
      'No — the Azerbaijan e-Visa cannot be extended once you are inside the country. If you need to stay longer than 30 days, you must either leave Azerbaijan and submit a new e-Visa application, or visit the State Migration Service of Azerbaijan in Baku before your permitted stay expires to enquire about longer-stay options.',
  },
  {
    question: 'Can I apply for a family or group visa to Azerbaijan?',
    answer:
      'Yes — the official ASAN Visa portal supports family applications for groups of 2 to 10 persons, and group applications for 10 to 300 persons, all submitted through the same online portal at evisa.gov.az. Each person will receive their own individual e-Visa document.',
  },
]

export default function IndonesiaVisaFAQ() {
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
