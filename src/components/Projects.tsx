'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiNodedotjs, SiTypescript, SiHtml5, SiCss3, SiJavascript, SiExpress, SiPostgresql, SiPython, SiPhp, SiMysql, SiPrisma } from 'react-icons/si';
import Image from 'next/image';

const techIcons: any = {
  'React': { icon: SiReact, color: 'text-cyan-400' },
  'Next.js': { icon: SiNextdotjs, color: 'text-white' },
  'Next.js 14': { icon: SiNextdotjs, color: 'text-white' },
  'Tailwind': { icon: SiTailwindcss, color: 'text-cyan-400' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-cyan-400' },
  'MongoDB': { icon: SiMongodb, color: 'text-green-500' },
  'Node.js': { icon: SiNodedotjs, color: 'text-green-500' },
  'TypeScript': { icon: SiTypescript, color: 'text-blue-600' },
  'HTML': { icon: SiHtml5, color: 'text-orange-500' },
  'CSS': { icon: SiCss3, color: 'text-blue-500' },
  'JavaScript': { icon: SiJavascript, color: 'text-yellow-400' },
  'Express': { icon: SiExpress, color: 'text-gray-400' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-blue-400' },
  'Python': { icon: SiPython, color: 'text-yellow-500' },
  'PHP': { icon: SiPhp, color: 'text-indigo-600' },
  'MySQL': { icon: SiMysql, color: 'text-blue-500' },
  'Prisma': { icon: SiPrisma, color: 'text-cyan-400' },
};

export default function Projects() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);

    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(err => console.error('Error loading projects:', err));
  }, []);

  const handlePreviousImage = () => {
    if (selectedProjectIndex !== null) {
      const project = projects[selectedProjectIndex];
      const images = project.images || [project.image];
      setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
    }
  };

  const handleNextImage = () => {
    if (selectedProjectIndex !== null) {
      const project = projects[selectedProjectIndex];
      const images = project.images || [project.image];
      setCurrentImageIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedProjectIndex !== null) {
        if (e.key === 'ArrowLeft') handlePreviousImage();
        if (e.key === 'ArrowRight') handleNextImage();
        if (e.key === 'Escape') {
          setSelectedProjectIndex(null);
          setCurrentImageIndex(0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProjectIndex, currentImageIndex]);

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
    setCurrentImageIndex(0);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-20 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-6"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #ffffff, #a3e635, #ffffff)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            MY PROJECTS
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Here are some of the projects I have worked on, showcasing my skills in web development and UI/UX design.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-lime-400/20 hover:border-lime-400/50 transition-all shadow-lg hover:shadow-lime-400/20"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl blur opacity-0 hover:opacity-20 transition-opacity" />
              
              <div className="relative">
                <div 
                  className="relative h-56 overflow-hidden bg-gray-800 cursor-pointer group"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <ZoomIn className="w-12 h-12 text-lime-400" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech: string, i: number) => {
                      const TechIcon = techIcons[tech]?.icon;
                      const color = techIcons[tech]?.color;
                      
                      return TechIcon ? (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          <TechIcon className={`w-5 h-5 ${color}`} />
                          <span className="text-gray-300 text-xs font-semibold">{tech}</span>
                        </motion.div>
                      ) : null;
                    })}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-lime-400 text-gray-900 rounded-lg font-bold hover:bg-lime-500 transition-colors flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live 🔗
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub 🔗
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: 'spring', damping: 20 }}
                className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-lime-400/30 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 rounded-3xl blur-xl opacity-30" />

                {/* Content */}
                <div className="relative">
                  {/* Close Button */}
                  <motion.button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-lime-400/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-gray-900" />
                  </motion.button>

                  {/* Image Container */}
                  <div className="relative">
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-gray-950">
                      <Image
                        key={currentImageIndex}
                        src={(projects[selectedProjectIndex].images?.[currentImageIndex]) || projects[selectedProjectIndex].image}
                        alt={projects[selectedProjectIndex].title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {(projects[selectedProjectIndex].images?.length > 1) && (
                      <>
                        <motion.button
                          onClick={handlePreviousImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-lime-400/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors shadow-xl"
                          whileHover={{ scale: 1.1, x: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-900" />
                        </motion.button>

                        <motion.button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-lime-400/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors shadow-xl"
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronRight className="w-6 h-6 text-gray-900" />
                        </motion.button>
                      </>
                    )}

                    {/* Image Counter Dots */}
                    {(projects[selectedProjectIndex].images?.length > 1) && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {projects[selectedProjectIndex].images.map((_: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex ? 'bg-lime-400 w-6' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {projects[selectedProjectIndex].title}
                    </h2>
                    <p className="text-gray-400 mb-4">
                      {projects[selectedProjectIndex].fullDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProjectIndex].technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-sm font-medium border border-lime-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
