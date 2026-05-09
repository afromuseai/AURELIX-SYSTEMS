


import { motion } from 'framer-motion'
import { SectionReveal, FadeIn } from '@/components/animations/section-reveal'
import { Brain, Shield, TrendingUp, Sparkles, Workflow } from 'lucide-react'

const focusAreas = [
  { icon: Sparkles, label: 'AI-powered creative infrastructure' },
  { icon: TrendingUp, label: 'Financial intelligence systems' },
  { icon: Workflow, label: 'Autonomous business automation' },
  { icon: Shield, label: 'Cybersecurity intelligence' },
  { icon: Brain, label: 'Next-generation AI workflows' }
]

export function FounderSection() {
  return (
    <section id="founder" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-gold bg-gold/10 rounded-full border border-gold/20 mb-6">
            FOUNDER STATEMENT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            A Vision for <span className="text-gold-gradient">Intelligent</span> Systems
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Founder Image & Bio Card */}
          <FadeIn className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card-gold rounded-lg p-8 text-center"
            >
              {/* Founder Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 glow-gold-sm" />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-06%20at%2020.50.15-4o0HwutbOStb8OF5g8KARTLuXRZHNx.jpeg"
                  alt="Joshua Ametefe"
                  className="absolute inset-0 w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Name & Title */}
              <h3 className="font-display text-xl tracking-wider text-gold-gradient mb-1">
                Joshua Ametefe
              </h3>
              <p className="text-sm text-muted-foreground mb-6">Founder & CEO</p>

              {/* Founder Bio */}
              <div className="text-left space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Joshua Ametefe is the Founder and CEO of AURELIX SYSTEMS, an AI systems company focused on building intelligent platforms across creativity, finance, business infrastructure, and cybersecurity.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Driven by a passion for innovation and scalable technology, he leads the development of next-generation AI products designed to empower creators, businesses, and digital ecosystems worldwide.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  His vision centers on building intelligent infrastructure that combines automation, creativity, and strategic intelligence into powerful real-world systems.
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Founder Statement */}
          <div className="lg:col-span-3 space-y-8">
            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I founded AURELIX SYSTEMS with a vision to build intelligent systems that transform how people create, work, trade, and secure digital infrastructure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What started as ideas around AI-powered creativity and automation evolved into a broader mission: building an ecosystem of intelligent platforms capable of supporting the future of business, finance, cybersecurity, and digital innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At AURELIX, we believe artificial intelligence should not just generate outputs — it should empower human potential, accelerate decision-making, and unlock scalable systems for individuals and enterprises worldwide.
                </p>
              </div>
            </SectionReveal>

            {/* Focus Areas */}
            <SectionReveal delay={0.3}>
              <div className="glass-card rounded-lg p-6">
                <h4 className="font-display text-sm tracking-[0.2em] text-gold mb-4">
                  OUR FOCUS SPANS MULTIPLE INDUSTRIES
                </h4>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((area, index) => (
                    <motion.div
                      key={area.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 px-3 py-2 bg-gold/5 border border-gold/20 rounded-full"
                    >
                      <area.icon size={14} className="text-gold" />
                      <span className="text-xs text-foreground">{area.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Through platforms like <span className="text-gold">AfroMuse AI</span>, <span className="text-gold">GTPro</span>, and <span className="text-gold">STAGEONE</span>, we are building technologies designed to bridge creativity, intelligence, and execution into unified digital ecosystems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a founder, my goal is not simply to launch products, but to build systems that create long-term impact and redefine how intelligent technology integrates into everyday life.
                </p>
              </div>
            </SectionReveal>

            {/* Closing Statement */}
            <SectionReveal delay={0.5}>
              <motion.div 
                className="border-l-2 border-gold/50 pl-6 py-2"
                whileHover={{ x: 4 }}
              >
                <p className="text-foreground font-medium mb-2">
                  AURELIX SYSTEMS represents more than software.
                </p>
                <p className="text-gold-gradient font-display text-xl tracking-wider">
                  It represents the future of intelligent infrastructure.
                </p>
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
