'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function NoviDresPage() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Predstavljeni novi dresovi FK Gornje Sinkovce za sezonu 2025/26')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.postimg.cc/SNCPfLHS/IMG-20260327-WA0000.jpg"
          alt="Novi dres FK Gornje Sinkovce 2025/26"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 text-left px-6 pb-12 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            Predstavljeni novi dresovi za sezonu 2025/26
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>FK Gornje Sinkovce</span>
            <span>•</span>
            <time>1. april 2026</time>
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
            {copied && <span className="text-green-600 text-sm ml-2">Link kopiran!</span>}
          </div>

          {/* ARTICLE */}
          <article className="prose prose-lg max-w-none leading-relaxed text-gray-800 [&>p]:mb-8">

            <p>
              FK Gornje Sinkovce je danas predstavio nove dresove za sezonu 2025/26. 
              Zbog velikog interesovanja navijača, odlučili smo da već ove sezone zaigramo u novim dresovima.
            </p>

            <p>
              Premijera novog dresa biće već protiv <strong>Navalina</strong>, a planiramo da ih koristimo 
              i na još nekoliko utakmica do kraja tekuće sezone.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Dizajn i sponzori</h3>

            <p>
              Dresovi su izrađeni od strane italijanskog brenda <strong>GIVOVA</strong>. 
              Dizajn je inspirisan starim dresovima iz 80-ih godina, sa modernim detaljima.
            </p>

            <p>
              Vraćen je i rebrendiran grb iz 2015. godine, koji se nalazi na jednoj strani grudi. 
              Na drugoj strani grudi nalazi se logo štamparije <strong>Tailor MF</strong>.
            </p>

            <p>
              U sredini grudi, velikim slovima, istaknut je novi glavni sponzor <strong>US11</strong>. 
              Iznad broja, ispod prezimena igrača, nalazi se logotip našeg dugogodišnjeg partnera <strong>DCP Hemigal</strong>.  
               
            </p>

            <p>
              Ispod broja na leđima nalazi se logo poznate auto-mehaničarske radnje iz Gornjeg Sinkovca – <strong>Miljan 94</strong>, dok se na samom dnu dresa, ćirilicom, nalazi natpis <strong>Ф.К.Г.С.</strong>, što kompletnoj opremi daje prepoznatljiv retro izgled.
              
               
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Povratak pravih pruga</h3>

            <p>
              Cilj ovog dizajna bio je da vratimo prugaste crno-bele dresove, kakve je naš klub nosio 
              osamdesetih godina. Umesto dosadašnjih dresova koji su bili većim delom crni sa belim 
              detaljima samo na krajevima, sada konačno izgledamo onako kako nas pamte stariji navijači 
              i kako su mlađe generacije maštale.
            </p>

            <p>
              Dres je uglavnom crn, dok kroz sredinu idu crno-bele pruge. Bele pruge su iscrtane tankom 
              crnom linijom, što je novi trend brenda GIVOVA.
            </p>

            <p className="font-medium">
              Mnogi smatraju da ovaj dres bez problema može da stoji rame uz rame sa dresovima nekih 
              superligaških klubova. Do toga je još dalek put, ali ponosni smo na korak koji smo napravili.
            </p>

          </article>

          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              <p>1. april 2026.</p>
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