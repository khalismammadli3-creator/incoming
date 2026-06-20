'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { destinations } from '@/lib/destinations'

export default function HeroSection() {
  const router = useRouter()
  const [selectedDest, setSelectedDest] = useState('')
  const [travelDate, setTravelDate] = useState('')
  const [travelers, setTravelers] = useState('2')

  const valueProps = [
    { value: 'Local Experts', label: 'Deep knowledge of every region' },
    { value: 'Tailored Journeys', label: 'Personalised for every group' },
    { value: 'End-to-End Care', label: 'Airport transfers to hotel check-in' },
    { value: 'Multilingual Guides', label: 'English, Russian & more' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (selectedDest) params.set('destination', selectedDest)
    if (travelDate) params.set('date', travelDate)
    if (travelers) params.set('travelers', travelers)
    router.push(`/inquiry?${params.toString()}`)
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <style>{`
        .hero-bg {
          background-image: url('/images/hero-mobile.webp');
        }
        @media (min-width: 769px) {
          .hero-bg {
            background-image: url('/images/hero.webp');
          }
        }
      `}</style>
      <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Land of Fire — Azerbaijan
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover the Land of Fire —
          <span className="block text-accent">Azerbaijan</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
          From the medieval towers of Baku to the eternal flames of Absheron — explore the ancient, the dramatic, and the unforgettable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="#tours"
            className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Explore Tours
          </Link>
          <Link
            href="#destinations"
            className="border-2 border-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            View Destinations
          </Link>
        </div>

        {/* Search / Inquiry Bar */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-white/70 text-xs font-medium uppercase tracking-wider">Destination</label>
                <select
                  value={selectedDest}
                  onChange={(e) => setSelectedDest(e.target.value)}
                  className="bg-white/15 border border-white/30 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-accent appearance-none cursor-pointer"
                >
                  <option value="" className="text-gray-900">All Destinations</option>
                  {destinations.map((d) => (
                    <option key={d.slug} value={d.slug} className="text-gray-900">{d.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white/70 text-xs font-medium uppercase tracking-wider">Travel Date</label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  onClick={(e) => (e.currentTarget as HTMLInputElement).showPicker?.()}
                  className="bg-white/15 border border-white/30 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-accent cursor-pointer w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white/70 text-xs font-medium uppercase tracking-wider">Travelers</label>
                <div className="flex gap-2">
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="flex-1 bg-white/15 border border-white/30 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                  >
                    {[1,2,3,4,5,6,7,8,9].map((n) => (
                      <option key={n} value={n} className="text-gray-900">{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>
                    ))}
                    <option value="10+" className="text-gray-900">10+ Travelers</option>
                  </select>
                  <button
                    type="submit"
                    className="bg-accent text-primary px-6 py-3 rounded-xl font-bold hover:bg-accent-hover transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Value Props Bar */}
      <div className="relative z-10 mt-auto">
        <div className="bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {valueProps.map((prop) => (
                <div key={prop.label} className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-accent">{prop.value}</div>
                  <div className="text-gray-300 text-sm mt-1">{prop.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
