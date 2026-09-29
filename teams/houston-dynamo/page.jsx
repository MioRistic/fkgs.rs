'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const HoustonDynamoPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Sebastian Kowalczyk', 
      image: 'https://daf17zziboaju.cloudfront.net/wp-content/uploads/2024/11/07072140/2WMMX2H-1.jpg', 
      slug: 'kowalczyk' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Houston Dynamo Deliver Strong Performance",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "The Dynamo continue their competitive 2026 season with a hard-fought victory in the Western Conference.",
      imageUrl: "https://daf17zziboaju.cloudfront.net/wp-content/uploads/2024/11/07072140/2WMMX2H-1.jpg",
      slug: "houston-dynamo-victory",
    },
  ];

  // TAČNO ONO ŠTO SI TI DAO - bez dodavanja novih
  const shopItems = [
    {
      "title": "Camiseta auténtica Houston Dynamo FC adidas violeta 2024 Still Holdin' para hombre",
      "price": "$159.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-adidas-purple-houston-dynamo-fc-2024-still-holdin-authentic-jersey_ss5_p-201101845+pv-1+u-tuua1sr80lxx9xghurai+v-rljhg8i5mn3j3lxhicdu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOPJj"
    },
    {
      "title": "Réplica de la camiseta adidas naranja de la temporada 2025 del Houston Dynamo FC para hombre",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-adidas-orange-houston-dynamo-fc-2025-season-20-replica-jersey_ss5_p-202644706+pv-1+u-rt4lh6p0ortpkx6vlrws+v-yt8lcgeme96yarhekso3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLr9BA"
    },
    {
      "title": "Camiseta adidas naranja auténtica de la temporada 2025 del Houston Dynamo FC para hombre",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-adidas-orange-houston-dynamo-fc-2025-season-20-authentic-jersey_ss5_p-202644580+pv-1+u-dkjgf6nhvaw89d0hqfen+v-d5gl9c1dwuef5zal1wza.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnWmW"
    },
    {
      "title": "Camiseta adidas personalizada de réplica de la temporada 2020 del Houston Dynamo FC para hombre, color naranja",
      "price": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-adidas-orange-houston-dynamo-fc-2025-season-20-replica-custom-jersey_ss5_p-202708338+pv-1+u-uklo3vf6jex6kznzsnlz+v-slxkna3tuv2z5uv9zwfp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLn9Q"
    },
    {
      "title": "Camiseta de béisbol negra Fanatics Injury Time del Houston Dynamo FC para hombre",
      "price": "$59.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-fanatics-black-houston-dynamo-fc-injury-time-baseball-jersey_ss5_p-201747344+pv-1+u-ysotwwjcqikenxujsogz+v-ycyjkk8a2fhig6gt7hxk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOPjZ"
    },
    {
      "title": "Camiseta juvenil Stalwart Defender negra de Outerstuff del Houston Dynamo FC",
      "price": "$31.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/youth-outerstuff-black-houston-dynamo-fc-stalwart-defender-t-shirt_ss5_p-201875241+pv-1+u-f2mqj3slusxxhunq5ntz+v-sv0rdh5xduijm9zisw0p.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmnQy"
    },
    {
      "title": "Camiseta de manga larga Houston Dynamo FC Fanatics negra/naranja Striker para hombre",
      "price": "$33.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-fanatics-black/orange-houston-dynamo-fc-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372692-0bfd0a0a1d8d43a175f1alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAOaA"
    },
    {
      "title": "Gorra de camionero ajustable con marco en forma de A 9FORTY en color morado del Houston Dynamo FC de New Era para hombre",
      "price": "$32.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-new-era-purple-houston-dynamo-fc-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948596+pv-1+u-j1daxxhiivu0zgwapcbg+v-riz0fpduyulg8y985hoa.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnWmy"
    },
    {
      "title": "Camiseta negra de delantero Fanatics Stoppage Time del Houston Dynamo FC para hombre",
      "price": "$54.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-fanatics-black-houston-dynamo-fc-stoppage-time-striker-t-shirt_ss5_p-201747287+pv-1+u-zalhpfjx5kfihwizqqxq+v-dbso0gua0z1mmidqpmev.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55ybWL"
    },
    {
      "title": "Camiseta negra con atmósfera del estadio local del Houston Dynamo FC para hombre",
      "price": "$34.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-black-houston-dynamo-fc-hometown-stadium-atmosphere-t-shirt_ss5_p-201638755+pv-1+u-depq5z3yhachcc9fqysz+v-4yz9m38jwoo8ynx2oagt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9jyN"
    },
    {
      "title": "Camiseta negra auténtica personalizada con nombre y número del Houston Dynamo FC para hombre",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-black-houston-dynamo-fc-authentic-stack-personalized-any-name-and-number-t-shirt_ss5_p-202929290+pv-1+u-acnauvlfobymaagx7msc+v-w7stirjnwxgqymhppjwa.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2XGK"
    },
    {
      "title": "Camiseta extragrande City Soul en color carbón del Houston Dynamo FC para hombre",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/houston-dynamo-fc/mens-sport-design-sweden-charcoal-houston-dynamo-fc-city-soul-oversized-t-shirt_ss5_p-202666820+pv-1+u-q9mokawzew7bohipmrpk+v-g4f5eoxtgstccmlvzpqv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyADWM"
    }
  ];

  const squad = {
    goalkeepers: ["Andrew Tarbell", "Elliott Panicco"],
    defenders: ["Griffin Dorsey", "Micael", "Erik Sviatchenko", "Ethan Bartlow"],
    midfielders: ["Héctor Herrera", "Amine Bassi", "Sebastian Kowalczyk", "Artur"],
    attackers: ["Ibrahim Aliyu", "Ezequiel Ponce", "Nelson Quiñónes"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Houston.png"
          alt="Houston Dynamo"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Houston_Dynamo_FC_logo.svg/330px-Houston_Dynamo_FC_logo.svg.png"
                  alt="Houston Dynamo Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Houston Dynamo
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Shell Energy Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Houston Dynamo boje (narančasta + crna) */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-orange-500' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Houston Dynamo FC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Orange</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2006</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Shell Energy Stadium, Houston, Texas</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>22,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>The Houston Dynamo Ownership Group</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Ben Olsen</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Powerhouse in the Heart of Texas</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Houston Dynamo FC is a proud MLS club known for its passionate fanbase and competitive spirit. The team plays at Shell Energy Stadium and continues to build a strong identity in Texas soccer.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/houston-dynamo/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-orange-500">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Houston Dynamo Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-orange-500" />
                <h2 className="text-3xl font-black text-[#020617]">Houston Dynamo Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Houston Dynamo by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-orange-500 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-orange-500">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-orange-500 font-bold hover:underline text-lg"
                >
                  View full Houston Dynamo store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/bOPEk6" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Shell Energy Stadium
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
                      <h4 className="font-bold group-hover:text-orange-500 line-clamp-2">{item.title}</h4>
                      <p className="text-orange-500 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-orange-500 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoustonDynamoPage;