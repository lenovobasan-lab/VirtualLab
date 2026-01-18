import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ResourcesSection from "@/components/resources-section"
import VirtualLabSection from "@/components/virtual-lab-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ResourcesSection />
        <VirtualLabSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
