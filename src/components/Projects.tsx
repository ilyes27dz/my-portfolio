'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiNodedotjs, SiTypescript, SiHtml5, SiCss3, SiJavascript, SiExpress, SiPostgresql, SiPython, SiPhp, SiMysql } from 'react-icons/si';
import Image from 'next/image';

// قائمة الأيقونات المتاحة
const techIcons: any = {
  'React': { icon: SiReact, color: 'text-cyan-400' },
  'Next.js': { icon: SiNextdotjs, color: 'text-white' },
  'Tailwind': { icon: SiTailwindcss, color: 'text-cyan-400' },
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
};

export default function Projects() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);

    // تحميل المشاريع من JSON
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(err => console.error('Error loading projects:', err));
  }, []);

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : projects.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex < projects.length - 1 ? selectedImageIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex, projects.length]);

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
                {/* Project Image with Zoom */}
                <div 
                  className="relative h-56 overflow-hidden bg-gray-800 cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  
                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <ZoomIn className="w-12 h-12 text-lime-400" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
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

                  {/* Buttons */}
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

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm cursor-zoom-out"
            />

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-6xl max-h-[90vh] w-full px-4"
            >
              <div className="relative w-full h-full">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="absolute -top-12 right-0 w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-900" />
                </button>

                {/* Previous Button */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </motion.button>

                {/* Next Button */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </motion.button>

                {/* Image */}
                <div className="relative w-full h-[80vh] rounded-xl overflow-hidden">
                  <Image
                    key={selectedImageIndex}
                    src={projects[selectedImageIndex].image}
                    alt={projects[selectedImageIndex].title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Project Title */}
                <div className="absolute -bottom-12 left-0 right-0 text-center">
                  <h3 className="text-white text-xl font-bold">
                    {projects[selectedImageIndex].title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {selectedImageIndex + 1} / {projects.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
