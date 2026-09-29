import React from 'react';
import Image from 'next/image';

const HirvingLozano = () => {
  const items = [
    {
      "title": "Men's San Diego FC Hirving Lozano adidas Navy 2025 State of Flow Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-hirving-lozano-navy-san-diego-fc-2025-state-of-flow-authentic-player-jersey_ss5_p-202601514+pv-1+u-iogpzsqauivpkjdrszdf+v-bekae3469mdvw4yajzsl.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yJ6g"
    },
    {
      "title": "Men's San Diego FC Hirving Lozano adidas Navy 2025 State of Flow Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-hirving-lozano-navy-san-diego-fc-2025-state-of-flow-replica-player-jersey_ss5_p-202601515+pv-1+u-e2ebv2vhqllgeylgmxbd+v-a5dyhr67srgzkcv7bows.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqY95"
    },
    {
      "title": "Youth San Diego FC Hirving Lozano adidas Navy 2025 State of Flow Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/youth-adidas-hirving-lozano-navy-san-diego-fc-2025-state-of-flow-replica-player-jersey_ss5_p-202601517+pv-1+u-alwqwemmv3qki153zjj8+v-zmw5li3ld0trukyh2zct.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXPYax"
    },
    {
      "title": "Men's Mexico National Team Hirving Lozano adidas Green 2024 Away Replica Player Long Sleeve Jersey",
      "price": "$144.99",
      "originalPrice": "$144.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-hirving-lozano-green-mexico-national-team-2024-away-replica-player-long-sleeve-jersey_ss5_p-201388902+pv-1+u-pvu3siru9usxxsvhuokx+v-0bso4jhziciy7bh2ikxe.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeO7XA"
    },
    {
      "title": "Men's Mexico National Team Hirving Lozano adidas Green 2024 Away Authentic Player Jersey",
      "price": "$184.99",
      "originalPrice": "$184.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-hirving-lozano-green-mexico-national-team-2024-away-authentic-player-jersey_ss5_p-201388892+pv-1+u-nheyjpexc42piudsmzuh+v-mehoawbgqdi3rkke6p2m.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4GyX31"
    },
    {
      "title": "Men's Mexico National Team Hirving Lozano adidas Burgundy 2024 Home Authentic Player Jersey",
      "price": "$184.99",
      "originalPrice": "$184.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-hirving-lozano-burgundy-mexico-national-team-2024-home-authentic-player-jersey_ss5_p-201358857+pv-1+u-kp5hrsdcb6tmdw6k5pqa+v-33cb9thltk3twgojcvep.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRb7OO"
    },
    {
      "title": "Youth Mexico National Team Hirving Lozano adidas Green 2024 Home Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/youth-adidas-hirving-lozano-green-mexico-national-team-2024-home-replica-player-jersey_ss5_p-201358861+pv-1+u-ytpr0zbzwygttbpxqyyn+v-sr1jlmqgjmjupc3diqxb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKO7ja"
    },
    {
      "title": "Women's San Diego FC Hirving Lozano adidas Navy 2025 State of Flow Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/womens-adidas-hirving-lozano-navy-san-diego-fc-2025-state-of-flow-replica-player-jersey_ss5_p-202601516+u-henfemgnkjzfsnxykmnb+v-5wfbfjb7rm39mdyb2eyc.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/6ynm0N"
    },
    {
      "title": "Men's San Diego FC Hirving Lozano adidas White 2025 Woven Into One Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-hirving-lozano-white-san-diego-fc-2025-woven-into-one-authentic-player-jersey_ss5_p-202842322+pv-1+u-futeemdxsuptydwpmelb+v-7dpooam1vdr3i1uupcou.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yJXg"
    },
    {
      "title": "Youth Mexico National Team Hirving Lozano adidas Green 2024 Away Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/youth-adidas-hirving-lozano-green-mexico-national-team-2024-away-replica-player-jersey_ss5_p-201388912+pv-1+u-tq6qbjilu4lqmg5ehys9+v-e4qiniuk0bmx0rcxennw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4GyXz1"
    },
    {
      "title": "Women's Mexico National Team Hirving Lozano adidas Burgundy 2024 Home Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/womens-adidas-hirving-lozano-burgundy-mexico-national-team-2024-home-replica-player-jersey_ss5_p-201358860+pv-1+u-t20fed1xzjspkc1ehvuv+v-lwe95df5qxd2eftqveq1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA27PP"
    },
    {
      "title": "Women's Mexico National Team Hirving Lozano adidas Green 2024 Away Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/womens-adidas-hirving-lozano-green-mexico-national-team-2024-away-replica-player-jersey_ss5_p-201388907+pv-1+u-c43yk6bt5at0dynuomav+v-yqxjvai2ve41gaoo8ufp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9Ln04e"
    },
    {
      "title": "Men's Mexico National Team Hirving Lozano adidas Burgundy 2024 Home Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-hirving-lozano-burgundy-mexico-national-team-2024-home-replica-player-jersey_ss5_p-201358858+pv-1+u-2c0rdi1adtxm69lnqrju+v-exeiqnxnae6hdy9j6si4.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1eYyg"
    },
    {
      "title": "Men's Mexico National Team Hirving Lozano adidas Burgundy 2024 Home Replica Player Long Sleeve Jersey",
      "price": "$144.99",
      "originalPrice": "$144.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-hirving-lozano-burgundy-mexico-national-team-2024-home-replica-player-long-sleeve-jersey_ss5_p-201358859+pv-1+u-mqyaibnudxse7x7kpetr+v-xmvb3orduk6kpxfwbnwy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/POR7Jq"
    },
    {
      "title": "Men's Mexico National Team Hirving Lozano adidas Green 2024 Away Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-hirving-lozano-green-mexico-national-team-2024-away-replica-player-jersey_ss5_p-201388897+pv-1+u-pc4tofrtnzaczrhwdzqz+v-12vh9j91irpg2a5vemso.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1eYyZ"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Hirving Lozano</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.supersport.com/media/e2dcgfwj/hirving-lozano-220924-celebrates-g-1050.jpg?width=1920&quality=90&format=webp' 
            alt='Hirving Lozano' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>CCreator: Omar Vega 
| 
Credit: Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> July 30, 1995 (Mexico City, Mexico)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.75 m)</li>
            <li><strong>Current Team:</strong> San Diego FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Pachuca (2014–2017): 120 appearances, 31 goals</li>
                <li>PSV (2017–2019): 60 appearances, 34 goals</li>
                <li>Napoli (2019–2023): 120 appearances, 23 goals</li>
                <li>PSV (2023–2025): 33 appearances, 10 goals</li>
                <li>San Diego FC (2025–present): 0 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Hirving Lozano</h2>
          <p>
            Hirving Lozano, also known as "Chucky", is a highly skilled Mexican winger known for his pace, dribbling ability, and clinical finishing. He has played for top clubs in Europe, including PSV Eindhoven and Napoli, before moving to San Diego FC. Lozano has been a key player for the Mexican national team and is regarded as one of the best wingers in world football.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Hirving Lozano Merchandise</h1>
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

export default HirvingLozano;
