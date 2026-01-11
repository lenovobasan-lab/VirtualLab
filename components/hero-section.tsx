"use client"

import { Button } from "@/components/ui/button"
import { Download, FlaskConical, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="relative animate-fade-in">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary-foreground/30 shadow-2xl animate-float bg-white flex items-center justify-center p-4">
              <img src="/images/science-teacher.PNG" alt="Waving Nepal Flag" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary-foreground/80 text-lg mb-3 animate-fade-in">{"Namaste 🙏 I'm"}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4 animate-slide-up">
              Basanta Bhattarai
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 animate-slide-up stagger-1">
              Teacher & Programmer
            </p>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed animate-slide-up stagger-2">
              Empowering education through technology. Download free educational software and explore interactive
              virtual labs designed for students and educators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
              <Button variant="hero" size="xl" onClick={() => scrollToSection("#resources")} className="gap-2">
                <Download className="w-5 h-5" />
                Download Resources
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("#virtual-lab")} className="gap-2">
                <FlaskConical className="w-5 h-5" />
                Virtual Lab
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}
