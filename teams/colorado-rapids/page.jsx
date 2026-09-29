'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const ColoradoRapidsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Keegan Rosenberry', 
      image: 'https://burgundywave.com/wp-content/uploads/2023/09/EDP30279.jpg', 
      slug: 'rosenberry' 
    },
    { 
      name: 'Andreas Maxsø', 
      image: 'https://www.tipsbladet.dk/wp-content/uploads/1970/01/2XDKEGR-scaled.jpg', 
      slug: 'maxso' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Colorado Rapids Deliver Strong Performance",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "The Rapids continue their solid 2026 campaign with a hard-fought victory in the Western Conference.",
      imageUrl: "https://burgundywave.com/wp-content/uploads/2023/09/EDP30279.jpg",
      slug: "colorado-rapids-victory",
    },
  ];

  const shopItems = [
    {
      "title": "Men's Colorado Rapids Sport Design Sweden Mint City Soul Oversized T-Shirt",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-sport-design-sweden-mint-colorado-rapids-city-soul-oversized-t-shirt_ss5_p-202666832+pv-1+u-aj0oz8i6ygse3j75epkb+v-49ziqgd3h8zv1x7h2tqq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/POVLBe"
    },
    {
      "title": "Youth Colorado Rapids adidas Green 2025 Headwaters Replica Jersey",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/youth-adidas-green-colorado-rapids-2025-headwaters-replica-jersey_ss5_p-202658580+pv-1+u-ujmnl06vviq1gosiqf5v+v-hqcfrl93appibdiqclsb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxYrQO"
    },
    {
      "title": "Men's Colorado Rapids Charcoal Jersey Hook Hockey Pullover Hoodie",
      "price": "$94.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-charcoal-colorado-rapids-jersey-hook-hockey-pullover-hoodie_ss5_p-202666865+u-k7eu9d1tpuvxvziyzocc+v-thj27i1lo96pjopfzfqa.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/gO6zrA"
    },
    {
      "title": "Youth Colorado Rapids Outerstuff Burgundy Stalwart Defender T-Shirt",
      "price": "$31.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/youth-outerstuff-burgundy-colorado-rapids-stalwart-defender-t-shirt_ss5_p-201875231+pv-1+u-p0qnoxkmbckwxjyckrcp+v-kllqiztgrr1lefahbrvr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09jrnR"
    },
    {
      "title": "Men's Colorado Rapids adidas Green 2025 Headwaters Replica Custom Jersey",
      "price": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-green-colorado-rapids-2025-headwaters-replica-custom-jersey_ss5_p-202709905+pv-1+u-twpohtapr92bmfh1pgay+v-xnrgha6txicfcdhefnir.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ydaxq"
    },
    {
      "title": "Men's Colorado Rapids Fanatics Burgundy Iconic Quarter-Zip Jacket",
      "price": "$29.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-fanatics-burgundy-colorado-rapids-iconic-quarter-zip-jacket_ss5_p-4647909+pv-1+u-y5qi56jlp69tw8vy3m0s+v-x0bigqnogowcth6a9evt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1EoQO"
    },
    {
      "title": "Men's Colorado Rapids adidas Green 2025 Headwaters Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-green-colorado-rapids-2025-headwaters-replica-jersey_ss5_p-202652742+pv-1+u-ptyh0qov1wcafoqpngds+v-uaxfbkk8w1ew9dihostv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xL5xXk"
    },
    {
      "title": "Men's Colorado Rapids Fanatics Cream Tempo Corduroy Snapback Hat",
      "price": "$31.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-fanatics-cream-colorado-rapids-tempo-corduroy-snapback-hat_ss5_p-201747607+pv-1+u-rmsne923xvq3p2yl6tqm+v-uo6cbdmvwpzitf07hdps.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/POVLY6"
    },
    {
      "title": "Men's Colorado Rapids New Era Burgundy Jersey Hook Cuff Knit Hat with Pom",
      "price": "$27.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-new-era-burgundy-colorado-rapids-jersey-hook-cuff-knit-hat-with-pom_ss5_p-201155097+pv-1+u-aewpelxui7xkuhbvcatx+v-o7xxvm1hacbefp4ck0nd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/POVLY6"
    },
    {
      "title": "Men's Colorado Rapids New Era White 2025 Jersey Hook 9SEVENTY Stretch-Snap Hat",
      "price": "$39.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-new-era-white-colorado-rapids-2025-jersey-hook-9seventy-stretch-snap-hat_ss5_p-202216444+pv-1+u-jzfuuw75abzqfn198mmx+v-mlubqzhudu0vpmhldcy3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmnPo5"
    },
    {
      "title": "Colorado Rapids Green 2025 Jersey Hook Scarf",
      "price": "$34.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/green-colorado-rapids-2025-jersey-hook-scarf_ss5_p-202840853+u-ktphmulphbhshosnakhz+v-xmk84kywglhgdqwgntqb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnyWe9"
    },
    {
      "title": "Men's Colorado Rapids Fanatics Burgundy Elevated Speed Flex Hat",
      "price": "$19.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-fanatics-burgundy-colorado-rapids-elevated-speed-flex-hat_pi2995000_altimages_ff_2995608alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEenGX"
    },
    {
      "title": "Men's Colorado Rapids adidas Green 2025 Headwaters Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-green-colorado-rapids-2025-headwaters-authentic-jersey_ss5_p-202652660+pv-1+u-ucua6armdxjdpddyhexs+v-oik0ev53j5ndfq03cdfx.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeyE2n"
    }
  ];

  const squad = {
    goalkeepers: ["Zack Steffen", "Mark-Anthony Kaye"],
    defenders: ["Keegan Rosenberry", "Andreas Maxsø", "Moïse Bombito", "Sam Vines"],
    midfielders: ["Cole Bassett", "Oliver Larraz", "Djordje Mihailovic", "Connor Ronan"],
    attackers: ["Rafael Navarro", "Kévin Cabral", "Diego Rubio"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Colorado.png"
          alt="Colorado Rapids"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Colorado_Rapids_logo.svg/960px-Colorado_Rapids_logo.svg.png"
                  alt="Colorado Rapids Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Colorado Rapids
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mt-2 font-medium">
                  Major League Soccer • Dick's Sporting Goods Park
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Bordo boja */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-8 py-4 whitespace-nowrap">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'overview' ? 'text-[#9B1C2C]' : 'hover:text-[#9B1C2C]'}`}
            >
              Overview
              {activeTab === 'overview' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9B1C2C]"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('news')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'news' ? 'text-[#9B1C2C]' : 'hover:text-[#9B1C2C]'}`}
            >
              News
              {activeTab === 'news' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9B1C2C]"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('blog')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'blog' ? 'text-[#9B1C2C]' : 'hover:text-[#9B1C2C]'}`}
            >
              Blog
              {activeTab === 'blog' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9B1C2C]"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('squad')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'squad' ? 'text-[#9B1C2C]' : 'hover:text-[#9B1C2C]'}`}
            >
              Squad
              {activeTab === 'squad' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9B1C2C]"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('shop')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'shop' ? 'text-[#9B1C2C]' : 'hover:text-[#9B1C2C]'}`}
            >
              Shop
              {activeTab === 'shop' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9B1C2C]"></span>}
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Colorado Rapids</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Rapids</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1996</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Dick's Sporting Goods Park, Commerce City, Colorado</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>18,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Kroenke Sports Enterprises</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Chris Armas</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Strong Legacy in the Mile High City</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>The Colorado Rapids are one of the founding members of Major League Soccer. Playing at Dick's Sporting Goods Park, they are known for their passionate supporters and competitive spirit in the Western Conference.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/colorado-rapids/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-[#9B1C2C]">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-[#9B1C2C] line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#9B1C2C] line-clamp-2">{post.title}</h3>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#9B1C2C] line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Colorado Rapids Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#9B1C2C] mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#9B1C2C] mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#9B1C2C] mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#9B1C2C] mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-[#9B1C2C]" />
                <h2 className="text-3xl font-black text-[#020617]">Colorado Rapids Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Colorado Rapids by shopping through our links. 
                Every purchase helps us keep this site running and bring you better content.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-[#9B1C2C] line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-[#9B1C2C]">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-[#9B1C2C] font-bold hover:underline text-lg"
                >
                  View full Colorado Rapids store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-[#9B1C2C] to-[#7A1623] text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/aOj0NQ" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Dick's Sporting Goods Park
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
                      <h4 className="font-bold group-hover:text-[#9B1C2C] line-clamp-2">{item.title}</h4>
                      <p className="text-[#9B1C2C] font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-[#9B1C2C] font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoradoRapidsPage;