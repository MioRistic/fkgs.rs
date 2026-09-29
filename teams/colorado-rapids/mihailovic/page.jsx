import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DjordjeMihailovic = () => {
  const items = [
    {
      "title": "Men's Colorado Rapids Djordje Mihailovic adidas Green 2025 Headwaters Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "availability": "Almost Gone!",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-djordje-mihailovic-green-colorado-rapids-2025-headwaters-replica-player-jersey_ss5_p-202840258+pv-1+u-9xqfeyurkkbnhdtjpgmn+v-xsmoqukgoym0iraad1hd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PO4n9R"
    },
    {
      "title": "Men's Colorado Rapids Djordje Mihailovic adidas Light Blue 2024 New Day Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-djordje-mihailovic-light-blue-colorado-rapids-2024-new-day-kit-replica-player-jersey_ss5_p-201204877+pv-1+u-1aezbsc5enx9n3q9ualv+v-7enaboluevzwipomxbk0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKG1B2"
    },
    {
      "title": "Women's Colorado Rapids Djordje Mihailovic adidas Light Blue 2024 New Day Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/womens-adidas-djordje-mihailovic-light-blue-colorado-rapids-2024-new-day-kit-replica-player-jersey_ss5_p-201204880+pv-1+u-w9sprntlfbdgngvovfjb+v-j8nju9c1wdt4daod0htn.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Qj4EL6"
    },
    {
      "title": "Men's Colorado Rapids Djordje Mihailovic adidas Burgundy 2024 One Flag Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-djordje-mihailovic-burgundy-colorado-rapids-2024-one-flag-kit-replica-player-jersey_ss5_p-201204862+pv-1+u-aympn8hjjq0vulrahlhh+v-bqc3lgciwbjqkgo3ojrr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOZvXM"
    },
    {
      "title": "Youth Colorado Rapids Djordje Mihailovic adidas Green 2025 Headwaters Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/youth-adidas-djordje-mihailovic-green-colorado-rapids-2025-headwaters-replica-player-jersey_ss5_p-202840260+pv-1+u-ptcj9mdrw2jpz9fdinwr+v-ne3ocdsgnn8culmqprwy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Dynmb2"
    },
    {
      "title": "Men's Colorado Rapids Djordje Mihailovic adidas Burgundy 2024 One Flag Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-djordje-mihailovic-burgundy-colorado-rapids-2024-one-flag-kit-authentic-player-jersey_ss5_p-201204858+pv-1+u-u3rdbsv7mwescrh0nkh7+v-0qywfliwp960vkafosub.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeZ4nP"
    },
    {
      "title": "Women's Colorado Rapids Djordje Mihailovic adidas Green 2025 Headwaters Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/womens-adidas-djordje-mihailovic-green-colorado-rapids-2025-headwaters-replica-player-jersey_ss5_p-202840259+pv-1+u-nxra2qs5bkb39ckx5kuu+v-h4jr7upviyqcmecm6sni.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JK4Amq"
    },
    {
      "title": "Women's Colorado Rapids Djordje Mihailovic adidas Burgundy 2024 One Flag Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/womens-adidas-djordje-mihailovic-burgundy-colorado-rapids-2024-one-flag-kit-replica-player-jersey_ss5_p-201204866+u-kz69gganv90jcs01idkq+v-q3qlpcbjpmmpdzkrrcur.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/XmORXX"
    },
    {
      "title": "Men's Colorado Rapids Djordje Mihailovic adidas Light Blue 2024 New Day Kit Authentic Player Jersey",
      "price": "$99.99",
      "originalPrice": "$194.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "discount": "Reduced Price",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-djordje-mihailovic-light-blue-colorado-rapids-2024-new-day-kit-authentic-player-jersey_ss5_p-201204874+u-btcnvsyxkgkn0n7lgpbz+v-0benrkouwjc1gnw7gzon.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/zxrv2r"
    }
  ]
  

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Djordje Mihailovic</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cf-images.us-east-1.prod.boltdns.net/v1/static/6057277724001/81fbb3c7-8451-4448-94bc-6b9fefe1fd24/fcb23ad0-8a30-46c2-8c37-6406f1dc0142/1280x720/match/image.jpg' 
            alt='Djordje Mihailovic' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Djordje Mihailovic</li>
            <li><strong>Born:</strong> November 9, 1998 (Chicago, Illinois, USA)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Current Team:</strong> Colorado Rapids</li>
            <li><strong>Previous Clubs:</strong> Chicago Fire</li>
            <li><strong>Achievements:</strong> MLS All-Star (2023), USMNT Player</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Djordje Mihailovic: The Creative Playmaker</h2>
          <p>
            Djordje Mihailovic is an exceptional attacking midfielder known for his creativity, vision, and playmaking ability. 
            He plays for Colorado Rapids, where he has become one of the key players. 
            Known for his precise passing and smart positioning, Mihailovic continues to impress in MLS.
          </p>
          <p>
            His technical skills, vision, and leadership make him one of the brightest talents in the league, contributing to his club and the U.S. Men's National Team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Djordje Mihailovic Merchandise</h1>
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

export default DjordjeMihailovic;

