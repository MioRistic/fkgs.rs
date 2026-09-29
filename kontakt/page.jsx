// app/kontakt/page.jsx

'use client';

import Image from 'next/image';

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <div className="relative h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg"
          alt="FK Gornje Sinkovce"
          fill
          className="object-cover brightness-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-black tracking-wider mb-4">KONTAKT</h1>
          <p className="text-xl text-gray-300">FK Gornje Sinkovce</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 border border-zinc-800 p-12 md:p-16">
          
          <h2 className="text-4xl font-bold mb-10 text-white">INFORMACIJE O KLUBU</h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 text-lg">
            <div>
              <p className="text-[#00A3FF] font-semibold mb-1">Naziv kluba</p>
              <p className="text-white">FUDBALSKI KLUB GORNJE SINKOVCE</p>
            </div>

            <div>
              <p className="text-[#00A3FF] font-semibold mb-1">Dres domaćina</p>
              <p className="text-white">Crno-beli</p>
            </div>

            <div>
              <p className="text-[#00A3FF] font-semibold mb-1">Dres gosta</p>
              <p className="text-white">Beli</p>
            </div>

            <div>
              <p className="text-[#00A3FF] font-semibold mb-1">Godina osnivanja</p>
              <p className="text-white">1980</p>
            </div>

            <div>
              <p className="text-[#00A3FF] font-semibold mb-1">Adresa</p>
              <p className="text-white">
                Hisarski Put, b.b.<br />
                16000 Leskovac
              </p>
            </div>

            <div>
              <p className="text-[#00A3FF] font-semibold mb-1">Telefon</p>
              <p className="text-white">066 8018230</p>
            </div>

            <div>
              <p className="text-[#00A3FF] font-semibold mb-1">PIB</p>
              <p className="text-white">109031843</p>
            </div>

            <div>
              <p className="text-[#00A3FF] font-semibold mb-1">Web sajt</p>
              <a 
                href="http://www.fkgs.rs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#00A3FF] transition-colors"
              >
                www.fkgs.rs
              </a>
            </div>

            <div className="md:col-span-2">
              <p className="text-[#00A3FF] font-semibold mb-1">Email</p>
              <a 
                href="mailto:fkgornjesinkovce@aol.com" 
                className="text-white hover:text-[#00A3FF] transition-colors text-lg"
              >
                fkgornjesinkovce@aol.com
              </a>
            </div>
          </div>
        </div>

        {/* Dodatna poruka */}
        <div className="mt-12 text-center text-gray-400">
          Za sve informacije, saradnju ili sponzorstvo slobodno nas kontaktirajte.
        </div>
      </div>
    </div>
  );
}