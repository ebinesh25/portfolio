import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center bg-primary text-accent2 p-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent1 via-accent2 to-accent3 text-transparent bg-clip-text animate-gradient">
          Ebinesh A
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 text-accent1">
          Software Engineer
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-accent2/80">
          Aspiring Software Developer with experience in web development and UI/UX design. 
          Proficient in multiple programming languages and technologies.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent1 hover:text-accent2 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/ebinesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent1 hover:text-accent2 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ebinesh2511@gmail.com"
            className="text-accent1 hover:text-accent2 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cta text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-cta/90 transition-colors"
        >
          <Download size={20} />
          Download Resume
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;