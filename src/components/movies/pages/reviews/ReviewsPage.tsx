import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieIdReviews } from "../../../../service/service";
import Review from "../../components/review/Review";

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
        .then((response) => setData(response))
        .catch((error) => console.error(error));
    }
  }, [movieId]);
  return (
    <div className="">
      {!data?.results.length ? (
        <p>We don't have ani reviews for this movie</p>
      ) : (
        data.results.map((review) => <Review key={review.id} review={review} />)
      )}
    </div>
  );
};
export default Reviews;
