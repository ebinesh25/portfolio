import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Server, Layout, Github as Git, Terminal, Cpu, FileJson, Workflow } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: <Code2 size={24} />,
    items: ['Python', 'Ruby', 'JavaScript', 'PHP']
  },
  {
    category: 'Frontend',
    icon: <Layout size={24} />,
    items: ['React.js', 'jQuery', 'Bootstrap']
  },
  {
    category: 'Backend',
    icon: <Server size={24} />,
    items: ['Ruby on Rails', 'RESTful API', 'WordPress']
  },
  {
    category: 'Databases',
    icon: <Database size={24} />,
    items: ['MySQL', 'MongoDB', 'Redis']
  },
  {
    category: 'Tools',
    icon: <Workflow size={24} />,
    items: ['Git', 'Postman', 'Figma']
  }
];

const SkillCategory = ({ category, icon, items, index }: { 
  category: string; 
  icon: React.ReactNode; 
  items: string[];
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary/50 p-6 rounded-lg border border-accent1/20 hover:border-accent1/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-accent1">{icon}</span>
        <h3 className="text-xl font-semibold text-accent2">{category}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className="skill-icon flex items-center gap-2 text-accent2/80 hover:text-accent1 cursor-pointer p-2 rounded-lg hover:bg-accent1/10"
          >
            <span className="text-sm">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-primary relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-accent2"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCategory key={skill.category} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;