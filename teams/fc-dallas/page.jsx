'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const FCDallasPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Sebastian Lletget', 
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/dmn/5IRRAYDKIBHDPJUIDYYBVVEGQQ.jpg', 
      slug: 'lletget' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "FC Dallas Deliver Strong Performance",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "The Hoops continue their solid 2026 campaign with a hard-fought victory in the Western Conference.",
      imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/dmn/5IRRAYDKIBHDPJUIDYYBVVEGQQ.jpg",
      slug: "fc-dallas-victory",
    },
  ];

  // TAČNO ONO ŠTO SI TI DAO - bez dodavanja novih
  const shopItems = [
    {
      "title": "Men's FC Dallas adidas Navy 2024 After Burner Authentic Jersey",
      "price": "$159.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-adidas-navy-fc-dallas-2024-after-burner-authentic-jersey_ss5_p-201092075+pv-1+u-q8gavc9l7ywcix8huitp+v-nzyvnfd2zf3obgp8juer.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqbjO"
    },
    {
      "title": "Men's FC Dallas Mitchell & Ness Dallas Burn City Full-Snap Satin Jacket",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-mitchell-and-ness-white-dallas-burn-city-full-snap-satin-jacket_ss5_p-5282544+pv-1+u-uobfzdsfztxlv1hbjnx0+v-40rnh3yqybeydqcgphws.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnOXrx"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Black Historic Logo Since '96 Two-Tone Snapback Hat",
      "price": "$18.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-mitchell-and-ness-black-dallas-burn-historic-logo-since-96-two-tone-snapback-hat_pi4437000_altimages_ff_4437383-775b3a32882f0872b14falt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeORgz"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Black/Green Historic Logo Since '96 Foundation Script Snapback Hat",
      "price": "$15.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-mitchell-and-ness-black/green-dallas-burn-historic-logo-since-96-foundation-script-snapback-hat_pi4437000_altimages_ff_4437391-fbf20fb9c9ef5ff31f20alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQnBO"
    },
    {
      "title": "Men's FC Dallas Mitchell & Ness Red Mesh V-Neck T-Shirt",
      "price": "$44.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-mitchell-and-ness-red-fc-dallas-mesh-v-neck-t-shirt_pi4851000_altimages_ff_4851017-cae35a1550a7c57703e4alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4GyebM"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Red Historic Logo Since '96 Jersey Hook Snapback Hat",
      "price": "$18.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-mitchell-and-ness-red-dallas-burn-historic-logo-since-96-jersey-hook-snapback-hat_pi4437000_altimages_ff_4437379-94f1e5788847c41949cfalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkoQq"
    },
    {
      "title": "Dallas Burn Strideline Since '96 Crew Socks",
      "price": "$19.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/dallas-burn-strideline-since-96-crew-socks_ss5_p-5348262+u-kcnypktipfm3jta2heow+v-kethbakmvd71katqkn6r.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9RKZv"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Red Vertical Tie-Dye Top",
      "price": "$44.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-mitchell-and-ness-red-dallas-burn-vertical-tie-dye-top_pi4851000_altimages_ff_4851055-6bfdd35e0519c8b4a519alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOPVL"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Red/Green Since '96 Split Color Short Sleeve Hoodie",
      "price": "$34.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-mitchell-and-ness-red/green-dallas-burn-since-96-split-color-short-sleeve-hoodie_pi3896000_altimages_ff_3896084-2f128ed4df9d502b98d5alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnWR0"
    },
    {
      "title": "Youth FC Dallas adidas Light Blue 2025 The Inferno Kit Replica Jersey",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/youth-adidas-light-blue-fc-dallas-2025-the-inferno-kit-replica-jersey_ss5_p-202658583+pv-1+u-qwyohgj9311ebnyn3rzz+v-oppdpmwrb5t3hvrb8fsk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yb69"
    },
    {
      "title": "Men's FC Dallas Black Arch Smoke T-Shirt",
      "price": "$17.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-black-fc-dallas-arch-smoke-t-shirt_ss5_p-3305850+pv-1+u-mjjhf4clbhcgocmns86v+v-r4ai2aslpbol9hm5jf24.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APno9x"
    },
    {
      "title": "Men's FC Dallas adidas Navy 2025 Jersey Hook AEROREADY T-Shirt",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-adidas-navy-fc-dallas-2025-jersey-hook-aeroready-t-shirt_ss5_p-201664620+pv-1+u-oalhxsjppoeezwatcxse+v-q62h7a7ivvlobvoomzyr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19y50a"
    },
    {
      "title": "Men's FC Dallas Fanatics Heather Gray Low Block Trucker Adjustable Hat",
      "price": "$29.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-fanatics-heather-gray-fc-dallas-low-block-trucker-adjustable-hat_ss5_p-201747544+pv-1+u-ar0u0bpth4ygv9od6spp+v-lvkrbaykhztpqyrbgdql.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAyqa"
    },
    {
      "title": "Men's FC Dallas Sport Design Sweden Cream Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-sport-design-sweden-cream-fc-dallas-everyday-relaxed-t-shirt_ss5_p-202666813+pv-1+u-blxafuogbcclxr5fxwif+v-tc9bq789ztraaxk25sor.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6Ld9Q"
    }
  ];

  const squad = {
    goalkeepers: ["Maarten Paes", "Jimmy Maurer"],
    defenders: ["Geovane Jesus", "Lalas Abubakar", "Nkosi Tafari", "Sam Junqua"],
    midfielders: ["Sebastian Lletget", "Alan Velasco", "Paxton Pomykal", "Facundo Quignon"],
    attackers: ["Jesús Ferreira", "Jáder Obrian", "Bernard Kamungo"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Dallas.png"
          alt="FC Dallas"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Dallas_logo.svg/330px-FC_Dallas_logo.svg.png"
                  alt="FC Dallas Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  FC Dallas
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Toyota Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - FC Dallas boje (crvena + plava) */}
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>FC Dallas</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Hoops</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1996</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Toyota Stadium, Frisco, Texas</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>20,500</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Hunt Sports Group</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Eric Quill</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Proud Legacy in Texas</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>FC Dallas is one of Major League Soccer's most respected clubs, with a legacy of developing talented players and a history of strong performances.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/fc-dallas/${player.slug}`} className="group">
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">FC Dallas Squad</h2>

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
                <h2 className="text-3xl font-black text-[#020617]">FC Dallas Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support FC Dallas by shopping through our links. 
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
                  View full FC Dallas store →
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
              <a href="https://ticketnetwork.lusg.net/XmGV4M" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Toyota Stadium
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

export default FCDallasPage;