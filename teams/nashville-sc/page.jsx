'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const NashvilleSCPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Walker Zimmerman', 
      image: 'https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju', 
      slug: 'zimmerman' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Walker Zimmerman Is Back',
      author: 'Mio Ristić',
      date: 'May 26, 2025',
      excerpt: 'After a period sidelined by injury, Walker Zimmerman returns to strengthen Nashville SC’s defense.',
      imageUrl: 'https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju',
      slug: 'walker-zimmerman-is-back',
    },
  ];

  const shopItems = [
    {
      "title": "Men's Nashville SC adidas Black 2023 Man In Black Kit Replica Jersey",
      "price": "$29.99",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-black-nashville-sc-2023-man-in-black-kit-replica-jersey_pi5273000_ff_5273770-9a9ba13f5c9c484b448a_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOZO2"
    },
    {
      "title": "Men's Nashville SC adidas Black 2023 Man In Black Kit Authentic Jersey",
      "price": "$62.99",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-black-nashville-sc-2023-man-in-black-kit-authentic-jersey_ss5_p-5273531+pv-1+u-089v693lfbum3ur6mgmc+v-x2gmkixtdqjhl0g11ctd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9R6RV"
    },
    {
      "title": "Men's Nashville SC adidas Navy 2025 The Heart Of Nashville Kit Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-navy-nashville-sc-2025-the-heart-of-nashville-kit-authentic-jersey_ss5_p-202652669+pv-1+u-tubrc4uty1sqpacjsbkd+v-d3zk3qn3h7qiewlvzjmr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnEAR"
    },
    {
      "title": "Men's Nashville SC Hany Mukhtar adidas Navy 2025 The Heart of Nashville Kit Authentic Player Jersey",
      "price": "$194.99",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-hany-mukhtar-navy-nashville-sc-2025-the-heart-of-nashville-kit-authentic-player-jersey_ss5_p-202842105+pv-1+u-vjuqsbiaud732i7nbfvb+v-ec3xjacapglkkypdfcyp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXP2Ax"
    },
    {
      "title": "Men's Nashville SC Walker Zimmerman adidas Navy 2025 The Heart of Nashville Kit Replica Player Jersey",
      "price": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-walker-zimmerman-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-player-jersey_ss5_p-202842098+pv-1+u-rrpb3siqbikzvtebvotw+v-zvxygw5saqhx5ptg7lzf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQO5n"
    },
    {
      "title": "Men's Nashville SC Sport Design Sweden Cream Game Day Relaxed T-Shirt",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens%C2%A0sport-design-sweden-cream-nashville-sc-game-day-relaxed-t-shirt_ss5_p-202666745+pv-1+u-26iv086c6rjnzayz1ud8+v-jtyce1awffuhqisfuupp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqWqA"
    }
  ];

  const squad = {
    goalkeepers: ["Joe Willis", "Elliot Panicco"],
    defenders: ["Walker Zimmerman", "Jack Maher", "Shaun Moore", "Daniel Lovitz"],
    midfielders: ["Hany Mukhtar", "Aníbal Godoy", "Sean Davis", "Brian Anunga"],
    attackers: ["Tyler Boyd", "Sam Surridge", "Teal Bunbury"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Nashville.png"
          alt="Nashville SC"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Nashville_SC_logo%2C_2020.svg/960px-Nashville_SC_logo%2C_2020.svg.png"
                  alt="Nashville SC Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Nashville SC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • GEODIS Park
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Zlatna boja (Boys in Gold) */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-amber-500' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Nashville SC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Boys in Gold</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2018</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>GEODIS Park, Nashville, Tennessee</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>30,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>B. J. Callaghan</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A New Force in MLS</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Nashville SC is one of the newer clubs in Major League Soccer, but has quickly become a fan favorite with its passionate supporters and competitive spirit.</p>
                  <p>Playing at the modern GEODIS Park, the Boys in Gold are known for their strong defense led by Walker Zimmerman and attacking talent like Hany Mukhtar.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/nashville-sc/${player.slug}`} className="group">
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
                          <h3 className="font-bold text-lg group-hover:text-amber-500">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Nashville SC Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-amber-500" />
                <h2 className="text-3xl font-black text-[#020617]">Nashville SC Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support the Boys in Gold by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-amber-500 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-amber-500">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-amber-500 font-bold hover:underline text-lg"
                >
                  View full Nashville SC store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/K0ODJv" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near GEODIS Park
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
                      <h4 className="font-bold group-hover:text-amber-500 line-clamp-2 text-sm">{item.title}</h4>
                      <p className="text-amber-500 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-amber-500 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NashvilleSCPage;