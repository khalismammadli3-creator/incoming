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

const destination = destinations.find((d) => d.slug === 'lankaran')!

export const metadata: Metadata = {
  title: 'Lankaran Eco Tour | Hirkan Forest and Caspian Coast | Lumivara Travel',
  description: "Explore Lankaran's subtropical Hirkan National Park — a UNESCO Biosphere Reserve with ancient Hyrcanian forests. Lumivara Travel arranges eco and nature tours to southern Azerbaijan for international groups.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'lankaran Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Lankaran Eco Tours | Southern Azerbaijan DMC | Lumivara Travel',
    description: 'Hyrcanian forests, Caspian coast and tea plantations — Lumivara Travel arranges eco tours to Lankaran and southern Azerbaijan for international groups and operators.',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Lankaran, southern Azerbaijan — Hirkan National Park and Caspian coastline, Lumivara Travel' }],
    url: 'https://incoming.lumivaratravel.az/lankaran/',
  },
  twitter: { card: 'summary_large_image', title: 'Lankaran Eco Tours | Southern Azerbaijan DMC | Lumivara Travel', description: 'Hyrcanian forests, Caspian coast and tea plantations — Lumivara Travel arranges eco tours to Lankaran and southern Azerbaijan for international groups and operators.', images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/lankaran/' },
}

export default function LankaranPage() {
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
