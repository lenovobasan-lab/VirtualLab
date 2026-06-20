import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const methods = [
    { icon: Phone,         label: "Phone",    value: "+977 9816027097",          href: "tel:+9779816027097",                                       color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
    { icon: MessageCircle, label: "WhatsApp", value: "+977 9816027097",          href: "https://wa.me/9779816027097",                              color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20" },
    { icon: Mail,          label: "Email",    value: "linkinbasant@gmail.com",   href: "mailto:linkinbasant@gmail.com",                            color: "text-amber-400",  bg: "bg-amber-500/10",  border: "border-amber-500/20" },
    { icon: MapPin,        label: "Location", value: "Suryodaya Mun-7, Ilam",   href: "https://maps.google.com/?q=Suryodaya+Municipality+Ilam",   color: "text-red-400",    bg: "bg-red-500/10",    border: "border-red-500/20" },
  ]

  return (
    <section className="section-padding bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Let's Connect
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Get In Touch</h1>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Have questions or want to collaborate? Reach out through any of these channels.
          </p>
          <div className="w-16 h-0.5 bg-green-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {methods.map(({ icon: Icon, label, value, href, color, bg, border }, i) => (
            <a
              key={label}
              href={href}
              target={label !== "Phone" && label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`glass-card rounded-2xl p-5 text-center hover-lift animate-fade-in group border ${border}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{label}</p>
              <p className="font-medium text-foreground text-xs leading-tight">{value}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="gap-2 bg-green-600 hover:bg-green-500 text-white shadow-md"
            asChild
          >
            <a href="https://wa.me/9779816027097" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button variant="outline" className="gap-2 border-blue-500/40 text-blue-400 hover:bg-blue-500/10" asChild>
            <a href="https://www.facebook.com/share/1a7VDo6F8S/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4" />
              Follow on Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
