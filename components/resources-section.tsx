"use client"

import { resources } from "@/lib/static-data"
import { Button } from "@/components/ui/button"
import { FileArchive, Calendar, HardDrive, Download, Code2, Cpu, FileText } from "lucide-react"

function toDirectDownload(url: string): string {
  const m = url.match(/\/file\/d\/([^/]+)/)
  return m ? `https://drive.google.com/uc?export=download&id=${m[1]}` : url
}

function formatSize(bytes: number | null): string {
  if (!bytes) return "—"
  return bytes >= 1_048_576 ? `${(bytes / 1_048_576).toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

const categoryMeta = {
  software:   { label: "Software",   icon: Code2,   color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
  simulation: { label: "Simulation", icon: Cpu,     color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  document:   { label: "Document",   icon: FileText, color: "text-amber-400", bg: "bg-amber-500/10",  border: "border-amber-500/20" },
  default:    { label: "Resource",   icon: FileArchive, color: "text-primary", bg: "bg-primary/10",  border: "border-primary/20" },
}

export default function ResourcesSection() {
  return (
    <section id="resources" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* ambient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Download className="w-4 h-4" />
            Free Downloads
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Educational Resources</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Open-source software and simulations, built for Nepal's classrooms.
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {resources.length === 0 ? (
          <div className="text-center py-16">
            <FileArchive className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">No resources yet. Add them in <code>lib/static-data.ts</code></p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r, i) => {
              const cat = r.category ? categoryMeta[r.category] : categoryMeta.default
              const Icon = cat.icon
              return (
                <div
                  key={r.id}
                  className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-in flex flex-col"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  {/* top strip */}
                  <div className={`h-1 w-full ${cat.bg} border-b ${cat.border}`}
                    style={{ background: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))` }} />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${cat.bg} border ${cat.border} shrink-0`}>
                        <Icon className={`w-5 h-5 ${cat.color}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif font-semibold text-base text-foreground line-clamp-2">{r.title}</h3>
                        <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full border ${cat.bg} ${cat.color} ${cat.border}`}>
                          {cat.label}
                        </span>
                      </div>
                    </div>

                    {r.description && (
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{r.description}</p>
                    )}

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <HardDrive className="w-3 h-3" />
                        {formatSize(r.file_size)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(r.created_at)}
                      </span>
                    </div>

                    <a
                      href={toDirectDownload(r.download_link)}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="w-full gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-md hover:shadow-glow transition-all"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
