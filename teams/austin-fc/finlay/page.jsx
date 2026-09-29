import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Finlay = () => {
  const items = [
    {
      id: 1,
      title: "Austin FC Ethan Finlay Fanatics Authentic 10.5'' x 13'' Sublimated Player Plaque",
      price: "$29.99",
      imageURL: "https://images.footballfanatics.com/austin-fc/ethan-finlay-austin-fc-105-x-13-sublimated-player-plaque_pi4854000_ff_4854060-ab9f7c17c5c6fcadcbb5_full.jpg?_hv=2&w=400https://images.footballfanatics.com/austin-fc/ethan-finlay-austin-fc-105-x-13-sublimated-player-plaque_pi4854000_ff_4854060-ab9f7c17c5c6fcadcbb5_full.jpg?_hv=2&w=900",
      link: "https://www.mlsstore.com/en/austin-fc/austin-fc-ethan-finlay-fanatics-authentic-105-x-13-sublimated-player-plaque/t-21695575+p-8264723744402+z-9-3910764656?_ref=p-SRP:m-GRID:i-r0c0:po-0"
    },
    {
      id: 2,
      title: "Ethan Finlay Austin FC Autographed Fanatics Authentic Match-Used #13 Mint Jersey from the 2023 MLS Season",
      price: "$299.99",
      imageURL: "https://images.footballfanatics.com/austin-fc/ethan-finlay-austin-fc-autographed-match-used-number-13-mint-jersey-from-the-2023-mls-season_ss5_p-200940856+pv-1+u-ee9zbbyikjevnjivbtet+v-wahnpi9vjhsm1r6kmgl5.jpg?_hv=2&w=900",
      link: "https://www.mlsstore.com/en/austin-fc/ethan-finlay-austin-fc-autographed-fanatics-authentic-match-used-number-13-mint-jersey-from-the-2023-mls-season/t-21037764+p-80441132042822+z-8-1471808684?_ref=p-SRP:m-GRID:i-r0c1:po-1"
    },
    {
      id: 3,
      title: "Ethan Finlay Austin FC Autographed Fanatics Authentic Match-Used #13 Cream adidas Jersey from the 2024 MLS Season - Size S",
      price: "$299.99",
      imageURL: "https://images.footballfanatics.com/austin-fc/ethan-finlay-austin-fc-autographed-match-used-number-13-cream-adidas-jersey-from-the-2024-mls-season-size-s_ss5_p-202678600+u-v6kbefd8hb8gyxtmibzd+v-y9dbnhg3gtwgku3076ik.jpg?_hv=2&w=400",
      link: "https://www.mlsstore.com/en/austin-fc/ethan-finlay-austin-fc-autographed-fanatics-authentic-match-used-number-13-cream-adidas-jersey-from-the-2024-mls-season-size-s/t-21259986+p-354446737431829+z-9-4090935427?_ref=p-SRP:m-GRID:i-r1c0:po-3"
    },
    {
      id: 4,
      title: "Ethan Finlay Austin FC Autographed Fanatics Authentic Match-Used #13 Green adidas Jersey from the 2024 MLS Season - Size S",
      price: "$299.99",
      imageURL: "https://images.footballfanatics.com/austin-fc/ethan-finlay-austin-fc-autographed-match-used-number-13-green-adidas-jersey-from-the-2024-mls-season-size-s_ss5_p-202678604+u-nyupvlxdpfverzf9uwi0+v-gceunezwhv4w5bx7spuz.jpg?_hv=2&w=400",
      link: "https://www.mlsstore.com/en/austin-fc/ethan-finlay-austin-fc-autographed-fanatics-authentic-match-used-number-13-green-adidas-jersey-from-the-2024-mls-season-size-s/t-10690053+p-916613404131764+z-9-3684187302?_ref=p-SRP:m-GRID:i-r0c2:po-2"
    },
    {
      id: 5,
      title: "Austin FC Autographed Fanatics Authentic Match-Used Soccer Ball from the 2024 MLS Season with 17 Signatures - #2",
      price: "$299.99",
      imageURL: "https://images.footballfanatics.com/austin-fc/austin-fc-autographed-match-used-soccer-ball-from-the-2024-mls-season-with-17-signatures-number-2_ss5_p-202749745+u-4tchzqdfa5dbtpxgwgpo+v-oxmk31gqoidzujflowwk.jpg?_hv=2&w=400",
      link: "https://www.mlsstore.com/en/austin-fc/austin-fc-autographed-fanatics-authentic-match-used-soccer-ball-from-the-2024-mls-season-with-17-signatures-number-1/t-21709920+p-351157749321915+z-9-589036954?_ref=p-SRP:m-GRID:i-r1c1:po-4"
    },
    {
      id: 6,
      title: "Austin FC Autographed Fanatics Authentic Match-Used Soccer Ball from the 2024 MLS Season with 17 Signatures - #1",
      price: "$299.99",
      imageURL: "https://images.footballfanatics.com/austin-fc/austin-fc-autographed-match-used-soccer-ball-from-the-2024-mls-season-with-17-signatures-number-1_ss5_p-202749746+pv-1+u-icjboyfgkqvbz3jtahat+v-pbuzmbeivr4pmzsg8ea9.jpg?_hv=2&w=900",
      link: "https://www.mlsstore.com/en/austin-fc/austin-fc-autographed-fanatics-authentic-match-used-soccer-ball-from-the-2024-mls-season-with-17-signatures-number-2/t-21693353+p-356679418209908+z-9-3211034844?_ref=p-SRP:m-GRID:i-r1c2:po-5"
    }
  ];


  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Ethan Finlay</h1>

        {/* Finlay Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://s.hdnux.com/photos/01/37/10/55/24939376/3/rawImage.jpg' 
            alt='Ethan Finlay' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
          <p>Creator: Carmen Mandato 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Ethan Finlay</li>
            <li><strong>Born:</strong> August 6, 1990 (Duluth, Minnesota, USA)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Current Team:</strong> Austin FC</li>
            <li><strong>Previous Clubs:</strong> Columbus Crew, Minnesota United</li>
            <li><strong>Achievements:</strong> MLS All-Star (2015), U.S. Men’s National Team caps</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Finlay</h2>
          <p>
            Ethan Finlay is a dynamic winger known for his pace, work ethic, and attacking versatility. Beginning his professional career with the Columbus Crew in 2012, he quickly became a fan favorite, earning an MLS All-Star selection in 2015.
          </p>
          <p>
            After a successful stint with Minnesota United, Finlay joined Austin FC in 2022, bringing veteran leadership and skill to the squad. His contributions have been instrumental in shaping the team’s competitive spirit in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Finlay's Merchandise</h1>
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

export default Finlay;
