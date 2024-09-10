import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
     
      <div className="absolute inset-0 overflow-hidden">
       
        <a
          href="https://www.linkedin.com/in/sowmyaperimelli "
          target="_blank"
          rel="noopener noreferrer"
          className="floating absolute w-16 h-16 bg-pink-500 rounded-full top-10 left-20 shadow-xl flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300"
        >
          <FaLinkedin className="text-2xl" />
        </a>

       
        <a
          href="https://github.com/perimellisowmya"
          target="_blank"
          rel="noopener noreferrer"
          className="floating absolute w-24 h-24 bg-blue-500 rounded-full bottom-20 right-10 shadow-xl flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>

     
      <h1 className="text-6xl font-bold mb-4">
        Hello World, I'm <span className="text-blue-400">[Sowmya]</span>
      </h1>

     
      <span className="text-2xl text-gray-300">
        <Typewriter
          words={[
            "A Creative Developer",
            "A React Specialist",
            "An Innovative Designer",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>

     
      <p className="text-center mt-6 text-lg max-w-3xl">
        Skilled frontend developer with 1.5 years of experience in creating
        applications using React JS, Material UI, and Axios. B.Tech CSE graduate
        dedicated to delivering high-quality software solutions. Proficient in
        React JS, knowledgeable in database technologies, and excels in team
        collaborations.
      </p>

      
      <div className="absolute inset-0 pointer-events-none">
        <p className="text-gray-500 absolute bottom-10 w-full text-center text-lg">
          Scroll to explore
        </p>
      </div>
    </header>
  );
};

export default Header;
