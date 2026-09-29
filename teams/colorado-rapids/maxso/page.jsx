import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AndreasMaxso = () => {
  const items = [
    {
      "title": "Andreas Maxsø Colorado Rapids Autographed Fanatics Authentic Match-Used #5 Blue adidas Jersey from the 2024 MLS Season - Size L",
      "price": "$299.99",
      "originalPrice": "$194.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "discount": "Reduced Price",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/andreas-maxs%C3%B8-colorado-rapids-autographed-match-used-number-5-blue-adidas-jersey-from-the-2024-mls-season-size-l_ss5_p-202678804+u-bcpswxeqhaclb0eullg9+v-wc0ghsqtwfdeyzhtrrov.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/Oe4ZbA"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Andreas Maxso</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.tipsbladet.dk/wp-content/uploads/1970/01/2XDKEGR-scaled.jpg' 
            alt='Andreas Maxso' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Credit: Alamy Stock Photo
          Copyright: Credit: Associated Press / Alamy Stock Photo</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Andreas Maxso</li>
            <li><strong>Born:</strong> September 2, 1994 (Denmark)</li>
            <li><strong>Position:</strong> Defender (Center Back)</li>
            <li><strong>Current Team:</strong> Colorado Rapids</li>
            <li><strong>Previous Clubs:</strong> AGF, Hobro IK</li>
            <li><strong>Achievements:</strong> Danish Superliga Champion, Key Defensive Leader</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Andreas Maxso: The Defensive Pillar</h2>
          <p>
            Andreas Maxso is a strong and reliable center-back known for his aerial dominance, excellent positioning, and leadership. 
            After starting his career in Denmark, Maxso joined the Colorado Rapids, where he quickly established himself as a key figure in their defense.
          </p>
          <p>
            His calmness under pressure, combined with his ability to read the game, has made him one of the top defenders in Major League Soccer. 
            Fans and teammates alike appreciate his leadership and composure on the field.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Andreas Maxso Merchandise</h1>
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

export default AndreasMaxso;
