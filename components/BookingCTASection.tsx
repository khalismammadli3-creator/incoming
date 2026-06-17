import Link from 'next/link'

export default function BookingCTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/ctabg/1920/600')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-dark/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Ready to Explore?</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
          Your Azerbaijan Adventure Starts Here
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you want to explore ancient fire temples, hike Caucasus peaks, or experience authentic Silk Road culture — we craft the perfect journey for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#tours"
            className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Browse All Tours
          </Link>
          <Link
            href="/contact"
            className="border-2 border-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-14">
          {[
            { icon: '🔒', text: 'Secure Booking' },
            { icon: '✈️', text: 'Flexible Cancellation' },
            { icon: '🗺️', text: 'Local DMC Expertise' },
            { icon: '📞', text: '24/7 Support' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-blue-200">
              <span className="text-xl">{badge.icon}</span>
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
