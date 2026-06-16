'use client'

import { useState } from 'react'
import Link from 'next/link'
import { destinations } from '@/lib/destinations'

export default function SearchSection() {
  const [selectedDest, setSelectedDest] = useState('')
  const [travelDate, setTravelDate] = useState('')
  const [travelers, setTravelers] = useState('2')

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-light rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Find Your Perfect Tour</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Destination</label>
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white text-gray-900 rounded-xl focus:outline-none focus:border-accent"
              >
                <option value="">All Destinations</option>
                {destinations.map((d) => (
                  <option key={d.slug} value={d.slug}>{d.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Travel Date</label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white text-gray-900 rounded-xl focus:outline-none focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Travelers</label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white text-gray-900 rounded-xl focus:outline-none focus:border-accent"
              >
                {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700 opacity-0">Search</label>
              <Link
                href={selectedDest ? `/${selectedDest}` : '#tours'}
                className="bg-accent text-primary px-6 py-3 rounded-xl font-bold hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Tours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
