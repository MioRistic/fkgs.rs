import React from 'react';

const KamalMiller = () => {
  const items = [
    {
      "title": "Kamal Miller Portland Timbers Autographed Fanatics Authentic Match-Used #4 Tan adidas Jersey from the 2024 MLS Season - Size L",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Jerseys",
      "shipping": "",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/kamal-miller-portland-timbers-autographed-match-used-number-4-tan-adidas-jersey-from-the-2024-mls-season-size-l_ss5_p-202767541+pv-1+u-emhkynidzeqrgmeuwcp7+v-z0fnmktw894xmpyqghcp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjJ2e"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Kamal Anthony Miller</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OBTzPwXJxDw2RoBTT0Dar4Hkhlwac4hafA&s' 
            alt='Kamal Miller' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Matthew Ashton - AMA 
| 
Credit: Getty Images
Copyright: 2022 AMA Sports Photo Agencys</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> May 16, 1997 (Scarborough, Ontario, Canada)</li>
            <li><strong>Position:</strong> Centre-back</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> Portland Timbers</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Vaughan Azzurri (2014–2015): 0 appearances, 0 goals</li>
                <li>K-W United (2016–2017): 23 appearances, 2 goals</li>
                <li>Reading United (2018): 9 appearances, 0 goals</li>
                <li>Orlando City (2019–2020): 28 appearances, 0 goals</li>
                <li>CF Montréal (2021–2023): 60 appearances, 3 goals</li>
                <li>Inter Miami (2023): 22 appearances, 0 goals</li>
                <li>Portland Timbers (2024–present): 23 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Kamal Anthony Miller</h2>
          <p>
            Kamal Miller is a Canadian centre-back known for his leadership and defensive ability. Having risen through the ranks of various Canadian youth clubs, Miller quickly gained recognition at CF Montréal, where he became a mainstay in their defense. His hard work earned him a move to Inter Miami before joining Portland Timbers in 2024. Kamal is also a key player for Canada's national team, contributing with solid performances at international tournaments.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Kamal Miller Merchandise</h1>
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

export default KamalMiller;
