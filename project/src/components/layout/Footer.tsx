import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle as CircleCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="glass mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <CircleCheck className="text-primary-500" size={24} />
              <span className="text-xl font-bold text-glow">Cayden Resells</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium reseller of exclusive and hard-to-find items. Authenticity guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:cabralcayden93@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-glow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-glow">Contact Us</h3>
            <p className="text-gray-400 mb-4">
              Have questions? Reach out to us directly at:
            </p>
            <a 
              href="mailto:cabralcayden93@gmail.com"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              cabralcayden93@gmail.com
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cayden Resells. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer