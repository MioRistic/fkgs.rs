// app/vesti/utakmica-kutles-novi-termin/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function UtakmicaNoviTerminPage() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Utakmica u Kutlešu zakazana za 26. april u 11h')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO - Nova slika */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.postimg.cc/28cj3vB9/BR3A9785(1).jpg"
          alt="FK Gornje Sinkovce - Mladost Kutleš"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 text-left px-4 pb-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            Utakmica protiv Mladosti iz Kutleša zakazana za 26. april
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
            <span>FK Gornje Sinkovce</span>
            <span>•</span>
            <time>15. april 2026</time>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-16">

          {/* SHARE */}
          <div className="flex items-center gap-4 mb-12">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80">
              <FaWhatsapp size={20} />
            </a>
            <button 
              onClick={handleCopyLink}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FiCopy size={20} />
            </button>
            {copied && <span className="text-green-600 text-sm ml-2">Link kopiran!</span>}
          </div>

          {/* ARTICLE */}
          <article className="prose prose-lg max-w-none leading-relaxed text-gray-800 [&>p]:mb-6">

            <p>
              Utakmica prvog kola trećeg kruga između FK Gornje Sinkovce i Mladosti iz Kutleša dobila je novi termin.
            </p>

            <p className="font-semibold text-lg">
              Nova utakmica zakazana je za <strong>nedelju, 26. april 2026. godine sa početkom u 11 sati</strong>.
            </p>

            <p>
              Crno-beli će u ovom susretu gostovati kod trećeplasirane ekipe na tabeli. Podsećamo da su se ove dve ekipe već susrele pre dve nedelje na stadionu <strong>Omladinac</strong> u Donjem Sinkovcu, gde je FK Gornje Sinkovce uspeo da izbori bod u samoj završnici meča – rezultat je bio 2:2, a gol za naš tim postigao je Lazar Petrović iz penala.
            </p>

            <p className="font-semibold text-lg">
              Pozivamo sve navijače da zabeleže novi datum i da dođu u Kutleš 26. aprila kako bi pružili snažnu podršku našim momcima u ovom važnom gostujućem susretu!
            </p>

            <p>
              „Idemo kod Mladosti da pružimo svoj maksimum i damo sve od sebe. Cilj nam je da osvojimo što više bodova i da se do kraja sezone plasiramo na što boljoj poziciji na tabeli“, poručuju iz kluba.
            </p>

          </article>

          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              <p>15. april 2026.</p>
            </div>
            <Link href="/vesti" className="mt-4 sm:mt-0 hover:text-black transition-colors">
              ← Nazad na sve vesti
            </Link>
          </footer>

        </div>
      </div>
    </div>
  );
}