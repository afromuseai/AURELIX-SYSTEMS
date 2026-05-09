"use client"

import { motion } from 'framer-motion'
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations/section-reveal'
import { Brain, Workflow, Bot, Network, Cpu, Database } from 'lucide-react'

const researchAreas = [
  {
    icon: Workflow,
    title: 'AI Workflows',
    description: 'Designing intelligent automation pipelines that streamline complex multi-step processes.',
    status: 'Active'
  },
  {
    icon: Bot,
    title: 'Agent Systems',
    description: 'Developing autonomous AI agents capable of independent decision-making and task execution.',
    status: 'Active'
  },
  {
    icon: Network,
    title: 'Neural Architecture',
    description: 'Exploring novel neural network architectures for improved efficiency and performance.',
    status: 'Research'
  },
  {
    icon: Cpu,
    title: 'Automation Pipelines',
    description: 'Building scalable infrastructure for automated data processing and model deployment.',
    status: 'Active'
  },
  {
    icon: Brain,
    title: 'Intelligence Systems',
    description: 'Creating adaptive systems that learn and evolve based on real-world interactions.',
    status: 'Research'
  },
  {
    icon: Database,
    title: 'Data Infrastructure',
    description: 'Architecting robust data systems for training and deploying AI at scale.',
    status: 'Active'
  }
]

export function ResearchSection() {
  return (
    <section id="research" className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-gold bg-gold/10 rounded-full border border-gold/20 mb-6">
            RESEARCH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Pioneering <span className="text-gold-gradient">AI Research</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our research teams are pushing the boundaries of what&apos;s possible with artificial intelligence.
          </p>
        </SectionReveal>

        {/* Research Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <StaggerItem key={area.title}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(212, 175, 55, 0.3)' }}
                className="group p-6 glass-card rounded-lg h-full transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 text-gold flex items-center justify-center group-hover:glow-gold-sm transition-all duration-500">
                    <area.icon size={24} />
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    area.status === 'Active' 
                      ? 'bg-emerald-500/10 text-emerald-400' 
                      : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {area.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg tracking-wider text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>

                {/* Animated Line */}
                <motion.div 
                  className="mt-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
