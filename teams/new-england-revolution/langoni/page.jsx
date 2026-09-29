import React from 'react';

const LucaLangoni = () => {
  const items = [
    { id: 1, title: "Luca Langoni Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Luca Langoni Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Luca Langoni Poster", imageUrl: 'https://example.com/poster1.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "New England Revolution Kit", imageUrl: 'https://example.com/kit1.jpg', link: 'https://www.example.com/product/4', price: '$89.99' },
    { id: 5, title: "New England Revolution Scarf", imageUrl: 'https://example.com/scarf1.jpg', link: 'https://www.example.com/product/5', price: '$29.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Luca Langoni</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.intermiami.news/uploads/52/2024/09/GettyImages-2172110695-1024x685.jpg' 
            alt='Luca Langoni' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
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
            <li><strong>Full Name:</strong> Luca Daniel Langoni</li>
            <li><strong>Date of Birth:</strong> 9 February 2002 (Gregorio de Laferrère, Buenos Aires, Argentina)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 5 ft 8 in (1.72 m)</li>
            <li><strong>Current Team:</strong> New England Revolution</li>
            <li><strong>Youth Career:</strong> Boca Juniors</li>
            <li><strong>Senior Career:</strong> Boca Juniors (2022–2024), New England Revolution (2024–)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Luca Langoni</h2>
          <p>
            Luca Langoni is a talented forward from Argentina, known for his speed, technical ability, and finishing skills. He began his professional career with Boca Juniors, where he made an impact with 33 appearances and 9 goals.
          </p>
          <p>
            In 2024, he joined New England Revolution in Major League Soccer, continuing to showcase his potential and adapt to a new league. Langoni is seen as a rising star with a promising future.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Luca Langoni Merchandise</h1>
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

export default LucaLangoni;
