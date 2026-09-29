import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AshleyWestwood = () => {
  const items = [
    { "id": 1, "title": "Men's Charlotte FC Ashley Westwood Black Authentic Stack Name & Number T-Shirt", "price": "$39.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-ashley-westwood-black-charlotte-fc-authentic-stack-name-and-number-t-shirt_ss5_p-202772315+u-phguuyv8vspq4rv6pvw5+v-j9qf9fslqpmsrkzqw3oo.png?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-ashley-westwood-black-authentic-stack-name-and-number-t-shirt/t-43193776+p-798824073035728+z-9-1669088670?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
    { "id": 2, "title": "Men's Charlotte FC Ashley Westwood adidas Purple 2023 Crown Jewel Kit Replica Jersey", "price": "$134.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-ashley-westwood-purple-charlotte-fc-2023-crown-jewel-kit-replica-jersey_pi5352000_ff_5352617-397b4085b0fde0ca784a_full.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-ashley-westwood-adidas-purple-2023-crown-jewel-kit-replica-jersey/t-21974810+p-4914055728679+z-9-2442043522?_ref=p-SRP:m-GRID:i-r0c1:po-1" },
    { "id": 3, "title": "Men's Charlotte FC Ashley Westwood adidas Blue 2024 The Carolina Kit: Explore Authentic Player Jersey", "price": "$194.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-ashley-westwood-blue-charlotte-fc-2024-the-carolina-kit:-explore-authentic-player-jersey_ss5_p-202850466+u-031jx7ccsf5larmnplaj+v-jskwizwblaxwktrprxtk.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-ashley-westwood-adidas-blue-2024-the-carolina-kit:-explore-authentic-player-jersey/t-10975943+p-806680537211551+z-9-3874746269?_ref=p-SRP:m-GRID:i-r0c2:po-2" },
    { "id": 4, "title": "Men's Charlotte FC Ashley Westwood adidas Blue 2024 The Carolina Kit: Explore Replica Player Jersey", "price": "$134.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-ashley-westwood-blue-charlotte-fc-2024-the-carolina-kit:-explore-replica-player-jersey_ss5_p-201204787+u-1kftcsni67sninyzs3ew+v-pmrlph5ab9r8tdb18qpq.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-ashley-westwood-adidas-blue-2024-the-carolina-kit:-explore-replica-player-jersey/t-32869310+p-910089465548066+z-9-3786080964?_ref=p-SRP:m-GRID:i-r1c0:po-3" },
    { "id": 5, "title": "Women's Charlotte FC Ashley Westwood adidas Purple 2023 Crown Jewel Kit Replica Jersey", "price": "$134.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/womens-adidas-ashley-westwood-purple-charlotte-fc-2023-crown-jewel-kit-replica-jersey_pi5352000_ff_5352621-f3eb1e924264bfc01ec2_full.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/womens-charlotte-fc-ashley-westwood-adidas-purple-2023-crown-jewel-kit-replica-jersey/t-21087154+p-1647726895683+z-9-1031824824?_ref=p-SRP:m-GRID:i-r1c1:po-4" },
    { "id": 6, "title": "Women's Charlotte FC Ashley Westwood adidas Blue 2024 The Carolina Kit: Explore Replica Player Jersey", "price": "$134.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/womens-adidas-ashley-westwood-blue-charlotte-fc-2024-the-carolina-kit:-explore-replica-player-jersey_ss5_p-201204791+u-i0rdmcqpg8ld1synovqp+v-ekuhdsojob0flwwekles.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/womens-charlotte-fc-ashley-westwood-adidas-blue-2024-the-carolina-kit:-explore-replica-player-jersey/t-10312698+p-134434355504823+z-9-880924066?_ref=p-SRP:m-GRID:i-r1c2:po-5" }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Ashley Westwood</h1>

        {/* Ashley Westwood Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.qcnews.com/wp-content/uploads/sites/109/2024/05/GettyImages-2152987244.jpg' 
            alt='Ashley Westwood' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: David Jensen 
| 
Credit: Getty Images
Copyright: 2024 David Jensen</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Ashley Westwood</li>
            <li><strong>Born:</strong> April 1, 1990 (Nantwich, England)</li>
            <li><strong>Position:</strong> Defensive Midfielder</li>
            <li><strong>Current Team:</strong> Charlotte FC</li>
            <li><strong>Previous Clubs:</strong> Burnley FC, Aston Villa, Nantwich Town (loan), Crewe Alexandra</li>
            <li><strong>Achievements:</strong> English Premier League Experience</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Rise of Ashley Westwood</h2>
          <p>
            Ashley Westwood is a highly experienced defensive midfielder, known for his vision, passing ability, and leadership on the pitch. He started his career at Crewe Alexandra before making his name at Aston Villa and later Burnley, where he earned several seasons of Premier League experience.
          </p>
          <p>
            In 2023, Westwood moved to Charlotte FC, bringing his wealth of knowledge to the MLS. His solid performances have made him a key figure in Charlotte's midfield, helping stabilize the team's play in the U.S. league.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Ashley Westwood Merchandise</h1>
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

export default AshleyWestwood;
