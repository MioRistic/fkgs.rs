import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Williams = () => {
  const items = [
    // { id: 1, title: "Atlanta United Derrick Williams 2023 Home Jersey", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$89.99' },
    // { id: 2, title: "Derrick Williams Signed Atlanta United Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    // { id: 3, title: "Men's Derrick Williams Training Jersey 2023", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/3', price: '$59.99' },
    // { id: 4, title: "Derrick Williams Signed Atlanta United Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    // { id: 5, title: "Derrick Williams Signed Atlanta United 2022 Jersey", imageUrl: 'https://example.com/jersey3.jpg', link: 'https://www.example.com/product/5', price: '$499.99' },
    // // Add more items as needed
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Derrick Williams</h1>

        {/* Williams Image and Bio Section */}
        <div className='mb-6'>
          <img
            src='https://thepeachreview.com/wp-content/uploads/2024/11/Derrick-Williams_2-ATLUTD.jpg'
            alt='Derrick Williams'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
          />
        </div>
        <div className="mb-7 text-center text-sm text-gray-500">
          <p>Creator: Brandon Magnus 
| 
Credit: Brandon Magnus/Atlanta United
Copyright: © 2024 Atlanta United</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Derrick Williams</li>
            <li><strong>Born:</strong> January 17, 1993 (Hamburg, Germany)</li>
            <li><strong>Position:</strong> Defender</li>
            <li><strong>Current Team:</strong> Atlanta United</li>
            <li><strong>Previous Clubs:</strong> D.C. United, LA Galaxy, Blackburn Rovers, Bristol City, Aston Villa</li>
            <li><strong>Achievements:</strong> Represented Republic of Ireland at international level</li>
            <li><strong>International Career:</strong> Republic of Ireland National Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Williams' Journey to MLS</h2>
          <p>
            Derrick Williams is a versatile defender known for his strong tackling, aerial ability, and leadership at the back. With experience in European football and a solid career in the English Championship, he transitioned to MLS to bring stability to Atlanta United's defense.
          </p>
          <p>
            His international career with the Republic of Ireland adds a layer of experience to his game, making him a valuable asset for both club and country.
          </p>
        </div>

        {/* Shop Section */}
        {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Williams' Merchandise</h1> */}
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img src={item.imageUrl} alt={item.title} className='object-contain w-full h-full group-hover:scale-105 transition duration-300' />
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                <p className='text-lg font-semibold'>{item.price}</p>
                <a href={item.link} target='_blank' rel='noopener noreferrer' className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2'>
                  Buy on MLS Store <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Williams;
