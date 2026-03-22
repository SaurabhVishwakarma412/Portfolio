import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiPhp,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNodedotjs, SiExpress,
  SiMysql, SiMongodb, SiPostgresql,
  SiGit, SiGithub, SiPostman, SiFigma, SiXampp,
  SiGoogleanalytics, SiGooglescholar, SiGoogleoptimize, SiGooglecloud
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const Skills = ({ skills }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const iconSize = 36;

  const getSkillLogo = (skill) => {
    const logos = {
      'C': <SiC size={iconSize} className="text-red-400 group-hover:scale-110" />,
      'C++': <SiCplusplus size={iconSize} className="text-purple-400 group-hover:scale-110" />,
      'Java': <FaJava size={iconSize} className="text-pink-400 group-hover:scale-110" />,
      'Python': <SiPython size={iconSize} className="text-yellow-400 group-hover:scale-110" />,
      'JavaScript': <SiJavascript size={iconSize} className="text-yellow-300 group-hover:scale-110" />,
      'PHP': <SiPhp size={iconSize} className="text-indigo-400 group-hover:scale-110" />,
      'HTML': <SiHtml5 size={iconSize} className="text-orange-400 group-hover:scale-110" />,
      'CSS': <SiCss3 size={iconSize} className="text-blue-400 group-hover:scale-110" />,
      'Tailwind CSS': <SiTailwindcss size={iconSize} className="text-cyan-400 group-hover:scale-110" />,
      'React.js': <SiReact size={iconSize} className="text-cyan-300 group-hover:scale-110" />,
      'Node.js': <SiNodedotjs size={iconSize} className="text-green-400 group-hover:scale-110" />,
      'Express.js': <SiExpress size={iconSize} className="text-gray-300 group-hover:scale-110" />,
      'MySQL': <SiMysql size={iconSize} className="text-blue-300 group-hover:scale-110" />,
      'MongoDB': <SiMongodb size={iconSize} className="text-green-500 group-hover:scale-110" />,
      'PostgreSQL': <SiPostgresql size={iconSize} className="text-blue-400 group-hover:scale-110" />,
      'Git': <SiGit size={iconSize} className="text-orange-400 group-hover:scale-110" />,
      'GitHub': <SiGithub size={iconSize} className="text-white group-hover:scale-110" />,
      'Postman': <SiPostman size={iconSize} className="text-orange-500 group-hover:scale-110" />,
      'XAMPP': <SiXampp size={iconSize} className="text-orange-400 group-hover:scale-110" />,
      'Figma': <SiFigma size={iconSize} className="text-pink-400 group-hover:scale-110" />,
    };
    return logos[skill] || <span className="text-white">📁</span>;
  };

  const getSoftSkillLogo = (skill) => {
    const logos = {
      'Problem-Solving': <SiGoogleanalytics size={iconSize} className="text-pink-400" />,
      'Leadership': <SiGooglescholar size={iconSize} className="text-purple-400" />,
      'Adaptability': <SiGoogleoptimize size={iconSize} className="text-indigo-400" />,
      'Teamwork': <SiGooglecloud size={iconSize} className="text-blue-400" />,
    };
    return logos[skill] || <span className="text-white">⭐</span>;
  };

  const Card = ({ children }) => (
    <div className="group relative bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-lg hover:shadow-purple-500/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );

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
          <h3 className="text-2xl font-semibold text-white mb-6 font-['Poppins']">
            Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.languages.map((skill, i) => (
              <Card key={i}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl">
                    {getSkillLogo(skill)}
                  </div>
                  <span className="text-indigo-200 text-sm">{skill}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Web */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 font-['Poppins']">
            Web Technologies & Databases
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.webTechnologies.map((skill, i) => (
              <Card key={i}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl">
                    {getSkillLogo(skill)}
                  </div>
                  <span className="text-indigo-200 text-sm">{skill}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 font-['Poppins']">
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.tools.map((skill, i) => (
              <Card key={i}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl">
                    {getSkillLogo(skill)}
                  </div>
                  <span className="text-indigo-200 text-sm">{skill}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 font-['Poppins']">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.softSkills.map((skill, i) => (
              <Card key={i}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl">
                    {getSoftSkillLogo(skill)}
                  </div>
                  <span className="text-indigo-200 text-sm">{skill}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;