import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        
        {/* Left Side */}
        <p>
          © {new Date().getFullYear()} AdamTech / Let's grow together 🚀
        </p>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 text-gray-600">
          <a href="#" className="hover:text-black transition">
            <FaGithub size={16} />
          </a>
          <a href="#" className="hover:text-black transition">
            <FaLinkedinIn size={16} />
          </a>
          <a href="#" className="hover:text-black transition">
            <FaEnvelope size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;