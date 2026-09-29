import React from 'react';

const MarcusIngvartsen = () => {
  const items = [
    {
      "title": "Men's San Diego FC adidas Navy 2025 State of Flow Authentic Jersey",
      "price": "$159.99",
      "originalPrice": "$159.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-navy-san-diego-fc-2025-state-of-flow-authentic-jersey_ss5_p-202580390+pv-1+u-cmpkub21hbmne9slf8ax+v-lbbeda6jzxqts476jhvk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQYq5"
    },
    {
      "title": "Men's San Diego FC adidas Navy 2025 State of Flow Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-navy-san-diego-fc-2025-state-of-flow-replica-jersey_ss5_p-202580623+pv-1+u-ngpxat06s8dcwvbd5xk4+v-6tztuqy9kkmave7t3ps8.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmYPL"
    }
    // { id: 1, title: "Marcus Ingvartsen San Diego FC Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    // { id: 2, title: "Signed Marcus Ingvartsen Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    // { id: 3, title: "Marcus Ingvartsen Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    // { id: 4, title: "San Diego FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    // { id: 5, title: "Marcus Ingvartsen Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Marcus Ingvartsen</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/marcus_ingvartsen.jpg' 
            alt='Marcus Ingvartsen' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team San Diego FC | Copyright: 2025 Team San Diego FC</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> January 4, 1996 (Farum, Denmark)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 6 ft 1 in (1.86 m)</li>
            <li><strong>Current Team:</strong> San Diego FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Nordsjælland (2012–2017): 74 appearances, 30 goals</li>
                <li>Genk (2017–2019): 29 appearances, 5 goals</li>
                <li>Union Berlin (2019–2022): 60 appearances, 8 goals</li>
                <li>Mainz 05 (2021–2022, loan): 26 appearances, 6 goals</li>
                <li>Mainz 05 (2022–2023): 28 appearances, 10 goals</li>
                <li>Nordsjælland (2023–2024): 45 appearances, 14 goals</li>
                <li>San Diego FC (2025–present): 0 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Marcus Ingvartsen</h2>
          <p>
            Marcus Ingvartsen is a talented Danish forward known for his clinical finishing and positioning inside the box. He began his career at Nordsjælland and quickly moved to Europe, where he continued to impress with his goal-scoring abilities at Genk, Union Berlin, and Mainz 05. Ingvartsen has also represented Denmark at various youth levels and made his senior debut for the national team in 2021.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Marcus Ingvartsen Merchandise</h1>
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

export default MarcusIngvartsen;
