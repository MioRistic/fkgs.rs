// app/news/page.jsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const defaultBgImage = "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg";

const allNews = [
  {
  "id": 12,
  "title": "Informacije o utakmici Moravac Mrštane – Gornje Sinkovce",
  "author": "FK Gornje Sinkovce",
  "date": "2. oktobar 2026",
  "excerpt": "Gostujemo u Mrštanima u subotu, 3. oktobra, u 15:00 na Sportskom centru Orion. Ulaz je slobodan, prenosa nema. Domaćin je ubedljivo prvi, mi smo treći.",
  "imageUrl": "https://i.ibb.co/tMD8JGDY/14805.jpg",
  "link": "/vesti/moravac-mrstane-gornje-sinkovce"
},
{
  "id": 11,
  "title": "Donja Lomnica nije došla u Sinkovce. Mi pišemo 3:0, savez još uvek ne.",
  "author": "FK Gornje Sinkovce",
  "date": "29. septembar 2026",
  "excerpt": "Protivnik nije pristupio utakmici u Gornjem Sinkovcu. FK Gornje Sinkovce belži službenu pobedu 3:0 po pravilima FSS. Savez utakmicu još nije zaveo zvanično.",
  "imageUrl": "https://i.ibb.co/R4kQmXqS/93e0168c58392f89ce0a17cdf89f13f5.jpg",
  "link": "/vesti/donja-lomnica-nije-dosla"
},
  {
  "id": 10,
  "title": "NAŠA VIZIJA",
  "author": "FK Gornje Sinkovce",
  "date": "8. jun 2026",
  "excerpt": "Vizija FK Gornje Sinkovce – razvoj mladih talenata, izgradnja modernog stadiona i ambicija za viši rang takmičenja.",
  "imageUrl": "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg",
  "link": "/vesti/fkgs-vizija"
},
{
  "id": 9,
  "title": "FK Gornje Sinkovce završio sezonu na 6. mestu",
  "author": "FK Gornje Sinkovce",
  "date": "7. jun 2026",
  "excerpt": "Porazom od Navalina 2:7 završena je sezona 2025/26. Naš tim je sezonu završio na šestoj poziciji Gradske lige Leskovac.",
  "imageUrl": "https://i.ibb.co/6cbLY4X4/668235405-26672293589033583-6079540597957973203-n.jpg",
  "link": "/vesti/fkgs-kraj-sezone-2026"
},
 {
  "id": 8,
  "title": "Lokalni derbi: FK Gornje Sinkovce – Radnik Sišince",
  "author": "FK Gornje Sinkovce",
  "date": "Maj 2, 2026",
  "excerpt": "U nedelju 3. maja u 11 sati na našem terenu igra se pravi lokalni derbi protiv Radnika iz Sišinca. Borba za ponos sela!",
  "imageUrl": "https://i.postimg.cc/rsbM2scr/BR3A9961.jpg",
  "link": "/vesti/fkgs-radnik-sisince"
},
  {
  "id": 7,
  "title": "Utakmica u Kutlešu zakazana za 26. april",
  "author": "FK Gornje Sinkovce",
  "date": "April 15, 2026",
  "excerpt": "Odložena utakmica protiv Mladosti iz Kutleša dobila je novi termin – 26. april 2026. u 11 sati. Pozivamo navijače da dođu u Kutleš!",
  "imageUrl": "https://i.postimg.cc/28cj3vB9/BR3A9785(1).jpg",
  "link": "/vesti/utakmica-kutles-novi-termin"
},
  {
  "id": 6,
  "title": "Sinkovce u nedelju gostuje kod Mladosti iz Kutleša",
  "author": "FK Gornje Sinkovce",
  "date": "April 15, 2026",
  "excerpt": "U prvom kolu trećeg kruga FK Gornje Sinkovce gostuje kod trećeplasirane Mladosti iz Kutleša. Utakmica se igra 19. aprila 2026. u 11 sati. Pozivamo sve navijače da dođu u Kutleš!",
  "imageUrl": "https://i.postimg.cc/DwnVC3fQ/BR3A0035(1).jpg",
  "link": "/vesti/sinkovce-gostuje-mladost-kutles"
},
  {
  "id": 5,
  "title": "Stefan Pavlović povređen: Karijera kapitena FK Gornje Sinkovce pod znakom pitanja",
  "author": "FK Gornje Sinkovce",
  "date": "April 15, 2026",
  "excerpt": "Kapiten FK Gornje Sinkovce Stefan Pavlović napustio je teren pre kraja poslednje utakmice zbog povrede. Igrao je sa bolovima, a sada se čeka detaljna dijagnoza. Karijera iskusnog vođe tima nalazi se pod velikim znakom pitanja.",
  "imageUrl": "https://i.postimg.cc/ZnrPg377/BR3A0176(1).jpg",
  "link": "/vesti/gornje-sinkovce-povreda-pavlovic"
},
  {
    "id": 4,
    "title": "Napredak Bogojevce – Gornje Sinkovce 0:3 | Službena pobeda par forfe",
    "author": "FK Gornje Sinkovce",
    "date": "April 11, 2026",
    "excerpt": "Utakmica između Napredka Bogojevce i FK Gornje Sinkovce nije odigrana. FK Napredak Bogojevce je odustao od takmičenja, pa je meč registrovan službenim rezultatom 0:3 u korist našeg tima. Tri boda ostaju u Gornjem Sinkovcu.",
    "imageUrl": "https://i.postimg.cc/mZQ3G6hz/BR3A0207(1).jpg",
    "link": "/vesti/napredak-bogojevce-vs-fkgs"
  },
  {
    "id": 3,
    "title": "Gornje Sinkovce – Navalin 1:4 | Težak poraz na domaćem terenu",
    "author": "FK Gornje Sinkovce",
    "date": "April 07, 2026",
    "excerpt": "FK Gornje Sinkovce pretrpeo je ubedljiv poraz od Navalina rezultatom 1:4. Odlična igra i vođstvo u prvom poluvremenu preko Miloša Veličkovića, ali potpuni kolaps u drugom delu meča.",
    "imageUrl": "https://i.postimg.cc/RCs21LHb/BR3A0199(1).jpg",
    "link": "/vesti/fkgs-vs-navalin"
  },

  {
  "id": 2,
  "title": "Predstavljeni novi dresovi za sezonu 2025/26 – Premijera već protiv Navalina",
  "author": "FK Gornje Sinkovce",
  "date": "April 1, 2026",
  "excerpt": "FK Gornje Sinkovce predstavio je nove dresove za sezonu 2025/26. Dizajn inspirisan 80-im godinama sa modernim detaljima. Premijera novog dresa već protiv Navalina. Glavni sponzor US11 i retro F.K.G.S. ćirilicom.",
  "imageUrl": "https://i.postimg.cc/SNCPfLHS/IMG-20260327-WA0000.jpg",
  "link": "/vesti/novi-dres-2025-26"
},

{
  "id": 1,
  "title": "Bod u završnici – FK Gornje Sinkovce izbegao poraz protiv Mladosti iz Kutleša",
  "author": "FK Gornje Sinkovce",
  "date": "Mart 29, 2026",
  "excerpt": "FK Gornje Sinkovce osvojio je važan bod na domaćem terenu protiv Mladosti iz Kutleša u 90. minutu. Lazar Petrović je realizovao penal i postavio konačnih 2:2.",
  "imageUrl": "https://i.postimg.cc/Rhp7HDSY/gs-utakmica.png",
  "link": "/vesti/fkgs-vs-mladost-k"
}

  // Dodaj još vesti ovde po potrebi...
];

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = allNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header sa tvojom slikom */}
      <div className="relative h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={defaultBgImage}
          alt="Vesti"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black tracking-wider mb-4">VESTI</h1>
          <p className="text-xl text-gray-300">FK Gornje Sinkovce</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNews.map((post) => (
            <Link href={post.link} key={post.id} className="group">
              <div className="bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-[#00A3FF] transition-all duration-300">
                <div className="relative h-64">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl leading-tight mb-4 group-hover:text-[#00A3FF] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{post.author} • {post.date}</p>
                  <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINACIJA */}
        <div className="flex justify-center mt-16 gap-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-11 h-11 flex items-center justify-center border transition-all duration-200 text-lg font-medium ${
                currentPage === page 
                  ? 'bg-[#00A3FF] text-black border-[#00A3FF]' 
                  : 'border-zinc-700 text-white hover:border-white hover:bg-zinc-900'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}