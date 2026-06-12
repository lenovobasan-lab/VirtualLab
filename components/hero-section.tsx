"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, FlaskConical, ChevronDown, Atom } from "lucide-react"
import { photos } from "@/lib/static-data"
import Image from "next/image"

// ── Animated star / particle canvas ──────────────────────────────────────────
function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf: number
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
      twinkle: Math.random() * Math.PI * 2,
    }))

    // floating particles
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      hue: Math.random() > 0.5 ? 220 : 45,
    }))

    let t = 0
    const draw = () => {
      t++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // gradient backdrop
      const grad = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.4, 0,
        canvas.width * 0.5, canvas.height * 0.4, canvas.width * 0.8,
      )
      grad.addColorStop(0,   "rgba(30,50,120,0.15)")
      grad.addColorStop(0.5, "rgba(10,20,60,0.08)")
      grad.addColorStop(1,   "rgba(0,0,0,0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // stars
      stars.forEach((s) => {
        s.twinkle += 0.02
        const alpha = 0.4 + 0.6 * Math.abs(Math.sin(s.twinkle))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,210,255,${alpha * s.alpha})`
        ctx.fill()
        s.y -= s.speed
        if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width }
      })

      // particles
      particles.forEach((p) => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
        grd.addColorStop(0, `hsla(${p.hue},90%,70%,${p.alpha})`)
        grd.addColorStop(1, `hsla(${p.hue},90%,70%,0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
      })

      // nebula blobs
      ;[[0.2, 0.3, 120, 220], [0.8, 0.6, 180, 280], [0.5, 0.8, 80, 160]].forEach(
        ([rx, ry, rad, hue]) => {
          const g = ctx.createRadialGradient(
            canvas.width * rx, canvas.height * ry, 0,
            canvas.width * rx, canvas.height * ry, rad,
          )
          const pulse = 0.04 + 0.02 * Math.sin(t * 0.01 + hue)
          g.addColorStop(0, `hsla(${hue},80%,60%,${pulse})`)
          g.addColorStop(1, "transparent")
          ctx.fillStyle = g
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        },
      )

      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

// ── Floating 3-D atom ornament ────────────────────────────────────────────────
function AtomOrnament() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none">
      <div className="relative w-56 h-56">
        {/* nucleus */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-primary shadow-glow" style={{ boxShadow: "0 0 30px hsl(220 80% 56% / 0.8)" }} />
        </div>
        {/* orbit rings */}
        {[
          { size: 220, duration: "8s",  color: "hsl(220 80% 56% / 0.4)", delay: "0s" },
          { size: 160, duration: "5s",  color: "hsl(45 95% 58% / 0.35)", delay: "-2s" },
          { size: 100, duration: "3.5s",color: "hsl(160 70% 45% / 0.35)", delay: "-1s" },
        ].map(({ size, duration, color, delay }, i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: size, height: size,
              top: "50%", left: "50%",
              marginTop: -size / 2, marginLeft: -size / 2,
              borderColor: color,
              transform: `rotate(${i * 60}deg)`,
              animation: `spin ${duration} linear infinite`,
              animationDelay: delay,
            }}
          >
            {/* electron dot */}
            <div
              className="absolute w-3 h-3 rounded-full"
              style={{
                top: -6, left: "50%", marginLeft: -6,
                backgroundColor: color.replace("/ 0.", "/ 0.9"),
                boxShadow: `0 0 8px ${color}`,
              }}
            />
          </div>
        ))}
      </div>
      <style>{`@keyframes spin { from { transform: rotate(var(--r, 0deg)) } to { transform: rotate(calc(var(--r,0deg) + 360deg)) } }`}</style>
    </div>
  )
}

export default function HeroSection() {
  const coverPhoto = photos.find((p) => p.type === "cover")

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* cover photo dimmed */}
      {coverPhoto && (
        <Image
          src={coverPhoto.url} alt="Cover"
          fill className="object-cover object-center opacity-10"
          priority sizes="100vw"
        />
      )}

      {/* animated canvas */}
      <StarCanvas />

      {/* grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* floating atom */}
      <AtomOrnament />

      {/* content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

          {/* eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Atom className="w-4 h-4" />
            Teacher & Programmer · Ilam, Nepal
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 animate-slide-up leading-tight">
            Basanta
            <span className="block text-glow" style={{ color: "hsl(var(--primary))" }}>
              Bhattarai
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up stagger-1 font-light">
            Empowering students through interactive science & maths simulations — free for every school in Nepal.
          </p>

          <p className="text-muted-foreground mb-10 animate-slide-up stagger-2 leading-relaxed">
            Download open-source educational software, or jump straight into the Virtual Lab and run experiments right in your browser — no installation needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
            <Button
              size="xl"
              className="gap-2 bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow text-primary-foreground"
              onClick={() => scrollTo("#resources")}
            >
              <Download className="w-5 h-5" />
              Download Resources
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="gap-2 border-primary/40 text-primary hover:bg-primary/10"
              onClick={() => scrollTo("#virtual-lab")}
            >
              <FlaskConical className="w-5 h-5" />
              Open Virtual Lab
            </Button>
          </div>

          {/* stats strip */}
          <div className="flex gap-8 mt-12 justify-center lg:justify-start animate-slide-up stagger-4">
            {[
              { value: "7+", label: "Simulations" },
              { value: "4+", label: "Free Tools" },
              { value: "100%", label: "Free & Open" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-serif font-bold text-primary">{value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <button
        onClick={() => scrollTo("#resources")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
