import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Privacy Policy - Basanta Bhattarai",
  description: "Privacy Policy for Basanta Bhattarai's Educational Website",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Basanta Bhattarai's Educational Website. This Privacy Policy explains how we collect, use,
                and protect your information when you visit our website. We are committed to ensuring that your privacy
                is protected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following information:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Browser type and version</li>
                <li>Pages you visit and time spent on pages</li>
                <li>Anonymous usage statistics (visitor count, link clicks)</li>
                <li>Information provided through contact forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies to improve your experience on our website. Cookies are small files stored on your device
                that help us:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Track website usage and analytics</li>
                <li>Remember your preferences</li>
                <li>Provide personalized content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Google AdSense</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use Google AdSense to display advertisements on our website. Google may use cookies and web beacons
                to serve ads based on your prior visits to this website or other websites. You can opt out of
                personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Ads Settings
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to external websites (Google Drive, GeoGebra). We are not responsible for the
                privacy practices of these websites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to ensuring that your information is secure. We have implemented suitable physical,
                electronic, and managerial procedures to safeguard the information we collect online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Request information about the data we hold about you</li>
                <li>Request correction of any incorrect data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <strong>Email:</strong> linkinbasant@gmail.com
                <br />
                <strong>Phone:</strong> +977 9816027097
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
