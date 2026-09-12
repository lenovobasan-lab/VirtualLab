"use client"

import { useState, useMemo, useEffect } from "react"
import { simulations, type Simulation } from "@/lib/static-data"
import { Button } from "@/components/ui/button"
import { FlaskConical, Monitor, Globe, FileCode, Atom, BookOpen, Search, ArrowRight } from "lucide-react"

// ── helpers ──────────────────────────────────────────────────────────────────

function TypeIcon({ type }: { type: Simulation["type"] }) {
  const cls = "w-4 h-4"
  if (type === "html")    return <FileCode className={cls} />
  if (type === "phet")    return <Monitor  className={cls} />
  if (type === "geogebra") return <Atom    className={cls} />
  return <Globe className={cls} />
}

function typeLabel(type: Simulation["type"]) {
  if (type === "html")    return "HTML"
  if (type === "phet")    return "PhET"
  if (type === "geogebra") return "GeoGebra"
  return "Web"
}

const subjectColors: Record<string, string> = {
  Science:     "bg-emerald-500/12  text-emerald-700  border-emerald-500/25 dark:text-emerald-400",
  Chemistry:   "bg-violet-500/12 text-violet-700 border-violet-500/25 dark:text-violet-400",
  Physics:     "bg-sky-500/12   text-sky-700   border-sky-500/25 dark:text-sky-400",
  Mathematics: "bg-amber-500/12  text-amber-700  border-amber-500/25 dark:text-amber-400",
  Astronomy:   "bg-indigo-500/12 text-indigo-700 border-indigo-500/25 dark:text-indigo-400",
}

// ── component ─────────────────────────────────────────────────────────────────

export default function VirtualLabSection() {
  const [active, setActive]       = useState<Simulation>(simulations[0])
  const [filter, setFilter]       = useState("All")
  const [query, setQuery]         = useState("")

  const subjects = useMemo(() => {
    const s = new Set(simulations.map((s) => s.subject ?? "Other"))
    return ["All", ...Array.from(s)]
  }, [])

  const filtered = useMemo(
    () => {
      const normalizedQuery = query.trim().toLowerCase()
      return simulations.filter((simulation) => {
        const matchesSubject = filter === "All" || simulation.subject === filter
        const searchableText = `${simulation.title} ${simulation.description ?? ""} ${simulation.subject ?? ""}`.toLowerCase()
        return matchesSubject && (!normalizedQuery || searchableText.includes(normalizedQuery))
      })
    },
    [filter, query],
  )

  useEffect(() => {
    if (filtered.length > 0 && !filtered.some((simulation) => simulation.id === active.id)) {
      setActive(filtered[0])
    }
  }, [active.id, filtered])

  const select = (sim: Simulation) => {
    setActive(sim)
  }

  if (simulations.length === 0) {
    return (
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center py-8">
          <FlaskConical className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
          <p className="text-muted-foreground">No simulations yet. Add some in <code>lib/static-data.ts</code></p>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <FlaskConical className="w-4 h-4" />
            Interactive Simulations
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Virtual Lab</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Explore simulations right here in the browser. Works with GeoGebra, PhET, and your own HTML files.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* subject filter */}
        <div className="max-w-xl mx-auto mb-4 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search simulations..."
            aria-label="Search simulations"
            className="w-full h-11 rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {subjects.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                filter === s
                  ? "bg-primary border-primary text-primary-foreground shadow-glow"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* sidebar narrower (1/4), viewer wider (3/4) — viewer is where learning happens */}
        <div className="grid lg:grid-cols-4 gap-4 md:gap-6">
          {/* ── sidebar ── */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            <div className="glass-card rounded-xl p-3 sm:p-4 flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> {filtered.length} simulation{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="space-y-1.5 max-h-[34vh] lg:max-h-[480px] overflow-y-auto pr-0.5">
                {filtered.map((sim) => (
                  <button
                    key={sim.id}
                    onClick={() => select(sim)}
                    className={`w-full text-left p-3 rounded-xl transition-all group ${
                      active.id === sim.id
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className={`mt-0.5 p-1.5 rounded-lg ${active.id === sim.id ? "bg-white/20" : "bg-primary/10"}`}>
                        <TypeIcon type={sim.type} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm leading-tight truncate">{sim.title}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          {sim.subject && (
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${
                              active.id === sim.id
                                ? "bg-white/15 border-white/20 text-white/80"
                                : (subjectColors[sim.subject] ?? "bg-muted/50 text-muted-foreground border-border")
                            }`}>
                              {sim.subject}
                            </span>
                          )}
                          <span className={`text-xs ${active.id === sim.id ? "opacity-70" : "text-muted-foreground"}`}>
                            {typeLabel(sim.type)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="py-8 text-center text-sm text-muted-foreground">No simulations found.</p>
                )}
              </div>
            </div>
          </div>

          {/* ── viewer (wider — where the actual learning happens) ── */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* topbar */}
              <div className="flex items-center gap-2 px-3 sm:px-5 py-3.5 border-b border-border bg-secondary/40">
                {/* window dots */}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                </div>

                {/* title */}
                <div className="flex-1 min-w-0 flex items-center gap-2">
                  <div className={`p-1 rounded-md ${subjectColors[active.subject ?? ""] ?? "bg-primary/10"}`}>
                    <TypeIcon type={active.type} />
                  </div>
                  <span className="font-medium text-sm text-foreground truncate">{active.title}</span>
                  {active.subject && (
                    <span className={`hidden sm:inline text-xs px-2 py-0.5 rounded-full border ${subjectColors[active.subject] ?? "bg-muted/50 text-muted-foreground border-border"}`}>
                      {active.subject}
                    </span>
                  )}
                </div>

              </div>

              {/* description */}
              {active.description && (
                <div className="px-5 py-2.5 bg-primary/5 border-b border-border/60 text-xs text-muted-foreground">
                  {active.description}
                </div>
              )}

              {/* Keep every simulation unloaded until the user explicitly enters it. */}
              {
                <div className="relative min-h-[320px] sm:min-h-[460px] overflow-hidden bg-card">
                  <img
                    src={active.previewImage ?? "/images/simulation-preview.svg"}
                    alt={`${active.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/55" />
                  <div className="relative z-10 flex min-h-[320px] sm:min-h-[460px] items-center justify-center p-5 sm:p-8">
                    <a href={active.url} target="_blank" rel="noopener noreferrer">
                      <Button type="button" className="gap-2 shadow-lg">
                        Click here
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
