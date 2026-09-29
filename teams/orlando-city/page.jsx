'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const OrlandoCityPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Robin Jansson', 
      image: 'https://cdn1.sheffieldwednesday.news/uploads/8/2024/07/GettyImages-2160330033-1024x683.jpg', 
      slug: 'jansson' 
    },
    { 
      name: 'Luis Muriel', 
      image: 'https://icdn.sempremilan.com/wp-content/uploads/2021/12/ssc-napoli-v-atalanta-bc-serie-a-1.jpg', 
      slug: 'muriel' 
    },
    { 
      name: 'Martín Ojeda', 
      image: 'https://assets.goal.com/images/v3/getty-2150744981/crop/MM5DGOBYHA5DEMJYG45G433XMU5DOMBSHIYTANQ=/GettyImages-2150744981.jpg', 
      slug: 'ojeda' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Orlando City SC Show Strong Form in 2026 Season",
      author: "Mio Ristić",
      date: "March 25, 2026",
      excerpt: "The Lions continue their competitive campaign with impressive performances at Exploria Stadium.",
      imageUrl: "https://cdn1.sheffieldwednesday.news/uploads/8/2024/07/GettyImages-2160330033-1024x683.jpg",
      slug: "orlando-city-strong-2026",
    },
  ];

  const shopItems = [
    {
      "title": "Men's Orlando City SC adidas Purple 2024 Legacy Kit Replica Jersey",
      "price": "$49.99",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2024-legacy-kit-replica-jersey_ss5_p-201102333+pv-1+u-zns3ucbkikg9jsefvntv+v-vljcenczpi9onmo8a6g2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnajj"
    },
    {
      "title": "Men's Orlando City SC adidas Purple 2025 Perfect Storm Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2025-perfect-storm-authentic-jersey_ss5_p-202644590+pv-1+u-ajiqlzqrc2cnvnd87vba+v-zquxp205qfvsbltc72gy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAKNP"
    },
    {
      "title": "Men's Orlando City SC adidas Purple 2025 Perfect Storm Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2025-perfect-storm-replica-jersey_ss5_p-202644709+pv-1+u-sig2uwghxdhdd8tqzmzj+v-kfvznfphhqodyknpvpub.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQbjd"
    },
    {
      "title": "Men's Orlando City SC adidas Purple 2025 Perfect Storm Authentic Custom Jersey",
      "price": "$194.99",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2025-perfect-storm-authentic-custom-jersey_ss5_p-202698425+pv-1+u-7ef4xvrbvf71upctucw9+v-tvzizstalxau4hw8zj92.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQ2ye"
    },
    {
      "title": "Men's Orlando City SC New Era Purple Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
      "price": "$32.99",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-new-era-purple-orlando-city-sc-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948613+pv-1+u-prv4glmeiligeg7k4irw+v-8mdbgs7qqc7x56wvi1h9.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjLkV"
    }
  ];

  const squad = {
    goalkeepers: ["Pedro Gallese", "Javier Otero"],
    defenders: ["Robin Jansson", "Rodrigo Schlegel", "David Brekalo", "Rafael Santos"],
    midfielders: ["Martín Ojeda", "Facundo Torres", "César Araújo", "Dagur Dan Thórhallsson"],
    attackers: ["Luis Muriel", "Duncan McGuire", "Ramón Enrique"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Orlando.png"
          alt="Orlando City SC"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Orlando_City_2014.svg/330px-Orlando_City_2014.svg.png"
                  alt="Orlando City SC Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Orlando City SC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Exploria Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Ljubičasta boja Orlando Cityja */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-purple-600' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Orlando City Soccer Club</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Lions</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2010</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Exploria Stadium, Orlando, Florida</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>25,500</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Flávio Augusto da Silva</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Oscar Pareja</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Rising Force in Florida</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Orlando City SC, known as The Lions, has quickly become one of the most exciting teams in Major League Soccer since joining in 2015. The club plays at the vibrant Exploria Stadium and boasts a passionate fanbase that creates an electric atmosphere on matchdays.</p>
                  <p>With star players like Luis Muriel, Robin Jansson, and Martín Ojeda, Orlando City continues to grow as a competitive force in the Eastern Conference, aiming for their first MLS Cup title.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/orlando-city/${player.slug}`} className="group">
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
                          <h3 className="font-bold text-lg group-hover:text-purple-600">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Orlando City SC Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-purple-600 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-purple-600 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-purple-600 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-purple-600" />
                <h2 className="text-3xl font-black text-[#020617]">Orlando City Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support The Lions by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-purple-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-purple-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-purple-600 font-bold hover:underline text-lg"
                >
                  View full Orlando City store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-600 to-violet-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/6ynJPE" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Exploria Stadium
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
                      <h4 className="font-bold group-hover:text-purple-600 line-clamp-2 text-sm">{item.title}</h4>
                      <p className="text-purple-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-purple-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrlandoCityPage;