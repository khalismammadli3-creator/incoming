'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://formspree.io/f/xvznnrbp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/15 rounded-full mb-6">
          <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Get Exclusive Travel Tips
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for Azerbaijan travel guides, seasonal deals, and hidden gems — delivered monthly.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-green-600 font-semibold text-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            You&apos;re subscribed! Welcome aboard.
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="hidden" name="message" value="Newsletter subscription" />
              <input
                type="email"
                name="email"
                value={undefined}
                onChange={undefined}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 border border-gray-300 bg-white text-gray-900 rounded-full focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-accent text-primary px-7 py-3.5 rounded-full font-bold hover:bg-accent-hover transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {loading ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {error && (
              <p className="text-red-500 text-sm mt-3">Something went wrong. Please try again.</p>
            )}
          </>
        )}

        <p className="text-gray-400 text-xs mt-4">
          No spam, ever. Unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  )
}
