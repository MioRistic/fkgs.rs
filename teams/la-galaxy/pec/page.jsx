import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const GabrielPec = () => {
  const items = [
    {
      "title": "Youth LA Galaxy Gabriel Pec adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-gabriel-pec-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-201341070+pv-1+u-cft9avowikzdqdn9r0nf+v-dzyuyl9j1bu43kknfcym.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkazQ"
    },
    {
      "title": "Youth LA Galaxy Gabriel Pec adidas Navy 2025 RIZON Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-gabriel-pec-navy-la-galaxy-2025-rizon-replica-player-jersey_ss5_p-202841069+pv-1+u-pj3m2itofv9wxxxj2zpt+v-nhstzwlonyvimfohob1t.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9RkqO"
    },
    {
      "title": "Men's LA Galaxy Gabriel Pec adidas Green 2024 LA Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-gabriel-pec-green-la-galaxy-2024-la-kit-authentic-player-jersey_ss5_p-201341067+pv-1+u-u7gbonikos6mbtuhbquf+v-rupps7m6frx4p53pblgr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqj21D"
    },
    {
      "title": "Women's LA Galaxy Gabriel Pec adidas Navy 2025 RIZON Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "badge": "Most Popular in Women Jerseys",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/womens-adidas-gabriel-pec-navy-la-galaxy-2025-rizon-replica-player-jersey_ss5_p-202841068+pv-1+u-orfbkgot42zufobr8oxt+v-05xjgkgplgbwlnzquc94.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRb9aO"
    },
    {
      "title": "Women's LA Galaxy Gabriel Pec adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/womens-adidas-gabriel-pec-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-201341069+pv-1+u-ujmjgskxejpjk7rnwuyf+v-7qmofapong0zluvyvqnf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2mLP"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Gabriel Pec</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.vamofutebol.com/uploads/5/2024/12/GettyImages-2185864981-1140x760.jpg' 
            alt='Gabriel Pec' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Shaun Clark 
| 
Credit: Getty Images
Copyright: 2024 Shaun Clark</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Gabriel Fortes Chaves</li>
            <li><strong>Date of Birth:</strong> 11 February 2001 (Petrópolis, Brazil)</li>
            <li><strong>Position:</strong> Winger, attacking midfielder</li>
            <li><strong>Height:</strong> 1.74 m (5 ft 9 in)</li>
            <li><strong>Current Team:</strong> LA Galaxy</li>
            <li><strong>Youth Team:</strong> Vasco da Gama</li>
            <li><strong>Senior Career:</strong> Vasco da Gama, LA Galaxy</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Gabriel Pec: A Rising Star in MLS</h2>
          <p>
            Gabriel Pec is a dynamic Brazilian winger and attacking midfielder known for his creativity, dribbling, and goal-scoring ability. Having developed his skills at Vasco da Gama's renowned academy, Pec quickly made a name for himself in Brazilian football before making the leap to Major League Soccer with LA Galaxy.
          </p>
          <p>
            Since joining the Galaxy, Pec has continued to shine, becoming a fan favorite with his flair and decisive contributions on the field. With a bright future ahead, he is set to make a significant impact in MLS and beyond.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Gabriel Pec Merchandise</h1>
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

export default GabrielPec;
