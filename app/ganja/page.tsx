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

const destination = destinations.find((d) => d.slug === 'ganja')!

export const metadata: Metadata = {
  title: 'Ganja Historical Tour | Azerbaijan Second City | Lumivara Travel',
  description: "Discover Ganja — Azerbaijan's ancient second city and birthplace of Nizami Ganjavi. Lumivara Travel designs comprehensive historical tours including Goygol National Park for international groups.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'ganja Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Ganja Historical Tours | Azerbaijan DMC | Lumivara Travel',
    description: 'Explore Ganja's 2,500-year history and Goygol National Park — Lumivara Travel designs group and incentive travel programmes in western Azerbaijan.',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Ganja, Azerbaijan — Nizami Ganjavi mausoleum and historic city centre, Lumivara Travel DMC' }],
    url: 'https://incoming.lumivaratravel.az/ganja/',
  },
  twitter: { card: 'summary_large_image', title: 'Ganja Historical Tours | Azerbaijan DMC | Lumivara Travel', description: 'Explore Ganja's 2,500-year history and Goygol National Park — Lumivara Travel designs group and incentive travel programmes in western Azerbaijan.', images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/ganja/' },
}

export default function GanjaPage() {
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
