import React from 'react';

export const metadata = {
  title: "OUR VISION | FK Gornje Sinkovce",
  description:
    "The vision of FK Gornje Sinkovce – development of young talents, construction of a modern stadium and ambition to compete in a higher league. A club with tradition since 1980.",
  keywords: [
    "FK Gornje Sinkovce",
    "Our Vision",
    "Gornje Sinkovce",
    "Hisarski put stadium",
    "youth academy",
    "football Leskovac",
    "sponsorship FKGS"
  ],
  openGraph: {
    title: "OUR VISION | FK Gornje Sinkovce",
    description:
      "The vision and ambitions of FK Gornje Sinkovce – development of young players, construction of a modern stadium and fighting for a higher league.",
    url: "https://www.fkgs.rs/en/vision",
    siteName: "FK Gornje Sinkovce",
    images: [
      {
        url: "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce - Our Vision"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "OUR VISION | FK Gornje Sinkovce",
    description:
      "The vision and ambitions of FK Gornje Sinkovce – development of young talents and construction of a modern stadium.",
    images: [
      "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg"
    ]
  },
  alternates: {
    canonical: "https://www.fkgs.rs/en/vision"
  }
};

export default function FkgsVisionEnLayout({ children }) {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
}