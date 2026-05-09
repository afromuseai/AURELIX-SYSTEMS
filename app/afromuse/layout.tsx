import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AfroMuse AI | The Future of Music Creation',
  description: 'AI-powered music workflow platform for artists and producers. From song ideas to lyrics, blueprint generation, and AI audio production.',
  openGraph: {
    title: 'AfroMuse AI | The Future of Music Creation',
    description: 'AI-powered music workflow platform for artists and producers.',
    type: 'website',
  },
}

export default function AfroMuseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
