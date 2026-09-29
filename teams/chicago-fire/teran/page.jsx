import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CarlosTeran = () => {
  const items = [
    { id: 1, title: "Carlos Teran Chicago Fire Autographed Fanatics Authentic Match-Used #4 White Jersey from the 2023 MLS Season", imageUrl: 'https://images.footballfanatics.com/chicago-fire/carlos-teran-chicago-fire-autographed-fanatics-authentic-match-used-number-4-white-jersey-from-the-2023-mls-season_ss5_p-201055427+u-sfaihmeoednm5xuubvak+v-geblg8adzxzzonqtbc3k.jpg?_hv=2&w=400', link: 'https://www.example.com/product/1', price: '$299.99' },
    // { id: 2, title: "Signed Carlos Teran Chicago Fire Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    // { id: 3, title: "Chicago Fire Carlos Teran Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    // { id: 4, title: "Carlos Teran Signed Chicago Fire Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    // { id: 5, title: "Carlos Teran Chicago Fire Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Carlos Teran</h1>

        {/* Carlos Teran Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://caracoltv.brightspotcdn.com/dims4/default/0358532/2147483647/strip/false/crop/1024x681+0+0/resize/1200x798!/format/webp/quality/75/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F2c%2F44%2F5de36e4749e094e38acb5ff81555%2Fgettyimages-1359085143.jpg' 
            alt='Carlos Teran' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Jose L. Argueta/ISI Photos 
| 
Credit: Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Carlos Teran</li>
            <li><strong>Born:</strong> September 24, 2000 (Medellín, Colombia)</li>
            <li><strong>Position:</strong> Center Back</li>
            <li><strong>Current Team:</strong> Chicago Fire</li>
            <li><strong>Previous Clubs:</strong> Envigado FC</li>
            <li><strong>Achievements:</strong> Regular Starter for Chicago Fire, Known for Defensive Strength</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Journey of Carlos Teran</h2>
          <p>
            Carlos Teran is a commanding presence in the heart of defense for the Chicago Fire. A product of Colombia's Envigado FC, Teran joined the Fire in 2020 and has since become a crucial member of their backline.
          </p>
          <p>
            Renowned for his physicality, aerial ability, and composure on the ball, Teran has consistently delivered solid performances. His growth as a player has made him a fan favorite and a leader on the pitch.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Carlos Teran Merchandise</h1>
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

export default CarlosTeran;
