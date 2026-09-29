'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const FCCincinnatiPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Miles Robinson', 
      image: 'https://cnycentral.com/resources/media/f1b98a83-5413-4c14-9dad-1bbf564db28e-GettyImages21568536601.jpg', 
      slug: 'milesrobinson' 
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "FC Cincinnati Deliver Strong Performance",
      author: "Mio Ristić",
      date: "March 23, 2026",
      excerpt: "The Orange and Blue continue their impressive 2026 campaign with a commanding victory in the Eastern Conference.",
      imageUrl: "https://cnycentral.com/resources/media/f1b98a83-5413-4c14-9dad-1bbf564db28e-GettyImages21568536601.jpg",
      slug: "fc-cincinnati-victory",
    },
  ];

  // TAČNO ONO ŠTO SI TI DAO - bez dodavanja novih
  const shopItems = [
    {
      "title": "Men's FC Cincinnati adidas Blue 2025 Orange and Blue Legacy Kit Authentic Custom Jersey",
      "price": "$194.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-authentic-custom-jersey_ss5_p-202698413+pv-1+u-hispoux2wwhe61cs3mhq+v-nternmvivefpboc0ftgy.jpg?_hv=2&w=900",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-adidas-blue-2025-orange-and-blue-legacy-kit-authentic-custom-jersey/t-10575477+p-35330295219960+z-8-1022979804"
    },
    {
      "title": "Youth FC Cincinnati adidas Blue 2025 Orange and Blue Legacy Kit Replica Jersey",
      "price": "$79.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/youth-adidas-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-replica-jersey_ss5_p-202649401+pv-1+u-wcjr8l1brh6fclm5glgb+v-s2j3rd3ufbmceiqyutu7.jpg?_hv=2&w=900",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/youth-fc-cincinnati-adidas-blue-2025-orange-and-blue-legacy-kit-replica-jersey/t-10240911+p-029980737121521+z-9-2505727033"
    },
    {
      "title": "Men's FC Cincinnati New Era Tan Active 9TWENTY Adjustable Hat",
      "price": "$31.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-new-era-tan-fc-cincinnati-active-9twenty-adjustable-hat_ss5_p-202314661+u-fud3egjugt57v2oegung+v-ojy8o0jfqlr9ke5asbyp.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-new-era-tan-active-9twenty-adjustable-hat/t-21248788+p-130024570184798+z-9-2684062084"
    },
    {
      "title": "Men's FC Cincinnati adidas Blue 2025 Orange and Blue Legacy Kit Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-replica-jersey_ss5_p-202644705+u-wwfzmn12rc4hl0r5cxfd+v-y9f2uofudcrnyeg2fcyf.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-adidas-blue-2025-orange-and-blue-legacy-kit-replica-jersey/t-43242166+p-795524397148127+z-9-1301522098"
    },
    {
      "title": "Men's FC Cincinnati adidas Blue 2025 Orange and Blue Legacy Kit Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-authentic-jersey_ss5_p-202644578+pv-1+u-wnvypynisdq8jgwhp2i8+v-kdbzgupiulws5a92hbx4.jpg?_hv=2&w=900",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-adidas-blue-2025-orange-and-blue-legacy-kit-authentic-jersey/t-10020977+p-807768516015678+z-9-1971101910"
    },
    {
      "title": "Men's FC Cincinnati Fanatics Blue Injury Time Baseball Jersey",
      "price": "$59.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-fanatics-blue-fc-cincinnati-injury-time-baseball-jersey_ss5_p-201747332+u-kbxgkpqifv9yogj3ikvb+v-o7blruaofkmf5kwlogao.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-fanatics-blue-injury-time-baseball-jersey/t-21790933+p-462256183774449+z-9-2713659459"
    },
    {
      "title": "Men's FC Cincinnati Black Forever Lucky T-Shirt",
      "price": "$17.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-black-fc-cincinnati-forever-lucky-t-shirt_ss5_p-3397817+u-sdnztxa7nqjbrpgtvgz5+v-f8xwblaoxnclip2xulmc.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-black-forever-lucky-t-shirt/t-21351011+p-0369092931679+z-9-2393266464"
    },
    {
      "title": "Men's FC Cincinnati Heather Gray Victory Arch Pullover Hoodie",
      "price": "$34.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-heather-gray-fc-cincinnati-victory-arch-pullover-hoodie_pi3324000_ff_3324931-78d06a219c7aeffaec10c_full.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/AP35Y1"
    },
    {
      "title": "Men's FC Cincinnati Fanatics Blue Stoppage Time Striker T-Shirt",
      "price": "$54.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-fanatics-blue-fc-cincinnati-stoppage-time-striker-t-shirt_ss5_p-201747279+u-ue3irlteotcer0kwpwed+v-twa2gmcwulq4j1mt302t.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-fanatics-blue-stoppage-time-striker-t-shirt/t-21790933+p-462256183774449+z-9-2713659459"
    },
    {
      "title": "Men's FC Cincinnati 500 Level Royal All For Cincy State Pullover Hoodie",
      "price": "$69.99",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-500-level-royal-fc-cincinnati-all-for-cincy-state-pullover-hoodie_ss5_p-201463011+u-j8ridljlzmrfz77e9vzi+v-ipyiepn54m2tsmqfyfoy.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-500-level-royal-all-for-cincy-state-pullover-hoodie/t-10353299+p-462212376270144+z-9-3862548247"
    }
  ];

  const squad = {
    goalkeepers: ["Roman Celentano", "Alec Kann"],
    defenders: ["Miles Robinson", "Chidozie Awaziem", "Tyler Blackett"],
    midfielders: ["Luciano Acosta", "Obinna Nwobodo", "Pavel Bucha"],
    attackers: ["Yuya Kubo", "Sergio Santos", "Corey Baird"],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Cincinnati.png"
          alt="FC Cincinnati"
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/FC_Cincinnati_primary_logo_2018.svg/960px-FC_Cincinnati_primary_logo_2018.svg.png"
                  alt="FC Cincinnati Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  FC Cincinnati
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • TQL Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - FC Cincinnati boje (plava + narandžasta) */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-orange-400' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>FC Cincinnati</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Orange and Blue</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2015</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>TQL Stadium, Cincinnati, Ohio</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>26,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Carl H. Lindner III</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Pat Noonan</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Rising Force in MLS</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>FC Cincinnati has quickly become one of the most exciting teams in Major League Soccer. With passionate fans and a strong squad, they continue to challenge for top spots in the Eastern Conference.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/fc-cincinnati/${player.slug}`} className="group">
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">FC Cincinnati Squad</h2>

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
                <h2 className="text-3xl font-black text-[#020617]">FC Cincinnati Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support FC Cincinnati by shopping through our links. 
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
                  View full FC Cincinnati store →
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
              <a href="https://ticketnetwork.lusg.net/LKOQ0O" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near TQL Stadium
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

export default FCCincinnatiPage;