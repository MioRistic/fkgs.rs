import React from 'react';

// 🟢 Server component – metadata
export const metadata = {
  title: "Gornje Sinkovce – Navalin 1:4 | Težak poraz na domaćem terenu",
  description:
    "FK Gornje Sinkovce pretrpeo je ubedljiv poraz od Navalina rezultatom 1:4. Odlična igra u prvom poluvremenu i vođstvo preko Miloša Veličkovića, ali potpuni kolaps u drugom delu meča.",
  keywords: [
    "FK Gornje Sinkovce",
    "Navalin",
    "Gornje Sinkovce Navalin",
    "rezultat 1:4",
    "srpski fudbal 2026",
    "Miloš Veličković gol",
    "Aleksa Ljubić asistencija",
    "liga Srbije vesti"
  ],
  openGraph: {
    title: "Gornje Sinkovce – Navalin 1:4 | Težak poraz na domaćem terenu",
    description:
      "FK Gornje Sinkovce nije uspeo da ponovi dobru igru iz prethodnog kola. Vođstvo u prvom poluvremenu preko Miloša Veličkovića, ali potpuni preokret u drugom delu – konačan rezultat 1:4.",
    url: "https://www.fkgs.rs/vesti/fkgs-vs-navalin",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.postimg.cc/RCs21LHb/BR3A0199(1).jpg",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce – utakmica protiv Navalina"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Gornje Sinkovce – Navalin 1:4 | Ubedljiv poraz na domaćem terenu",
    description:
      "Odličan start i vođstvo 1:0, ali potpuni kolaps u drugom poluvremenu. Konačan rezultat 1:4 protiv Navalina.",
    images: [
      "https://i.postimg.cc/RCs21LHb/BR3A0199(1).jpg"
    ],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/fkgs-vs-navalin"
  }
};

export default function FkgsVsNavalinLayout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}