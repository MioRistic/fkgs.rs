import React from 'react';

const MikaelUhre = () => {
  const items = [
    {
      "title": "Mikael Uhre Philadelphia Union Autographed Fanatics Authentic Match-Used #7 Tan adidas Jersey from the 2024 MLS Season - Size L",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Match-Used Jerseys",
      "shipping": "",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mikael-uhre-philadelphia-union-autographed-match-used-number-7-tan-adidas-jersey-from-the-2024-mls-season-size-l_ss5_p-202767677+pv-1+u-2dg7f8c1yny9ugbxoqgg+v-lthp6jzyhzlgwsjxedz6.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yDj9"
    },
    {
      "title": "Mikael Uhre Philadelphia Union Autographed Fanatics Authentic Match-Used #7 Navy adidas Jersey from the 2024 MLS Season - Size L",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Match-Used Jerseys",
      "shipping": "",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mikael-uhre-philadelphia-union-autographed-match-used-number-7-navy-adidas-jersey-from-the-2024-mls-season-size-l_ss5_p-202767678+pv-1+u-ynys6t9opfiuqhxy78on+v-hdvudfxxhdzpg2ayzt3g.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOj9Kb"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Mikael Uhre</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5qu95-49m4uxGDX5Z3qfQj1pRZduVQQsrg&s' 
            alt='Mikael Uhre' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Omar Vega 
| 
Credit: Getty Images
Copyright: Omar Vega @ 2022</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> September 30, 1994 (Ribe, Denmark)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 6 ft 2 in (1.88 m)</li>
            <li><strong>Current Team:</strong> Philadelphia Union</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>SønderjyskE (2013–2015): 19 appearances, 1 goal</li>
                <li>Skive (2014–2015, loan): 13 appearances, 3 goals</li>
                <li>Skive (2015–2016): 31 appearances, 15 goals</li>
                <li>SønderjyskE (2016–2018): 75 appearances, 13 goals</li>
                <li>Brøndby (2018–2022): 101 appearances, 42 goals</li>
                <li>Philadelphia Union (2022–present): 91 appearances, 32 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Mikael Uhre</h2>
          <p>
            Mikael Brandhof Uhre is a Danish forward known for his physicality and clinical finishing. Born in Ribe, Denmark, Uhre began his career at SønderjyskE before moving to Skive, where he found success and earned a move back to SønderjyskE. His strong performances in Denmark led to a transfer to Brøndby, where he solidified his reputation as a goal-scorer. In 2022, Uhre joined Philadelphia Union, continuing his impressive form and becoming a key player for the team in Major League Soccer (MLS).
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Mikael Uhre Merchandise</h1>
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

export default MikaelUhre;
