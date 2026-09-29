'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const AtlantaUnitedPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
  { 
    name: 'Alexey Miranchuk', 
    image: 'https://gray-wgcl-prod.gtv-cdn.com/resizer/v2/2WGWYC52NZAUTKQLETZRJDSRGU.jpg?auth=70a049cd83c40d2b50f4dd4a91edf89a30633b4a5093f1c100380a48b6a9ae13&width=1600&height=900&smart=true', 
    slug: 'miranchuk' 
  },
  { 
    name: 'Miguel Almirón', 
    image: 'https://i.ibb.co/35h8XFmw/Getty-Images-2231183793-1024x683.jpg', 
    slug: 'almiron' 
  },
  { 
    name: 'Emmanuel Latte Lath', 
    image: 'https://i.ibb.co/wvcBD1R/Latte-Lath-ATLUTD.jpg', 
    slug: 'latte-lath' 
  },
  // { 
  //   name: 'Saba Lobjanidze', 
  //   image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c480357-382f-40b7-8355-34ac16169374_4092x2728.jpeg', 
  //   slug: 'lobjanidze' 
  // },
];

  const blogPosts = [
    // {
    //   id: 1,
    //   title: "Atlanta United Secure Crucial Victory Over Rivals",
    //   author: "Mio Ristić",
    //   date: "March 22, 2026",
    //   excerpt: "Alexey Miranchuk shines as Atlanta United claims important three points in the Eastern Conference battle.",
    //   imageUrl: "https://gray-wgcl-prod.gtv-cdn.com/resizer/v2/2WGWYC52NZAUTKQLETZRJDSRGU.jpg?auth=70a049cd83c40d2b50f4dd4a91edf89a30633b4a5093f1c100380a48b6a9ae13&width=1600&height=900&smart=true",
    //   slug: "atlanta-united-victory-miranchuk",
    // },
    //  {
    //   id: 2,
    //   title: "Atlanta United Secure Crucial Victory Over Rivals",
    //   author: "Mio Ristić",
    //   date: "March 22, 2026",
    //   excerpt: "Alexey Miranchuk shines as Atlanta United claims important three points in the Eastern Conference battle.",
    //   imageUrl: "https://gray-wgcl-prod.gtv-cdn.com/resizer/v2/2WGWYC52NZAUTKQLETZRJDSRGU.jpg?auth=70a049cd83c40d2b50f4dd4a91edf89a30633b4a5093f1c100380a48b6a9ae13&width=1600&height=900&smart=true",
    //   slug: "atlanta-united-victory-miranchuk",
    // },
    
  ];

  const shopItems = [
    { 
      id: 1, 
      title: "Men's Atlanta United FC adidas Black 2023 The 17s' Kit Authentic Jersey", 
      price: "$39.99", 
      imageUrl: "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=900", 
      link: "https://mlsstore.i8h2.net/qzyvXy" 
    },
    { 
      id: 2, 
      title: "Men's Atlanta United FC adidas Black 2025 The Connector Authentic Jersey", 
      price: "$149.99", 
      imageUrl: "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2025-the-connector-authentic-jersey_ss5_p-202644571+u-7vncamcipaipxdxyyn0c+v-55ym6cyzrf9sowyyfqda.png?_hv=2&w=900", 
      link: "https://mlsstore.i8h2.net/PObgNY" 
    }
  ];

  const squad = {
  goalkeepers: [
    "Lucas Hoyos", 
    "Jayden Hibbert", 
  ],
  defenders: [
    "Ronald Hernández",
    "Elías Báez",
    "Enea Mihaj",
    "Stian Gregersen",
    "Juan Berrocal",
    "Pedro Amador",
    "Brooks Lennon",
    "Derrick Williams",
    "Luis Abram",
    "Caleb Wiley",
    "Tomás Jacob",
    "Matt Edwards",
    "Dominik Chong Qui"
  ],
  midfielders: [
    "Alexey Miranchuk",
    "Steven Alzate",
    "Tristan Muyumba",
    "Bartosz Slisz",
    "Ajani Fortune",
    "Saba Lobjanidze",
    "Matías Galarza",
    "Adrian Gill",
    "Luke Brennan",
    "Will Reilly",
    "Adyn Torres",
    "Cooper Sanchez"
  ],
  attackers: [
    "Emmanuel Latte Lath",
    "Miguel Almirón",
    "Jamal Thiaré",
    "Fafa Picault",
    "Sergio Santos",
    "Daniel Rios",
    "Machop Chol",
    "Cayman Togashi"
  ],
};

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/atlantaposter.png"
          alt="Atlanta United FC"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Atlanta_MLS.svg/330px-Atlanta_MLS.svg.png"
                  alt="Atlanta United FC Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Atlanta United FC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Mercedes-Benz Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Atlanta United crvena boja */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-red-500' 
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Atlanta United Football Club</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Five Stripes</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2014</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Mercedes-Benz Stadium, Atlanta, Georgia</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>73,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Arthur Blank</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Ronny Deila</dd></div>
                </dl>
              </div>

           

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/atlanta-united/${player.slug}`} className="group">
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
                          <Image 
                            src={post.imageUrl} 
                            alt={post.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            unoptimized 
                          />
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Atlanta United FC Squad</h2>

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
                <h2 className="text-3xl font-black text-[#020617]">Atlanta United Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support The Five Stripes by shopping through our links. 
                Every purchase helps us keep this site running and bring you better content.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
                        unoptimized 
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
                  View full Atlanta United store →
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
              <a href="https://ticketnetwork.lusg.net/raL7aG" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://expedia.com/affiliate/Xn40dqo" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Mercedes-Benz Stadium
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
                      <h4 className="font-bold group-hover:text-red-600 line-clamp-2 text-sm leading-tight">{item.title}</h4>
                      <p className="text-red-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.i8h2.net/DWWb3d" target="_blank" className="text-red-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlantaUnitedPage;