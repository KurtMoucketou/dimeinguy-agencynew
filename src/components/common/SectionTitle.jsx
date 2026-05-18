import React from 'react';
// src/components/common/SectionTitle.jsx
import { motion } from 'framer-motion';

const SectionTitle = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{children}</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;