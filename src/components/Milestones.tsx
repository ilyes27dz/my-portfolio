'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const milestones = [
  {
    title: 'Freelance Projects',
    value: 20,
    suffix: '+',
    description: 'Websites Delivered',
  },
  {
    title: 'Client Satisfaction',
    value: 5,
    suffix: '/5',
    description: 'Rated 5/5 by Clients',
  },
  {
    title: 'Web Development',
    value: 2,
    suffix: '+',
    description: 'Years of Experience',
  },
  {
    title: 'Open Source',
    value: 15,
    suffix: '+',
    description: 'Contributions on GitHub',
  },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Milestones() {
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

  const bgGradient = theme === 'light'
    ? 'bg-gradient-to-b from-gray-50 to-white'
    : 'bg-gradient-to-b from-[#2d4a3e] to-[#1a2e24]';

  return (
    <section className={`py-20 px-8 md:px-20 ${bgGradient}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className={`text-5xl md:text-7xl font-bold mb-4 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          Milestones &<br />Recognitions
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4"
            >
              <div className="flex-1">
                <h3 className={`font-bold text-2xl mb-2 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {milestone.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {milestone.description}
                </p>
                <div className="text-lime-400 font-bold text-5xl">
                  <Counter value={milestone.value} />
                  {milestone.suffix}
                </div>
              </div>

              <motion.div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                  theme === 'light' ? 'border-gray-900' : 'border-white'
                }`}
                whileHover={{ scale: 1.2, rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <span className={theme === 'light' ? 'text-gray-900 text-2xl' : 'text-white text-2xl'}>→</span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
