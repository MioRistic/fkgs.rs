// app/vesti/sinkovce-gostuje-mladost-kutles/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SinkovceVKutlesPage() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('19. aprila u 11h - Sinkovce gostuje kod Mladosti iz Kutleša')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO SA NOVOM SLIKOM */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.postimg.cc/DwnVC3fQ/BR3A0035(1).jpg"
          alt="FK Gornje Sinkovce gostuje kod Mladosti iz Kutleša"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 text-left px-4 pb-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            Sinkovce u nedelju gostuje kod Mladosti iz Kutleša
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
              Završen je drugi krug ovogodišnjeg trokružnog takmičenja u Gradskoj ligi Leskovac. FK Gornje Sinkovce će u prvom kolu trećeg, završnog kruga gostovati kod trećeplasirane ekipe <strong>Mladosti iz Kutleša</strong>.
            </p>

            <p>
              Utakmica je zakazana za <strong>nedelju, 19. april 2026. godine sa početkom u 11 sati</strong>.
            </p>

            <p>
              Crno-beli su drugi krug završili na šestoj poziciji na tabeli, pa ih je žreb spojio upravo sa trećeplasiranom Mladosti. Zanimljivo je da su se ove dve ekipe već susrele pre samo dve nedelje na našem domaćem terenu – stadionu <strong>Omladinac</strong> u Donjem Sinkovcu, gde je FK Gornje Sinkovce u samoj završnici meča uspeo da izbori bod, izjednačivši rezultat na 2:2 golom Lazara Petrovića iz penala.
            </p>

            <p className="font-semibold text-lg">
              Pozivamo sve navijače da dođu u Kutleš i pruže snažnu podršku našim momcima u ovom važnom gostujućem meču!
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