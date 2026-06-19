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

const destination = destinations.find((d) => d.slug === 'lahij')!

export const metadata: Metadata = {
  title: 'Lahij Cultural Heritage Tour | Copper Craft Village | Lumivara Travel',
  description: "Explore Lahij — Azerbaijan's medieval copper-craft village in the Ismailli mountains. Lumivara Travel designs curated cultural heritage tours for international groups and travel operators.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'lahij Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Lahij Heritage Tours | Azerbaijan DMC | Lumivara Travel',
    description: 'Medieval cobblestone streets and living copper-craft traditions — Lumivara Travel arranges Lahij cultural tours for international groups visiting Azerbaijan.',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Lahij village, Azerbaijan — medieval copper crafts and cobblestone streets, Lumivara Travel' }],
    url: 'https://incoming.lumivaratravel.az/lahij/',
  },
  twitter: { card: 'summary_large_image', title: 'Lahij Heritage Tours | Azerbaijan DMC | Lumivara Travel', description: 'Medieval cobblestone streets and living copper-craft traditions — Lumivara Travel arranges Lahij cultural tours for international groups visiting Azerbaijan.', images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/lahij/' },
}

export default function LahijPage() {
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
