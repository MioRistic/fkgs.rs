import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const TimReam = () => {
  const items = [
    { 
      "id": 1, 
      "title": "Youth Charlotte FC Tim Ream adidas Black 2025 Fortress Kit Replica Player Jersey", 
      "price": "$114.99", 
      "imageURL": "https://images.footballfanatics.com/charlotte-fc/youth-adidas-tim-ream-black-charlotte-fc-2025-fortress-kit-replica-player-jersey_ss5_p-202840220+u-nwij6srdsrwlk1htkaqq+v-fqdai1wp5h9mzyhk5eyx.jpg?_hv=2&w=340", 
      "link": "https://www.mlsstore.com/en/charlotte-fc/youth-charlotte-fc-tim-ream-adidas-black-2025-fortress-kit-replica-player-jersey/t-76191565+p-57774642267336+z-8-2239919027?_ref=p-SRP:m-GRID:i-r0c0:po-0" 
    },
    { 
      "id": 2, 
      "title": "Men's Charlotte FC Tim Ream adidas Blue 2024 The Carolina Kit: Explore Authentic Player Jersey", 
      "price": "$194.99", 
      "imageURL": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-tim-ream-blue-charlotte-fc-2024-the-carolina-kit:-explore-authentic-player-jersey_ss5_p-202850463+u-ixqcyzxbbvkyabm6kmkl+v-nraa1eoxsycjckxve19i.jpg?_hv=2&w=340", 
      "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-tim-ream-adidas-blue-2024-the-carolina-kit:-explore-authentic-player-jersey/t-32759365+p-912279089477732+z-9-293746821?_ref=p-SRP:m-GRID:i-r0c1:po-1" 
    },
    { 
      "id": 3, 
      "title": "Men's Charlotte FC Tim Ream adidas Blue 2024 The Carolina Kit: Explore Replica Player Jersey", 
      "price": "$134.99", 
      "imageURL": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-tim-ream-blue-charlotte-fc-2024-the-carolina-kit:-explore-replica-player-jersey_ss5_p-202850464+u-dovlqvjulnuw61vdcr74+v-8amkx7y42h0viq9sxtzn.jpg?_hv=2&w=340", 
      "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-tim-ream-adidas-blue-2024-the-carolina-kit:-explore-replica-player-jersey/t-10425987+p-686624534999509+z-9-2089675025?_ref=p-SRP:m-GRID:i-r0c2:po-2" 
    },
    { 
      "id": 4, 
      "title": "Women's Charlotte FC Tim Ream adidas Black 2025 Fortress Kit Replica Player Jersey", 
      "price": "$134.99", 
      "imageURL": "https://images.footballfanatics.com/charlotte-fc/womens-adidas-tim-ream-black-charlotte-fc-2025-fortress-kit-replica-player-jersey_ss5_p-202840211+u-fizdt8pjti7edoncoczr+v-bjckayoxt496rrlzvqiq.jpg?_hv=2&w=340", 
      "link": "https://www.mlsstore.com/en/charlotte-fc/womens-charlotte-fc-tim-ream-adidas-black-2025-fortress-kit-replica-player-jersey/t-10647109+p-130091976066378+z-9-4260374686?_ref=p-SRP:m-GRID:i-r1c0:po-3" 
    },
    { 
      "id": 5, 
      "title": "Women's Charlotte FC Tim Ream adidas Blue 2024 The Carolina Kit: Explore Replica Player Jersey", 
      "price": "$134.99", 
      "imageURL": "https://images.footballfanatics.com/charlotte-fc/womens-adidas-tim-ream-blue-charlotte-fc-2024-the-carolina-kit:-explore-replica-player-jersey_ss5_p-202850465+pv-1+u-hy76t52wbwjv14r0ds5f+v-ceqhwx3ng1mx4fhoutz9.jpg?_hv=2&w=900", 
      "link": "https://www.mlsstore.com/en/charlotte-fc/womens-charlotte-fc-tim-ream-adidas-blue-2024-the-carolina-kit:-explore-replica-player-jersey/t-10537165+p-245591648377512+z-9-2926106907?_ref=p-SRP:m-GRID:i-r1c1:po-4" 
    }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Tim Ream</h1>

        {/* Tim Ream Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2175381685-1024x721.jpg' 
            alt='Tim Ream' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
            style={{ objectPosition: 'center 20%' }} 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Michael Pimentel/ISI Photos | Credit: Getty Images | Copyright: 2024 Michael Pimentel/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Tim Ream</li>
            <li><strong>Born:</strong> October 5, 1987 (St. Louis, Missouri, USA)</li>
            <li><strong>Position:</strong> Center-back</li>
            <li><strong>Current Team:</strong> Charlotte FC</li>
            <li><strong>Previous Clubs:</strong> Fulham FC, Bolton Wanderers, New York Red Bulls, Chicago Fire Premier</li>
            <li><strong>Achievements:</strong> USMNT Regular, English Premier League Experience</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Rise of Tim Ream</h2>
          <p>
            Tim Ream is a seasoned center-back who is known for his leadership, passing ability, and defensive consistency. He made his name at the New York Red Bulls before moving to Fulham in 2015, where he played in the Premier League for several seasons.
          </p>
          <p>
            Ream has also been an integral part of the United States Men's National Team (USMNT), with numerous appearances including playing in the 2022 World Cup. In 2024, Ream signed with Charlotte FC, bringing his vast experience to the team in the MLS.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Tim Ream Merchandise</h1>
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

export default TimReam;
