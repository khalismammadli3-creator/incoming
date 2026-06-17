'use client'

import { useState } from 'react'
import { destinations } from '@/lib/destinations'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const form = e.currentTarget
    const data = new FormData(form)
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

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for reaching out. We will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 border border-gray-200 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-gray-200 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 234 567 8900"
            className="w-full px-4 py-3 border border-gray-200 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Destination Interest</label>
          <select
            name="destination"
            className="w-full px-4 py-3 border border-gray-200 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:border-accent"
          >
            <option value="">Select a destination</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
            <option value="custom">Custom Itinerary</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your travel plans, group size, preferred dates, and any special requirements..."
          className="w-full px-4 py-3 border border-gray-200 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:border-accent resize-none"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-primary py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-colors disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
