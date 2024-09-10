import React from "react";
import { motion } from "framer-motion";

const freelanceProjects = [
  {
    title: "Freelance Developer Projects",
    duration: "Sep 2023 – May 2024",
    description: [
      "As a freelance contractor at Mavin Tech Consulting, Eruvaka as the client company. I specialize in designing visually appealing website interfaces using React JS and Tailwind CSS. Additionally, I develop robust APIs to ensure seamless communication between frontend and backend systems. I also manage content uploads to AWS servers.",
      "Web Rank Us website – Built using React JS and Tailwind CSS.",
      "RK Design One website – Built using HTML5, CSS3, Bootstrap.",
      "Sri Airavathi Website – Built using React JS and Tailwind CSS.",
    ],
  },
];

const FreelanceProjects = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
      {freelanceProjects.map((project, index) => (
        <motion.div
          key={index}
          className="relative max-w-4xl mx-auto p-8 mb-12 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-600"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-400 mb-6">{project.duration}</p>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            {project.description.map((desc, i) => (
              <li key={i} className="text-lg">
                {desc}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
};

export default FreelanceProjects;
