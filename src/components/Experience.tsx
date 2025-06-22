'use client';
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Byte Uprise",
    role: "Full stack Developer Team Lead Intern",
    duration: "Apr 2025 - Jun 2025",
    description: "During the internship I can learn leadership ,communication skills.Daily assings tasks to team mates and developed real time projects.",
  },
  {
    company: "Byte Uprise",
    role: "Full stack Developer Intern",
    duration: "Sept 2024 - Apr 2025",
    description: "Developed and maintained Full stack applications using React,Node Js, Express Js and Mongo DB. Collaborated with designers and team members.",
  },
  {
    company: "Infiniz solutions",
    role: "MERN stack developer Inten",
    duration: "May 2024 - July 2024",
    description: "Assisted in creating responsive websites and learned fullstack best practices.",
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="py-12 px-4  text-white">
      <h2 className="text-[32px] md:text-5xl font-extrabold leading-tight mb-10 text-center text-[#14b8a6]">Experience</h2>
      
      <div className="relative border-l border-gray-700 pl-6 space-y-10 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({} as any)}
            className="relative"
          >
            <div className="absolute left-[-10px] top-1 w-4 h-4 bg-[#14b8a6] rounded-full border-2 border-white" />
            <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-[#14b8a6] font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
