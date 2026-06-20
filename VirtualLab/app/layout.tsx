import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Basanta Bhattarai | Teacher & Programmer",
  description:
    "Explore interactive GeoGebra and HTML virtual lab simulations. Basanta Bhattarai – Government Teacher and Fullstack Developer from Ilam, Nepal.",
  keywords:
    "Basanta Bhattarai, educational software, virtual lab, GeoGebra, Nepal education, Ilam, teacher, fullstack developer",
}

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
