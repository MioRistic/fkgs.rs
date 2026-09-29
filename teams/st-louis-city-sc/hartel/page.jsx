import React from 'react';

const MarcelHartel = () => {
  const items = [
    {
      "title": "Men's St. Louis City SC Marcel Hartel adidas Red 2025 Forever CITY Red Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-marcel-hartel-red-st-louis-city-sc-2025-forever-city-red-authentic-player-jersey_ss5_p-202843073+pv-1+u-wnwfyewmyyj75qigs6wc+v-cf0hk7ra6er9i3ntodhl.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjADvA"
    },
    {
      "title": "Women's St. Louis City SC Marcel Hartel adidas White 2024 The Confluence Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/womens-adidas-marcel-hartel-white-st-louis-city-sc-2024-the-confluence-kit-replica-player-jersey_ss5_p-202853102+pv-1+u-uhqbvcyizc9f2h1xrrlu+v-cnyrrsk2gky3g8vwirw7.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORxvY"
    },
    {
      "title": "Women's St. Louis City SC Marcel Hartel adidas Red 2025 Forever CITY Red Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/womens-adidas-marcel-hartel-red-st-louis-city-sc-2025-forever-city-red-replica-player-jersey_ss5_p-202843075+pv-1+u-0uumvfpwwp3fbyoh16f6+v-d1gjarntppqoqf1tifl9.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjg9Z"
    },
    {
      "title": "Youth St. Louis City SC Marcel Hartel adidas Red 2025 Forever CITY Red Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/youth-adidas-marcel-hartel-red-st-louis-city-sc-2025-forever-city-red-replica-player-jersey_ss5_p-202843076+pv-1+u-tvpsms9wa5fqhrqyu5lt+v-r0hidvo0rcfso4tndry3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKOW4k"
    },
    {
      "title": "Youth St. Louis City SC Marcel Hartel adidas White 2024 The Confluence Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/youth-adidas-marcel-hartel-white-st-louis-city-sc-2024-the-confluence-kit-replica-player-jersey_ss5_p-202853103+pv-1+u-malptov7hjlcnccb8uhl+v-xabw4tpi9mvcjnsifvk2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKOnva"
    },
    {
      "title": "Men's St. Louis City SC Marcel Hartel adidas White 2024 The Confluence Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-marcel-hartel-white-st-louis-city-sc-2024-the-confluence-kit-authentic-player-jersey_ss5_p-202853100+pv-1+u-a2h0uz5bzzqhfk9lcwq0+v-lqo25rrrx6wx58axhkks.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45Mg9"
    },
    {
      "title": "Men's St. Louis City SC Marcel Hartel adidas Red 2025 Forever CITY Red Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-marcel-hartel-red-st-louis-city-sc-2025-forever-city-red-replica-player-jersey_ss5_p-202843074+pv-1+u-xgbi9hi8aulpgoxywrpd+v-mikchz0afml8de7nbrhf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPM5M"
    },
    {
      "title": "Men's St. Louis City SC Marcel Hartel adidas White 2024 The Confluence Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-marcel-hartel-white-st-louis-city-sc-2024-the-confluence-kit-replica-player-jersey_ss5_p-202853101+pv-1+u-znjcsfvanli4alsl2t84+v-jcfvlrmp4c86hxuyzdbd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yqMV"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Marcel Hartel</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn.prod.www.11freunde.de/images/b5d24b92-98da-4fc7-b44f-58c371297bb0_w1200_r1_fpx52_fpy50.jpg' 
            alt='Marcel Hartel' 
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
            <li><strong>Date of Birth:</strong> January 19, 1996 (Cologne, Germany)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.76 m)</li>
            <li><strong>Current Team:</strong> St. Louis City SC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>1. FC Köln II (2015–2017): 37 appearances, 6 goals</li>
                <li>1. FC Köln (2016–2017): 8 appearances, 0 goals</li>
                <li>Union Berlin (2017–2019): 54 appearances, 4 goals</li>
                <li>Arminia Bielefeld (2019–2021): 55 appearances, 1 goal</li>
                <li>FC St. Pauli (2021–2024): 98 appearances, 24 goals</li>
                <li>St. Louis City (2024–present): 9 appearances, 3 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Marcel Hartel</h2>
          <p>
            Marcel Hartel is a talented German midfielder who currently plays for St. Louis City SC in Major League Soccer (MLS). Known for his versatility and technical skill, Hartel has played for several prominent teams in Europe including Union Berlin, Arminia Bielefeld, and FC St. Pauli. With his strong passing ability and leadership on the field, Hartel continues to make an impact in MLS with St. Louis City.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Marcel Hartel Merchandise</h1>
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

export default MarcelHartel;
