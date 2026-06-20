import type { Metadata } from "next"
import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Basanta Bhattarai",
  description: "Government teacher and fullstack developer from Ilam, Nepal, building free educational tools.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
