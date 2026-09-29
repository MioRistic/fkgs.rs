import React from 'react';

const JoaoKlauss = () => {
  const items = [
    {
      "title": "João Klauss St. Louis City SC Fanatics Authentic 10.5\" x 13\" City Jersey Style Number 9 Sublimated Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Collectibles",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/jo%C3%A3o-klauss-st-louis-city-sc-105-x-13-city-jersey-style-number-9-sublimated-plaque_ss5_p-200599745+u-sqcfmr8zb9zzu5ha8oru+v-rzntsm5uadmqg1zyuxmy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOoaj"
    },
    {
      "title": "Women's St. Louis City SC João Klauss adidas White 2024 The Confluence Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/womens-adidas-jo%C3%A3o-klauss-white-st-louis-city-sc-2024-the-confluence-kit-replica-player-jersey_ss5_p-201206436+pv-1+u-cbqsvmye6adxz0snjukq+v-6iek9421vahsp5jm6eio.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLM1Q"
    },
    {
      "title": "Youth St. Louis City SC João Klauss adidas White 2024 The Confluence Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "availability": "low stock",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/youth-adidas-jo%C3%A3o-klauss-white-st-louis-city-sc-2024-the-confluence-kit-replica-player-jersey_ss5_p-201206439+pv-1+u-6ufp7kscicr1zphqf3bv+v-vov6bd7klssfo0kpowug.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORxqz"
    },
    {
      "title": "Men's St. Louis City SC João Klauss Gray Authentic Stack Name & Number T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-jo%C3%A3o-klauss-gray-st-louis-city-sc-authentic-stack-name-and-number-t-shirt_ss5_p-202772335+pv-1+u-8ow4ejnxa4srjwgsfmoz+v-uu5q70ehteoq8d7f3vjj.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yrBj"
    },
    {
      "title": "Men's St. Louis City SC João Klauss adidas Red 2023 The Spirit Kit Authentic Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-jo%C3%A3o-klauss-red-st-louis-city-sc-2023-the-spirit-kit-authentic-jersey_pi5351000_altimages_ff_5351492-fff0c5b0430ef354dc9falt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrMq5"
    },
    {
      "title": "Men's St. Louis City SC João Klauss adidas White 2024 The Confluence Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-jo%C3%A3o-klauss-white-st-louis-city-sc-2024-the-confluence-kit-authentic-player-jersey_ss5_p-201206430+pv-1+u-vv2tqjyxdmgzi2qtwob5+v-l2f0l1ko7wcqxl78m02w.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjADxA"
    },
    {
      "title": "Women's St. Louis City SC João Klauss adidas Red 2025 Forever CITY Red Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/womens-adidas-jo%C3%A3o-klauss-red-st-louis-city-sc-2025-forever-city-red-replica-player-jersey_ss5_p-202843083+pv-1+u-ubo5rtsma6chb3t6aefc+v-0klwlbcpzllwxgys717o.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnkBy"
    },
    {
      "title": "Men's St. Louis City SC João Klauss adidas Red 2023 CITY Kit Replica Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-jo%C3%A3o-klauss-red-st-louis-city-sc-2023-city-kit-replica-jersey_pi5351000_altimages_ff_5351468-e48d7317053986d5da15alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQbj5"
    },
    {
      "title": "João Klauss St. Louis City SC Fanatics Authentic Framed 16\" x 20\" Stars of the Game Collage - Facsimile Signature",
      "price": "$89.99",
      "originalPrice": "$89.99",
      "category": "Collectibles",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/jo%C3%A3o-klauss-st-louis-city-sc-framed-16-x-20-stars-of-the-game-collage-facsimile-signature_ss5_p-200424878+u-v6i4l25nckqqaqyd3zor+v-ef7hqgtqdizs7sugkkww.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORxqY"
    },
    {
      "title": "Women's St. Louis City SC João Klauss adidas Red 2023 CITY Kit Replica Jersey",
      "price": "$69.99",
      "originalPrice": "$134.99",
      "category": "Women's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/womens-adidas-jo%C3%A3o-klauss-red-st-louis-city-sc-2023-city-kit-replica-jersey_pi5351000_altimages_ff_5351480-a5b153f43ffd9eb93880alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yrBL"
    },
    {
      "title": "Youth St. Louis City SC João Klauss adidas Red 2025 Forever CITY Red Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/youth-adidas-jo%C3%A3o-klauss-red-st-louis-city-sc-2025-forever-city-red-replica-player-jersey_ss5_p-202843084+pv-1+u-yml2xj9czxkzcumn8ko7+v-5bf5trjyuxgtbekpharu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO96PN"
    },
    {
      "title": "Unisex St. Louis City SC João Klauss Navy Player Adjustable Hat",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Hats",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/unisex-jo%C3%A3o-klauss-navy-st-louis-city-sc-player-adjustable-hat_ss5_p-201204703+pv-1+u-fmwyczwn0kjdpfoc13lh+v-gzc6xjsos8cjucblsm6f.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1ezxj"
    },
    {
      "title": "Men's St. Louis City SC João Klauss adidas White 2024 The Confluence Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-jo%C3%A3o-klauss-white-st-louis-city-sc-2024-the-confluence-kit-replica-player-jersey_ss5_p-201206433+pv-1+u-4uzwtgfflcaafq0jez8l+v-kgzbyxnvyfzhhuvtttyy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjgZZ"
    },
    {
      "title": "Men's St. Louis City SC João Klauss adidas Gray 2023 The Spirit Kit Replica Jersey",
      "price": "$124.99",
      "originalPrice": "$124.99",
      "category": "Men's Jerseys",
      "availability": "low stock",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-jo%C3%A3o-klauss-gray-st-louis-city-sc-2023-the-spirit-kit-replica-jersey_pi5351000_altimages_ff_5351472-14ebabf9fb38bb24fd5aalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnZY1"
    },
    {
      "title": "Men's St. Louis City SC João Klauss adidas Red 2025 Forever CITY Red Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-jo%C3%A3o-klauss-red-st-louis-city-sc-2025-forever-city-red-replica-player-jersey_ss5_p-202843082+pv-1+u-vk6xibigu0rwjqqxtgrs+v-ggcpwphoeqz7vgahqxrx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKOWYk"
    },
    {
      "title": "Men's St. Louis City SC João Klauss adidas Red 2025 Forever CITY Red Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-jo%C3%A3o-klauss-red-st-louis-city-sc-2025-forever-city-red-authentic-player-jersey_ss5_p-202843081+pv-1+u-uqdoal3qus2gzfybk4ew+v-hxtugxfzd2j39s4vowog.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yxKd"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>João Klauss</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.goal.com/images/v3/getty-145494572/crop/MM5DCMZWGY5DONRYHJXG653FHIYDUMJVGA======/GettyImages-145494572.jpg?auto=webp&format=pjpg&width=3840&quality=60' 
            alt='João Klauss' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: AFP 
| 
Credit: AFP via Getty Images
Copyright: 2012 AFP</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 1, 1997 (Criciúma, Brazil)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 6 ft 3 in (1.90 m)</li>
            <li><strong>Current Team:</strong> St. Louis City</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>TSG Hoffenheim II (2017–2020): 24 appearances, 5 goals</li>
                <li>HJK (2018, loan): 33 appearances, 21 goals</li>
                <li>LASK (2019–2020, loan): 42 appearances, 15 goals</li>
                <li>TSG Hoffenheim (2020–2022): 4 appearances, 0 goals</li>
                <li>Standard Liège (2021–2022, loan): 33 appearances, 7 goals</li>
                <li>Sint-Truiden (2022, loan): 8 appearances, 2 goals</li>
                <li>St. Louis City 2 (2022): 4 appearances, 4 goals</li>
                <li>St. Louis City (2023–present): 46 appearances, 15 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About João Klauss</h2>
          <p>
            João Klauss de Mello, known simply as João Klauss, is a Brazilian professional footballer who plays as a forward for St. Louis City in Major League Soccer (MLS). Klauss began his career in Brazil, playing for top clubs such as Internacional, Juventude, and Grêmio. He later moved to Europe, where he had loan spells at HJK, LASK, and Standard Liège, among others. Known for his physical presence and goal-scoring ability, Klauss made his mark in MLS with St. Louis City, becoming an important player in their attacking lineup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop João Klauss Merchandise</h1>
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

export default JoaoKlauss;
