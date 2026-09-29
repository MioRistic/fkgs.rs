'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GornjeSinkovceForfePage() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Napredak Bogojevce – Gornje Sinkovce 0:3 (par forfe)')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent('Napredak Bogojevce – Gornje Sinkovce 0:3 (par forfe) ' + currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.postimg.cc/mZQ3G6hz/BR3A0207(1).jpg"
          alt="Napredak Bogojevce – Gornje Sinkovce 0:3"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 text-left px-4 pb-8 max-w-6xl mx-auto w-full">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            Napredak Bogojevce – Gornje Sinkovce 0:3
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>par forfe</span>
            <span>•</span>
            <time>11. april 2026</time>
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
              Obaveštavamo navijače, članove i javnost da se utakmica 2. kola Gradske lige Leskovac između FK Napredak Bogojevce i FK Gornje Sinkovce neće odigrati.
            </p>
            
            <p>
              FK Napredak Bogojevce je odustao od daljeg takmičenja tokom prošle polusezone. 
              U skladu sa propozicijama takmičenja, meč je registrovan službenim rezultatom <strong>0:3</strong> u korist FK Gornje Sinkovce.
            </p>

            <p className="font-semibold text-xl">
              Tri boda ostaju u Gornjem Sinkovcu.
            </p>

            <p>
              Nastavljamo pripreme i sa nestrpljenjem očekujemo protivnika u trećem krugu takmičenja.
            </p>

          </article>

          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              <p>11. april 2026</p>
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