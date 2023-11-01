import React from 'react';

interface Review {
  id: number;
  author: string;
  content: string;
}

interface ReviewProps {
  review: Review;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://source.unsplash.com/random"
            alt="Review"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {review.author}
          </div>
          <p className="mt-2 text-gray-500">{review.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
