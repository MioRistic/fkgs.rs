import React from 'react';

export const metadata = {
  title: "Donja Lomnica nije došla u Sinkovce. Mi pišemo 3:0, savez još uvek ne.",
  description:
    "Donja Lomnica nije pristupila utakmici u Gornjem Sinkovcu. FK Gornje Sinkovce belži službenu pobedu 3:0 po pravilima FSS. JFSO utakmicu još nije zaveo zvanično.",
  keywords: [
    "FK Gornje Sinkovce",
    "Donja Lomnica",
    "službeni rezultat 3:0",
    "forfeit",
    "Gradska liga Leskovac",
    "JFSO",
    "Fudbalski savez Srbije",
    "fudbal Leskovac",
    "Gornje Sinkovce"
  ],
  openGraph: {
    title: "Donja Lomnica nije došla u Sinkovce. Mi pišemo 3:0, savez još uvek ne.",
    description:
      "Naši igrači su se odazvali, protivnik nije došao. Zahteva za odlaganje nije bilo. FK Gornje Sinkovce belži pobedu 3:0, savez još nije zaveo utakmicu.",
    url: "https://www.fkgs.rs/vesti/donja-lomnica-nije-dosla",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.ibb.co/R4kQmXqS/93e0168c58392f89ce0a17cdf89f13f5.jpg",
        width: 1200,
        height: 800,
        alt: "Donja Lomnica nije došla u Sinkovce"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Donja Lomnica nije došla u Sinkovce. Mi pišemo 3:0, savez još uvek ne.",
    description:
      "Protivnik nije pristupio utakmici. FK Gornje Sinkovce belži 3:0 po pravilima FSS. Savez još nije zaveo meč.",
    images: [
      "https://i.ibb.co/R4kQmXqS/93e0168c58392f89ce0a17cdf89f13f5.jpg"
    ],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/donja-lomnica-nije-dosla"
  }
};

export default function DonjaLomnicaNijeDoslaLayout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}