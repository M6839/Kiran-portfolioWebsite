
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';// adjust path if needed

const Projects = () => {
  const webProjects = [
    {
      img: '/calculator.jpg',
      name: 'Calculator Application',
      desc: 'A responsive calculator supporting basic arithmetic operations with a clean interface.',
      link: 'https://calculator-project-rho-gray.vercel.app/',
    },
    {
      img: '/weather-app-using-javascript.png',
      name: 'Weather Application',
      desc: 'A weather forecasting app showing temperature, humidity, wind speed, and forecasts.',
      link: 'https://weather-app-three-psi-83.vercel.app/',
    },
    {
      img: '/timer.jpg',
      name: 'Timer & Stopwatch',
      desc: 'Countdown timer and stopwatch with clean UI for studying, workouts, and more.',
      link: 'https://timer-and-stop-watch-phi.vercel.app/',
    },
  ];

  const fullStackProjects = [
    {
      img: '/chat.jpg',
      name: 'MERN Chat App',
      desc: 'Real-time chat app built using MongoDB, Express, React, and Node.js with socket integration.',
      link: 'https://github.com/M6839/Chat_Application',
    },
    {
      img: '/ecomerce.jpg',
      name: 'K-Mart E-comerce application',
      desc: 'Real time E-comerce app display items, we can filter by category wise,add to cart,order place,admin & user login these all features are developed.',
      link: 'https://k-mart-ecomerce-frontend.vercel.app/',
    },
    {
      img: '/food.jpg',
      name: 'Food ordering Application',
      desc: 'same like swiggy it displays restuarents and food items and add items to cart and ordered.',
      link: 'https://github.com/M6839/F_Minutes-_food_application_frontend',
    },
  ];

  const sectionTitle = (text: string) => (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
      className="text-[24px] md:text-2xl font-bold text-cyan-300 mt-20 mb-10 text-center md:text-left"
    >
      {text}
    </motion.h2>
  );

  return (
    <div className="mx-[10px] md:mx-20 overflow-hidden" id='Projects'>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
        className="text-[32px] md:text-5xl text-[#14b8a6] font-extrabold  leading-tight text-center mt-20"
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
        className="text-center text-[20px] md:text-[23px] text-white mt-[30px] mb-16"
      >
        I&apos;ve worked on a variety of web and full-stack projects — from sleek frontend designs to powerful backend systems.
      </motion.p>

      {sectionTitle('Basic web development projects')}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {webProjects.map((project, i) => (
          <ProjectCard key={i} {...project} index={i} />
        ))}
      </div>

      {sectionTitle('Full Stack Development Projects')}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fullStackProjects.map((project, i) => (
          <ProjectCard key={i} {...project} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
