

import { Link } from 'wouter'

import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@aurelixsystems.com' },
]

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'AfroMuse AI', href: '/afromuse' },
      { name: 'GTPro', href: '/gtpro' },
      { name: 'STAGEONE', href: '#' },
      { name: 'Cyber Intelligence', href: '#' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Research', href: '#research' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#contact' },
    ]
  }
]

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-background">
      {/* Background Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-[0.02]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9898%202-noS4bL9j7gMmoKm7GIwsGKtK0GSEit.jpeg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AURELIX%202-QGGuwC7muGNnXAj2RCJcXoHqcOYEKd.jpeg"
                  alt="AURELIX SYSTEMS"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-xl tracking-wider text-gold-gradient block">
                  AURELIX
                </span>
                <span className="text-xs tracking-[0.3em] text-muted-foreground">
                  SYSTEMS
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Building intelligent systems for a better future. AI-powered infrastructure for creativity, business, finance, and security.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="p-2 rounded-sm bg-secondary/50 text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm tracking-wider text-foreground mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AURELIX SYSTEMS. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
