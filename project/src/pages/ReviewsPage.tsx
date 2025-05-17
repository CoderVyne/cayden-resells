import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';
import ReviewCard from '../components/ui/ReviewCard';
import reviews from '../data/reviews';

const ReviewsPage: React.FC = () => {
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  // Count ratings by star
  const ratingCounts = reviews.reduce((acc: Record<number, number>, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {});
  
  // Sort reviews by date (newest first)
  const sortedReviews = [...reviews].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-3xl font-bold text-glow mb-6">Customer Reviews</h1>
        
        {/* Stats section */}
        <div className="glass rounded-xl p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-glow mb-2">{averageRating.toFixed(1)}</h2>
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.round(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
                  />
                ))}
              </div>
              <p className="text-gray-400">{reviews.length} total reviews</p>
            </div>
            
            <div className="col-span-2">
              <h3 className="font-bold mb-3">Rating Distribution</h3>
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingCounts[rating] || 0;
                const percentage = (count / reviews.length) * 100;
                
                return (
                  <div key={rating} className="flex items-center mb-2">
                    <div className="flex items-center w-20">
                      <span className="mr-1">{rating}</span>
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex-1 h-4 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-primary-600"
                      />
                    </div>
                    <span className="ml-3 w-10 text-right text-sm text-gray-400">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Testimonial highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-xl p-8 mb-10 text-center"
        >
          <TrendingUp size={40} className="mx-auto mb-4 text-primary-400" />
          <h2 className="text-2xl font-bold text-glow mb-4">Trusted by Resale Enthusiasts</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join our community of satisfied customers who trust Cayden Resells for authentic, premium products at competitive prices. Every purchase is backed by our authenticity guarantee.
          </p>
        </motion.div>
        
        {/* All reviews */}
        <h2 className="text-2xl font-bold text-glow mb-6">All Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedReviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
        
        {/* Leave a review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 glass rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-glow mb-4">Share Your Experience</h2>
          <p className="text-gray-300 mb-6">
            Recently purchased from us? We'd love to hear about your experience!
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Leave a Review
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReviewsPage;