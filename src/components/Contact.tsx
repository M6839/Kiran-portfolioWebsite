
'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { CgMail } from 'react-icons/cg';
import { MdLocalPhone, MdOutlineLocationOn } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: 'easeOut',
    },
  }),
};

const Contact = () => {
  return (
    <div className="mt-20 px-4 md:px-0 overflow-hidden bg-[#1a1a1a] text-white pb-24" id='Contact'>
      {/* Title */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
        className="text-3xl md:text-5xl text-center text-[#14b8a6] font-extrabold  leading-tight"
      >
        Contact Me
      </motion.h1>

      {/* Contact Box */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
        className="flex flex-col md:flex-row gap-10 md:w-[1000px] md:h-[600px] border  border-[#333] bg-[#1f1f1f] mx-auto rounded-3xl mt-20 px-6 md:px-12 py-10"
      >
        {/* Left - Contact Form */}
        <motion.div
          custom={1}
          variants={fadeUp}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
          className="flex flex-col gap-4 flex-1"
        >
          <h2 className="text-[34px] font-bold text-teal-400 mb-2">
            Get in touch
          </h2>
          <p className="text-[18px] font-medium mb-4 text-gray-300">
            Feel free to reach out if you’d like to collaborate — you&apos;re just a
            few clicks away!
          </p>
          <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-4 flex-1'>
          <input type="hidden" name="access_key" value="ff3bb053-5322-4a9e-a4e9-3e90632189a8"></input>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-[#1a1a1a] text-white placeholder-gray-400 px-4 py-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-[#1a1a1a] text-white placeholder-gray-400 px-4 py-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="bg-[#1a1a1a] text-white placeholder-gray-400 px-4 py-3 rounded-md text-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button type='submit' className="bg-teal-500 hover:bg-teal-600 transition duration-300 text-white py-3 px-6 rounded-md font-bold">
            Send Message
          </button>
          </form>
        </motion.div>

        {/* Right - Info & Icons */}
        <motion.div custom={2} variants={fadeUp}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
         className="flex-1">
          <Image
            src="/email-image.png"
            alt="Email Illustration"
            width={300}
            height={300}
            className="mx-auto"
          />
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-4">
              <CgMail className="text-teal-400 text-3xl" />
              <p className="text-lg">mkirankumar6839@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MdLocalPhone className="text-teal-400 text-3xl" />
              <p className="text-lg">+91 79975 89153</p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineLocationOn className="text-teal-400 text-3xl" />
              <p className="text-lg">Nandyal, Andhra Pradesh, 518543</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
           
            <a href='https://www.linkedin.com/in/kiran-kumar-madham-960943261/'><CiLinkedin className="text-[40px] text-teal-500 hover:scale-110 transition-transform cursor-pointer" /></a>
            <a href='http://github.com/kiran6832'><FaGithub className="text-[40px] text-teal-500 hover:scale-110 transition-transform cursor-pointer" /></a>
             <a href='https://leetcode.com/Kiran6839/'><SiLeetcode className="text-[40px] text-teal-500 hover:scale-110 transition-transform cursor-pointer" /></a>
              <a href='https://www.instagram.com/mkirankumar7997/'><FaInstagram className="text-[40px] text-teal-500 hover:scale-110 transition-transform cursor-pointer" /></a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;

