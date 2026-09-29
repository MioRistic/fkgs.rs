'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function DerbiGornjeSinkovcePage() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Lokalni derbi: FK Gornje Sinkovce - Radnik Sišince u nedelju u 11h')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO - Nova slika */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.postimg.cc/rsbM2scr/BR3A9961.jpg"
          alt="FK Gornje Sinkovce - Radnik Sišince"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 text-left px-4 pb-8 max-w-6xl mx-auto w-full">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            Lokalni derbi: FK Gornje Sinkovce – Radnik Sišince
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>FK Gornje Sinkovce</span>
            <span>•</span>
            <time>3. maj 2026.</time>
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

            <p className="font-bold text-2xl mb-8">GLAVNE TAČKE UTAKMICE, pres. by US11</p>
            
            <p><strong>FK Gornje Sinkovce – Radnik Sišince</strong></p>
            
            <p><strong>Lokalni derbi</strong><br />
              U nedelju, 3. maja na našem terenu igra se pravi okršaj za ponos – derbi između FK Gornje Sinkovce i Radnika iz Sišinca.
            </p>

            <p><strong>Borba za lokalni ponos</strong><br />
              Iako ni jedna ni druga ekipa više nemaju šanse za plasman u viši rang, na terenu će se igrati za nešto mnogo važnije – lokalni prestiž.
            </p>

            <p><strong>U formi</strong><br />
              Naši igrači nisu imali sreće u poslednje dve utakmice. Posebno je boleo poraz od 9:1 protiv Mladosti iz Kutleša. Momci su obećali da će u ovom derbiju dati sve od sebe i iskupe se pred domaćim navijačima.
            </p>

            <p><strong>Pun sastav na obe strane</strong><br />
              Očekujemo skoro kompletan sastav našeg tima, kao i Radnik u najjačem sastavu.
            </p>

            <p><strong>Pravi duh fudbala</strong><br />
              Ovo nije utakmica za bodove ili plasman. Ovo je utakmica za ponos sela i za navijače – derbi koji uvek donosi najviše emocija.
            </p>

            <p><strong>Dođite u što većem broju!</strong><br />
              Podržite naše momke u nedelju od 11 sati. Vaša podrška biće im najveći motiv!<br />
              Vidimo se na stadionu!
            </p>

          </article>

          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              <p>2. maj 2026.</p>
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