"use client"

import { geogebraFiles } from "@/lib/static-data"
import { Button } from "@/components/ui/button"
import { FlaskConical, ExternalLink, BookOpen } from "lucide-react"

export default function VirtualLabSection() {
  const handleOpenSimulation = (geogebraUrl: string) => {
    window.open(geogebraUrl, "_blank")
  }

  return (
    <section id="virtual-lab" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Virtual Lab</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore interactive GeoGebra simulations for hands-on learning experience in mathematics and science.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {geogebraFiles.length === 0 ? (
          <div className="text-center py-8">
            <FlaskConical className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">No simulations available yet.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="glass-card rounded-xl p-6 sticky top-24">
                <h3 className="font-serif font-semibold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Available Simulations
                </h3>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {geogebraFiles.map((file) => (
                    <button
                      key={file.id}
                      className="w-full text-left p-3 rounded-lg transition-all bg-secondary/50 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => handleOpenSimulation(file.geogebra_url)}
                    >
                      <p className="font-medium text-sm truncate">{file.title}</p>
                      {file.subject && <p className="text-xs mt-1 opacity-70">{file.subject}</p>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="p-6 flex items-center gap-4 bg-secondary/30">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <FlaskConical className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-semibold text-base mb-1">Welcome to Virtual Lab</h3>
                    <p className="text-muted-foreground text-sm">
                      Select a simulation from the list to start exploring interactive learning content.
                      Press the "Resart Button" to simulate.
                    </p>
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-2 shrink-0"
                    onClick={() => handleOpenSimulation(geogebraFiles[0].geogebra_url)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Start
                  </Button>
                </div>

                <div className="p-6 grid sm:grid-cols-2 gap-4">
                  {geogebraFiles.slice(0, 4).map((file) => (
                    <div
                      key={file.id}
                      className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                      onClick={() => handleOpenSimulation(file.geogebra_url)}
                    >
                      <div className="flex items-start gap-3">
                        <FlaskConical className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="font-medium text-sm truncate">{file.title}</p>
                          {file.subject && <span className="text-xs text-muted-foreground">{file.subject}</span>}
                          {file.description && (
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{file.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
