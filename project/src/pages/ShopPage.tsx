import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import products from '../data/products';

const ShopPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = [...new Set(products.map(product => product.category))];
  const conditions = [...new Set(products.map(product => product.condition))];

  useEffect(() => {
    let result = products;

    // Search filter
    if (searchTerm) {
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Condition filter
    if (selectedCondition) {
      result = result.filter(product => product.condition === selectedCondition);
    }

    // In stock filter
    if (inStockOnly) {
      result = result.filter(product => product.inStock);
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedCondition, inStockOnly]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedCondition(null);
    setInStockOnly(false);
  };

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-3xl font-bold text-glow mb-6">Shop</h1>

        {/* Search and Filters */}
        <div className="glass rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedCondition || ''}
                onChange={(e) => setSelectedCondition(e.target.value || null)}
                className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Conditions</option>
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="inStockOnly"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="mr-2 h-5 w-5 accent-primary-500"
                />
                <label htmlFor="inStockOnly" className="text-sm">In Stock Only</label>
              </div>
            </div>
          </div>

          {/* Active filters */}
          {(searchTerm || selectedCategory || selectedCondition || inStockOnly) && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-400">Active filters:</span>
              
              {searchTerm && (
                <div className="flex items-center bg-dark-800 px-2 py-1 rounded-full text-sm">
                  <span>Search: {searchTerm}</span>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {selectedCategory && (
                <div className="flex items-center bg-dark-800 px-2 py-1 rounded-full text-sm">
                  <span>Category: {selectedCategory}</span>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {selectedCondition && (
                <div className="flex items-center bg-dark-800 px-2 py-1 rounded-full text-sm">
                  <span>Condition: {selectedCondition}</span>
                  <button 
                    onClick={() => setSelectedCondition(null)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {inStockOnly && (
                <div className="flex items-center bg-dark-800 px-2 py-1 rounded-full text-sm">
                  <span>In Stock Only</span>
                  <button 
                    onClick={() => setInStockOnly(false)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              
              <button 
                onClick={resetFilters}
                className="ml-2 text-primary-400 hover:text-primary-300 text-sm underline"
              >
                Reset all
              </button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="glass rounded-xl p-10 text-center">
            <Filter size={40} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={resetFilters}
              className="mt-4 bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Reset all filters
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ShopPage;