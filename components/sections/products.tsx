"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations/section-reveal'
import { HoverCard } from '@/components/animations/floating-elements'
import { Music, TrendingUp, Building2, Shield, ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: 'afromuse',
    name: 'AfroMuse AI',
    tagline: 'AI-Powered Creative Intelligence',
    description: 'An intelligent music workflow platform designed for artists, producers, and creators. From song ideation and lyrical generation to blueprint development and AI-powered audio production.',
    icon: Music,
    logo: '/images/logos/afromuse-logo.jpg',
    href: '/afromuse',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    features: ['AI Lyrics Generation', 'Song Blueprint Creation', 'Audio Concept Development', 'Producer Workflow Assistance']
  },
  {
    id: 'gtpro',
    name: 'GTPro',
    tagline: 'Global Trade Intelligence',
    description: 'An advanced AI-powered trading intelligence platform engineered for real-time market analysis and autonomous execution through intelligent bot fleets and predictive strategy systems.',
    icon: TrendingUp,
    logo: '/images/logos/gtpro-logo.png',
    href: '/gtpro',
    gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
    features: ['AI-Driven Trading Systems', 'Autonomous Execution Bots', 'Real-Time Market Intelligence', 'Strategy Optimization']
  },
  {
    id: 'stageone',
    name: 'STAGEONE',
    tagline: 'Business Infrastructure Intelligence',
    description: 'An AI-powered business acceleration platform designed to help startups and enterprises scale intelligently with growth strategy systems, website generation, and automation architecture.',
    icon: Building2,
    href: '#',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    features: ['AI Growth Intelligence', 'Website Generation Systems', 'Business Automation Workflows', 'Intelligent Chatbot Infrastructure']
  },
  {
    id: 'cyber',
    name: 'AURELIX Cyber Intelligence',
    tagline: 'Autonomous Security Systems',
    description: 'A next-generation cybersecurity platform focused on AI-powered digital defense, autonomous threat monitoring, and intelligent infrastructure protection for applications and enterprise environments.',
    icon: Shield,
    href: '#',
    gradient: 'from-red-500/20 via-rose-500/10 to-transparent',
    features: ['AI Threat Detection', 'Autonomous Security Monitoring', 'System Vulnerability Intelligence', 'Adaptive Cyber Defense']
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
                          {'logo' in product && product.logo ? (
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`relative ${product.id === 'gtpro' ? 'w-48 h-16' : 'w-14 h-14'}`}>
                                <Image
                                  src={product.logo}
                                  alt={`${product.name} logo`}
                                  fill
                                  className={`object-contain ${product.id === 'gtpro' ? 'object-left' : 'rounded-lg'}`}
                                />
                              </div>
                              {product.id !== 'gtpro' && (
                                <h3 className="font-display text-xl tracking-wider text-foreground">
                                  {product.name}
                                </h3>
                              )}
                            </div>
                          ) : (
                            <>
                              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10 text-gold mb-4 group-hover:glow-gold-sm transition-all duration-500">
                                <product.icon size={24} />
                              </div>
                              <h3 className="font-display text-xl tracking-wider text-foreground mb-1">
                                {product.name}
                              </h3>
                            </>
                          )}
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
