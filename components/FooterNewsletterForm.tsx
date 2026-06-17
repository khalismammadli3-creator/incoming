'use client'

import { useState } from 'react'

export default function FooterNewsletterForm() {
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

  if (submitted) {
    return (
      <p className="text-green-400 text-sm font-medium py-2">
        ✓ Subscribed! Thanks for joining.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="hidden" name="message" value="Newsletter subscription" />
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent"
      />
      {error && (
        <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-primary py-2.5 rounded-lg font-bold text-sm hover:bg-accent-hover transition-colors disabled:opacity-60"
      >
        {loading ? 'Subscribing…' : 'Subscribe'}
      </button>
    </form>
  )
}
