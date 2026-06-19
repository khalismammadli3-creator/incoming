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

const destination = destinations.find((d) => d.slug === 'absheron')!

export const metadata: Metadata = {
  title: 'Absheron Fire Temples Tour | Ateshgah and Yanar Dag | Lumivara Travel',
  description: "Discover the Absheron Peninsula's eternal flames — Ateshgah Zoroastrian Fire Temple and Yanar Dag Burning Mountain. Lumivara Travel organises expert-guided heritage tours of Azerbaijan's ancient fire sites.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'absheron Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Absheron Fire Heritage Tour | Azerbaijan DMC | Lumivara Travel',
    description: 'Ateshgah Fire Temple, Yanar Dag and medieval castles on the Absheron Peninsula — Lumivara Travel arranges expert-guided heritage tours for international groups.',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Absheron Peninsula, Azerbaijan — Yanar Dag burning mountain and Ateshgah fire temple, Lumivara Travel' }],
    url: 'https://incoming.lumivaratravel.az/absheron/',
  },
  twitter: { card: 'summary_large_image', title: 'Absheron Fire Heritage Tour | Azerbaijan DMC | Lumivara Travel', description: 'Ateshgah Fire Temple, Yanar Dag and medieval castles on the Absheron Peninsula — Lumivara Travel arranges expert-guided heritage tours for international groups.', images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/absheron/' },
}

export default function AbsheronPage() {
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
