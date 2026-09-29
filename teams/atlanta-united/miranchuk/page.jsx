import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const Miranchuk = () => {
  const items = [
    { id: 1, title: "Men's Atlanta United FC Aleksei Miranchuk adidas Light Blue 2024 The Resurgens Kit Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-aleksei-miranchuk-light-blue-atlanta-united-fc-2024-the-resurgens-kit-authentic-player-jersey_ss5_p-202850417+u-nhgzmyf0aff3ivdtexwf+v-d53hzgd8ke0ivscu7xc8.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/gOGQ70', price: '$194.99' },
    { id: 2, title: "Youth Atlanta United FC Aleksei Miranchuk adidas Black 2025 The Connector Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/youth-adidas-aleksei-miranchuk-black-atlanta-united-fc-2025-the-connector-replica-player-jersey_ss5_p-202840161+u-txujvqhztws3kv2so62e+v-6xvuudiwlexiwf8tyhqr.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/BnPY94', price: '$114.99' },
    { id: 3, title: "Men's Atlanta United FC Aleksei Miranchuk adidas Black 2025 The Connector Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-aleksei-miranchuk-black-atlanta-united-fc-2025-the-connector-replica-player-jersey_ss5_p-202840159+u-1xqlnek5hqkyfqmadmei+v-gbdiidhpnhqgmiwildcu.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/WyNPzn', price: '$134.99' },
    { id: 4, title: "Men's Atlanta United FC Aleksei Miranchuk adidas Light Blue 2024 The Resurgens Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-aleksei-miranchuk-light-blue-atlanta-united-fc-2024-the-resurgens-kit-replica-player-jersey_ss5_p-202858966+u-af8got9yvvhfv1kbgst9+v-h3iuw2hv6xc75cayingm.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/nXyeva', price: '$134.99' },
    { id: 5, title: "Men's Atlanta United FC Aleksei Miranchuk adidas Black 2025 The Connector Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-aleksei-miranchuk-black-atlanta-united-fc-2025-the-connector-authentic-player-jersey_ss5_p-202840158+u-u1qhrpehkecmx0xy9pcj+v-dmosn3zul37rzfkctvjg.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/RGbDdy', price: '$194.99' },
    { id: 6, title: "Men's Atlanta United FC Aleksei Miranchuk Red Authentic Stack Name & Number T-Shirt", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/mens-aleksei-miranchuk-red-atlanta-united-fc-authentic-stack-name-and-number-t-shirt_ss5_p-202772313+u-mgodjvdbtsdekj2hpohu+v-bsn2zz1ejrnki5jxklul.png?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/yqkx6y', price: '$39.99' },
    { id: 7, title: "Youth Atlanta United FC Aleksei Miranchuk adidas Light Blue 2024 The Resurgens Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/youth-adidas-aleksei-miranchuk-light-blue-atlanta-united-fc-2024-the-resurgens-kit-replica-player-jersey_ss5_p-202858970+u-ohxvkvlb2qhnjo6ginfo+v-bilajmgpwkmzn22xc7b1.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/7aMB0O', price: '$114.99' },
    { id: 8, title: "Women's Atlanta United FC Aleksei Miranchuk adidas Black 2025 The Connector Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/womens-adidas-aleksei-miranchuk-black-atlanta-united-fc-2025-the-connector-replica-player-jersey_ss5_p-202840160+u-lkuo8ey9bpz8yvlxiazs+v-4l3ndoipsp3usughy4mq.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/xLZq6O', price: '$134.99' },
    { id: 9, title: "Women's Atlanta United FC Aleksei Miranchuk adidas Light Blue 2024 The Resurgens Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/womens-adidas-aleksei-miranchuk-light-blue-atlanta-united-fc-2024-the-resurgens-kit-replica-player-jersey_ss5_p-202858968+u-hhrrjnyrpvyht29snmav+v-t0q23vfspy1fapupjsci.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/raX1NB', price: '$134.99' }
];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Aleksey Miranchuk</h1>

        {/* Miranchuk Image and Bio Section */}
        <div className='mb-6'>
          <img
            src='https://gray-wgcl-prod.gtv-cdn.com/resizer/v2/2WGWYC52NZAUTKQLETZRJDSRGU.jpg?auth=70a049cd83c40d2b50f4dd4a91edf89a30633b4a5093f1c100380a48b6a9ae13&width=1600&height=900&smart=true'
            alt='Aleksey Miranchuk'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
          />
        </div>
        <div className="mb-7 text-center text-sm text-gray-500">
          <p>Creator: Mitch Martin 
| 
Credit: Mitch Martin/Atlanta United
Copyright: © 2024 Atlanta United</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Aleksey Andreyevich Miranchuk</li>
            <li><strong>Born:</strong> October 17, 1995 (Slavyansk-na-Kubani, Russia)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Current Team:</strong> Atlanta United</li>
            <li><strong>Previous Clubs:</strong> Atalanta, Torino, Lokomotiv Moscow</li>
            <li><strong>Achievements:</strong> Russian Premier League title, Russian Cup winner, Super Cup winner</li>
            <li><strong>International Career:</strong> Russia National Team (2015 - present)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Journey of Miranchuk</h2>
          <p>
            Aleksey Miranchuk is one of the brightest talents in Russian football. Known for his creativity, vision, and technical skills, he has made a name for himself both domestically and internationally.
          </p>
          <p>
          After achieving significant success with Lokomotiv Moscow, he transitioned to Serie A, playing for Atalanta and later other clubs in the league, before moving to Atlanta United in Major League Soccer (MLS), where he continues to showcase his abilities at the highest level of football.

          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Miranchuk's Merchandise</h1>
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

export default Miranchuk;
