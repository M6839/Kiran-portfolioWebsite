
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-20  px-4 md:px-20 w-full bg-[#1a1a1a] overflow-hidden" id='About Me'>
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
        className="md:w-1/2 flex flex-col justify-center items-center md:items-start"
      >
        <h1 className="text-[32px] md:text-5xl text-center md:text-start text-[#14b8a6] font-extrabold  leading-tight mb-12">
          About Me
        </h1>
        <p className="text-[18px] md:text-[20px] text-center md:text-start text-[#f5f5f5] leading-relaxed">
          Hi, I&apos;m a passionate <strong className="text-[#14b8a6]">Full Stack Developer</strong> with a strong foundation in both front-end and back-end technologies. I recently completed my B.Tech in Computer Science and Engineering and have been honing my skills through personal projects, internships, and continuous learning.
          <br /><br />
          I enjoy turning complex problems into simple, efficient solutions. I&apos;m always excited to learn and grow in this fast-evolving field.
          <br /><br />
          I&apos;m currently looking for opportunities where I can contribute to real-world projects, collaborate with experienced developers, and continue to develop my skills in a dynamic work environment.
        </p>
        <button className="text-[18px] mt-8 px-6 py-2 rounded-full border-2 border-[#14b8a6] text-white hover:bg-[#0d9488] hover:border-[#0d9488] hover:text-white transition-all duration-300">
         <a href='#Projects'>My Projects</a> 
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
        className="h-[500px] w-[300px] mx-auto mt-12 md:mt-0 relative"
      >
        <div className="relative md:left-[-50px] w-[200px] md:w-[300px] h-[350px] md:h-[500px] bg-[#14b8a6] rounded-bl-[100px] rounded-tl-3xl rounded-br-xl shadow-lg shadow-[#0d9488]/40"></div>
        <div className="h-[350px] md:h-[500px] w-[200px] md:w-[300px] absolute top-[-30px] left-[50px] md:left-0">
          <Image
            src="/about-me.jpg"
            alt="About Me Image"
            width={100}
            height={100}
            className="h-full w-auto object-cover rounded-[100px] border-[3px] border-[#14b8a6]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
