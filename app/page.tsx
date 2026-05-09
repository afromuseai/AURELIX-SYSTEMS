import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { ProductsSection } from '@/components/sections/products'
import { AboutSection } from '@/components/sections/about'
import { ResearchSection } from '@/components/sections/research'
import { TeamSection } from '@/components/sections/team'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ResearchSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
