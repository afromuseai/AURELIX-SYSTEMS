"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ParticleField } from '@/components/animations/particle-field'
import { FloatingElement } from '@/components/animations/floating-elements'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Particle Field */}
      <ParticleField 
        particleCount={60} 
        color="rgba(212, 175, 55"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Floating Logo */}
        <FloatingElement amplitude={15} duration={8}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl animate-pulse" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AURELIX%202-QGGuwC7muGNnXAj2RCJcXoHqcOYEKd.jpeg"
              alt="AURELIX SYSTEMS Logo"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              priority
            />
          </motion.div>
        </FloatingElement>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6"
        >
          <span className="text-gold-gradient">Building</span>
          <br />
          <span className="text-foreground">Intelligent Systems</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base tracking-[0.3em] text-gold/70 uppercase mt-2 mb-4"
        >
          For a Better Future
        </motion.p>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          AI-powered infrastructure for creativity, finance, business growth, and cybersecurity.
          <br className="hidden sm:block" />
          <span className="text-foreground/80">AURELIX SYSTEMS develops next-generation AI platforms designed to empower creators, automate enterprises, strengthen digital ecosystems, and unlock scalable intelligence for the future.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#products"
            className="group flex items-center gap-2 px-8 py-4 bg-gold text-background font-medium rounded-sm hover:bg-gold-light transition-all duration-300 glow-gold-sm hover:glow-gold"
          >
            <Sparkles size={18} />
            Explore Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-transparent text-foreground font-medium rounded-sm border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
          >
            Join the Future
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: '4+', label: 'AI Products' },
            { value: '100K+', label: 'Lines of Code' },
            { value: '2024', label: 'Founded' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl sm:text-3xl text-gold-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-gold/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
