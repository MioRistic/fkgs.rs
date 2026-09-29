import React from 'react';

const MattPolster = () => {
  const items = [
    {
      "title": "Matt Polster New England Revolution Autographed Fanatics Authentic Match-Used #8 White adidas Jersey from the 2024 MLS Season - Size M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Collectibles",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/matt-polster-new-england-revolution-autographed-match-used-number-8-white-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202767534+u-q6ckjofeh1qwrwzjympe+v-kbomie4qvhpebzurxge0.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/BnOOry"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Matt Polster</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/04/New-England-Revolution-midfielder-Matt-Polster-gets-past.jpg' 
            alt='Matt Polster' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
            style={{ objectPosition: 'center 10%' }} 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Icon Sportswire 
| 
Credit: Icon Sportswire via Getty Images
Copyright: ©Icon Sportswire (A Division of XML Team Solutions) All Rights Reserved</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Matthew Ryan Polster</li>
            <li><strong>Date of Birth:</strong> June 8, 1993 (Milwaukee, Wisconsin, United States)</li>
            <li><strong>Position:</strong> Defensive Midfielder, Right-Back</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> New England Revolution</li>
            <li><strong>College Team:</strong> SIU Edwardsville Cougars</li>
            <li><strong>Senior Career:</strong> Victoria Highlanders, Chicago Fire, Rangers, New England Revolution</li>
            <li><strong>International Career:</strong> United States U23, United States (1 cap)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Matt Polster</h2>
          <p>
            Matt Polster is a versatile player known for his ability to play as both a defensive midfielder and right-back. He began his journey with youth clubs in Las Vegas and Colorado before showcasing his talent at SIU Edwardsville Cougars in college soccer. Polster's professional career has seen him excel in both MLS and international competitions.
          </p>
          <p>
            Since joining the New England Revolution, Polster has become a key player, demonstrating exceptional defensive skills and contributing to his team's success. His leadership and experience make him a vital asset for both club and country.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Matt Polster Merchandise</h1>
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

export default MattPolster;
