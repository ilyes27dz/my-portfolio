'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, SiGithub, SiJavascript, SiPhp, SiMysql, SiCss3, SiHtml5, SiGit } from 'react-icons/si';

const techItems = [
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Git', Icon: SiGit },
  { name: 'PHP', Icon: SiPhp },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'CSS3', Icon: SiCss3 },
  { name: 'HTML5', Icon: SiHtml5 },
];

export default function HorizontalMarquee() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);

    const handleThemeChange = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
      setTheme(currentTheme || 'dark');
    };

    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);

  return (
    <div className={`w-full overflow-hidden py-6 ${
      theme === 'light' 
        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
        : 'bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600'
    }`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -1200],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {[...techItems, ...techItems, ...techItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full"
          >
            <item.Icon className="text-2xl text-white" />
            <span className="text-white font-bold text-lg">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
