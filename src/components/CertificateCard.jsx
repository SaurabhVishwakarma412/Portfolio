import React from 'react';
import { FiExternalLink, FiAward } from 'react-icons/fi';

const CertificateCard = ({ certificate }) => {
  return (
    <a
      href={certificate.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image */}
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-40 object-cover rounded-t-xl"
      />

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-blue-500/5 rounded-lg flex items-center justify-center group-hover:bg-blue-500/10 transition-colors duration-300">
            <FiAward className="w-5 h-5 text-blue-500/70 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
          <FiExternalLink className="text-gray-700 group-hover:text-gray-400 transition-colors duration-300" size={18} />
        </div>

        <h3 className="text-lg font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
          {certificate.title}
        </h3>

        <p className="text-gray-500 text-sm mb-1">{certificate.issuer}</p>
        <p className="text-gray-700 text-xs">{certificate.date}</p>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/20 transition-colors duration-300 pointer-events-none"></div>
    </a>
  );
};

export default CertificateCard;