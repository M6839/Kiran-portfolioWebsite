
"use client";
import React from "react";
import { motion } from "framer-motion";

const strengths = ["QUICK LEARNER", "TEAM WORK", "LEARNING NEW TECHNOLOGY"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Strengths = () => {
  return (
    <motion.div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...({} as any)}
      className="w-full h-[100px] mt-[110px] bg-[#1a1a1a] border-y-2 border-[#14b8a6]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="flex justify-between items-center gap-4 h-full px-4 md:px-20">
        {strengths.map((item, index) => (
          <motion.h1
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...({} as any)}
            className="text-[16px] md:text-[28px] text-[#14b8a6] font-semibold tracking-wide"
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </motion.div>
  );
};

export default Strengths;
