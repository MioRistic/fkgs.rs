import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DenisBouanga = () => {
  const items = [
    {
      "title": "Men's LAFC Denis Bouanga adidas Black 2024 Primary Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-denis-bouanga-black-lafc-2024-primary-authentic-player-jersey_ss5_p-202853328+pv-1+u-uu0lmlqccq3shxfanjuz+v-p9ukabdneohvl3esfty1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9aKN"
    },
    {
      "title": "Men's LAFC Denis Bouanga adidas White 2025 Secondary Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-denis-bouanga-white-lafc-2025-secondary-replica-player-jersey_ss5_p-202891354+pv-1+u-o5cokqq8v4j1gynndwee+v-u6809lfaeb5lt133isti.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAN93"
    },
    {
      "title": "Youth LAFC Denis Bouanga adidas White 2025 Secondary Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/youth-adidas-denis-bouanga-white-lafc-2025-secondary-replica-player-jersey_ss5_p-202891362+pv-1+u-icp6rdljreiaoigtfyx3+v-hytil8e89dc5aurvnrfz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45XKm"
    },
    {
      "title": "LAFC Denis Bouanga Fanatics Authentic 10.5\" x 13\" Sublimated Player Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Collectibles",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/denis-bouanga-lafc-105-x-13-sublimated-player-plaque_pi5212000_ff_5212879-1e2910e714e25ad0e3ea_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anGNQ"
    },
    {
      "title": "Women's LAFC Denis Bouanga adidas White 2025 Secondary Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens-adidas-denis-bouanga-white-lafc-2025-secondary-replica-player-jersey_ss5_p-202891358+pv-1+u-rzch0mlijxq7ny700tbr+v-ipeswghsp5djgbimveb1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQnL0"
    },
    {
      "title": "Men's LAFC Denis Bouanga adidas White 2025 Secondary Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-denis-bouanga-white-lafc-2025-secondary-authentic-player-jersey_ss5_p-202891350+pv-1+u-vbf0j6dhsrdpdqbbc4fr+v-mpncvoawmxguneevgypa.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKO0NL"
    },
    {
      "title": "Men's LAFC Denis Bouanga adidas Tan 2024 Archive Authentic Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-denis-bouanga-tan-lafc-2024-archive-authentic-jersey_ss5_p-201718924+pv-1+u-1fcwirwlx62610j7zrnu+v-1ilrql92qsw44umhrjjp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6LxAk"
    },
    {
      "title": "Women's LAFC Denis Bouanga adidas Black 2024 Primary Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens-adidas-denis-bouanga-black-lafc-2024-primary-replica-player-jersey_ss5_p-202853330+u-5mbkq9ebwwbtmmoneqza+v-vsdr211vgyjch2uugh79.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/BnOzMq"
    },
    {
      "title": "Men's LAFC Denis Bouanga adidas Black 2024 Primary Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-denis-bouanga-black-lafc-2024-primary-replica-player-jersey_ss5_p-202853329+pv-1+u-4tohvuj5sw60sqbqhgef+v-7grrq5ju4mtcpl3xqb2d.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLzd3"
    },
    {
      "title": "Men's LAFC Denis Bouanga 500 Level Black Celebration Pullover Crewneck Sweatshirt",
      "price": "$64.99",
      "originalPrice": "$64.99",
      "category": "Men Sweatshirts",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-500-level-denis-bouanga-black-lafc-celebration-pullover-crewneck-sweatshirt_ss5_p-201462918+u-lfmexgp6hprhg2koicwq+v-zapbcuzotym0mi8p1qbw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyObx2"
    },
    {
      "title": "Men's LAFC Denis Bouanga adidas Green 2023 Smokescreen Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-denis-bouanga-green-lafc-2023-smokescreen-replica-player-jersey_ss5_p-5349959+pv-1+u-uzwvrnuqeehxoy39k4s1+v-hpotdshazttrg61vao4y.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yMJ2"
    },
    {
      "title": "Women's LAFC Denis Bouanga adidas Green 2023 Smokescreen Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens-adidas-denis-bouanga-green-lafc-2023-smokescreen-replica-player-jersey_pi5349000_altimages_ff_5349963-05874e0e9cea6ed7fde1alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjxgR"
    },
    {
      "title": "LAFC Autographed Fanatics Authentic Match-Used adidas Soccer Ball from the 2024 MLS Season with 24 Signatures - #1",
      "price": "$499.99",
      "originalPrice": "$499.99",
      "category": "Collectibles",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/lafc-autographed-match-used-adidas-soccer-ball-from-the-2024-mls-season-with-24-signatures-number-1_ss5_p-202986525+pv-1+u-5fehbyxu2vcsqcbdjzmm+v-yrumkqaq5u7pr9emrsqb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAbPO"
    },
    {
      "title": "LAFC Autographed Fanatics Authentic Match-Used adidas Soccer Ball from the 2024 MLS Season with 24 Signatures - #2",
      "price": "$499.99",
      "originalPrice": "$499.99",
      "category": "Collectibles",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/lafc-autographed-match-used-adidas-soccer-ball-from-the-2024-mls-season-with-24-signatures-number-2_ss5_p-202986524+pv-1+u-qun7zzgve7if0xp72rgj+v-eqjjm625untlq8fxyiog.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45XMO"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Denis Bouanga</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.rangersnews.uk/uploads/24/2023/03/GettyImages-1246857078-1140x760.jpg' 
            alt='Denis Bouanga' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Matthew Ashton - AMA 
| 
Credit: Getty Images
Copyright: 2023 AMA Sports Photo Agency</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Denis Athanase Bouanga</li>
            <li><strong>Date of Birth:</strong> 11 November 1994 (Le Mans, France)</li>
            <li><strong>Position:</strong> Winger, Forward</li>
            <li><strong>Height:</strong> 1.76 m (5 ft 9 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> SO Maine, Le Mans</li>
            <li><strong>Senior Teams:</strong> AS Mulsanne-Téloché, Lorient B, Lorient, Strasbourg (loan), Tours (loan), Nîmes, Saint-Étienne, Los Angeles FC</li>
            <li><strong>International Career:</strong> Gabon (45 caps, 11 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Denis Bouanga: A Dynamic Forward</h2>
          <p>
            Denis Bouanga is a versatile winger and forward known for his pace, technical skills, and goal-scoring ability. With a career spanning across top leagues in France and the United States, he has consistently been a key player for his teams.
          </p>
          <p>
            Bouanga has been a standout player for Los Angeles FC in Major League Soccer, where he has established himself as a prolific scorer. On the international stage, he represents Gabon and has been a crucial part of their national team setup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Denis Bouanga Merchandise</h1>
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

export default DenisBouanga;
