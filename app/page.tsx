'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

/// ==================== PRVI TIM PODACI (ažurirani) ====================
const squad = {
  coach: {
    name: "Ivan Stanković",
    role: "Glavni trener",
    image: "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg"
  },

  players: [
    { number: 1,  name: "Saša",      surname: "Savić",          position: "Golman",   image: null },
    { number: 12, name: "Stefan",    surname: "Stevanović",     position: "Golman",   image: null },
    
    { number: 2,  name: "Marko",     surname: "Milenković",     position: "Odbrana",  image: "https://i.ibb.co/4g8sDTJ6/pusa.png" },
    { number: 3,  name: "Stefan",    surname: "Denić",          position: "Odbrana",  image: "https://fkgornjesinkovce.vercel.app/static/media/pusa.c85916bce24135a92050.png" },
    { number: 4,  name: "Stefan",    surname: "Pavlović",       position: "Odbrana",  image: null },
    { number: 5,  name: "Ranko",     surname: "Veličković",     position: "Odbrana",  image: "https://fkgornjesinkovce.vercel.app/static/media/ranko.d971d2c7d8593e9d7fbc.png" },
    { number: 6,  name: "Ivan",      surname: "Dimitrijević",   position: "Odbrana",  image: "https://fkgornjesinkovce.vercel.app/static/media/duki.306b362c979b2b57a2e3.png" },
    { number: 8,  name: "Vladan",    surname: "Stanojković",    position: "Odbrana",  image: null },
    { number: 14, name: "Đorđe",     surname: "Filipović",      position: "Odbrana",  image: null },
    { number: 15, name: "Milan",     surname: "Mihajlović",     position: "Odbrana",  image: null },
    { number: 20, name: "Stefan",    surname: "Stajić",         position: "Odbrana",  image: null },

    { number: 6,  name: "Miloš",     surname: "Veličković",     position: "Sredina",  image: null },
    { number: 11, name: "Đorđe",     surname: "Milošević",      position: "Sredina",  image: null },
    { number: 17, name: "Milan",     surname: "Denić",          position: "Sredina",  image: null },
    { number: 18, name: "Aleksa",    surname: "Petrović",       position: "Sredina",  image: null },
    { number: 21, name: "Danijel",   surname: "Kostić",         position: "Sredina",  image: "https://fkgornjesinkovce.vercel.app/static/media/daka.70b40aced36511db2e0b.png" },

    { number: 7,  name: "Lazar",     surname: "Petrović",       position: "Napad",    image: null },
    { number: 9,  name: "Aleksa",    surname: "Ljubić",         position: "Napad",    image: null },
    { number: 10, name: "Stefan",    surname: "Đorđević",       position: "Napad",    image: null },
    { number: 19, name: "Mihailo",   surname: "Milenković",     position: "Napad",    image: null },
  ]
};

 


// ==================== DRES 25/26 SEKCIJA (10 slika) ====================
const defaultBgImage = "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg";
interface DresSectionProps {
  defaultBgImage?: string;
}
function DresSection({ defaultBgImage: dresBgImage = defaultBgImage }: DresSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 1024);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Ovde stavi 10 različitih slika kasnije
  const dresovi = [
    // { image: "https://i.postimg.cc/w38hBmV9/IMG-20260327-WA0002.jpg", title: "DRES 25/26" },
    { image: "https://i.postimg.cc/SNCPfLHS/IMG-20260327-WA0000.jpg", title: "DRES 25/26" },
    { image: "https://i.postimg.cc/CxbcbFBr/DSC-4941-(2).jpg", title: "DRES 25/26" },
    { image: "https://i.postimg.cc/4N9PTJ5X/DSC-4934.jpg", title: "DRES 25/26" },
    { image: "https://i.postimg.cc/sXLYt8QL/DSC-4944.jpg", title: "DRES 25/26" },
    { image: "https://i.postimg.cc/Xv7DWRq9/IMG-20260326-WA0022.jpg", title: "DRES 25/26" },
    // { image: "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg", title: "DRES 25/26" },
    // { image: "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg", title: "DRES 25/26" },
    // { image: "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg", title: "DRES 25/26" },
    // { image: "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg", title: "DRES 25/26" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dresovi.length) % dresovi.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dresovi.length);
  };

  const current = dresovi[currentIndex];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Levi deo */}
          <div className="lg:w-5/12">
            <h2 className="text-6xl lg:text-7xl font-black tracking-wider text-black leading-none mb-6">
              DRES 26/27
            </h2>
            
            <Link 
              href="/dres"
              className="inline-block border-2 border-black px-12 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-all"
            >
              KUPI ODMAH
            </Link>
          </div>

         {/* Desni deo - PRAVI SLIDER */}
