'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  size?: number;
  editable?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

export function StarRating({
  rating = 0,
  maxRating = 5,
  size = 24,
  editable = false,
  onChange,
  className,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleClick = (index: number) => {
    if (!editable) return;
    setSelectedRating(index);
    onChange?.(index);
  };

  const handleMouseEnter = (index: number) => {
    if (!editable) return;
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (!editable) return;
    setHoverRating(0);
  };

  const displayRating = hoverRating || selectedRating || rating;

  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const starValue = index + 1;
        const filled = starValue <= displayRating;
        
        return (
          <button
            key={index}
            type={editable ? "button" : "button"}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "p-0.5 focus:outline-none transition-colors",
              editable && "cursor-pointer",
              !editable && "cursor-default"
            )}
            disabled={!editable}
            aria-label={`${starValue} star${starValue === 1 ? '' : 's'}`}
          >
            <Star
              size={size}
              className={cn(
                "transition-colors",
                filled 
                  ? "fill-yellow-400 text-yellow-400" 
                  : "fill-transparent text-gray-300 dark:text-gray-600"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

export function DisplayRating({ rating, className }: { rating: number, className?: string }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < fullStars) {
          return (
            <Star 
              key={index} 
              className="fill-yellow-400 text-yellow-400" 
              size={16} 
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative">
              <Star className="text-gray-300 dark:text-gray-600" size={16} />
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
              </div>
            </div>
          );
        } else {
          return (
            <Star 
              key={index} 
              className="text-gray-300 dark:text-gray-600" 
              size={16} 
            />
          );
        }
      })}
      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
        {rating.toFixed(1)}
      </span>
    </div>
  );
} 