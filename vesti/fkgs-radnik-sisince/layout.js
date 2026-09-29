import React from 'react';

// 🟢 Server component – metadata
export const metadata = {
  title: "Lokalni derbi: FK Gornje Sinkovce – Radnik Sišince | 3. maj u 11 sati",
  description: "U nedelju 3. maja u 11 sati na našem terenu igra se pravi lokalni derbi između FK Gornje Sinkovce i Radnika iz Sišinca. Borba za ponos sela!",
  keywords: [
    "lokalni derbi", 
    "FK Gornje Sinkovce", 
    "Radnik Sišince", 
    "derbi Sinkovce",
    "fudbal Sinkovce", 
    "FKGS", 
    "derbi 3. maj", 
    "srpski fudbal 2026"
  ],
  openGraph: {
    title: "Lokalni derbi: FK Gornje Sinkovce – Radnik Sišince",
    description: "Nedeljni okršaj za ponos sela. Naši momci se spremaju da se iskupе posle poraza od 9:1.",
    url: "https://www.fkgs.rs/vesti/fkgs-radnik-sisince",
    siteName: "FKGS",
    images: [
      {
        url: "https://i.postimg.cc/rsbM2scr/BR3A9961.jpg",
        width: 1200,
        height: 800,
        alt: "FK Gornje Sinkovce - Radnik Sišince derbi"
      }
    ],
    locale: "sr_RS",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokalni derbi: FK Gornje Sinkovce – Radnik Sišince",
    description: "6. maj u 11 sati | Borba za lokalni ponos",
    images: ["https://i.postimg.cc/rsbM2scr/BR3A9961.jpg"],
    creator: "@FKGS_RS"
  },
  alternates: {
    canonical: "https://www.fkgs.rs/vesti/fkgs-radnik-sisince"
  }
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* JSON-LD Structured Data za Google News */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Lokalni derbi: FK Gornje Sinkovce – Radnik Sišince",
            "description": "U nedelju 6. maja u 11 sati na našem terenu igra se pravi lokalni derbi između FK Gornje Sinkovce i Radnika iz Sišinca.",
            "image": "https://i.postimg.cc/rsbM2scr/BR3A9961.jpg",
            "datePublished": "2026-05-02T20:30:00+02:00",
            "dateModified": "2026-05-02T20:30:00+02:00",
            "author": {
              "@type": "Organization",
              "name": "FK Gornje Sinkovce"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FK Gornje Sinkovce",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.fkgs.rs/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.fkgs.rs/vesti/fkgs-radnik-sisince"
            }
          })
        }}
      />
      {children}
    </div>
  );
}