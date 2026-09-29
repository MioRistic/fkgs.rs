'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

const otherNews = [
  {
    title: "NAŠA VIZIJA",
    date: "08. jun 2026",
    image: "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg",
    link: "/vesti/fkgs-vizija",
  },
  {
    title: "FK Gornje Sinkovce završio sezonu na 6. mestu",
    date: "07. jun 2026",
    image: "https://i.ibb.co/6cbLY4X4/668235405-26672293589033583-6079540597957973203-n.jpg",
    link: "/vesti/fkgs-zavrsio-sezonu",
  },
  {
    title: "FKGS – Radnik Sišince",
    date: "03. maj 2026",
    image: "https://i.postimg.cc/rsbM2scr/BR3A9961.jpg",
    link: "/vesti/fkgs-radnik-sisince",
  },
];

export default function DonjaLomnicaNijeDoslaPage() {
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

  const pageTitle =
    'Donja Lomnica nije došla u Sinkovce da odigra utakmicu. Mi pišemo 3:0, savez još uvek ne.';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[420px] sm:h-[560px] lg:h-[740px] flex items-end justify-center overflow-hidden">
        <Image
          src="https://i.ibb.co/R4kQmXqS/93e0168c58392f89ce0a17cdf89f13f5.jpg"
          alt="Donja Lomnica nije došla u Sinkovce"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 text-left px-4 sm:px-6 pb-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 text-white">
            Donja Lomnica nije došla u Sinkovce da odigra utakmicu. Mi pišemo 3:0, savez još uvek ne.
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>FK Gornje Sinkovce</span>
            <span>•</span>
            <time>29. septembar 2026</time>
          </div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href={facebookShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href={twitterShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-black text-white hover:opacity-80 transition"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={whatsappShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
                >
                  <FaWhatsapp size={20} />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <FiCopy size={20} />
                </button>
                {copied && <span className="text-green-600 text-sm">Link kopiran!</span>}
              </div>

              <article className="prose prose-lg max-w-none leading-relaxed text-gray-800 [&>p]:mb-6">
                <p>
                  Trebalo je da to bude normalna utakmica. Domaći teren, zakazan termin, pravila ista kao i za sve ostale.
                </p>

                <p>
                  Naši igrači su se odazvali pozivu. U komitetu je prijavljeno <strong>11 plus dve izmene</strong>. Dresovi su bili spremni. Ekipa je bila tu, spremna da odigra meč kako piše u kalendaru.
                </p>

                <p>
                  Sa druge strane, Donja Lomnica je prijavila <strong>9 igrača</strong>. To je, po svim pravilima, dovoljno da se utakmica odigra. Nije bilo govora o tome da nemaju sastav. Nije bilo zvaničnog zahteva da se meč pomeri. Nije stigao ni jedan papir, ni jedna poruka, ni jedan zahtev za odlaganje — ni od protivnika, ni od saveza.
                </p>

                <p>
                  Umesto toga, istog jutra iz saveza je javljeno da igrači Lomnice ne dolaze na tu utakmicu.
                </p>

                <p>I šta sad?</p>

                <p>
                  Po svim pravilima koja se nalaze u okviru Fudbalskog saveza Srbije, domaćin u takvoj situaciji belži službenu pobedu <strong>3:0</strong>. Nismo mi to izmislili. Tako piše. Ko ne dođe, gubi. Ko je na terenu i spreman da igra, dobija tri boda.
                </p>

                <p>Zato FK Gornje Sinkovce ovu utakmicu vodi kao pobedu 3:0.</p>

                <p>
                  Ali savez Grada Leskovca, odnosno JFSO, tu utakmicu još uvek nije zaveo zvanično.
                </p>

                <p>
                  Navodno, ovo bi Donjoj Lomnici bila <strong>druga utakmica koja nije odigrana</strong>. A druga neodigrana utakmica automatski znači zamrzavanje kluba i izbacivanje iz svih zvaničnih takmičenja. Posle toga, povratak tek kroz najniži rang, i to tek u sezoni 2027/28.
                </p>

                <p>I tu nastaje priča zbog koje svi ćute i čekaju.</p>

                <p>
                  Ostaje da se vidi da li će naš klub biti žrtvovan da bi se sačuvao protivnik. Da li će se utakmica ponoviti. I kad. I po kom osnovu, kad zahteva za odlaganje nije bilo ni pre, ni na dan meča.
                </p>

                <p>Još uvek nemamo ništa zvanično.</p>

                <p>
                  Zato, dok ne stigne odluka na papiru, mi radimo onako kako nalažu statut i pravilnik. Belžimo 3:0. Naši su došli. Oni nisu. Niko nije tražio odlaganje. To su činjenice.
                </p>

                <p className="font-medium mt-10">
                  Ako savez odluči da pravila važe samo kad nekome odgovaraju, neka to kaže javno. Dok to ne urade, pobeda je naša.
                </p>
              </article>

              <footer className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-600">
                <div>
                  <p>29. septembar 2026</p>
                  <p>FK Gornje Sinkovce</p>
                </div>
                <Link href="/vesti" className="hover:text-black transition-colors">
                  ← Nazad na sve vesti
                </Link>
              </footer>
            </div>

            <aside className="lg:col-span-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
                Ostale vesti
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
                {otherNews.map((item) => (
                  <Link key={item.link} href={item.link} className="group block">
                    <div className="relative h-44 sm:h-32 lg:h-44 overflow-hidden bg-black">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="mt-3 text-xs text-gray-500">{item.date}</p>
                    <h3 className="mt-1 font-bold text-lg leading-snug group-hover:text-[#00A3FF] transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}