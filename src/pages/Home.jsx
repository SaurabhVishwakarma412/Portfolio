import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import CertificateCard from '../components/CertificateCard';

import { personalInfo, skills, projects, certifications, education, experience } from '../utils/constants';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar, FiAward, FiCode } from 'react-icons/fi';
import Skills from '../components/Skills';
import { PiReadCvLogo } from "react-icons/pi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Achievements from '../components/Achievements';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-gradient-to-br from-[#181435] to-[#2d1c43]">
      {/* Hero Section */}
      <motion.section
        className="min-h-[80vh] flex items-center"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl lg:max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <span className="text-[#ffffff] font-['Poppins'] tracking-wide text-2xl ">Hi, I'm</span>
            <h1 className="text-5xl md:text-7xl font-bold font-['Montserrat']">
              <span className="bg-gradient-to-r from-[#ff4d4d] via-[#9b4dff] to-[#b300ff] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl text-purple-400 font-['Poppins'] font-light">{personalInfo.title}</h2>
            <p className="max-w-2xl text-indigo-100 text-lg font-['Inter'] leading-relaxed">
              Aspiring Software Engineer and B.Tech CSE student at LPU, skilled in full-stack development, focused on building scalable web applications and solving real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00e676] to-[#00c853] text-black rounded-lg hover:shadow-lg hover:shadow-[#00c853]/30 transition-all duration-300 font-['Poppins']"
              >
                <FiGithub /> GitHub
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00e676] to-[#00c853] text-black rounded-lg hover:shadow-lg hover:shadow-[#00c853]/30 transition-all duration-300 font-['Poppins']"
              >
                <FiLinkedin /> LinkedIn
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#00c853] text-[#00c853] rounded-lg hover:bg-[#00c853] hover:text-black transition-all duration-300 font-['Poppins']"
              >
                <FiMail /> Contact Me
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-indigo-100 ">
                <FiMapPin className="text-[#ff4d4d]" />
                <span className="font-['Inter']">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-100 ">
                <FiCalendar className="text-[#9b4dff]" />
                <span className="font-['Inter']">{personalInfo.batch}</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-100 ">
                <FiAward className="text-[#b300ff]" />
                <span className="font-['Inter']">{personalInfo.cgpa} CGPA</span>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image with Resume Box Below */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            {/* Profile Image */}
            <div className="relative w-80 h-96 md:w-88 md:h-96 lg:w-88 lg:h-96">
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d4d] via-[#9b4dff] to-[#b300ff] rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/images/Pic.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#ff4d4d] to-[#b300ff] rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-[#9b4dff] to-[#ff4d4d] rounded-full opacity-70 blur-xl"></div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-full shadow-lg border border-[#9b4dff] flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FiCode className="text-[#ff4d4d]" size={16} />
                <span className="text-sm font-['Poppins'] text-[#ff4d4d]">Problem Solver</span>
              </motion.div>

              <motion.div
                className="absolute -top-2 -left-2 bg-white px-4 py-2 rounded-full shadow-lg border border-[#ff4d4d] flex items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <FiCode className="text-[#b300ff]" size={16} />
                <span className="text-sm font-['Poppins'] text-[#9b4dff]">Web Developer</span>
              </motion.div>
            </div>

            {/* Resume Download Box - Positioned below the image */}
            <a
              href="public/images/resume.pdf"
              download
              className="w-80 lg:w-88 flex py-8 items-center justify-between gap-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 px-6 rounded-xl border border-purple-500/30 hover:from-purple-900/50 hover:to-pink-900/50 hover:border-purple-400 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <PiReadCvLogo className="text-purple-400" size={24} />

                </div>
                <div>
                  <p className="text-xs text-purple-400/70">Download</p>
                  <p className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    Resume
                  </p>
                </div>
              </div>
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                <MdOutlineDoubleArrow className="text-purple-400" size={28} />
              </div>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Projects Section */}
      <motion.section
        className="py-16 md:py-24"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SectionHeading title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.section>

      {/* <Achievements /> */}
      <Achievements />

      {/* Certifications Section */}
      <motion.section
        className="py-16 md:py-24"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SectionHeading title="Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {certifications.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-16 md:py-24"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SectionHeading title="Education" />

        <div className="space-y-6 mt-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Glass Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-purple-500/10 hover:border-purple-400/30 transition-all duration-300">

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 relative z-10">
                  <h3 className="text-xl font-semibold text-white font-['Poppins']">
                    {edu.degree}
                  </h3>

                  <span className="text-sm font-medium text-purple-300 font-['Montserrat'] bg-white/10 px-3 py-1 rounded-full border border-white/10 mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>

                {/* Institution */}
                <p className="text-indigo-200 mb-2 font-['Inter'] relative z-10">
                  {edu.institution}, {edu.location}
                </p>

                {/* Score */}
                <p className="text-purple-300 font-['Inter'] font-medium relative z-10">
                  {edu.score}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-16 md:py-24"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SectionHeading title="Leadership & Experience" />

        <div className="space-y-8 mt-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-500 rounded-full hidden md:block"></div>

              <div className="relative ml-0 md:ml-8">
                {/* Glass Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 hover:border-purple-400/30 hover:shadow-purple-500/10 transition-all duration-300 group-hover:translate-x-1">

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white font-['Poppins']">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Date */}
                    <div className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full border border-white/10">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium text-purple-300">
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10 relative z-10">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-indigo-200 font-['Inter'] font-medium">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-indigo-300 font-['Inter'] leading-relaxed relative z-10">
                    {exp.description}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;