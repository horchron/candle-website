import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, reviewCount, size = 'sm' }: StarRatingProps) {
  const starSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const partial = !filled && i < rating;
          return (
            <span key={i} className="relative">
              <Star className={`${starSize} text-stone-200 fill-stone-200`} />
              {(filled || partial) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: filled ? '100%' : `${(rating % 1) * 100}%` }}
                >
                  <Star className={`${starSize} text-amber-400 fill-amber-400`} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="text-xs font-medium text-stone-500">
        {rating.toFixed(1)}
        {reviewCount !== undefined && (
          <span className="ml-1 text-stone-400">({reviewCount})</span>
        )}
      </span>
    </div>
  );
}
