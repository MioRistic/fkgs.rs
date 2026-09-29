import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DarlingtonNagbe = () => {
  const items = [
    {
      "title": "Men's Columbus Crew Darlington Nagbe adidas Black 2025 The Goosebumps Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-darlington-nagbe-black-columbus-crew-2025-the-goosebumps-kit-authentic-player-jersey_ss5_p-202840281+pv-1+u-6r8s5dkpdn3qtxd9leqd+v-aoyfqjpiywekswmncnbp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/K046XA"
    },
    {
      "title": "Men's Columbus Crew Darlington Nagbe adidas Black 2025 The Goosebumps Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-darlington-nagbe-black-columbus-crew-2025-the-goosebumps-kit-replica-player-jersey_ss5_p-202840282+pv-1+u-yyxrrkfonsw1pelw9dsm+v-gva8aq7cricmkqevdtxs.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6yo6oK"
    },
    {
      "title": "Darlington Nagbe Columbus Crew Fanatics Authentic 2023 MLS Cup Champions 12\" x 15\" Sublimated Plaque",
      "price": "$37.49",
      "originalPrice": "$49.99",
      "category": "Memorabilia",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/darlington-nagbe-columbus-crew-2023-mls-cup-champions-12-x-15-sublimated-plaque_ss5_p-201038015+u-y01ufu7oe1rhvvwi1eak+v-msi13fez7ywcqvh4lzjv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7ao6oA"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Darlington Nagbe</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://wallpapers.com/images/hd/darlington-nagbe-mls-medically-cleared-cy1tf00pgqbg7a3o.jpg' 
            alt='Darlington Nagbe' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Darlington Joephillip Nagbe</li>
            <li><strong>Born:</strong> July 19, 1990 (Monrovia, Liberia)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Current Team:</strong> Columbus Crew</li>
            <li><strong>Previous Clubs:</strong> Portland Timbers, Atlanta United</li>
            <li><strong>Achievements:</strong> 4× MLS Cup Winner, 1× CONCACAF Gold Cup Winner</li>
          </ul>
        </div>

{/* Additional Text */}
<div className='text-[#020617] mb-8'>
  <h2 className='text-2xl font-semibold mb-2'>Darlington Nagbe: The Midfield Maestro</h2>
  <p>
    Darlington Nagbe is a seasoned midfielder known for his exceptional technical skills and composure on the ball. Born in Liberia, Nagbe moved to the U.S. at a young age and quickly became a rising star in U.S. soccer. His early career saw him shine at the University of Akron, where he won the MAC Hermann Trophy as the top college soccer player in 2010, before being selected second overall in the 2011 MLS SuperDraft by the Portland Timbers.
  </p>
  <p>
    Over the course of his career, Nagbe has earned a reputation as one of the most skillful and intelligent players in Major League Soccer. He spent seven successful seasons with the Portland Timbers, helping the team win the 2015 MLS Cup, and then continued his journey with Atlanta United, winning the 2018 MLS Cup and several other trophies. In 2020, Nagbe moved to Columbus Crew, where he further cemented his legacy by leading the team to a fourth MLS Cup victory in 2023, becoming one of only ten players in MLS history to win four titles.
  </p>
  <p>
    Nagbe's playing style is characterized by his exceptional passing range, vision, and dribbling ability. Often deployed in a box-to-box or deeper midfield role, he is known for his ability to control the tempo of the game, break defensive lines with his smooth dribbling, and set up attacking opportunities. His leadership qualities have also made him a crucial figure for both club and country, earning him the captaincy of Columbus Crew in 2023.
  </p>
  <p>
    On the international stage, Nagbe earned 25 caps for the U.S. Men's National Team, including participation in the 2017 CONCACAF Gold Cup, which the U.S. won. Despite stepping away from the national team after 2018 to focus on family, his contributions to the national side and MLS are widely respected, solidifying his place as one of the league’s greatest midfielders.
  </p>
</div>


        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Darlington Nagbe Merchandise</h1>
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

export default DarlingtonNagbe;
