import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ label, value, subValue, color = "blue" }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/5',
      text: 'text-blue-400',
      border: 'border-blue-500/20',
      hover: 'hover:border-blue-500/40',
      glow: 'bg-blue-500/10'
    },
    purple: {
      bg: 'bg-purple-500/5',
      text: 'text-purple-400',
      border: 'border-purple-500/20',
      hover: 'hover:border-purple-500/40',
      glow: 'bg-purple-500/10'
    },
    green: {
      bg: 'bg-green-500/5',
      text: 'text-green-400',
      border: 'border-green-500/20',
      hover: 'hover:border-green-500/40',
      glow: 'bg-green-500/10'
    },
    orange: {
      bg: 'bg-orange-500/5',
      text: 'text-orange-400',
      border: 'border-orange-500/20',
      hover: 'hover:border-orange-500/40',
      glow: 'bg-orange-500/10'
    }
  };

  const getColorByLabel = (label) => {
    if (label.includes('LeetCode')) return colorClasses.blue;
    if (label.includes('Streak')) return colorClasses.purple;
    if (label.includes('GitHub')) return colorClasses.green;
    if (label.includes('HackerRank')) return colorClasses.orange;
    return colorClasses[color] || colorClasses.blue;
  };

  const styles = getColorByLabel(label);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group relative bg-[#0a0a0a] p-6 rounded-xl border ${styles.border} ${styles.hover} transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-black/50`}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 ${styles.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Value */}
        <div className={`text-3xl font-bold ${styles.text} mb-2 group-hover:scale-105 transition-transform duration-300 origin-left`}>
          {value}
        </div>
        
        {/* Label */}
        <div className="text-gray-400 font-medium text-sm mb-1 group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </div>
        
        {/* Sub value */}
        {subValue && (
          <div className="text-gray-600 text-xs group-hover:text-gray-500 transition-colors duration-300">
            {subValue}
          </div>
        )}
      </div>

      {/* Decorative glow element */}
      <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${styles.glow} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-${styles.text.replace('text-', '')}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </motion.div>
  );
};

export default StatCard;