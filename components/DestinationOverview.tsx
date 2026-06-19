import { Destination } from '@/lib/destinations'

interface DestinationOverviewProps {
  destination: Destination
}

export default function DestinationOverview({ destination }: DestinationOverviewProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About This Tour
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {destination.description}
            </p>

            {/* Highlights */}
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Tour Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-light rounded-xl">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div>
            <div className="bg-light rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 text-lg mb-5">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900 text-sm">{destination.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Region</div>
                    <div className="font-semibold text-gray-900 text-sm">{destination.region}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Difficulty</div>
                    <div className={`font-semibold text-sm ${
                      destination.difficulty === 'Easy' ? 'text-green-500' : destination.difficulty === 'Moderate' ? 'text-yellow-500' : 'text-red-500'
                    }`}>{destination.difficulty}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Category</div>
                    <div className="font-semibold text-gray-900 text-sm">{destination.category}</div>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/994501234567?text=Hi%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(destination.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-accent text-primary py-3.5 rounded-xl font-bold text-center hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
              >
                Book This Tour
              </a>
              <a
                href="/contact"
                className="mt-3 w-full border-2 border-accent text-accent py-3.5 rounded-xl font-semibold text-center hover:bg-accent hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
