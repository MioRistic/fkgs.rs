import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Busquets = () => {
  const items = [
    { id: 1, title: "Lionel Messi, Luis Suárez & Sergio Busquets Inter Miami CF Autographed Fanatics Authentic 2024 adidas MLS Match Soccer Ball", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-luis-suarez-and-sergio-busquets-inter-miami-cf-autographed-2024-adidas-mls-match-soccer-ball_ss5_p-201638269+u-pgg9ywbjxveinpoyfhyt+v-gslvivlyk9n5ebwioblq.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/4GE2DZ', price: '$5,999.99', status: 'Almost Gone!' },
    { id: 2, title: "Lionel Messi, Luis Suárez & Sergio Busquets Inter Miami CF Autographed Fanatics Authentic 2023 Black adidas Authentic Jersey - Front Signed", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-luis-suarez-and-sergio-busquets-inter-miami-cf-autographed-2023-black-adidas-authentic-jersey-front-signed_ss5_p-201638245+u-rgyywqbmr9jpngecyf86+v-pjmdejsdpofollnn72cr.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/N9bXWK', price: '$5,999.99', status: 'Almost Gone!' },
    { id: 3, title: "Lionel Messi, Luis Suárez & Sergio Busquets Inter Miami CF Autographed Fanatics Authentic Logo Soccer Ball", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-luis-suarez-and-sergio-busquets-inter-miami-cf-autographed-logo-soccer-ball_ss5_p-201638270+u-ysemxdertppf5c1ytq1t+v-1qjplhut6j1iowtwss9c.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/YRNKnj', price: '$5,999.99', status: 'Almost Gone!' },
    { id: 4, title: "Unisex Inter Miami CF Sergio Busquets Pink Player Adjustable Hat", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/unisex-sergio-busquets-pink-inter-miami-cf-player-adjustable-hat_ss5_p-201204727+u-mqd78j7lndgoxgqstppo+v-pynqlkamlhxzj3b2hwf8.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/RGbEmN', price: '$39.99', status: 'Ready To Ship' },
    { id: 5, title: "Sergio Busquets Inter Miami CF Fanatics Authentic 10.5\" x 13\" #5 Heart Beat Jersey Sublimated Plaque", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/sergio-busquets-inter-miami-cf-105-x-13-number-5-heart-beat-jersey-sublimated-plaque_ss5_p-200409942+u-8ihkv4rrxeyebxpq0bm7+v-1pmldr1r3foliaxnuyqd.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/K0zE4N', price: '$29.99' },
    { id: 6, title: "Sergio Busquets Inter Miami CF Facsimile Signature Fanatics Authentic Framed 11\" x 14\" Collage", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/sergio-busquets-inter-miami-cf-facsimile-signature-framed-11-x-14-collage_ss5_p-200424888+u-6u1p7qfchj5b4pjgvatc+v-kfg9wvrlv1uldykskbv9.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/2ad7y7', price: '$79.99' },
    { id: 7, title: "Men's Inter Miami CF Sergio Busquets adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/womens-adidas-sergio-busquets-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-202840982+u-c3v1fdpm9bonb1w7uwaz+v-5mue0wkpzclshc4njkol.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/jemaQP', price: '$134.99' },
    { id: 8, title: "Men's Inter Miami CF Sergio Busquets adidas Black 2025 The Fortitude Kit Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-sergio-busquets-black-inter-miami-cf-2024-la-noche-authentic-player-jersey_ss5_p-201145346+u-tykheedzar5lj5esf9sm+v-uxdir48g5obi39h6jyjx.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/XmNE25', price: '$194.99' },
    { id: 9, title: "Women's Inter Miami CF Sergio Busquets adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/womens-adidas-sergio-busquets-pink-inter-miami-cf-2024-2getherness-replica-player-jersey_ss5_p-201145340+u-kxiqzhn4yzwojkxthwll+v-qosii8yjqvo2waxw3261.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/N9bE2O', price: '$134.99' },
    { id: 10, title: "Youth Inter Miami CF Sergio Busquets adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-sergio-busquets-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-202840983+u-1b2os1shessuvvwdi8hn+v-s7czlxxg4hnwmxum53el.jpg?_hv=2&w=340', link: 'https://www.mlsstore.com/en/inter-miami-cf/youth-inter-miami-cf-sergio-busquets-adidas-light-pink-2025-euforia-replica-player-jersey/t-21259907+p-793380085944102+z-9-2938314684?_ref=p-SRP:m-GRID:i-r5c2:po-17', price: '$114.99' }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Sergio Busquets</h1>

        {/* Busquets Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.intermiami.news/uploads/52/2024/05/GettyImages-2153690433-1140x760.jpg' 
            alt='Sergio Busquets' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Simon M Bruty 
| 
Credit: Getty Images
Copyright: Simon Bruty</p>
          </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Sergio Busquets Burgos</li>
            <li><strong>Nickname(s):</strong> El Chino</li>
            <li><strong>Born:</strong> July 16, 1988 (Sabadell, Spain)</li>
            <li><strong>Position:</strong> Defensive Midfielder</li>
            <li><strong>Current Team:</strong> Inter Miami CF</li>
            <li><strong>Previous Clubs:</strong> Barcelona</li>
            <li><strong>Achievements:</strong> 3 La Liga titles, 1 FIFA World Cup, 2 UEFA Champions League titles</li>
            <li><strong>International Career:</strong> Spain National Team (2008 - 2022)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Busquets</h2>
          <p>
          Sergio Busquets is widely regarded as one of the best defensive midfielders of his generation. Known for his exceptional vision, passing accuracy, and positional intelligence, Busquets was the backbone of FC Barcelona and the Spanish national team for more than a decade.          </p>
          <p>
          A product of Barcelona's famed La Masia youth academy, Busquets has won numerous titles, including multiple La Liga titles, Champions League trophies, and the 2010 FIFA World Cup with Spain. After leaving Barcelona in 2023, he joined Inter Miami in Major League Soccer, continuing to showcase his leadership and skill on the field.

Busquets’ impact on football history is undeniable, as he remains celebrated as one of the greatest midfielders the game has ever seen.







          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Busquets's Merchandise</h1>
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

export default Busquets;

