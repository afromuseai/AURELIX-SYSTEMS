"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionReveal, FadeIn } from '@/components/animations/section-reveal'
import { Target, Globe, Lightbulb, Rocket } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Vision',
    description: 'Building next-generation AI infrastructure that empowers creators, businesses, and institutions worldwide.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Focused on Africa and global innovation, bringing world-class AI solutions to emerging markets.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering breakthrough technologies in machine learning, automation, and intelligent systems.'
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'Committed to delivering enterprise-grade products that set new standards in the industry.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] pointer-events-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9898%202-noS4bL9j7gMmoKm7GIwsGKtK0GSEit.jpeg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionReveal>
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-gold bg-gold/10 rounded-full border border-gold/20 mb-6">
                ABOUT US
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6 leading-tight">
                A Visionary
                <br />
                <span className="text-gold-gradient">AI Systems</span> Company
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AURELIX SYSTEMS is at the forefront of artificial intelligence innovation. 
                We build intelligent products that transform industries across creativity, 
                finance, business infrastructure, and cybersecurity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is to democratize access to powerful AI tools, with a special 
                focus on emerging markets and global innovation. We believe in building 
                technology that creates real value for people and businesses everywhere.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AURELIX%202-QGGuwC7muGNnXAj2RCJcXoHqcOYEKd.jpeg"
                    alt="AURELIX"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-gold-gradient text-lg tracking-wider">
                    AURELIX SYSTEMS
                  </p>
                  <p className="text-xs text-muted-foreground tracking-[0.2em]">
                    BUILDING INTELLIGENT SYSTEMS FOR A BETTER FUTURE
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 glass-card rounded-lg group hover:border-gold/30 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-4 group-hover:glow-gold-sm transition-all duration-500">
                    <value.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
