import React from 'react';

const RankoVeselinovic = () => {
  const items = [
    // { id: 1, title: "Ranko Veselinović Vancouver Whitecaps Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    // { id: 2, title: "Signed Ranko Veselinović Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    // { id: 3, title: "Ranko Veselinović Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    // { id: 4, title: "Vancouver Whitecaps Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    // { id: 5, title: "Ranko Veselinović Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Ranko Veselinović</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1632715707355-3BU3N34LO87LMCPZSM95/2021-09-10+Ranko+Veselinovi%C4%87.jpg?format=750w' 
            alt='Ranko Veselinović' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
            style={{ objectPosition: 'center 20%' }}   
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Christopher Vose 
          Copyright: Christopher Vose</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 24, 1999 (Novi Sad, Serbia)</li>
            <li><strong>Position:</strong> Centre-back</li>
            <li><strong>Height:</strong> 6 ft 2 in (1.89 m)</li>
            <li><strong>Current Team:</strong> Vancouver Whitecaps</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Vojvodina (2016–2020): 59 appearances, 1 goal</li>
                <li>Vancouver Whitecaps (2020–present): 164 appearances, 7 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong>
              <ul className='list-disc list-inside ml-5'>
                <li>Serbia U16 (2014–2015): 14 appearances, 1 goal</li>
                <li>Serbia U17 (2015–2016): 15 appearances, 2 goals</li>
                <li>Serbia U18 (2016–2017): 7 appearances, 0 goals</li>
                <li>Serbia U19 (2017–2018): 10 appearances, 0 goals</li>
                <li>Serbia U21 (2017–2019): 3 appearances, 0 goals</li>
                <li>Serbia Senior Team (2021–present): 2 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Ranko Veselinović</h2>
          <p>
            Ranko Veselinović is a Serbian professional footballer currently playing as a centre-back for Vancouver Whitecaps in Major League Soccer (MLS). Born in Novi Sad, Serbia, Veselinović started his career at Vojvodina before making the move to Vancouver Whitecaps in 2020. With his impressive defensive skills and leadership on the field, he has become an important player for both his club and the Serbian national team. He has represented Serbia at various youth levels, including the U16, U17, U18, U19, and U21 teams, before earning his spot with the senior team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Ranko Veselinović Merchandise</h1>
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

export default RankoVeselinovic;
