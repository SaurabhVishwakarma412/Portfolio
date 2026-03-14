import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-red-400' },
    { icon: FiPhone, href: `tel:${personalInfo.phone}`, label: 'Phone', color: 'hover:text-green-400' }
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saurabh Vishwakarma
            </h3>
            <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-gray-500">
            © {currentYear} Saurabh Vishwakarma. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center gap-1">
            Built with <FiHeart className="text-red-400/70" size={12} /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;