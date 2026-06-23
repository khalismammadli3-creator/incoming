import { Destination } from '@/lib/destinations'

interface ItinerarySectionProps {
  destination: Destination
}

export default function ItinerarySection({ destination }: ItinerarySectionProps) {
  const days = destination.itinerary.split('Day ').filter(Boolean).map((day, idx) => {
    const parts = day.split(':')
    const dayLabel = `Day ${parts[0]?.trim() || idx + 1}`
    const content = parts.slice(1).join(':').trim()
    return { dayLabel, content }
  })

  return (
    <section className="py-4 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Day by Day</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Tour Itinerary
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/20 hidden sm:block" />

          <div className="space-y-4">
            {days.map((day, idx) => (
              <div key={idx} className="relative flex gap-2">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 z-10">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="sm:hidden w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{day.dayLabel}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{day.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
