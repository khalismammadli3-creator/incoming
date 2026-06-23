'use client'

import { useState } from 'react'
import { Destination } from '@/lib/destinations'

interface FAQSectionProps {
  destination: Destination
}

export default function FAQSection({ destination }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-10 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Have Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {destination.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
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

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-3.5 rounded-full font-bold hover:bg-accent-hover transition-colors"
          >
            Ask Our Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
