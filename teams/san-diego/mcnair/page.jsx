import React from 'react';

const PaddyMcNair = () => {
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
    // { id: 1, title: "Paddy McNair San Diego FC Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    // { id: 2, title: "Signed Paddy McNair Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    // { id: 3, title: "Paddy McNair Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    // { id: 4, title: "San Diego FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    // { id: 5, title: "Paddy McNair Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Paddy McNair</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.rangersnews.uk/uploads/24/2024/05/GettyImages-2137821648-1140x793.jpg' 
            alt='Paddy McNair' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Visionhaus 
| 
Credit: Visionhaus/Getty Images
Copyright: 2024 Visionhaus</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 27, 1995 (Ballyclare, Northern Ireland)</li>
            <li><strong>Position:</strong> Defender</li>
            <li><strong>Height:</strong> 6 ft 2 in (1.88 m)</li>
            <li><strong>Current Team:</strong> San Diego FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Manchester United (2014–2016): 24 appearances, 0 goals</li>
                <li>Sunderland (2016–2018): 25 appearances, 5 goals</li>
                <li>Middlesbrough (2018–2024): 198 appearances, 14 goals</li>
                <li>San Diego FC (2024–present): 0 appearances, 0 goals</li>
                <li>West Bromwich Albion (2024–loan): 2 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Paddy McNair</h2>
          <p>
            Paddy McNair is a talented Northern Irish defender known for his versatility and ability to play in multiple defensive positions. He started his career at Manchester United, later moving to Sunderland and Middlesbrough, where he earned a reputation as a solid and reliable player. McNair has also been a regular member of the Northern Ireland national team, making 73 appearances and contributing 7 goals.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Paddy McNair Merchandise</h1>
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

export default PaddyMcNair;
