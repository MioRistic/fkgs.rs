import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const NemanjaRadoja = () => {
  const items = [
    {
      "title": "Nemanja Radoja Sporting Kansas City Autographed Fanatics Authentic Match-Used #6 Navy adidas Jersey from the 2024 MLS Season - Size M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/nemanja-radoja-sporting-kansas-city-autographed-match-used-number-6-navy-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202678685+pv-1+u-0nj3jo2ft9bw748dm2n3+v-48lsdmt27pdkkmutk8yv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKOmKE"
    },
    {
      "title": "Nemanja Radoja Sporting Kansas City Autographed Fanatics Authentic Match-Used #6 Blue adidas Jersey from the 2024 MLS Season - Size M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/nemanja-radoja-sporting-kansas-city-autographed-match-used-number-6-blue-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202678658+pv-1+u-7rgkykvmwzc3logvvqhu+v-cc7q3hhniyruq3zxtq8x.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6LQ6R"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Nemanja Radoja</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.shutterstock.com/image-photo/sporting-kansas-citys-nemanja-radoja-600nw-2435697827.jpg' 
            alt='Nemanja Radoja' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Photo Contributor
          Ringo Chiu </p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Nemanja Radoja</li>
            <li><strong>Date of Birth:</strong> February 6, 1993 (Novi Sad, Serbia)</li>
            <li><strong>Position:</strong> Defensive Midfielder</li>
            <li><strong>Height:</strong> 1.86 m (6 ft 1 in)</li>
            <li><strong>Current Team:</strong> Sporting Kansas City</li>
            <li><strong>Previous Teams:</strong> Vojvodina, ČSK, Cement, Celta, Levante</li>
            <li><strong>International Career:</strong> Represented Serbia at U18, U19, U21, and senior levels</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Nemanja Radoja: A Steady Defensive Presence</h2>
          <p>
            Nemanja Radoja is a Serbian defensive midfielder renowned for his composure, ball-winning ability, and tactical awareness. Beginning his career with Vojvodina, Radoja quickly rose through the ranks, earning a move to Celta Vigo in Spain, where he became a reliable figure in La Liga.
          </p>
          <p>
            Following a successful stint with Levante, Radoja joined Major League Soccer's Sporting Kansas City in 2023, solidifying their midfield with his experience and leadership. Known for his consistency and hard work, he continues to be a key player for both club and country.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Nemanja Radoja Merchandise</h1>
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

export default NemanjaRadoja;
