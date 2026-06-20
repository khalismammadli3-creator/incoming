import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://incoming.lumivaratravel.az'),
  title: {
    default: 'Lumivara Travel — Azerbaijan DMC & Incoming Travel Agency',
    template: '%s | Lumivara Travel',
  },
  description: "Lumivara Travel is Azerbaijan's premier destination management company. We design bespoke tours, transfers, MICE events and cultural experiences across Baku, Sheki, Gabala, Khinalig and beyond — tailored for international travel operators and groups.",
  keywords: [
    'Azerbaijan DMC',
    'destination management company Azerbaijan',
    'incoming travel agency Azerbaijan',
    'tours to Azerbaijan',
    'Azerbaijan group tours',
    'Baku tour operator',
    'MICE Azerbaijan',
    'incentive travel Azerbaijan',
    'Azerbaijan travel agency for operators',
    'FIT Azerbaijan',
    'Caucasus tours',
    'Silk Road travel',
    'Azerbaijan incoming tourism',
    'rock climbing Azerbaijan',
    'mud volcano tour Azerbaijan',
    'Gobustan day trip from Baku',
    'Shahdag ski packages',
    'family tours Azerbaijan',
    'luxury Azerbaijan itinerary',
    'Azerbaijan visa guide',
    'best time to visit Azerbaijan',
  ],
  authors: [{ name: 'Lumivara Travel' }],
  creator: 'Lumivara Travel',
  icons: {
    icon: '/images/logos/D_Icon.png',
    apple: '/images/logos/D_Icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://incoming.lumivaratravel.az',
    siteName: 'Lumivara Travel',
    title: 'Lumivara Travel — Azerbaijan DMC & Incoming Travel Agency',
    description: "Azerbaijan's premier destination management company — bespoke tours, MICE, incentive travel and group experiences across the Land of Fire.",
    images: [{ url: '/images/hero.webp', width: 1920, height: 1080, alt: 'Azerbaijan — Baku skyline and the Land of Fire, Lumivara Travel DMC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumivara Travel — Azerbaijan DMC & Incoming Travel Agency',
    description: "Azerbaijan's premier destination management company — bespoke tours, MICE, incentive travel and group experiences.",
    images: ['/images/hero.webp'],
  },
  alternates: {
    canonical: 'https://incoming.lumivaratravel.az',
    languages: {
      'x-default': 'https://incoming.lumivaratravel.az',
      'en':         'https://incoming.lumivaratravel.az',
      'zh':         'https://incoming.lumivaratravel.az',
      'ja':         'https://incoming.lumivaratravel.az',
      'hi':         'https://incoming.lumivaratravel.az',
      'ur':         'https://incoming.lumivaratravel.az',
      'ru':         'https://incoming.lumivaratravel.az',
      'ar':         'https://incoming.lumivaratravel.az',
      'de':         'https://incoming.lumivaratravel.az',
      'fr':         'https://incoming.lumivaratravel.az',
      'tr':         'https://incoming.lumivaratravel.az',
      'es':         'https://incoming.lumivaratravel.az',
    },
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7GRKHX8693" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7GRKHX8693');
        `}</Script>
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
