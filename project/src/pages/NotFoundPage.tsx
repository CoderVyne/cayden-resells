import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, ShoppingBag } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass p-8 rounded-xl text-center max-w-lg"
      >
        <AlertTriangle size={64} className="mx-auto mb-6 text-yellow-400" />
        <h1 className="text-4xl font-bold text-glow mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
        <p className="mb-8 text-gray-300">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
          <Link
            to="/shop"
            className="bg-dark-800 hover:bg-dark-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          >
            <ShoppingBag size={20} className="mr-2" />
            Browse Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;