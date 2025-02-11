import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Guvi Geek Network',
    period: 'Sept 2024 - Present',
    location: 'Chennai, Tamil Nadu',
    achievements: [
      'Optimized blog site performance, achieving a 60% improvement and successfully passing Core Web Vitals.',
      'Revamped and restructured the WordPress codebase for the blog section, improving maintainability and scalability.',
      'Automated multiple development processes, significantly enhancing productivity and efficiency.',
    ],
  },
  {
    title: 'Associate Software Engineer Intern',
    company: 'Guvi Geek Network',
    period: 'Jan 2024 - Sept 2025',
    location: 'Chennai, Tamil Nadu',
    achievements: [
      'Maintained the React site and assisted in migrating the codebase to Qwik for improved performance and efficiency.',
      `Managed the WordPress blog section, including theme development and feature updates, driving 50% of the product's traffic.`,
      'Developed back-end functionality using PHP and managed databases with Redis, MySQL, and MongoDB.',
    ],
  },
  {
    title: 'Associate Software Engineer Intern',
    company: 'Mallow Technologies',
    period: 'Aug 2023 - Dec 2023',
    location: 'Coimbatore, Tamil Nadu',
    achievements: [
      'Developed an MVC-structured Ruby on Rails website with user authentication, authorization, and image upload.',
      'Implemented CRUD operations via RESTful APIs and tested endpoints using Postman.',
      'Built a billing system mini-project with complex table logic, model callbacks, join tables, and nested attributes.',
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-primary/50 p-6 rounded-lg mb-8 border border-accent1/20 hover:border-accent1/40 transition-colors"
    >
      <h3 className="text-2xl font-bold text-accent2 mb-2">{experience.title}</h3>
      <h4 className="text-xl text-accent1 mb-4">{experience.company}</h4>
      
      <div className="flex items-center gap-4 mb-4 text-accent2/80">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{experience.location}</span>
        </div>
      </div>
      
      <ul className="list-disc list-inside text-accent2/80 space-y-2">
        {experience.achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-accent2"
        >
          Work Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;