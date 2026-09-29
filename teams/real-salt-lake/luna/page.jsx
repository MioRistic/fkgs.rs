import React from 'react';

const DiegoLuna = () => {
  const items = [
    {
      "title": "Men's Real Salt Lake Diego Luna adidas Red 2024 Peak Utah Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-adidas-diego-luna-red-real-salt-lake-2024-peak-utah-authentic-player-jersey_ss5_p-202852961+pv-1+u-yak57vdcaycyyk3ki2dr+v-p1rlc2xzbwbngd8ijbhm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOZBd"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Diego Angel Luna</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.abc4.com/wp-content/uploads/sites/4/2024/07/GettyImages-2157934329.jpg' 
            alt='Diego Luna' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Icon Sportswire 
| 
Credit: Icon Sportswire via Getty Images
Copyright: ©Icon Sportswire (A Division of XML Team Solutions) All Rights Reserved</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> September 7, 2003 (Sunnyvale, California, United States)</li>
            <li><strong>Position:</strong> Attacking midfielder, Winger</li>
            <li><strong>Height:</strong> 5 ft 8 in (1.72 m)</li>
            <li><strong>Current Team:</strong> Real Salt Lake</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>El Paso Locomotive (2021–2022): 41 appearances, 13 goals</li>
                <li>Real Monarchs (2022): 3 appearances, 2 goals</li>
                <li>Real Salt Lake (2022–present): 67 appearances, 13 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Diego Angel Luna</h2>
          <p>
            Diego Luna is a talented attacking midfielder and winger from Sunnyvale, California, who has made a significant impact on the field for Real Salt Lake. Luna started his youth career with San Jose Earthquakes and later joined the Barcelona Residency Academy, where his skills flourished. After playing for El Paso Locomotive, he joined Real Salt Lake in 2022 and quickly became a key player. Luna has also represented the United States at various youth levels, including the U20 and U23 teams.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Diego Luna Merchandise</h1>
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

export default DiegoLuna;

