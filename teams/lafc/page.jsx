'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const LAFCPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { name: 'Denis Bouanga', image: 'https://cdn1.rangersnews.uk/uploads/24/2023/03/GettyImages-1246857078-1140x760.jpg', slug: 'bouanga' },
    { name: 'Hugo Lloris', image: 'https://cdn1.thespurs.news/uploads/36/2024/02/GettyImages-2003725135-1140x760.jpg', slug: 'lloris' },
    { name: 'Cristian Olivera', image: 'https://cdn1.vamofutebol.com/uploads/5/2025/01/GettyImages-2153266577-1140x760.jpg', slug: 'olivera' },
    { name: 'Heung-Min Son', image: 'https://assets.goal.com/images/v3/getty-2229316055/crop/MM5DGNBTHA5DCOJTGQ5G433XMU5DAORRG44Q====/GettyImages-2229316055.jpg?auto=webp&format=pjpg&width=1920&quality=60', slug: 'son' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "LAFC Deliver Strong Performance in 2026 Season",
      author: "Mio Ristić",
      date: "March 25, 2026",
      excerpt: "The Black & Gold continue their competitive campaign with impressive results.",
      imageUrl: "https://cdn1.rangersnews.uk/uploads/24/2023/03/GettyImages-1246857078-1140x760.jpg",
      slug: "lafc-strong-performance",
    },
  ];

  const shopItems = [
    {
      "title": "Men's LAFC adidas Black 2024 Primary Authentic Jersey",
      "price": "$74.99",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-black-lafc-2024-primary-authentic-jersey_ss5_p-201092078+pv-1+u-fv9t2orchosjjnwluulu+v-d461j6hkn00cwdf1ry8i.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjxkW"
    },
    {
      "title": "Men's LAFC New Era Black Icon 59FIFTY Fitted Hat",
      "price": "$26.99",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-new-era-black-lafc-icon-59fifty-fitted-hat_pi3275000_altimages_ff_3275871alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqAVr"
    },
    {
      "title": "Men's LAFC adidas Black 2019 Primary Authentic Jersey",
      "price": "$49.99",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-black-lafc-2019-primary-authentic-jersey_ss5_p-202258865+pv-1+u-eattxsxmbulkwzekopxd+v-7n4djj9zuhknlsfulshc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyA6LP"
    },
    {
      "title": "Women's LAFC adidas Black 2024 Primary Replica Jersey",
      "price": "$49.99",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens-adidas-black-lafc-2024-primary-replica-jersey_ss5_p-201241508+pv-1+u-wt7fry1yoe8lb2yu4wft+v-anc0klegwygqoblydduq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anG7A"
    },
    {
      "title": "Men's LAFC adidas White 2025 Secondary Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-white-lafc-2025-secondary-authentic-jersey_ss5_p-202652667+pv-1+u-wzrlfrzoakelkphn9zt0+v-36szgkyjwf16xtnnzcta.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/3Jy9xB"
    },
    {
      "title": "Men's LAFC Black Team Hometown Collection Pullover Hoodie",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-black-lafc-team-hometown-collection-pullover-hoodie_ss5_p-5281771+pv-1+u-c7ocg2xdnsotqsdlokrz+v-wyuvhoysfz06bkwu4pwa.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLz3Q"
    }
  ];

  const squad = {
    goalkeepers: ["Hugo Lloris", "John McCarthy"],
    defenders: ["Aaron Long", "Jesús Murillo", "Eddie Segura", "Ryan Hollingshead"],
    midfielders: ["Ilie Sánchez", "Timothy Tillman", "Érik Dueñas"],
    attackers: ["Denis Bouanga", "Cristian Olivera", "Mateusz Bogusz"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Lafc.png"
          alt="Los Angeles FC"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Los_Angeles_Football_Club.svg/960px-Los_Angeles_Football_Club.svg.png"
                  alt="LAFC Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Los Angeles FC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • BMO Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Zlatna boja */}
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Los Angeles FC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>LAFC, The Black & Gold</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2014</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>BMO Stadium, Los Angeles, California</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>22,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>LAFC Ownership Group</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Steve Cherundolo</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A New Era in Los Angeles</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Los Angeles FC is one of the newest teams in Major League Soccer, founded in 2014. Despite being a relatively new club, LAFC has already made a huge impact with international talent and a passionate fanbase.</p>
                  <p>The club plays at the modern BMO Stadium and is known for its exciting, attacking style of play.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/lafc/${player.slug}`} className="group">
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">LAFC Squad</h2>

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
                <h2 className="text-3xl font-black text-[#020617]">LAFC Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Los Angeles FC by shopping through our links. 
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
                  View full LAFC store →
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
              <a href="https://ticketnetwork.lusg.net/dOkmRy" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near BMO Stadium
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

export default LAFCPage;