'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const NewEnglandRevolutionPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Leonardo Campana', 
      image: 'https://cdn1.intermiami.news/uploads/52/2024/06/GettyImages-2155044985-1140x776.jpg', 
      slug: 'campana' 
    },
    { 
      name: 'Carles Gil', 
      image: 'https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/09/carles.jpg', 
      slug: 'gil' 
    },
    { 
      name: 'Luca Langoni', 
      image: 'https://cdn1.intermiami.news/uploads/52/2024/09/GettyImages-2172110695-1024x685.jpg', 
      slug: 'langoni' 
    },
    { 
      name: 'Matt Polster', 
      image: 'https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/04/New-England-Revolution-midfielder-Matt-Polster-gets-past.jpg', 
      slug: 'polster' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "New England Revolution Show Resilience in 2026 Season",
      author: "Mio Ristić",
      date: "March 25, 2026",
      excerpt: "The Revs continue to fight under Bruce Arena with strong performances at Gillette Stadium.",
      imageUrl: "https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/09/carles.jpg",
      slug: "new-england-revolution-2026",
    },
  ];

  const shopItems = [
    {
      "title": "Men's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-authentic-jersey_ss5_p-202652670+pv-1+u-v9wjhxafx1vg5vwivz1q+v-ukxuclglilhsrn5an4rq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOOJ2"
    },
    {
      "title": "Men's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Custom Jersey",
      "price": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-custom-jersey_ss5_p-202709913+pv-1+u-2sjbokb8lypstx9a5ovq+v-d1ad5dolfhjeu2mvrd7m.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmGGOX"
    },
    {
      "title": "Youth New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Custom Jersey",
      "price": "$114.99",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/youth-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-custom-jersey_ss5_p-202709978+pv-1+u-8twemd6gyym1vdeshv7d+v-1are9hxdwjhsp4fb61vn.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yyR9"
    },
    {
      "title": "Men's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-jersey_ss5_p-202652750+pv-1+u-l7raax5oo0uw5v518v3w+v-mv47pl0hatd9rn1ksg8r.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKOOOm"
    },
    {
      "title": "Men's New England Revolution New Era Gray Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
      "price": "$32.99",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-new-era-gray-new-england-revolution-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948610+pv-1+u-r2axml4dqsyxvfymqhbl+v-yhcad835plr2uerj954r.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLLJG"
    }
  ];

  const squad = {
    goalkeepers: ["Henrich Ravas", "Earl Edwards Jr."],
    defenders: ["DeJuan Jones", "Henry Kessler", "Andrew Farrell", "Brandon Bye"],
    midfielders: ["Carles Gil", "Matt Polster", "Noel Buck", "Esmir Bajraktarević"],
    attackers: ["Leonardo Campana", "Luca Langoni", "Tomás Chancalay"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/NE.png"
          alt="New England Revolution"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo_of_New_England_Revolution_%282021%29.svg/330px-Logo_of_New_England_Revolution_%282021%29.svg.png"
                  alt="New England Revolution Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  New England Revolution
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Gillette Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Tamnoplava boja New Englanda */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-blue-700' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>New England Revolution</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Revs</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1996</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Gillette Stadium, Foxborough, Massachusetts</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>65,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Robert Kraft</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Bruce Arena</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Proud Legacy in MLS</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>New England Revolution is one of the original MLS clubs, founded in 1996. The team has a long and proud history and remains a cornerstone of New England sports culture.</p>
                  <p>Under the leadership of Bruce Arena and with key players like Carles Gil and Leonardo Campana, the Revs continue to compete at the highest level in Major League Soccer.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/new-england-revolution/${player.slug}`} className="group">
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
                          <h3 className="font-bold text-lg group-hover:text-blue-700">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">New England Revolution Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-blue-700" />
                <h2 className="text-3xl font-black text-[#020617]">New England Revolution Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support the Revs by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-blue-700 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-blue-700">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline text-lg"
                >
                  View full New England Revolution store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/DyO2QG" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Gillette Stadium
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
                      <h4 className="font-bold group-hover:text-blue-700 line-clamp-2 text-sm">{item.title}</h4>
                      <p className="text-blue-700 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-blue-700 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEnglandRevolutionPage;