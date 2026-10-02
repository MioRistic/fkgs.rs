import React from 'react';

export const metadata = {
  title: "Informacije o utakmici Moravac Mrštane – Gornje Sinkovce",
  description:
    "FK Gornje Sinkovce gostuje kod Moravca iz Mrštana u subotu, 3. oktobra, u 15:00 na Sportskom centru Orion. Ulaz je slobodan, prenosa nema. Domaćin je prvi na tabeli, Sinkovce su treće.",
  keywords: [
    "FK Gornje Sinkovce",
    "Moravac Mrštane",
    "Sportski centar Orion",
    "Gradska liga Leskovac",
    "fudbal Leskovac",
    "Mrštane",
    "Gornje Sinkovce",
    "FKGS"
  ],
  openGraph: {
    title: "Informacije o utakmici Moravac Mrštane – Gornje Sinkovce",
    description:
      "Subota, 3. oktobar, 15:00, Sportski centar Orion. Ulaz slobodan, prenosa nema. Igra se u crno-belim dresovima. Domaćin je ubedljivo prvi, mi smo treći.",
    url: "https://www.fkgs.rs/vesti/moravac-mrstane-gornje-sinkovce",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.ibb.co/tMD8JGDY/14805.jpg",
        width: 1200,
        height: 800,
        alt: "Moravac Mrštane – Gornje Sinkovce"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Informacije o utakmici Moravac Mrštane – Gornje Sinkovce",
    description:
      "Gostujemo u Mrštanima, subota 3. oktobar u 15:00. Orion, ulaz slobodan. Prvi na tabeli protiv trećeg.",
    images: [
      "https://i.ibb.co/tMD8JGDY/14805.jpg"
    ],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/moravac-mrstane-gornje-sinkovce"
  }
};

export default function MoravacMrstaneGornjeSinkovceLayout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}