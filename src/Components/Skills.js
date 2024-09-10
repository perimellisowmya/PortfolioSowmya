import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaGit,
} from "react-icons/fa"; // Importing icons

// Icon list for technical skills
const technicalSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "React JS", icon: <FaReact className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
  { name: "PostgreSQL", icon: <FaDatabase className="text-blue-800" /> },
  { name: "Git", icon: <FaGit className="text-orange-500" /> },
];


const iconVariant = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.3, rotate: 360, transition: { duration: 0.6 } },
};

const TechnicalSkills = () => {
  return (
    <section className="py-20 bg-gray-100 text-center" id="technical-skills">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 px-6 max-w-4xl mx-auto">
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center text-6xl"
            variants={iconVariant}
            initial="initial"
            whileHover="hover"
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
