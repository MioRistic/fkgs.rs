// ./app/vesti/fkgs-vs-mladost-k/layout.js
import React from 'react';

// 🟢 Server component – metadata
export const metadata = {
  title:
    "Bod u završnici – FK Gornje Sinkovce izbegao poraz protiv Mladosti iz Kutleša",
  description:
    "FK Gornje Sinkovce osvojio je važan bod na domaćem terenu protiv Mladosti iz Kutleša u 90. minutu. Lazar Petrović je realizovao penal i postavio konačnih 2:2. Analiza utakmice, ključni momenti i naredni susreti kluba.",
  keywords: [
    "FK Gornje Sinkovce",
    "Mladost Kutleš",
    "srpski fudbal",
    "rezultati 2026",
    "penal u finišu",
    "Sinkovce Mladost 2026",
    "liga Srbije vest",
    "FK Gornje Sinkovce analiza"
  ],
  openGraph: {
    title:
      "Bod u završnici – FK Gornje Sinkovce protiv Mladosti iz Kutleša",
    description:
      "FK Gornje Sinkovce izbegao poraz u 90. minutu protiv Mladosti iz Kutleša. Lazar Petrović postavio konačnih 2:2 iz penala. Detaljna analiza meča i narednog kola.",
    url: "https://www.fkgs.rs/vesti/fkgs-vs-mladost-k",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.postimg.cc/Rhp7HDSY/gs-utakmica.png",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce – utakmica protiv Mladosti iz Kutleša"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "FK Gornje Sinkovce izvukao bod u završnici protiv Mladosti",
    description:
      "Utakmica završena nerešenim rezultatom 2:2. Lazar Petrović je postigao penal za Sinkovce u 90. minutu. Pogledajte detalje susreta i tabelu.",
    images: [
      "https://i.postimg.cc/Rhp7HDSY/gs-utakmica.png"
    ],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/fkgs-vs-mladost-k"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}
