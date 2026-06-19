import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Azerbaijan DMC & Tour Operator | Lumivara Travel',
  description: "Lumivara Travel is Azerbaijan's premier destination management company. We design bespoke tours, transfers, MICE events and cultural experiences across Baku, Sheki, Gabala, Khinalig and beyond — tailored for international travel operators and groups.",
  alternates: {
    canonical: 'https://incoming.lumivaratravel.az/',
  },
  openGraph: {
    title: 'Azerbaijan DMC & Tour Operator | Lumivara Travel',
    description: "Azerbaijan's premier destination management company — bespoke tours, MICE, incentive travel and group experiences across the Land of Fire.",
    url: 'https://incoming.lumivaratravel.az/',
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Azerbaijan — Lumivara Travel DMC, tours across Baku, Sheki, Khinalig and beyond' }],
  },
}


import FeaturedToursSection from '@/components/FeaturedToursSection'
import WhyAzerbaijanSection from '@/components/WhyAzerbaijanSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BookingCTASection from '@/components/BookingCTASection'
import NewsletterSection from '@/components/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedToursSection />
      <WhyAzerbaijanSection />
      <TestimonialsSection />
      <BookingCTASection />
      <NewsletterSection />
    </>
  )
}
