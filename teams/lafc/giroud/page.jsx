import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const OlivierGiroud = () => {
  const items = [
    {
      "title": "Women's LAFC Olivier Giroud adidas Black 2024 Primary Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens-adidas-olivier-giroud-black-lafc-2024-primary-replica-player-jersey_ss5_p-201684693+pv-1+u-cwm7p49e8jfkbsysqogy+v-uutvmmclczyege29j3uc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbqMP"
    },
    {
      "title": "Men's LAFC Olivier Giroud adidas White 2025 Secondary Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-olivier-giroud-white-lafc-2025-secondary-replica-player-jersey_ss5_p-202891353+pv-1+u-t2wp6jbduj70ifa1zhcq+v-nptxogf0yl78pnsvsdgw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjXPM"
    },
    {
      "title": "Men's LAFC Olivier Giroud Black Authentic Stack Name & Number T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men T-Shirts",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-olivier-giroud-black-lafc-authentic-stack-name-and-number-t-shirt_ss5_p-202772326+pv-1+u-2h3ohjir8ogyx2lohjpr+v-laoahttbc2bx98sefkt1.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyObv2"
    },
    {
      "title": "Men's LAFC Olivier Giroud adidas White 2025 Secondary Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-olivier-giroud-white-lafc-2025-secondary-authentic-player-jersey_ss5_p-202891349+pv-1+u-gqjhfwayggeertxczgtn+v-jakaibq4kvimd2ycrs4v.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOx7a"
    },
    {
      "title": "Men's LAFC Olivier Giroud adidas Black 2024 Primary Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-olivier-giroud-black-lafc-2024-primary-replica-player-jersey_ss5_p-201684692+pv-1+u-nc0zfynjukhnb4reitux+v-mzjxw8k4xwituvnvlxsj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjx7j"
    },
    {
      "title": "Men's LAFC Olivier Giroud Black Authentic Stack Name & Number T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men T-Shirts",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-olivier-giroud-black-lafc-authentic-stack-name-and-number-t-shirt_ss5_p-202213771+pv-1+u-luhtfdv9sxxsnhrybnxt+v-ixljjultcawrfaubrd2h.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45XYg"
    },
    {
      "title": "Women's LAFC Olivier Giroud adidas White 2025 Secondary Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens-adidas-olivier-giroud-white-lafc-2025-secondary-replica-player-jersey_ss5_p-202891357+pv-1+u-47m4wosqilkjis3kllmb+v-uuitnktlupksflevaknb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeO9PA"
    },
    {
      "title": "Men's LAFC Olivier Giroud adidas Tan 2024 Archive Authentic Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-olivier-giroud-tan-lafc-2024-archive-authentic-jersey_ss5_p-201718925+pv-1+u-nbresnaovmb7t90cncw1+v-tenaun8mnrjk5sswtzjq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyA61n"
    },
    {
      "title": "Men's LAFC Olivier Giroud adidas Black 2024 Primary Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-olivier-giroud-black-lafc-2024-primary-authentic-player-jersey_ss5_p-201684691+pv-1+u-nylnyqqaji3ujm7z047v+v-nb0wck7n1ctsrtw3aqls.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOz3n"
    },
    {
      "title": "Youth LAFC Olivier Giroud adidas White 2025 Secondary Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/youth-adidas-olivier-giroud-white-lafc-2025-secondary-replica-player-jersey_ss5_p-202891361+pv-1+u-zeu4zcytyfxtaucytgzd+v-xhwzblnmybajtbq2khgl.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/3Jy9nA"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Olivier Giroud</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.parismatch.com/lmnr/r/375,250,000000,forcex,center-middle/img/var/pm/public/media/image/2024/09/26/11/resize_gettyimages-2174568974.jpg?VersionId=.zVbe1A5VQJ_HQsT0MUZseBycBDhlb1p' 
            alt='Olivier Giroud' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Michael Owens/USSF 
          Copyright: 2024 USSF</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Olivier Jonathan Giroud</li>
            <li><strong>Date of Birth:</strong> 30 September 1986 (Chambéry, France)</li>
            <li><strong>Position:</strong> Striker</li>
            <li><strong>Height:</strong> 1.93 m (6 ft 4 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> Froges, Grenoble</li>
            <li><strong>Senior Teams:</strong> Grenoble, Istres, Tours, Montpellier, Arsenal, Chelsea, AC Milan, Los Angeles FC</li>
            <li><strong>International Career:</strong> France (137 caps, 57 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Olivier Giroud: A Towering Forward</h2>
          <p>
            Olivier Giroud is one of the most accomplished strikers of his generation. Known for his aerial prowess, technical ability, and knack for scoring crucial goals, Giroud has had a stellar career in both domestic and international football.
          </p>
          <p>
            Having played for top clubs like Arsenal, Chelsea, and AC Milan, Giroud is now showcasing his talents in Major League Soccer with Los Angeles FC. As the all-time leading goal scorer for the French national team, his legacy is cemented as one of football's greats.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Olivier Giroud Merchandise</h1>
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

export default OlivierGiroud;
