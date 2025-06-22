
'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { IoIosLogOut } from "react-icons/io"
interface ProjectCardProps {
  img: string;
  name: string;
  desc: string;
  index: number;
  link?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.9,
      ease: 'easeOut',
    },
  }),
};

const slideUpOverlay = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ img, name, desc, index, link }) => {
  const [details, setDetails] = useState(false);

  return (
    <motion.div
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
      className="relative border border-gray-300 rounded-2xl overflow-hidden hover:shadow-xl transition"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}
    >
      {/* Background Image */}
      <Image
        src={img}
        width={400}
        height={200}
        alt={name}
        className="w-full h-[200px] object-cover"
      />

      {/* Sliding Overlay */}
      <AnimatePresence>
        {details && (
          <motion.div
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
            className="absolute inset-0 bg-black/70 backdrop-blur-md p-4 flex flex-col justify-center items-center text-center text-white"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideUpOverlay}
          >
            <h2 className="text-xl md:text-2xl text-[#14b8a6] font-bold">{name}</h2>
            <p className="text-base md:text-lg mt-2">{desc}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-[10px] items-center mt-4 text-cyan-400 hover:text-cyan-200 hover:underline text-sm"
              >
                View Project <IoIosLogOut className='text-lg'/>
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;

