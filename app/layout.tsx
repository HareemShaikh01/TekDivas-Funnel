import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { OrganizationSchema } from '@/components/ui/organization-schema'
import './globals.css'


export const metadata: Metadata = {
  metadataBase: new URL('https://tek-divas-funnel.vercel.app'),

  title: 'Web Development & Website Design for Growing Businesses | TekDivas',

  description:
    'TekDivas builds professional websites for growing businesses, with SEO setup and ongoing support to help you build a stronger online presence.',

  generator: 'TekDivas',

  icons: {
    icon: '/iconn.png',
  },

  openGraph: {

    title: 'Web Development & Website Design for Growing Businesses | TekDivas',

    description:
      'Professional websites, SEO setup, and ongoing support for growing businesses.',

    url: 'https://tek-divas-funnel.vercel.app',
    siteName: 'TekDivas',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TekDivas — Web Development & Website Design',
      },
    ],

    locale: 'en_GB',
    type: 'website',
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
        <OrganizationSchema />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      <GoogleAnalytics gaId="G-225HM6RR47" />
    </html>
  )
}