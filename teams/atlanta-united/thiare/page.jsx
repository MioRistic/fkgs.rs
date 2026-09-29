import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Thiare = () => {
  const items = [
    { id: 1, title: "Jamal Thiaré", imageUrl: 'https://images.footballfanatics.com/atlanta-united-fc/jamal-thiar%C3%A9-atlanta-united-fc-autographed-match-used-number-29-red-adidas-jersey-from-the-2024-mls-season-size-s_ss5_p-202678628+pv-1+u-ttqaiftqv3rlblkjsor9+v-if7ke7vmuhtihcctjrgu.jpg?_hv=2&w=900', link: 'https://mlsstore.i8h2.net/bOVg9m', price: '$299.99' },
    // { id: 2, title: "Jamal Thiaré Signed Atlanta United Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    // { id: 3, title: "Men's Jamal Thiaré 2023/24 Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/3', price: '$59.99' },
    // { id: 4, title: "Jamal Thiaré Signed Atlanta United Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    // { id: 5, title: "Jamal Thiaré Signed Atlanta United 2022/23 Home Jersey", imageUrl: 'https://example.com/jersey3.jpg', link: 'https://www.example.com/product/5', price: '$499.99' },
    // Add more items as needed
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Jamal Thiaré</h1>

        {/* Thiare Image and Bio Section */}
        <div className='mb-6'>
          <img
            src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c480357-382f-40b7-8355-34ac16169374_4092x2728.jpeg'
            alt='Jamal Thiaré'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
          />
        </div>
        <div className="mb-7 text-center text-sm text-gray-500">
          <p>Creator: Alex Slitz 
| 
Credit: Alex Slitz/Atlanta United</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Jamal Thiaré</li>
            <li><strong>Born:</strong> March 31, 1993 (Kaolack, Senegal)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Atlanta United</li>
            <li><strong>Previous Clubs:</strong> Le Havre AC, Aviron Bayonnais, AS Lyon-Duchère</li>
            <li><strong>Achievements:</strong> Key contributor to Le Havre's promotion to Ligue 1</li>
            <li><strong>International Career:</strong> Not yet capped by Senegal National Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Thiaré's Impact at Atlanta United</h2>
          <p>
            Jamal Thiaré is a dynamic forward known for his work ethic, speed, and finishing ability. Since joining Atlanta United, he has quickly become a fan favorite, contributing crucial goals and assists during the 2023 MLS season.
          </p>
          <p>
            With his journey from the French lower leagues to Major League Soccer, Thiaré serves as an inspiration to aspiring players worldwide. His performances continue to solidify his reputation as a key player for Atlanta United.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Thiaré's Merchandise</h1>
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

export default Thiare;

