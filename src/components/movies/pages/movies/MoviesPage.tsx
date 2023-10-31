import Searchbar from "../../components/searchform/SearchForm";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMovies } from "../../../../service/service";
interface Movie {
  id: number;
  title: string;
}
const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setMoviesError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const location = useLocation();
  useEffect(() => {
    if (!query) return;
    try {
      const fetchMovies = async () => {
        const { movieData } = await getMovies(query);
        setMovies(() => [...movieData]);
      };
      fetchMovies();
    } catch (error) {
      if (typeof error === "string") {
        setMoviesError(error);
      } else {
        setMoviesError("An error occurred");
      }
    }
  }, [query]);

  const handleSubmit = (query: string) => {
    if (query === "") {
      alert("Please enter a query");
    } else {
      setSearchParams({ query });
      setMovies([]);
    }
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ul className="">
        {movies.map((movie) => (
          <li className="" key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      {error && <>Sorry. {error} ... 😭</>}
    </div>
  );
};
export default Movies;
