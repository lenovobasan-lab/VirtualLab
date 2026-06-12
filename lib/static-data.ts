// Edit this file to add your resources, simulations, and photos

export interface Resource {
  id: string
  title: string
  description: string | null
  download_link: string
  file_size: number | null
  created_at: string
  category?: "software" | "simulation" | "document"
}

export interface Simulation {
  id: string
  title: string
  description: string | null
  subject: string | null
  // For HTML files: put them in /public/simulations/ and set url: "/simulations/myfile.html"
  // For GeoGebra: use the full GeoGebra URL  e.g. "https://www.geogebra.org/m/ju8ed6xe"
  // For PhET or any other URL: just paste the full URL
  url: string
  type: "html" | "geogebra" | "phet" | "url"
  created_at: string
}

export interface Photo {
  id: string
  type: "profile" | "cover"
  url: string
  alt: string
}

export const photos: Photo[] = [
  {
    id: "photo-profile",
    type: "profile",
    url: "/images/profile.PNG",
    alt: "Basanta Bhattarai",
  },
  {
    id: "photo-cover",
    type: "cover",
    url: "/images/cover.jpg",
    alt: "Cover Photo",
  },
]

export const resources: Resource[] = [
  {
    id: "resource-1",
    title: "QR Based Attendance System",
    description: "A complete project on QR code based attendance system",
    download_link: "https://drive.google.com/file/d/1C6UZb_jggXjZrerKf0LPM_KpCkWyfEu8/view?usp=sharing",
    file_size: 2560000,
    created_at: "2026-01-05T18:40:00.000Z",
    category: "software",
  },
  {
    id: "resource-2",
    title: "GradeSheet Management System",
    description: "A complete project on GradeSheet Management System",
    download_link: "https://drive.google.com/file/d/1y5KZTMBWpmwxvGAG5PqDYKIWOeulc8RY/view?usp=sharing",
    file_size: 4194304,
    created_at: "2026-01-05T18:40:00.000Z",
    category: "software",
  },
  {
    id: "resource-3",
    title: "School Management System",
    description: "A complete project on School Management System",
    download_link: "https://drive.google.com/file/d/1AmfVoviOIRtCWXF0RT-fPGbrgFicpfxL/view?usp=sharing",
    file_size: 5120000,
    created_at: "2026-01-05T18:40:00.000Z",
    category: "software",
  },
  {
    id: "resource-4",
    title: "Dispersion of Light Simulation",
    description: "A complete project on Dispersion of Light Simulation",
    download_link: "https://drive.google.com/file/d/1NfRwNC7L-5e5LiL8F9fA9mLph11x2GjH/view?usp=sharing",
    file_size: 3072000,
    created_at: "2026-01-05T18:40:00.000Z",
    category: "simulation",
  },
]

export const simulations: Simulation[] = [
  // ── GeoGebra simulations ──────────────────────────────────────────────
  {
    id: "sim-1",
    title: "Acid & Base Test",
    description: "Test acids and bases using litmus paper",
    subject: "Science",
    url: "https://www.geogebra.org/m/ju8ed6xe",
    type: "geogebra",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "sim-2",
    title: "Atomic Structure",
    description: "Atomic structure of the first 20 elements",
    subject: "Chemistry",
    url: "https://www.geogebra.org/m/v4b6n5c4",
    type: "geogebra",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "sim-3",
    title: "Lab Preparation of Hydrogen Gas",
    description: "Simulation for lab preparation of hydrogen gas",
    subject: "Chemistry",
    url: "https://www.geogebra.org/m/jrvbwuxn",
    type: "geogebra",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "sim-4",
    title: "Ohm's Law",
    description: "Simulation of Ohm's Law in electrical circuits",
    subject: "Physics",
    url: "https://www.geogebra.org/m/qm5wrpgs",
    type: "geogebra",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "sim-5",
    title: "Solar & Lunar Eclipses",
    description: "Demonstration of solar and lunar eclipses",
    subject: "Astronomy",
    url: "https://www.geogebra.org/m/wycbnvna",
    type: "geogebra",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "sim-6",
    title: "(a-b)² Visualization",
    description: "Visual proof of the algebraic identity (a-b)²",
    subject: "Mathematics",
    url: "https://www.geogebra.org/m/ebcrxy2t",
    type: "geogebra",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  // ── PhET simulations ──────────────────────────────────────────────────
  {
    id: "sim-7",
    title: "Electric Circuit Kit",
    description: "Build and test DC circuits interactively",
    subject: "Physics",
    url: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_all.html",
    type: "phet",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  // ── LOCAL HTML simulations ────────────────────────────────────────────
  // To add your own HTML simulation:
  //  1. Put the HTML file in  /public/simulations/your-sim.html
  //  2. Add an entry below with  type: "html"  and  url: "/simulations/your-sim.html"
  //
  // Example local HTML simulation (included as a demo):
  {
    id: "sim-local-pendulum",
    title: "Simple Pendulum",
    description: "Interactive pendulum – adjust length, gravity and damping in real time",
    subject: "Physics",
    url: "/simulations/pendulum.html",
    type: "html",
    created_at: "2026-01-05T19:54:00.000Z",
  },
]
