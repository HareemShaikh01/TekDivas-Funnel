import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'TekDivas — Complete Digital Branding for Growing Businesses',
  description:
    'TekDivas builds complete digital branding for growing businesses, combining professional websites, SEO, and ongoing support to create a strong online presence that attracts and converts customers.',
  generator: 'TekDivas',
  icons: {
    icon: '/iconn.png',
  },
}


export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      <GoogleAnalytics gaId="G-225HM6RR47" />
    </html>
  )
}