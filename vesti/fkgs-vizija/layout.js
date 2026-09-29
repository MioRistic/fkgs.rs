import React from 'react';

export const metadata = {
  title: "NAŠA VIZIJA | FK Gornje Sinkovce",
  description:
    "Vizija FK Gornje Sinkovce – razvoj mladih talenata, izgradnja modernog stadiona i ambicija za viši rang takmičenja. Klub sa tradicijom od 1980. godine.",
  keywords: [
    "FK Gornje Sinkovce",
    "Naša vizija",
    "Gornje Sinkovce",
    "stadion Hisarski put",
    "omladinska škola",
    "fudbal Leskovac",
    "sponzorstvo FKGS"
  ],
  openGraph: {
    title: "NAŠA VIZIJA | FK Gornje Sinkovce",
    description:
      "Vizija i ambicije FK Gornje Sinkovce – razvoj mladih, izgradnja stadiona i borba za viši rang takmičenja.",
    url: "https://www.fkgs.rs/vesti/fkgs-vizija",
    siteName: "FK Gornje Sinkovce",
    images: [
      {
        url: "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce - Naša Vizija"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "NAŠA VIZIJA | FK Gornje Sinkovce",
    description:
      "Vizija i ambicije FK Gornje Sinkovce – razvoj mladih talenata i izgradnja modernog stadiona.",
    images: [
      "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg"
    ]
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/fkgs-vizija"
  }
};

export default function FkgsVizijaLayout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}