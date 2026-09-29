import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const KeeganRosenberry = () => {
  const items = [
    {
      "title": "Keegan Rosenberry Colorado Rapids Autographed Fanatics Authentic Match-Used #2 Maroon Jersey from the 2023 MLS Season",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Jerseys",
      "availability": "Almost Gone!",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/keegan-rosenberry-colorado-rapids-autographed-match-used-number-2-maroon-jersey-from-the-2023-mls-season_ss5_p-200940894+pv-1+u-i1n1ok5gi1dj45nicobd+v-zlihmtwr3alb4tbyizne.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ydaqN"
    },
    {
      "title": "Keegan Rosenberry Colorado Rapids Autographed Fanatics Authentic Match-Used #2 Maroon adidas Jersey from the 2024 MLS Season - Size S",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Jerseys",
      "availability": "Almost Gone!",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/keegan-rosenberry-colorado-rapids-autographed-match-used-number-2-maroon-adidas-jersey-from-the-2024-mls-season-size-s_ss5_p-202678557+pv-1+u-opz3emo1vmj8xw3zzxd8+v-hdcxhcsvhmohtugvflsc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOE6bD"
    },
    {
      "title": "Keegan Rosenberry Colorado Rapids Autographed Fanatics Authentic Match-Used #2 Blue Jersey from the 2023 MLS Season",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Jerseys",
      "availability": "Almost Gone!",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/keegan-rosenberry-colorado-rapids-autographed-match-used-number-2-blue-jersey-from-the-2023-mls-season_ss5_p-200940885+pv-1+u-f7vbu6h2llxbdzcmdxly+v-1bq5q0nooopbyb6pigcs.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/POVLW6"
    },
    {
      "title": "Keegan Rosenberry Colorado Rapids Autographed Fanatics Authentic Match-Used #2 Blue adidas Jersey from the 2024 MLS Season - Size S",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Jerseys",
      "availability": "Almost Gone!",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/keegan-rosenberry-colorado-rapids-autographed-match-used-number-2-blue-adidas-jersey-from-the-2024-mls-season-size-s_ss5_p-202678567+pv-1+u-abqvp3g5jiwl5ehajmiy+v-ggq1izzgetiidkh2qopu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9Lz1rQ"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Keegan Rosenberry</h1>

        {/* Keegan Rosenberry Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://burgundywave.com/wp-content/uploads/2023/09/EDP30279.jpg' 
            alt='Keegan Rosenberry' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: EM Dash Photography 
          Copyright: EM Dash Photography</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Keegan Rosenberry</li>
            <li><strong>Born:</strong> December 11, 1993 (Harrisburg, Pennsylvania, USA)</li>
            <li><strong>Position:</strong> Defender (Right Back)</li>
            <li><strong>Current Team:</strong> Colorado Rapids</li>
            <li><strong>Previous Clubs:</strong> Philadelphia Union</li>
            <li><strong>Achievements:</strong> MLS All-Star (2017), Key Contributor for Rapids Defense</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Keegan Rosenberry: The Defensive Rock</h2>
          <p>
            Keegan Rosenberry is a reliable and consistent right-back, known for his defensive solidity and ability to contribute offensively. 
            After starting his professional career with the Philadelphia Union, Rosenberry joined the Colorado Rapids, where he has become a cornerstone of their defense.
          </p>
          <p>
            With his tactical awareness and leadership, Rosenberry has earned recognition as one of the top defenders in Major League Soccer. 
            His commitment and versatility continue to inspire both teammates and fans alike. 
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Keegan Rosenberry Merchandise</h1>
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

export default KeeganRosenberry;
