"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ParticleField } from '@/components/animations/particle-field'
import { SectionReveal, StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/section-reveal'
import { FloatingElement, HoverCard } from '@/components/animations/floating-elements'
import { 
  Music, Mic2, FileAudio, AudioWaveform, Play, Sparkles, 
  ArrowRight, ArrowLeft, ChevronRight, Users, Zap, 
  FileText, AudioLines, Radio, Headphones, Volume2,
  Send
} from 'lucide-react'

// AfroMuse Navigation
function AfroMuseNav() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-gold/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm">Back to AURELIX</span>
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logos/afromuse-logo.jpg"
              alt="AfroMuse AI"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-display text-xl tracking-wider text-gold-gradient">AfroMuse</span>
            <span className="text-muted-foreground">AI</span>
          </div>
          <Link 
            href="#waitlist"
            className="px-4 py-2 text-sm bg-gold/10 text-gold border border-gold/30 rounded-sm hover:bg-gold/20 transition-all"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

// Hero Section
function AfroMuseHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-amber-950/10" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <ParticleField particleCount={40} color="rgba(251, 191, 36" />
      
      {/* Audio Waveform Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-20">
        <motion.div 
          className="flex items-end justify-center gap-1 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-gold to-amber-400 rounded-full"
              animate={{ height: [20, 40 + Math.random() * 60, 20] }}
              transition={{ 
                duration: 1 + Math.random(), 
                repeat: Infinity, 
                delay: i * 0.05,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <FloatingElement amplitude={12} duration={7}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-32 h-32 mx-auto mb-8"
          >
            <Image
              src="/images/logos/afromuse-logo.jpg"
              alt="AfroMuse AI"
              fill
              className="object-contain rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl glow-gold-sm" />
          </motion.div>
        </FloatingElement>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
            COMING SOON
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider">
            <span className="text-gold-gradient">AfroMuse</span>
            <span className="text-foreground"> AI</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          The future of music production powered by AI.
          <br />
          <span className="text-amber-400/80">From idea to finished track.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#waitlist"
            className="group flex items-center gap-2 px-8 py-4 bg-gold text-background font-medium rounded-sm hover:bg-gold-light transition-all duration-300 glow-gold-sm hover:glow-gold"
          >
            <Sparkles size={18} />
            Join the Waitlist
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="flex items-center gap-2 px-8 py-4 text-foreground font-medium rounded-sm border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-all">
            <Play size={18} className="text-gold" />
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// Workflow Section
function WorkflowSection() {
  const steps = [
    { icon: Sparkles, title: 'Ideation', desc: 'Describe your song concept, mood, and style' },
    { icon: FileText, title: 'Lyrics', desc: 'AI generates custom lyrics matching your vision' },
    { icon: FileAudio, title: 'Blueprint', desc: 'Get a complete song structure and arrangement' },
    { icon: AudioLines, title: 'Production', desc: 'Generate full audio tracks with AI' },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Your <span className="text-gold-gradient">Creative Workflow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From initial concept to finished production, AfroMuse AI guides you through every step.
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative p-8 glass-card rounded-lg text-center group hover:border-amber-500/30 transition-all duration-500"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border border-gold/30 flex items-center justify-center text-gold font-display text-sm">
                    {i + 1}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:glow-gold-sm transition-all duration-500">
                    <step.icon size={28} />
                  </div>
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

// AI Lyrics Section
function LyricsSection() {
  const [activeGenre, setActiveGenre] = useState('afrobeats')
  
  const genres = [
    { id: 'afrobeats', name: 'Afrobeats' },
    { id: 'hiphop', name: 'Hip Hop' },
    { id: 'rnb', name: 'R&B' },
    { id: 'pop', name: 'Pop' },
  ]

  const lyricsExamples: Record<string, string[]> = {
    afrobeats: [
      "Feel the rhythm in my soul tonight",
      "Dancing under Lagos city lights",
      "Your love got me moving like the tide",
      "Together we gon ride, side by side"
    ],
    hiphop: [
      "Rising from the bottom, now we at the top",
      "Dreams in my pocket, ambition never stop",
      "Building empires where they said we cannot",
      "Watch me turn nothing into a whole lot"
    ],
    rnb: [
      "Wrapped up in your love so deep",
      "Promises I know you will keep",
      "In your arms is where I wanna be",
      "You and me for eternity"
    ],
    pop: [
      "Chasing stars across the sky tonight",
      "Every moment feels so right",
      "Turn it up and let the music play",
      "We gon celebrate today"
    ]
  }

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-amber-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
              AI LYRICS ENGINE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
              <span className="text-gold-gradient">Intelligent</span> Lyrics
              <br />Generation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our AI understands genre conventions, rhyme schemes, and emotional nuances.
              Generate professional-quality lyrics in seconds that match your unique style.
            </p>
            
            {/* Genre Selector */}
            <div className="flex flex-wrap gap-2 mb-8">
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => setActiveGenre(genre.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    activeGenre === genre.id
                      ? 'bg-gold text-background'
                      : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </SectionReveal>

          <FadeIn delay={0.3}>
            <motion.div 
              className="p-8 glass-card-gold rounded-lg"
              whileHover={{ borderColor: 'rgba(251, 191, 36, 0.4)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Mic2 className="text-amber-400" size={24} />
                <span className="font-display tracking-wider text-foreground">Generated Lyrics</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGenre}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  {lyricsExamples[activeGenre].map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-lg text-foreground/80 italic"
                    >
                      &quot;{line}&quot;
                    </motion.p>
                  ))}
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">AI-generated in 0.3s</span>
                <button className="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                  Regenerate <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Song Blueprint Section
function BlueprintSection() {
  const blueprintItems = [
    { section: 'Intro', bars: 8, key: 'Cm', bpm: 108 },
    { section: 'Verse 1', bars: 16, key: 'Cm', bpm: 108 },
    { section: 'Pre-Chorus', bars: 8, key: 'Eb', bpm: 108 },
    { section: 'Chorus', bars: 16, key: 'Ab', bpm: 108 },
    { section: 'Verse 2', bars: 16, key: 'Cm', bpm: 108 },
    { section: 'Bridge', bars: 8, key: 'Fm', bpm: 108 },
    { section: 'Outro', bars: 8, key: 'Cm', bpm: 108 },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
            SONG BLUEPRINTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Complete <span className="text-gold-gradient">Song Structures</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-generated song blueprints with sections, arrangements, and production notes.
          </p>
        </SectionReveal>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto p-8 glass-card rounded-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Summer Vibes</h3>
                <p className="text-sm text-muted-foreground">Afrobeats / Dance</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Key: Cm</span>
                <span>BPM: 108</span>
                <span>Duration: ~3:30</span>
              </div>
            </div>

            {/* Blueprint Timeline */}
            <div className="space-y-3">
              {blueprintItems.map((item, i) => (
                <motion.div
                  key={item.section}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-24 text-sm font-medium text-foreground">{item.section}</div>
                  <div className="flex-1">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                      style={{ width: `${(item.bars / 16) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{item.bars} bars</span>
                    <span>{item.key}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// Audio Generation Section
function AudioSection() {
  const features = [
    { icon: AudioWaveform, title: 'Beat Generation', desc: 'AI-crafted instrumentals' },
    { icon: Volume2, title: 'Vocal Synthesis', desc: 'Natural voice generation' },
    { icon: Radio, title: 'Mixing & Mastering', desc: 'Professional sound quality' },
    { icon: Headphones, title: 'Export Options', desc: 'Multiple format support' },
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-amber-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative p-8 glass-card rounded-lg">
              {/* Simulated DAW Interface */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground">AfroMuse Audio Engine</span>
              </div>
              
              {/* Waveform Display */}
              <div className="h-32 mb-6 flex items-center gap-0.5">
                {Array.from({ length: 100 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-amber-500 to-gold rounded-sm"
                    animate={{ 
                      height: [
                        `${20 + Math.sin(i * 0.3) * 30}%`,
                        `${40 + Math.sin(i * 0.3 + 1) * 40}%`,
                        `${20 + Math.sin(i * 0.3) * 30}%`
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.02
                    }}
                  />
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-gold text-background flex items-center justify-center hover:bg-gold-light transition-colors">
                    <Play size={20} />
                  </button>
                  <div>
                    <p className="text-sm text-foreground">Summer Vibes - Full Mix</p>
                    <p className="text-xs text-muted-foreground">00:00 / 03:28</p>
                  </div>
                </div>
                <span className="text-xs text-amber-400">AI Generated</span>
              </div>
            </div>
          </FadeIn>

          <SectionReveal direction="left">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
              AUDIO GENERATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
              <span className="text-gold-gradient">AI-Powered</span>
              <br />Audio Production
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Transform your lyrics and blueprints into full audio productions.
              Our AI handles beats, melodies, and professional mixing.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-secondary/30 rounded-lg"
                >
                  <feature.icon size={20} className="text-amber-400 mb-2" />
                  <h4 className="text-sm font-medium text-foreground">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

// Product Screenshots Section
function ProductShowcaseSection() {
  const screenshots = [
    {
      title: 'Lyric Studio',
      description: 'AI-powered lyrics workspace with deep Afrobeat storytelling',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lp50wbaNdIJTzl3k1yWjqisqEaLIjf.png'
    },
    {
      title: 'Audio Studio',
      description: 'Shape your lyrics into playable sessions with beat direction',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LPfQYaX1MUH7bD33x5XltdV9VpzywE.png'
    },
    {
      title: 'Beat DNA',
      description: 'Customize bounce style, melody density, and drum character',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rRPcM1LTXtVC6BCIHekDN5ufAhczBg.png'
    },
    {
      title: 'Arrangement Blueprint',
      description: 'Get a structure-first map for building or recording your session',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8PHlUsKNIt4Ihm89DsFoHP1jPBFNFV.png'
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
            PLATFORM PREVIEW
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            See <span className="text-gold-gradient">AfroMuse</span> in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the complete music production workflow from lyrics to final export.
          </p>
        </SectionReveal>

        <div className="space-y-12">
          {/* Hero Screenshot */}
          <FadeIn>
            <div className="relative rounded-xl overflow-hidden border border-amber-500/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9jZIqPRXLt8ZMuF739MOr8ac7IqIt.png"
                alt="AfroMuse AI Hero"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>
          </FadeIn>

          {/* Screenshot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, i) => (
              <FadeIn key={screenshot.title} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="group relative rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/40 transition-all"
                >
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-lg text-gold-gradient mb-1">{screenshot.title}</h3>
                      <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Additional Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.2}>
              <div className="relative rounded-xl overflow-hidden border border-amber-500/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pVQpeTPcBb9WIbvetE6irXyGgGqz3N.png"
                  alt="AfroMuse Library"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative rounded-xl overflow-hidden border border-amber-500/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AvYldAuN19GGOYGxv2ysLnnHesGesX.png"
                  alt="AfroMuse Export"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

// Producer Tools Section
function ProducerToolsSection() {
  const tools = [
    { icon: Zap, name: 'Quick Generate', desc: 'One-click song creation' },
    { icon: FileAudio, name: 'Stem Export', desc: 'Individual track stems' },
    { icon: Music, name: 'Sample Library', desc: 'AI-curated sounds' },
    { icon: AudioWaveform, name: 'FX Processor', desc: 'Real-time effects' },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
            PRODUCER TOOLS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Built for <span className="text-gold-gradient">Creators</span>
          </h2>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <StaggerItem key={tool.name}>
              <HoverCard>
                <div className="p-6 glass-card rounded-lg text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <tool.icon size={24} />
                  </div>
                  <h3 className="font-display tracking-wider text-foreground mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// Artist Collaboration Section
function CollaborationSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-amber-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
              COLLABORATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
              <span className="text-gold-gradient">Connect</span> with Artists
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Share your projects, collaborate in real-time, and connect with a 
              global community of artists and producers using AfroMuse AI.
            </p>
            <ul className="space-y-4">
              {[
                'Real-time project sharing',
                'Version control & history',
                'In-app messaging',
                'Collaborative editing'
              ].map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <ChevronRight size={12} className="text-amber-400" />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </SectionReveal>

          <FadeIn delay={0.3}>
            <div className="p-8 glass-card rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-amber-400" size={24} />
                <span className="font-display tracking-wider text-foreground">Active Collaborators</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Producer A', role: 'Beat Production', status: 'online' },
                  { name: 'Artist B', role: 'Vocals', status: 'online' },
                  { name: 'Engineer C', role: 'Mixing', status: 'away' },
                ].map((collab, i) => (
                  <motion.div
                    key={collab.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-medium">
                        {collab.name[0]}
                      </div>
                      <div>
                        <p className="text-sm text-foreground">{collab.name}</p>
                        <p className="text-xs text-muted-foreground">{collab.role}</p>
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      collab.status === 'online' ? 'bg-emerald-400' : 'bg-yellow-400'
                    }`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Waitlist Section
function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section id="waitlist" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/10 to-transparent" />
      
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <SectionReveal>
          <FloatingElement amplitude={8} duration={6}>
            <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-gold/30">
              <Music size={36} className="text-gold" />
            </div>
          </FloatingElement>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6">
            Be the First to <span className="text-gold-gradient">Create</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Join the waitlist and get early access to AfroMuse AI when we launch.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 glass-card-gold rounded-lg"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Sparkles size={24} className="text-amber-400" />
              </div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">You&apos;re on the list!</h3>
              <p className="text-muted-foreground">We&apos;ll notify you when AfroMuse AI launches.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-secondary/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gold text-background font-medium rounded-sm hover:bg-gold-light transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Join
              </motion.button>
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  )
}

// Footer
function AfroMuseFooter() {
  return (
    <footer className="border-t border-gold/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%2010.18.37-sNIpWzBPHNGnR0ifjyfLQDDLzZ3PyE.jpeg"
            alt="AfroMuse AI"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-display text-gold-gradient">AfroMuse AI</span>
          <span className="text-muted-foreground text-sm">by AURELIX SYSTEMS</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AURELIX SYSTEMS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// Main Page
export default function AfroMusePage() {
  return (
    <main className="relative">
      <AfroMuseNav />
      <AfroMuseHero />
      <WorkflowSection />
      <LyricsSection />
      <BlueprintSection />
      <AudioSection />
      <ProductShowcaseSection />
      <ProducerToolsSection />
      <CollaborationSection />
      <WaitlistSection />
      <AfroMuseFooter />
    </main>
  )
}
