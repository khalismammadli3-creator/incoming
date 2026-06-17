'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { destinations } from '@/lib/destinations'

const inputClass = 'w-full px-4 py-3 border border-gray-200 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:border-accent'
const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5'

export default function InquiryForm() {
  const params = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [destination, setDestination] = useState('')
  const [travelDate, setTravelDate] = useState('')
  const [travelers, setTravelers] = useState('')

  useEffect(() => {
    if (params.get('destination')) setDestination(params.get('destination')!)
    if (params.get('date')) setTravelDate(params.get('date')!)
    const t = params.get('travelers')
    if (t && t !== '10+') setTravelers(t)
  }, [params])

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
      if (res.ok) setSubmitted(true)
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Inquiry Received!</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you for your inquiry. Our team will review your request and get back to you within 24 hours with a tailored proposal.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Personal Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Personal Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input type="text" name="name" required placeholder="Your full name" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email Address *</label>
            <input type="email" name="email" required placeholder="your@email.com" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Phone Number</label>
            <input type="tel" name="phone" placeholder="+1 234 567 8900" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Country of Origin *</label>
            <input type="text" name="country" required placeholder="e.g. United Kingdom" className={inputClass} />
          </div>
        </div>
      </div>

      {/* Trip Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Trip Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Destination in Azerbaijan</label>
            <select name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} className={inputClass}>
              <option value="">Select a destination</option>
              {destinations.map((d) => (
                <option key={d.slug} value={d.slug}>{d.name}</option>
              ))}
              <option value="multi">Multiple destinations / Custom</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Number of Travelers *</label>
            <select name="travelers" value={travelers} onChange={(e) => setTravelers(e.target.value)} required className={inputClass}>
              <option value="">Select number of travelers</option>
              {[1,2,3,4,5,6,7,8,9].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>
              ))}
              <option value="11-20">11–20 Travelers</option>
              <option value="21-50">21–50 Travelers</option>
              <option value="50+">50+ Travelers</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Travel Date / Start Date</label>
            <input
              type="date"
              name="travel_date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              onClick={(e) => (e.currentTarget as HTMLInputElement).showPicker?.()}
              className={inputClass + ' cursor-pointer'}
            />
          </div>
          <div>
            <label className={labelClass}>Group Type *</label>
            <select name="group_type" required className={inputClass}>
              <option value="">Select group type</option>
              <option value="leisure">Leisure / Holiday</option>
              <option value="corporate">Corporate</option>
              <option value="mice">MICE (Meetings, Incentives, Conferences, Events)</option>
              <option value="incentive">Incentive Travel</option>
              <option value="educational">Educational / Study Tour</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Accommodation Preference</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'budget', label: 'Budget', sub: '2–3 star' },
                { value: 'standard', label: 'Standard', sub: '3–4 star' },
                { value: 'luxury', label: 'Luxury', sub: '4–5 star' },
              ].map((opt) => (
                <label key={opt.value} className="flex items-center gap-3 p-4 border border-gray-200 bg-gray-50 rounded-xl cursor-pointer hover:border-accent transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                  <input type="radio" name="accommodation" value={opt.value} defaultChecked={opt.value === 'standard'} className="accent-[var(--color-accent,#c49a3c)]" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{opt.label}</div>
                    <div className="text-gray-500 text-xs">{opt.sub}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Additional Information</h3>
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Special Requests or Notes</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your interests, dietary requirements, mobility needs, specific sites you'd like to visit, or any other details that will help us plan your perfect trip..."
              className={inputClass + ' resize-none'}
            />
          </div>
          <div>
            <label className={labelClass}>How did you hear about us?</label>
            <select name="referral" className={inputClass}>
              <option value="">Select an option</option>
              <option value="google">Google Search</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Referral from a colleague or friend</option>
              <option value="travel_agent">Travel agent / Partner</option>
              <option value="event">Travel fair or event</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or email us at info@lumivaratravel.com.</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-primary py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-colors disabled:opacity-60"
      >
        {loading ? 'Submitting…' : 'Submit Inquiry'}
      </button>

      <p className="text-gray-400 text-xs text-center">
        We will respond within 24 hours with a personalised proposal.
      </p>
    </form>
  )
}
