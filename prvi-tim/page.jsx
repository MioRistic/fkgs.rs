'use client';

import Image from 'next/image';

const squad = {
  coach: {
    name: "Ivan Stanković",
    role: "Glavni trener",
    image: "https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg"
  },

  players: [
    { number: 1,  name: "Saša",      surname: "Savić",          position: "Golman",   image: "https://i.postimg.cc/g2HZgdvY/BR3A9450-Photoroom.png" },
    { number: 12, name: "Stefan",    surname: "Stevanović",     position: "Golman",   image: "https://i.postimg.cc/SN7Rhdjt/BR3A9477-Photoroom.png" },
    
    { number: 2,  name: "Marko",     surname: "Milenković",     position: "Odbrana",  image: null },
    { number: 3,  name: "Stefan",    surname: "Denić",          position: "Odbrana",  image: "https://i.postimg.cc/5yzhVs3k/BR3A9458-Photoroom.png" },
    { number: 4,  name: "Ranko",    surname: "Veličković",       position: "Odbrana",  image: "https://i.postimg.cc/cLSDKxxx/BR3A9463-Photoroom.png" },
    { number: 5,  name: "Stefan",     surname: "Pavlović",     position: "Odbrana",  image: "https://i.postimg.cc/sxzBYNv7/BR3A9472-Photoroom.png" },
    { number: 6,  name: "Ivan",      surname: "Dimitrijević",   position: "Odbrana",  image: "https://i.postimg.cc/nVTVSz5r/BR3A9475-Photoroom.png" },
    { number: 8,  name: "Vladan",    surname: "Stanojković",    position: "Odbrana",  image: "https://i.postimg.cc/B6GXxVzX/BR3A9441-Photoroom.png" },
    { number: 18, name: "Đorđe",     surname: "Filipović",      position: "Odbrana",  image: null },
    { number: 15, name: "Milan",     surname: "Mihajlović",     position: "Odbrana",  image: null },
    { number: 20, name: "Stefan",    surname: "Stajić",         position: "Odbrana",  image: "https://i.postimg.cc/RF9pjvYX/BR3A9457-Photoroom.png" },

    { number: 6,  name: "Miloš",     surname: "Veličković",     position: "Sredina",  image: "https://i.postimg.cc/MZsxbLMv/BR3A9496-Photoroom.png" },
    { number: 11, name: "Đorđe",     surname: "Milošević",      position: "Sredina",  image: null },
    { number: 17, name: "Milan",     surname: "Denić",          position: "Sredina",  image: "https://i.postimg.cc/FKq3LpyB/BR3A9468-Photoroom.png" },
    { number: 18, name: "Aleksa",    surname: "Petrović",       position: "Sredina",  image: null },
    { number: 21, name: "Danijel",   surname: "Kostić",         position: "Sredina",  image: "https://i.postimg.cc/CK0WVCnT/BR3A9497-Photoroom.png" },

    { number: 7,  name: "Lazar",     surname: "Petrović",       position: "Napad",    image: "https://i.postimg.cc/npQw15Dx/BR3A9465-Photoroom.png" },
    { number: 9,  name: "Aleksa",    surname: "Ljubić",         position: "Napad",    image: "https://i.postimg.cc/8P7n6Xgc/BR3A9438-Photoroom.png" },
    { number: 14, name: "Stefan",    surname: "Đorđević",       position: "Napad",    image: "https://i.postimg.cc/V6n1Fstk/BR3A9453-Photoroom.png" },
    { number: 19, name: "Mihailo",   surname: "Milenković",     position: "Napad",    image: "https://i.postimg.cc/SsNpFL2W/BR3A9443-Photoroom.png" },
  ]
};

// Nova slika samo za naslov (hero)
const heroImage = "https://i.postimg.cc/YqycvYc2/BR3A9543.jpg";

export default function PrviTimPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      
{/* Hero Header */}
<div className="relative h-[520px] md:h-[580px] flex items-end justify-center overflow-hidden">
  <Image
    src={heroImage}
    alt="Prvi tim FK Gornje Sinkovce"
    fill
    className="object-cover"
    priority
  />
  
  {/* Blaži gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />

  {/* Tekst spušten dole */}
  <div className="relative z-10 text-center px-4 pb-12 md:pb-16">
    <h1 className="text-6xl md:text-7xl font-black tracking-wider mb-3 text-white drop-shadow-2xl">
      PRVI TIM
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 font-medium tracking-wide">
      FK Gornje Sinkovce • Sezona 2025/26
    </p>
  </div>
</div>

<div className="max-w-7xl mx-auto px-6 py-16">

        <PositionSection title="GOLMANI" players={squad.players.filter(p => p.position === "Golman")} />
        <PositionSection title="ODBRANA" players={squad.players.filter(p => p.position === "Odbrana")} />
        <PositionSection title="SREDINA" players={squad.players.filter(p => p.position === "Sredina")} />
        <PositionSection title="NAPAD"   players={squad.players.filter(p => p.position === "Napad")} />

        {/* Trener */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-[#00A3FF] mb-8 border-b border-zinc-800 pb-4">TRENER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-zinc-900 border border-zinc-800 hover:border-[#00A3FF] transition-all duration-300 overflow-hidden">
              <div className="relative h-96">
                <Image
                  src={squad.coach.image}
                  alt={squad.coach.name}
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{squad.coach.name}</h3>
                  <p className="text-[#00A3FF] text-sm mt-1">{squad.coach.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Position Section Component (ostaje isto kao ranije)
function PositionSection({ title, players }) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-[#00A3FF] mb-8 border-b border-zinc-800 pb-4">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player) => {
          const hasPlayerImage = player.image && player.image.length > 5;

          return (
            <div 
              key={player.number}
              className="group bg-zinc-900 border border-zinc-800 hover:border-[#00A3FF] transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-[500px]">
                {/* Default pozadina za kartice igrača */}
                <Image
                  src="https://i.ibb.co/5hY4jXzz/kir-ufod2u-Fjk-TI-unsplash.jpg"
                  alt="Pozadina"
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                />

{hasPlayerImage && (
  <div className="absolute inset-0 z-10 flex items-end justify-center pb-2 sm:pb-4 md:pb-6 lg:pb-8">
    <Image
      src={player.image}
      alt={`${player.name} ${player.surname}`}
      width={1300}
      height={1300}
      className="object-contain 
                 w-[320px] sm:w-[460px] md:w-[520px] lg:w-[560px]
                 drop-shadow-[0_45px_70px_rgba(0,0,0,0.97)] 
                 group-hover:scale-110 
                 transition-all duration-700 ease-out"
    />
  </div>
)}
                <div className="absolute top-6 right-6 text-[85px] font-black text-white/90 leading-none tracking-tighter z-20">
                  {player.number}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 z-20">
                  <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                  <p className="text-2xl font-bold text-white -mt-1">{player.surname}</p>
                  <p className="text-[#00A3FF] text-sm mt-2 tracking-wide">{player.position.toUpperCase()}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}