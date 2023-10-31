import { Navigate, Route, Routes } from "react-router-dom";
import Heder from "./components/header/Heder";
import Home from "./pages/home/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import MoviesDetails from "./pages/moviedetails/MovieDetails";
import Cast from "./pages/cast/CastPage";
import Reviews from "./pages/reviews/ReviewsPage";

const Movie = () => {
  return (
    <Routes>
      <Route path="/" element={<Heder />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default Movie;
