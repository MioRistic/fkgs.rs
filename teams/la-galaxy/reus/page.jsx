import React from 'react';

// Tipizacija (ako želiš u TS-u)
// interface Item {
//   id: number;
//   title: string;
//   price: string;
//   originalPrice: string;
//   category: string;
//   shipping: string;
//   imageUrl: string;
//   link: string;
// }

const MarcoReus = () => {
  const items = [
    {
      id: 1,
      title: "Men's LA Galaxy Marco Reus Navy Authentic Stack Name & Number T-Shirt",
      price: "$39.99",
      originalPrice: "$39.99",
      category: "T-Shirts",
      shipping: "Ships Free",
      imageUrl: "https://images.footballfanatics.com/la-galaxy/mens-marco-reus-navy-la-galaxy-authentic-stack-name-and-number-t-shirt_ss5_p-202772325+pv-1+u-omwd9az9qxhq5uvd7zbd+v-bhiyopwwoxio6h0k4aur.png?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/XmGYa5",
    },
    {
      id: 2,
      title: "Men's LA Galaxy Marco Reus adidas Green 2024 LA Kit Authentic Player Jersey",
      price: "$194.99",
      originalPrice: "$194.99",
      category: "Men Jerseys",
      shipping: "Ships Free",
      imageUrl: "https://images.footballfanatics.com/la-galaxy/mens-adidas-marco-reus-green-la-galaxy-2024-la-kit-authentic-player-jersey_ss5_p-202211419+pv-1+u-8xkyxapfpw2rjkamswzw+v-0grxctbgcekkcienwskg.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/zxPNKm",
    },
    {
      id: 3,
      title: "Women's LA Galaxy Marco Reus adidas Green 2024 LA Kit Replica Player Jersey",
      price: "$134.99",
      originalPrice: "$134.99",
      category: "Women Jerseys",
      shipping: "Ships Free",
      imageUrl: "https://images.footballfanatics.com/la-galaxy/womens-adidas-marco-reus-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-202211421+pv-1+u-bazlwyddzlb2e88an8xs+v-4msegbgrf1dxogninw7p.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/WyAqe3",
    },
    {
      id: 4,
      title: "Youth LA Galaxy Marco Reus adidas Green 2024 LA Kit Replica Player Jersey",
      price: "$114.99",
      originalPrice: "$114.99",
      category: "Youth Jerseys",
      shipping: "Ships Free",
      imageUrl: "https://images.footballfanatics.com/la-galaxy/youth-adidas-marco-reus-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-202211422+pv-1+u-trhxeu1y7oel7hx9jukx+v-eswtdyfdzqbxfn45d7y8.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/09yZ63",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-[1px]">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#020617] mb-4">Marco Reus</h1>

        {/* Player Image and Bio Section */}
        <div className="mb-6">
          <img
            src="https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148"
            alt="Marco Reus"
            style={{ objectPosition: "center 0%" }}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        <div className="mb-10 text-center text-sm text-gray-500">
          <p>
            Creator: Kaelin Mendez <br />
            Copyright: 2024 Getty Images
          </p>
        </div>

        <section className="text-[#020617] mb-8">
          <h2 className="text-2xl font-semibold mb-2">Player Information</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Full Name:</strong> Marco Reus
            </li>
            <li>
              <strong>Date of Birth:</strong> 31 May 1989 (Dortmund, West Germany)
            </li>
            <li>
              <strong>Position:</strong> Attacking Midfielder, Winger, False Nine
            </li>
            <li>
              <strong>Height:</strong> 1.80 m (5 ft 11 in)
            </li>
            <li>
              <strong>Current Team:</strong> LA Galaxy
            </li>
            <li>
              <strong>Youth Team:</strong> Post SV Dortmund, Borussia Dortmund
            </li>
            <li>
              <strong>Senior Career:</strong> Borussia Mönchengladbach, Borussia Dortmund, LA Galaxy
            </li>
          </ul>
        </section>

        <section className="text-[#020617] mb-8">
          <h2 className="text-2xl font-semibold mb-2">Marco Reus: From Dortmund to LA Galaxy</h2>
          <p>
            Marco Reus is widely recognized as one of the most talented attacking players in the world,
            known for his blistering pace, technical ability, and playmaking skills. He spent over a decade
            at Borussia Dortmund, becoming one of the team's most iconic players and a fan favorite.
          </p>
          <p className="mt-2">
            After years of success in the Bundesliga, Reus made the move to LA Galaxy in 2024, continuing
            his career in Major League Soccer. With his experience and leadership, he has brought a wealth
            of talent to his new team, and fans are excited to see him shine in the U.S.
          </p>
        </section>

        {/* Shop Section */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#020617] mb-4">Shop Marco Reus Merchandise</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {items.map(item => (
            <article
              key={item.id}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col"
              aria-label={`Product: ${item.title}`}
            >
              <img
                className="w-full h-64 object-cover"
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-[#020617]">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.price}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
                >
                  Buy Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarcoReus;
