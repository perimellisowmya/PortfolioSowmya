import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative text-black py-16 px-4">
      <div className="container mx-auto flex items-center justify-center">
        {/* Vertical Line */}
        <div className="relative flex-grow">
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>

          <div className="relative flex flex-col items-center text-center z-10">
            {/* Text on the Left of the Vertical Line */}
            <motion.div
              className="mb-12 px-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6">Want to talk?</h2>
              <motion.h3
                className="text-3xl font-semibold mb-4 text-blue-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hire me
              </motion.h3>
              <p className="text-lg mb-6">
                If you have a project where you need my help, that's cool!
              </p>
              <motion.h3
                className="text-3xl font-semibold mb-4 text-green-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Just talk
              </motion.h3>
              <p className="text-lg">
                Want to connect and talk regarding Tech and Web3? I’m here.
              </p>
            </motion.div>

            {/* Text on the Right of the Vertical Line */}
            <motion.div
              className="mb-12 px-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h3
                className="text-3xl font-semibold mb-4 text-purple-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Collaborate
              </motion.h3>
              <p className="text-lg mb-6">
                Want to build something together and have fun as well? I am
                listening!
              </p>
              <motion.a
                href="mailto:perimellisowmya@gmail.com"
                className="text-xl font-semibold bg-blue-500 text-black py-2 px-6 rounded shadow-lg transition-transform transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Mail Me
              </motion.a>
              <p className="text-2xl mt-6">Contact:6303370113</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
