import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const KarolSwiderski = () => {
  const items = [
    { 
      "id": 1, 
      "title": "Karol Swiderski Charlotte FC Fanatics Authentic 10.5\" x 13\" Newly Minted Jersey Style Number 11 Sublimated Plaque", 
      "price": "$29.99", 
      "imageURL": "https://images.footballfanatics.com/charlotte-fc/karol-swiderski-charlotte-fc-105-x-13-newly-minted-jersey-style-number-11-sublimated-plaque_ss5_p-200541477+u-ulyhgwnw56zc3ooh1doh+v-pefa7vplstov7shmthtb.jpg?_hv=2&w=340", 
      "link": "https://www.mlsstore.com/en/charlotte-fc/karol-swiderski-charlotte-fc-fanatics-authentic-105-x-13-newly-minted-jersey-style-number-11-sublimated-plaque/t-21643787+p-5788001667752+z-7-4067963448?_ref=p-SRP:m-GRID:i-r0c0:po-0" 
    },
    { 
      "id": 2, 
      "title": "Karol Swiderski Charlotte FC Fanatics Authentic Framed 16\" x 20\" Stars of the Game Collage", 
      "price": "$89.99", 
      "imageURL": "https://images.footballfanatics.com/charlotte-fc/karol-swiderski-charlotte-fc-framed-16-x-20-stars-of-the-game-collage_ss5_p-200469885+u-pwoy4qahe56attvu2tvz+v-5abalkavzexbmnrxxsmh.jpg?_hv=2&w=340", 
      "link": "https://www.mlsstore.com/en/charlotte-fc/karol-swiderski-charlotte-fc-fanatics-authentic-framed-16-x-20-stars-of-the-game-collage/t-32976021+p-469900159598171+z-9-2914289003?_ref=p-SRP:m-GRID:i-r0c1:po-1" 
    },
    { 
      "id": 3, 
      "title": "Charlotte FC Karol Swiderski Fanatics Authentic 10.5\" x 13\" Sublimated Player Plaque", 
      "price": "$29.99", 
      "imageURL": "https://images.footballfanatics.com/charlotte-fc/karol-swiderski-charlotte-fc-105-x-13-sublimated-player-plaque_pi4806000_ff_4806400-72ca195e7585357bed24_full.jpg?_hv=2&w=340", 
      "link": "https://www.mlsstore.com/en/charlotte-fc/charlotte-fc-karol-swiderski-fanatics-authentic-105-x-13-sublimated-player-plaque/t-32865921+p-2675664026333+z-9-1083866975?_ref=p-SRP:m-GRID:i-r0c2:po-2" 
    }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Karol Świderski</h1>

        {/* Karol Świderski Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.goal.pl/wp-content/uploads/2024/10/karol-swiderski-1.jpg' 
            alt='Karol Świderski' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Credit: Alamy Stock Photo
          Copyright: Credit: ZUMA Press, Inc. / Alamy Stock Photo</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Karol Świderski</li>
            <li><strong>Born:</strong> January 23, 1997 (Rawicz, Poland)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Charlotte FC</li>
            <li><strong>Previous Clubs:</strong> PAOK FC,  Hellas Verona (loan), Jagiellonia Białystok</li>
            <li><strong>Achievements:</strong> Super League Greece Champion, Greek Cup Winner</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Rise of Karol Świderski</h2>
          <p>
            Karol Świderski is a dynamic forward known for his goal-scoring ability and technical skills. He started his career in Poland before making a significant impact at PAOK FC in Greece.
          </p>
          <p>
            Świderski's performances at PAOK earned him a transfer to Charlotte FC in 2022, where he continues to showcase his talents in Major League Soccer. Additionally, he is a key player for the Poland national team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Karol Świderski Merchandise</h1>
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

export default KarolSwiderski;

