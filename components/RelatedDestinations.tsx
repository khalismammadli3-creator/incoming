import { destinations, Destination } from '@/lib/destinations'
import DestinationCard from './DestinationCard'

interface RelatedDestinationsProps {
  destination: Destination
}

export default function RelatedDestinations({ destination }: RelatedDestinationsProps) {
  const related = destination.related
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter((d): d is Destination => d !== undefined)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Explore More</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            You May Also Like
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  )
}
