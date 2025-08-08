'user client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { PiFileSqlBold } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSpring } from 'react-icons/si';
const Skills = () => {
  const skills=[
    {skill:'HTML',logo:<GrHtml5 className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'CSS',logo:<TbBrandCss3 className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'JavaScript',logo:<TbBrandJavascript className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'Bootstrap',logo:<RiBootstrapLine className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'React JS',logo:<FaReact className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'Node JS',logo:<FaNode className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'Express JS',logo:<SiExpress className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'Next JS',logo:<RiNextjsFill className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'Tailwind CSS',logo:<RiTailwindCssLine className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'Java',logo:<FaJava className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
     {skill:'Sprin Boot',logo:<SiSpring className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
    {skill:'MongoDB',logo:<DiMongodb className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},
     {skill:'Mysql',logo:<PiFileSqlBold className='bg-white text-[#14b8a6] md:text-amber-500 text-[70px] p-[10px] rounded-full '/>},

  ]
  return (
    <div className='relative' id='Skills'>
  {/* Heading + Paragraph */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.8 }}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {...({} as any)}
    className='mt-8 mx-[10px] md:mx-20'
  >
    <h1 className='text-[32px] md:text-5xl text-center text-[#14b8a6] font-extrabold  leading-tight'>My Skills</h1>
    <p className='text-[20px] md:text-[23px] text-white text-center mt-[30px] mb-20'>
      I not only work with these technologies but excel in using them with
      best practices to deliver high-quality results...
    </p>
  </motion.div>

  {/* Skill Cards */}
  <motion.div
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {...({} as any)}
    className='grid grid-cols-2 gap-[20px] md:gap-0 md:flex justify-center px-[10px] md:px-[20px] relative'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2,
        }
      }
    }}
  >
    {skills.map((item, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
        className='mx-auto md:mx-[20px] relative hover:translate-y-10 transition-all duration-500'
      >
        <div className='hidden md:block w-[80px] h-[200px] bg-[#14b8a6] rounded-t-full'></div>
        <div className='md:absolute md:top-[10px] left-[5px]'>
          {item.logo}
          <p className='md:text-center text-[#14b8a6] md:text-gray-900 mt-[12px]'>{item.skill}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* Image Section */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <Image src={'/subSkills.jpg'} width={500} height={100} alt='' className='w-full border-b-[1px] border-t-[1px] border-white  backdrop-blur-[2px]'  style={{ height: '10vh', width: '100%' }} />
  </motion.div>

  
</div>
  )}

export default Skills