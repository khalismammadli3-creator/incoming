'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { destinations } from '@/lib/destinations'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [destinationsOpen, setDestinationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              className="w-8 h-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2 C6 6 6 18 12 22 C18 18 18 6 12 2" />
              <path d="M12 7 L14 12 L12 17 L10 12 Z" fill="currentColor" />
            </svg>
            <span
              className={`font-bold text-lg transition-colors ${
                scrolled
                  ? 'text-secondary dark:text-white'
                  : 'text-white'
              } group-hover:text-primary`}
            >
              Azerbaijan Explorer
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'
              }`}
            >
              Home
            </Link>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'
                }`}
              >
                Destinations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {destinationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 grid grid-cols-1 gap-0">
                  {destinations.map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/${dest.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-accent dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-200">{dest.name}</span>
                      <span className="ml-auto text-xs text-gray-400">{dest.category}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md ${
              scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'
            }`}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-700 shadow-xl">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-primary"
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setDestinationsOpen(!destinationsOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-primary"
              >
                Destinations
                <svg className={`w-4 h-4 transition-transform ${destinationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {destinationsOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {destinations.map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/${dest.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-primary"
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-primary"
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => { toggleTheme(); }}
                className="p-2 text-gray-600 dark:text-gray-300"
              >
                {theme === 'dark' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
