import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const WalkerZimmerman = () => {
  const items = [
    {
      "title": "Men's Nashville SC Walker Zimmerman adidas Navy 2025 The Heart of Nashville Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-walker-zimmerman-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-player-jersey_ss5_p-202842098+pv-1+u-rrpb3siqbikzvtebvotw+v-zvxygw5saqhx5ptg7lzf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKOZoB"
    },
    {
      "title": "Men's Nashville SC Walker Zimmerman adidas Black 2023 Man In Black Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-walker-zimmerman-black-nashville-sc-2023-man-in-black-kit-authentic-player-jersey_ss5_p-5350593+pv-1+u-6wqre3fpdz8lipmfbwgs+v-h3qavfuqiumou47c1wob.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmGXoM"
    },
    {
      "title": "Men's Nashville SC Walker Zimmerman adidas Black 2023 Man In Black Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-walker-zimmerman-black-nashville-sc-2023-man-in-black-kit-replica-player-jersey_pi5350000_altimages_ff_5350581-6ab1ba2f7705fff14d72alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxP2X7"
    },
    {
      "title": "Men's Nashville SC Walker Zimmerman adidas Navy 2025 The Heart Of Nashville Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-walker-zimmerman-navy-nashville-sc-2025-the-heart-of-nashville-kit-authentic-player-jersey_ss5_p-202842097+pv-1+u-nkwxwbbtwlhlklrlrhpj+v-b1mpitd6bxy814spwkzh.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6yngX3"
    },
    {
      "title": "Unsigned Nashville SC Walker Zimmerman Fanatics Authentic 10.5\" x 13\" 2020 MLS Season Defender of the Year Award Sublimated Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Plaques",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/walker-zimmerman-nashville-sc-unsigned-105-x-13-2020-mls-season-defender-of-the-year-award-sublimated-plaque_pi4138000_ff_4138486-7ef942401abfb3abddd3_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbyoq"
    },
    {
      "title": "Women's Nashville SC Walker Zimmerman adidas Black 2023 Man In Black Kit Replica Player Jersey",
      "price": "$69.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/womens-adidas-walker-zimmerman-black-nashville-sc-2023-man-in-black-kit-replica-player-jersey_pi5350000_altimages_ff_5350585-7a4ddc2236c48e98b351alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOk1q"
    },
    {
      "title": "Walker Zimmerman Nashville SC Fanatics Authentic 10.5\" x 13\" Homecoming Jersey Style Number 25 Sublimated Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Plaques",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/walker-zimmerman-nashville-sc-105-x-13-homecoming-jersey-style-number-25-sublimated-plaque_ss5_p-200541481+u-574flldmsyaijscrtc4n+v-4n8s7p5ovvk3bgvyl9hr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1eABZ"
    },
    {
      "title": "Youth Nashville SC Walker Zimmerman adidas Navy 2025 The Heart of Nashville Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/youth-adidas-walker-zimmerman-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-player-jersey_ss5_p-202842100+pv-1+u-sxxgoiqljlolawfsauzh+v-fzrilwtolaqufmvqllpm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yWOB"
    },
    {
      "title": "Youth Nashville SC Walker Zimmerman adidas Black 2023 Man In Black Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/youth-adidas-walker-zimmerman-black-nashville-sc-2023-man-in-black-kit-replica-player-jersey_pi5350000_altimages_ff_5350589-c294e186318ff55d271ealt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqWN0"
    },
    {
      "title": "Nashville SC Walker Zimmerman Fanatics Authentic 10.5\" x 13\" Sublimated Player Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Plaques",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/walker-zimmerman-nashville-sc-105-x-13-sublimated-player-plaque_pi4135000_ff_4135170-f8d0d32b0c1cf5e7d216_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnO2A4"
    },
    {
      "title": "Nashville SC Walker Zimmerman Fanatics Authentic 10.5\" x 13\" 2021 MLS Season Defender of the Year Award Sublimated Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Plaques",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/walker-zimmerman-nashville-sc-105-x-13-2021-mls-season-defender-of-the-year-award-sublimated-plaque_pi4619000_ff_4619199-e5fd46b8258424b679ed_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAGKn"
    },
    {
      "title": "Men's Nashville SC Walker Zimmerman adidas Yellow 2024 The 615 Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-walker-zimmerman-yellow-nashville-sc-2024-the-615-kit-replica-player-jersey_ss5_p-202855033+pv-1+u-jkizu8wdqja8trzk2sco+v-y4yr5ykcxzpbupfvdojy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOPmy6"
    },
    {
      "title": "Women's Nashville SC Walker Zimmerman adidas Navy 2025 The Heart of Nashville Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/womens-adidas-walker-zimmerman-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-player-jersey_ss5_p-202842099+pv-1+u-elhixhatjhutnidoyg79+v-97upetutdpetogw78lvl.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQZON"
    },
    {
      "title": "Men's USMNT Walker Zimmerman Homage Charcoal Jersey Tri-Blend T-Shirt",
      "price": "$18.99",
      "originalPrice": "$37.99",
      "category": "Men T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens-homage-walker-zimmerman-charcoal-usmnt-jersey-tri-blend-t-shirt_pi5108000_altimages_ff_5108872-8f1fe4262ce05b47f1bdalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRby0q"
    },
    {
      "title": "USMNT Walker Zimmerman Player Scarf",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Accessories",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/walker-zimmerman-usmnt-player-scarf_ss5_p-201543040+u-vupfoookzbdcxqjataxe+v-ynkyq5m0aetow1bow8wn.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzm2BO"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Walker Zimmerman</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju' 
            alt='Walker Zimmerman' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Brett Carlsen 
| 
Credit: Getty Images
Copyright: 2021 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Walker Dwain Zimmerman</li>
            <li><strong>Date of Birth:</strong> May 19, 1993 (Lawrenceville, Georgia, United States)</li>
            <li><strong>Position:</strong> Center-back</li>
            <li><strong>Height:</strong> 1.90 m (6 ft 3 in)</li>
            <li><strong>Current Team:</strong> Nashville SC</li>
            <li><strong>Youth Team:</strong> GSA Phoenix</li>
            <li><strong>College Career:</strong> Furman Paladins (39 apps, 11 goals)</li>
            <li><strong>Senior Career:</strong> FC Dallas, Los Angeles FC, Nashville SC</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Walker Zimmerman: The Rock in Defense</h2>
          <p>
            Walker Zimmerman is a dominant center-back who has established himself as a key player for both Nashville SC and the United States Men's National Team. Standing at 6'3", Zimmerman is known for his aerial ability, leadership at the back, and defensive prowess.
          </p>
          <p>
            His strong performances in both domestic and international competitions have earned him recognition as one of the best defenders in MLS, with numerous appearances for the national team, including participation in the 2022 FIFA World Cup.
          </p>
        </div>

      {/* Shop Section */}
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Walker Zimmerman Merchandise</h1>
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

export default WalkerZimmerman;
