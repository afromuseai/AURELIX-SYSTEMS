"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations/section-reveal'
import { HoverCard } from '@/components/animations/floating-elements'
import { Music, TrendingUp, Building2, Shield, ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: 'afromuse',
    name: 'AfroMuse AI',
    tagline: 'The Future of Music Creation',
    description: 'An AI-powered music workflow platform for artists and producers. From song ideas to lyrics, blueprint generation, and AI audio production.',
    icon: Music,
    href: '/afromuse',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    features: ['AI Lyrics Generation', 'Song Blueprints', 'Audio Production', 'Artist Tools']
  },
  {
    id: 'gtpro',
    name: 'GTPro',
    tagline: 'Institutional Trading Intelligence',
    description: 'Global Trade Intelligence platform with AI-powered trading systems and bot fleets executing real-time market strategies.',
    icon: TrendingUp,
    href: '/gtpro',
    gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
    features: ['AI Trading Bots', 'Market Analytics', 'Strategy Execution', 'Risk Management']
  },
  {
    id: 'stageone',
    name: 'STAGEONE',
    tagline: 'AI Business Infrastructure',
    description: 'An AI business infrastructure platform helping companies scale with website generation, chatbot systems, growth intelligence, and automation tools.',
    icon: Building2,
    href: '#',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    features: ['Website Generation', 'Chatbot Systems', 'Growth Analytics', 'Automation']
  },
  {
    id: 'cyber',
    name: 'Cyber Intelligence',
    tagline: 'Autonomous System Protection',
    description: 'AI-powered cybersecurity intelligence and autonomous system protection for apps, systems, and websites.',
    icon: Shield,
    href: '#',
    gradient: 'from-red-500/20 via-rose-500/10 to-transparent',
    features: ['Threat Detection', 'Auto Response', 'System Analysis', 'Vulnerability Scanning']
  }
]

export function ProductsSection() {
  return (
    <section id="products" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-gold bg-gold/10 rounded-full border border-gold/20 mb-6">
            OUR PRODUCTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            <span className="text-gold-gradient">Intelligent</span> Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pioneering AI products across creativity, finance, business infrastructure, and cybersecurity.
          </p>
        </SectionReveal>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <HoverCard>
                <Link href={product.href}>
                  <motion.div
                    whileHover={{ 
                      borderColor: 'rgba(212, 175, 55, 0.3)',
                    }}
                    className="group relative h-full p-8 glass-card rounded-lg overflow-hidden transition-all duration-500"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-radial ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative">
                      {/* Icon & Title */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10 text-gold mb-4 group-hover:glow-gold-sm transition-all duration-500">
                            <product.icon size={24} />
                          </div>
                          <h3 className="font-display text-xl tracking-wider text-foreground mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gold/80">{product.tagline}</p>
                        </div>
                        <ArrowUpRight 
                          size={20} 
                          className="text-muted-foreground group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                        />
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs text-muted-foreground bg-secondary/50 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