<div className="lg:w-7/12 overflow-hidden w-full">

  <div
    className="flex transition-transform duration-500 ease-in-out gap-4 lg:gap-6 justify-center lg:justify-start"
    style={{
      transform: `translateX(-${currentIndex * (isMobile ? 100 : 280)}${isMobile ? '%' : 'px'})`
    }}
  >
    {dresovi.map((item, index) => (
      <div
        key={index}
        className={`
          relative flex-shrink-0
          w-[90%] sm:w-[75%] 
          lg:w-[260px] 
          h-[300px] sm:h-[340px] lg:h-[360px]
          transition-all duration-300
          ${index === currentIndex ? "opacity-100 scale-100" : "opacity-40 scale-95"}
        `}
      >
        <Image
          src={item.image}
          alt="Dres"
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>

</div>
        </div>

        {/* Donji deo - Strelice i link */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex gap-6">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center text-4xl hover:bg-black hover:text-white transition-all"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center text-4xl hover:bg-black hover:text-white transition-all"
            >
              →
            </button>
          </div>

          <Link 
            href="/dres"
            className="text-xl font-semibold flex items-center gap-3 group"
          >
            VIŠE
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>

        {/* Tačkice */}
        <div className="flex justify-center gap-3 mt-10">
          {dresovi.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-black scale-125' : 'bg-zinc-400 hover:bg-zinc-600'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

// Simple client-only wrapper to avoid SSR/CSR mismatches for highly dynamic UI
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}

// ==================== DATUM SLEDEĆE UTAKMICE ====================
const nextMatchDate = new Date("2026-03-06T11:00:00+02:00").getTime();

// ==================== TAJMER - SATI  MINUTI  SEKUNDE (TAČNO RAČUNANJE) ====================
function CountdownTimer({ targetDate }: { targetDate: number }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // TAČNO računanje ukupnih sati (može biti 100+ sati)
      const totalHours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ 
        hours: totalHours, 
        minutes, 
        seconds 
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center sm:justify-end gap-6 sm:gap-8 lg:gap-10">
      {/* Sati */}
      <div className="text-center">
        <div className="text-[72px] sm:text-[85px] lg:text-[92px] font-black leading-none tracking-tighter text-white">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-sm uppercase tracking-widest text-gray-400 mt-1">sati</div>
      </div>

      {/* Minuti */}
      <div className="text-center">
        <div className="text-[72px] sm:text-[85px] lg:text-[92px] font-black leading-none tracking-tighter text-white">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-sm uppercase tracking-widest text-gray-400 mt-1">minuti</div>
      </div>

      {/* Sekunde */}
      <div className="text-center">
        <div className="text-[72px] sm:text-[85px] lg:text-[92px] font-black leading-none tracking-tighter text-white">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-sm uppercase tracking-widest text-gray-400 mt-1">sekunde</div>
      </div>
    </div>
  );
}

// ==================== POSITION SECTION - SLIDER JEDAN PO JEDAN ====================
type PlayerItem = {
  number: number;
  name: string;
  surname: string;
  position: string;
};

interface PositionSectionProps {
  title?: string;
  players: PlayerItem[];
  bgImage: string;
  specialPlayerImage?: string | null;
  specialNumber?: number | null;
}

function PositionSection({ title = "", players, bgImage, specialPlayerImage = null, specialNumber = null }: PositionSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + players.length) % players.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % players.length);
  };

  // Prikazujemo 4 kartice u redu, ali pomeramo se za 1 igrača
  const visiblePlayers = [];
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex + i) % players.length;
    visiblePlayers.push(players[index]);
  }

  return (
    <div className="mb-16 relative">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-[#00A3FF] border-b border-zinc-800 pb-4">
          {title}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border-2 bg-white border-white/70 rounded-full flex items-center justify-center text-3xl hover:bg-black hover:text-white transition-all"
            suppressHydrationWarning={true}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 border-2 bg-white border-white/70 rounded-full flex items-center justify-center text-3xl hover:bg-black hover:text-white transition-all"
            suppressHydrationWarning={true}
          >
            →
          </button>
        </div>
      </div>

      {/* Kartice - 4 u redu, ali pomera se 1 po 1 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {visiblePlayers.map((player, idx) => {
          const isSpecial = specialNumber && player.number === specialNumber;
          const realIndex = (currentIndex + idx) % players.length;

          return (
            <Link
              key={realIndex}
              href="/prvi-tim"
              className="group block bg-zinc-900 border border-zinc-800 hover:border-[#00A3FF] transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-[360px] sm:h-[400px] md:h-[420px] lg:h-[460px] xl:h-[500px]">
                <Image
                  src={bgImage}
                  alt="Pozadina"
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                />

                {isSpecial && specialPlayerImage && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pt-8">
                    <Image
                      src={specialPlayerImage}
                      alt={player.name}
                      width={340}
                      height={500}
                      className="object-contain drop-shadow-2xl scale-95"
                    />
                  </div>
                )}

                <div className="absolute top-4 left-4 text-6xl md:text-7xl font-black text-white/90 leading-none tracking-tighter z-20">
                  {player.number}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 z-20">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {player.name}
                  </h3>
                  <p className="text-xl font-bold text-white -mt-1">
                    {player.surname}
                  </p>
                  <p className="text-[#00A3FF] text-sm mt-3 font-medium uppercase tracking-wide">
                    {player.position}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Tačkice */}
      <div className="flex justify-center gap-3 mt-10">
        {players.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? 'bg-[#00A3FF] scale-125' : 'bg-zinc-600 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ==================== HOME KOMPONENTA ====================
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroItems = [
    {
  "title": "NAŠA VIZIJA",
  "subtitle": "FK Gornje Sinkovce • Tradicija • Razvoj • Ambicija",
  "image": "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg",
  "link": "/vesti/fkgs-vizija"
},
    {
  "title": "FK Gornje Sinkovce završio sezonu na 6. mestu",
  "subtitle": "Poraz od Navalina 2:7 | 7. jun 2026.",
  "image": "https://i.ibb.co/6cbLY4X4/668235405-26672293589033583-6079540597957973203-n.jpg",
  "link": "/vesti/fkgs-kraj-sezone-2026"
},
    {
  "title": "FKGS – Radnik Sišince",
  "subtitle": "Lokalni derbi | Nedelja, 3. maj 2026. u 11 sati",
  "image": "https://i.postimg.cc/rsbM2scr/BR3A9961.jpg",
  "link": "/vesti/fkgs-radnik-sisince"
},
     {
  "title": "Utakmica u Kutlešu zakazana za 26. april",
  "subtitle": "26. april 2026. u 11 sati",
  "image": "https://i.postimg.cc/28cj3vB9/BR3A9785(1).jpg",
  "link": "/vesti/utakmica-kutles-novi-termin"
},
    
     
  
    // {
    //   title: "USMNT Nike 2026 Kits Unveiled",
    //   subtitle: "Stripes Home & Stars Away for World Cup",
    //   image: "https://assets.goal.com/images/v3/blt532e5fdd75fc8dc0/crop/MM5DIMBZGM5DEMZQGI5G433XMU5DAORYHA======/USSF_MNT_Kit_Launch_Vogue_mntjerseyshoot_11-09-25-124.jpg?auto=webp&format=pjpg&width=1200&quality=80",
    //   link: "/blog/usmnt-nike-2026-kits-unveiled"
    // }
  ];


  const blogPosts: Post[] = [
 {
  "id": 10,
  "title": "NAŠA VIZIJA",
  "author": "FK Gornje Sinkovce",
  "date": "8. jun 2026",
  "excerpt": "Vizija FK Gornje Sinkovce – razvoj mladih talenata, izgradnja modernog stadiona i ambicija za viši rang takmičenja.",
  "imageUrl": "https://i.ibb.co/1BHF1Vm/702494770-1577170647747249-6276155135646095994-n-1.jpg",
  "link": "/vesti/fkgs-vizija"
},
      {
  "id": 9,
  "title": "FK Gornje Sinkovce završio sezonu na 6. mestu",
  "author": "FK Gornje Sinkovce",
  "date": "7. jun 2026",
  "excerpt": "Porazom od Navalina 2:7 završena je sezona 2025/26. Naš tim je sezonu završio na šestoj poziciji Gradske lige Leskovac.",
  "imageUrl": "https://i.ibb.co/6cbLY4X4/668235405-26672293589033583-6079540597957973203-n.jpg",
  "link": "/vesti/fkgs-kraj-sezone-2026"
},
   {
  "id": 8,
  "title": "Lokalni derbi: FK Gornje Sinkovce – Radnik Sišince",
  "author": "FK Gornje Sinkovce",
  "date": "Maj 2, 2026",
  "excerpt": "U nedelju 6. maja u 11 sati na našem terenu igra se pravi lokalni derbi protiv Radnika iz Sišinca. Borba za ponos sela!",
  "imageUrl": "https://i.postimg.cc/rsbM2scr/BR3A9961.jpg",
  "link": "/vesti/fkgs-radnik-sisince"
},
 
     
  

  ];

   

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = heroItems[currentIndex];

  return (
    <div>
      {/* HERO - sa manjim crnim overlay-em */}
<ClientOnly>
<section className="relative h-[620px] lg:h-[780px] w-full overflow-hidden">
  <Link href={currentItem.link}>
    {/* promenjeno sa 0.58 na 0.75 (manje tamno) */}
    <Image 
      src={currentItem.image} 
      alt={currentItem.title} 
      fill 
      className="object-cover brightness-[0.75]"
      priority 
    />
    
    {/* Manji i mekši crni overlay */}
    <div className="absolute inset-0 bg-gradient-to-b 
            from-black/10 via-black/40 to-black/75" />
    {/* smanjene opacity vrednosti */}

    <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 text-white max-w-4xl z-10">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter drop-shadow-md">
        {currentItem.title}
      </h1>
      <p className="mt-6 text-2xl md:text-3xl font-medium drop-shadow-md">
        {currentItem.subtitle}
      </p>
    </div>
  </Link>

{/* Indikatori (tačkice) - Moderni stil */}
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
  {heroItems.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={`group relative h-3 w-3 transition-all duration-300 ease-out focus:outline-none`}
    >
      {/* Pozadina */}
      <div className={`absolute inset-0 rounded-full transition-all duration-400 
        ${index === currentIndex 
          ? 'bg-white scale-125' 
          : 'bg-white/40 group-hover:bg-white/70'
        }`}
      />
      
      {/* Aktivna tačka */}
      <div className={`absolute inset-0 rounded-full bg-white transition-all duration-500
        ${index === currentIndex ? 'scale-100' : 'scale-0'}`}
      />
    </button>
  ))}
</div>

</section>
</ClientOnly>
  {/* VESTI */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-black mb-12 text-center">VESTI</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={post.link} key={post.id} className="group">
                <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <Image 
                      src={post.imageUrl} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-2xl leading-tight mb-4 group-hover:text-[#00A3FF] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{post.author} • {post.date}</p>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link 
              href="/vesti"
              className="inline-block border-2 border-black text-black font-semibold text-lg px-12 py-4 hover:bg-black hover:text-white transition-all duration-300"
            >
              VIŠE VESTI
            </Link>
          </div>
        </div>
      </div>

            {/* TIM - CEO TIM */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white mb-12 text-center tracking-wider">PRVI TIM</h2>

          <ClientOnly>
          <PositionSection
            players={squad.players}
            bgImage={defaultBgImage}
          />
          </ClientOnly>

          <div className="flex justify-center mt-12">
            <Link
              href="/prvi-tim"
              className="inline-block border-2 border-white px-12 py-4 text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
            >
              VIDI CEO TIM
            </Link>
          </div>
        </div>
      </div>

  {/* ==================== REZULTATI SEKCIJA SA DINAMIČKIM TAJMEROM ==================== */}
<div className="bg-[#0a0a0a] py-12 sm:py-16 lg:py-20">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

      {/* LEFT - PREDHODNE UTAKMICE */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 sm:p-8 lg:p-10 flex flex-col">
        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide mb-6 sm:mb-8 lg:mb-10">
          PREDHODNE UTAKMICE
        </h3>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">

          {/* Prva utakmica - 30. Maj */}
          <div className="flex items-start gap-4">
            <div className="w-14 sm:w-16 text-right border-r border-zinc-700 pr-3 sm:pr-4 shrink-0">
              <div className="text-3xl sm:text-4xl font-bold text-white leading-none">30</div>
              <div className="text-xs text-gray-400 uppercase mt-1">Maj</div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 mb-2">GRADSKA LIGA LESKOVAC - 17:30</p>
              <div className="flex justify-between items-center gap-4">
                <div className="space-y-1 min-w-0">
                  <p className="text-white text-base sm:text-lg font-semibold truncate">MLADOST (DL)</p>
                  <p className="text-white text-base sm:text-lg font-semibold truncate">GORNJE SINKOVCE</p>
                </div>
                <div className="text-right text-lg sm:text-xl font-bold shrink-0">
                  <p className="text-[#00A3FF]">6</p>
                  <p className="text-[#00A3FF]">2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Druga utakmica - 7. Jun */}
          <div className="flex items-start gap-4">
            <div className="w-14 sm:w-16 text-right border-r border-zinc-700 pr-3 sm:pr-4 shrink-0">
              <div className="text-3xl sm:text-4xl font-bold text-white leading-none">7</div>
              <div className="text-xs text-gray-400 uppercase mt-1">Jun</div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 mb-2">GRADSKA LIGA LESKOVAC - 11:00</p>
              <div className="flex justify-between items-center gap-4">
                <div className="space-y-1 min-w-0">
                  <p className="text-white text-base sm:text-lg font-semibold truncate">GORNJE SINKOVCE</p>
                  <p className="text-white text-base sm:text-lg font-semibold truncate">NAVALIN</p>
                </div>
                <div className="text-right text-lg sm:text-xl font-bold shrink-0">
                  <p className="text-[#00A3FF]">2</p>
                  <p className="text-[#00A3FF]">7</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT - SLEDEĆA UTAKMICA + TAJMER */}
      <div className="bg-black p-6 sm:p-8 lg:p-10 flex flex-col relative">
        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide mb-6 sm:mb-8 lg:mb-10">
          SLEDEĆA UTAKMICA
        </h3>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 sm:gap-0 mb-6 sm:mb-8">
          {/* Timovi */}
    <div className="text-left">
      <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
        GRADSKA LIGA LESKOVAC
      </p>
      <p className="text-2xl sm:text-3xl font-bold text-white">GORNJE SINKOVCE</p>
      <p className="text-[#00A3FF] text-sm my-2 font-medium">X</p>
      <p className="text-2xl sm:text-3xl font-bold text-white"> NEPOZNATO</p>
    </div>

    {/* Tajmer + datum */}
<div className="text-center sm:text-right mt-4">
  <CountdownTimer targetDate={nextMatchDate} />
  
  <div className="mt-6 sm:mt-8">
    <div className="text-4xl sm:text-5xl font-bold text-white leading-none">X. X. 2026.</div>
    {/* <div className="text-sm sm:text-base text-gray-400 mt-2">Nedelja • 11:00 • Gradska liga Leskovac</div> */}
  </div>
</div>
  </div>

        
<Link
  href="/prvi-tim/tabela"
  className="mt-auto w-full border border-white/70 text-white py-3.5 sm:py-4 font-semibold tracking-wide hover:bg-white hover:text-black transition-all text-sm sm:text-base text-center"
>
  TABELA
</Link>
      </div>

    </div>
  </div>
</div>


 {/* ==================== DRES 25/26 SEKCIJA ==================== */}
    <ClientOnly>
    <DresSection defaultBgImage={defaultBgImage} />
    </ClientOnly>

     {/* JUVE STYLE HERO DIV */}
<div className="bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    <div className="inline-flex flex-col items-center">
      
      {/* Glavni tekst sa striped efektom */}
      <div className="relative">
        <h1 className="text-[92px] sm:text-[110px] lg:text-[130px] xl:text-[150px] leading-none font-black tracking-[-6px] text-black italic">
          MI SMO
        </h1>
        <h1 className="text-[92px] sm:text-[110px] lg:text-[130px] xl:text-[150px] leading-none font-black tracking-[-6px] text-black italic -mt-6 lg:-mt-8">
          FKGS
        </h1>
      </div>

      {/* Donji deo - SINCE godina */}
      <div className="-mt-4 sm:-mt-6">
        <p className="text-[68px] sm:text-[82px] lg:text-[96px] font-black tracking-[-4px] text-black italic leading-none">
          EST. <span className="text-[#0008ff]">1980</span>
        </p>
      </div>

    </div>

     
  </div>
</div>

      {/* ==================== NEWSLETTER SEKCIJA (kao Juventus) ==================== */}
{/* ==================== NEWSLETTER - JUVENTUS STYLE ==================== */}
<div className="bg-black text-white py-32">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
      Newsletter
    </p>

    <h2 className="text-4xl md:text-6xl font-black tracking-wide leading-tight mb-12">
      OSTAVITE VAŠ EMAIL <br /> I BUDITE U TOKU
    </h2>

    {/* NEWSLETTER FORM */}
<div className="max-w-xl mx-auto">
  <form 
    action="https://formspree.io/f/mwvwbgvk" 
    method="POST"
    className="flex border-b border-white"
  >
    {/* Važno za Formspree */}
    <input
      type="email"
      name="email"
      placeholder="Unesite vašu email adresu"
      className="flex-1 bg-transparent px-4 py-4 text-white placeholder-gray-500 focus:outline-none text-lg"
      required
    />

    <button 
      type="submit"
      className="px-6 py-4 font-bold tracking-wide hover:text-[#00A3FF] transition-colors"
    >
      PRIJAVI SE →
    </button>
  </form>

  <p className="text-xs text-gray-500 mt-6">
    Prijavom prihvatate našu politiku privatnosti i saglasni ste da primate obaveštenja.
  </p>
</div>

  </div>
</div>
  </div>
  );
};

export default Home;
