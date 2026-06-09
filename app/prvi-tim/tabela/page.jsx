'use client';

import React from 'react';
import Image from 'next/image';

const tabelaData = [
  {
    poz: 1,
    simbol: '▲',
    domacin: 'MLADOST (DL)',
    lokacija: 'Donja Lokošnica',
    odigrane: 21,
    pobede: 17,
    nerešeno: 2,
    porazi: 2,
    golovi: '52:10',
    diff: '+42',
    poeni: 53
  },
  {
    poz: 2,
    simbol: '▼',
    domacin: 'NAVALIN',
    lokacija: 'Navalin',
    odigrane: 21,
    pobede: 17,
    nerešeno: 2,
    porazi: 2,
    golovi: '69:22',
    diff: '+47',
    poeni: 53
  },
  {
    poz: 3,
    simbol: '',
    domacin: 'MLADOST (K)',
    lokacija: 'Kutleš',
    odigrane: 21,
    pobede: 14,
    nerešeno: 2,
    porazi: 5,
    golovi: '60:26',
    diff: '+34',
    poeni: 44
  },
  {
    poz: 4,
    simbol: '',
    domacin: 'RADNIK 2013',
    lokacija: 'Šišince',
    odigrane: 21,
    pobede: 12,
    nerešeno: 1,
    porazi: 8,
    golovi: '54:32',
    diff: '+22',
    poeni: 37
  },
  {
    poz: 5,
    simbol: '',
    domacin: 'FSU MORAVAC 1947',
    lokacija: 'Mrštane',
    odigrane: 21,
    pobede: 10,
    nerešeno: 0,
    porazi: 11,
    golovi: '36:45',
    diff: '-9',
    poeni: 30
  },
  {
    poz: 6,
    simbol: '',
    domacin: 'GORNJE SINKOVCE',
    lokacija: 'Gornje Sinkovce',
    odigrane: 21,
    pobede: 7,
    nerešeno: 1,
    porazi: 13,
    golovi: '34:67',
    diff: '-33',
    poeni: 22
  },
  {
    poz: 7,
    simbol: '',
    domacin: 'NAPREDAK 1986 (-1)',
    lokacija: 'Bogojevce',
    odigrane: 19,
    pobede: 1,
    nerešeno: 0,
    porazi: 18,
    golovi: '8:54',
    diff: '-46',
    poeni: 2
  },
  {
    poz: 8,
    simbol: '',
    domacin: 'TODOROVCE',
    lokacija: 'Todorovce',
    odigrane: 19,
    pobede: 0,
    nerešeno: 0,
    porazi: 19,
    golovi: '0:57',
    diff: '-57',
    poeni: 0
  },
];

const TabelaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pb-16">
      
      {/* Hero Header */}
      <div className="relative h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg"
          alt="Tabela"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
        
        <div className="relative z-10 text-center px-4">
          <div className="uppercase tracking-[4px] text-sm text-zinc-400 mb-3">FK GORNJE SINKOVCE</div>
          <h1 className="text-6xl md:text-7xl font-black tracking-[-2px] mb-4">TABELA</h1>
          <p className="text-xl text-zinc-300">Gradska Liga Leskovac • Sezona 2025/26</p>
        </div>
      </div>

      {/* Tabela */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="overflow-x-auto border border-zinc-700 bg-zinc-950 shadow-2xl rounded-3xl">
          <table className="w-full min-w-[900px] text-sm md:text-base">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-700 text-[#00A3FF] uppercase text-xs tracking-widest">
                <th className="py-5 px-6 text-left font-medium">#</th>
                <th className="py-5 px-4 text-center font-medium"></th>
                <th className="py-5 px-8 text-left font-medium">TIM</th>
                <th className="py-5 px-4 text-center font-medium">O</th>
                <th className="py-5 px-4 text-center font-medium">P</th>
                <th className="py-5 px-4 text-center font-medium">N</th>
                <th className="py-5 px-4 text-center font-medium">I</th>
                <th className="py-5 px-8 text-center font-medium">GOLOVI</th>
                <th className="py-5 px-6 text-center font-medium">DIFF</th>
                <th className="py-5 px-8 text-center font-bold text-white">POENI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {tabelaData.map((row, index) => (
                <tr 
                  key={index}
                  className="hover:bg-zinc-900/80 transition-all duration-200"
                >
                  <td className="py-5 px-6 font-bold text-center text-lg text-white">{row.poz}</td>
                  
                  <td className="py-5 px-4 text-center text-base">
                    {row.simbol === '▲' && <span className="text-emerald-400">▲</span>}
                    {row.simbol === '▼' && <span className="text-red-400">▼</span>}
                    {row.simbol === '' && <span className="text-zinc-600">▬</span>}
                  </td>

                  <td className="py-5 px-8 font-bold text-white tracking-wider">
                    {row.domacin}
                    <span className="block text-xs text-zinc-500 mt-0.5">{row.lokacija}</span>
                  </td>

                  <td className="py-5 px-4 text-center text-zinc-300">{row.odigrane}</td>
                  <td className="py-5 px-4 text-center text-emerald-400 font-medium">{row.pobede}</td>
                  <td className="py-5 px-4 text-center text-amber-400 font-medium">{row.nerešeno}</td>
                  <td className="py-5 px-4 text-center text-red-400 font-medium">{row.porazi}</td>
                  <td className="py-5 px-8 text-center font-mono text-zinc-300">{row.golovi}</td>
                  
                  <td className={`py-5 px-6 text-center font-medium ${row.diff.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {row.diff}
                  </td>

                  <td className="py-5 px-8 text-center font-bold text-2xl text-white">
                    {row.poeni}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-zinc-500 text-xs mt-6">
          Poslednje ažuriranje: 8. jun 2026. • Gradska liga Leskovac
        </p>
      </div>
    </div>
  );
};

export default TabelaPage;