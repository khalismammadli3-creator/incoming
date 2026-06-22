import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Lumivara Travel | Azerbaijan Destination Management Company',
  description: 'Lumivara Travel is a boutique Azerbaijan DMC founded in Baku in 2025 by local experts. We design bespoke tours, group itineraries and MICE programmes for international travel operators across the Land of Fire.',
  alternates: { canonical: 'https://incoming.lumivaratravel.az/about/' },
  openGraph: {
    title: 'About Lumivara Travel | Azerbaijan Destination Management Company',
    description: 'Founded in 2025 by local Azerbaijani experts, Lumivara Travel designs bespoke tours, incentive travel and MICE programmes for international operators.',
    url: 'https://incoming.lumivaratravel.az/about/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Lumivara Travel — Azerbaijan DMC team and destinations' }],
  },
}

const teamMembers = [
  { name: 'Anar Mammadov', role: 'Founder & Lead Guide', initials: 'AM', bio: 'Born in Baku, Anar has guided thousands of travellers across Azerbaijan for over 12 years.' },
  { name: 'Leyla Hasanova', role: 'Tour Operations Manager', initials: 'LH', bio: 'Leyla ensures every journey runs flawlessly, from bookings to on-the-ground logistics.' },
  { name: 'Rustam Aliyev', role: 'Mountain & Adventure Guide', initials: 'RA', bio: 'A certified mountain guide, Rustam leads all treks to Khinalig, Gabala and the Greater Caucasus.' },
  { name: 'Nigar Guliyeva', role: 'Cultural Heritage Specialist', initials: 'NG', bio: 'Nigar holds a PhD in Azerbaijani history and brings exceptional depth to every cultural tour.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">About Lumivara Travel</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            We are a team of passionate Azerbaijanis dedicated to sharing the extraordinary beauty, history, and culture of our homeland with the world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Crafting Authentic Azerbaijani Experiences
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Built from the ground up in 2025 by local experts who know Azerbaijan inside out, Lumivara Incoming was born from a simple belief: that Azerbaijan deserves to be one of the world&apos;s great travel destinations. This remarkable country — with its fire temples, silk road history, Caucasus peaks and Caspian coast — has long been one of the Caucasus&apos;s best-kept secrets, and we are here to change that.
                </p>
                <p>
                  Founded in 2025, we set out to bring a fresh approach to travel in Azerbaijan — combining deep local knowledge with personalised service for every group and individual we work with.
                </p>
                <p>
                  Our guides are Azerbaijanis who grew up in the regions they lead. This means you get insights, stories, and access that no guidebook can provide.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/aboutbaku/800/600"
                alt="Baku skyline with Flame Towers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authentic Experiences',
                desc: 'We go beyond tourist attractions to offer genuine cultural immersion, local family visits, and off-the-beaten-path discoveries.',
                icon: '🏔️',
              },
              {
                title: 'Sustainable Tourism',
                desc: 'We are committed to responsible travel that benefits local communities, preserves cultural heritage, and protects natural environments.',
                icon: '🌱',
              },
              {
                title: 'Expert Local Guides',
                desc: 'Every guide is a passionate Azerbaijani expert in their region — providing depth, nuance and personal connection that no outsider can match.',
                icon: '🧭',
              },
            ].map((val, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-5">{val.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">The People</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore Azerbaijan?</h2>
          <p className="text-gray-600 mb-8">Let our team craft your perfect Azerbaijani adventure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#tours" className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-accent-hover transition-colors">
              Browse Tours
            </Link>
            <Link href="/contact" className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-primary transition-colors">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
