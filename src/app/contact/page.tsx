'use client';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full-Stack Project',
    'API Integration',
    'Database Setup',
    'CMS / E-Commerce',
    'Deployment & Hosting',
    'Maintenance & Support',
    'Landing Page',
    'Portfolio Website',
    'Other'
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // هنا ستضيف الإرسال للـ API
      const dataToSend = {
        ...formData,
        services: selectedServices
      };
      console.log('Data to send:', dataToSend);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSelectedServices([]);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2d4a3e] via-[#3a5a47] to-[#4a6a55] pt-24 px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 text-white hover:text-lime-400 transition-colors mb-8"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in working with me? Submit your project inquiry using the form below.
          </p>
        </motion.div>

        {/* I'm interested in... Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            I'm interested in...
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => toggleService(service)}
                className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                  selectedServices.includes(service)
                    ? 'bg-lime-400 text-gray-900 scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                {service}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Contact Information</h2>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="bg-lime-400 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:ilyes.negh@gmail.com" className="text-gray-300 hover:text-lime-400 transition-colors">
                    ilyes.negh@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="bg-lime-400 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                  <a href="tel:+213542038084" className="text-gray-300 hover:text-lime-400 transition-colors">
                    +213 542 03 80 84
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="bg-lime-400 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
                  <p className="text-gray-300">Sidi Lakhdar, Mostaganem, Algeria</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/ilyes27dz' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/ilyes-neghemouche' },
                  { name: 'Facebook', url: 'https://facebook.com/ilyes.negh' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-lime-400 hover:text-gray-900 transition-all font-semibold"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Request A Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-lime-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-lime-500 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </motion.button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-center"
                >
                  Message sent successfully! 🎉
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
