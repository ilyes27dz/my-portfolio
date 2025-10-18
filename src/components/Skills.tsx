'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Code, Laptop, Server, Database, Wrench } from 'lucide-react';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiGithub } from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';

export default function Skills() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const basicSkills = [
    { name: 'HTML', icon: SiHtml5, description: 'Markup language for structuring web content.', color: 'text-orange-500' },
    { name: 'CSS', icon: SiCss3, description: 'Stylesheet language for designing and styling web pages.', color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, description: 'Dynamic programming language for interactive web development.', color: 'text-yellow-400' },
  ];

  const frontendSkills = [
    { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Utility-first CSS framework for rapid UI development.', color: 'text-cyan-400' },
    { name: 'React JS', icon: SiReact, description: 'JavaScript library for building user interfaces with reusable components.', color: 'text-cyan-400' },
    { name: 'Next JS', icon: SiNextdotjs, description: 'React framework for production-grade applications.', color: 'text-white' },
  ];

  const backendSkills = [
    { name: 'Node JS', icon: SiNodedotjs, description: 'JavaScript runtime for building fast and scalable server-side applications.', color: 'text-green-500' },
    { name: 'Express JS', icon: SiExpress, description: 'Minimal and flexible Node.js web application framework.', color: 'text-gray-400' },
  ];

  const databaseSkills = [
    { name: 'Mongo DB', icon: SiMongodb, description: 'NoSQL database for storing flexible, JSON-like documents.', color: 'text-green-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, description: 'Powerful open source object-relational database system.', color: 'text-blue-400' },
  ];

  const toolsSkills = [
    { name: 'Git', icon: SiGit, description: 'Version control system for tracking code changes.', color: 'text-orange-600' },
    { name: 'GitHub', icon: SiGithub, description: 'Platform for hosting and collaborating on Git repositories.', color: 'text-white' },
    { name: 'CapCut', icon: FaVideo, description: 'Video editing software for creating professional-grade content.', color: 'text-pink-400' },
  ];

  const SkillCard = ({ skill, delay }: { skill: any; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border-2 border-lime-400/20 hover:border-lime-400/50 transition-all shadow-lg hover:shadow-lime-400/20"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl blur opacity-0 hover:opacity-20 transition-opacity" />
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <skill.icon className={`w-10 h-10 ${skill.color}`} />
          </motion.div>
          <h3 className="text-white font-bold text-lg">{skill.name}</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-20 px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-4"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #ffffff, #a3e635, #ffffff)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            MY SKILLS
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A comprehensive collection of technical skills and expertise developed through years of hands-on experience in software development.
          </motion.p>
        </motion.div>

        {/* Basic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white">Basic</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} delay={0.1 + index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Laptop className="w-8 h-8 text-lime-400" />
            </motion.div>
            <h2 className="text-3xl font-bold text-lime-400">Frontend</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} delay={0.1 + index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Server className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white">Backend</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} delay={0.1 + index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Database */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Database className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white">Database</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {databaseSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} delay={0.1 + index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Wrench className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white">Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} delay={0.1 + index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
