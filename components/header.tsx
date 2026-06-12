"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, FlaskConical } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30)
      // highlight active section
      const sections = ["resources", "virtual-lab", "about", "contact"]
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "resources",   label: "Resources" },
    { href: "virtual-lab", label: "Virtual Lab" },
    { href: "about",       label: "About" },
    { href: "contact",     label: "Contact" },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
            <FlaskConical className="w-5 h-5 text-primary" />
          </div>
          <span className="font-serif text-lg font-bold text-foreground hidden sm:block">
            Basanta Bhattarai
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === href
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-all"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg animate-slide-up-mobile">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  activeSection === href
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
