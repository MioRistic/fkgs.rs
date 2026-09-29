import React from 'react';

const MonsefBakrar = () => {
  const items = [
    {
      "title": "Men's New York City FC adidas Orange 2022 The Volt Kit Replica Custom Jersey",
      "price": "$119.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-adidas-orange-new-york-city-fc-2022-the-volt-kit-replica-custom-jersey_pi4701000_altimages_ff_4701893-59ca9dc00b2d384098c4alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/K0O21N"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Monsef Bakrar</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.telegram.hr/wp-content/uploads/2024/12/monsef-bakrar.jpg' 
            alt='Monsef Bakrar' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Adam Hunger 
| 
Credit: AP
Copyright: Copyright 2024 The Associated Press. All rights reserved.</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> January 13, 2001 (Sétif, Algeria)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> New York City FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>ES Sétif (2020–2022): 38 appearances, 9 goals</li>
                <li>Istra 1961 (2022–2023): 31 appearances, 8 goals</li>
                <li>New York City FC (2023–): 32 appearances, 7 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Algeria U23 (2022): 4 appearances, 1 goal</li>
                <li>Algeria (2024–): 2 appearances</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Monsef Bakrar</h2>
          <p>
            Monsef Bakrar is a skilled forward from Algeria, known for his physical presence and clinical finishing in front of goal. After starting his career at ES Sétif in his home country, he made a successful move to Europe, playing for Istra 1961 in Croatia. His performances earned him a transfer to New York City FC, where he continues to showcase his talent in Major League Soccer.
          </p>
          <p>
            Representing Algeria at the youth and senior levels, Bakrar is a promising player with the potential to become a key figure for both club and country in the coming years.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Monsef Bakrar Merchandise</h1>
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

export default MonsefBakrar;
