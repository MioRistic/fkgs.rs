import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const RiquiPuig = () => {
  const items = [
    {
      "title": "Youth LA Galaxy Riqui Puig adidas Navy 2025 RIZON Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "badge": "Most Popular in Kids Jerseys",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-riqui-puig-navy-la-galaxy-2025-rizon-replica-player-jersey_ss5_p-202841065+pv-1+u-xzrl7frrodvxmndrngvb+v-zrqdofyivwkuotd5i1fu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOj5KD"
    },
    {
      "title": "Men's LA Galaxy Riqui Puig Navy Authentic Stack Name & Number T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "T-Shirts",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-riqui-puig-navy-la-galaxy-authentic-stack-name-and-number-t-shirt_ss5_p-202772324+pv-1+u-mho0pevtzhwphxkzw7fo+v-uwdop12sy0kczhpb5gmu.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrkGk"
    },
    {
      "title": "Youth LA Galaxy Riqui Puig adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-riqui-puig-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-201285140+pv-1+u-y0l4tqdsnhmlhax8kmpl+v-gaxfnif4fprhufytfbhw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLQPG"
    },
    {
      "title": "Men's LA Galaxy Riqui Puig adidas Green 2024 LA Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-riqui-puig-green-la-galaxy-2024-la-kit-authentic-player-jersey_ss5_p-201285137+pv-1+u-xnmnkttxlsf0y7o1ngdi+v-to8sxegt0rbzr1qyr7r0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO90qM"
    },
    {
      "title": "Riqui Puig LA Galaxy Fanatics Authentic 10.5\" X 13\" Sublimated Player Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Memorabilia",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/riqui-puig-la-galaxy-105-x-13-sublimated-player-plaque_ss5_p-200139847+u-qbzuuwseviqrjxjzsiyc+v-iwh9famyyioknvuvkiy5.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPNVm"
    },
    {
      "title": "Women's LA Galaxy Riqui Puig adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/womens-adidas-riqui-puig-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-201285139+pv-1+u-j7pudmrdizngvlpv4be7+v-kl2ejihqfkb2yvkd8ul7.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yZN3"
    },
    {
      "title": "Riqui Puig LA Galaxy Fanatics Authentic Framed 16\" x 20\" Stars of the Game Collage - Facsimile Signature",
      "price": "$89.99",
      "originalPrice": "$89.99",
      "category": "Memorabilia",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/riqui-puig-la-galaxy-framed-16-x-20-stars-of-the-game-collage-facsimile-signature_ss5_p-200289366+u-2khzbxydzdumtcpcgxyy+v-ndl5kc4acabypius7wmv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOKNX"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Riqui Puig</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.lagalaxy.news/uploads/54/2023/08/GettyImages-1499684145-1920x1280.jpg' 
            alt='Riqui Puig' 
            style={{ objectPosition: 'center 30%' }} 
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
            <li><strong>Full Name:</strong> Ricard Puig Martí</li>
            <li><strong>Date of Birth:</strong> 13 August 1999 (Matadepera, Spain)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 1.69 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> LA Galaxy</li>
            <li><strong>Youth Team:</strong> Jàbac Terrassa, Barcelona</li>
            <li><strong>Senior Career:</strong> Barcelona, LA Galaxy</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Riqui Puig: Barcelona to LA Galaxy</h2>
          <p>
            Riqui Puig is a talented Spanish midfielder known for his skillful dribbling and vision on the field. After rising through the ranks at FC Barcelona, Puig made a name for himself with his dynamic playmaking ability. 
          </p>
          <p>
            In 2022, Puig moved to LA Galaxy, where he has quickly become a key player in the midfield. With his technical abilities and flair, Puig continues to impress in Major League Soccer and is considered one of the brightest young stars in the league.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Riqui Puig Merchandise</h1>
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

export default RiquiPuig;
