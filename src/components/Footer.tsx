'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكنك إضافة EmailJS أو API
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-4 flex items-center justify-center gap-3">
            <span className="text-5xl">💬</span> Leave a comment
          </h2>
          <p className="text-gray-400 text-lg">For more informations contact us.</p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto"
        >
          <motion.input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-gray-800 border-2 border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-lime-400 focus:outline-none transition-colors"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-gray-800 border-2 border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-lime-400 focus:outline-none transition-colors"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.textarea
            placeholder="Enter your comment"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            className="md:col-span-2 bg-gray-800 border-2 border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-lime-400 focus:outline-none transition-colors resize-none"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            className="md:col-span-2 bg-transparent border-2 border-lime-400 text-lime-400 rounded-full px-8 py-4 font-bold text-lg flex items-center justify-center gap-3 hover:bg-lime-400 hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>

        {/* Footer Info */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-lime-400 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors">
                <MapPin className="w-5 h-5" />
                <span>Sidi Lakhdar,Mostaganem, Algeria</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>(+213) 542-038-084</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>ilyes.negh@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <motion.a href="https://facebook.com/ilyes.negh" target="_blank" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-lime-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a href="https://instagram.com" target="_blank" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-lime-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a href="https://tiktok.com" target="_blank" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-lime-400 transition-colors">
                <SiTiktok className="w-6 h-6" />
              </motion.a>
              <motion.a href="https://linkedin.com" target="_blank" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-lime-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a href="https://github.com" target="_blank" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-lime-400 transition-colors">
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-lime-400 mb-6">About</h3>
            <p className="text-gray-400 leading-relaxed">
              We provide top-quality services in development, design, and tech consulting. Our goal is to deliver outstanding solutions to our clients.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-lime-400 mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="#home" className="text-gray-400 hover:text-lime-400 transition-colors">Home</a>
              <a href="#projects" className="text-gray-400 hover:text-lime-400 transition-colors">Projects</a>
              <a href="#about" className="text-gray-400 hover:text-lime-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-400 hover:text-lime-400 transition-colors">Skills</a>
              <a href="#services" className="text-gray-400 hover:text-lime-400 transition-colors">Services</a>
              <a href="#contact" className="text-gray-400 hover:text-lime-400 transition-colors">Let's work</a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-800">
          <p>© 2025 Ilyes Neghemouche. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
