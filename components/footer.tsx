"use client"

import Link from "next/link"
import { FlaskConical, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* brand */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/20">
              <FlaskConical className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">Basanta Bhattarai</p>
              <p className="text-muted-foreground text-xs">Teacher & Programmer · Ilam, Nepal</p>
            </div>
          </div>

          {/* links */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span className="opacity-30">•</span>
            <Link href="/terms"   className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>

          {/* credit */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built for Nepal's classrooms
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Basanta Bhattarai. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
