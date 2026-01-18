import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9816027097",
      href: "tel:+9779816027097",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+977 9816027097",
      href: "https://wa.me/9779816027097",
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      icon: Mail,
      label: "Email",
      value: "linkinbasant@gmail.com",
      href: "mailto:linkinbasant@gmail.com",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Suryodaya Municipality -7, Ilam",
      href: "https://maps.google.com/?q=Suryodaya+Municipality+Ilam",
      color: "text-destructive",
      bg: "bg-destructive/10",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about the educational resources or want to collaborate? Feel free to reach out through any of
            the following channels.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.label === "Location" || method.label === "WhatsApp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 text-center hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-full ${method.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
              <p className="font-medium text-foreground text-sm">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/9779816027097" target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="ml-4">
            <a href="https://www.facebook.com/share/1a7VDo6F8S/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Facebook className="w-5 h-5" />
              Follow me on Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
