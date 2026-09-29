import React from 'react';

const MaxiMoralez = () => {
  const items = [
    {
      "title": "Men's New York City FC Maximiliano Moralez adidas Black 2024 24/7 Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-adidas-maximiliano-moralez-black-new-york-city-fc-2024-24/7-kit-replica-player-jersey_ss5_p-202850849+pv-1+u-k9bi8vsqlmu2bwozwc7e+v-tepebkfeodcxhfcc3mhr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9RorV"
    },
    {
      "title": "Women's New York City FC Maximiliano Moralez adidas Black 2024 24/7 Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/womens-adidas-maximiliano-moralez-black-new-york-city-fc-2024-24/7-kit-replica-player-jersey_ss5_p-202850850+pv-1+u-mtbiml5o8bofjhcmwm6x+v-cafbtlugtarq3l65cvwn.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrX71"
    },
    {
      "title": "Men's New York City FC Maximiliano Moralez adidas Black 2024 24/7 Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-adidas-maximiliano-moralez-black-new-york-city-fc-2024-24/7-kit-authentic-player-jersey_ss5_p-202850848+pv-1+u-zrijgk4wq8o1ebvjexfy+v-kcinn0dfuujj5owxxg7j.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnk9o"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Maximiliano Moralez</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn.eleco.com.ar/media/2022/12/deportes_32.jpg' 
            alt='Maximiliano Moralez' 
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
            <li><strong>Full Name:</strong> Maximiliano Nicolás Moralez</li>
            <li><strong>Date of Birth:</strong> 27 February 1987 (Granadero Baigorria, Argentina)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Height:</strong> 5 ft 3 in (1.60 m)</li>
            <li><strong>Current Team:</strong> New York City FC</li>
            <li><strong>Youth Career:</strong> Racing</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Racing (2005–2007, 2008 loan, 2023): 105 appearances, 17 goals</li>
                <li>FC Moscow (2007–2009): 6 appearances</li>
                <li>Vélez Sársfield (2009–2011): 72 appearances, 20 goals</li>
                <li>Atalanta (2011–2015): 142 appearances, 18 goals</li>
                <li>León (2016–2017): 34 appearances, 6 goals</li>
                <li>New York City FC (2017–2022, 2023–): 183 appearances, 27 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> Argentina U20 (2007): 16 appearances, 5 goals; Argentina (2011): 1 appearance</li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Maxi Moralez</h2>
          <p>
            Maximiliano Moralez, widely known as "Maxi," is an experienced attacking midfielder from Argentina. Known for his creativity, vision, and technical prowess, Moralez has had a long and illustrious career playing in various top leagues worldwide.
          </p>
          <p>
            After successful stints in Argentina, Italy, and Mexico, Maxi became a key player for New York City FC in Major League Soccer, contributing significantly to the team's success over the years. Despite his smaller stature, he has consistently been a giant on the field.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Maxi Moralez Merchandise</h1>
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

export default MaxiMoralez;
