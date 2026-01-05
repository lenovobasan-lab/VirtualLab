import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Basanta Bhattarai | Teacher & Programmer",
  description:
    "Download free educational software and explore interactive GeoGebra virtual labs. Basanta Bhattarai - Government Teacher and Fullstack Developer from Ilam, Nepal.",
  keywords:
    "Basanta Bhattarai, educational software, virtual lab, GeoGebra, Nepal education, Ilam, teacher, fullstack developer",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9540905785249745"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
