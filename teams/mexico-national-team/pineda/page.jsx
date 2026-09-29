import React from 'react';

const OrbelinPineda = () => {
  const items = [
    {
      "title": "Men's Mexico National Team adidas Black 2025 Third Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-black-mexico-national-team-2025-third-authentic-jersey_ss5_p-202920632+pv-1+u-girgctyndvhamcgvk0ys+v-ciqsfj2tp7xm7u8mbjg5.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WydjjX"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Orbelín Pineda</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.365scores.com/es/news/wp-content/uploads/2024/06/GettyImages-1477262240-1024x683.jpg' 
            alt='Orbelín Pineda' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Jam Media 
| 
Credit: Getty Images
Copyright: 2023 Jam Media</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 24, 1996 (Coyuca de Catalán, Guerrero, Mexico)</li>
            <li><strong>Position:</strong> Midfielder, Winger</li>
            <li><strong>Height:</strong> 5 ft 7 in (1.69 m)</li>
            <li><strong>Current Team:</strong> AEK Athens</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>AEK Athens (2023–present): 50 appearances, 3 goals</li>
                <li>Celta (2022–2023): 7 appearances, 0 goals</li>
                <li>Cruz Azul (2019–2022): 97 appearances, 10 goals</li>
                <li>Guadalajara (2016–2018): 102 appearances, 7 goals</li>
                <li>Querétaro (2014–2015): 44 appearances, 8 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Orbelín Pineda</h2>
          <p>
            Orbelín Pineda is a talented Mexican footballer, known for his versatility as a midfielder and winger. Standing at 5 feet 7 inches, Pineda is highly regarded for his dribbling skills, vision, and ability to break down defenses. He has had a successful career in Mexico with clubs like Guadalajara and Cruz Azul, and in 2022 he moved to Europe, first joining Celta and then loaned to AEK Athens. He is also an important player for the Mexican national team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Orbelín Pineda Merchandise</h1>
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

export default OrbelinPineda;
