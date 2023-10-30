import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllmovies } from "../../../../service/service";
type Movie = {
  id: number;
  title: string;
};
const Trending = () => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [error, setMoviesError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const { trendingData } = await getAllmovies();
        setTrending(() => [...trendingData]);
      };
      fetchMovies();
    } catch (error) {
      if (typeof error === "string") {
        setMoviesError(error);
      } else {
        setMoviesError("An error occurred");
      }
    }
  }, []);
  return (
    <ul className="">
      {trending.map((movie) => (
        <li className="" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
      {error && <>Sorry. {error} ... 😭</>}
    </ul>
  );
};
export default Trending;
