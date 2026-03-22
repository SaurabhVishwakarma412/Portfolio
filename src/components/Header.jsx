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
    <header className="fixed w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg">
      
      <nav className="container mx-auto flex justify-between items-center px-6 py-3">

        {/*Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/images/favicon.png"
              alt="logo"
              className="w-12 h-12 rounded-full border border-purple-400/30 group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          <span className="text-2xl font-bold text-white group-hover:text-purple-300 transition">
            Saurabh
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-lg font-medium transition ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-indigo-300 hover:text-white"
              }`}
            >
              {item.name}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-purple-400 to-pink-400 transform origin-left transition ${
                  location.pathname === item.path
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}

          {/* Resume Button */}
          <a
            href="/images/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-2 rounded-xl font-medium text-white overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition"></span>

            <span className="absolute inset-0 blur-md bg-purple-500/30 opacity-0 group-hover:opacity-100 transition"></span>

            <span className="relative z-10 flex items-center gap-2">
              Resume
            </span>
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-indigo-300 hover:text-white transition"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/5 border-t border-white/10 py-8">
          <div className="flex flex-col items-center gap-6">

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-semibold ${
                  location.pathname === item.path
                    ? "text-purple-400"
                    : "text-indigo-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Resume Button */}
            <a
              href="/images/resume.pdf"
              target="_blank"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-purple-500/30 transition"
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;