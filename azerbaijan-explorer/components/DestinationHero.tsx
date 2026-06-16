import Link from 'next/link'
import { Destination } from '@/lib/destinations'

interface DestinationHeroProps {
  destination: Destination
}

export default function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${destination.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/#tours" className="hover:text-white transition-colors">Destinations</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white font-medium">{destination.name}</span>
        </nav>

        {/* Category + Region */}
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
            {destination.category}
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full">
            {destination.region}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3">
          {destination.name}
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-2xl">
          {destination.tagline}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center gap-2 text-white/90">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{destination.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">From {destination.price} per person</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className={`font-medium ${
              destination.difficulty === 'Easy'
                ? 'text-green-400'
                : destination.difficulty === 'Moderate'
                ? 'text-yellow-400'
                : 'text-red-400'
            }`}>
              {destination.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-white/90">
            {[1,2,3,4,5].map((star) => (
              <svg key={star} className="w-4 h-4 text-primary fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="font-medium ml-1">4.9</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/994501234567?text=Hi%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(destination.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/30"
        >
          Book This Tour
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
