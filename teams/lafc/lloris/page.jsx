import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const HugoLloris = () => {
  const items = [
    {
      "title": "Men's LAFC adidas Green 2023 Replica Goalkeeper Jersey",
      "price": "$119.99",
      "originalPrice": "$119.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-green-lafc-2023-replica-goalkeeper-jersey_ss5_p-4907876+pv-1+u-kpaikvgmat3md8xj5zwx+v-uzakmmwdtkjt31k54udw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjxqQ"
    },
    {
      "title": "Men's LAFC adidas Gold 2024 Goalkeeper Jersey",
      "price": "$119.99",
      "originalPrice": "$119.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "status": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-gold-lafc-2024-goalkeeper-jersey_ss5_p-200133905+u-u7vnixbfxsvxweclzdz8+v-rcogbfjjbpaspdjps84v.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/Z6LxOW"
    },
    {
      "title": "Men's LAFC adidas Green 2023 Goalkeeper Long Sleeve Replica Jersey",
      "price": "$129.99",
      "originalPrice": "$129.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-green-lafc-2023-goalkeeper-long-sleeve-replica-jersey_ss5_p-4907850+pv-1+u-f6nvm0g81icxr38cx2hd+v-xk8lwhu0y6ubh1vfnkb7.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yxWL"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Hugo Lloris</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.thespurs.news/uploads/36/2024/02/GettyImages-2003725135-1140x760.jpg' 
            alt='Hugo Lloris' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Hugo Hadrien Dominique Lloris</li>
            <li><strong>Date of Birth:</strong> 26 December 1986 (Nice, France)</li>
            <li><strong>Position:</strong> Goalkeeper</li>
            <li><strong>Height:</strong> 1.88 m (6 ft 2 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> Cedac Cimiez, Nice</li>
            <li><strong>Senior Teams:</strong> Nice II, Nice, Lyon, Tottenham Hotspur, Los Angeles FC</li>
            <li><strong>International Career:</strong> France (145 caps, 0 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Hugo Lloris: A Goalkeeping Legend</h2>
          <p>
            Hugo Lloris is one of the most respected goalkeepers in modern football, known for his leadership, reflexes, and composure under pressure. After an illustrious career in Europe, including a decade-long spell at Tottenham Hotspur, he now plays for Los Angeles FC in Major League Soccer.
          </p>
          <p>
            As the former captain of the French national team, Lloris led France to victory in the 2018 FIFA World Cup and was a key figure in their runner-up finish in the 2022 tournament. His experience and skill continue to make him a vital player at both club and international levels.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Hugo Lloris Merchandise</h1>
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

export default HugoLloris;
