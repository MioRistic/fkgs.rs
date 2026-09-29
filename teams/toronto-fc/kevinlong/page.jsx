import React from 'react';

const KevinLong = () => {
  const items = [
    {
      "title": "Men's Toronto FC adidas White 2024 GTA Kit Replica Jersey",
      "price": "$69.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-white-toronto-fc-2024-gta-kit-replica-jersey_ss5_p-201102339+pv-1+u-qr7crpvoajravp4hrcfh+v-avneoacewfz8wr9jdsd0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/K0ONYv"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Kevin Long</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fQLbiFBhOvoE0UYSOPxxi_VERQ0zX3o9MA&s' 
            alt='Kevin Long' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: John Walton - PA Images 
| 
Credit: PA Images via Getty Images
Copyright: PA Wire/PA Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> August 18, 1990 (Cork, Ireland)</li>
            <li><strong>Position:</strong> Defender</li>
            <li><strong>Height:</strong> 6 ft 2 in (1.88 m)</li>
            <li><strong>Current Team:</strong> Toronto FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Cork City (2008–2010): 16 appearances, 1 goal</li>
                <li>Burnley (2010–2023): 69 appearances, 1 goal</li>
                <li>Accrington Stanley (loan, 2010–2011): 15 appearances, 0 goals</li>
                <li>Accrington Stanley (loan, 2011–2012): 24 appearances, 4 goals</li>
                <li>Rochdale (loan, 2012): 16 appearances, 0 goals</li>
                <li>Portsmouth (loan, 2012): 5 appearances, 0 goals</li>
                <li>Barnsley (loan, 2015–2016): 11 appearances, 2 goals</li>
                <li>Milton Keynes Dons (loan, 2016): 2 appearances, 0 goals</li>
                <li>Birmingham City (2023–2024): 34 appearances, 1 goal</li>
                <li>Toronto FC (2024–present): 26 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Kevin Long</h2>
          <p>
            Kevin Long is an experienced Irish footballer who plays as a defender for Toronto FC in Major League Soccer. Born in Cork, Ireland, Long began his career at Cork City before moving to Burnley where he spent the majority of his career. He had several loan spells in the lower leagues, gaining valuable experience. Long has also represented the Republic of Ireland at the international level, making several appearances for his country. His leadership and defensive abilities make him a key figure for Toronto FC.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Kevin Long Merchandise</h1>
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

export default KevinLong;
