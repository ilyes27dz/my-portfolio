'use client';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'light') {
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--bg-secondary', '#f3f4f6');
      document.documentElement.style.setProperty('--text-primary', '#000000');
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#2d4a3e');
      document.documentElement.style.setProperty('--bg-secondary', '#1a2e24');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-lime-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800" />
        )}
      </motion.div>
    </motion.button>
  );
}
