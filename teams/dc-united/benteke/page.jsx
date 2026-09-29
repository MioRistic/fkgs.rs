import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ChristianBenteke = () => {
  const items = [
    {
      "title": "Men's D.C. United Christian Benteke adidas Black 2024 The Icon Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-christian-benteke-black-dc-united-2024-the-icon-kit-replica-player-jersey_ss5_p-201204985+u-pygtwia630xjmonxcwmc+v-bcjd3etfytjo6trupa1y.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/raOKoB"
    },
    {
      "title": "Men's D.C. United Christian Benteke adidas Natural 2025 The Soul Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-natural-dc-united-2025-the-soul-kit-replica-player-jersey_ss5_p-202900476+pv-1+u-e4zhakq0ixamjklrrc4m+v-yei1rhyffkndzbc2bsnb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxrKBr"
    },
    {
      "title": "Men's D.C. United Christian Benteke adidas Natural 2025 The Soul Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-christian-benteke-natural-dc-united-2025-the-soul-kit-authentic-player-jersey_ss5_p-202900472+pv-1+u-rfpk6gaehghwlelhalqn+v-ybkoie6v6yjxre9oggk1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Qj4QaM"
    },
    {
      "title": "Men's D.C. United Christian Benteke adidas Black 2024 The Icon Kit Authentic Player Jersey",
      "price": "$146.24",
      "originalPrice": "$194.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-christian-benteke-black-dc-united-2024-the-icon-kit-authentic-player-jersey_ss5_p-201204981+pv-1+u-fejniauyhu9gujrhbt8p+v-pt0x47j6wksbhpq3dtwv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19RNXa"
    },
    {
      "title": "Men's D.C. United Christian Benteke Black Authentic Stack Name & Number T-Shirt",
      "price": "$29.99",
      "originalPrice": "$39.99",
      "category": "T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-christian-benteke-black-dc-united-authentic-stack-name-and-number-t-shirt_ss5_p-202772320+pv-1+u-6wumbwf3jibjokcn7x7k+v-egft8dlsneray4fvh1rg.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmOeQo"
    },
    {
      "title": "Women's D.C. United Christian Benteke adidas Black 2024 The Icon Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/womens-adidas-christian-benteke-black-dc-united-2024-the-icon-kit-replica-player-jersey_ss5_p-201204989+pv-1+u-cqtmfdxq1s16oltptblv+v-gsmbkwtbmpr57tqwxw2s.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/K04Non"
    },
    {
      "title": "Youth D.C. United Christian Benteke adidas Natural 2025 The Soul Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Kids Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/womens-adidas-christian-benteke-natural-dc-united-2025-the-soul-kit-replica-player-jersey_ss5_p-202900480+pv-1+u-wnpf8iegqrdvz1mz7zpd+v-e8ofbwtiplgspjsgm0v9.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55YJaj"
    },
    {
      "title": "Men's D.C. United adidas Natural 2025 The Soul Kit Replica Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/womens-adidas-natural-dc-united-2025-the-soul-kit-replica-player-jersey_ss5_p-202652744+pv-1+u-tkiktqewnk1ezmanssbk+v-lr7pv4fvzyd5h5gxe3mm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOgnr9"
    },
    {
      "title": "Christian Benteke D.C. United Fanatics Authentic 10.5 x 13 Jersey Style Number 20 Sublimated Plaque",
      "price": "$22.49",
      "originalPrice": "$114.99",
      "category": "Accessories",
      "imageUrl": "https://images.footballfanatics.com/dc-united/christian-benteke-dc-united-105-x-13-jersey-style-number-20-sublimated-plaque_ss5_p-200541445+u-ysewwntfvkzvlszl019k+v-masbfswomli1a4eyz1wk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o40dqm"
    },
    {
      "title": "Unisex D.C. United Christian Benteke Black Player Adjustable Hat",
      "price": "$22.49",
      "originalPrice": "$29.99",
      "category": "Plaques",
      "imageUrl": "https://images.footballfanatics.com/dc-united/unisex-christian-benteke-black-dc-united-player-adjustable-hat_ss5_p-201204728+pv-2+u-v8v6undmadzgreydyt6d+v-6h5b1mbk89wzcu9pefnb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6yoZbr"
    },
    {
      "title": "D.C. United Autographed Fanatics Authentic Match-Used Soccer Ball from the 2024 MLS Season with 11 Signatures - #1",
      "price": "$299.99",
      "originalPrice": "$114.99",
      "category": "Accessories",
      "imageUrl": "https://images.footballfanatics.com/dc-united/dc-united-autographed-match-used-soccer-ball-from-the-2024-mls-season-with-11-signatures-number-1_ss5_p-202755257+pv-1+u-hpqavbozxy0crqhyw6q1+v-kbqflmrjjjf5gy0c3dpq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzZdzL"
    },
    {
      "title": "D.C. United Autographed Fanatics Authentic Match-Used Soccer Ball from the 2024 MLS Season with 11 Signatures - #2",
      "price": "$299.99",
      "originalPrice": "$29.99",
      "category": "Plaques",
      "imageUrl": "https://images.footballfanatics.com/dc-united/dc-united-autographed-match-used-soccer-ball-from-the-2024-mls-season-with-11-signatures-number-2_ss5_p-202755256+pv-1+u-hpesigmwds2qvy6gs1cd+v-diuvfvlyy4j0fe7ghbqz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyRoOX"
    }
]
;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Christian Benteke</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn.mos.cms.futurecdn.net/e8Zxx3N6t3F7Wieg7mQfuM.jpg' 
            alt='Christian Benteke' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Scott Taetsch 
| 
Credit: Getty Images
Copyright: 2024 Scott Taetsch</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Christian Benteke Liolo</li>
            <li><strong>Born:</strong> December 3, 1990 (Kinshasa, Zaire)</li>
            <li><strong>Position:</strong> Striker</li>
            <li><strong>Current Team:</strong> D.C. United</li>
            <li><strong>Previous Clubs:</strong> Genk, Standard Liège, Aston Villa, Liverpool, Crystal Palace</li>
            <li><strong>International Career:</strong> Belgium (45 caps, 18 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Christian Benteke: Belgium's Powerful Striker</h2>
          <p>
            Christian Benteke is a seasoned Belgian striker known for his physical presence and goal-scoring ability. Starting his career at Standard Liège, he later moved to Genk before earning a high-profile transfer to Aston Villa for £7 million. Benteke went on to score 49 goals for Villa and became one of the Premier League's top strikers.
          </p>
          <p>
            He has since played for Liverpool, Crystal Palace, and is currently with D.C. United. Benteke has been a key figure for Belgium, earning 45 international caps and playing in major tournaments such as the UEFA Euros. His strength in the air, finishing ability, and leadership make him a valuable asset to any team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Christian Benteke Merchandise</h1>
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

export default ChristianBenteke;
