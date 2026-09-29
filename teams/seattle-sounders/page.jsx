'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const SeattleSoundersPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Jordan Morris', 
      image: 'https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60', 
      slug: 'morris' 
    },
    { 
      name: 'Pedro de la Vega', 
      image: 'https://cdn.seattlesports.com/sea710/wp-content/uploads/2024/01/GettyImages-1291846531.jpg', 
      slug: 'delavega' 
    },
    { 
      name: 'Albert Rusnák', 
      image: 'https://sports.mynorthwest.com/wp-content/uploads/2024/06/Seattle-Sounders-Albert-Rusnak-controls-ball-Getty-900.jpg', 
      slug: 'rusnak' 
    },
    { 
      name: 'Cristian Roldan', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVBB6pHSdOyooVNbUjLO6ekf3Vpk7q5fBfg&s', 
      slug: 'roldan' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Seattle Sounders FC Continue Strong 2026 Campaign",
      author: "Mio Ristić",
      date: "March 26, 2026",
      excerpt: "With key contributions from Jordan Morris and Albert Rusnák, the Sounders remain contenders in the Western Conference.",
      imageUrl: "https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      slug: "seattle-2026",
    },
  ];

  const shopItems = [
    {
      "title": "Men's Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-authentic-jersey_ss5_p-202652679+pv-1+u-jqchml2swjytzl1bfxfg+v-igorwaxomthpd1imqzls.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1e5G1"
    },
    {
      "title": "Men's Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-replica-jersey_ss5_p-202652755+pv-1+u-x5ewfdng2qrhba8q1fmj+v-txvvsdopbaos21tqrzsg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxP5k0"
    },
    {
      "title": "Men's Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Authentic Custom Jersey",
      "price": "$194.99",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-authentic-custom-jersey_ss5_p-202709850+pv-1+u-pzdzkwskv6topp5pkljd+v-zel1ixott0jcdgtdmqfg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAvW6"
    },
    {
      "title": "Men's Seattle Sounders FC adidas Aqua 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-aqua-seattle-sounders-fc-2025-travel-pullover-hoodie_ss5_p-201657327+pv-1+u-8vkzvteqdxvozayoerut+v-xoh0yxqsgzk1zarkb6q1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOZr5"
    }
  ];

  const squad = {
    goalkeepers: ["Stefan Frei", "Andrew Thomas"],
    defenders: ["Yeimar Gómez Andrade", "Nouhou Tolo", "Jackson Ragen", "Cody Baker"],
    midfielders: ["Cristian Roldan", "Albert Rusnák", "João Paulo", "Obed Vargas"],
    attackers: ["Jordan Morris", "Pedro de la Vega", "Raúl Ruidíaz"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Seattle.png"
          alt="Seattle Sounders FC"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Seattle_Sounders_logo.svg/330px-Seattle_Sounders_logo.svg.png"
                  alt="Seattle Sounders FC Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Seattle Sounders FC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Lumen Field
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Zelena boja Seattle Soundersa */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-emerald-600' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Seattle Sounders FC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Sounders</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2007</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Lumen Field, Seattle, Washington</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>68,740</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Brian Schmetzer</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Legacy of Excellence</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Seattle Sounders FC is one of the most successful and passionate clubs in Major League Soccer. Since joining MLS in 2009, they have won multiple U.S. Open Cups, the CONCACAF Champions Cup, and consistently compete at the highest level.</p>
                  <p>With a massive fanbase at the iconic Lumen Field and stars like Jordan Morris, Albert Rusnák, and Cristian Roldan, the Sounders remain a powerhouse in the Western Conference.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/seattle-sounders/${player.slug}`} className="group">
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
                          <h3 className="font-bold text-lg group-hover:text-emerald-600">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Seattle Sounders FC Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-600 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-emerald-600" />
                <h2 className="text-3xl font-black text-[#020617]">Seattle Sounders FC Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support the Sounders by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-emerald-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-emerald-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline text-lg"
                >
                  View full Seattle Sounders FC store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/55yV7b" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Lumen Field
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
                      <h4 className="font-bold group-hover:text-emerald-600 line-clamp-2 text-sm">{item.title}</h4>
                      <p className="text-emerald-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-emerald-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeattleSoundersPage;