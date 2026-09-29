import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AlexRing = () => {
  const items = [
    // { id: 1, title: "Austin FC Alex Ring Green Home Jersey 2023", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    // { id: 2, title: "Signed Alex Ring Austin FC Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    // { id: 3, title: "Austin FC Alex Ring Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    // { id: 4, title: "Alex Ring Signed Austin FC Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    // { id: 5, title: "Alex Ring Austin FC Green Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Alex Ring</h1>

        {/* Alex Ring Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://wallpapers.com/images/hd/austin-fc-midfielder-alexander-ring-ujchcirnu7ajtdke.jpg' 
            alt='Alex Ring' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
          {/* <p>Creator: C. Morgan Engel 
| 
Credit: Getty Images
Copyright: 2021 C. Morgan Engel</p> */}
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Alexander Ring</li>
            <li><strong>Born:</strong> April 9, 1991 (Helsinki, Finland)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Current Team:</strong> Austin FC</li>
            <li><strong>Previous Clubs:</strong> HJK Helsinki, Borussia Mönchengladbach, 1. FC Kaiserslautern, New York City FC</li>
            <li><strong>Achievements:</strong> Finnish International, 200+ MLS appearances</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Alex Ring</h2>
          <p>
            Alex Ring is a highly experienced midfielder known for his tactical intelligence, defensive contributions, and leadership on the field. Starting his professional career in Finland, he gained experience in European leagues before making his mark in Major League Soccer.
          </p>
          <p>
            Joining Austin FC in 2021, Ring quickly became an integral part of the team, serving as captain during his tenure. His consistency and dedication have earned him recognition as one of the most reliable players in the league.
          </p>
        </div>

        {/* Shop Section */}
        {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Alex Ring's Merchandise</h1> */}
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
                  Buy on Amazon <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlexRing;
