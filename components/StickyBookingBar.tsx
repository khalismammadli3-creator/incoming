'use client'

import { useEffect, useState } from 'react'
import { Destination } from '@/lib/destinations'

interface StickyBookingBarProps {
  destination: Destination
}

export default function StickyBookingBar({ destination }: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div>
              <div className="font-bold text-gray-900">{destination.title}</div>
              <div className="text-gray-500 text-sm">{destination.duration}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/994501234567?text=Hi%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(destination.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-accent text-primary px-8 py-3 rounded-full font-bold hover:bg-accent-hover transition-colors text-center"
            >
              Book Now
            </a>
            <a
              href="/contact"
              className="flex-1 sm:flex-none border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-primary transition-colors text-center"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
