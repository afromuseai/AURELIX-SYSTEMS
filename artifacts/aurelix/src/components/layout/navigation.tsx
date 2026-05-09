

import { useState, useEffect } from 'react'
import { Link } from 'wouter'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-gold/10' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AURELIX%202-QGGuwC7muGNnXAj2RCJcXoHqcOYEKd.jpeg"
                  alt="AURELIX SYSTEMS"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-lg tracking-wider text-gold-gradient hidden sm:block">
                AURELIX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="px-5 py-2 text-sm font-medium bg-gold/10 text-gold border border-gold/30 rounded-sm hover:bg-gold/20 transition-all duration-300 tracking-wide"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav 
              className="relative pt-24 px-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-2xl font-display tracking-wider text-foreground hover:text-gold transition-colors border-b border-border/50"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block px-8 py-3 text-lg font-medium bg-gold text-background rounded-sm hover:bg-gold-light transition-all duration-300 tracking-wide"
                >
                  Get Started
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
