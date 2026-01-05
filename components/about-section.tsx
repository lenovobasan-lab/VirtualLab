import { MapPin, Briefcase, Phone, Mail, BookOpen, Code, GraduationCap } from "lucide-react"

export default function AboutSection() {
  const details = [
    {
      icon: MapPin,
      label: "Address",
      value: "Suryodaya Municipality -7, Ilam",
    },
    {
      icon: Briefcase,
      label: "Occupation",
      value: "Teacher & Fullstack Developer",
    },
    {
      icon: Phone,
      label: "Contact",
      value: "+977 9816027097",
      subvalue: "(WhatsApp)",
    },
    {
      icon: Mail,
      label: "Email",
      value: "linkinbasant@gmail.com",
    },
  ]

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="mb-8 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Namaste! I am <strong className="text-foreground">Basanta Bhattarai</strong>, a dedicated Government
                Teacher and passionate Fullstack Developer from the beautiful hills of Ilam, Nepal. With years of
                experience in both teaching and software development, I have witnessed firsthand the transformative
                power of technology in education.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began as an educator in Nepal's public school system, where I discovered that many students
                struggled to visualize complex scientific and mathematical concepts. This challenge inspired me to
                combine my teaching expertise with programming skills to create innovative educational solutions.
              </p>
            </div>

            <div className="mb-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                My Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between traditional education and modern technology by developing free, accessible
                educational software and interactive virtual laboratories that make learning engaging, effective, and
                available to every student across Nepal and beyond.
              </p>
            </div>

            <div className="mb-8 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">As a Teacher</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I teach science and mathematics at a government school, focusing on making complex concepts simple and
                  relatable. I believe every student deserves quality education regardless of their location or
                  resources.
                </p>
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">As a Developer</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I specialize in creating educational software, interactive simulations, and web applications that
                  enhance the learning experience. My tools are designed to be intuitive, engaging, and effective for
                  students of all levels.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What I Offer</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Educational Software:</strong> Custom-built applications for
                    learning science, mathematics, and other subjects with interactive features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Virtual Lab Simulations:</strong> GeoGebra-powered interactive
                    experiments and demonstrations that bring abstract concepts to life
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Free Resources:</strong> All materials are freely available to
                    download and use for educational purposes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Continuous Updates:</strong> Regular improvements and new
                    content based on feedback from students and teachers
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {details.map((detail, index) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <detail.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                    <p className="font-medium text-foreground">{detail.value}</p>
                    {detail.subvalue && <p className="text-sm text-muted-foreground mt-1">{detail.subvalue}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
