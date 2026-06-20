"use client"

import { useState, useMemo } from "react"
import { simulations, type Simulation } from "@/lib/static-data"
import { Button } from "@/components/ui/button"
import { FlaskConical, ExternalLink, Monitor, Globe, FileCode, Atom, BookOpen, Upload } from "lucide-react"

// ── helpers ──────────────────────────────────────────────────────────────────

function getEmbedUrl(sim: Simulation): string {
  if (sim.type === "html" || sim.type === "phet" || sim.type === "url") return sim.url
  // GeoGebra
  const m = sim.url.match(/geogebra\.org\/m\/([a-zA-Z0-9]+)/)
  if (m) {
    return `https://www.geogebra.org/material/iframe/id/${m[1]}/width/800/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false`
  }
  return sim.url
}

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
  Science:     "bg-green-500/15  text-green-400  border-green-500/30",
  Chemistry:   "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Physics:     "bg-blue-500/15   text-blue-400   border-blue-500/30",
  Mathematics: "bg-amber-500/15  text-amber-400  border-amber-500/30",
  Astronomy:   "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
}

// ── component ─────────────────────────────────────────────────────────────────

export default function VirtualLabSection() {
  const [active, setActive]       = useState<Simulation>(simulations[0])
  const [filter, setFilter]       = useState("All")
  const [iframeKey, setIframeKey] = useState(0)

  const subjects = useMemo(() => {
    const s = new Set(simulations.map((s) => s.subject ?? "Other"))
    return ["All", ...Array.from(s)]
  }, [])

  const filtered = useMemo(
    () => filter === "All" ? simulations : simulations.filter((s) => s.subject === filter),
    [filter],
  )

  const select = (sim: Simulation) => {
    setActive(sim)
    setIframeKey((k) => k + 1)
  }

  if (simulations.length === 0) {
    return (
      <section id="virtual-lab" className="section-padding bg-background">
        <div className="container mx-auto text-center py-8">
          <FlaskConical className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
          <p className="text-muted-foreground">No simulations yet. Add some in <code>lib/static-data.ts</code></p>
        </div>
      </section>
    )
  }

  return (
    <section id="virtual-lab" className="section-padding bg-background relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <FlaskConical className="w-4 h-4" />
            Interactive Simulations
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Virtual Lab</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Explore simulations right here in the browser. Works with GeoGebra, PhET, and your own HTML files.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* subject filter */}
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

        <div className="grid lg:grid-cols-3 gap-6">
          {/* ── sidebar ── */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            <div className="glass-card rounded-xl p-4 flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> {filtered.length} simulation{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="space-y-1.5 max-h-[480px] overflow-y-auto pr-0.5">
                {filtered.map((sim) => (
                  <button
                    key={sim.id}
                    onClick={() => select(sim)}
                    className={`w-full text-left p-3 rounded-xl transition-all group ${
                      active.id === sim.id
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "hover:bg-white/5 text-foreground"
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
                          <span className={`text-xs ${active.id === sim.id ? "opacity-60" : "text-muted-foreground"}`}>
                            {typeLabel(sim.type)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── viewer ── */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* topbar */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border/50 bg-white/3">
                {/* window dots */}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
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

                {/* open external */}
                <a href={active.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open
                  </Button>
                </a>
              </div>

              {/* description */}
              {active.description && (
                <div className="px-5 py-2.5 bg-primary/5 border-b border-border/30 text-xs text-muted-foreground">
                  {active.description}
                </div>
              )}

              {/* iframe */}
              <div className="relative w-full bg-black" style={{ paddingBottom: "60%" }}>
                <iframe
                  key={`${active.id}-${iframeKey}`}
                  src={getEmbedUrl(active)}
                  title={active.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
