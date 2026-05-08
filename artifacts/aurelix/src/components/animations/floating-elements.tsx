

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function FloatingElement({ 
  children, 
  className = "",
  duration = 6,
  delay = 0,
  amplitude = 10
}: { 
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  amplitude?: number
}) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function PulseGlow({ 
  children, 
  className = "",
  color = "rgba(212, 175, 55, 0.3)"
}: { 
  children: ReactNode
  className?: string
  color?: string
}) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 20px ${color}`,
          `0 0 40px ${color}`,
          `0 0 20px ${color}`
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function GradientOrb({ 
  className = "",
  size = 400,
  color = "gold"
}: { 
  className?: string
  size?: number
  color?: "gold" | "blue" | "purple"
}) {
  const colors = {
    gold: "from-[oklch(0.78_0.14_85/0.2)] via-[oklch(0.65_0.16_85/0.1)] to-transparent",
    blue: "from-blue-500/20 via-cyan-500/10 to-transparent",
    purple: "from-purple-500/20 via-pink-500/10 to-transparent"
  }

  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute rounded-full blur-3xl bg-gradient-radial ${colors[color]} ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export function HoverCard({ 
  children, 
  className = "" 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxSection({ 
  children, 
  className = "",
  offset = 50
}: { 
  children: ReactNode
  className?: string
  offset?: number
}) {
  return (
    <motion.div
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
