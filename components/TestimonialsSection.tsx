const testimonials = [
  {
    initials: 'SJ',
    name: 'Sarah Johnson',
    country: 'United Kingdom',
    stars: 5,
    text: 'The Baku City Tour exceeded every expectation. Our guide was incredibly knowledgeable and the Old City at night was absolutely magical. Azerbaijan Explorer made everything seamless from start to finish.',
    tour: 'Baku City Tour',
  },
  {
    initials: 'MK',
    name: 'Markus Klein',
    country: 'Germany',
    stars: 5,
    text: 'Khinalig was the most extraordinary place I have ever visited. Staying in the village guesthouse, meeting the shepherds, and watching the sunrise over the Caucasus from 2,350m — pure, unforgettable magic.',
    tour: 'Khinalig Village Tour',
  },
  {
    initials: 'YT',
    name: 'Yuki Tanaka',
    country: 'Japan',
    stars: 5,
    text: 'Sheki is a hidden gem. The Palace of the Sheki Khans is one of the most beautiful buildings I have ever seen, and the shebeke workshop was a unique hands-on experience. Highly recommend!',
    tour: 'Sheki Silk Road Experience',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Traveler Stories</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Real experiences from real travellers who fell in love with Azerbaijan.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-blue-100 leading-relaxed italic flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Tour */}
              <span className="text-primary text-sm font-semibold">{t.tour}</span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-blue-300 text-sm">{t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-8 py-4 rounded-full">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9/5</span>
            <span className="text-blue-200">based on 2,400+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
