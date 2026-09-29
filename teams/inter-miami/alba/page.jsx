import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Alba = () => {
  const items = [
    { id: 1, title: "Men's Inter Miami CF Jordi Alba adidas Light Pink 2025 Euforia Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202840976+u-9qcrkn9z7kiyypf2qimu+v-zyi6pyougmzvbg81yde8.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/09PzXL', price: '$194.99' },
    { id: 2, title: "Men's Inter Miami CF Jordi Alba Ramos adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-ramos-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-202595535+u-qiqkrfwm8il3rmpvrjsq+v-lluk1njoqzyhpqtv19lg.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/jema2b', price: '$134.99' },
    { id: 3, title: "Men's Inter Miami CF Jordi Alba Ramos adidas Black 2024 La Noche Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-ramos-black-inter-miami-cf-2024-la-noche-replica-player-jersey_ss5_p-201164854+u-mhe7kfuypznav9ziee21+v-z2hqkihwumhne0ploaob.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/55nzxo', price: '$134.99' },
    { id: 4, title: "Jordi Alba Ramos Inter Miami CF Fanatics Authentic 10.5\" x 13\" Sublimated Player Plaque", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/jordi-alba-ramos-inter-miami-cf-105-x-13-sublimated-player-plaque_ss5_p-200454053+u-ml0eb3na9cdeftvtsove+v-sybpxnj3t8q7zxfwrexh.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/4GEMML', price: '$29.99' },
    { id: 5, title: "Men's Inter Miami CF Jordi Alba adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-202840977+u-mxq0doaj2w3qlop19ny3+v-53xzevjfrsougqqouvev.jpg?_hv=2&w=340', link: 'https://www.mlsstore.com/en/inter-miami-cf/mens-inter-miami-cf-jordi-alba-adidas-light-pink-2025-euforia-replica-player-jersey/t-10924463+p-685502089344061+z-9-3847563829?_ref=p-SRP:m-GRID:i-r1c1:po-4', price: '$134.99' },
    { id: 6, title: "Men's Inter Miami CF Jordi Alba Ramos adidas Black 2023 La Noche Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-ramos-black-inter-miami-cf-2023-la-noche-replica-player-jersey_ss5_p-200496239+u-umteeuqktomncbzaxlq5+v-chxtl31kgtubjbwrm3lg.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/vPVggA', price: '$124.99' },
    { id: 7, title: "Inter Miami CF Jordi Alba Ramos Signables 2024 Signature Sports Collectible", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/signables-jordi-alba-ramos-inter-miami-cf-2024-signature-sports-collectible_ss5_p-201831675+u-pqg8crep5naolendtrzt+v-9yillmlxypsibqkzcunc.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/BnPYV4', price: '$24.99', status: 'Ready To Ship' },
    { id: 8, title: "Men's Inter Miami CF Jordi Alba Ramos adidas Pink 2024 2getherness Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-ramos-pink-inter-miami-cf-2024-2getherness-replica-player-jersey_ss5_p-201164850+u-bqyng3vcfdsdbqydjnpb+v-9zm8pdsxgq9i469nvg5d.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/WyNPvn', price: '$134.99' },
    { id: 9, title: "Men's Inter Miami CF Jordi Alba Ramos adidas Black 2024 La Noche Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-ramos-black-inter-miami-cf-2024-la-noche-authentic-player-jersey_ss5_p-201164853+u-ncmhlp7hno0gecjuxmlv+v-v9c4ejht65d0jqexcc4y.jpg?_hv=2&w=340', link: 'mlsstore.i8h2.net/09PBML', price: '$194.99' },
    { id: 10, title: "Men's Inter Miami CF Jordi Alba Ramos adidas Black 2025 The Fortitude Kit Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-ramos-black-inter-miami-cf-2025-the-fortitude-kit-authentic-player-jersey_ss5_p-202595531+u-oxzo4l3l1r5zq3z9bxi2+v-fmgsx0wxuzmlcfl9ob2z.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/09PBML', price: '$194.99' },
    { id: 11, title: "Jordi Alba Ramos Inter Miami CF Fanatics Authentic 10.5\" x 13\" Heart Beat Jersey Style #18 Sublimated Plaque", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/jordi-alba-ramos-inter-miami-cf-105-x-13-heart-beat-jersey-style-number-18-sublimated-plaque_ss5_p-200429877+u-gvxomj5e0pllc5xngu80+v-fh0ni73w0uwjjtmiki0u.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/dOGqvy', price: '$29.99' },
    { id: 12, title: "Women's Inter Miami CF Jordi Alba adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/womens-adidas-jordi-alba-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-202840978+u-qqpdejjbzl0jchnychjg+v-wogp3zrw2loyemsuak44.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/N9bYJN', price: '$134.99', status: 'Almost Gone!' },
    { id: 13, title: "Men's Inter Miami CF Jordi Alba Ramos adidas Pink 2024 2getherness Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-jordi-alba-ramos-pink-inter-miami-cf-2024-2getherness-authentic-player-jersey_ss5_p-201164849+u-4w85pjawdsrltoruga8p+v-o8lzg38iuusrqpcztc9a.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/MAbYVN', price: '$194.99' }
];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Jordi Alba</h1>

        {/* Alba Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2181071294-750x500.jpg' 
            alt='Jordi Alba' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Rich Storry | Credit: Getty Images | Copyright: 2024 Getty Images</p>
          </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Jordi Alba Ramos</li>
            <li><strong>Nickname(s):</strong> N/A</li>
            <li><strong>Born:</strong> March 21, 1989 (L'Hospitalet de Llobregat, Spain)</li>
            <li><strong>Position:</strong> Left-back</li>
            <li><strong>Current Team:</strong> Inter Miami</li>
            <li><strong>Previous Clubs:</strong> Barcelona, Valencia</li>
            <li><strong>Achievements:</strong> 5 La Liga titles, 1 UEFA Champions League title, 1 FIFA World Cup, 2 UEFA European Championship titles</li>
            <li><strong>International Career:</strong> Spain National Team (2011 - present)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Alba</h2>
          <p>
          Jordi Alba is widely regarded as one of the most consistent left-backs in world football. Known for his blistering pace, attacking ability, and exceptional crossing, Alba was an integral part of Barcelona's success for over a decade.
          </p>
          <p>
          Having started his career at Valencia, he returned to Barcelona in 2012, where he won numerous titles, including multiple La Liga and UEFA Champions League trophies. On the international stage, Alba achieved success with Spain, winning the 2012 UEFA European Championship and being part of the squad during their 2010 FIFA World Cup triumph.

In 2023, Alba joined Inter Miami in Major League Soccer, continuing his career alongside former Barcelona teammates and contributing his experience and skill to the team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Alba's Merchandise</h1>
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

export default Alba;
