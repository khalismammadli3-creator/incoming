'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How much is the Azerbaijan visa fee?',
    answer:
      'The official Azerbaijan e-Visa fee is $29 USD in total — made up of a $20 USD government processing fee and a $9 USD ASAN service fee. This is the only legitimate fee and is paid directly through the official portal at evisa.gov.az.',
  },
  {
    question: 'Is urgent processing more expensive?',
    answer:
      'No — urgent processing costs exactly the same $29 USD as standard processing. The only difference is the turnaround time: urgent applications are processed within 3 hours, while standard applications take up to 3 working days.',
  },
  {
    question: 'Can I get a refund if my visa is rejected?',
    answer:
      'Partially — if your application is rejected, the $9 USD ASAN service fee is refunded to your original payment method. However, the $20 USD government processing fee is non-refundable under any circumstances. If you choose not to travel after approval, neither portion is refunded. Always double-check your details before submitting.',
  },
  {
    question: 'Why do some websites charge $60–$130 for the Azerbaijan visa?',
    answer:
      'Those are third-party agencies adding their own service fee on top of the official $29 USD cost. They are not affiliated with the Azerbaijan government. The official ASAN Visa portal at evisa.gov.az charges $29 USD and is the only authorised application channel. There is no benefit to using a third-party site — it is the same visa, the same process, at a much higher cost.',
  },
]

export default function CostFAQ() {
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
