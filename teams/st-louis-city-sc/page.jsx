'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const StLouisCitySCPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'João Klauss', 
      image: 'https://assets.goal.com/images/v3/getty-145494572/crop/MM5DCMZWGY5DONRYHJXG653FHIYDUMJVGA======/GettyImages-145494572.jpg?auto=webp&format=pjpg&width=3840&quality=60', 
      slug: 'klauss' 
    },
    { 
      name: 'Chris Durkin', 
      image: 'https://s3.amazonaws.com/assets.thisisasn.com/production/attacheds/13170/original/Chris_Durkin_-_ASN_TOP_-_ISI_-_2019_U-20_WC_vs_Ecuador_-_Adam_Nurkiewicz.jpg?1569464355', 
      slug: 'durkin' 
    },
    { 
      name: 'Marcel Hartel', 
      image: 'https://cdn.prod.www.11freunde.de/images/b5d24b92-98da-4fc7-b44f-58c371297bb0_w1200_r1_fpx52_fpy50.jpg', 
      slug: 'hartel' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "St. Louis CITY SC Strong Start in 2026 Season",
      author: "Mio Ristić",
      date: "March 26, 2026",
      excerpt: "João Klauss and the attacking unit continue to impress as CITY SC fights for a playoff spot in their third MLS season.",
      imageUrl: "https://assets.goal.com/images/v3/getty-145494572/crop/MM5DCMZWGY5DONRYHJXG653FHIYDUMJVGA======/GettyImages-145494572.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      slug: "stlouis-2026",
    },
  ];

  const shopItems = [
    {
      "title": "Men's St. Louis City SC adidas Red 2023 CITY Kit Authentic Jersey",
      "price": "$78.99",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-red-st-louis-city-sc-2023-city-kit-authentic-jersey_pi5229000_altimages_ff_5229599-574f0e87b9fc4f8fd77falt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPMOO"
    },
    {
      "title": "Men's St. Louis City SC adidas Red 2025 Forever CITY Red Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-red-st-louis-city-sc-2025-forever-city-red-authentic-jersey_ss5_p-202644597+pv-1+u-b6fltysix9s0kxsvr7gg+v-cr8xdwlxbjprm5ayi9hc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbeKJ"
    },
    {
      "title": "Men's St. Louis City SC adidas Red 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-red-st-louis-city-sc-2025-travel-pullover-hoodie_ss5_p-201657329+pv-1+u-yxuh6girrfnsx90mkrwh+v-eupwxov6xjdxq1reo450.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2OEJ"
    },
    {
      "title": "Youth St. Louis City SC adidas Red 2025 Forever CITY Red Replica Jersey",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/youth-adidas-red-st-louis-city-sc-2025-forever-city-red-replica-jersey_ss5_p-202649409+pv-1+u-vkrno4zsgzv1kba69m1j+v-3nin1vliankkv9gn4zap.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnOgk1"
    }
  ];

  const squad = {
    goalkeepers: ["Roman Bürki", "Ben Lundt"],
    defenders: ["Joakim Nilsson", "Tim Parker", "Anthony Markanich", "Kyle Hiebert"],
    midfielders: ["Chris Durkin", "Marcel Hartel", "Indiana Vassilev", "Eduard Löwen"],
    attackers: ["João Klauss", "Tomás Ostrák", "Simon Becher"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Stl.png"
          alt="St. Louis CITY SC"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/40" />

        <div className="absolute inset-0 flex items-end pb-10 md:pb-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-5 md:gap-6 mb-4">
              <div className="w-24 h-24 md:w-40 md:h-40 relative bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Logo_of_St._Louis_City_SC.svg/330px-Logo_of_St._Louis_City_SC.svg.png"
                  alt="St. Louis CITY SC Logo"
                  width={110}
                  height={110}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  St. Louis CITY SC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • CITYPARK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Roze boja (kao logo) */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-pink-600' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-600"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

        <div className="lg:col-span-2 space-y-10 md:space-y-12">

          {activeTab === 'overview' && (
            <>
              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Club Overview</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>St. Louis CITY SC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The City</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2023</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>CITYPARK, St. Louis, Missouri</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>22,500</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Olof Mellberg</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A New Era in St. Louis Soccer</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>St. Louis CITY SC joined Major League Soccer in 2023 and quickly established itself as an exciting expansion side. With a modern stadium in CITYPARK and a passionate local fanbase, the club is building a strong identity in the league.</p>
                  <p>Led by dangerous forwards like João Klauss and supported by creative midfielders such as Marcel Hartel and Chris Durkin, CITY SC continues to grow and compete in the Western Conference.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/st-louis-city-sc/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image 
                            src={player.image} 
                            alt={player.name} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            unoptimized 
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-pink-600">{player.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {blogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-56">
                          <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 line-clamp-2">{post.title}</h3>
                          <p className="text-sm text-gray-500 mb-3">{post.author} • {post.date}</p>
                          <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'news' && (
            <div>
              <h2 className="text-3xl font-black mb-6 text-[#020617]">All News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{post.author} • {post.date}</p>
                        <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'blog' && (
            <div>
              <h2 className="text-3xl font-black mb-6 text-[#020617]">Blog</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{post.author} • {post.date}</p>
                        <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'squad' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">St. Louis CITY SC Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-600 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.attackers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SHOP TAB */}
          {activeTab === 'shop' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaShoppingBag className="text-4xl text-pink-600" />
                <h2 className="text-3xl font-black text-[#020617]">St. Louis CITY SC Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support CITY SC by shopping through our links. 
                Every purchase helps us keep this site running and bring you better content.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {shopItems.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="relative h-64 bg-gray-50 p-6">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title} 
                        fill 
                        className="object-contain group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-pink-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-pink-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-pink-600 font-bold hover:underline text-lg"
                >
                  View full St. Louis CITY SC store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-pink-600 to-pink-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/bOPEmg" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near CITYPARK
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-6 text-[#020617]">Official Shop</h3>
            <div className="space-y-6">
              {shopItems.slice(0, 4).map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-pink-600 line-clamp-2 text-sm">{item.title}</h4>
                      <p className="text-pink-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-pink-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StLouisCitySCPage;