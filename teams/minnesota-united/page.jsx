'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const MinnesotaUnitedPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Robin Lod', 
      image: 'https://www.sportti.com/wp-content/uploads/2024/02/robin_lod_2023_minnesota.jpg', 
      slug: 'lod' 
    },
    // Dodaj ostale igrače po potrebi
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Minnesota United FC Show Strong Performance",
      author: "Mio Ristić",
      date: "March 25, 2026",
      excerpt: "The Loons continue their competitive 2026 MLS season with solid results at Allianz Field.",
      imageUrl: "https://www.sportti.com/wp-content/uploads/2024/02/robin_lod_2023_minnesota.jpg",
      slug: "minnesota-united-strong-performance",
    },
  ];

  const shopItems = [
    {
      "title": "Men's Minnesota United FC adidas Light Blue 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-light-blue-minnesota-united-fc-2025-travel-pullover-hoodie_ss5_p-201657317+pv-1+u-s520oysvkgx4xerm2sn5+v-ic1g9jiuy3gjgwxdzksu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjANBa"
    },
    {
      "title": "Men's Minnesota United FC adidas Blue 2025 CONVERGENCE Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-blue-minnesota-united-fc-2025-convergence-authentic-jersey_ss5_p-202652668+pv-1+u-iuvnun5goxhid4q3gsmh+v-uwwq04iuxi2w5ipzy7f3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjXL7"
    },
    {
      "title": "Youth Minnesota United FC adidas Blue 2025 CONVERGENCE Replica Jersey",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/youth-adidas-blue-minnesota-united-fc-2025-convergence-replica-jersey_ss5_p-202658586+pv-1+u-i4aepyqtwnxkiira1fx1+v-fgt692pxn1x9e3kccpfj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXPRqV"
    },
    {
      "title": "Men's Minnesota United FC Fanatics Black Red Card Transitional Pullover Hoodie",
      "price": "$59.99",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-fanatics-black-minnesota-united-fc-red-card-transitional-pullover-hoodie_ss5_p-201747254+pv-1+u-cxnqnitb8xch2oc7c1kh+v-8s33tcc6lx5zpji9ne0t.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQ4G3"
    },
    {
      "title": "Men's Minnesota United FC adidas White 2023 The Northern Lights Kit Authentic Jersey",
      "price": "$74.99",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-white-minnesota-united-fc-2023-the-northern-lights-kit-authentic-jersey_pi5273000_altimages_ff_5273530-e46646583be1e64cdfb2alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKO0r2"
    }
  ];

  const squad = {
    goalkeepers: ["Dayne St. Clair", "Clint Irwin"],
    defenders: ["Michael Boxall", "Brent Kallman", "DJ Taylor", "Miguel Tapias"],
    midfielders: ["Robin Lod", "Hassani Dotson", "Wil Trapp", "Joseph Rosales"],
    attackers: ["Teemu Pukki", "Kelvin Yeboah", "Sang Bin Jeong"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Minnesota.png"
          alt="Minnesota United FC"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Minnesota_United_FC_%28MLS%29_Primary_logo.svg/330px-Minnesota_United_FC_%28MLS%29_Primary_logo.svg.png"
                  alt="Minnesota United FC Logo"
                  width={90}
                  height={90}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Minnesota United FC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Allianz Field
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Plava boja Minnesote */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-blue-600' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Minnesota United FC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Loons</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2010</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Allianz Field, Saint Paul, Minnesota</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>19,400</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Eric Ramsay</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Team with a Strong Identity</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Minnesota United FC, known as the Loons, is a Major League Soccer club based in Saint Paul, Minnesota. The team plays at the beautiful Allianz Field and has built a passionate fanbase in the Twin Cities.</p>
                  <p>With key players like Robin Lod and a growing squad, Minnesota United continues to establish itself as a competitive force in the MLS Western Conference.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/minnesota-united/${player.slug}`} className="group">
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
                          <h3 className="font-bold text-lg group-hover:text-blue-600">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Minnesota United FC Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-blue-600" />
                <h2 className="text-3xl font-black text-[#020617]">Minnesota United Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support the Loons by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-blue-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg"
                >
                  View full Minnesota United store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/xLr7nO" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://ticketnetwork.lusg.net/BnO6x0" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Allianz Field
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
                      <h4 className="font-bold group-hover:text-blue-600 line-clamp-2 text-sm">{item.title}</h4>
                      <p className="text-blue-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-blue-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinnesotaUnitedPage;