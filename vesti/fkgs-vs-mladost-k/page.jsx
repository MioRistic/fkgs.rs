// app/news/gornje-sinkovce-remi/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SinkovceVestPage() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Bod u završnici za FK Gornje Sinkovce')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.postimg.cc/Rhp7HDSY/gs-utakmica.png"
          alt="FK Gornje Sinkovce"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 text-left px-4 pb-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            Bod u završnici – Sinkovce pokazalo karakter
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
            <span>FK Gornje Sinkovce</span>
            <span>•</span>
            <time>29. mart 2026</time>
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
              Fudbaleri FK Gornje Sinkovce osvojili su važan bod na domaćem terenu protiv ekipe Mladosti iz Kutleša, pogotkom u samoj završnici susreta.
            </p>

            <p>
              Utakmica je otvorena u dobrom ritmu našeg tima, koji je od prvog minuta nastojao da nametne svoju igru. Ipak, uprkos inicijativi, gosti su u 13. minutu stigli do prednosti. Sinkovce je nastavilo sa napadima, a takav pristup doneo je rezultat – Ivan Dimitrijević je uspeo da izjednači i vrati svoj tim u meč. Do odlaska na odmor rezultat je ostao nerešen.
            </p>

            <p>
              U drugom poluvremenu, Mladost dolazi do novog vođstva nakon precizno izvedenog kaznenog udarca. Ipak, nije bilo predaje za domaći tim. Sinkovce je nastavilo hrabro, sa verom u pozitivan ishod.
            </p>

            <p>
              U samom finišu utakmice, takav pristup je nagrađen – dosuđen je penal za naš tim, a Lazar Petrović je sigurnom realizacijom postavio konačnih 2:2.
            </p>

            <p>
              Nakon ovog kola, FK Gornje Sinkovce zadržava šestu poziciju na tabeli, dok Mladost iz Kutleša ostaje na trećem mestu. U narednom kolu naš tim očekuje duel protiv drugoplasirane ekipe iz Navalina.
            </p>

          </article>

          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              <p>29 mart, 2026</p>
           
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
