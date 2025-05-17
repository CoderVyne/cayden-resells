import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import { type Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass rounded-xl overflow-hidden group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {!product.inStock && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
          {product.featured && (
            <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded-md text-xs font-bold">
              Featured
            </div>
          )}
          {product.originalPrice && (
            <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-md text-xs font-bold">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-glow line-clamp-1">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{product.brand}</p>
            </div>
            <div className="flex flex-col items-end">
              {product.originalPrice && (
                <span className="text-gray-400 text-sm line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="font-bold text-lg text-primary-400">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className={`text-sm px-2 py-1 rounded-full ${
              product.condition === 'New' ? 'bg-green-900/50 text-green-400' :
              product.condition === 'Like New' ? 'bg-blue-900/50 text-blue-400' :
              product.condition === 'Good' ? 'bg-yellow-900/50 text-yellow-400' :
              'bg-orange-900/50 text-orange-400'
            }`}>
              {product.condition}
            </span>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-dark-800 hover:bg-dark-700 transition-colors">
                <Heart size={18} className="text-gray-400 hover:text-red-400 transition-colors" />
              </button>
              <button className="p-2 rounded-full bg-primary-600 hover:bg-primary-500 transition-colors">
                <ShoppingBag size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;