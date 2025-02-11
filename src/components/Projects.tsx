import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Website for Farmers',
    description: 'An E-commerce platform built with Ruby on Rails and React, featuring user authentication, CRUD operations, and RESTful APIs.',
    image: 'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?auto=format&fit=crop&q=80&w=1000',
    tech: ['Ruby on Rails', 'ReactJS', 'MySQL', 'RESTful API'],
    period: 'Jan 2023 - Jun 2023',
    link: '#',
    github: '#'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-primary/50 rounded-lg overflow-hidden border border-accent1/20 hover:border-accent1/40 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-accent2 mb-2">{project.title}</h3>
        <p className="text-accent2/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-accent1/10 text-accent1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-accent2/60 text-sm">{project.period}</span>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent1 hover:text-accent2 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent1 hover:text-accent2 transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-accent2"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;