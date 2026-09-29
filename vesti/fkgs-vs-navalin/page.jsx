'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Gornje Sinkovce – Navalin 1:4')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.postimg.cc/RCs21LHb/BR3A0199(1).jpg"
          alt="Gornje Sinkovce - Navalin 1:4"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 text-left px-4 pb-8 max-w-6xl mx-auto w-full">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            Gornje Sinkovce – Navalin 1:4
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>FK Gornje Sinkovce</span>
            <span>•</span>
            <time>07. april 2026</time>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-16">

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mb-12">
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
            {copied && <span className="text-green-600 text-sm ml-3">Link kopiran!</span>}
          </div>

          {/* ARTICLE */}
          <article className="prose prose-lg max-w-none leading-relaxed text-gray-800 [&>p]:mb-6">

            <p>
              Naša ekipa nije uspela da ponovi dobru igru sa prethodnog meča. Drugo poluvreme na domaćem terenu donelo je potpuni preokret i ubedljiv poraz rezultatom 1:4.
            </p>

            <p>
              U prvom poluvremenu smo pokazali pravo lice – agresivno, organizovano i sa jasnom namerom da kontrolišemo utakmicu. Nagrada za dobru igru stigla je u 20. minutu, kada je <strong>Aleksa Ljubić</strong> sjajnom upornošću osvojio loptu ispred protivničkog golmana i uputio preciznu asistenciju za <strong>Miloša Veličkovića</strong>, koji je maestralnim udarcem pod prečku doveo naš tim u vođstvo od 1:0.
            </p>

            <p>
              Do kraja prvog poluvremena imali smo inicijativu i delovalo je da potpuno kontrolišemo tok meča.
            </p>

            <p>
              Međutim, drugo poluvreme je donelo potpuni preokret. Već u 58. minutu, nakon lakog odbijanja našeg golmana i nespretne intervencije, protivnik je poravnao rezultat na 1:1. Taj gol je vidno poremetio ritam naše ekipe. Samo nekoliko minuta kasnije, lopta je prošla kroz živi zid i završila u našoj mreži za 1:2.
            </p>

            <p>
              Od tog trenutka, nažalost, nedostajalo je prave reakcije i borbenosti. Od 80. minuta pa do kraja utakmice, naš tim je potpuno izgubio intenzitet i dopustio protivniku da postigne još dva gola, čime je meč završen rezultatom <strong>1:4</strong>.
            </p>

          </article>

          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              <p>07. april 2026</p>
              <p>FK Gornje Sinkovce</p>
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