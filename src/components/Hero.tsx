'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb,
  SiGithub,
  SiGit,
  SiPhp,
  SiMysql,
  SiCss3,
  SiHtml5
} from 'react-icons/si';

export default function Hero() {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [currentText, setCurrentText] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const texts = [
    { text: 'Front-end', color: 'from-blue-400 to-cyan-400' },
    { text: 'Back-end', color: 'from-lime-400 to-green-400' },
    { text: 'Full-Stack', color: 'from-orange-400 to-yellow-400' },
  ];

  const skills = [
    { name: 'JavaScript', Icon: SiJavascript, color: 'bg-yellow-400', textColor: 'text-black' },
    { name: 'React', Icon: SiReact, color: 'bg-cyan-400', textColor: 'text-black' },
    { name: 'Next.js', Icon: SiNextdotjs, color: 'bg-black', textColor: 'text-white' },
    { name: 'TypeScript', Icon: SiTypescript, color: 'bg-blue-600', textColor: 'text-white' },
    { name: 'Node.js', Icon: SiNodedotjs, color: 'bg-green-600', textColor: 'text-white' },
    { name: 'MongoDB', Icon: SiMongodb, color: 'bg-green-500', textColor: 'text-white' },
    { name: 'GitHub', Icon: SiGithub, color: 'bg-gray-800', textColor: 'text-white' },
    { name: 'Git', Icon: SiGit, color: 'bg-orange-600', textColor: 'text-white' },
    { name: 'PHP', Icon: SiPhp, color: 'bg-indigo-600', textColor: 'text-white' },
    { name: 'MySQL', Icon: SiMysql, color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'CSS3', Icon: SiCss3, color: 'bg-blue-400', textColor: 'text-white' },
    { name: 'HTML5', Icon: SiHtml5, color: 'bg-orange-500', textColor: 'text-white' },
  ];
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
      setTheme(currentTheme || 'dark');
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [mounted]);

  const bgGradient = theme === 'light' 
    ? 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    : 'bg-gradient-to-br from-[#2d4a3e] via-[#3a5a47] to-[#4a6a55]';

  if (!mounted) {
    return <div className="min-h-screen bg-[#2d4a3e]" />;
  }

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-between px-8 md:px-20 overflow-hidden ${bgGradient} pt-20 pb-32`}
      id="home"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-lime-200/30' : 'bg-lime-400/10'
          }`}
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-purple-200/30' : 'bg-purple-500/10'
          }`}
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Transparent Animated Text Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {['CODE', 'WEB', 'API', 'DEV'].map((text, index) => (
          <motion.div
            key={index}
            className={`absolute text-9xl font-black ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
            style={{
              left: `${(index * 25) % 80}%`,
              top: `${(index * 20) % 60}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Left Side - Your Photo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative hidden lg:block z-10"
      >
        {/* Floating Decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-10 -left-10 w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-3xl">💻</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -left-20 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-2xl">▶️</span>
        </motion.div>

        {/* Your Photo */}
        <div className={`relative w-96 h-96 rounded-full overflow-hidden border-4 ${
          theme === 'light' ? 'border-gray-200' : 'border-white/20'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200" />
          <Image
            src="/01.jpg"
            alt="NEGHEMOUCHE ILYES - Full Stack Developer"
            fill
            className="object-cover object-top"
            priority
            sizes="384px"
          />
        </div>

        {/* Social Links & Download CV - تحت الصورة */}
<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
  {/* LinkedIn */}
  <motion.a
    href="https://www.linkedin.com/in/ilyes-neghemouche/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
    whileHover={{ scale: 1.15, y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </motion.a>

  {/* GitHub */}
  <motion.a
    href="https://github.com/ilyes27dz"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
      theme === 'light' ? 'bg-gray-800 hover:bg-gray-900' : 'bg-white hover:bg-gray-100'
    }`}
    whileHover={{ scale: 1.15, y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg className={`w-7 h-7 ${theme === 'light' ? 'text-white' : 'text-gray-900'}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  </motion.a>

{/* Download CV - يفتح في تاب جديد */}
<motion.a
  href="/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center shadow-lg hover:bg-lime-500 transition-colors"
  whileHover={{ scale: 1.15, y: -5 }}
  whileTap={{ scale: 0.9 }}
>
  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
</motion.a>



    <motion.a
    href="https://facebook.com/ilyes.negh"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
    whileHover={{ scale: 1.15, y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </motion.a>

</div>

        <motion.button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`absolute bottom-10 left-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
            theme === 'light' ? 'bg-gray-900' : 'bg-white'
          }`}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-2xl">✉️</span>
        </motion.button>
      </motion.div>

      {/* Right Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className={`text-xl flex items-center gap-2 ${
            theme === 'light' ? 'text-gray-600' : 'text-white/80'
          }`}>
            Hello There! 👋
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>I am </span>
          <motion.span
            className="inline-block"
            style={{
              backgroundImage: 'linear-gradient(90deg, #a3e635, #4ade80, #10b981)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            Ilyes
          </motion.span>
        </motion.h1>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-8 h-32"
        >
          <div className="relative h-20 overflow-hidden flex items-center gap-3">
            <AnimatePresence mode="wait">
              {currentText > 0 && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="text-yellow-400 text-6xl"
                >
                  &
                </motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentText}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-12"
              >
                <span
                  className="inline-block font-bold"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${
                      currentText === 0 ? '#60a5fa, #3b82f6' : currentText === 1 ? '#a3e635, #84cc16' : '#f97316, #ea580c'
                    })`,
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {texts[currentText].text}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className={`mt-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Developer
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`text-lg mb-8 max-w-2xl ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          The combination of my passion for full-stack development,
          <br />
          clean code & seamless user experience.
        </motion.p>

        {/* Get In Touch Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <motion.a
            href="/contact"
            className="relative w-40 h-40 rounded-full border-2 border-lime-400 flex items-center justify-center cursor-pointer group inline-flex"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <div className="text-center">
              <p className="text-lime-400 font-bold text-sm">Get</p>
              <p className={`font-bold text-lg ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                In Touch ↗
              </p>
            </div>
          </motion.a>
        </motion.div>

        {/* Tech Stack Pills with Real Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`${skill.color} ${skill.textColor} px-3 py-2.5 rounded-full font-semibold shadow-lg cursor-pointer flex items-center justify-center gap-2`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <skill.Icon className="text-base md:text-lg" />
              <span className="text-xs md:text-sm font-bold">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      
    </section>
    
  );
}
