// Edit this file to add your resources and GeoGebra simulations

export interface Resource {
  id: string
  title: string
  description: string | null
  download_link: string
  file_size: number | null // in bytes (e.g., 25600000 = 25 MB)
  created_at: string
}

export interface GeoGebraFile {
  id: string
  title: string
  description: string | null
  subject: string | null
  geogebra_url: string
  created_at: string
}

// Add your educational resources here
export const resources: Resource[] = [
  {
    id: "resource-1",
    title: "QR Based Attendance System",
    description: "A complete project on QR code based attendance system",
    download_link: "https://drive.google.com/file/d/1C6UZb_jggXjZrerKf0LPM_KpCkWyfEu8/view?usp=sharing",
    file_size: 2560000, // 2.4 MB in bytes
    created_at: "2026-01-05T18:40:00.000Z",
  },
  {
    id: "resource-2",
    title: "GradeSheet Management System",
    description: "A complete project on GradeSheet Management System",
    download_link: "https://drive.google.com/file/d/1y5KZTMBWpmwxvGAG5PqDYKIWOeulc8RY/view?usp=sharing",
    file_size: 4194304, // 4 MB in bytes
    created_at: "2026-01-05T18:40:00.000Z",
  },
  {
    id: "resource-3",
    title: "School Management System",
    description: "A complete project on School Management System",
    download_link: "https://drive.google.com/file/d/1AmfVoviOIRtCWXF0RT-fPGbrgFicpfxL/view?usp=sharing",
    file_size: 5120000, // 5 MB in bytes
    created_at: "2026-01-05T18:40:00.000Z",
  },
  {
    id: "resource-4",
    title: "Dispersion of Light Simulation",
    description: "A complete project on Dispersion of Light Simulation",
    download_link: "https://drive.google.com/file/d/1NfRwNC7L-5e5LiL8F9fA9mLph11x2GjH/view?usp=sharing",
    file_size: 3072000, // 3 MB in bytes
    created_at: "2026-01-05T18:40:00.000Z",
  },
  // Add more resources here following the same format
  // {
  //   id: "resource-2",
  //   title: "Physics Simulation Pack",
  //   description: "Collection of physics simulations for Class 11-12",
  //   download_link: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  //   file_size: 45000000, // 45 MB
  //   created_at: "2024-01-20T10:30:00.000Z"
  // },
]

// Add your GeoGebra simulations here
export const geogebraFiles: GeoGebraFile[] = [
  {
    id: "geo-1",
    title: "Acid and Base test",
    description: "Simulation to test acids and bases using Litmus paper",
    subject: "Science",
    geogebra_url: "https://www.geogebra.org/m/ju8ed6xe",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "geo-2",
    title: "Atomic Structure",
    description: "Demonstration of atomic structure of first 20 elements",
    subject: "Chemistry",
    geogebra_url: "https://www.geogebra.org/m/v4b6n5c4",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "geo-3",
    title: "Lab preparation of Hydrogen gas",
    description: "Simulation for lab preparation of Hydrogen gas",
    subject: "Chemistry" ,
    geogebra_url: "https://www.geogebra.org/m/jrvbwuxn",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "geo-4",
    title: "Ohm's Law",
    description: "Simulation of Ohm's Law in electrical circuits",
    subject: "Physics",
    geogebra_url: "https://www.geogebra.org/m/qm5wrpgs",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "geo-5",
    title: "Solar and Lunar eclipses",
    description: "Demonstration of solar and lunar eclipses",
    subject: "Astronomy",
    geogebra_url: "https://www.geogebra.org/m/wycbnvna",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  {
    id: "geo-6",
    title: "(a-b)² Simulation",
    description: "Visualization of the algebraic identity (a-b)²",
    subject: "Mathematics",
    geogebra_url: "https://www.geogebra.org/m/ebcrxy2t",
    created_at: "2026-01-05T19:54:00.000Z",
  },
  // Add more simulations here following the same format
  // {
  //   id: "geo-2",
  //   title: "Circular Motion",
  //   description: "Demonstration of uniform circular motion",
  //   subject: "Physics",
  //   geogebra_url: "https://www.geogebra.org/m/xyz789",
  //   created_at: "2024-01-20T10:30:00.000Z"
  // },
]
