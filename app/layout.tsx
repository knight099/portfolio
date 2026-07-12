import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Vaibhaw Krishna | Software Engineer',
    template: '%s | Vaibhaw Krishna',
  },
  description: 'Software Engineer designing and owning backend systems end to end — architecture, data pipelines, and the infrastructure they run on. Python, Go, AWS, and distributed systems.',
  openGraph: {
    title: 'Vaibhaw Krishna | Software Engineer',
    description: 'Software Engineer designing and owning backend systems end to end — architecture, data pipelines, and infrastructure. Python, Go, AWS, distributed systems.',
    url: baseUrl,
    siteName: 'Vaibhaw Krishna Portfolio',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased bg-white dark:bg-black max-w-4xl mx-4 mt-8 mb-20 lg:mx-auto">
        <div className="lg:flex lg:gap-16">
          <Navbar />
          <main className="flex-1 min-w-0 flex flex-col px-2 md:px-0">
            {children}
            <Footer />
          </main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
