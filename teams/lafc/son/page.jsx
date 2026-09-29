import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const HeungMinSon = () => {
  const items = [
    {
      title: "Men's LAFC Son Heung-Min Fanatics Black Name & Number T-Shirt",
      price: "$39.99",
      originalPrice: "$39.99",
      category: "Men T-Shirts",
      shipping: "Most Popular in T-Shirts",
      imageUrl: "https://images.footballfanatics.com/lafc/mens-fanatics-son-heung-min-black-lafc-name-and-number-t-shirt_ss5_p-2001773819+pv-1+u-fzvortcjbmvtcyotmisw+v-ei59irp3lbl3u4c6uwcj.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/3JxKqK"
    },
    {
      title: "Men's LAFC Son Heung-Min adidas White 2025 Secondary Authentic Player Jersey",
      price: "$194.99",
      originalPrice: "$194.99",
      category: "Men Jerseys",
      shipping: "Most Popular in LAFC",
      imageUrl: "https://images.footballfanatics.com/lafc/mens-adidas-son-heung-min-white-lafc-2025-secondary-authentic-player-jersey_ss5_p-203367505+pv-1+u-cftjtgjfwnc0zrfvpxc1+v-pbvuhcfffp7vicgyt4o8.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/N9Dxv7"
    },
    {
      title: "Men's LAFC Son Heung-Min adidas White 2025 Secondary Replica Player Jersey",
      price: "$134.99",
      originalPrice: "$134.99",
      category: "Men Jerseys",
      shipping: "Most Popular in LAFC",
      imageUrl: "https://images.footballfanatics.com/lafc/mens-adidas-son-heung-min-white-lafc-2025-secondary-replica-player-jersey_ss5_p-203367506+pv-1+u-5g8hdmn6psesv2pdnqhj+v-aiktngzmtzptdkfkbume.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/YRGAvJ"
    },
    {
      title: "Women's LAFC Son Heung-Min Fanatics Black Name & Number T-Shirt",
      price: "$39.99",
      originalPrice: "$39.99",
      category: "Women T-Shirts",
      shipping: "Most Popular in Women T-Shirts",
      imageUrl: "https://images.footballfanatics.com/lafc/womens-fanatics-son-heung-min-black-lafc-name-and-number-t-shirt_ss5_p-2001773820+pv-1+u-ysigqp62ohifb5l75aqx+v-nkdva4evk1uc0ha9l1px.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/7ar69A"
    },
    {
      title: "LAFC Son Heung-Min Black Scarf",
      price: "$39.99",
      originalPrice: "$39.99",
      category: "Accessories",
      shipping: "Most Popular in Accessories",
      imageUrl: "https://images.footballfanatics.com/lafc/son-heung-min-black-lafc-scarf_ss5_p-203396446+u-ko3hl5zxdu96sljdjw3e+v-dnfztahsylw0wqryiosr.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/xL3KjA"
    },
    {
      title: "Youth LAFC Son Heung-Min adidas White 2025 Secondary Replica Player Jersey",
      price: "$114.99",
      originalPrice: "$114.99",
      category: "Kids Jerseys",
      shipping: "Most Popular in Kids Jerseys",
      imageUrl: "https://images.footballfanatics.com/lafc/youth-adidas-son-heung-min-white-lafc-2025-secondary-replica-player-jersey_ss5_p-203367508+pv-1+u-eq679hqljqx6cpzidh8l+v-0hbi0pa2xgpcbdrjal08.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/PO9Qgz"
    },
    {
      title: "Son Heung-Min LAFC Fanatics Authentic 10.5\" x 13\" Jersey Style Number 7 Sublimated Plaque",
      price: "$29.99",
      originalPrice: "$29.99",
      category: "Home & Office",
      shipping: "Most Popular in Home & Office",
      imageUrl: "https://images.footballfanatics.com/lafc/son-heung-min-lafc-105-x-13-jersey-style-number-7-sublimated-plaque_ss5_p-203377103+u-me2yxdqt1qdypvpicwwh+v-sspnu8gkveam68jjgcu5.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/6y961K"
    },
    {
      title: "Women's LAFC Son Heung-Min adidas White 2025 Secondary Replica Player Jersey",
      price: "$134.99",
      originalPrice: "$134.99",
      category: "Women Jerseys",
      shipping: "Most Popular in LAFC",
      imageUrl: "https://images.footballfanatics.com/lafc/womens-adidas-son-heung-min-white-lafc-2025-secondary-replica-player-jersey_ss5_p-203367507+pv-1+u-45wvyvkchmft7rybbzqe+v-liicbhartqrelqxksmg1.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/4GD7A9"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Heung-Min Son</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.goal.com/images/v3/getty-2229316055/crop/MM5DGNBTHA5DCOJTGQ5G433XMU5DAORRG44Q====/GettyImages-2229316055.jpg?auto=webp&format=pjpg&width=1920&quality=60' 
            alt='Heung-Min Son' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Geoff Stellfox 
| 
Credit: Getty Images
Copyright: 2025 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Son Heung-Min</li>
            <li><strong>Date of Birth:</strong> 8 July 1992 (Chuncheon, South Korea)</li>
            <li><strong>Position:</strong> Forward / Winger</li>
            <li><strong>Height:</strong> 1.83 m (6 ft 0 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> FC Seoul, Hamburger SV</li>
            <li><strong>Senior Teams:</strong> Hamburger SV, Bayer Leverkusen, Tottenham Hotspur, Los Angeles FC</li>
            <li><strong>International Career:</strong> South Korea (120+ caps, 40+ goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Heung-Min Son: A Global Superstar</h2>
          <p>
            Son Heung-Min is one of the most iconic Asian footballers of all time, celebrated for his blistering pace, technical excellence, and clinical finishing. Having enjoyed a stellar career in the Bundesliga and Premier League, Son has now brought his star power to Major League Soccer with Los Angeles FC.
          </p>
          <p>
            As captain of the South Korean national team, Son has represented his country in multiple World Cups and Asian Cups, inspiring millions of fans across Asia and beyond. His arrival at LAFC marks one of the biggest signings in MLS history.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Heung-Min Son Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map((item, index) => (
            <div key={index} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeungMinSon;
