import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const SebastianLletget = () => {
  const items = [
    {
      "title": "Camiseta réplica de jugador del FC Dallas Sebastian Lletget adidas azul marino 2024 After Burner para hombre",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-adidas-sebastian-lletget-navy-fc-dallas-2024-after-burner-replica-player-jersey_ss5_p-201205531+pv-1+u-okabwg2oluekfbkxwfov+v-nsc9ov3jixsptlnvpggr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnorj"
    },
    {
      "title": "FC Dal Sebastian Lletget FC Dallas Camiseta blanca autografiada número 8 usada en partidos de la temporada 2024 de la MLS - Talla M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/sebastian-lletget-fc-dallas-autographed-match-used-number-8-white-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202678622+pv-1+u-ujl0qnnfrh3ikezzqbfx+v-vhytct5nrujpgshi2xac.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19y56R"
    },
    {
      "title": "FC Dal Sebastian Lletget Camiseta roja #8 autografiada del FC Dallas usada en el partido de la temporada 2024 de la MLS - Talla M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/sebastian-lletget-fc-dallas-autographed-match-used-number-8-red-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202678650+pv-1+u-zu0mxgfmshsr5d9bn5zs+v-qhrlu8pwoetm0dhatfsb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6Ld2q"
    },
    {
      "title": "Camiseta de jugador réplica del FC Dallas Sebastian Lletget adidas blanca 2024 Burn Baby Burn para mujer",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/womens-adidas-sebastian-lletget-white-fc-dallas-2024-burn-baby-burn-replica-player-jersey_ss5_p-201205545+pv-1+u-jw8qpyyj9pkfr69l9s6d+v-8hljuywkqr6zy6qyzuck.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmGx6o"
    },
    {
      "title": "Camiseta réplica de jugador del FC Dallas Sebastian Lletget adidas azul marino 2024 After Burner para mujer",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "discount": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/womens-adidas-sebastian-lletget-navy-fc-dallas-2024-after-burner-replica-player-jersey_ss5_p-201205535+pv-1+u-tks7fo6d0icoyw9hhmoh+v-xgidtw6n6omwqvp97dbk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45eAb"
    },
    {
      "title": "Camiseta de jugador auténtica del FC Dallas Sebastian Lletget adidas azul marino 2024 After Burner para hombre",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Authentic Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-adidas-sebastian-lletget-navy-fc-dallas-2024-after-burner-authentic-player-jersey_ss5_p-201205527+pv-1+u-9nbbvakvgnuqopadj1px+v-jnargvspkktvmvhhbms3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPaWO"
    },
    {
      "title": "Camiseta de jugador auténtica del FC Dallas Sebastian Lletget adidas blanca 2024 Burn Baby Burn para hombre",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Authentic Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-adidas-sebastian-lletget-white-fc-dallas-2024-burn-baby-burn-authentic-player-jersey_ss5_p-201205541+pv-1+u-2odbjfb2ocryeiballa8+v-nnned0aaniyai7fca6vx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ynbvK"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Sebastian Lletget</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cloudfront-us-east-1.images.arcpublishing.com/dmn/5IRRAYDKIBHDPJUIDYYBVVEGQQ.jpg' 
            alt='Sebastian Lletget' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: John Dorton/ISI Photos 
| 
Credit: Getty Images
Copyright: 2022 John Dorton/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Sebastian Francisco Lletget</li>
            <li><strong>Born:</strong> September 3, 1992 (San Francisco, California, USA)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Current Team:</strong> FC Dallas</li>
            <li><strong>Previous Clubs:</strong> West Ham United, LA Galaxy, New England Revolution</li>
            <li><strong>International Career:</strong> USMNT (33 caps, 8 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Sebastian Lletget: A Dynamic Midfielder</h2>
          <p>
            Sebastian Lletget is an American professional soccer player known for his creativity and versatility in the midfield. After joining West Ham United at a young age, he made a name for himself in MLS with LA Galaxy, where he became a key player for several seasons.
          </p>
          <p>
            Lletget has represented the United States at various age levels and was an integral part of the USMNT, scoring key goals in qualifiers and international tournaments. In 2022, he joined FC Dallas, continuing to contribute to the team’s midfield as a leader and playmaker.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Sebastian Lletget Merchandise</h1>
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

export default SebastianLletget;
