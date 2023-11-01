import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIdReviews } from '../../../../service/service';
import Review from '../../components/review/Review';

interface Reviews {
  id: number;
  author: string;
  content: string;
}

interface ReviewData {
  results: Review[];
}

const Reviews = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [data, setData] = useState<ReviewData | null>(null);
  useEffect(() => {
    if (movieId) {
      const id = parseInt(movieId);
      getMovieIdReviews(id)
        .then(response => setData(response))
        .catch(error => console.error(error));
    }
  }, [movieId]);
  return (
    <div className="max-w-2xl mx-auto p-4">
      {!data?.results.length ? (
        <p className="text-gray-800 text-xl text-center">
          We don't have any reviews for this movie
        </p>
      ) : (
        <div className="space-y-4">
          {data.results.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Reviews;
