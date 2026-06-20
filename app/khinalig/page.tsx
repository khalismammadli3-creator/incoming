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

const destination = destinations.find((d) => d.slug === 'khinalig')!

export const metadata: Metadata = {
  title: 'Khinalig Village Tour | Caucasus Highlands | Lumivara Travel',
  description: "Visit Khinalig — one of Europe's highest inhabited villages at 2,350m in the Greater Caucasus. Ideal for rock climbing and mountain trekking in Azerbaijan. Lumivara Travel arranges authentic cultural immersion tours for international groups and FIT travellers.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'khinalig Azerbaijan', 'rock climbing Azerbaijan', 'mountain trekking Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Khinalig Village Tour | Azerbaijan DMC | Lumivara Travel',
    description: "Journey to Khinalig — Europe's highest village in the Greater Caucasus. Authentic cultural immersion tours arranged by Lumivara Travel, Azerbaijan's incoming DMC.",
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Khinalig village, Azerbaijan — stone houses in the Greater Caucasus at 2350m, Lumivara Travel' }],
    url: 'https://incoming.lumivaratravel.az/khinalig/',
  },
  twitter: { card: 'summary_large_image', title: 'Khinalig Village Tour | Azerbaijan DMC | Lumivara Travel', description: "Journey to Khinalig — Europe's highest village in the Greater Caucasus. Authentic cultural immersion tours arranged by Lumivara Travel, Azerbaijan's incoming DMC.", images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/khinalig/' },
}

export default function KhinaligPage() {
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
