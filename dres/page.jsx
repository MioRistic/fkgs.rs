'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const dresovi = [
  { image: "https://i.postimg.cc/SNCPfLHS/IMG-20260327-WA0000.jpg", title: "DRES 25/26" },
  { image: "https://i.postimg.cc/CxbcbFBr/DSC-4941-(2).jpg", title: "DRES 25/26" },
  { image: "https://i.postimg.cc/4N9PTJ5X/DSC-4934.jpg", title: "DRES 25/26" },
  { image: "https://i.postimg.cc/sXLYt8QL/DSC-4944.jpg", title: "DRES 25/26" },
  { image: "https://i.postimg.cc/Xv7DWRq9/IMG-20260326-WA0022.jpg", title: "DRES 25/26" },
];

const defaultBgImage = "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg";

export default function DresPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dresovi.length) % dresovi.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dresovi.length);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* Hero sekcija sa defaultBgImage kao pozadina */}
      <section className="relative h-[520px] lg:h-[620px] overflow-hidden">
        <Image
          src={defaultBgImage}
          alt="Dres 25/26 pozadina"
          fill
          className="object-cover brightness-75"
          priority
        />
        
        {/* Tamni overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-white mb-4">
              DRES 25/26
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Nova sezona. Novi identitet. Novi ponos.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

        {/* Glavni sadržaj */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Levi deo */}
          <div className="lg:w-5/12">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-8">
              DRES SEZONE<br />2025/26
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Trenutno završavamo finalne pripreme novog dresa. 
              Stranica je još uvek u izradi, ali uskoro ćemo imati sve spremno za naše navijače.
            </p>

            <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-semibold tracking-wider">
              USKORO U PRODAJI
            </div>
          </div>

          {/* Desni deo - Slider */}
          <div className="lg:w-7/12">
            <div className="overflow-hidden border border-black">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {dresovi.map((dres, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-full aspect-[16/10] bg-zinc-900"
                  >
                    <Image
                      src={dres.image}
                      alt={dres.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Kontrole */}
            <div className="flex justify-between items-center mt-10 px-2">
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center text-4xl hover:bg-black hover:text-white transition-all"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center text-4xl hover:bg-black hover:text-white transition-all"
                >
                  →
                </button>
              </div>

              <div className="flex gap-3">
                {dresovi.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-black scale-125' : 'bg-zinc-300 hover:bg-zinc-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Poruka u progresu + Newsletter */}
        <div className="mt-28 border border-black p-12 lg:p-16 text-center">
          <h3 className="text-4xl font-bold mb-6">Stranica je još uvek u izradi</h3>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Još uvek je stranica u progresu. Ako ste zainteresovani da kupite nešto od naših proizvoda, 
            ostavite vaš email pa ćemo vam se javiti čim bude dostupno.
          </p>

          <div className="max-w-md mx-auto">
            <form 
              action="https://formspree.io/f/mwvwbgvk" 
              method="POST"
              className="flex border-2 border-black overflow-hidden"
            >
              <input
                type="email"
                name="email"
                placeholder="Vaša email adresa"
                className="flex-1 bg-transparent px-8 py-5 text-black placeholder-gray-500 focus:outline-none text-lg"
                required
              />
              <button 
                type="submit"
                className="bg-black text-white px-12 font-semibold hover:bg-zinc-800 transition-all"
              >
                POŠALJI
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-6">
              Prijavom prihvatate našu politiku privatnosti i saglasni ste da primate obaveštenja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}