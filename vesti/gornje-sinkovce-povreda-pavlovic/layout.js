// ./app/vesti/gornje-sinkovce-povreda-pavlovic/layout.js

import React from 'react';

// 🟢 Server component – metadata
export const metadata = {
  title: "Stefan Pavlović povređen: Karijera kapitena FK Gornje Sinkovce pod znakom pitanja",
  description: "Kapiten FK Gornje Sinkovce Stefan Pavlović povređen na poslednjoj utakmici. Igrao je sa bolovima, ali nije uspeo da izdrži do kraja meča. Čeka se dijagnoza i dalja sudbina njegove karijere.",
  keywords: [
    "Stefan Pavlović",
    "FK Gornje Sinkovce",
    "povreda kapitena",
    "fudbal Srbija",
    "Sinkovce vesti",
    "kapiten povređen",
    "FKGS",
    "srpski fudbal 2026",
    "povreda Pavlović"
  ],
  openGraph: {
    title: "Stefan Pavlović povređen – Karijera kapitena FK Gornje Sinkovce pod znakom pitanja",
    description: "Kapiten Stefan Pavlović već duže vreme igra sa bolovima. Na poslednjoj utakmici bio je prinuđen da napusti teren pre kraja. Detalji povrede i šta dalje za vođu tima.",
    url: "https://www.fkgs.rs/vesti/gornje-sinkovce-povreda-pavlovic",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.postimg.cc/ZnrPg377/BR3A0176(1).jpg",
        width: 1200,
        height: 800,
        alt: "Stefan Pavlović - kapiten FK Gornje Sinkovce"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Stefan Pavlović povređen: Karijera kapitena FK Gornje Sinkovce pod znakom pitanja",
    description: "Kapiten crno-belih napustio teren zbog povrede. Čeka se lekarska dijagnoza i dalji planovi za Stefana Pavlovića.",
    images: [
      "https://i.postimg.cc/mDkrzsfq/BR3A0176.jpg"
    ],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/gornje-sinkovce-povreda-pavlovic"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}