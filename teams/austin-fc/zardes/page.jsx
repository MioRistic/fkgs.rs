import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const GyasiZardes = () => {
  const items = [
    // { id: 1, title: "Austin FC Gyasi Zardes Green Home Jersey 2023", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    // { id: 2, title: "Signed Gyasi Zardes Austin FC Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    // { id: 3, title: "Austin FC Gyasi Zardes Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    // { id: 4, title: "Gyasi Zardes Signed Austin FC Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    // { id: 5, title: "Gyasi Zardes Austin FC Green Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Gyasi Zardes</h1>

        {/* Gyasi Zardes Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://austinmonthly.wppcdn.com/wp-content/uploads/2023/02/ATXFC_20221120_ZardesPortraits_JG108141-1246x700.jpg' 
            alt='Gyasi Zardes' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
          <p>Creator: Jacob Gonzalez 
| 
Credit: Jacob Gonzalez/Austin FC
Copyright: © 2022 Austin FC</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Gyasi Zardes</li>
            <li><strong>Born:</strong> January 2, 1992 (Hawthorne, California, USA)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Austin FC</li>
            <li><strong>Previous Clubs:</strong> LA Galaxy, Columbus Crew, Colorado Rapids</li>
            <li><strong>Achievements:</strong> MLS All-Star, 100+ MLS Goals</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Gyasi Zardes</h2>
          <p>
            Gyasi Zardes is a powerful forward known for his goal-scoring ability and physical presence on the field. A product of the LA Galaxy Academy, Zardes rose to prominence in Major League Soccer with his consistent performances.
          </p>
          <p>
            Over his career, Zardes has represented several MLS teams, including LA Galaxy, Columbus Crew, and Colorado Rapids. In 2023, he joined Austin FC, where he quickly became a key contributor. His 100+ goals in MLS place him among the league’s most prolific forwards.
          </p>
        </div>

        {/* Shop Section */}
        {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Gyasi Zardes Merchandise</h1> */}
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

export default GyasiZardes;
