'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 md:px-20 bg-gradient-to-b from-[#1a2e24] to-[#2d4a3e]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-12">
          the next big thing
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <motion.a
            href="mailto:your.email@example.com"
            className="px-12 py-6 bg-lime-400 text-black font-bold text-xl rounded-full hover:bg-lime-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Write A Message
          </motion.a>

          <motion.a
            href="/contact"
            className="px-12 py-6 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Project
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-white font-bold text-2xl mb-4">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/ilyes-neghemouche"
              className="text-gray-400 hover:text-lime-400 transition-colors flex items-center gap-2"
            >
              <span className="text-3xl">💼</span>
              <span>linkedin.com/in/ilyes-neghemouche</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-white font-bold text-2xl mb-4">WhatsApp</h3>
            <a
              href="https://wa.me/213542038084"
              className="text-gray-400 hover:text-lime-400 transition-colors flex items-center gap-2"
            >
              <span className="text-3xl">💬</span>
              <span>+213 542 03 80 84</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
