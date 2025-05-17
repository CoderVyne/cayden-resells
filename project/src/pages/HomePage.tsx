import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle2, Star, User, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import products from '../data/products';

const featuredProducts = products.filter(product => product.featured);

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-glow mb-6"
        >
          Cayden Resells
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        >
          The best 1:1 store you will ever see.
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            to="/shop" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
          >
            <ShoppingBag className="mr-2" size={20} />
            Shop Now
          </Link>
          <Link 
            to="/reviews" 
            className="bg-dark-800 hover:bg-dark-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
          >
            <Star className="mr-2" size={20} />
            See Reviews
          </Link>
        </motion.div>
      </motion.section>

      {/* Featured Products */}
      <section className="mt-16 md:mt-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-glow">Featured Products</h2>
            <Link to="/shop" className="text-primary-400 hover:text-primary-300 transition-colors flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 md:mt-32">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-glow text-center mb-12"
          >
            Why Choose Cayden Resells
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="bg-primary-600/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={30} className="text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-glow mb-3">Authenticity Guaranteed</h3>
              <p className="text-gray-300">Every item we sell is thoroughly authenticated. If it's not authentic, you get your money back.</p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="bg-primary-600/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={30} className="text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-glow mb-3">Premium Selection</h3>
              <p className="text-gray-300">We only source the most sought-after items. Quality over quantity is our guiding principle.</p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="bg-primary-600/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={30} className="text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-glow mb-3">Personalized Service</h3>
              <p className="text-gray-300">We provide concierge-level service for every order. Questions? Just ask.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-32 glass py-16 px-4 rounded-xl mx-4"
      >
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-glow mb-6"
          >
            Looking for Something Specific?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            If you don't see what you're looking for, reach out! We have connections to source almost any premium item.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/shop" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
            >
              <ShoppingBag className="mr-2" size={20} />
              Browse All Products
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;