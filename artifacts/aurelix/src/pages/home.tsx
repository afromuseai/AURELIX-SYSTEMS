import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { ProductsSection } from '@/components/sections/products'
import { AboutSection } from '@/components/sections/about'
import { ResearchSection } from '@/components/sections/research'
import { TeamSection } from '@/components/sections/team'
import { FounderSection } from '@/components/sections/founder'
import { ManifestoSection } from '@/components/sections/manifesto'
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
      <FounderSection />
      <ManifestoSection />
      <ContactSection />

      {/* Room image rising from the bottom */}
      <div className="relative w-full overflow-hidden" style={{ height: '520px' }}>
        <img
          src="/images/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
        />
        {/* Gradient fades the top of the image into the page above */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-transparent" />
      </div>

      <Footer />
    </main>
  )
}
