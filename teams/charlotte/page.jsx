'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const CharlotteFCPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { name: 'Ashley Westwood', image: 'https://www.qcnews.com/wp-content/uploads/sites/109/2024/05/GettyImages-2152987244.jpg', slug: 'westwood' },
    { name: 'Tim Ream', image: 'https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2175381685-1024x721.jpg', slug: 'ream' },
    { name: 'Liel Abada', image: 'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_900/v1/media/gmg/XYANLDQB2NDYPCMTNDRVN75J64.jpg?_a=DAJAUVWIZAAA', slug: 'abada' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Charlotte FC Deliver Dominant Performance",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "The Crown continue their strong start to the 2026 season with a convincing victory.",
      imageUrl: "https://www.qcnews.com/wp-content/uploads/sites/109/2024/05/GettyImages-2152987244.jpg",
      slug: "charlotte-fc-victory",
    },
  ];

  const shopItems = [
    { 
      id: 1, 
      title: "Men's Charlotte FC adidas Black 2025 Fortress Kit Authentic Jersey", 
      price: "$149.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-authentic-jersey_ss5_p-202652657+u-mdhtpdooxasksaeiwgao+v-ritrwloqfmd2i3vwm2la.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-black-2025-fortress-kit-authentic-jersey/t-87206043+p-80778017490811+z-8-3047227005"
    },
    { 
      id: 2, 
      title: "Men's Charlotte FC adidas Black 2025 Fortress Kit Authentic Custom Jersey", 
      price: "$194.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-authentic-custom-jersey_ss5_p-202709828+u-86hwyp7swiq49ezamamx+v-0bpamjdnovafflrwqzlm.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-black-2025-fortress-kit-authentic-custom-jersey/t-65759376+p-35882429775515+z-8-155414585"
    },
    { 
      id: 3, 
      title: "Men's Charlotte FC adidas Black 2025 Fortress Kit Replica Jersey", 
      price: "$99.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-replica-jersey_ss5_p-202652740+u-wpg5uilgbpvf2s8yswya+v-xjb3pv6gppcp9b0tjc1g.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-black-2025-fortress-kit-replica-jersey/t-10860498+p-029924402768820+z-9-3324667214"
    },
    { 
      id: 4, 
      title: "Youth Charlotte FC adidas Black 2025 Fortress Kit Replica Jersey", 
      price: "$79.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/youth-adidas-black-charlotte-fc-2025-fortress-kit-replica-jersey_ss5_p-202658578+u-c05d7ykxqpnimnv7akz7+v-kxdskooed4cvzvda4plo.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/youth-charlotte-fc-adidas-black-2025-fortress-kit-replica-jersey/t-10196098+p-914479398397684+z-9-2132074831"
    },
    { 
      id: 5, 
      title: "Women's Charlotte FC adidas Black 2025 Fortress Kit Replica Jersey", 
      price: "$99.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/womens-adidas-black-charlotte-fc-2025-fortress-kit-replica-jersey_ss5_p-202658088+u-bcwvujm0inq11jgtruhh+v-6mo5uw9ehgev3xgqgl6y.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/womens-charlotte-fc-adidas-black-2025-fortress-kit-replica-jersey/t-98759343+p-79997939167772+z-8-2119229679"
    },
    { 
      id: 6, 
      title: "Men's Charlotte FC adidas Black 2025 Fortress Kit Replica Custom Jersey", 
      price: "$134.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-replica-custom-jersey_ss5_p-202709903+u-bgl3nmz2ktlgrzhmhhtk+v-29dnpetxdezg2jck0lsk.jpg?_hv=2&w=340", 
      link: "https://mlsstore.i8h2.net/e1ENAr"
    },
    { 
      id: 7, 
      title: "Youth Charlotte FC adidas Black 2025 Fortress Kit Replica Custom Jersey", 
      price: "$114.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/youth-adidas-black-charlotte-fc-2025-fortress-kit-replica-custom-jersey_ss5_p-202709968+u-5oj7y5zeilmsizq7scbb+v-kzhoeqljldewvqpkev5n.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/youth-charlotte-fc-adidas-black-2025-fortress-kit-replica-custom-jersey/t-10318287+p-132279636610096+z-9-621955559"
    },
    { 
      id: 8, 
      title: "Men's Charlotte FC adidas Purple 2023 Crown Jewel Kit Authentic Jersey", 
      price: "$39.99 (discounted)", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-purple-charlotte-fc-2023-crown-jewel-kit-authentic-jersey_ss5_p-5273520+u-1zw3vezsdqaqf9cz9ue1+v-chcn2dvoiyendgxfanvn.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-purple-2023-crown-jewel-kit-authentic-jersey/t-43089332+p-9491295894914+z-9-4109628864"
    },
    { 
      id: 9, 
      title: "Men's Charlotte FC adidas Blue 2024 The Carolina Kit Replica Jersey", 
      price: "$99.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-blue-charlotte-fc-2024-the-carolina-kit:-explore-replica-jersey_ss5_p-201093752+u-b9iharjvpkoqeedruy5x+v-ejdut6i2ohtdmcxaeh0y.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-blue-2024-the-carolina-kit:-explore-replica-jersey/t-32192632+p-807778990969064+z-9-2224775332"
    },
    { 
      id: 10, 
      title: "Women's Charlotte FC adidas Purple 2023 Crown Jewel Kit Replica Jersey", 
      price: "$19.99 (discounted)", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-purple-charlotte-fc-2023-crown-jewel-kit-replica-jersey_pi5273000_ff_5273759-faade72942cb29300cd6_full.jpg?_hv=2&w=340", 
      link: "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-purple-2023-crown-jewel-kit-replica-jersey/t-10311532+p-5068968196160+z-9-1350760317"
    }
  ];

  const squad = {
    goalkeepers: ["Kristijan Kahlina", "David Bingham"],
    defenders: ["Adilson Malanda", "Andrew Privett", "Tim Ream", "Jaylin White", "Nick Scardina"],
    midfielders: ["Ashley Westwood", "Brandt Bronico", "Pep Biel", "Junior Urso", "Idan Toklomati"],
    attackers: ["Karol Świderski", "Liel Abada", "Patrick Agyemang", "Tyger Smalls"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/charlotte.png"
          alt="Charlotte FC"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Charlotte_FC_logo.svg/330px-Charlotte_FC_logo.svg.png"
                  alt="Charlotte FC Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Charlotte FC
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mt-2 font-medium">
                  Major League Soccer • Bank of America Stadium
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Charlotte Football Club</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Crown</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>December 17, 2019</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Bank of America Stadium, Charlotte, North Carolina</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>74,867</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>David Tepper</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Dean Smith</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Rising Star in MLS</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Charlotte FC is a relatively new football club, having joined MLS in 2022. The team quickly gained a passionate fanbase and is known for its vibrant atmosphere during matches.</p>
                </div>
              </div>

              {/* Trending Players */}
              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/charlotte/${player.slug}`} className="group">
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

              {/* Latest News */}
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Charlotte FC Squad</h2>

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
                <h2 className="text-3xl font-black text-[#020617]">Charlotte FC Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Charlotte FC by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-blue-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex justify-between items-end">
                        <p className="text-2xl font-bold text-blue-600">{item.price}</p>
                      </div>
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
                  View full →
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
              <a 
                href="https://ticketnetwork.lusg.net/GKOvKB" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-4 rounded-xl font-bold transition text-center justify-center text-white"
              >
                <FaTicketAlt /> Buy Tickets
              </a>
              <a 
                href="https://www.booking.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center"
              >
                <FaBed /> Hotels Near Bank of America Stadium
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
                      <h4 className="font-bold group-hover:text-blue-600 line-clamp-2">{item.title}</h4>
                      <p className="text-blue-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.com" target="_blank" className="text-blue-600 font-bold hover:underline">View Full Shop →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharlotteFCPage;