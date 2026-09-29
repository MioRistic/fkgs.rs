import React from 'react';

const ChrisDurkin = () => {
  const items = [
      {
        "title": "Chris Durkin D.C. United Autographed Fanatics Authentic Match-Used #8 White Jersey from the 2023 MLS Season",
        "price": "$299.99",
        "originalPrice": "$299.99",
        "category": "Men's Jerseys",
        "availability": "almost gone",
        "imageUrl": "https://images.footballfanatics.com/dc-united/chris-durkin-dc-united-autographed-match-used-number-8-white-jersey-from-the-2023-mls-season_ss5_p-201145662+pv-1+u-6aiqywdihyxiqwccdxbz+v-ryjqdrdem9qhwyeuqmpn.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/MA2OvK"
      },
      {
        "title": "Men's St. Louis City SC adidas Red 2023 CITY Kit Authentic Custom Jersey",
        "price": "$194.99",
        "originalPrice": "$194.99",
        "category": "Men's Jerseys",
        "availability": "available",
        "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-red-st-louis-city-sc-2023-city-kit-authentic-custom-jersey_pi5229000_altimages_ff_5229600-5a32cdf1dbb1f2ddd100alt1_full.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/7anP9y"
      }
    ]
;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Chris Durkin</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://s3.amazonaws.com/assets.thisisasn.com/production/attacheds/13170/original/Chris_Durkin_-_ASN_TOP_-_ISI_-_2019_U-20_WC_vs_Ecuador_-_Adam_Nurkiewicz.jpg?1569464355' 
            alt='Chris Durkin' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Adam Nurkiewicz 
| 
Credit: Adam Nurkiewicz/isiphotos.com
Copyright: Adam Nurkiewicz/isiphotos.com</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> February 8, 2000 (Hampton, Virginia, United States)</li>
            <li><strong>Position:</strong> Defensive midfielder</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> St. Louis City SC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Richmond Kickers (2015): 1 appearance, 0 goals</li>
                <li>D.C. United (2016–2020): 36 appearances, 1 goal</li>
                <li>Richmond Kickers (2016–2017, loan): 14 appearances, 0 goals</li>
                <li>Sint-Truiden (2019–2020, loan): 13 appearances, 1 goal</li>
                <li>Sint-Truiden (2020–2022): 55 appearances, 1 goal</li>
                <li>D.C. United (2022–2023): 60 appearances, 4 goals</li>
                <li>St. Louis City (2024–present): 28 appearances, 1 goal</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Chris Durkin</h2>
          <p>
            Chris Durkin is an American professional footballer who plays as a defensive midfielder for St. Louis City SC in Major League Soccer (MLS). Born in Hampton, Virginia, Durkin began his career with Richmond Kickers before moving to D.C. United and spending time on loan at Sint-Truiden. Known for his work ethic and defensive presence, he has become a key figure in St. Louis City's midfield.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Chris Durkin Merchandise</h1>
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

export default ChrisDurkin;
