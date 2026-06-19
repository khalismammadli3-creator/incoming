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

const destination = destinations.find((d) => d.slug === 'baku')!

export const metadata: Metadata = {
  title: 'Baku City Tour | Azerbaijan Capital | Lumivara Travel DMC',
  description: "Explore Baku with Lumivara Travel's expert-guided city programmes. Discover the UNESCO Old City, Flame Towers, Heydar Aliyev Center and Baku Boulevard — tailored for international groups and travel operators.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'baku Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Baku City Tours | Azerbaijan DMC | Lumivara Travel',
    description: 'Lumivara Travel designs bespoke Baku city programmes for international groups — UNESCO heritage, modern architecture, Silk Road culture and Caspian waterfront experiences.',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Baku, Azerbaijan — Flame Towers, Old City and Caspian Sea, Lumivara Travel DMC' }],
    url: 'https://incoming.lumivaratravel.az/baku/',
  },
  twitter: { card: 'summary_large_image', title: 'Baku City Tours | Azerbaijan DMC | Lumivara Travel', description: 'Lumivara Travel designs bespoke Baku city programmes for international groups — UNESCO heritage, modern architecture, Silk Road culture and Caspian waterfront experiences.', images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/baku/' },
}

export default function BakuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        name: destination.title,
        description: destination.description,
        image: destination.image,
        touristType: destination.category,
        itinerary: {
          '@type': 'ItemList',
          name: `${destination.title} Itinerary`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://incoming.lumivaratravel.az' },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://incoming.lumivaratravel.az/#tours' },
          { '@type': 'ListItem', position: 3, name: destination.name, item: `https://incoming.lumivaratravel.az/${destination.slug}` },
        ],
      },
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
