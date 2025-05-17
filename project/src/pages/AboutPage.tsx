import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle as CircleCheck, Shield, Package, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <CircleCheck className="text-primary-500 w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-glow mb-6">About Cayden Resells</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted source for authentic, premium resale items. We specialize in bringing you the most sought-after products with guaranteed authenticity.
          </p>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="glass p-6 rounded-xl text-center">
            <Shield className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-glow mb-3">Authenticity Guaranteed</h3>
            <p className="text-gray-300">
              Every item we sell goes through rigorous authentication to ensure 100% authenticity.
            </p>
          </div>

          <div className="glass p-6 rounded-xl text-center">
            <Package className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-glow mb-3">Premium Selection</h3>
            <p className="text-gray-300">
              Carefully curated collection of the most sought-after items in the market.
            </p>
          </div>

          <div className="glass p-6 rounded-xl text-center">
            <Mail className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-glow mb-3">Direct Communication</h3>
            <p className="text-gray-300">
              Direct line of communication for inquiries and support at cabralcayden93@gmail.com.
            </p>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-xl p-8 text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-glow mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Have questions about our products or looking for something specific? We're here to help!
          </p>
          <a
            href="mailto:cabralcayden93@gmail.com"
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
          >
            <Mail className="mr-2" size={20} />
            Contact Us
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage