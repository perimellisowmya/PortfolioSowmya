import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaBookOpen,
  FaSyringe,
} from "react-icons/fa";

const sections = [
  {
    title: "Professional Experience",
    items: [
      {
        company: "Innominds Software",
        location: "Hyderabad, Telangana",
        duration: "May 2022 – Aug 2023",
        responsibilities: [
          "Collaborated closely with cross-functional teams to design and develop the application.",
          "Strong understanding of React JS and its libraries (React Router, Redux, Axios).",
          "Experience with Axios and seamlessly integrated with the backend (Java).",
          "Received training in Microsoft Power BI and generated responsive, visually appealing reports.",
        ],
        icon: <FaBriefcase className="text-5xl text-blue-600" />,
        bgColor: "bg-gradient-to-r from-blue-200 via-blue-100 to-white",
      },
      {
        company: "Elearn Infotech",
        location: "Remote",
        duration: "Sep 2022 – Dec 2022",
        responsibilities: [
          "Trained as a MERN Stack Developer, gaining hands-on experience with MongoDB, Express.js, React.js, and Node.js.",
        ],
        icon: <FaChalkboardTeacher className="text-5xl text-green-600" />,
        bgColor: "bg-gradient-to-r from-green-200 via-green-100 to-white",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "InnoTutor E-learning Application",
        description: [
          "Developed a flexible E-learning platform from scratch using React JS and Material UI, featuring user registration as tutors or learners, digital course uploads by tutors, course purchases by learners, and centralized admin management of user privileges and content.",
          "Collaborated with the backend team and integrated with a Java backend using Axios, including token generation and a dynamic rule engine for business logic.",
        ],
        icon: <FaBookOpen className="text-5xl text-purple-600" />,
        bgColor: "bg-gradient-to-r from-purple-200 via-purple-100 to-white",
      },
      {
        title: "Active Edge Surgical | Innominds",
        description: [
          "Focused on delivering intelligent information to reduce surgical complications and improve patient care and safety.",
          "Enabled surgeons to view critical physiological structures and functions not visible with the naked eye.",
          "Worked on different modules using React JS, optimized performance, fixed bugs, and developed a responsive UI.",
        ],
        icon: <FaSyringe className="text-5xl text-red-600" />,
        bgColor: "bg-gradient-to-r from-red-200 via-red-100 to-white",
      },
    ],
  },
];

const ExperienceProjects = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      {sections.map((section, sIndex) => (
        <div key={sIndex} className="mb-20">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {section.title}
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-12 px-6">
            {section.items.map((item, iIndex) => (
              <motion.div
                key={iIndex}
                className={`relative overflow-hidden rounded-xl ${item.bgColor} p-8 shadow-lg`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: iIndex * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-4 left-4">{item.icon}</div>
                <div className="ml-16">
                  {section.title === "Professional Experience" ? (
                    <>
                      <h3 className="text-2xl font-semibold mb-2">
                        {item.company}
                      </h3>
                      <p className="text-gray-700 mb-1">{item.location}</p>
                      <p className="text-gray-500 mb-4">{item.duration}</p>
                      <ul className="list-disc list-inside space-y-2">
                        {item.responsibilities.map((responsibility, rIndex) => (
                          <li key={rIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        {item.description.map((desc, dIndex) => (
                          <li key={dIndex}>{desc}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceProjects;
