"use client"

import { motion } from 'framer-motion'
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations/section-reveal'
import { Brain, Workflow, Bot, Network, Cpu, Database } from 'lucide-react'

const researchAreas = [
  {
    icon: Bot,
    title: 'Autonomous AI Agents',
    description: 'Developing adaptive AI systems capable of executing complex workflows, assisting decision-making, and operating across interconnected digital environments.',
    status: 'Active'
  },
  {
    icon: Network,
    title: 'Intelligence Infrastructure',
    description: 'Building scalable AI frameworks that power business systems, trading intelligence, creative platforms, and secure digital ecosystems.',
    status: 'Active'
  },
  {
    icon: Brain,
    title: 'Creative Computation',
    description: 'Exploring AI-powered creative workflows for music, media, storytelling, and next-generation digital production systems.',
    status: 'Research'
  },
  {
    icon: Cpu,
    title: 'Cybersecurity Intelligence',
    description: 'Designing intelligent threat detection systems and autonomous security architectures capable of protecting evolving digital infrastructures.',
    status: 'Active'
  },
  {
    icon: Workflow,
    title: 'Enterprise Automation',
    description: 'Researching AI-assisted business scaling systems, workflow automation, and intelligent operational frameworks for modern organizations.',
    status: 'Active'
  },
  {
    icon: Database,
    title: 'Systems Engineering',
    description: 'Through continuous experimentation and systems engineering, developing scalable technologies designed to shape the future of digital interaction.',
    status: 'Research'
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
            AURELIX LABS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Intelligent Research & <span className="text-gold-gradient">Systems Development</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            AURELIX LABS is the research and innovation division of AURELIX SYSTEMS, focused on designing next-generation AI architectures, autonomous systems, and intelligent digital infrastructure.
          </p>
          <p className="text-sm text-gold/70 max-w-xl mx-auto">
            We believe the future of technology lies in systems that are adaptive, scalable, collaborative, autonomous, and human-centered.
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
