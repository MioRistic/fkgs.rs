import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Mosquera = () => {
  const items = [
    // { id: 1, title: "Atlanta United Edwin Mosquera 2023 Home Jersey", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$89.99' },
    // { id: 2, title: "Edwin Mosquera Signed Atlanta United Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    // { id: 3, title: "Men's Edwin Mosquera Training Jersey 2023", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/3', price: '$59.99' },
    // { id: 4, title: "Edwin Mosquera Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    // { id: 5, title: "Edwin Mosquera Signed Atlanta United 2022 Jersey", imageUrl: 'https://example.com/jersey3.jpg', link: 'https://www.example.com/product/5', price: '$499.99' },
    // Add more items as needed
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Edwin Mosquera</h1>

        {/* Mosquera Image and Bio Section */}
        <div className='mb-6'>
          <img
            src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5a88ffa2-c8ac-415e-814a-4a11dfde286d_2837x1897.jpeg'
            alt='Edwin Mosquera'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
          />
        </div>
        <div className="mb-7 text-center text-sm text-gray-500">
          <p>Creator: Mitch Martin 
| 
Credit: Mitch Martin/Atlanta United
Copyright: © 2024 Atlanta United</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Edwin Mosquera</li>
            <li><strong>Born:</strong> June 27, 2001 (Apartadó, Colombia)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Current Team:</strong> Atlanta United</li>
            <li><strong>Previous Clubs:</strong> Independiente Medellín, Aldosivi</li>
            <li><strong>Achievements:</strong> Breakthrough player in Colombian football</li>
            <li><strong>International Career:</strong> Colombia Youth National Teams</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Promise of Edwin Mosquera</h2>
          <p>
            Edwin Mosquera is an exciting young talent from Colombia, known for his pace, dribbling skills, and flair on the wing. Having joined Atlanta United as a part of their strategy to develop young international talent, Mosquera brings energy and creativity to the team.
          </p>
          <p>
            His performances in the Colombian league and his versatility make him one of the promising players in Major League Soccer. With his ability to beat defenders and provide key assists, Mosquera has a bright future ahead.
          </p>
        </div>

        {/* Shop Section */}
        {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Mosquera's Merchandise</h1> */}
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

export default Mosquera;
