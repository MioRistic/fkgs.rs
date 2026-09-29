'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const AustinFCPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Alexey Miranchuk', 
      image: 'https://gray-wgcl-prod.gtv-cdn.com/resizer/v2/2WGWYC52NZAUTKQLETZRJDSRGU.jpg?auth=70a049cd83c40d2b50f4dd4a91edf89a30633b4a5093f1c100380a48b6a9ae13&width=1600&height=900&smart=true', 
      slug: 'miranchuk' 
    },
    { 
      name: 'Jamal Thiaré', 
      image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c480357-382f-40b7-8355-34ac16169374_4092x2728.jpeg', 
      slug: 'thiare' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Austin FC Secure Important Victory",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "Alexey Miranchuk and the Verde Boys deliver a strong performance in the Western Conference.",
      imageUrl: "https://gray-wgcl-prod.gtv-cdn.com/resizer/v2/2WGWYC52NZAUTKQLETZRJDSRGU.jpg?auth=70a049cd83c40d2b50f4dd4a91edf89a30633b4a5093f1c100380a48b6a9ae13&width=1600&height=900&smart=true",
      slug: "austin-fc-victory",
    },
  ];

  // TAČNO ONO ŠTO SI DAO - samo 2 proizvoda
  const shopItems = [
    { 
      id: 1, 
      title: "Men's Austin FC adidas Green 2025 The Heartbeat Kit Authentic Jersey", 
      price: "$149.99", 
      imageUrl: "https://images.footballfanatics.com/austin-fc/mens-adidas-green-austin-fc-2025-the-heartbeat-kit-authentic-jersey_ss5_p-202644572+u-yquw8dh5zovbn1qhd7ba+v-ao7ebbr8brogqcboxrbf.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-green-2025-the-heartbeat-kit-authentic-jersey/t-32140053+p-575546398282882+z-9-966649890" 
    },
    { 
      id: 2, 
      title: "Men's Austin FC adidas Black 2025 The Connector Authentic Jersey", 
      price: "$149.99", 
      imageUrl: "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2025-the-connector-authentic-jersey_ss5_p-202644571+u-7vncamcipaipxdxyyn0c+v-55ym6cyzrf9sowyyfqda.png?_hv=2&w=340", 
      link: "https://mlsstore.i8h2.net/PObgNY" 
    }
  ];

  const squad = {
    goalkeepers: ["Brad Stuver", "Matt Bersano"],
    defenders: ["Julio Cascante", "Nick Lima", "Zan Kolmanic", "Mikkel Desler", "Brendan Hines-Ike"],
    midfielders: ["Alexander Ring", "Sebastian Driussi", "Owen Wolff", "Jhojan Valencia", "Ethan Finlay"],
    attackers: ["Gyasi Zardes", "Jon Gallagher", "Diego Rubio"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Austinposter.png"
          alt="Austin FC"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/40" />

        <div className="absolute inset-0 flex items-end pb-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-28 h-28 md:w-40 md:h-40 relative bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Austin_FC.svg/960px-Austin_FC.svg.png"
                  alt="Austin FC Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Austin FC
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mt-2 font-medium">
                  Major League Soccer • Q2 Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Austin zelena boja */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-8 py-4 whitespace-nowrap">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'overview' ? 'text-green-400' : 'hover:text-green-400'}`}
            >
              Overview
              {activeTab === 'overview' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('news')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'news' ? 'text-green-400' : 'hover:text-green-400'}`}
            >
              News
              {activeTab === 'news' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('blog')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'blog' ? 'text-green-400' : 'hover:text-green-400'}`}
            >
              Blog
              {activeTab === 'blog' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('squad')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'squad' ? 'text-green-400' : 'hover:text-green-400'}`}
            >
              Squad
              {activeTab === 'squad' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('shop')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'shop' ? 'text-green-400' : 'hover:text-green-400'}`}
            >
              Shop
              {activeTab === 'shop' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 space-y-12">

          {activeTab === 'overview' && (
            <>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Club Overview</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Austin FC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Verde</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2018</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Q2 Stadium, Austin, Texas</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>20,500</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Anthony Precourt</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Nico Estévez</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Rising in the Soccer Scene</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Austin FC is a professional soccer club based in Austin, Texas, founded in 2018. The club has quickly established itself as a competitive force in Major League Soccer.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/austin-fc/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-green-600">{player.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-56">
                          <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 line-clamp-2">{post.title}</h3>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 line-clamp-2">{post.title}</h3>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Austin FC Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-green-600 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-green-600 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-green-600 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-green-600" />
                <h2 className="text-3xl font-black text-[#020617]">Austin FC Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Austin FC by shopping through our links. 
                Every purchase helps us keep this site running and bring you better content.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {shopItems.map((item) => (
                  <a 
                    key={item.id} 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-green-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-green-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline text-lg"
                >
                  View full Austin FC store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/9LnXLQ" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Q2 Stadium
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-6 text-[#020617]">Official Shop</h3>
            <div className="space-y-6">
              {shopItems.map((item) => (
                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-green-600 line-clamp-2">{item.title}</h4>
                      <p className="text-green-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-green-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AustinFCPage;