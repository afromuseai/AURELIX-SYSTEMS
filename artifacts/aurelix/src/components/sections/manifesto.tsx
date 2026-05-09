

import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'

const beliefs = [
  'Intelligence should scale',
  'Systems should adapt',
  'Automation should empower',
  'Innovation should remain human-centered'
]

export function ManifestoSection() {
  return (
    <section id="manifesto" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-gold/[0.02] to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-6">
        <SectionReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-gold bg-gold/10 rounded-full border border-gold/20 mb-6">
            THE MANIFESTO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-8">
            The <span className="text-gold-gradient">AURELIX</span> Manifesto
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technology is entering a new era.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              An era where intelligence is no longer limited to tools, platforms, or isolated systems.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              The future belongs to adaptive infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Systems capable of learning, evolving, automating, and collaborating alongside human ambition.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <motion.div 
            className="my-12 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="text-center space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              At AURELIX SYSTEMS, we believe artificial intelligence should not merely generate outputs.
            </p>
            <p className="text-lg text-gold leading-relaxed font-medium">
              It should expand possibility.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are building intelligent systems designed to empower creators, businesses, financial ecosystems, 
              and digital environments through scalable AI infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to bridge creativity, automation, intelligence, and execution into unified ecosystems 
              capable of transforming industries.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="mt-16 p-8 glass-card rounded-lg">
            <p className="text-center text-sm text-gold/80 tracking-wider mb-6">WE BELIEVE</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={belief}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-3 p-3 bg-gold/5 rounded-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-foreground/90 text-sm">{belief}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.5}>
          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The future will not be built by disconnected tools.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              It will be built by intelligent ecosystems.
            </p>
            <p className="text-gold tracking-wider text-sm mt-8">
              This is the foundation of AURELIX SYSTEMS.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
