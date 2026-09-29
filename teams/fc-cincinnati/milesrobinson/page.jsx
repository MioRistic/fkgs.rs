import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const MilesRobinson = () => {
  const items = [
    {
      "title": "Men's FC Cincinnati Miles Robinson adidas Blue 2025 Orange and Blue Legacy Kit Replica Player Jersey",
      "price": "$134.99",
      // "originalPrice": "$194.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-miles-robinson-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-replica-player-jersey_ss5_p-202840876+pv-1+u-3q7n3nsnu983qb91cutb+v-mn0onaojb8h3lbrk0t6g.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXEmrA"
    },
    // {
    //   "title": "Luciano Acosta FC Cincinnati Fanatics Authentic 10.5 x 13 River Jersey Style Number 10 Sublimated Plaque",
    //   "price": "$29.99",
    //   "originalPrice": "$29.99",
    //   "category": "Kids Jerseys",
    //   "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/luciano-acosta-fc-cincinnati-105-x-13-river-jersey-style-number-10-sublimated-plaque_ss5_p-200581328+u-d6vsazysushcnngpug7o+v-xtuv2c7eprhglu1xv8la.jpg?_hv=2&w=400",
    //   "link": "https://mlsstore.i8h2.net/RGneQa"
    // },
    // {
    //   "title": "Men's FC Cincinnati Luciano Acosta adidas White 2024 The Canvas Kit Authentic Player Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$31.99",
    //   "category": "Hats",
    //   "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-luciano-acosta-white-fc-cincinnati-2024-the-canvas-kit-authentic-player-jersey_ss5_p-201205504+pv-1+u-ybpx25vwfmpufdkjmash+v-nkc0aqflclualvjtc72y.jpg?_hv=2&w=900",
    //   "link": "https://mlsstore.i8h2.net/gO63xO"
    // },
    
    //   
    
  ] ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Miles Robinson</h1>

        {/* Miles Robinson Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cnycentral.com/resources/media/f1b98a83-5413-4c14-9dad-1bbf564db28e-GettyImages21568536601.jpg' 
            alt='Miles Robinson' 
            style={{ objectPosition: 'center 40%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Tim Nwachukwu 
| 
Credit: Getty Images
Copyright: 2024 Getty Images
</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Miles Gordon Robinson</li>
            <li><strong>Born:</strong> March 14, 1997 (Arlington, Massachusetts, USA)</li>
            <li><strong>Position:</strong> Defender</li>
            <li><strong>Current Team:</strong> FC Cincinnati</li>
            <li><strong>Achievements:</strong> Gold Cup Champion (2021), MLS All-Star (2021, 2022)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Defensive Powerhouse</h2>
          <p>
            Miles Robinson is one of the most talented defenders in Major League Soccer, known for his speed, strength, and ability to read the game. 
            A key figure for both FC Cincinnati and the U.S. Men's National Team, Robinson continues to impress with his consistent performances.
          </p>
          <p>
            Since joining FC Cincinnati, Robinson has been instrumental in stabilizing the backline, helping the team secure critical victories in the 2023 season. 
            He is celebrated for his work ethic and commitment both on and off the field.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Miles Robinson Merchandise</h1>
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

export default MilesRobinson;
