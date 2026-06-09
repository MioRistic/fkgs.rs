'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy, FiDownload } from 'react-icons/fi';

export default function GornjeSinkovceVisionPage() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Naša vizija - FK Gornje Sinkovce')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
     {/* HERO SECTION */}
<div className="relative h-[740px] flex items-end justify-center overflow-hidden">
  <Image
    src="https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg"
    alt="FK Gornje Sinkovce - Naša Vizija"
    fill
    className="object-cover object-top"
    priority
  />
  

  {/* Blagi overlay da tekst ostane čitljiv */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />


  <div className="relative z-10 text-left px-4 pb-8 max-w-6xl mx-auto w-full">
    <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
      NAŠA VIZIJA
    </h1>
    <p className="text-2xl text-zinc-100">FK Gornje Sinkovce</p>
  </div>
</div>



      {/* CONTENT */}
      <div className="bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-16">

      {/* SHARE BUTTONS + ENGLISH LINK */}
<div className="mb-12">

  <div className="flex items-center gap-4 mb-6">
    <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
      <FaFacebookF size={20} />
    </a>
    <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
      <FaTwitter size={20} />
    </a>
    <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
      <FaWhatsapp size={20} />
    </a>
    <button onClick={handleCopyLink} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
      <FiCopy size={20} />
    </button>
    {copied && <span className="text-green-600 text-sm ml-3">Link kopiran!</span>}
  </div>

  {/* Read in English - skroz levo */}
  <div className="flex justify-start">
    <Link
      href="/vesti/fkgs-vision"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-2xl font-medium hover:bg-zinc-800 transition text-base"
    >
      <span>Read in English</span>
      <span className="text-lg">🇬🇧</span>
    </Link>
  </div>

</div>
          

          {/* NAŠA VIZIJA TEKST */}

          
          <article className="prose prose-lg max-w-none leading-relaxed text-gray-800 [&>p]:mb-6">

            <p>
              FK Gornje Sinkovce je klub sa dubokom tradicijom i jasnom vizijom budućnosti. Osnovan 1980. godine u Gornjem Sinkovcu kod Leskovca, na jugu Srbije, želimo da postanemo ponos celog regiona i ozbiljan faktor u srpskom fudbalu.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Sportske ambicije</h2>
            <p>
              Naš cilj je jasan: u naredne tri godine postati stabilan konkurent za viši rang takmičenja. Fokusiraćemo se na razvoj sopstvenih talenata, pametna pojačanja i stvaranje organizovanog, disciplinovanog tima koji će se boriti za vrh Gradske lige Leskovac, a zatim i za napredak na viši nivo.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Infrastruktura</h2>
            <p>
              Verujemo da sportski uspeh zahteva solidnu osnovu. Zato smo pokrenuli jedan od najvažnijih projekata u istoriji kluba – izgradnju modernog stadiona na Hisarskom putu, između Donjeg i Gornjeg Sinkovca. Paralelno sa tim, u planu je rekonstrukcija i unapređenje trening kompleksa kako bismo stvorili uslove kakve zaslužuje naš tim i naša omladina.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Omladinska škola</h2>
            <p>
              Razvoj mladih igrača je srž našeg kluba. Još od osnivanja verujemo da je budućnost u sopstvenim redovima. Zato planiramo ozbiljno jačanje omladinskih kategorija i stvaranje uslova da naši mladi fudbaleri imaju sve što im je potrebno za napredak. Želimo da Gornje Sinkovce postane prepoznatljiv „proizvođač“ talenata za više lige.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Naša filozofija</h2>
            <p>
              FK Gornje Sinkovce nije klub koji postoji zbog biznisa ili brzog profita. Postojimo iz ljubavi prema fudbalu i želje da stvaramo nešto dobro za našu decu i naš kraj. Želimo da zadržimo igrače koji igraju srcem i verni su klubu. Otvoreni smo za saradnju sa svima koji dele naše vrednosti – od privrednika i sponzora do ljudi koji žele da pomognu razvoju kluba i lokalne zajednice.
            </p>

          </article>

          {/* PDF DOWNLOAD */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-center mb-6">Zvanična Sponsorska Prezentacija</h3>
            
            <div className="flex justify-center">
              <a
                href="/fk-gornje sinkovce.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="FK-Gornje-Sinkovce-Sponsorska-Prezentacija.pdf"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-800 transition"
              >
                <FiDownload size={24} />
                <span>Skinite zvaničnu prezentaciju (PDF)</span>
              </a>
            </div>

            <p className="text-center text-zinc-400 text-sm mt-4">
              Prezentacija u PDF formatu • 6 strana
            </p>
          </div>

          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div>
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