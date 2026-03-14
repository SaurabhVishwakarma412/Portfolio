import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import CertificateCard from '../components/CertificateCard';
import StatCard from '../components/StatCard';
import { personalInfo, skills, projects, certifications, achievements, education, experience } from '../utils/constants';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar, FiAward, FiCode, FiCodepen, FiCopy } from 'react-icons/fi';
import Skills from '../components/Skills';
import { SiBigcartel, SiFiles, SiFilezilla, SiPagekit, SiPagerduty } from 'react-icons/si';
import { FaStreetView } from 'react-icons/fa';
import { PiReadCvLogo } from "react-icons/pi";
import { MdOutlineDoubleArrow } from "react-icons/md";

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
      <span className="text-[#ff4d4d] font-['Poppins'] tracking-wide text-2xl ">Hi, I'm</span>
      <h1 className="text-5xl md:text-7xl font-bold font-['Montserrat']">
        <span className="bg-gradient-to-r from-[#ff4d4d] via-[#9b4dff] to-[#b300ff] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
          {personalInfo.name}
        </span>
      </h1>
      <h2 className="text-3xl md:text-4xl text-gray-700 font-['Poppins'] font-light">{personalInfo.title}</h2>
      <p className="max-w-2xl text-gray-600 text-lg font-['Inter'] leading-relaxed">
        Building scalable web applications and turning ideas into real products.
        Passionate about clean code, modern tech, and solving real-world problems.
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
        <div className="flex items-center gap-2 text-gray-600">
          <FiMapPin className="text-[#ff4d4d]" />
          <span className="font-['Inter']">{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FiCalendar className="text-[#9b4dff]" />
          <span className="font-['Inter']">{personalInfo.batch}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
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
        // download
        className="w-80 lg:w-88 flex items-center justify-between gap-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 px-6 py-4 rounded-xl border border-purple-500/30 hover:from-purple-900/50 hover:to-pink-900/50 hover:border-purple-400 transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
            <PiReadCvLogo className="text-purple-400" size={24} />

          </div>
          <div>
            <p className="text-xs text-purple-400/70">Download</p>
            <p className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
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

      {/* Achievements Section */}
      <motion.section
        className="py-16 md:py-24"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SectionHeading title="Achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-8">
          <StatCard
            label="LeetCode Problems"
            value={achievements.leetcode.solved}
            subValue={`${achievements.leetcode.easy} Easy · ${achievements.leetcode.medium} Medium · ${achievements.leetcode.hard} Hard`}
          />
          <StatCard
            label="Current Streak"
            value={`${achievements.leetcode.streak} days`}
            subValue={`Longest: ${achievements.leetcode.longestStreak} days`}
          />
          <StatCard
            label="GitHub Repos"
            value={achievements.github.repos}
            subValue={`${achievements.github.commits} commits`}
          />
          <StatCard
            label="HackerRank"
            value={`${achievements.leetcode.badges} badges`}
            subValue="7+ platforms"
          />
        </div>

      </motion.section>

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
            <div key={index} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800 font-['Poppins']">{edu.degree}</h3>
                <span className="text-[#b300ff] font-['Montserrat'] text-sm font-medium">{edu.period}</span>
              </div>
              <p className="text-gray-600 mb-2 font-['Inter']">{edu.institution}, {edu.location}</p>
              <p className="text-[#9b4dff] font-['Inter'] font-medium">{edu.score}</p>
            </div>
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

        <div className="space-y-6 mt-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800 font-['Poppins']">{exp.role}</h3>
                <span className="text-[#b300ff] font-['Montserrat'] text-sm font-medium">{exp.date}</span>
              </div>
              <p className="text-gray-600 mb-2 font-['Inter'] font-medium">{exp.organization}</p>
              <p className="text-gray-500 font-['Inter'] leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;