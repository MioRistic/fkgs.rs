import React from 'react';

// 🟢 Server component – metadata
export const metadata = {
  title: "FK Gornje Sinkovce završio sezonu na 6. mestu",
  description:
    "Utakmicom protiv Navalina (2:7) okončana je sezona 2025/26. FK Gornje Sinkovce završio je na šestoj poziciji Gradske lige Leskovac. Predsednik Miodrag Ristić dao je zvanično saopštenje.",
  keywords: [
    "FK Gornje Sinkovce",
    "kraj sezone",
    "Gradska liga Leskovac",
    "Navalin",
    "Gornje Sinkovce Navalin",
    "sezona 2025/26",
    "Miodrag Ristić",
    "fudbal Leskovac"
  ],
  openGraph: {
    title: "FK Gornje Sinkovce završio sezonu na 6. mestu",
    description:
      "Porazom od Navalina 2:7 završena je sezona 2025/26. Naš tim je sezonu završio na šestoj poziciji. Predsednik kluba Miodrag Ristić dao je detaljno saopštenje o budućim planovima.",
    url: "https://www.fkgs.rs/vesti/fkgs-kraj-sezone-2026",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.ibb.co/6cbLY4X4/668235405-26672293589033583-6079540597957973203-n.jpg",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce - kraj sezone 2025/26"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "FK Gornje Sinkovce završio sezonu na 6. mestu",
    description:
      "Porazom od Navalina 2:7 okončana je sezona. Naš tim je sezonu završio na šestoj poziciji Gradske lige Leskovac.",
    images: [
      "https://i.ibb.co/6cbLY4X4/668235405-26672293589033583-6079540597957973203-n.jpg"
    ],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/fkgs-kraj-sezone-2026"
  }
};

export default function FkgsKrajSezoneLayout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}