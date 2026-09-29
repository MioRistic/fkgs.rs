'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const ColumbusCrewPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Diego Rossi', 
      image: 'https://images.supersport.com/media/5wfgo22m/diego-rossi-celebrating-2024-g-1200.jpg?width=1920&quality=90&format=webp', 
      slug: 'rossi' 
    },
    { 
      name: 'Darlington Nagbe', 
      image: 'https://wallpapers.com/images/hd/darlington-nagbe-mls-medically-cleared-cy1tf00pgqbg7a3o.jpg', 
      slug: 'nagbe' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Columbus Crew Deliver Strong Performance",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "The Crew continue their impressive 2026 season with a commanding victory in the Eastern Conference.",
      imageUrl: "https://images.supersport.com/media/5wfgo22m/diego-rossi-celebrating-2024-g-1200.jpg?width=1920&quality=90&format=webp",
      slug: "columbus-crew-victory",
    },
  ];

  const shopItems = [
    {
      "title": "Youth Columbus Crew adidas Black 2025 The Goosebumps Kit Replica Custom Jersey",
      "price": "$114.99",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/youth-adidas-black-columbus-crew-2025-the-goosebumps-kit-replica-custom-jersey_ss5_p-202709971+pv-1+u-acgq8hwc0i3qxihnenui+v-ode5arv7v11upfuxnqlu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmORja"
    },
    {
      "title": "Men's Columbus Crew adidas Black 2025 The Goosebumps Kit Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-black-columbus-crew-2025-the-goosebumps-kit-replica-jersey_ss5_p-202652743+pv-1+u-999ybxcjkvvnistr0nx9+v-hlxgah3ixchd062h2npk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/2aMezO"
    },
    {
      "title": "Men's Columbus Crew adidas Originals Black Culturewear Collection Full-Zip Track Jacket",
      "price": "$109.99",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-originals-black-columbus-crew-culturewear-collection-full-zip-track-jacket_ss5_p-201658633+pv-1+u-oxtpspjfz5rihzm3lgrf+v-tfg618chpertzqfpghxb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yq9vK2"
    },
    {
      "title": "Men's Columbus Crew adidas Black 2025 The Goosebumps Kit Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-black-columbus-crew-2025-the-goosebumps-kit-authentic-jersey_ss5_p-202652661+pv-1+u-4le5kdfl2g3qmvzzxlen+v-ddfcdg721pqvqfn4raal.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzZvKy"
    }
  ];

  const squad = {
    goalkeepers: ["Patrick Schulte", "Evan Bush"],
    defenders: ["Rudy Camacho", "Steven Moreira", "Malte Amundsen", "Mohamed Farsi"],
    midfielders: ["Darlington Nagbe", "Aidan Morris", "Derrick Jones", "Sean Zawadzki"],
    attackers: ["Diego Rossi", "Cucho Hernández", "Jacen Russell-Rowe"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Columbus.png"
          alt="Columbus Crew"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Columbus_Crew_logo_2021.svg/330px-Columbus_Crew_logo_2021.svg.png"
                  alt="Columbus Crew Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Columbus Crew
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Lower.com Field
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - bolji responsive */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-yellow-400' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

        <div className="lg:col-span-2 space-y-10 md:space-y-12">

          {/* Overview, News, Blog, Squad sekcije ostaju iste kao ranije */}
          {activeTab === 'overview' && (
            <>
              {/* ... tvoj postojeći overview kod ... */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Club Overview</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Columbus Crew</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Black & Gold</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1994</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Lower.com Field, Columbus, Ohio</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>20,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Haslam Sports Group</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Wilfried Nancy</dd></div>
                </dl>
              </div>

              {/* Trending Players i Latest News sekcije ostaju iste */}
              {/* ... (kopiraj ih iz prethodne verzije ako treba) ... */}
            </>
          )}

          {/* News Tab */}
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Columbus Crew Squad</h2>
              {/* Squad sekcija ostaje ista kao ranije */}
              {/* ... (kopiraj iz prethodne verzije) ... */}
            </div>
          )}

          {/* SHOP TAB - bolji responsive */}
          {activeTab === 'shop' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaShoppingBag className="text-4xl text-yellow-400" />
                <h2 className="text-3xl font-black text-[#020617]">Columbus Crew Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Columbus Crew by shopping through our links. 
                Every purchase helps us keep this site running and bring you better content.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-yellow-400 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-yellow-400">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-yellow-400 font-bold hover:underline text-lg"
                >
                  View full Columbus Crew store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/JKOxkN" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Lower.com Field
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
                      <h4 className="font-bold group-hover:text-yellow-400 line-clamp-2">{item.title}</h4>
                      <p className="text-yellow-400 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-yellow-400 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumbusCrewPage;