import React from 'react';

const ThomasMuller = () => {
  const items = [
    {
      "id": 1,
      "title": "Men's Vancouver Whitecaps FC Thomas Müller Fanatics Navy Name & Number T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "availability": "Most Popular in Vancouver Whitecaps FC",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-fanatics-thomas-m%C3%BCller-navy-vancouver-whitecaps-fc-name-and-number-t-shirt_ss5_p-2001769313+u-25kouxonboravpaupxqe+v-zrcxtpk7bwf5xjtyrahx.jpg?_hv=2&w=600",
      "link": "https://mlsstore.i8h2.net/kO3KN3"
    },
    {
      "id": 2,
      "title": "Youth Vancouver Whitecaps FC Thomas Müller Navy Name & Number T-Shirt",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Kids T-Shirts",
      "availability": "Most Popular in Kids T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/youth-thomas-m%C3%BCller-navy-vancouver-whitecaps-fc-name-and-number-t-shirt_ss5_p-203405503+u-bah6vm7cqojyc2fnhw11+v-t2rjivqlwsuv1yej8j6k.jpg?_hv=2&w=600",
      "link": "https://mlsstore.i8h2.net/je37Bv"
    },
    {
      "id": 3,
      "title": "Vancouver Whitecaps FC Thomas Müller Light Blue Scarf",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Accessories",
      "availability": "Most Popular in Accessories",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/thomas-m%C3%BCller-light-blue-vancouver-whitecaps-fc-scarf_ss5_p-203396483+u-no3sfu7hikanctiawiop+v-nhlfdbsgs02a5qhddemc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6y96zV"
    },
    {
      "id": 4,
      "title": "Women's Vancouver Whitecaps FC Thomas Müller Fanatics Navy Name & Number V-Neck T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Women's T-Shirts",
      "availability": "Most Popular in Women T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/womens-fanatics-thomas-m%C3%BCller-navy-vancouver-whitecaps-fc-name-and-number-v-neck-t-shirt_ss5_p-2001769314+pv-1+u-id7bjxcgdj1pb1rbnwnf+v-2ua0rfaxng5apsltp09v.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKqLEL"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Thomas Müller</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.goal.com/images/v3/getty-2230148654/crop/MM5DIMRWGY5DENBQGA5G433XMU5DAORSGIZA====/GettyImages-2230148654.jpg?auto=webp&format=pjpg&width=1920&quality=60' 
            alt='Thomas Müller' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
            style={{ objectPosition: 'center 20%' }}   
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Source: Wikimedia Commons | License: Creative Commons</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> September 13, 1989 (Weilheim, West Germany)</li>
            <li><strong>Position:</strong> Attacking Midfielder / Forward</li>
            <li><strong>Height:</strong> 6 ft 1 in (1.85 m)</li>
            <li><strong>Current Team:</strong> Vancouver Whitecaps (2025–present)</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Bayern Munich (2008–2025): 756 appearances, 250 goals</li>
                <li>Vancouver Whitecaps (2025–present): new signing</li>
              </ul>
            </li>
            <li><strong>International Career:</strong>
              <ul className='list-disc list-inside ml-5'>
                <li>Germany Senior Team (2010–2025): 131 appearances, 45 goals</li>
                <li>2014 FIFA World Cup Champion</li>
                <li>2010 FIFA World Cup Golden Boot</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Thomas Müller</h2>
          <p>
            Thomas Müller is a German professional footballer, widely regarded as one of the most versatile and intelligent attacking players of his generation. After spending his entire club career at Bayern Munich—where he won 33 major trophies including multiple Bundesliga titles and two UEFA Champions League crowns—Müller joined Vancouver Whitecaps in 2025. Known for his vision, movement, and leadership, he arrives in Major League Soccer as one of the most decorated European players ever. With Germany, he earned 131 caps, scored 45 goals, and helped his country win the 2014 FIFA World Cup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Thomas Müller Merchandise</h1>
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

export default ThomasMuller;
