'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Can I get a refund after my Azerbaijan visa is rejected?',
    answer:
      'Partially — if your application is rejected, the $9 USD ASAN service fee is refunded to your original payment method. However, the $20 USD government processing fee is non-refundable under any circumstances. This means a rejection costs you $20 USD, not the full $29 USD.',
  },
  {
    question: 'Can I appeal a rejected Azerbaijan visa?',
    answer:
      'No — there is no formal appeal process for a rejected Azerbaijan e-Visa. The only option is to submit a completely new application at evisa.gov.az after identifying and correcting the reason for rejection. Reapplications are reviewed independently from previous ones.',
  },
  {
    question: 'How soon can I reapply after my Azerbaijan visa is rejected?',
    answer:
      'You can reapply immediately after receiving a rejection notification — there is no mandatory waiting period. However, it is important to read the rejection email carefully, identify the specific issue, and correct it before submitting a new application. Reapplying with the same error will likely result in another rejection.',
  },
  {
    question: 'Will a previous visa rejection affect my new Azerbaijan e-Visa application?',
    answer:
      'Not automatically — each application to the ASAN Visa portal is reviewed independently. A previous rejection does not create a permanent ban or automatically influence the outcome of a new application, provided the issues that caused the original rejection have been corrected.',
  },
]

export default function RejectionFAQ() {
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
