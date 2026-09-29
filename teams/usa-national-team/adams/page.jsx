import React from 'react';

const TylerAdams = () => {
  const items = [
    {
      "title": "Men's USMNT Tyler Adams Navy Name & Number T-Shirt",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Men's T-Shirts",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens-tyler-adams-navy-usmnt-name-and-number-t-shirt_ss5_p-201543153+pv-1+u-3gzjsjjqfsrqa8lvgqfe+v-he7doxqwlfn4lchfxojl.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1emgr"
    },
    {
      "title": "Youth USMNT Tyler Adams White Name & Number T-Shirt",
      "price": "$27.99",
      "originalPrice": "$27.99",
      "category": "Youth T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/youth-tyler-adams-white-usmnt-name-and-number-t-shirt_ss5_p-201543144+pv-1+u-6cstp3l232dzajrfwunk+v-uczpcs3olwhew9v2vzgo.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxA1BA"
    },
    {
      "title": "Youth USMNT Tyler Adams Navy Name & Number T-Shirt",
      "price": "$27.99",
      "originalPrice": "$27.99",
      "category": "Youth T-Shirts",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/usmnt/youth-tyler-adams-navy-usmnt-name-and-number-t-shirt_ss5_p-201543146+pv-1+u-oewcamyeb4wwhqctatbv+v-j1wpyyzga43ewfsehvka.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45r0b"
    },
    {
      "title": "USMNT Tyler Adams Player Scarf",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Scarves",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/tyler-adams-usmnt-player-scarf_ss5_p-201543039+u-10l7hjldqwszmqjnhgpy+v-mleqlgw3lndtcjmvh2rc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAVRP"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Tyler Adams</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.leedsunited.news/uploads/5/2022/11/GettyImages-1244973081-1024x682.jpg' 
            alt='Tyler Adams' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: PATRICK T. FALLON 
| 
Credit: AFP via Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> February 14, 1999 (Wappinger, New York, U.S.)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.75 m)</li>
            <li><strong>Current Team:</strong> AFC Bournemouth</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>New York Red Bulls (2016–2019): 59 appearances, 2 goals</li>
                <li>RB Leipzig (2019–2022): 75 appearances, 1 goal</li>
                <li>Leeds United (2022–2023): 24 appearances, 0 goals</li>
                <li>AFC Bournemouth (2023–present): 15 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Tyler Adams</h2>
          <p>
            Tyler Adams is a dynamic and hard-working midfielder known for his defensive contributions and ability to break up opposition attacks. After developing through the New York Red Bulls academy, Adams made his mark in Europe with RB Leipzig, before continuing his career in the Premier League with Leeds United and now AFC Bournemouth. A crucial part of the U.S. Men's National Team, Adams has been an important player at both club and international levels.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Tyler Adams Merchandise</h1>
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

export default TylerAdams;
