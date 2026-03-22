import React from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const LiveStats = () => {

  // 🔥 STATIC DATA
  const github = {
    repos: 25,
    contributions: 185,
    followers: 1,
    following: 4,
  };

  const leetcode = {
    solved: 351,
    easy: 202,
    medium: 144,
    hard: 5,
  };

  // 🔥 Card UI
  const Card = ({ title, icon, children }) => (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5 text-white text-lg font-semibold">
          <span className="p-2 rounded-lg bg-white/10">{icon}</span>
          {title}
        </div>
        {children}
      </div>
    </motion.div>
  );

  // 🔥 Stat Row
  const Stat = ({ label, value }) => (
    <div className="flex justify-between items-center py-1">
      <span className="text-indigo-300 text-sm">{label}</span>
      <span className="text-white font-bold text-lg">{value}</span>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-[#181435] to-[#2d1c43]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Live Stats
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* 🔥 GitHub Card */}
          <Card
            title="GitHub"
            icon={<FiGithub className="text-purple-400 text-xl" />}
          >
            <div className="space-y-2">
              <Stat label="Repositories" value={github.repos} />
              <Stat label="Contributions" value={github.contributions} />
              <Stat label="Followers" value={github.followers} />
              <Stat label="Following" value={github.following} />
            </div>
          </Card>

          {/* 🔥 LeetCode Card */}
          <Card
            title="LeetCode"
            icon={<SiLeetcode className="text-yellow-400 text-xl" />}
          >
            <div className="space-y-2">
              <Stat label="Solved" value={leetcode.solved} />
              <Stat label="Easy" value={leetcode.easy} />
              <Stat label="Medium" value={leetcode.medium} />
              <Stat label="Hard" value={leetcode.hard} />
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default LiveStats;