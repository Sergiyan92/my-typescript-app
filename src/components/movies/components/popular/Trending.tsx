import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllmovies } from '../../../../service/service';
import defaultImg from '../../../../assets/default.png';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

type TrendingProps = {
  trending: Movie[];
};

const Trending = ({ trending }: TrendingProps) => {
  const [error, setMoviesError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        await getAllmovies();
      };
      fetchMovies();
    } catch (error) {
      if (typeof error === 'string') {
        setMoviesError(error);
      } else {
        setMoviesError('An error occurred');
      }
    }
  }, []);

  return (
    <ul className="flex flex-wrap pl-5 pr-5 justify-between">
      {trending.map(movie => {
        return (
          <li
            className="border p-4 mb-5 w-[500px] text-center h-auto rounded-md"
            key={movie.id}
          >
            <Link
              to={`/movies/${movie.id}`}
              className="text-blue-500 hover:underline"
            >
              <span className="text-lg">{movie.title}</span>
              <img
                className="mb-4"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.poster_path}
              />
            </Link>
          </li>
        );
      })}
      {error && <p className="text-red-500">Sorry. {error} ... 😭</p>}
    </ul>
  );
};

export default Trending;
