import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://azerbaijanexplorer.com'),
  title: {
    default: 'Azerbaijan Explorer — Discover the Land of Fire',
    template: '%s | Azerbaijan Explorer',
  },
  description: 'Explore Azerbaijan with expert-guided tours to Baku, Sheki, Gobustan, Khinalig and more. Book authentic travel experiences in the Land of Fire.',
  keywords: ['Azerbaijan tours', 'Baku tourism', 'Land of Fire travel', 'Caucasus tours', 'Azerbaijan travel agency', 'Silk Road tour'],
  authors: [{ name: 'Azerbaijan Explorer' }],
  creator: 'Azerbaijan Explorer',
  icons: {
    icon: '/images/logos/D_Icon.png',
    apple: '/images/logos/D_Icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azerbaijanexplorer.com',
    siteName: 'Azerbaijan Explorer',
    title: 'Azerbaijan Explorer — Discover the Land of Fire',
    description: 'Expert-guided tours across Azerbaijan — from ancient fire temples to Caucasus mountain peaks.',
    images: [{ url: 'https://picsum.photos/seed/azerbaijanhero/1200/630', width: 1200, height: 630, alt: 'Azerbaijan Explorer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azerbaijan Explorer — Discover the Land of Fire',
    description: 'Expert-guided tours across Azerbaijan.',
    images: ['https://picsum.photos/seed/azerbaijanhero/1200/630'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
