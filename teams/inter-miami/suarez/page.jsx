import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Suarez = () => {
  const items = [
    { id: 1, title: "Lionel Messi, Luis Suarez & Sergio Busquets Inter Miami CF Autographed Fanatics Authentic 2024 adidas MLS Match Soccer Ball", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-luis-suarez-and-sergio-busquets-inter-miami-cf-autographed-2024-adidas-mls-match-soccer-ball_ss5_p-201638269+u-pgg9ywbjxveinpoyfhyt+v-gslvivlyk9n5ebwioblq.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/4GE2DZ', price: '$5,999.99' },
    { id: 2, title: "Lionel Messi, Luis Suarez & Sergio Busquets Inter Miami CF Autographed Fanatics Authentic 2023 Black adidas Authentic Jersey - Front Signed", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-luis-suarez-and-sergio-busquets-inter-miami-cf-autographed-2023-black-adidas-authentic-jersey-front-signed_ss5_p-201638245+u-rgyywqbmr9jpngecyf86+v-pjmdejsdpofollnn72cr.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/N9bXWK', price: '$5,999.99' },
    { id: 3, title: "Inter Miami CF Luis Suárez Black Team Authentic Player Name & Number Pullover Hoodie", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-luis-su%C3%A1rez-black-inter-miami-cf-team-authentic-player-name-and-number-t-shirt_ss5_p-201191282+u-liwuaxq3cp6bc5xhocqc+v-my1kg55mqc86ona0qjxv.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/yqkWA2', price: '$74.99' },
    { id: 4, title: "Youth Inter Miami CF Luis Suárez adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-luis-su%C3%A1rez-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-202595542+u-z1unqlweypwxasyyjpjl+v-m0yundankywzst5alehh.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/MAbgzK', price: '$114.99' },
    { id: 5, title: "Men's Inter Miami CF Luis Suarez adidas Black 2025 The Fortitude Kit Replica Player Jersey Men's", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-luis-suarez-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-202595534+u-uzrf6bpveoidjzydgbjb+v-mjxuin81oxhizcrecdld.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/K0zgmx', price: '$134.99' },
    { id: 6, title: "Men's Inter Miami CF Luis Suárez Black Team Authentic Player Name & Number T-Shirt", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-luis-su%C3%A1rez-black-inter-miami-cf-team-authentic-player-name-and-number-pullover-hoodie_ss5_p-201194647+u-ren6haanrhtezfpu5ite+v-hkrp1rzgywjgas8tvtsf.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/yqkWA2', price: '$39.99' },
    // { id: 7, title: "Men's Inter Miami CF Luis Suárez White Team Authentic Player Name & Number T-Shirt", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-luis-su%C3%A1rez-white-inter-miami-cf-team-authentic-player-name-and-number-t-shirt_ss5_p-201229722+u-qzutwuy1p90hyequpmuj+v-2vx5st5whfw9zzpcxjwy.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/mOGNqX', price: '$39.99' },
    { id: 8, title: "Unisex Inter Miami CF Luis Suárez Black Player Adjustable Hat", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/womens-luis-su%C3%A1rez-white-inter-miami-cf-team-authentic-player-name-and-number-v-neck-t-shirt_ss5_p-201229724+pv-1+u-chipig8gedy7ritespfi+v-ih2aw0tysfgwutjqoqod.jpg?_hv=2&w=900', link: 'http://mlsstore.i8h2.net/qzyV9y', price: '$39.99' },
    { id: 9, title: "Women's Inter Miami CF Luis Suárez White Team Authentic Player Name & Number V-Neck T-Shirt", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/unisex-luis-su%C3%A1rez-black-inter-miami-cf-player-adjustable-hat_ss5_p-201204704+u-wzf3cmc19u0obl5087iy+v-7x1aafhl3ghn1lqlatfb.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/qzyV9y', price: '$39.99' }
];


  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Luis Suárez</h1>

        {/* Suarez Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://en.nogomania.com/GetFile.ashx?id=259742' 
            alt='Luis Suárez' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
            style={{ objectPosition: 'center 20%' }} 
          />
              <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Hector Vivas 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
          </div>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Luis Alberto Suárez Díaz</li>
            <li><strong>Nickname(s):</strong> El Pistolero</li>
            <li><strong>Born:</strong> January 24, 1987 (Salto, Uruguay)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Inter Miami (formerly Gremio, Nacional, Atlético Madrid, FC Barcelona, Liverpool, Ajax, Groningam)</li>
            <li><strong>Achievements:</strong> 3 La Liga titles, 1 Copa América, Golden Boot Winner</li>
            <li><strong>International Career:</strong> Uruguay National Team (2007 - 2024)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Suárez</h2>
          <p>
          Luis Suárez is known for his goal-scoring prowess, work ethic, and often controversial style of play. Widely regarded as one of the best strikers in the world, his illustrious career spans across some of the top clubs in Europe and beyond.

Starting his professional career in Uruguay, Suárez later moved to Europe, where he made a name for himself at Ajax, Liverpool, and then Barcelona. After leaving Europe, he continued his career at Atlético Madrid and later at Grêmio. Currently, Suárez plays for Inter Miami in Major League Soccer.
          </p>
          <p>
          While no longer an active player for the Uruguay national team, Suárez’s legacy with "La Celeste" remains significant, marked by his leadership, determination, and unforgettable moments on the international stage.
          </p>
        </div>

        {/* Shop Section */}
               <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Messi's Merchandise</h1>
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

export default Suarez;
