import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { 
  // Languages
  SiC, SiCplusplus, SiPython, SiJavascript, SiPhp,
  // Web Technologies
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNodedotjs, SiExpress,
  // Databases
  SiMysql, SiMongodb, SiPostgresql,
  // Tools
  SiGit, SiGithub, SiPostman, SiFigma, SiXampp,
  // Soft Skills Icons (using alternative icons)
  SiGoogleanalytics, SiGooglescholar, SiGoogleoptimize, SiGooglecloud,
  SiJovian
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const Skills = ({ skills }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Helper function to get logos for skills
  const getSkillLogo = (skill) => {
    const iconSize = 36; // Increased from 28 to 36
    
    const logos = {
      // Languages
      'C': <SiC size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
      'C++': <SiCplusplus size={iconSize} className="text-[#9b4dff] group-hover:scale-110 transition-transform" />,
      'Java': <FaJava size={iconSize} className="text-[#b300ff] group-hover:scale-110 transition-transform" />,
      'Python': <SiPython size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
      'JavaScript': <SiJavascript size={iconSize} className="text-[#9b4dff] group-hover:scale-110 transition-transform" />,
      'PHP': <SiPhp size={iconSize} className="text-[#b300ff] group-hover:scale-110 transition-transform" />,
      
      // Web Technologies
      'HTML': <SiHtml5 size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
      'CSS': <SiCss3 size={iconSize} className="text-[#9b4dff] group-hover:scale-110 transition-transform" />,
      'Tailwind CSS': <SiTailwindcss size={iconSize} className="text-[#1956a0] group-hover:scale-110 transition-transform" />,
      'React.js': <SiReact size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
      'Node.js': <SiNodedotjs size={iconSize} className="text-[#9b4dff] group-hover:scale-110 transition-transform" />,
      'Express.js': <SiExpress size={iconSize} className="text-[#14cb60] group-hover:scale-110 transition-transform" />,
      
      // Databases
      'MySQL': <SiMysql size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
      'MongoDB': <SiMongodb size={iconSize} className="text-[#049041] group-hover:scale-110 transition-transform" />,
      'PostgreSQL': <SiPostgresql size={iconSize} className="text-[#1e569e] group-hover:scale-110 transition-transform" />,
      
      // Tools
      'Git': <SiGit size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
      'GitHub': <SiGithub size={iconSize} className="text-[#000000] group-hover:scale-110 transition-transform" />,
      'Postman': <SiPostman size={iconSize} className="text-[#b300ff] group-hover:scale-110 transition-transform" />,
      'XAMPP': <SiXampp size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
      'Figma': <SiFigma size={iconSize} className="text-[#9b4dff] group-hover:scale-110 transition-transform" />,
    };
    
    return logos[skill] || <span className="text-3xl text-gray-400">📁</span>; // Increased text size
  };

  // Helper function for soft skills
  const getSoftSkillLogo = (skill) => {
    const iconSize = 36; // Increased from 28 to 36
    
    const logos = {
      'Problem-Solving': <SiGoogleanalytics size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
      'Leadership': <SiGooglescholar size={iconSize} className="text-[#9b4dff] group-hover:scale-110 transition-transform" />,
      'Adaptability': <SiGoogleoptimize size={iconSize} className="text-[#b300ff] group-hover:scale-110 transition-transform" />,
      'Teamwork': <SiGooglecloud size={iconSize} className="text-[#ff4d4d] group-hover:scale-110 transition-transform" />,
    };
    
    return logos[skill] || <span className="text-3xl text-gray-400">⭐</span>; // Increased text size
  };

  return (
    <motion.section 
      className="py-16 md:py-24"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <SectionHeading title="Skills" />
      
      <div className="space-y-12 mt-8">
        {/* Languages */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-6 font-['Poppins'] relative inline-block">
            Languages
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#ff4d4d] to-[#9b4dff] rounded-full"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.languages.map((skill, index) => (
              <div 
                key={index}
                className="group bg-[#f8f5ff] p-5 rounded-xl border border-[#e6e0fa] shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#ff4d4d] hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#ff4d4d]/5 group-hover:to-[#9b4dff]/5 transition-all duration-300">
                    {getSkillLogo(skill)}
                  </div>
                  <span className="font-['Poppins'] text-sm font-medium text-gray-700 group-hover:text-[#ff4d4d] transition-colors">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Technologies */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-6 font-['Poppins'] relative inline-block">
            Web Technologies & Databases
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#9b4dff] to-[#b300ff] rounded-full"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.webTechnologies.map((skill, index) => (
              <div 
                key={index}
                className="group bg-[#fff5f5] p-5 rounded-xl border border-[#ffe0e0] shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9b4dff] hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#9b4dff]/5 group-hover:to-[#b300ff]/5 transition-all duration-300">
                    {getSkillLogo(skill)}
                  </div>
                  <span className="font-['Poppins'] text-sm font-medium text-gray-700 group-hover:text-[#9b4dff] transition-colors">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-6 font-['Poppins'] relative inline-block">
            Tools & Platforms
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#ff4d4d] to-[#b300ff] rounded-full"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.tools.map((skill, index) => (
              <div 
                key={index}
                className="group bg-[#fff0f5] p-5 rounded-xl border border-[#ffd0e0] shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#ff4d4d] hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#ff4d4d]/5 group-hover:to-[#b300ff]/5 transition-all duration-300">
                    {getSkillLogo(skill)}
                  </div>
                  <span className="font-['Poppins'] text-sm font-medium text-gray-700 group-hover:text-[#ff4d4d] transition-colors">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-6 font-['Poppins'] relative inline-block">
            Soft Skills
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#9b4dff] to-[#ff4d4d] rounded-full"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.softSkills.map((skill, index) => (
              <div 
                key={index}
                className="group bg-[#f0f5ff] p-5 rounded-xl border border-[#d0e0ff] shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9b4dff] hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#9b4dff]/5 group-hover:to-[#ff4d4d]/5 transition-all duration-300">
                    {getSoftSkillLogo(skill)}
                  </div>
                  <span className="font-['Poppins'] text-sm font-medium text-gray-700 group-hover:text-[#9b4dff] transition-colors">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;