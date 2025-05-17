import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import { type Review } from '../../data/reviews';

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl p-5"
    >
      <div className="flex items-start mb-4">
        <img
          src={review.avatar || 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'}
          alt={review.author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="flex items-center">
            <h3 className="font-bold text-white mr-2">{review.author}</h3>
            {review.verified && (
              <div className="flex items-center text-xs text-green-400">
                <CheckCircle2 size={12} className="mr-1" />
                <span>Verified Purchase</span>
              </div>
            )}
          </div>
          <div className="flex items-center mt-1">
            <div className="flex mr-2">{renderStars()}</div>
            <span className="text-gray-400 text-sm">{formatDate(review.date)}</span>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-lg mb-2 text-glow">{review.title}</h4>
      <p className="text-gray-300">{review.comment}</p>
    </motion.div>
  );
};

export default ReviewCard;