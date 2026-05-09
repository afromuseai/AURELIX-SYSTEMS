import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'AURELIX SYSTEMS | Building Intelligent Systems',
  description: 'AI-powered infrastructure for creativity, business, finance, and security. AURELIX SYSTEMS builds next-generation intelligent products.',
  generator: 'v0.app',
  keywords: ['AI', 'Artificial Intelligence', 'Machine Learning', 'Enterprise AI', 'AURELIX', 'Intelligent Systems'],
  authors: [{ name: 'AURELIX SYSTEMS' }],
  openGraph: {
    title: 'AURELIX SYSTEMS | Building Intelligent Systems',
    description: 'AI-powered infrastructure for creativity, business, finance, and security.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
