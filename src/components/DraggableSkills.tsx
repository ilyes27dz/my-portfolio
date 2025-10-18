'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const skillsData = [
  { name: 'Frontend', color: 'bg-teal-400', x: 15, y: 15 },
  { name: 'Backend', color: 'bg-pink-400', x: 8, y: 55 },
  { name: 'Database', color: 'bg-yellow-400', x: 55, y: 65 },
  { name: 'API Development', color: 'bg-yellow-300', x: 65, y: 55 },
  { name: 'Full-Stack', color: 'bg-teal-500', x: 35, y: 58 },
  { name: 'Deployment', color: 'bg-yellow-400', x: 42, y: 48 },
  { name: 'Testing', color: 'bg-yellow-300', x: 12, y: 42 },
  { name: 'Landig page', color: 'bg-teal-400', x: 18, y: 56 },
  { name: 'Store online', color: 'bg-pink-400', x: 40, y: 38 },
  { name: 'Portfolio', color: 'bg-cyan-400', x: 70, y: 50 },
];

export default function DraggableSkills() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
      setTheme(currentTheme || 'dark');
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-[500px] mb-20">
      {skillsData.map((skill, index) => (
        <motion.div
          key={index}
          drag
          dragElastic={0.2}
          dragConstraints={ref}
          initial={{ 
            y: -600,
            x: skill.x * 6,
            opacity: 0,
            rotate: Math.random() * 40 - 20,
            scale: 0.5,
          }}
          animate={isInView ? { 
            y: skill.y * 5,
            x: skill.x * 6,
            opacity: 1,
            rotate: 0,
            scale: 1,
          } : {}}
          transition={{
            type: 'spring',
            damping: 10,
            stiffness: 60,
            delay: index * 0.15,
            duration: 1.5,
          }}
          whileHover={{ 
            scale: 1.15,
            zIndex: 10,
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
            rotate: 5,
          }}
          whileDrag={{ 
            scale: 1.2,
            cursor: 'grabbing',
            zIndex: 20,
            rotate: 15,
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
          }}
          className={`absolute ${skill.color} text-black px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-xl cursor-grab select-none`}
        >
          {skill.name}
        </motion.div>
      ))}

      {/* Background hint text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2.5 }}
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center ${
          theme === 'light' ? 'text-gray-400' : 'text-gray-500'
        }`}
      >
        <p className="text-sm font-medium">✨ Drag and drop the skills! ✨</p>
      </motion.div>
    </div>
  );
}
