"use client";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-10 overflow-hidden">

      {/* Soft Glow Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-gray-700/20 blur-2xl top-5 left-5 rounded-full animate-pulse" />
        <div className="absolute w-40 h-40 bg-gray-600/10 blur-2xl bottom-5 right-5 rounded-full animate-pulse" />
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto px-4 flex flex-col items-center gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Name */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
          Sneara Parvin
        </h2>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: <FaGithub />, link: "https://github.com/Sneara0" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaEnvelope />, link: "mailto:snearaparvin.cse@gmail.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xl p-2 rounded-xl 
                bg-gray-800/40 border border-gray-700 
                hover:bg-gray-700/40 backdrop-blur-md
                transition-all duration-300 hover:scale-110
                hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]
              "
              whileHover={{ rotate: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Sneara Parvin. All Rights Reserved.
        </p>
      </motion.div>

      {/* Floating dots */}
      <style jsx>{`
        footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 150%;
          height: 150%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.05) 0%,
            transparent 60%
          );
          animation: spin 35s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
