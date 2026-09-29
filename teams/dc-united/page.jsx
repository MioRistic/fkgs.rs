'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const DCUnitedPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Christian Benteke', 
      image: 'https://cdn.mos.cms.futurecdn.net/e8Zxx3N6t3F7Wieg7mQfuM.jpg', 
      slug: 'benteke' 
    },
    { 
      name: 'Gabriel Pirani', 
      image: 'https://wtop.com/wp-content/uploads/2024/06/GettyImages-2150745016-scaled.jpg', 
      slug: 'pirani' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "D.C. United Secure Important Victory",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "Christian Benteke and the Black-and-Red deliver a strong performance in the Eastern Conference.",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/e8Zxx3N6t3F7Wieg7mQfuM.jpg",
      slug: "dc-united-victory",
    },
  ];

  // TAČNO ONO ŠTO SI TI DAO - bez dodavanja novih proizvoda
  const shopItems = [
    {
      "title": "Men's D.C. United adidas White 2023 The Cherry Blossom Kit Authentic Jersey",
      "price": "$74.99",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-white-dc-united-2023-the-cherry-blossom-kit-authentic-jersey_pi5273000_altimages_ff_5273525-6005f2e6d940b954b1dcalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxrKnM"
    },
    {
      "title": "Men's D.C. United adidas White 2023 The Cherry Blossom Kit Replica Jersey",
      "price": "$44.99",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-white-dc-united-2023-the-cherry-blossom-kit-replica-jersey_pi5273000_altimages_ff_5273764-d3f90aaef190d3741ae9alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09A6RV"
    },
    {
      "title": "Men's D.C. United Sport Design Sweden Tan Everyday Relaxed T-Shirt",
      "price": "$29.99",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-sport-design-sweden-tan-dc-united-everyday-relaxed-t-shirt_ss5_p-202666808+pv-1+u-ke637eb7e3bittauen9z+v-lije7znrfzoddslx6wmx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/3JoKmB"
    },
    {
      "title": "Men's D.C. United adidas Black 2024 The Icon Kit Replica Jersey",
      "price": "$74.99",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-black-dc-united-2024-the-icon-kit-replica-jersey_ss5_p-201273854+pv-1+u-m2bfvqppd2vuqn7kz9ot+v-zdmukfsjv6njasmk7gqr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLQKO5"
    },
    {
      "title": "Men's D.C. United adidas Natural 2025 The Soul Kit Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-natural-dc-united-2025-the-soul-kit-authentic-jersey_ss5_p-202652662+pv-1+u-imlmx3j13svoe61kmbrd+v-o4jixrqwbxo7xhzwwurr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raOKRR"
    },
    {
      "title": "Youth D.C. United Outerstuff Black Stalwart Defender T-Shirt",
      "price": "$23.99",
      "imageUrl": "https://images.footballfanatics.com/dc-united/youth-outerstuff-black-dc-united-stalwart-defender-t-shirt_ss5_p-201875234+pv-1+u-dcgcrn2lernyx3rypvhd+v-uhybivdgcxucn8wfqqss.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bO2B5x"
    },
    {
      "title": "Men's D.C. United adidas Green 2025 Headwaters Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-green-dc-united-2025-headwaters-replica-jersey_ss5_p-202652742+pv-1+u-ptyh0qov1wcafoqpngds+v-uaxfbkk8w1ew9dihostv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xL5xXk"
    }
  ];

  const squad = {
    goalkeepers: ["Tyler Miller", "Alex Bono"],
    defenders: ["Steven Birnbaum", "Donovan Pines", "Derrick Williams"],
    midfielders: ["Mateusz Klich", "Gabriel Pirani", "Cristian Dájome"],
    attackers: ["Christian Benteke", "Taxi Fountas", "Ted Ku-DiPietro"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/DC.png"
          alt="D.C. United"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/D.C._United_logo_%282016%29.svg/500px-D.C._United_logo_%282016%29.svg.png"
                  alt="D.C. United Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  D.C. United
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Audi Field
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - D.C. United boje (crvena + crna) */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-red-400' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>D.C. United</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Black-and-Red</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1996</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Audi Field, Washington, D.C.</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>20,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Jason Levien and Steve Kaplan</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Troy Lesesne</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">One of the MLS Powerhouses</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>D.C. United is one of the most storied franchises in Major League Soccer. Founded in 1996, the club has been home to some of the league's brightest stars and has won multiple MLS Cup championships.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/dc-united/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-red-600">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">D.C. United Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-red-600" />
                <h2 className="text-3xl font-black text-[#020617]">D.C. United Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support D.C. United by shopping through our links. 
                Every purchase helps us keep this site running and bring you better content.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {shopItems.map((item) => (
                  <a 
                    key={item.title} 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-red-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-red-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline text-lg"
                >
                  View full D.C. United store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/BnO654" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Audi Field
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-6 text-[#020617]">Official Shop</h3>
            <div className="space-y-6">
              {shopItems.map((item) => (
                <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-red-600 line-clamp-2">{item.title}</h4>
                      <p className="text-red-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-red-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCUnitedPage;