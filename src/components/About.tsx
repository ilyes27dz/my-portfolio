'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { User, GraduationCap, MapPin, Briefcase, FileText, Download } from 'lucide-react';

export default function About() {
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
    : 'bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]';

  return (
    <section className={`py-20 px-8 md:px-20 ${bgGradient}`} id="about">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <motion.h2 
          className="text-6xl md:text-8xl font-bold text-white mb-6"
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
          ABOUT ME
        </motion.h2>
      </motion.div>

      {/* View CV Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <motion.a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
          
          {/* Button */}
          <div className="relative bg-gradient-to-r from-lime-400 to-green-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <FileText className="w-6 h-6" />
            </motion.div>
            <span>View CV</span>
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </motion.a>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Personal Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-lime-400/30 hover:border-lime-400/60 transition-all shadow-2xl hover:shadow-lime-400/20"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-3xl blur-xl opacity-20" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <User className="w-10 h-10 text-lime-400" />
              </motion.div>
              <h3 className="text-3xl font-bold text-lime-400">Personal Information</h3>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex justify-between items-center pb-4 border-b border-lime-400/20 hover:border-lime-400/40 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-gray-400 text-lg flex items-center gap-2">
                  <User className="w-4 h-4" /> Name:
                </span>
                <span className="text-white font-bold text-lg">NEGHEMOUCHE ILYES</span>
              </motion.div>

              <motion.div 
                className="flex justify-between items-center pb-4 border-b border-lime-400/20 hover:border-lime-400/40 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-gray-400 text-lg">Age:</span>
                <span className="text-lime-400 font-bold text-xl">28 years</span>
              </motion.div>

              <motion.div 
                className="flex justify-between items-center pb-4 border-b border-lime-400/20 hover:border-lime-400/40 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-gray-400 text-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Location:
                </span>
                <span className="text-white font-semibold text-lg">Sidi Lakhdar, Algeria</span>
              </motion.div>

              <motion.div 
                className="flex justify-between items-center"
                whileHover={{ x: 5 }}
              >
                <span className="text-gray-400 text-lg flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Experience:
                </span>
                <span className="text-lime-400 font-bold text-xl">+2 Years</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-lime-400/30 hover:border-lime-400/60 transition-all shadow-2xl hover:shadow-lime-400/20"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-lime-400 rounded-3xl blur-xl opacity-20" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <GraduationCap className="w-10 h-10 text-lime-400" />
              </motion.div>
              <h3 className="text-3xl font-bold text-lime-400">Education</h3>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex justify-between items-start pb-4 border-b border-lime-400/20 hover:border-lime-400/40 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-gray-400 text-lg">Degree:</span>
                <span className="text-white font-semibold text-lg text-right">
                  Institute Diploma in Web & Mobile Development
                </span>
              </motion.div>

              <motion.div 
                className="flex justify-between items-start pb-4 border-b border-lime-400/20 hover:border-lime-400/40 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-gray-400 text-lg">University:</span>
                <span className="text-white font-semibold text-lg text-right">
                  CFPA - Mostaganem
                </span>
              </motion.div>

              <motion.div 
                className="flex justify-between items-center pb-4 border-b border-lime-400/20 hover:border-lime-400/40 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-gray-400 text-lg">Duration:</span>
                <span className="text-lime-400 font-bold text-xl">2023 - 2025</span>
              </motion.div>

              <motion.div 
                className="flex justify-between items-center"
                whileHover={{ x: 5 }}
              >
                <span className="text-gray-400 text-lg">Field:</span>
                <span className="text-white font-semibold text-lg">Technology & Development</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
