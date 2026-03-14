import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/constants';
import { FiFilter, FiCode } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const technologies = ['all', ...new Set(projects.flatMap(p => p.tech))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));

  const totalProjects = projects.length;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.section 
      className="py-16 md:py-20 bg-gray-900"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="All Projects" />
        
        {/* Simple Stats */}
        <div className="bg-gray-800/50 rounded-lg p-4 mb-6 inline-block">
          <p className="text-gray-300">
            <span className="text-blue-400 font-bold">{totalProjects}</span> Total Projects
          </p>
        </div>

        {/* Filter Section - Simplified */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <FiFilter className="text-gray-400" />
            <h3 className="text-gray-300 font-medium">Filter by Technology</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <button
                key={index}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {tech === 'all' ? 'All Projects' : tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Fixed with equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCode className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400 mb-4">No projects match the selected filter.</p>
            <button
              onClick={() => setFilter('all')}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Simple Footer */}
        {filteredProjects.length > 0 && (
          <p className="text-gray-500 text-sm text-center mt-8">
            Showing {filteredProjects.length} of {totalProjects} projects
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;