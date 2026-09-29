import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const RobinLod = () => {
  const items = [
    {
      "title": "Men's Minnesota United FC Robin Lod adidas Black 2024 Starry Night Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-robin-lod-black-minnesota-united-fc-2024-starry-night-authentic-player-jersey_ss5_p-202867832+pv-1+u-grdtrkcfvsfgn1vpakpw+v-jhy0bddyeito6yaxouzh.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2NX2"
    },
    {
      "title": "Men's Minnesota United FC Robin Lod adidas Blue 2025 CONVERGENCE Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-robin-lod-blue-minnesota-united-fc-2025-convergence-authentic-player-jersey_ss5_p-202841086+pv-1+u-5nb2loa72qznuprxhyz9+v-ujhrrtiaj2avfv2kizfb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOZPo"
    },
    {
      "title": "Women's Minnesota United FC Robin Lod adidas White 2023 The Northern Lights Kit Replica Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/womens-adidas-robin-lod-white-minnesota-united-fc-2023-the-northern-lights-kit-replica-jersey_ss5_p-5350222+pv-1+u-gmqm3lorscquswotql5h+v-zomkwfqqxmroawd0cy30.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjW1o"
    },
    {
      "title": "Men's Minnesota United FC Robin Lod adidas Blue 2025 CONVERGENCE Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-robin-lod-blue-minnesota-united-fc-2025-convergence-replica-player-jersey_ss5_p-202841087+pv-1+u-jocvqgeynbieswo7fdhp+v-7rafghqkx2mnrexo3yrw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnO2XW"
    },
    {
      "title": "Men's Minnesota United FC Robin Lod adidas White 2023 The Northern Lights Kit Authentic Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-robin-lod-white-minnesota-united-fc-2023-the-northern-lights-kit-authentic-jersey_pi5350000_altimages_ff_5350230-4c096e0f5da3bce9a388alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOPmab"
    },
    {
      "title": "Youth Minnesota United FC Robin Lod adidas Blue 2025 CONVERGENCE Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/youth-adidas-robin-lod-blue-minnesota-united-fc-2025-convergence-replica-player-jersey_ss5_p-202841089+pv-1+u-ki419fhp05eng7wt0x6x+v-r4a1fvbeny6fnog4rnpb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZ65R"
    },
    {
      "title": "Robin Lod Minnesota United FC Autographed Fanatics Authentic Match-Used #17 White adidas Jersey from the 2024 MLS Season - Size M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Memorabilia",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/robin-lod-minnesota-united-fc-autographed-match-used-number-17-white-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202767540+pv-1+u-rhjw5cdkcbhn4sxibrdw+v-uxkkjdkzhk7hoins2ul5.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRby9B"
    },
    {
      "title": "Men's Minnesota United FC Robin Lod adidas White 2023 The Northern Lights Kit Replica Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-robin-lod-white-minnesota-united-fc-2023-the-northern-lights-kit-replica-jersey_ss5_p-5350218+pv-1+u-tfitpc8fxiuhlhxbiz7e+v-olnjthvrtzydcgt8iqrr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrNkR"
    },
    {
      "title": "Women's Minnesota United FC Robin Lod adidas Blue 2025 CONVERGENCE Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-robin-lod-white-minnesota-united-fc-2023-the-northern-lights-kit-replica-jersey_ss5_p-5350218+pv-1+u-tfitpc8fxiuhlhxbiz7e+v-olnjthvrtzydcgt8iqrr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrNkR"
    },
    {
      "title": "Minnesota United FC Robin Lod Fanatics Authentic 10.5\" x 13\" Sublimated Player Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Plaques & Prints",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/womens-adidas-robin-lod-blue-minnesota-united-fc-2025-convergence-replica-player-jersey_ss5_p-202841088+pv-1+u-crptg41w0hupibru01ed+v-siznsvelhv6bqzafyoxx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9o03"
    },
    {
      "title": "Minnesota United FC Robin Lod Fanatics Authentic 10.5\" x 13\" Sublimated Player Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Plaques & Prints",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/robin-lod-minnesota-united-fc-105-x-13-sublimated-player-plaque_pi4163000_ff_4163998-09ef3b99c34062d41c9a_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raL2Q5"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Robin Lod</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.sportti.com/wp-content/uploads/2024/02/robin_lod_2023_minnesota.jpg' 
            alt='Robin Lod' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Jeremy Olson/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Jeremy Olson/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Robin Lod</li>
            <li><strong>Date of Birth:</strong> 17 April 1993 (Helsinki, Finland)</li>
            <li><strong>Position:</strong> Midfielder, Winger</li>
            <li><strong>Height:</strong> 1.80 m (5 ft 11 in)</li>
            <li><strong>Current Team:</strong> Minnesota United</li>
            <li><strong>Youth Teams:</strong> Suurmetsän Urheilijat, HJK</li>
            <li><strong>Senior Teams:</strong> Klubi 04, HJK, VPS (loan), Panathinaikos, Sporting Gijón, Minnesota United</li>
            <li><strong>International Career:</strong> Finland U18, U21, Senior Finland National Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Robin Lod: A Key Player for Club and Country</h2>
          <p>
            Robin Lod is a versatile Finnish midfielder and winger who has been an integral part of Minnesota United since joining in 2019. Known for his creativity and technical skills, Lod has contributed significantly with goals and assists for his club.
          </p>
          <p>
            His international career highlights include 74 caps for Finland, showcasing his importance in the national team setup. From his early days at HJK to his time in Greece and Spain, Lod has consistently demonstrated his ability to perform at the highest levels.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Robin Lod Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
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

export default RobinLod;
