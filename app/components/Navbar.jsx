'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const leftLinks = [
    { path: '/vesti', label: 'VESTI' },
    { path: '/klub', label: 'KLUB' },
  ];

  const rightLinks = [
    { path: '/prvi-tim', label: 'PRVI TIM' },
    { path: '/kontakt', label: 'KONTAKT' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-30 bg-black z-50">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 relative flex items-center">

        {/* Levi meni - VEOMA blizu loga */}
        <div className="hidden lg:flex items-center gap-70 font-bold text-sm tracking-[0.12em]">
          {leftLinks.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="py-7 px-3 text-white hover:text-[#00A3FF] transition-all duration-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Logo u centru */}
        <div className="absolute left-1/2 top-15 -translate-x-1/2 -translate-y-1/2 z-10">
          <Link href="/" className="flex items-center">
            <Image
              src="https://i.ibb.co/WvbkYkHc/fkgs.png"
              alt="FK Gornje Sinkovce"
              width={120}
              height={50}
              className="hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Desni meni - VEOMA blizu loga */}
        <div className="hidden lg:flex items-center gap-70 font-bold text-sm tracking-[0.12em] ml-auto">
          {rightLinks.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="py-7 px-3 text-white hover:text-[#00A3FF] transition-all duration-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={handleClick}
          className="lg:hidden text-white p-3 ml-auto z-50"
          aria-label="Toggle menu"
        >
          {!nav ? <FaBars size={30} /> : <FaXmark size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-500 lg:hidden ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-10 text-white font-bold text-2xl tracking-wider">
          {[...leftLinks, ...rightLinks].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={handleClick}
              className="py-7 border-b border-white/10 hover:text-[#00A3FF] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;