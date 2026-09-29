'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

const otherNews = [
  {
    title: "NAŠA VIZIJA",
    date: "08. jun 2026",
    image: "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg",
    link: "/vesti/fkgs-vizija",
  },
  {
    title: "FKGS – Radnik Sišince",
    date: "03. maj 2026",
    image: "https://i.postimg.cc/rsbM2scr/BR3A9961.jpg",
    link: "/vesti/fkgs-radnik-sisince",
  },
  {
    title: "Utakmica u Kutlešu",
    date: "26. april 2026",
    image: "https://i.postimg.cc/28cj3vB9/BR3A9785(1).jpg",
    link: "/vesti/utakmica-kutles-novi-termin",
  },
];

export default function GornjeSinkovceNavalinPage() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Copy failed');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('FK Gornje Sinkovce završio sezonu na 6. mestu')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[420px] sm:h-[560px] lg:h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.ibb.co/6cbLY4X4/668235405-26672293589033583-6079540597957973203-n.jpg"
          alt="Gornje Sinkovce - Navalin"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 text-left px-4 sm:px-6 pb-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 text-white">
            Gornje Sinkovce završio sezonu na 6. mestu
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>FK Gornje Sinkovce</span>
            <span>•</span>
            <time>07. jun 2026</time>
          </div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
                  <FaFacebookF size={20} />
                </a>
                <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
                  <FaTwitter size={20} />
                </a>
                <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
                  <FaWhatsapp size={20} />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <FiCopy size={20} />
                </button>
                {copied && <span className="text-green-600 text-sm">Link kopiran!</span>}
              </div>

              <article className="prose prose-lg max-w-none leading-relaxed text-gray-800 [&>p]:mb-6">
                <p>
                  Utakmicom na domaćem terenu protiv Navalina (2:7) okončana je sezona 2025/26 za FK Gornje Sinkovce. Naš tim je sezonu završio na <strong>šestoj poziciji</strong>.
                </p>

                <p>
                  Već na polusezoni bilo je jasno da realne šanse za borbu za viši rang više ne postoje. I pored toga, klub je nastavio da se bori i pokušao je da pojača ekipu na ključnim pozicijama.
                </p>

                <p>
                  Predsednik kluba <strong>Miodrag Ristić</strong> izdao je sledeće saopštenje:
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
                  „Na polusezoni smo izgubili realne šanse za plasman u viši rang, pa smo se fokusirali na to da ekipu učinimo konkurentnijom i da se svakom protivniku suprotstavimo na najvišem mogućem nivou. Nažalost, nismo uspeli da ostvarimo ono što smo želeli. Ipak, verujemo da uz još malo rada i par kvalitetnih pojačanja na leto možemo da napravimo znatno bolji i konkurentniji tim.“
                </blockquote>

                <p>
                  Ristić je najavio i velike ambicije za narednu sezonu:
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
                  „Imamo ozbiljne planove. Prvi korak je formiranje mlađih selekcija, a trenutno smo u pregovorima sa nekoliko kvalitetnih trenera. Drugi veliki projekat je izgradnja novog stadiona između Donjeg i Gornjeg Sinkovca na Hisarskom putu.“
                </blockquote>

                <p>
                  Na kraju se predsednik obratio svima koji žele da pomognu klubu:
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
                  „Pozivamo sve društveno odgovorne kompanije, privrednike i ljude dobre volje koji žele da rade ili sarađuju sa nama. Svaka pomoć, podrška ili sponzorstvo nam je izuzetno značajna. Otvoreni smo za razgovor.“
                </blockquote>

                <p className="font-medium mt-10">
                  Zahvalnost svim igračima, upravi, ljudima koji stoje iza kluba i sponzorima koji su pomogli da se sezona završi.
                </p>
              </article>

              <footer className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-600">
                <div>
                  <p>07. jun 2026</p>
                  <p>FK Gornje Sinkovce</p>
                </div>
                <Link href="/vesti" className="hover:text-black transition-colors">
                  ← Nazad na sve vesti
                </Link>
              </footer>
            </div>

            <aside className="lg:col-span-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
                Ostale vesti
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
                {otherNews.map((item) => (
                  <Link key={item.link} href={item.link} className="group block">
                    <div className="relative h-44 sm:h-32 lg:h-44 overflow-hidden bg-black">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="mt-3 text-xs text-gray-500">{item.date}</p>
                    <h3 className="mt-1 font-bold text-lg leading-snug group-hover:text-[#00A3FF] transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}