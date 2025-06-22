
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navLinks = ['About Me', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, duration: 1 }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
      className="fixed top-0 left-0 z-50 w-full bg-[#1a1a1a] overflow-x-hidden mt-0 md:mt-4"
    >
      {/* Navbar Container */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 border border-[#333] bg-[#1f1f1f] rounded-none md:rounded-full shadow-md">
      
        <h1 className="text-[20px] font-bold text-[#14b8a6]">
          <a href="#Home">Kiran Kumar</a>
        </h1>

       
        <div className="hidden md:flex gap-6 text-[16px] items-center">
          {navLinks.map((item, index) => (
            <motion.a
              key={index}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
              href={`#${item}`}
              whileHover={{ scale: 1.1, color: '#0d9488' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-[#f5f5f5] cursor-pointer transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl">
          {openMenu ? (
            <IoCloseSharp onClick={() => setOpenMenu(false)} />
          ) : (
            <FiMenu onClick={() => setOpenMenu(true)} />
          )}
        </div>


        <motion.a
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
          href="#Contact"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="hidden md:block text-[16px] px-6 py-2 rounded-full bg-[#14b8a6] text-white hover:bg-[#0d9488] transition-all duration-300 font-semibold"
        >
          Hire Me
        </motion.a>
      </div>

      {/* Mobile Dropdown Menu */}
      {openMenu && (
        <div className="md:hidden bg-[#1f1f1f] w-full px-4 pb-4 pt-2 shadow-md">
          {navLinks.map((item, index) => (
            <motion.a
              key={index}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
              href={`#${item}`}
              onClick={() => setOpenMenu(false)}
              whileHover={{ scale: 1.05, color: '#0d9488' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="block text-[#f5f5f5] py-3 border-b border-[#333] transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
            href="#Contact"
            onClick={() => setOpenMenu(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="block mt-4 text-center text-[16px] px-4 py-2 rounded-full bg-[#14b8a6] text-white hover:bg-[#0d9488] transition-all duration-300 font-semibold"
          >
            Hire Me
          </motion.a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
