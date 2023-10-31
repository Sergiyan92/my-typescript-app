import React from "react";

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
    <div>
      <h3>Author: {review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
};

export default Review;
