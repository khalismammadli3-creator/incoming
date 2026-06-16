'use client'

import { useState } from 'react'
import Link from 'next/link'
import { destinations } from '@/lib/destinations'

export default function HeroSection() {
  const [selectedDest, setSelectedDest] = useState('')
  const [travelDate, setTravelDate] = useState('')
  const [travelers, setTravelers] = useState('2')

  const stats = [
    { value: '10+', label: 'Destinations' },
    { value: '500+', label: 'Tours' },
    { value: '10k+', label: 'Happy Travelers' },
    { value: '4.9★', label: 'Rating' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/azerbaijanhero/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Land of Fire — Azerbaijan
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover
          <span className="block text-primary">Azerbaijan</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
          From the medieval towers of Baku to the eternal flames of Absheron — explore the ancient, the dramatic, and the unforgettable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="#tours"
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Explore Tours
          </Link>
          <Link
            href="#destinations"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary transition-all duration-300"
          >
            View Destinations
          </Link>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-white/70 text-xs font-medium uppercase tracking-wider">Destination</label>
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                className="bg-white/15 border border-white/30 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary appearance-none cursor-pointer"
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
                className="bg-white/15 border border-white/30 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-white/70 text-xs font-medium uppercase tracking-wider">Travelers</label>
              <div className="flex gap-2">
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="flex-1 bg-white/15 border border-white/30 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <option key={n} value={n} className="text-gray-900">{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>
                  ))}
                </select>
                <Link
                  href={selectedDest ? `/${selectedDest}` : '#tours'}
                  className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 mt-auto">
        <div className="bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
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
