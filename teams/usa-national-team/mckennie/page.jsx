import React from 'react';

const WestonMcKennie = () => {
  const items = [
    {
      "title": "Youth USMNT Weston McKennie White Name & Number T-Shirt",
      "price": "$27.99",
      "originalPrice": "$27.99",
      "category": "Youth T-Shirts",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/usmnt/youth-weston-mckennie-white-usmnt-name-and-number-t-shirt_ss5_p-201543140+pv-1+u-idhmfwlewcfv1rhhwmnh+v-ac1jzl6je5onrfyktvto.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKO92L"
    },
    {
      "title": "Women's USMNT Weston McKennie White Name & Number T-Shirt",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Women's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/womens-weston-mckennie-white-usmnt-name-and-number-t-shirt_ss5_p-201543149+pv-1+u-xaeqypj58mqsifmjfaj7+v-lxjmf9bkwm2afb98hwsq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjVbv"
    },
    {
      "title": "USMNT Weston McKennie Player Scarf",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Scarves",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/weston-mckennie-usmnt-player-scarf_ss5_p-201543034+u-ntlinbqg1cri6kh7b6pr+v-xueesvekzaxtm5lkoksg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2rB3"
    },
    {
      "title": "Women's USMNT Weston McKennie Navy Name & Number T-Shirt",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Women's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/womens-weston-mckennie-navy-usmnt-name-and-number-t-shirt_ss5_p-201543147+pv-1+u-1ruitc2orgdltbsvd7hg+v-p7k0xi1qzffmxwizl3zm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyO4eo"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Weston McKennie</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.intermiami.news/uploads/52/2024/07/GettyImages-2160612538-1140x752.jpg'
            alt='Weston McKennie' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Bill Barrett/ISI Photos/USSF 
| 
Credit: Getty Images for USSF
Copyright: 2024 USSF</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> August 28, 1998 (Fort Lewis, Washington, U.S.)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> Juventus</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Schalke 04 (2017–2021): 75 appearances, 4 goals</li>
                <li>Juventus (2020–present): 98 appearances, 7 goals</li>
                <li>Leeds United (loan, 2023): 19 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Weston McKennie</h2>
          <p>
            Weston McKennie is a dynamic and versatile midfielder, known for his physicality, box-to-box running, and ability to contribute both defensively and offensively. A key figure for Juventus since his arrival on loan in 2020, McKennie has become an integral part of the team's midfield. He has also represented the United States at various youth levels and continues to be a vital part of the national team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Weston McKennie Merchandise</h1>
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

export default WestonMcKennie;
