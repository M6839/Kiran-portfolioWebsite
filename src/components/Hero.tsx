
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineHexagon } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

 function Hero() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5] flex flex-col md:flex-row items-center justify-center pt-24 mx-4 md:mx-20 py-12 gap-10" id="Home">
      
      {/* Left Text Section */}
      <motion.div
      initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
       className="flex-1 max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          Hi, I&apos;m <span className="text-[#14b8a6]">Kiran Kumar</span>
        </h1>
        <p className="mt-4 text-[#aaaaaa] text-[20px] md:text-[23px]">
          A passionate Full Stack Developer crafting fast, modern web experiences with clean, scalable code.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/KiranKumar_MERN_2025.pdf"
            className="bg-[#14b8a6] hover:bg-[#0d9488] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Download Resume
          </a>
          <a
            href="#Projects"
            className="text-[#14b8a6] hover:underline inline-flex items-center gap-2"
          >
            View Projects <FaArrowRight />
          </a>
        </div>
      </motion.div>

      {/* Right Hexagon + Image */}
      <motion.div
       initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
        className="relative flex-1 flex items-center justify-center"
      >
        <MdOutlineHexagon className="w-[400px] h-[400px] md:w-[550px] md:h-[550px] text-[#14b8a6] opacity-10 animate-spin-slow transition-all duration-1000" />
        
        <div className="absolute top-[80px] right-[70px]">
          <MdOutlineHexagon className="w-[250px] md:w-[400px] h-[250px] md:h-[400px] text-[#14b8a6]" />
          <Image
            src="/me.png"
            width={275}
            height={200}
            alt="me"
            className="relative w-[180px] md:w-[275px] h-[180px] md:h-[280px] object-cover 
              [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] 
              top-[-215px] md:top-[-335px] left-[38px] md:left-[64px]"
          />
        </div>
      </motion.div>
    </div>
  );
}
export default Hero
