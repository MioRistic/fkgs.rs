'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const RedBullNewYorkPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Emil Forsberg', 
      image: 'https://nypost.com/wp-content/uploads/sites/2/2023/11/GettyImages-1781603559.jpg', 
      slug: 'forsberg' 
    },
    { 
      name: 'Lewis Morgan', 
      image: 'https://worldfootballindex.com/wp-content/uploads/2022/06/Lewis-Morgan-New-York-Red-Bulls.jpg', 
      slug: 'morgan' 
    },
    { 
      name: 'Eric Maxim Choupo-Moting', 
      image: 'https://afrosportnow.com/wp-content/uploads/2023/12/GettyImages-1446328647-scaled.jpg', 
      slug: 'moting' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Red Bull New York Continue Strong 2026 Campaign",
      author: "Mio Ristić",
      date: "March 25, 2026",
      excerpt: "The Red Bulls maintain their competitive edge in the Eastern Conference with solid performances.",
      imageUrl: "https://nypost.com/wp-content/uploads/sites/2/2023/11/GettyImages-1781603559.jpg",
      slug: "red-bull-new-york-2026",
    },
  ];

  const shopItems = [
    {
      "title": "Men's New York Red Bulls Sport Design Sweden Cream Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-sport-design-sweden-cream-new-york-red-bulls-everyday-relaxed-t-shirt_ss5_p-202666797+pv-1+u-gmrlzaadmsovasoysefm+v-n1appqp58h3d26cyrd27.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yXr3"
    },
    {
      "title": "Men's New York Red Bulls adidas Tan 2025 Stone Kit Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-adidas-tan-new-york-red-bulls-2025-stone-kit-authentic-jersey_ss5_p-202652672+pv-1+u-f2zaep38lvkhx6t3xigo+v-kn46zdf2vil5stnz3t3q.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2o4P"
    },
    {
      "title": "Men's New York Red Bulls New Era Black 2025 Kickoff 9TWENTY Adjustable Hat",
      "price": "$27.99",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-new-era-black-new-york-red-bulls-2025-kickoff-9twenty-adjustable-hat_ss5_p-202427754+pv-1+u-d6nijcbpskzzmx1xomte+v-gx0vsy5nr6szouuveruf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZYx7"
    },
    {
      "title": "Men's New York Red Bulls Black Core Smoke Pullover Hoodie",
      "price": "$34.99",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-black-new-york-red-bulls-core-smoke-pullover-hoodie_pi3306000_altimages_ff_3306562alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrXBk"
    },
    {
      "title": "Men's New York Red Bulls adidas Gray 2025 Travel Shorts",
      "price": "$64.99",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-adidas-gray-new-york-red-bulls-2025-travel-shorts_ss5_p-201657382+pv-1+u-ycjcuxigfukifgorlac5+v-njiimpzqosoax1ehxfjf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORYoq"
    }
  ];

  const squad = {
    goalkeepers: ["Carlos Coronel", "Ryan Meara"],
    defenders: ["Sean Nealis", "John Tolkin", "Dylan Nealis", "Curtis Ofori"],
    midfielders: ["Emil Forsberg", "Lewis Morgan", "Daniel Edelman", "Peter Stroud"],
    attackers: ["Eric Maxim Choupo-Moting", "Elias Manoel", "Cory Burke"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/rb.png"
          alt="Red Bull New York"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/New_York_Red_Bulls_logo.svg/1280px-New_York_Red_Bulls_logo.svg.png"
                  alt="Red Bull New York Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Red Bull New York
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Red Bull Arena
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Crvena boja Red Bullsa */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-red-600' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Red Bull New York</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Red Bulls</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1994 (as MetroStars)</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Red Bull Arena, Harrison, New Jersey</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>25,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Red Bull GmbH</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Sandro Schwarz</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Legacy of Passion and Performance</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Red Bull New York is one of the most recognizable clubs in Major League Soccer. Originally founded as the MetroStars in 1994, the club was rebranded in 2006 and has since become known for its high-intensity style and strong European influence.</p>
                  <p>With stars like Emil Forsberg, Lewis Morgan, and Eric Maxim Choupo-Moting, the Red Bulls continue to be a competitive force in the Eastern Conference.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/new-york-red-bulls/${player.slug}`} className="group">
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Red Bull New York Squad</h2>

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
                <h2 className="text-3xl font-black text-[#020617]">Red Bull New York Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Red Bull New York by shopping through our links. 
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
                  View full Red Bull New York store →
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
              <a href="https://ticketnetwork.lusg.net/VxAGZJ" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Red Bull Arena
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
                      <h4 className="font-bold group-hover:text-red-600 line-clamp-2 text-sm">{item.title}</h4>
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

export default RedBullNewYorkPage;