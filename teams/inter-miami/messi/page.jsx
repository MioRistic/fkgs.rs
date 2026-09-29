import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
  "id": 1,
  "title": "Lionel Messi Extends Inter Miami Contract Through 2028",
  "author": "Mio Ristić",
  "date": "October 25, 2025",
  "excerpt": "Lionel Messi stays with Inter Miami CF until 2028, continuing his legendary MLS career. Read the full story and what to expect in Miami.",
  "imageUrl": "https://cyprus-mail.com/image/s1100x733/fill/webp/path/wp-content/uploads/2023/07/messi.jpg",
  "slug": "messi-inter-miami-extension"
},
 
];

const Messi = () => {
  const items = [
    { id: 1, title: "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202860048+u-90c1ap4gywaxy53ptq00+v-yujii65dkxwfdeedytbp.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/GKgZVr', price: '$194.99' },
    { id: 2, title: "Youth Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677367+u-hrow2y8rhvpwrddyelhp+v-dftko5xtuap5eeoanmxy.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/JK2m4r', price: '$109.99' },
    { id: 3, title: "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-authentic-player-jersey_ss5_p-202594033+u-knqnh7w92m4datnj7vqo+v-ouhd9owk3afqcevad5fn.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/o4Oy0n', price: '$194.99' },
    { id: 4, title: "Youth Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604870+u-mgihjk9ywffxfwjtkbrl+v-fn0trzdceyzwsnzaj1op.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/nXy2oo', price: '$109.99' },
    { id: 5, title: "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677369+u-q7pgp0gh0zui6ksxdfmy+v-tv9ine8f7ynydvoxqofb.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/2adWMg', price: '$129.99' },
    { id: 6, title: "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604868+u-wb8lncyovo25ie3w7gxq+v-68593kkmocwzvc55q9tq.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/2adWMg', price: '$129.99' },
    { id: 7, title: "Men's Inter Miami CF Lionel Messi adidas Aqua 2024 Archive Authentic Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-aqua-inter-miami-cf-2024-archive-authentic-jersey_ss5_p-201718913+u-wsqzu0wcriatez9xey7h+v-3wnoyn7wipn1tfxkry9z.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/N9b64v', price: '$129.99' },
    { id: 8, title: "Women's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/womens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677368+u-m2kf9ujhva77tepnux4c+v-jeopznh8m1bpu3weowcv.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/xLZNQ', price: '$129.99' },
    { id: 9, title: "Men's Inter Miami CF Lionel Messi adidas Pink 2024 2getherness Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-pink-inter-miami-cf-2024-2getherness-2024-2getherness-authentic-player-jersey_ss5_p-201189575+u-9kfkaf3zfug6vvnjhtfv+v-ilisv1besbmmekk2h8py.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/55nKQL', price: '$89.99' },
    { id: 10, title: "Men's Inter Miami CF Lionel Messi adidas Black 2024 La Noche Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2024-la-noche-replica-player-jersey_ss5_p-201141932+u-jxtq9fqkslstjtehu4iu+v-gafrtmumts55sro0vllg.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/gOGWqO', price: '$59.99' },
    { id: 11, title: "Men's Inter Miami CF Lionel Messi adidas Pink 2024 2getherness Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-pink-inter-miami-cf-2024-2getherness-replica-player-jersey_ss5_p-201141929+u-gvf4do2tnc53azskbwn8+v-euq3yy4duk9it86xolnx.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/BnP2Ox', price: '$49.99' },
    { id: 12, title: "Men's Inter Miami CF Lionel Messi Black Authentic Stack Name & Number T-Shirt", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-lionel-messi-black-inter-miami-cf-authentic-stack-name-and-number-t-shirt_ss5_p-202772322+u-ejgjhlhnzgtpxpyjqdnb+v-t89wvstyj4iybc5rkui3.png?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/nXy2Po', price: '$31.99' },
    { id: 13, title: "Lionel Messi adidas Black Samba Shoes", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/adidas-black-lionel-messi-samba-shoes_ss5_p-201671423+u-qwzjub0kvd9tqkpjrp0a+v-fguqmcpxilnyze1tcpji.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/bOVmPP', price: '$99.99' },
    { id: 14, title: "Women's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/womens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604869+u-jsto2kycr3ysqt1xpqzw+v-soep2ohlup1j2mkrxwou.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/OebmOz', price: '$129.99' },
    { id: 15, title: "Lionel Messi adidas Pink Samba Shoes", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/adidas-pink-lionel-messi-samba-shoes_ss5_p-201671422+u-lhwyj1nkz8psjh6kgnrz+v-ks9gqldyrkxaraxjqjb8.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/RGb6Za', price: '$99.99' },
    { id: 16, title: "Toddler Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Mini Kit", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/toddler-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-mini-kit_ss5_p-201718844+u-pba9ddfte1pnitsg4n6r+v-u4meiawv8v50wvlln0dr.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/N9b6Rv', price: '$74.99' },
    { id: 17, title: "Lionel Messi, Luis Suarez & Sergio Busquets Inter Miami CF Autographed Fanatics Authentic 2023 Black adidas Authentic Jersey - Front Signed", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-luis-suarez-and-sergio-busquets-inter-miami-cf-autographed-2023-black-adidas-authentic-jersey-front-signed_ss5_p-201638245+u-rgyywqbmr9jpngecyf86+v-pjmdejsdpofollnn72cr.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/YRNybm', price: '$5,999.99' },
    { id: 18, title: "Lionel Messi Inter Miami CF Autographed Fanatics Authentic adidas X Crazyfast.1 FG White Soccer Cleat - Left foot", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-inter-miami-cf-autographed-adidas-x-crazyfast1-fg-white-soccer-cleat-left-foot_ss5_p-200983379+pv-1+u-aqjjadorplwjgtbisqq6+v-uugvhlayqndwlkojnjee.jpg?_hv=2&w=900', link: 'https://mlsstore.i8h2.net/kOWV3z', price: '$4,499.99' },
    { id: 19, title: "Lionel Messi Inter Miami CF Autographed Fanatics Authentic Deluxe Framed Autographed 2022-23 Authentic Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-inter-miami-cf-autographed-deluxe-framed-autographed-2022-23-authentic-jersey_ss5_p-200917763+u-ddwjsul320crpyez85aq+v-i4whm64yv58pus0iddlx.jpg?_hv=2&w=340', link: 'http://mlsstore.i8h2.net/9LE2PW', price: '$4,949.99' },
    { id: 20, title: "Lionel Messi Inter Miami CF Autographed Fanatics Authentic 2022/23 Black adidas Authentic Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-inter-miami-cf-autographed-2022/23-black-adidas-authentic-jersey_ss5_p-200983420+pv-1+u-xjheuv0njvxkkqtramgs+v-8c1meuth12w3wa2wuabp.jpg?_hv=2&w=900', link: 'http://mlsstore.i8h2.net/MAbg1J', price: '$4,499.99' },
    { id: 21, title: "Lionel Messi, Luis Suarez & Sergio Busquets Inter Miami CF Autographed Fanatics Authentic 2024 adidas MLS", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-luis-suarez-and-sergio-busquets-inter-miami-cf-autographed-2024-adidas-mls-match-soccer-ball_ss5_p-201638269+u-pgg9ywbjxveinpoyfhyt+v-gslvivlyk9n5ebwioblq.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/jemOQv', price: '$5,999.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Lionel Messi</h1>
        
        {/* Messi Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://en.nogomania.com/GetFile.ashx?id=271175' 
            alt='Lionel Messi' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
          <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Carmen Mandato | Credit: Getty Images | Copyright: 2024 Getty Images</p>
          </div>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Lionel Andrés Messi</li>
            <li><strong>Nickname(s):</strong> La Pulga (The Flea)</li>
            <li><strong>Born:</strong> June 24, 1987 (Rosario, Argentina)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Inter Miami CF</li>
            <li><strong>Previous Clubs:</strong> Barcelona, PSG</li>
            <li><strong>Achievements:</strong> 7 Ballon d'Ors, 4 UEFA Champions League titles, Copa America 2021</li>
          </ul>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Messi</h2>
          <p>
            Lionel Messi is widely regarded as one of the greatest footballers of all time. His extraordinary dribbling, vision, and playmaking ability have earned him numerous accolades, including seven Ballon d'Or awards.
          </p>
          <p>
            Messi's journey began in Argentina and soared to international stardom with FC Barcelona, then PSG, before joining Inter Miami in MLS.
          </p>
        </div>
         {/* Blog Section */}
        <div className="bg-white py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                  <div className="relative w-full h-48">
                    <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-300"/>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-pink-600 transition duration-300">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.date}</p>
                    <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
                  Buy Now <FaShoppingCart className='inline ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>

       

      </div>
    </div>
  );
};

export default Messi;
