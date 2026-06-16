import Link from 'next/link'
import Image from 'next/image'
import { Destination } from '@/lib/destinations'

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/${destination.slug}`} className="group block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {destination.category}
            </span>
          </div>
          {/* Difficulty */}
          <div className="absolute top-3 right-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
              destination.difficulty === 'Easy'
                ? 'bg-green-500 text-white'
                : destination.difficulty === 'Moderate'
                ? 'bg-yellow-500 text-white'
                : 'bg-red-500 text-white'
            }`}>
              {destination.difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-accent transition-colors">
                {destination.name}
              </h3>
              <p className="text-gray-500 text-sm mt-0.5">{destination.region}</p>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <div className="text-xs text-gray-400">From</div>
              <div className="font-bold text-accent text-lg">{destination.price}</div>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
            {destination.tagline}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            {/* Duration */}
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {destination.duration.split('/')[0].trim()}
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-4 h-4 text-accent fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-gray-500 text-xs ml-1">4.9</span>
            </div>

            {/* Arrow */}
            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
              <svg className="w-4 h-4 text-accent group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
