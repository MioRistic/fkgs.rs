import React from 'react';

const CarlesGil = () => {
  const items = [
    {
      "title": "Carles Gil New England Revolution Fanatics Authentic 10.5\" x 13\" Jersey Style Number 10 Sublimated Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Collectibles",
      "shipping": "Ships Free",
      "availability": "In Stock",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/carles-gil-new-england-revolution-105-x-13-jersey-style-number-10-sublimated-plaque_ss5_p-200541452+u-kwnu5rxe16ylclx8zzs3+v-g2yleeyxnn4gjd9errot.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9RR7K"
    },
    {
      "title": "Unisex New England Revolution Carles Gil Navy Player Adjustable Hat",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Accessories",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/unisex-carles-gil-navy-new-england-revolution-player-adjustable-hat_ss5_p-201204710+pv-1+u-rjabf4tuqxr4vaov5w8x+v-nptggt42quzwqharl674.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjjYX"
    },
    {
      "title": "Carles Gil New England Revolution 10.5\" x 13\" Sublimated Player Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Collectibles",
      "shipping": "Ships Free",
      "availability": "In Stock",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/carles-gil-new-england-revolution-105-x-13-sublimated-player-plaque_ss5_p-200454056+u-jhnam5bngfygrub1dmiz+v-t5bijowryoglpw0f72d0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrr7v"
    },
    {
      "title": "Carles Gil New England Revolution Fanatics Authentic Framed 16\" x 20\" Stars of the Game Collage",
      "price": "$89.99",
      "originalPrice": "$89.99",
      "category": "Collectibles",
      "shipping": "Ships Free",
      "availability": "In Stock",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/carles-gil-new-england-revolution-framed-16-x-20-stars-of-the-game-collage_ss5_p-200469893+u-gniulqzfi9pfmdzhgwjz+v-xltwiuurrvi3jmcxzjlj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQQv0"
    },
    {
      "title": "Men's New England Revolution Carles Gil Navy Authentic Stack Name & Number T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's Apparel",
      "shipping": "Ships Free",
      "availability": "In Stock",
      "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-carles-gil-navy-new-england-revolution-authentic-stack-name-and-number-t-shirt_ss5_p-202772328+pv-1+u-yk2ws0s2tg3mg9muvyvh+v-m5hhray1youixu4uz0uu.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yyVN"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Carles Gil</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/09/carles.jpg' 
            alt='Carles Gil' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Tim Bouwer/ISI Photos 
| 
Credit: Getty Images
Copyright: 2022 Tim Bouwer/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Carles Gil de Pareja Vicent</li>
            <li><strong>Date of Birth:</strong> 22 November 1992 (Valencia, Spain)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Height:</strong> 1.71 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> New England Revolution</li>
            <li><strong>Youth Team:</strong> Valencia</li>
            <li><strong>Senior Career:</strong> Valencia B, Elche (loan), Aston Villa, Deportivo La Coruña, New England Revolution</li>
            <li><strong>International Career:</strong> Spain U21 (1 cap)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Carles Gil: The Creative Maestro</h2>
          <p>
            Carles Gil is a Spanish attacking midfielder known for his exceptional playmaking abilities, vision, and technical skills. Starting his career at Valencia, he later showcased his talent in leagues across Spain, England, and the United States. Currently representing New England Revolution, Gil has become a vital player for the team, contributing goals and assists consistently.
          </p>
          <p>
            With experience in top leagues and international recognition at the U21 level, Gil remains one of the most impactful midfielders in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Carles Gil Merchandise</h1>
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

export default CarlesGil;
