import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const LielAbada = () => {
  const items = [
    // { id: 1, title: "Charlotte FC Liel Abada Green Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    // { id: 2, title: "Signed Liel Abada Charlotte FC Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    // { id: 3, title: "Charlotte FC Liel Abada Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    // { id: 4, title: "Liel Abada Signed Charlotte FC Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    // { id: 5, title: "Liel Abada Charlotte FC Green Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Liel Abada</h1>

        {/* Liel Abada Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_900/v1/media/gmg/XYANLDQB2NDYPCMTNDRVN75J64.jpg?_a=DAJAUVWIZAAA' 
            alt='Liel Abada' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10
         text-center text-sm text-gray-500">
          <p>Creator: Steve Limentani/ISI Photos 
| 
Credit: Getty Images
Copyright: 2024 Steve Limentani/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Liel Abada</li>
            <li><strong>Born:</strong> October 3, 2001 (Petah Tikva, Israel)</li>
            <li><strong>Position:</strong> Winger / Forward</li>
            <li><strong>Current Team:</strong> Charlotte FC</li>
            <li><strong>Previous Clubs:</strong> Celtic FC, Maccabi Petah Tikva	</li>
            <li><strong>Achievements:</strong> Israeli Premier League Champion, Scottish Premiership Champion</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Rise of Liel Abada</h2>
          <p>
            Liel Abada is a talented winger known for his speed, technical ability, and goal-scoring prowess. He started his career at Maccabi Petah Tikva before moving to Celtic in 2021, where he became a key figure for the club in domestic and international competitions.
          </p>
          <p>
            Abada's impressive performances at Celtic earned him a move to MLS, where he joined Charlotte FC in 2024. His skill set and experience make him a valuable asset for his new team in the U.S.
          </p>
        </div>

        {/* Shop Section */}
        {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Liel Abada Merchandise</h1> */}
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

export default LielAbada;
