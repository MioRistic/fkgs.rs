'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  const logos = [
    {
      img: "https://i.ibb.co/v63rdpQx/us11-removebg-preview.png",
      link: "https://www.us11fc.com/",
      alt: "US11"
    },
    {
      img: "https://i.postimg.cc/c15wHVH0/7229-removebg-preview.png",
      link: "#",
      alt: "Tailor MF"
    },
    {
      img: "https://i.postimg.cc/1zDQXxR9/Nenaslovljeni-dizajn-5-removebg-preview.png",
      link: "https://dcp-hemigal.rs",
      alt: "DCP Hemigal"
    },
    {
      img: "https://i.postimg.cc/4NMk14nb/Nenaslovljeni-dizajn-6-removebg-preview.png",
      link: "https://dcp-hemigal.rs",
      alt: "Fitogal"
    },
    {
      img: "https://i.postimg.cc/DyXJz0Hg/6729-removebg-preview.png",
      link: "#",
      alt: "Miljan 93 Auito Servis"
    },
    {
      img: "https://i.postimg.cc/WbqfTGb7/miodev-removebg-preview.png",
      link: "https://miodev.rs",
      alt: "Miodev"
    }
  ];

  return (
    <footer className="bg-black text-white">

      {/* PARTNERI SEKCIJA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/10">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-12 text-center">
          PARTNERI KLUBA
        </p>

        {/* FLEX ROW U 2 REDA */}
        <div className="flex flex-wrap justify-between">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/16 mb-8 flex justify-center opacity-70 hover:opacity-100 transition duration-300"
            >
              <a 
                href={logo.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={logo.img}
                  alt={logo.alt}
                  className="
                    w-20 sm:w-24 md:w-28 lg:w-32
                    h-auto object-contain
                    grayscale hover:grayscale-0 transition duration-300
                  "
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* DONJI DEO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
{/* SOCIAL */}
<div className="flex items-center gap-6 text-2xl md:order-1 order-2">
  {[
    { icon: <FaFacebookF />, href: "https://www.facebook.com/fkgornjesinkovce" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/fkgornjesinkovce" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@fkgornjesinkovce" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/74559484/admin/dashboard/" },
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#00A3FF] transition-colors"
    >
      {social.icon}
    </a>
  ))}
</div>

          {/* COPYRIGHT */}
          <p className="text-xs text-gray-500 tracking-wide text-center md:text-center lg:text-left md:order-2 order-1">
            © 2026 FK GORNJE SINKOVCE. Sva prava zadržana.
          </p>

          {/* BACK TO TOP */}
          <a 
            href="#top" 
            className="text-xs tracking-widest hover:text-[#00A3FF] transition flex items-center gap-1 md:order-3 order-3 mt-4 md:mt-0"
          >
            NAZAD NA VRH ↑
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;