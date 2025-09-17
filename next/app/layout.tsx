import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import RootLayout from './components/RootLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChillNOW - Premium Cannabis & Wellness Delivery',
  description: 'Premium cannabis and wellness delivery service. Fast, safe, and reliable delivery in 60 minutes or less.',
  keywords: 'cannabis delivery, wellness, premium, fast delivery, safe, reliable',
  authors: [{ name: 'ChillNOW' }],
  creator: 'ChillNOW',
  publisher: 'ChillNOW',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chillnow.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ChillNOW - Premium Cannabis & Wellness Delivery',
    description: 'Premium cannabis and wellness delivery service. Fast, safe, and reliable delivery in 60 minutes or less.',
    url: 'https://chillnow.com',
    siteName: 'ChillNOW',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW - Premium Cannabis & Wellness Delivery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChillNOW - Premium Cannabis & Wellness Delivery',
    description: 'Premium cannabis and wellness delivery service. Fast, safe, and reliable delivery in 60 minutes or less.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <RootLayout>
            {children}
          </RootLayout>
        </Providers>
      </body>
    </html>
  )
}
