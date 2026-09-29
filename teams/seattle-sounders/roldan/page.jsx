import React from 'react';

const CristianRoldan = () => {
  const items = [
    {
      "title": "Men's Seattle Sounders FC Cristian Roldan adidas Green 2024 The Anniversary Kit Authentic Player Jersey",
      "price": "$146.24",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "with code",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-cristian-roldan-green-seattle-sounders-fc-2024-the-anniversary-kit-authentic-player-jersey_ss5_p-201206353+pv-1+u-uumd1warf78tzvx7zlm7+v-zttuye80trggdrlnftqq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAanG"
    },
    {
      "title": "Men's Seattle Sounders FC Cristian Roldan adidas Red 2024 The Bruce Lee Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "with code",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-cristian-roldan-red-seattle-sounders-fc-2024-the-bruce-lee-kit-replica-player-jersey_ss5_p-201206370+pv-1+u-qvmsccpvalmkbpcvvh9v+v-nh5gfdk0t02d62u5xonc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXP3Go"
    },
    {
      "title": "Women's Seattle Sounders FC Cristian Roldan adidas Red 2024 The Bruce Lee Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "with code",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/womens-adidas-cristian-roldan-red-seattle-sounders-fc-2024-the-bruce-lee-kit-replica-player-jersey_ss5_p-201206374+pv-1+u-v7mrhbjhwsaursyoyxwk+v-lx91dejpyhj6d19ugolk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/2ayqEg"
    },
    {
      "title": "Men's Seattle Sounders FC Cristian Roldan adidas Green 2024 The Anniversary Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "with code",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-cristian-roldan-green-seattle-sounders-fc-2024-the-anniversary-kit-replica-player-jersey_ss5_p-201206357+pv-1+u-echngoptpmcaqjssou3y+v-8kxzmn4yrymbisihhayt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4GyDbM"
    }
  ];
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Cristian Roldan</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVBB6pHSdOyooVNbUjLO6ekf3Vpk7q5fBfg&s' 
            alt='Cristian Roldan' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Abbie Parr 
| 
Credit: Getty Images
Copyright: 2021 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> June 3, 1995 (Artesia, California, United States)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 8 in (1.72 m)</li>
            <li><strong>Current Team:</strong> Seattle Sounders FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Washington Crossfire (2013–2014): 13 appearances, 6 goals</li>
                <li>Seattle Sounders FC 2 (2015): 1 appearance, 0 goals</li>
                <li>Seattle Sounders FC (2015–present): 276 appearances, 36 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Cristian Roldan</h2>
          <p>
            Cristian Roldan is a talented midfielder who currently plays for Seattle Sounders FC in Major League Soccer. A product of the Washington Huskies, Roldan’s versatility and work rate have made him a key player for the Sounders and the United States national team. Known for his leadership on the field, he has been an essential part of Seattle's success, winning multiple MLS titles and earning international caps for the USMNT.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Cristian Roldan Merchandise</h1>
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

export default CristianRoldan;
