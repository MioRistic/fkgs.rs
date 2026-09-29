import React from 'react';

// 🟢 Server component – metadata
export const metadata = {
  title: "Predstavljeni novi dresovi za sezonu 2025/26 – Premijera već protiv Navalina",
  description:
    "FK Gornje Sinkovce predstavio je nove dresove za sezonu 2025/26. Dizajn inspirisan 80-im godinama sa modernim detaljima. Premijera novog dresa već protiv Navalina. GIVOVA brend, US11 kao glavni sponzor i retro F.K.G.S. ćirilicom na dnu.",
  
  keywords: [
    "novi dres FK Gornje Sinkovce",
    "dres 2025/26",
    "GIVOVA dres",
    "FK Gornje Sinkovce dres",
    "US11 sponzor",
    "DCP Hemigal",
    "Miljan 94",
    "prugasti dres",
    "retro dres Sinkovce",
    "fudbalski dres 2026"
  ],

  openGraph: {
    title: "Predstavljeni novi dresovi FK Gornje Sinkovce za sezonu 2025/26",
    description:
      "Novi dresovi inspirisani 80-im godinama. Premijera već protiv Navalina. Glavni sponzor US11, GIVOVA brend i retro detalji sa ćirilicom F.K.G.S.",
    url: "https://www.fkgs.rs/news/novi-dres-2025-26",
    siteName: "FK Gornje Sinkovce",
    images: [
      {
        url: "https://i.postimg.cc/SNCPfLHS/IMG-20260327-WA0000.jpg",   // promeni ako imaš bolju sliku
        width: 1200,
        height: 800,
        alt: "Novi dres FK Gornje Sinkovce 2025/26"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },

  twitter: {
    card: "summary_large_image",
    title: "Novi dresovi FK Gornje Sinkovce za sezonu 2025/26",
    description:
      "Premijera novog dresa već protiv Navalina. GIVOVA dizajn sa retro prugama i ćirilicom F.K.G.S.",
    images: [
      "https://i.postimg.cc/SNCPfLHS/IMG-20260327-WA0000.jpg"
    ],
    creator: "@FKGS_RS"
  },

  alternates: {
    canonical: "https://www.fkgs.rs/news/novi-dres-2025-26"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}