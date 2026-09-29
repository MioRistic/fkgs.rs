// app/vesti/utakmica-kutles-novi-termin/layout.js

import React from 'react';

export const metadata = {
  title: "Utakmica protiv Mladosti iz Kutleša zakazana za 26. april",
  description: "Nova utakmica FK Gornje Sinkovce protiv Mladosti iz Kutleša zakazana je za nedelju, 26. april 2026. godine u 11 sati. Pozivamo sve navijače da dođu u Kutleš i podrže tim.",
  keywords: [
    "FK Gornje Sinkovce",
    "Mladost Kutleš",
    "26 april 2026",
    "utakmica zakazana",
    "treći krug",
    "Gradska liga Leskovac",
    "gostovanje Kutleš",
    "Lazar Petrović"
  ],
  openGraph: {
    title: "Utakmica protiv Mladosti iz Kutleša zakazana za 26. april",
    description: "Nova utakmica zakazana za 26. april 2026. u 11 sati. Pozivamo sve navijače da dođu u Kutleš!",
    url: "https://www.fkgs.rs/vesti/utakmica-kutles-novi-termin",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.postimg.cc/28cj3vB9/BR3A9785(1).jpg",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce - Mladost Kutleš 26. april 2026"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Utakmica u Kutlešu zakazana za 26. april u 11h",
    description: "Nova utakmica protiv Mladosti iz Kutleša. Pozivamo sve navijače da dođu i podrže crno-bele!",
    images: ["https://i.postimg.cc/28cj3vB9/BR3A9785(1).jpg"],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/utakmica-kutles-novi-termin"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}