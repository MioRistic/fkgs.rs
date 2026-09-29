// app/vesti/sinkovce-gostuje-mladost-kutles/layout.js

import React from 'react';

export const metadata = {
  title: "Sinkovce u nedelju gostuje kod Mladosti iz Kutleša",
  description: "FK Gornje Sinkovce igra u prvom kolu trećeg kruga protiv trećeplasirane Mladosti iz Kutleša. Utakmica se igra 19. aprila 2026. u 11 sati. Poziv navijačima da dođu u Kutleš.",
  keywords: [
    "FK Gornje Sinkovce",
    "Mladost Kutleš",
    "treći krug",
    "Gradska liga Leskovac",
    "19 april 2026",
    "gostovanje Kutleš",
    "fudbal Sinkovce"
  ],
  openGraph: {
    title: "Sinkovce u nedelju gostuje kod Mladosti iz Kutleša",
    description: "19. aprila u 11h - naša ekipa gostuje kod trećeplasirane Mladosti. Pozivamo sve navijače da dođu i podrže tim!",
    url: "https://www.fkgs.rs/vesti/sinkovce-gostuje-mladost-kutles",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.postimg.cc/DwnVC3fQ/BR3A0035(1).jpg",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce gostuje kod Mladosti iz Kutleša"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "19. aprila u 11h - Sinkovce gostuje kod Mladosti iz Kutleša",
    description: "Pozivamo sve navijače da dođu i podrže crno-bele u gostima!",
    images: ["https://i.postimg.cc/DwnVC3fQ/BR3A0035(1).jpg"],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/sinkovce-gostuje-mladost-kutles"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}