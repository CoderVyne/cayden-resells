import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, ArrowLeft, Check, Info, Star, Shield, Truck } from 'lucide-react';
import { supabase } from '../lib/supabase';
import products from '../data/products';
import ReviewCard from '../components/ui/ReviewCard';
import ReviewForm from '../components/ui/ReviewForm';

interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  title: string;
  comment: string;
  created_at: string;
  user: {
    email: string;
  } | null;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  
  const product = products.find(p => p.id === id);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          user:user_id (
            email
          )
        `)
        .eq('product_id', id)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setReviews(data as Review[]);
      }
    };

    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser({ id: user.id, email: user.email || '' });
      }
    };

    fetchReviews();
    getUser();
  }, [id]);
  
  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center">
        <div className="glass p-8 rounded-xl text-center max-w-md">
          <Info size={48} className="mx-auto mb-4 text-red-400" />
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6 text-gray-300">The product you are looking for does not exist or has been removed.</p>
          <Link 
            to="/shop" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  const handleReviewSuccess = () => {
    setIsWritingReview(false);
    // Refresh reviews
    window.location.reload();
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link 
            to="/shop" 
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Products
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden">
              <motion.img 
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              
              {!product.inStock && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
                  <span className="text-white font-bold text-lg bg-dark-900 px-4 py-2 rounded-lg">Out of Stock</span>
                </div>
              )}
            </div>
            
            <div className="p-4 flex space-x-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1/4 aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${
                    currentImageIndex === index ? 'border-primary-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - View ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2">
              <span className="text-gray-400">{product.brand}</span>
              <h1 className="text-3xl font-bold text-glow mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.round(avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
                    />
                  ))}
                </div>
                <a href="#reviews" className="ml-2 text-gray-400 hover:text-white text-sm">
                  {reviews.length} reviews
                </a>
              </div>
              
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-lg text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="ml-2 text-green-400 font-bold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
              
              <div className="glass p-4 rounded-lg mb-6">
                <div className="flex items-center mb-2">
                  <Shield className="mr-2 text-primary-400" size={20} />
                  <span className="font-bold">Authenticity: </span>
                  <span className="ml-2">{product.authenticity}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Check className="mr-2 text-primary-400" size={20} />
                  <span className="font-bold">Condition: </span>
                  <span className="ml-2">{product.condition}</span>
                </div>
                <div className="flex items-center">
                  <Truck className="mr-2 text-primary-400" size={20} />
                  <span className="font-bold">Availability: </span>
                  <span className="ml-2">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold mb-2">Description</h3>
                <p className="text-gray-300">{product.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-dark-800 px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 rounded-lg font-bold flex items-center justify-center ${
                    product.inStock 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white transition-colors' 
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="mr-2" size={20} />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button className="bg-dark-800 hover:bg-dark-700 p-3 rounded-lg transition-colors">
                  <Heart size={20} className="text-gray-400 hover:text-red-400 transition-colors" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="reviews"
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-glow">Customer Reviews</h2>
            {user && !isWritingReview && (
              <button
                onClick={() => setIsWritingReview(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Write a Review
              </button>
            )}
          </div>

          {isWritingReview && (
            <div className="mb-8">
              <ReviewForm
                productId={product.id}
                onSuccess={handleReviewSuccess}
                onCancel={() => setIsWritingReview(false)}
              />
            </div>
          )}
          
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={review.id}
                  review={{
                    id: review.id,
                    productId: review.product_id,
                    author: review.user?.email || 'Anonymous',
                    rating: review.rating,
                    date: review.created_at,
                    title: review.title,
                    comment: review.comment,
                    verified: true
                  }}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="glass p-8 rounded-xl text-center">
              <Star size={32} className="mx-auto mb-4 text-gray-400" />
              <h3 className="font-bold text-lg mb-2">No Reviews Yet</h3>
              <p className="text-gray-400 mb-4">Be the first to review this product!</p>
              {!user && (
                <Link
                  to="/login"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors inline-block"
                >
                  Sign in to Write a Review
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;