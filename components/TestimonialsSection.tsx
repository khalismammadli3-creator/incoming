const valueProps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Deep Local Knowledge',
    description: 'Our team lives and breathes Azerbaijan. We know the hidden villages, the best family-run restaurants, the off-season festivals, and the mountain roads that don\'t appear on maps — because we\'ve been there.',
    tag: 'From Baku to Khinalig',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Personalised for Every Group',
    description: 'No two groups are the same. We design every itinerary around your pace, interests, and budget — whether you\'re a group of incentive travellers, a cultural study tour, or a small family looking for something authentic.',
    tag: 'Tailored, not templated',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'End-to-End Management',
    description: 'From the airport welcome board to the final hotel check-out, we manage every detail — accommodation, private transport, licensed guides, permits, restaurant bookings, and 24/7 on-ground support throughout.',
    tag: 'Seamless from arrival to departure',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Lumivara Incoming</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Your DMC in Azerbaijan
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            We are a boutique destination management company built around one goal: giving every group a genuine, seamless Azerbaijan experience.
          </p>
        </div>

        {/* Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col gap-4">
              {/* Icon */}
              <div className="text-accent">
                {prop.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl">{prop.title}</h3>

              {/* Description */}
              <p className="text-blue-100 leading-relaxed flex-1">
                {prop.description}
              </p>

              {/* Tag */}
              <span className="text-accent text-sm font-semibold">{prop.tag}</span>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-8 py-4 rounded-full">
            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-blue-200">Strong relationships with local suppliers across all regions of Azerbaijan</span>
          </div>
        </div>
      </div>
    </section>
  )
}
