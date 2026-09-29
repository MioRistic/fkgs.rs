'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const CFMontrealPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Samuel Piette', 
      image: 'https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/11/Canada-Mens-Soccer-Team-Player-Samuel-Piette-in-2019.jpg', 
      slug: 'piette' 
    },
    { 
      name: 'Caden Clark', 
      image: 'https://cdn.wsn.com/filters:format(webp)/fit-in/1200x630/1727245998/cf-montreal-vs-san-jose-2024-09-28.jpg', 
      slug: 'clark' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "CF Montréal Secure Important Victory",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "Strong performance from Samuel Piette and the team in a crucial Eastern Conference match.",
      imageUrl: "https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/11/Canada-Mens-Soccer-Team-Player-Samuel-Piette-in-2019.jpg",
      slug: "cf-montreal-victory",
    },
  ];

  // TAČNO ONO ŠTO SI TI DAO - samo ovi itemi
  const shopItems = [
    {
      "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
      "price": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-custom-jersey_ss5_p-202708336+pv-1+u-s47uatalgbz7yd4duina+v-1x9kpdrieokjwadlmmkx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnO2x1"
    },
    {
      "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-jersey_ss5_p-202644704+pv-1+u-8ymynd3eldg4t8tswqiz+v-kkkca8zqicf2mclezn0s.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOZ9P"
    },
    {
      "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-authentic-jersey_ss5_p-202644575+pv-1+u-wew2iiyrgi2xvxemoa4j+v-0jdpq5htjrfrgtzdrayi.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeOmnQ"
    },
    {
      "title": "Men's CF Montreal Prince Owusu adidas Blue 2025 Montréal Original Authentic Player Jersey",
      "price": "$194.99",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-prince-owusu-blue-cf-montreal-2025-montr%C3%A9al-original-authentic-player-jersey_ss5_p-202840201+pv-1+u-darh6reowie9vewonufg+v-fgygyjti3l8fihympalb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOk7LM"
    },
    {
      "title": "Youth CF Montreal adidas Blue 2025 Montréal Original Replica Jersey",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/youth-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-jersey_ss5_p-202649400+pv-1+u-f8crspuj9bcvdbdurzjh+v-1etpcqakelpqzujadnzk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2N5J"
    },
    {
      "title": "Men's CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Authentic Player Jersey",
      "price": "$194.99",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-samuel-piette-blue-cf-montreal-2025-montr%C3%A9al-original-authentic-player-jersey_ss5_p-202840193+pv-1+u-hsnye752vdgphwmi1ky7+v-tqvv6hlaj41otusjljcb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnJMy"
    },
    {
      "title": "Youth CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
      "price": "$114.99",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/youth-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-custom-jersey_ss5_p-202708444+pv-1+u-xbupo7aeefonzuyswqsn+v-ior7odj37jafvlnxjge0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1eArj"
    },
    {
      "title": "Women's CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
      "price": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/womens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-custom-jersey_ss5_p-202708385+pv-1+u-wkvjpky7njjcmwjheyax+v-tbxnhlmnviixlqkrtqca.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxA6b3"
    }
  ];

  const squad = {
    goalkeepers: ["Samuel Piette", "Zachary Brault-Guillard"], // primer - zameni po potrebi
    defenders: ["Caden Clark", "Kwadwo Opoku"],
    midfielders: ["Joel Waterman", "Victor Wanyama"],
    attackers: ["Romell Quioto", "Mason Toye"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Montreal.png"
          alt="CF Montréal"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Logo_of_CF_Montreal_2023.svg/330px-Logo_of_CF_Montreal_2023.svg.png"
                  alt="CF Montréal Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  CF Montréal
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mt-2 font-medium">
                  Major League Soccer • Stade Saputo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-8 py-4 whitespace-nowrap">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'overview' ? 'text-blue-400' : 'hover:text-blue-400'}`}
            >
              Overview
              {activeTab === 'overview' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('news')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'news' ? 'text-blue-400' : 'hover:text-blue-400'}`}
            >
              News
              {activeTab === 'news' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('blog')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'blog' ? 'text-blue-400' : 'hover:text-blue-400'}`}
            >
              Blog
              {activeTab === 'blog' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('squad')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'squad' ? 'text-blue-400' : 'hover:text-blue-400'}`}
            >
              Squad
              {activeTab === 'squad' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('shop')} 
              className={`font-bold text-lg pb-1 transition relative ${activeTab === 'shop' ? 'text-blue-400' : 'hover:text-blue-400'}`}
            >
              Shop
              {activeTab === 'shop' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>}
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Club de Foot Montréal</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Impact</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2012</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Stade Saputo, Montreal, Quebec</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>20,801</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Joey Saputo</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Laurent Courtois</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Legacy of Passion and Pride</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>CF Montréal, previously known as the Montreal Impact, is a major force in Canadian soccer. Founded in 2012, the club has made a name for itself in Major League Soccer, combining passionate fan support with a dedication to developing top-tier talent.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/cf-montreal/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">CF Montréal Squad</h2>

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
                <h2 className="text-3xl font-black text-[#020617]">CF Montréal Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support CF Montréal by shopping through our links. 
                Every purchase helps us keep this site running and bring you better content.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {shopItems.map((item, index) => (
                  <a 
                    key={`${item.title}-${index}`} 
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
                  View full CF Montréal store →
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
              <a href="https://ticketnetwork.lusg.net/3JyGjy" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Stade Saputo
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-6 text-[#020617]">Official Shop</h3>
            <div className="space-y-6">
              {shopItems.map((item, index) => (
                <a key={`${item.title}-${index}`} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-blue-600 line-clamp-2">{item.title}</h4>
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

export default CFMontrealPage;