// app/istorija/page.jsx

'use client';

import Image from 'next/image';

export default function IstorijaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <div className="relative h-[890px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://i.ibb.co/cKZjXxYJ/kooperant.jpg"
          alt="Istorija kluba"
          fill
          className="object-cover brightness-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
        
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black tracking-wider mt-100">ISTORIJA</h1>
          <p className="text-xl text-gray-300">FK Gornje Sinkovce</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* 1980 - 1990 */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#00A3FF] mb-10 border-b border-zinc-800 pb-4">1980 — 1990</h2>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1980</h3>
              <p className="text-gray-300 leading-relaxed">
                Fudbalski klub Gornje Sinkovce osnovan je 1980. godine. U skladu sa osnivačkim načelima, klub je prvobitno nosio ime 
                "Fudbalski Klub Kooperant", u čast kompaniji Kooperant, koja je bila generalni sponzor kluba. Prvi predsednik kluba bio je 
                Živorad Denić, osnivač i vlasnik prepoznatljive firme DCP Hemigal.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">1982</h3>
              <p className="text-gray-300 leading-relaxed">
                Značajniji uspeh je postignut u sezoni 1981/1982, kada je osvojen kup grada Leskovca.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">1990</h3>
              <p className="text-gray-300 leading-relaxed">
                Početkom devedesetih, klub prestaje da postoji.
              </p>
            </div>
          </div>
        </div>

        {/* 2015 - 2024 */}
        <div>
          <h2 className="text-4xl font-bold text-[#00A3FF] mb-10 border-b border-zinc-800 pb-4">2015 — 2024</h2>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">2015</h3>
              <p className="text-gray-300 leading-relaxed">
                Novija istorija kluba počinje 2015. godine, kada su na inicijativu Miodraga Ristića i Milana Denića aktivnosti kluba 
                ponovo oživljene. Meštani Gornjeg Sinkovca nestrpljivo su čekali da, posle punih 25 godina, ponovo vide crno-bele dresove 
                na terenu. Klub je, uz saglasnost većine članova, odlučio da se vrati originalnom imenu — Fudbalski klub Gornje Sinkovce.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2021</h3>
              <p className="text-gray-300 leading-relaxed">
                U 2021. godini, Miodrag Ristić preuzima funkciju predsednika kluba, nasledivši Vladicu Zlatkovića na tom položaju.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2023</h3>
              <p className="text-gray-300 leading-relaxed">
                Ova godina je bila posebno značajna za klub, jer je uspeo da se plasira u osminu finala Jablaničkog Kupa. Na putu do ovog 
                značajnog uspeha, klub je eliminisao ekipe Gradac, Jašunju i Zloćudovo. Nažalost, u osmini finala, naš tim je izgubio od 
                ekipe Jedinstvo Gornje Stopanje.
              </p>
            </div>
          </div>
        </div>

        {/* Dodatne informacije */}
        <div className="mt-24 text-center text-gray-400 text-sm">
          Istorija kluba se kontinuirano dopunjuje.<br />
          Poslednja izmena: mart 2026.
        </div>
      </div>
    </div>
  );
}