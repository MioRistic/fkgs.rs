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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Our Vision - FK Gornje Sinkovce')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <div className="relative h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg"
          alt="FK Gornje Sinkovce - Our Vision"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Blagi overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

        <div className="relative z-10 text-left px-4 pb-8 max-w-6xl mx-auto w-full">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            OUR VISION
          </h1>
          <p className="text-2xl text-zinc-100">FK Gornje Sinkovce</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-16">

         {/* SHARE BUTTONS + SERBIAN LINK */}
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
    {copied && <span className="text-green-600 text-sm ml-3">Link copied!</span>}
  </div>

  {/* Pročitaj na srpskom - skroz levo */}
  <div className="flex justify-start">
    <Link
      href="/vesti/fkgs-vizija"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-2xl font-medium hover:bg-zinc-800 transition text-base"
    >
      <span>Pročitaj na srpskom</span>
      <span className="text-lg">🇷🇸</span>
    </Link>
  </div>

</div>
          {/* OUR VISION TEXT */}
          <article className="prose prose-lg max-w-none leading-relaxed text-gray-800 [&>p]:mb-6">

            <p>
              FK Gornje Sinkovce is a club with deep tradition and a clear vision for the future. Founded in 1980 in Gornje Sinkovce near Leskovac, in southern Serbia, we aim to become the pride of the entire region and a serious factor in Serbian football.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Sporting Ambitions</h2>
            <p>
              Our goal is clear: within the next three years to become a stable contender for promotion to a higher league. We will focus on developing our own talents, smart signings, and building an organized and disciplined team that will fight for the top of the Leskovac City League and beyond.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Infrastructure</h2>
            <p>
              We believe that sporting success requires a solid foundation. That is why we have started one of the most important projects in the club's history – the construction of a modern stadium on Hisarski put, between Donji and Gornje Sinkovce. At the same time, we plan to reconstruct and upgrade the training complex to create conditions worthy of our team and our youth.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Youth Academy</h2>
            <p>
              The development of young players is at the core of our club. Since the very beginning, we have believed that the future lies in our own ranks. That is why we plan to seriously strengthen our youth categories and create conditions for our young footballers to have everything they need to progress. We want Gornje Sinkovce to become a recognized "talent factory" for higher leagues.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Our Philosophy</h2>
            <p>
              FK Gornje Sinkovce is not a club that exists for business or quick profit. We exist out of love for football and the desire to create something good for our children and our region. We want to keep players who play with their hearts and are loyal to the club. We are open to cooperation with everyone who shares our values – from businessmen and sponsors to people who want to help the development of the club and the local community.
            </p>

          </article>

          {/* PDF DOWNLOAD */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-center mb-6">Official Sponsorship Presentation</h3>
            
            <div className="flex justify-center">
              <a
                href="/fkgs-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="FK-Gornje-Sinkovce-Sponsorship-Presentation.pdf"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-800 transition"
              >
                <FiDownload size={24} />
                <span>Download Official Presentation (PDF)</span>
              </a>
            </div>

            <p className="text-center text-zinc-400 text-sm mt-4">
              Presentation in PDF format • 6 pages
            </p>
          </div>

          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              <p>FK Gornje Sinkovce</p>
            </div>
            <Link href="/vesti" className="mt-4 sm:mt-0 hover:text-black transition-colors">
              ← Back to all news
            </Link>
          </footer>

        </div>
      </div>
    </div>
  );
}