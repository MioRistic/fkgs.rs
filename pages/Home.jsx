// 'use client'; // Ako koristiš app directory

 
// import Link from 'next/link';
// import { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

// const TrendingPlayers = () => {
//   const players = [
//     { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/messi' },
//     { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: '/Reus' },
//     { name: 'Olivier Giroud', image: 'https://www.parismatch.com/lmnr/r/375,250,000000,forcex,center-middle/img/var/pm/public/media/image/2024/09/26/11/resize_gettyimages-2174568974.jpg', link: '/giroud' },
//     { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: '/suarez' },
//   ];

//   return (
//     <div className='max-w-6xl mx-auto py-10 px-4'>
//       <h2 className='text-4xl font-bold text-center mb-8'>Trending Players</h2>
//       <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
//         {players.map((player) => (
//           <Link
//             key={player.name}
//             href={player.link}
//             className='group bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all'
//           >
//             <img
//               src={player.image}
//               alt={player.name}
//               className='w-full h-64 object-cover object-top'
//             />
//             <h3 className='text-center py-2 font-semibold'>{player.name}</h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const HomePage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       url: 'https://www.mlsstore.com/content/ws/all/0ed240d5-a432-451e-98f9-e7c0dee0e81a__1600X600.jpg',
//       title: '2024 MLS Cup Champions',
//       link: 'https://mlsstore.i8h2.net/09PxkL',
//     },
//     {
//       url: 'https://www.mlsstore.com/content/ws/all/ebab9ab3-8f51-451b-a8c4-457f93f1ecf5__1600X492.png',
//       title: 'All Jerseys',
//       link: 'http://mlsstore.i8h2.net/raX24B',
//     },
//     {
//       url: 'https://images.topps.com/v3/assets/bltc7206971cb4b2bfc/blt55f6c57a80f8365d/660704c7e838c81f0a60c9e4/24-TOPPS.COM-ARCHIVE-GRAPHICS-NEW_-03.png',
//       title: 'Topps Now',
//       link: 'https://mlsstore.i8h2.net/197WeB',
//     },
//     {
//       url: 'https://www.mlsstore.com/content/ws/all/2273fed5-bd79-4e51-aa30-645f9706e5b9__800X593.png',
//       title: 'Looks For Her',
//       link: 'https://mlsstore.i8h2.net/XmNXyM',
//     },
//     {
//       url: 'https://i.pinimg.com/736x/96/04/9d/96049d79294a3eb76078b3a21a5d3ea6.jpg',
//       title: 'MLS in FC25',
//       link: '/blog/FC25',
//     },
//   ];

//   const prevSlide = () => {
//     const isFirst = currentIndex === 0;
//     setCurrentIndex(isFirst ? slides.length - 1 : currentIndex - 1);
//   };

//   const nextSlide = () => {
//     const isLast = currentIndex === slides.length - 1;
//     setCurrentIndex(isLast ? 0 : currentIndex + 1);
//   };

 

//   return (
//     <main className='min-h-screen'>
//       {/* Carousel Section */}
//       <section className='relative w-full h-[500px] overflow-hidden'>
//         <a href={slides[currentIndex].link} target='_blank' rel='noopener noreferrer'>
//           <img src={slides[currentIndex].url} alt={slides[currentIndex].title} className='w-full h-full object-cover' />
//         </a>
//         <div className='absolute inset-0 flex justify-between items-center px-4'>
//           <button onClick={prevSlide} className='text-white text-3xl'><BsChevronCompactLeft /></button>
//           <button onClick={nextSlide} className='text-white text-3xl'><BsChevronCompactRight /></button>
//         </div>
//         <div className='absolute bottom-4 w-full flex justify-center gap-2'>
//           {slides.map((_, i) => (
//             <RxDotFilled
//               key={i}
//               onClick={() => goToSlide(i)}
//               className={`text-2xl cursor-pointer ${i === currentIndex ? 'text-white' : 'text-gray-400'}`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Trending Players */}
//       <TrendingPlayers />

//       {/* Add Blog Posts / Newsletter / Footer here if needed */}
//     </main>
//   );
// };

// export default HomePage;
