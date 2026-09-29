import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DanielSalloi = () => {
  const items = [
    {
      "title": "Daniel Salloi Sporting Kansas City Fanatics Authentic 10.5\" x 13\" Hoops 4.0 Jersey Style Number 20 Sublimated Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Plaques",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/daniel-salloi-sporting-kansas-city-105-x-13-hoops-40-jersey-style-number-20-sublimated-plaque_ss5_p-200599743+u-rt9i3oxs5fphnns1iakg+v-7erxd3txv8fc2ftrcdih.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORy0e"
    },
    {
      "title": "Men's Sporting Kansas City Daniel Salloi adidas Navy 2024 Diamonds Our Forever Authentic Player Jersey",
      "price": "$99.99",
      "originalPrice": "$194.99",
      "category": "Authentic Jerseys",
      "shipping": "Ships Free",
      "discount": "Reduced Price",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/mens-adidas-daniel-salloi-navy-sporting-kansas-city-2024-diamonds-our-forever-authentic-player-jersey_ss5_p-201206412+pv-1+u-bstvhbbk1ytjd1xutzy8+v-xfwdrom9ae1qdoay0nhr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKOmmm"
    },
    {
      "title": "Women's Sporting Kansas City Daniel Salloi adidas Light Blue 2023 Hoops 4.0 Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/womens-adidas-daniel-salloi-light-blue-sporting-kansas-city-2023-hoops-40-replica-player-jersey_pi5351000_altimages_ff_5351457-00f24d4878f562fc2e28alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6LQQX"
    },
    {
      "title": "Men's Sporting Kansas City Daniel Salloi adidas Light Blue 2023 Hoops 4.0 Authentic Player Jersey",
      "price": "$99.99",
      "originalPrice": "$194.99",
      "category": "Authentic Jerseys",
      "shipping": "Ships Free",
      "discount": "Reduced Price",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/mens-adidas-daniel-salloi-light-blue-sporting-kansas-city-2023-hoops-40-authentic-player-jersey_pi5351000_altimages_ff_5351465-12a3a495a5674584e849alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnO00y"
    },
    {
      "title": "Sporting Kansas City Daniel Salloi Fanatics Authentic 10.5\" x 13\" Sublimated Player Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Plaques",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/daniel-salloi-sporting-kansas-city-105-x-13-sublimated-player-plaque_pi4135000_ff_4135204-22bc965aee440aa15e99_full.jpg?_hv=2&w=900E",
      "link": "https://mlsstore.i8h2.net/dOkaaj"
    },
    {
      "title": "Women's Sporting Kansas City Daniel Salloi adidas Navy 2024 Diamonds Our Forever Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/womens-adidas-daniel-salloi-navy-sporting-kansas-city-2024-diamonds-our-forever-replica-player-jersey_ss5_p-201206420+pv-1+u-zpqavg6ylnl6hazoiiav+v-gi97vtmqjxtg2h3h9icr.jpg?_hv=2&w=900",
      "link": "https://www.mlsstore.com/en/sporting-kansas-city/womens-sporting-kansas-city-daniel-salloi-adidas-navy-2024-diamonds-our-forever-replica-player-jersey/t-36898130+p-808889353395708+z-9-3406378654?_ref=p-SRP:m-GRID:i-r1c2:po-5"
    },
    {
      "title": "Women's Sporting Kansas City Daniel Salloi adidas Light Blue 2024 Hoops 4.0 Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/womens-adidas-daniel-salloi-light-blue-sporting-kansas-city-2024-hoops-40-replica-player-jersey_ss5_p-201206400+pv-1+u-cdm2wu1ramlydv0yxsoj+v-wk19it1bdvu351rliygz.jpg?_hv=2&w=900",
      "link": "Uhttps://mlsstore.i8h2.net/qzm44Y"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Dániel Sallói</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://nb1.hu/wp-content/uploads/2023/10/Salloi-1-scaled-e1703882279292.jpg' 
            alt='Dániel Sallói' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Bill Barrett/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Bill Barrett/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Dániel Sallói</li>
            <li><strong>Date of Birth:</strong> 19 July 1996 (Siófok, Hungary)</li>
            <li><strong>Position:</strong> Striker, Winger</li>
            <li><strong>Height:</strong> 1.85 m (6 ft 1 in)</li>
            <li><strong>Current Team:</strong> Sporting Kansas City</li>
            <li><strong>Previous Teams:</strong> Újpest FC, Swope Park Rangers (loan), Gyirmót (loan)</li>
            <li><strong>International Career:</strong> Hungary U18, U21, and Senior Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Dániel Sallói: A Versatile Attacker</h2>
          <p>
            Dániel Sallói is a Hungarian footballer renowned for his attacking prowess and versatility as both a striker and a winger. After starting his youth career at Újpest FC, he joined Sporting Kansas City's academy in 2014 and quickly rose through the ranks.
          </p>
          <p>
            Sallói has become a cornerstone for Sporting Kansas City, scoring crucial goals and contributing to the team's attacking success. His performances have earned him call-ups to the Hungarian national team, where he continues to showcase his skills on the international stage.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Dániel Sallói Merchandise</h1>
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

export default DanielSalloi;
