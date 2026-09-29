import React from 'react';

// 🟢 Server component – metadata
export const metadata = {
  title: "Napredak Bogojevce – Gornje Sinkovce 0:3 | Službena pobeda par forfe",
  description:
    "Utakmica između Napredka Bogojevce i FK Gornje Sinkovce nije odigrana. FK Napredak Bogojevce je odustao od takmičenja, pa je meč registrovan službenim rezultatom 0:3 u korist našeg tima.",
  keywords: [
    "FK Gornje Sinkovce",
    "Napredak Bogojevce",
    "par forfe",
    "0:3",
    "službena pobeda",
    "Gradska liga Leskovac",
    "FKGS",
    "Gornje Sinkovce",
    "fudbal Leskovac 2026"
  ],
  openGraph: {
    title: "Napredak Bogojevce – Gornje Sinkovce 0:3 | Službena pobeda par forfe",
    description:
      "FK Napredak Bogojevce je odustao od takmičenja tokom prošle polusezone. Meč je registrovan rezultatom 0:3 u korist FK Gornje Sinkovce. Tri boda ostaju u Gornjem Sinkovcu.",
    url: "https://www.fkgs.rs/vesti/napredak-bogojevce-vs-fkgs",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.postimg.cc/mZQ3G6hz/BR3A0207(1).jpg",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce – Napredak Bogojevce 0:3 par forfe"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Napredak Bogojevce – Gornje Sinkovce 0:3 | Službena pobeda par forfe",
    description:
      "Utakmica nije odigrana jer je Napredak Bogojevce odustao od takmičenja. Službeni rezultat 0:3 u korist FK Gornje Sinkovce.",
    images: [
      "https://i.postimg.cc/mZQ3G6hz/BR3A0207(1).jpg"
    ],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/napredak-bogojevce-vs-fkgs"
  }
};

export default function NapredakVsFkgsLayout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}