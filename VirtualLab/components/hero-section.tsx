"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FlaskConical, ArrowRight } from "lucide-react"
import { photos } from "@/lib/static-data"
import TypewriterText from "@/components/typewriter-text"

export default function HeroSection() {
  const coverPhoto = photos.find((p) => p.type === "cover")

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-background">
      {/* soft cover photo, subtle */}
      {coverPhoto && (
        <Image
          src={coverPhoto.url}
          alt=""
          fill
          className="object-cover object-center opacity-[0.08]"
          priority
          sizes="100vw"
        />
      )}

      {/* gentle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container mx-auto px-4 py-28 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-medium mb-6 tracking-wide uppercase">
            <FlaskConical className="w-3.5 h-3.5" />
            Ilam, Nepal
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-[1.1] animate-slide-up">
            Learning Portal &amp;
            <span className="block text-primary">Virtual Lab</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-slide-up stagger-1 min-h-[3.5em] sm:min-h-[2.5em]">
            <TypewriterText
              text="Interactive science and maths simulations that run right in your browser — built by a teacher, for every classroom."
              speed={26}
              startDelay={400}
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-slide-up stagger-2">
            <Button size="xl" className="gap-2 shadow-glow" asChild>
              <Link href="/virtual-lab">
                <FlaskConical className="w-5 h-5" />
                Open Virtual Lab
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="gap-2" asChild>
              <Link href="/about">
                About Me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
