import React from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-gradient-to-br from-[#1E1B2E] to-[#2D1F3F] rounded-2xl overflow-hidden border border-[#9F7AEA]/20 hover:border-[#9F7AEA]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-flex items-center gap-1 text-[#B794F4] font-medium text-sm bg-purple-900/30 px-3 py-1 rounded-full">
              <FiStar className="text-xs" />
              {project.version}
            </span>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#E9D8FD] to-[#D6BCFA] bg-clip-text text-transparent mt-2">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B794F4] hover:text-[#9F7AEA] transition-all hover:scale-110"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="#"
              className="text-[#B794F4] hover:text-[#9F7AEA] transition-all hover:scale-110"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className="text-[#D6BCFA] mb-4 leading-relaxed">{project.description}</p>

        <div className="mb-4 bg-[#2D1F3F]/50 rounded-lg p-3 border border-[#9F7AEA]/20">
          <h4 className="text-sm font-semibold text-[#E9D8FD] mb-2 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#9F7AEA] rounded-full"></span>
            Key Features:
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-[#D6BCFA] text-sm flex items-start gap-2">
                <span className="text-[#9F7AEA] mt-1">✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-[#9F7AEA]/20 to-[#B794F4]/20 text-[#E9D8FD] rounded-full text-xs font-medium border border-[#9F7AEA]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-[#9F7AEA]/20 flex justify-between items-center text-sm">
          <span className="text-[#B794F4]">{project.date}</span>
          <span className="bg-gradient-to-r from-[#9F7AEA] to-[#B794F4] bg-clip-text text-transparent font-medium">
            {project.client || 'Personal Project'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;