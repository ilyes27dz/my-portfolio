'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, Phone, Mail, MapPin } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT ME', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    window.dispatchEvent(new Event('storage'));
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#2d4a3e]/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        } border-b border-white/10`}
        style={{
          background: theme === 'light' && scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : scrolled 
            ? 'rgba(45, 74, 62, 0.95)' 
            : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo مع أيقونة </> محسّنة */}
          <motion.a
            href="/"
            className={`text-2xl font-bold flex items-center gap-3 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-9 h-9 bg-gradient-to-br from-lime-400 to-lime-500 rounded-lg flex items-center justify-center shadow-md"
              whileHover={{ rotate: 5 }}
            >
              <svg className="w-5 h-5 text-gray-900 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </motion.div>
            <div className="flex items-center">
              <span className="text-lime-400"></span>
              <span></span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`font-medium transition-colors ${
                  theme === 'light' 
                    ? 'text-gray-700 hover:text-lime-500' 
                    : 'text-white hover:text-lime-400'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Side - Theme + Download + Menu Button */}
          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <motion.button
              onClick={toggleTheme}
              className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-gray-900" />
              ) : (
                <Moon className="w-6 h-6 text-gray-900" />
              )}
            </motion.button>

            {/* Download Button */}
            <motion.a
              href="/cv.pdf"
              download
              className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 text-gray-900" />
            </motion.a>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              theme === 'light'
                ? 'bg-white border-gray-200'
                : 'bg-[#1a2e24] border-white/10'
            }`}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-8 py-4 transition-colors ${
                  theme === 'light'
                    ? 'text-gray-700 hover:bg-lime-50 hover:text-lime-600'
                    : 'text-white hover:bg-lime-400/10 hover:text-lime-400'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Side Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className={`fixed top-0 right-0 h-full w-96 z-50 shadow-2xl ${
                theme === 'light' ? 'bg-white' : 'bg-[#2d4a3e]'
              }`}
            >
              <div className="p-8">
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-900" />
                </motion.button>

                <div className="mt-16">
                  <h2 className={`text-3xl font-bold mb-2 ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    Hello There! 👋
                  </h2>
                  <p className={`text-lg mb-8 ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>
                    Building modern and responsive websites that blend creativity with clean code.
                  </p>

                  <div className="space-y-6">
                    <h3 className={`text-xl font-bold mb-4 ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      INFORMATION
                    </h3>

                    <motion.a
                      href="tel:+213542038084"
                      className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                        theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <Phone className="w-5 h-5 text-lime-400" />
                      <div>
                        <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Phone</p>
                        <p className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                          +213 542 03 80 84
                        </p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:ilyes.negh@gmail.com"
                      className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                        theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="w-5 h-5 text-lime-400" />
                      <div>
                        <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Email</p>
                        <p className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                          ilyes.negh@gmail.com
                        </p>
                      </div>
                    </motion.a>

                    <motion.div
                      className={`flex items-center gap-4 p-4 rounded-lg ${
                        theme === 'light' ? 'bg-gray-50' : 'bg-white/5'
                      }`}
                    >
                      <MapPin className="w-5 h-5 text-lime-400" />
                      <div>
                        <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Location</p>
                        <p className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                          Sidi Lakhdar, Mostaganem, Algeria
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-8">
                    <h3 className={`text-xl font-bold mb-4 ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      FOLLOW US
                    </h3>

                    <div className="flex gap-4">
                      {[
                        { name: 'Instagram', icon: '📷', link: '#' },
                        { name: 'Twitter', icon: '🐦', link: '#' },
                        { name: 'Behance', icon: '🎨', link: '#' },
                        { name: 'YouTube', icon: '▶️', link: '#' }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.link}
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            theme === 'light'
                              ? 'bg-gray-100 hover:bg-lime-400 text-gray-900'
                              : 'bg-white/10 hover:bg-lime-400 text-white hover:text-gray-900'
                          }`}
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-xl">{social.icon}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
