type ReviewProps = {
  author: string;
  content: string;
};
const Review = ({ review }: { review: ReviewProps }) => {
  return (
    <div>
      <h3> Author: {review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
};

export default Review;
