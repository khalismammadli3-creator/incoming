import { Metadata } from 'next'
import { destinations } from '@/lib/destinations'
import DestinationHero from '@/components/DestinationHero'
import DestinationOverview from '@/components/DestinationOverview'
import ItinerarySection from '@/components/ItinerarySection'
import HighlightsSection from '@/components/HighlightsSection'
import IncludedSection from '@/components/IncludedSection'
import GallerySection from '@/components/GallerySection'
import FAQSection from '@/components/FAQSection'
import RelatedDestinations from '@/components/RelatedDestinations'
import StickyBookingBar from '@/components/StickyBookingBar'
import BookingCTASection from '@/components/BookingCTASection'

const destination = destinations.find((d) => d.slug === 'quba')!

export const metadata: Metadata = {
  title: 'Quba Nature and Heritage Tour | Northern Azerbaijan | Lumivara Travel',
  description: "Discover Quba's apple orchards, Afurja waterfall and the unique Krasnaya Sloboda Jewish heritage village. Lumivara Travel organises tailored group tours to northern Azerbaijan for international operators.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'quba Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Quba Tours | Northern Azerbaijan DMC | Lumivara Travel',
    description: 'Apple orchards, Afurja waterfall and Jewish heritage in Krasnaya Sloboda — Lumivara Travel designs Quba group tours for international operators and FIT travellers.',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Quba, northern Azerbaijan — apple orchards and mountain scenery, Lumivara Travel DMC' }],
    url: 'https://incoming.lumivaratravel.az/quba/',
  },
  twitter: { card: 'summary_large_image', title: 'Quba Tours | Northern Azerbaijan DMC | Lumivara Travel', description: 'Apple orchards, Afurja waterfall and Jewish heritage in Krasnaya Sloboda — Lumivara Travel designs Quba group tours for international operators and FIT travellers.', images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/quba/' },
}

export default function QubaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'TouristTrip', name: destination.title, description: destination.description, image: destination.image, touristType: destination.category },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://incoming.lumivaratravel.az' }, { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://incoming.lumivaratravel.az/#tours' }, { '@type': 'ListItem', position: 3, name: destination.name, item: `https://incoming.lumivaratravel.az/${destination.slug}` }] },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DestinationHero destination={destination} />
      <DestinationOverview destination={destination} />
      <ItinerarySection destination={destination} />
      <HighlightsSection destination={destination} />
      <IncludedSection destination={destination} />
      <GallerySection destination={destination} />
      <FAQSection destination={destination} />
      <BookingCTASection />
      <RelatedDestinations destination={destination} />
      <StickyBookingBar destination={destination} />
    </>
  )
}
