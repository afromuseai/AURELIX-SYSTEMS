

import { useState } from 'react'

import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'
import { Send, Mail, MapPin, ArrowRight } from 'lucide-react'

export function ContactSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'contact' }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setIsSubmitted(true)
      setEmail('')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.03] to-transparent" />
      
      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.015] pointer-events-none">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9898%202-noS4bL9j7gMmoKm7GIwsGKtK0GSEit.jpeg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div>
            <SectionReveal>
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-gold bg-gold/10 rounded-full border border-gold/20 mb-6">
                GET IN TOUCH
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider mb-6 leading-tight">
                Join the
                <br />
                <span className="text-gold-gradient">Future of AI</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Be among the first to experience our revolutionary AI products. 
                Join our waitlist and stay updated on launches, research breakthroughs, 
                and exclusive early access opportunities.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">contact@aurelixsystems.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Global Operations</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right - Form */}
          <SectionReveal delay={0.3} direction="left">
            <motion.div 
              className="p-8 glass-card-gold rounded-lg"
              whileHover={{ borderColor: 'rgba(212, 175, 55, 0.4)' }}
            >
              <h3 className="font-display text-xl tracking-wider text-foreground mb-2">
                Join the Waitlist
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Get early access to our AI products and exclusive updates.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 text-gold flex items-center justify-center">
                    <Send size={24} />
                  </div>
                  <h4 className="font-display text-lg text-gold-gradient mb-2">
                    You&apos;re on the list!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll be in touch with updates soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  {error && (
                    <p className="text-xs text-red-400">{error}</p>
                  )}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold text-background font-medium rounded-sm hover:bg-gold-light disabled:opacity-50 transition-all duration-300 glow-gold-sm hover:glow-gold"
                  >
                    {isSubmitting ? (
                      'Joining...'
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
