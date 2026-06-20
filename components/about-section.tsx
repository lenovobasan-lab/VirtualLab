import Image from "next/image"
import { MapPin, Briefcase, Phone, Mail, BookOpen, Code, GraduationCap, Sparkles } from "lucide-react"
import { photos } from "@/lib/static-data"

export default function AboutSection() {
  const profilePhoto = photos.find((p) => p.type === "profile")

  const details = [
    { icon: MapPin,    label: "Location",   value: "Suryodaya Municipality-7, Ilam" },
    { icon: Briefcase, label: "Role",        value: "Teacher & Fullstack Developer" },
    { icon: Phone,     label: "WhatsApp",   value: "+977 9816027097" },
    { icon: Mail,      label: "Email",      value: "linkinbasant@gmail.com" },
  ]

  const offerings = [
    { title: "Educational Software", desc: "Custom-built apps for science and mathematics with interactive features." },
    { title: "Virtual Lab Sims",     desc: "GeoGebra-powered experiments that bring abstract concepts to life." },
    { title: "HTML Simulations",     desc: "Self-contained simulations you can run directly inside the Virtual Lab." },
    { title: "Open & Free",          desc: "Everything here is free to use for any student or classroom." },
  ]

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* ambient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            About Me
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            The Person Behind the Lab
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* profile card */}
          <div className="glass-card rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* photo */}
              <div className="shrink-0 mx-auto md:mx-0">
                <div
                  className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-primary/30"
                  style={{ boxShadow: "0 0 40px hsl(173 58% 32% / 0.25)" }}
                >
                  {profilePhoto ? (
                    <Image
                      src={profilePhoto.url}
                      alt="Basanta Bhattarai"
                      fill
                      className="object-cover"
                      sizes="144px"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">BB</span>
                    </div>
                  )}
                </div>
              </div>

              {/* bio */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">Basanta Bhattarai</h3>
                <p className="text-primary text-sm font-medium mb-3">Government Teacher · Fullstack Developer</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Namaste 🙏 — I teach science and maths in a government school in the hills of Ilam, Nepal.
                  Watching students struggle to visualise abstract concepts pushed me to combine teaching
                  with programming, building free tools that every school can use.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Everything here is <span className="text-foreground font-medium">free and open</span> — from
                  the GeoGebra simulations to the locally-run HTML experiments you'll find in the Virtual Lab.
                </p>
              </div>
            </div>
          </div>

          {/* mission */}
          <div className="glass-card rounded-2xl p-6 mb-6 border-l-4 border-primary">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-primary/10 shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bridge traditional education and modern technology by building free, accessible virtual
                  laboratories — making quality science education available to every student across Nepal and beyond,
                  regardless of location or resources.
                </p>
              </div>
            </div>
          </div>

          {/* teacher / dev cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { icon: BookOpen, title: "As a Teacher",   text: "I teach science and mathematics at a government school, making complex ideas simple and relatable for every student." },
              { icon: Code,     title: "As a Developer", text: "I build educational software, simulations, and web apps — designed to be intuitive and effective for students of all levels." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-card rounded-xl p-5 flex gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 shrink-0 h-fit">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* offerings grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {offerings.map(({ title, desc }, i) => (
              <div key={title}
                className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50 hover-lift animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* contact details */}
          <div className="grid sm:grid-cols-2 gap-3">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
