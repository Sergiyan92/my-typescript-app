import Searchbar from '../../components/searchform/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovies } from '../../../../service/service';
import defaultImg from '../../../../assets/default.png';

interface Movie {
  id: number;
  title: string;
  poster_path?: string; // Зроблено poster_path необов'язковим
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setMoviesError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    try {
      const fetchMovies = async () => {
        const { movieData } = await getMovies(query);
        const moviesWithPosterPath = movieData.map(movie => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path || '', // Встановлено значення за замовчуванням для poster_path
        }));
        setMovies(moviesWithPosterPath);
      };
      fetchMovies();
    } catch (error) {
      if (typeof error === 'string') {
        setMoviesError(error);
      } else {
        setMoviesError('An error occurred');
      }
    }
  }, [query]);

  const handleSubmit = (query: string) => {
    if (query === '') {
      alert('Please enter a query');
    } else {
      setSearchParams({ query });
      setMovies([]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Searchbar onSubmit={handleSubmit} />
      <ul className="flex flex-wrap pl-5 pr-5 justify-between">
        {movies.map(movie => (
          <li
            className="border p-4 mb-5 w-[250px] text-center h-auto rounded-md"
            key={movie.id}
          >
            <Link
              state={location}
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
                alt={movie.poster_path || 'Poster'}
              />
            </Link>
          </li>
        ))}
      </ul>
      {error && <p className="text-red-500">Sorry. {error} ... 😭</p>}
    </div>
  );
};

export default Movies;
