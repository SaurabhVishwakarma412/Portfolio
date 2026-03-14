import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg py-3">
      <nav className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo with Purple Theme */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <img 
            src="/images/favicon.png" 
            alt="logo" 
            className="rounded-full w-14 h-14 border-2 border-purple-500/30 group-hover:border-purple-400 transition-all duration-300" 
          />
          <span className="text-2xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300">
            Saurabh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium text-lg transition-all duration-300 relative group ${
                location.pathname === item.path
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              }`}
            >
              {item.name}
              
              {/* Dual-layer underline */}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-700 rounded-full"></span>
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                location.pathname === item.path ? 'scale-x-100' : ''
              }`}></span>
              
              {/* Floating dot indicator for active */}
              {location.pathname === item.path && (
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></span>
              )}
            </Link>
          ))}

          {/* Resume Button with Elegant Design */}
          <a
            href="/resume.pdf"
            className="relative px-6 py-2.5 rounded-xl font-semibold text-lg group overflow-hidden"
          >
            {/* Glass background */}
            <span className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300"></span>
            
            {/* Hover gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-pink-600/20 rounded-xl transition-all duration-500"></span>
            
            {/* Text with gradient */}
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 group-hover:from-white group-hover:to-pink-200 transition-all duration-300">
              Resume
            </span>
            
            {/* Subtle glow on hover */}
            <span className="absolute inset-0 rounded-xl bg-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-300 hover:text-purple-400 transition-colors duration-300"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Navigation with Purple Theme */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 shadow-xl py-8 border-t border-purple-500/20">
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-semibold text-2xl transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              className="relative px-8 py-3 rounded-xl font-semibold text-lg group overflow-hidden mt-2"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-pink-600/20 rounded-xl transition-all duration-500"></span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 group-hover:from-white group-hover:to-pink-200 transition-all duration-300">
                Resume
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;