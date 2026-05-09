"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations/section-reveal'
import { Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: 'Joshua Ametefe',
    role: 'Founder & CEO',
    bio: 'Founder of AURELIX SYSTEMS, building intelligent platforms across creativity, finance, and cybersecurity.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-06%20at%2020.50.15-4o0HwutbOStb8OF5g8KARTLuXRZHNx.jpeg',
    initial: 'JA'
  },
  {
    name: 'Elena Müller',
    role: 'Director of Operations',
    bio: 'Strategic leader overseeing company growth and partnerships.',
    image: '/images/team/director-of-operations.jpg',
    initial: 'EM'
  },
  {
    name: 'Kenji Tanaka',
    role: 'Head of Engineering',
    bio: 'Building the technical foundation for our AI products.',
    image: '/images/team/head-of-engineering.jpg',
    initial: 'KT'
  },
  {
    name: 'Michael Kumi',
    role: 'Principal AI Researcher',
    bio: 'Pushing the boundaries of machine learning innovation.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n4AHDIFtl1wvX5owcv0cO8ogAe61eI.png',
    initial: 'MK'
  }
]

export function TeamSection() {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-gold bg-gold/10 rounded-full border border-gold/20 mb-6">
            OUR TEAM
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            The <span className="text-gold-gradient">Minds</span> Behind AURELIX
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A world-class team of engineers, researchers, and visionaries building the future of AI.
          </p>
        </SectionReveal>

        {/* Team Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group p-6 glass-card rounded-lg text-center transition-all duration-500 hover:border-gold/30"
              >
                {/* Avatar */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 group-hover:glow-gold-sm transition-all duration-500" />
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="relative rounded-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-display text-2xl text-gold-gradient">
                        {member.initial}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <h3 className="font-display text-lg tracking-wider text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gold/80 mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors"
                  >
                    <Twitter size={16} />
                  </motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
