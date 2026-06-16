import Image from 'next/image'
import { Destination } from '@/lib/destinations'

interface GallerySectionProps {
  destination: Destination
}

export default function GallerySection({ destination }: GallerySectionProps) {
  return (
    <section className="py-16 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Visual Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Photo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Large image */}
          <div className="col-span-2 row-span-2 relative h-72 md:h-auto rounded-2xl overflow-hidden group">
            <Image
              src={destination.gallery[0]}
              alt={`${destination.name} gallery 1`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>

          {/* Smaller images */}
          {destination.gallery.slice(1).map((img, idx) => (
            <div key={idx} className="relative h-36 md:h-48 rounded-2xl overflow-hidden group">
              <Image
                src={img}
                alt={`${destination.name} gallery ${idx + 2}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
