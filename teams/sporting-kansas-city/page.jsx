'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const SportingKansasCityPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Dániel Sallói', 
      image: 'https://nb1.hu/wp-content/uploads/2023/10/Salloi-1-scaled-e1703882279292.jpg', 
      slug: 'salloi' 
    },
    { 
      name: 'Nemanja Radoja', 
      image: 'https://www.shutterstock.com/image-photo/sporting-kansas-citys-nemanja-radoja-600nw-2435697827.jpg', 
      slug: 'radoja' 
    },
    { 
      name: 'Dejan Joveljić', 
      image: 'https://assets.goal.com/images/v3/getty-2200737353/crop/MM5DEOBRGM5DCNJYGI5G433XMU5DAORRGQ3A====/GettyImages-2200737353.jpg', 
      slug: 'joveljic' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Sporting Kansas City Battle Hard in 2026 Season",
      author: "Mio Ristić",
      date: "March 26, 2026",
      excerpt: "With strong performances from Dániel Sallói and Dejan Joveljić, Sporting KC continues to fight for playoff spots.",
      imageUrl: "https://nb1.hu/wp-content/uploads/2023/10/Salloi-1-scaled-e1703882279292.jpg",
      slug: "sporting-kc-2026",
    },
  ];

  const shopItems = [
    {
      "title": "Men's Sporting Kansas City Dejan Joveljic adidas Light Blue 2025 One KC Replica Player Jersey",
      "price": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/mens-adidas-dejan-joveljic-light-blue-sporting-kansas-city-2025-one-kc-replica-player-jersey_ss5_p-202915693+pv-1+u-pmgodtqdbhymdftmyfcg+v-giu91udhj0idivy7r7fx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnoq7"
    },
    {
      "title": "Men's Sporting Kansas City adidas Navy 2024 Diamonds Our Forever Authentic Player Jersey",
      "price": "$194.99",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/mens-adidas-navy-sporting-kansas-city-2024-diamonds-our-forever-authentic-player-jersey_ss5_p-202915700+pv-1+u-rwjibm35mdsbv4sjoix0+v-4p1cxwb849eczlfhbxja.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAyP3"
    },
    {
      "title": "Men's Sporting Kansas City Johnny Russell adidas Navy 2024 Diamonds Our Forever Replica Player Jersey",
      "price": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/womens-adidas-johnny-russell-navy-sporting-kansas-city-2024-diamonds-our-forever-replica-player-jersey_ss5_p-201206419+pv-1+u-m526dc6ye75qgqfo3kps+v-jrblnqjgpcgnjayta80j.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeOrBn"
    },
    {
      "title": "Youth Sporting Kansas City Dejan Joveljic adidas Light Blue 2025 One KC Replica Player Jersey",
      "price": "$114.99",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/youth-adidas-dejan-joveljic-light-blue-sporting-kansas-city-2025-one-kc-replica-player-jersey_ss5_p-202915697+pv-1+u-rspbcx9gd30nssjltxcg+v-j4rvfmblgsyvqixdx3fe.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQNzj"
    }
  ];

  const squad = {
    goalkeepers: ["Tim Melia", "John Pulskamp"],
    defenders: ["Robert Voloder", "Andreu Fontàs", "Logan Ndenbe", "Jake Davis"],
    midfielders: ["Nemanja Radoja", "Remi Walter", "Erik Thommy", "Memo Rodríguez"],
    attackers: ["Dániel Sallói", "Dejan Joveljić", "Johnny Russell"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Sporting.png"
          alt="Sporting Kansas City"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sporting_Kansas_City_logo.svg/330px-Sporting_Kansas_City_logo.svg.png"
                  alt="Sporting Kansas City Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Sporting Kansas City
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Children’s Mercy Park
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Plava boja */}
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Sporting Kansas City</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>Sporting, SKC</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1995</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Children’s Mercy Park, Kansas City, Kansas</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>18,467</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Kerry Zavagnin (interim)</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Legacy of Excellence in Kansas City</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Sporting Kansas City is one of the most storied franchises in Major League Soccer. With a strong academy system and passionate supporters, SKC has consistently competed at a high level since the league's early days.</p>
                  <p>Home games at the intimate Children’s Mercy Park create an electric atmosphere, and the team continues to build around talented players like Dániel Sallói and Dejan Joveljić.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/sporting-kansas-city/${player.slug}`} className="group">
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Sporting Kansas City Squad</h2>

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
                <h2 className="text-3xl font-black text-[#020617]">Sporting Kansas City Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Sporting KC by shopping through our links. 
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
                  View full Sporting Kansas City store →
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
              <a href="https://ticketnetwork.lusg.net/o457yo" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Children’s Mercy Park
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

export default SportingKansasCityPage;