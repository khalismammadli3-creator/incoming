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
  title: `${destination.title} — ${destination.name}, Azerbaijan`,
  description: destination.description.slice(0, 160),
  openGraph: { title: `${destination.title} | Azerbaijan Explorer`, description: destination.tagline, images: [{ url: destination.image, width: 1200, height: 800, alt: destination.name }], url: `https://azerbaijanexplorer.com/${destination.slug}` },
  twitter: { card: 'summary_large_image', title: destination.title, description: destination.tagline, images: [destination.image] },
  alternates: { canonical: `https://azerbaijanexplorer.com/${destination.slug}` },
}

export default function KhinaligPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'TouristTrip', name: destination.title, description: destination.description, image: destination.image, offers: { '@type': 'Offer', price: destination.price.replace('$', ''), priceCurrency: 'USD' }, touristType: destination.category },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://azerbaijanexplorer.com' }, { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://azerbaijanexplorer.com/#tours' }, { '@type': 'ListItem', position: 3, name: destination.name, item: `https://azerbaijanexplorer.com/${destination.slug}` }] },
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
