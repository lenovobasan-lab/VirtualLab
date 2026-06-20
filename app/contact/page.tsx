import type { Metadata } from "next"
import Header from "@/components/header"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Basanta Bhattarai",
  description: "Get in touch with Basanta Bhattarai — teacher and fullstack developer from Ilam, Nepal.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
