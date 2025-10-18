'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Paintbrush, Smartphone, Code, Zap, Database, Bug } from 'lucide-react';

export default function Services() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const services = [
    {
      icon: Paintbrush,
      title: 'UI Development',
      description: 'Creating modern and responsive user interfaces.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Web Design',
      description: 'Ensuring compatibility across all devices.',
    },
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'Building interactive web applications.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhancing website speed and efficiency.',
    },
    {
      icon: Database,
      title: 'API Integration',
      description: 'Connecting front-end with back-end services.',
    },
    {
      icon: Bug,
      title: 'Testing & Debugging',
      description: 'Ensuring high-quality and bug-free code.',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-20 px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-6"
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
            MY SERVICES
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Here are the main services I offer to help you build, optimize, and grow your digital presence.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border-2 border-lime-400/20 hover:border-lime-400/50 transition-all shadow-lg hover:shadow-lime-400/20"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl blur opacity-0 hover:opacity-20 transition-opacity" />
              
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-12 h-12 text-lime-400 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
