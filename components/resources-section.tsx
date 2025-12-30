"use client"

import { resources } from "@/lib/static-data"
import { Button } from "@/components/ui/button"
import { FileArchive, Calendar, HardDrive, ExternalLink } from "lucide-react"

export default function ResourcesSection() {
  const handleDownload = (downloadLink: string, title: string) => {
    window.open(downloadLink, "_blank")
  }

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return "Unknown size"
    const mb = bytes / (1024 * 1024)
    return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(1)} KB`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <section id="resources" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Educational Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download free educational software and learning materials designed to enhance your learning experience.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {resources.length === 0 ? (
          <div className="text-center py-12">
            <FileArchive className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No resources available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                className="glass-card rounded-xl overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <FileArchive className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif font-semibold text-lg text-foreground truncate">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">Educational Software</p>
                    </div>
                  </div>

                  {resource.description && (
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{resource.description}</p>
                  )}

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    {resource.file_size && (
                      <span className="flex items-center gap-1">
                        <HardDrive className="w-3 h-3" />
                        {formatFileSize(resource.file_size)}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(resource.created_at)}
                    </span>
                  </div>

                  <Button
                    variant="success"
                    className="w-full gap-2"
                    onClick={() => handleDownload(resource.download_link, resource.title)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Download from Drive
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
