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

const destination = destinations.find((d) => d.slug === 'gobustan')!

export const metadata: Metadata = {
  title: 'Gobustan Rock Art and Mud Volcanoes Tour | Lumivara Travel',
  description: "Explore Gobustan National Park's UNESCO World Heritage petroglyphs and Azerbaijan's extraordinary mud volcanoes. A popular Gobustan day trip from Baku, expertly arranged by Lumivara Travel for international groups and operators.",
  keywords: ['Azerbaijan DMC', 'destination management company Azerbaijan', 'incoming travel agency Azerbaijan', 'tours to Azerbaijan', 'gobustan Azerbaijan', 'Gobustan day trip from Baku', 'mud volcano tour Azerbaijan', 'Baku tour operator', 'MICE Azerbaijan', 'incentive travel Azerbaijan'],
  openGraph: {
    title: 'Gobustan UNESCO Tour | Azerbaijan DMC | Lumivara Travel',
    description: '40,000-year-old rock engravings and mud volcano tour — Lumivara Travel arranges Gobustan day trips from Baku for international groups and operators.',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Gobustan National Park, Azerbaijan — ancient rock engravings and mud volcanoes, Lumivara Travel' }],
    url: 'https://incoming.lumivaratravel.az/gobustan/',
  },
  twitter: { card: 'summary_large_image', title: 'Gobustan UNESCO Tour | Azerbaijan DMC | Lumivara Travel', description: '40,000-year-old rock engravings and bubbling mud volcanoes — Lumivara Travel arranges Gobustan group tours and day trips from Baku for international operators.', images: ['/images/hero.webp'] },
  alternates: { canonical: 'https://incoming.lumivaratravel.az/gobustan/' },
}

export default function GobustanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        name: destination.title,
        description: destination.description,
        image: destination.image,
        touristType: destination.category,
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
