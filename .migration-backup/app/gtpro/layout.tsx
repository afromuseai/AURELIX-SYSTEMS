import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GTPro | Institutional AI Trading Intelligence',
  description: 'Global Trade Intelligence platform with AI-powered trading systems and bot fleets executing real-time market strategies.',
  openGraph: {
    title: 'GTPro | Institutional AI Trading Intelligence',
    description: 'AI-powered trading systems and autonomous bot fleets for real-time market execution.',
    type: 'website',
  },
}

export default function GTProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
