"use client"

import { Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-serif text-xl font-semibold mb-2">Basanta Bhattarai</h3>
          <p className="text-primary-foreground/70 text-sm mb-4">Teacher & Programmer</p>

          <div className="flex items-center justify-center gap-4 mb-4 text-sm">
            <Link
              href="/privacy"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-primary-foreground/40">•</span>
            <Link href="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>

          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
            Developed by Basanta Bhattarai 
          </p>
          <p className="text-primary-foreground/50 text-xs mt-4">
            © {currentYear} Basanta Bhattarai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
