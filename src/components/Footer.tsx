
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 60, duration: 1.2 }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
      className="mt-20 px-4 md:px-20 py-10 bg-teal-500"
    >
      {/* Divider */}
      <hr className="border-gray-600" />

      {/* Footer content */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6">
        {/* Logo or Name */}
        <h1 className="text-3xl text-white font-bold">
          Developed by Kiran Kumar
        </h1>

        {/* Navigation links */}
        <div className="grid grid-cols-2 md:flex gap-6 text-gray-300">
          {['Home','About Me','Skills','Projects','Contact'].map((item, index) => (
            <motion.p
              key={index}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
              className="text-[18px] hover:text-[#ffffff] font-medium cursor-pointer transition-colors"
            >
              <a href={`#${item}`}>
              {item}</a>
            </motion.p>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-right mt-6 text-sm text-gray-200">
        © {new Date().getFullYear()} Kiran Kumar • Built with Next.js & Tailwind CSS
      </p>
    </motion.footer>
  );
};

export default Footer;
