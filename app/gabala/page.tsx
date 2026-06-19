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

const destination = destinations.find((d) => d.slug === 'gabala')!

export const metadata: Metadata = {
  title: 'Gabala Mountain Adventure Tours | Caucasus | Lumivara Travel',
  description: "Experience Azerbaijan's adventure capital with Lumivara Travel. Cable cars, hiking, zip-lining and Caucasus mountain scenery in Gabala — programmes for leisure groups, corporate and incentive travel.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'gabala Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Gabala Adventure Tours | Azerbaijan DMC | Lumivara Travel',
    description: 'Caucasus mountain adventures in Gabala — cable cars, zip-lining, hiking and Nohur Lake. Lumivara Travel arranges group and incentive travel programmes in Azerbaijan.',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Gabala, Azerbaijan — Tufandag mountain resort and Caucasus scenery, Lumivara Travel' }],
    url: 'https://incoming.lumivaratravel.az/gabala/',
  },
  twitter: { card: 'summary_large_image', title: 'Gabala Adventure Tours | Azerbaijan DMC | Lumivara Travel', description: 'Caucasus mountain adventures in Gabala — cable cars, zip-lining, hiking and Nohur Lake. Lumivara Travel arranges group and incentive travel programmes in Azerbaijan.', images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/gabala/' },
}

export default function GabalaPage() {
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
