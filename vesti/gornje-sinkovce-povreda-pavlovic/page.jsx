// app/news/gornje-sinkovce-povreda-pavlovic/page.jsx

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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Stefan Pavlović povređen – karijera kapitena pod znakom pitanja')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.postimg.cc/ZnrPg377/BR3A0176(1).jpg"
          alt="Stefan Pavlović - kapiten FK Gornje Sinkovce"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 text-left px-4 pb-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            Stefan Pavlović povređen: Karijera kapitena pod znakom pitanja
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
              Kapiten FK Gornje Sinkovce <strong>Stefan Pavlović</strong> već duže vreme igra sa značajnim bolovima, ali je, uprkos upozorenjima, insistirao da ostane na terenu i pruži maksimum svojoj ekipi. Nažalost, na poslednjoj utakmici njegovo telo više nije moglo da izdrži.
            </p>

            <p>
              Kako saznajemo iz kluba, Pavlović je još ranije obavestio i trenera i upravu da ima ozbiljnih problema prilikom igre. Ipak, kao pravi lider i kapiten, želeo je da bude sa saigračima na terenu što duže. Njegova borbenost i požrtvovanost bile su prepoznatljive tokom cele sezone, ali ovog puta bol je prevagnuo.
            </p>

            <p>
              Tokom prošlog susreta Pavlović se, nešto pre isteka regularnog vremena, požalio na jake bolove i signalizirao da ne može da nastavi meč. Odmah je zamenjen, ostavivši za sobom vidan primer liderstva i požrtvovanosti kakav se od kapitena i očekuje.
            </p>

            <p>
              Trenutno se čeka detaljna lekarska dijagnoza kako bi se precizno utvrdila priroda i težina povrede, kao i dužina odsustva sa terena. U klubu vlada zabrinutost, jer je Pavlović jedan od najiskusnijih i najvažnijih igrača crno-belih.
            </p>

            <p>
              U ovom trenutku karijera Stefana Pavlovića u FK Gornje Sinkovce nalazi se pod velikim znakom pitanja. Da li će uspeti da se u potpunosti oporavi i vrati na teren u punoj snazi, ili će ova povreda možda označiti kraj njegove aktivne igračke karijere – znaće se tek nakon temeljnih pregleda i eventualne rehabilitacije.
            </p>

            <p>
              FK Gornje Sinkovce će u narednom periodu morati da pronađe rešenja kako bi nadoknadio njegovo odsustvo na terenu, ali i da pruži punu podršku svom kapitenu van njega.
            </p>

            <p className="font-medium text-lg">
              Navijači i članovi kluba već šalju poruke podrške Stefanu i iskreno se nadaju najboljem mogućem ishodu.
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