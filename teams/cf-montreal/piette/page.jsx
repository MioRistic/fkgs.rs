import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const SamuelPiette = () => {
  const items = [
    {
      "title": "Women's CF Montreal Samuel Piette adidas Light Blue 2024 La Main Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/womens-adidas-samuel-piette-light-blue-cf-montreal-2024-la-main-replica-player-jersey_ss5_p-201204694+pv-1+u-koyjztb4bcjrgshffawx+v-3nkddxyfyxlae7tfjouz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxA663"
    },
    {
      "title": "Men's CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-samuel-piette-blue-cf-montreal-2025-montr%C3%A9al-original-replica-player-jersey_ss5_p-202840194+pv-1+u-kerkuoaxehv72cma1omu+v-jiknqx57mks4l7ttooec.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6Lyy1"
    },
    {
      "title": "Women's CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/womens-adidas-samuel-piette-blue-cf-montreal-2025-montr%C3%A9al-original-replica-player-jersey_ss5_p-202840195+pv-1+u-xuozicn3rnpacxkb2whl+v-znfs45rjtpn0y9egavg1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45yy9"
    },
    {
      "title": "Samuel Piette CF Montreal Autographed Fanatics Authentic Match-Used #6 Blue adidas Jersey from the 2024 MLS Season - Size M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Jerseys",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/samuel-piette-cf-montreal-autographed-match-used-number-6-blue-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202767563+pv-1+u-nzyigj3pdhixfqxcd1p8+v-mdiws4pq0loe6gq54ury.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yddV"
    },
    {
      "title": "Men's CF Montreal Samuel Piette Blue Authentic Stack Name & Number T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men Apparel",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-samuel-piette-blue-cf-montreal-authentic-stack-name-and-number-t-shirt_ss5_p-202772317+pv-1+u-sh2zftn9ptmqquyyj7bq+v-vnctirgf5oqib7gl4mnv.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOPmmx"
    },
    {
      "title": "Men's CF Montreal Samuel Piette adidas Light Blue 2024 La Main Authentic Player Jersey",
      "price": "$99.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Reduced: $99.99 (as of 02/15/2024)",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-samuel-piette-light-blue-cf-montreal-2024-la-main-authentic-player-jersey_ss5_p-201204686+pv-1+u-lzuurof57re0mcgwqfwk+v-ayobprvhysnz0fhvnm1x.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeOmmN"
    },
    {
      "title": "Samuel Piette CF Montreal Autographed Fanatics Authentic Match-Used #6 Light Blue adidas Jersey from the 2024 MLS Season - Size M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Jerseys",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/samuel-piette-cf-montreal-autographed-match-used-number-6-light-blue-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202767561+pv-1+u-brtcqjgw5mv3d13onz4c+v-fi2quuamcimkormbovyd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/3JyddB"
    },
    {
      "title": "Youth CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/youth-adidas-samuel-piette-blue-cf-montreal-2025-montr%C3%A9al-original-replica-player-jersey_ss5_p-202840196+pv-1+u-5q3hhwffb2poa9stdgzn+v-hbirjllovu99evdqnhkw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQZZe"
    },
    {
      "title": "Men's CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-samuel-piette-blue-cf-montreal-2025-montr%C3%A9al-original-authentic-player-jersey_ss5_p-202840193+pv-1+u-hsnye752vdgphwmi1ky7+v-tqvv6hlaj41otusjljcb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrNZ5"
    },
    {
      "title": "Men's CF Montreal Samuel Piette adidas Light Blue 2024 La Main Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-samuel-piette-light-blue-cf-montreal-2024-la-main-replica-player-jersey_ss5_p-201204690+pv-1+u-dk5t7yh7j3qn2h3wreom+v-axvoukjomq4smrjn0sut.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9R6bK"
    },
    {
      "title": "CF Montreal Autographed Fanatics Authentic Match-Used Soccer Ball from the 2024 MLS Season with 9 Signatures - #2",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Memorabilia",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/cf-montreal-autographed-match-used-soccer-ball-from-the-2024-mls-season-with-9-signatures-number-2_ss5_p-202982393+pv-1+u-ux9ws4vosdcq3tib02bk+v-8oendi8q4rxeazrwodfz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbyNR"
    },
    {
      "title": "Men's CF Montreal adidas Gray 2023 Secondary Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-gray-cf-montreal-2023-secondary-authentic-custom-jersey_ss5_p-5280987+pv-1+u-zljxxxnwza6sscw6hgkx+v-fb5cyrcm9bs4eqqmmjkr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raL2XR"
    },
    {
      "title": "CF Montreal Autographed Fanatics Authentic Match-Used Soccer Ball from the 2024 MLS Season with 9 Signatures - #1",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Memorabilia",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/cf-montreal-autographed-match-used-soccer-ball-from-the-2024-mls-season-with-9-signatures-number-1_ss5_p-202982394+pv-1+u-2onlnnuc9mowr4gep5b2+v-nicrhqzffv5suqzqqvfb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOZ2Y"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Samuel Piette</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/11/Canada-Mens-Soccer-Team-Player-Samuel-Piette-in-2019.jpg' 
            alt='Samuel Piette' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Vaughn Ridley 
| 
Credit: Getty Images
Copyright: 2019 Vaughn Ridley</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Samuel Piette</li>
            <li><strong>Date of Birth:</strong> 12 November 1994 (Le Gardeur, Quebec, Canada)</li>
            <li><strong>Position:</strong> Defensive Midfielder</li>
            <li><strong>Height:</strong> 1.71 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> CF Montréal</li>
            <li><strong>Youth Team:</strong> Lionceaux Le Gardeur, Olympique de Repentigny, FC Boisbriand</li>
            <li><strong>Senior Career:</strong> Fortuna Düsseldorf, Deportivo La Coruña B, CF Montréal</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Samuel Piette: From Quebec to CF Montréal</h2>
          <p>
            Samuel Piette, born in Le Gardeur, Quebec, is a Canadian defensive midfielder known for his tenacious playing style. He developed through the ranks of Canadian youth teams before making his senior debut in Europe. After stints in Germany and Spain, he returned to Canada and became a cornerstone of CF Montréal's midfield.
          </p>
          <p>
            Piette has been a key player for both his club and country, with impressive performances for the Canadian national team, often being called up for crucial matches. His career continues to thrive at CF Montréal, where he plays a vital role in both defense and midfield.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Samuel Piette Merchandise</h1>
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

export default SamuelPiette;
