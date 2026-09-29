import React from 'react';

const AndresCubas = () => {
  const items = [
    // { id: 1, title: "Andrés Cubas Vancouver Whitecaps Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    // { id: 2, title: "Signed Andrés Cubas Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    // { id: 3, title: "Andrés Cubas Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    // { id: 4, title: "Vancouver Whitecaps Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    // { id: 5, title: "Andrés Cubas Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Andrés Cubas</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1656311673001-MA3KT4Y0MCW73OO1XEM1/2022-06-26+Andres+Cubas.jpg' 
            alt='Andrés Cubas' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
            style={{ objectPosition: 'center 20%' }}  
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team Vancouver Whitecaps | Copyright: 2025 Team Vancouver Whitecaps</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> May 22, 1996 (Aristóbulo del Valle, Argentina)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 7 in (1.69 m)</li>
            <li><strong>Current Team:</strong> Vancouver Whitecaps</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Boca Juniors (2014–2018): 28 appearances, 0 goals</li>
                <li>Pescara (2017, loan): 1 appearance, 0 goals</li>
                <li>Defensa y Justicia (2017–2018, loan): 21 appearances, 0 goals</li>
                <li>Talleres (2018–2020): 38 appearances, 1 goal</li>
                <li>Nîmes (2020–2022): 48 appearances, 2 goals</li>
                <li>Vancouver Whitecaps (2022–present): 74 appearances, 1 goal</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Andrés Cubas</h2>
          <p>
            Andrés Cubas is an Argentine-born Paraguayan midfielder who currently plays for Vancouver Whitecaps in Major League Soccer. He began his career in Argentina with Boca Juniors, making a name for himself with strong defensive capabilities and midfield versatility. He spent time on loan at various clubs, including Pescara in Italy and Defensa y Justicia in Argentina. In 2020, he moved to Nîmes in France before joining the Vancouver Whitecaps in 2022, where he continues to make an impact in MLS.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Andrés Cubas Merchandise</h1>
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

export default AndresCubas;
