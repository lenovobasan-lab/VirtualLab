import type { Metadata } from "next"
import Header from "@/components/header"
import VirtualLabSection from "@/components/virtual-lab-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Virtual Lab | Basanta Bhattarai",
  description: "Run interactive GeoGebra, PhET, and HTML science & maths simulations right in your browser.",
}

export default function VirtualLabPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <VirtualLabSection />
      </main>
      <Footer />
    </div>
  )
}
