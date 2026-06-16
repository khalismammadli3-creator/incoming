const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Ancient History',
    description: '4,000 years of civilization — from Zoroastrian fire temples to medieval Silk Road caravanserais, Azerbaijan\'s history is layered and extraordinary.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'UNESCO Heritage',
    description: 'Home to 2 UNESCO World Heritage Sites — the walled Old City of Baku with its Palace of the Shirvanshahs, and the Gobustan rock engravings.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Diverse Landscapes',
    description: 'Nine of the world\'s eleven climate zones exist in Azerbaijan — from Caspian beaches and alpine meadows to subtropical forests and semi-deserts.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6l3 3m0 0l3-3m-3 3V2" />
      </svg>
    ),
    title: 'Silk Road Culture',
    description: 'Authentic traditions, handmade crafts, and warm hospitality shaped by millennia at the crossroads of East and West on the ancient Silk Road.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Safe Travel',
    description: 'Azerbaijan consistently ranks as one of the safest travel destinations in the Caucasus region, with warm and welcoming locals who take pride in their guests.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Year-Round',
    description: 'Four distinct seasons offer different magic — spring blossoms in the valleys, summer adventure in the mountains, golden autumn harvests, and winter skiing.',
  },
]

export default function WhyAzerbaijanSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Azerbaijan</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            The Land of Fire Awaits
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Azerbaijan is not just a destination — it&apos;s an experience unlike any other. Here&apos;s why travellers fall in love with it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-default"
            >
              <div className="text-primary group-hover:text-white transition-colors mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
