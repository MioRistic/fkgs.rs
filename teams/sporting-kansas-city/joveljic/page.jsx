import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DejanJoveljic = () => {
  const items = [
    {
      "title": "Men's Sporting Kansas City Dejan Joveljic adidas Light Blue 2025 One KC Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/mens-adidas-dejan-joveljic-light-blue-sporting-kansas-city-2025-one-kc-replica-player-jersey_ss5_p-202915693+pv-1+u-pmgodtqdbhymdftmyfcg+v-giu91udhj0idivy7r7fx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnoq7"
    },
    {
      "title": "Men's Sporting Kansas City Dejan Joveljic adidas Navy 2024 Diamonds Our Forever Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Authentic Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/mens-adidas-dejan-joveljic-navy-sporting-kansas-city-2024-diamonds-our-forever-authentic-player-jersey_ss5_p-202915699+pv-1+u-jdp1zfj4u5dymqgfrbtv+v-dyteeifv2mvakhg1ncwt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOj54D"
    },
    {
      "title": "Youth Sporting Kansas City Dejan Joveljic adidas Light Blue 2025 One KC Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/youth-adidas-dejan-joveljic-light-blue-sporting-kansas-city-2025-one-kc-replica-player-jersey_ss5_p-202915697+pv-1+u-rspbcx9gd30nssjltxcg+v-j4rvfmblgsyvqixdx3fe.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAyKY"
    },
    {
      "title": "Women's Sporting Kansas City Dejan Joveljic adidas Light Blue 2025 One KC Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/sporting-kansas-city/womens-adidas-dejan-joveljic-light-blue-sporting-kansas-city-2025-one-kc-replica-player-jersey_ss5_p-202915695+pv-1+u-ajuge02ly2prmoq4y8vs+v-zdzblnm2vbmwmk2jk07t.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQr1n"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Dejan Joveljić</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.goal.com/images/v3/getty-2200737353/crop/MM5DEOBRGM5DCNJYGI5G433XMU5DAORRGQ3A====/GettyImages-2200737353.jpg' 
            alt='Dejan Joveljić' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Kyle Rivas 
| 
Credit: Getty Images
Copyright: 2025 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Dejan Joveljić</li>
            <li><strong>Date of Birth:</strong> 7 August 1999 (Bijeljina, Republika Srpska, Bosnia and Herzegovina)</li>
            <li><strong>Position:</strong> Striker</li>
            <li><strong>Height:</strong> 1.80 m (5 ft 11 in)</li>
            <li><strong>Current Team:</strong> Sporting Kansas City</li>
            <li><strong>Youth Teams:</strong> Sloga United, Red Star Belgrade</li>
            <li><strong>Senior Teams:</strong> Red Star Belgrade, Eintracht Frankfurt, Anderlecht (loan), Wolfsberger AC (loan), LA Galaxy</li>
            <li><strong>International Career:</strong> Serbia (U16, U17, U18, U19, U21, Senior Team)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Dejan Joveljić: The Serbian Star in MLS</h2>
          <p>
          Dejan Joveljić is a Serbian striker who has risen through the ranks to become one of the key players in Major League Soccer. Known for his clinical finishing, movement off the ball, and ability to score in crucial moments, Joveljić quickly earned the admiration of fans and teammates alike.
          </p>
          <p>
          His journey began at Red Star Belgrade, where he showcased his potential before moving to Europe with stints at Eintracht Frankfurt, Anderlecht, and Wolfsberger AC. After his time in Europe, Joveljić made a move to LA Galaxy, where he impressed with his goal-scoring abilities and became a vital part of the team's attack.

However, in 2025, Joveljić made a significant transfer to Sporting Kansas City, bringing his goal-scoring prowess and experience to strengthen their offensive lineup. As he embarks on this new chapter in MLS, he is expected to play a key role in Sporting KC's quest for success in both the league and the CONCACAF Champions League.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Dejan Joveljić Merchandise</h1>
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

export default DejanJoveljic;
