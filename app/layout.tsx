import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "../styles/globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Basanta Bhattarai | Teacher & Programmer",
  description:
    "Download free educational software and explore interactive GeoGebra virtual labs. Basanta Bhattarai – Government Teacher and Fullstack Developer from Ilam, Nepal.",
  keywords:
    "Basanta Bhattarai, educational software, virtual lab, GeoGebra, Nepal education, Ilam, teacher, fullstack developer",
}

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
