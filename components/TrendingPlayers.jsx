'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = () => {
  const players = [
    { 
      name: 'Lionel Messi', 
      image: 'https://en.nogomania.com/GetFile.ashx?id=271175', 
      link: '/teams/inter-miami/messi' 
    },
    { 
      name: 'Marco Reus', 
      image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', 
      link: '/teams/la-galaxy/reus' 
    },
    { 
      name: 'Olivier Giroud', 
      image: 'https://www.parismatch.com/lmnr/r/375,250,000000,forcex,center-middle/img/var/pm/public/media/image/2024/09/26/11/resize_gettyimages-2174568974.jpg', 
      link: '/teams/lafc/giroud' 
    },
    { 
      name: 'Luis Suarez', 
      image: 'https://en.nogomania.com/GetFile.ashx?id=259742', 
      link: '/teams/inter-miami/suarez' 
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-[#020617] mb-12 text-center tracking-tight">
          TRENDING PLAYERS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player) => (
            <Link
              key={player.name}
              href={player.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#020617] group-hover:text-blue-600 transition-colors">
                  {player.name}
                </h3>
                <div className="h-0.5 w-12 mx-auto mt-4 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingPlayers;