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
    title: "Pythagorean Theorem",
    description: "Interactive visualization of the Pythagorean theorem with adjustable triangle sides",
    subject: "Mathematics",
    geogebra_url: "https://www.geogebra.org/m/abc123",
    created_at: "2024-01-15T10:30:00.000Z",
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
