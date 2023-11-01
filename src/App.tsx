import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

import FeedbackPage from './pages/FeedbackPage';
import PhonebookPage from './pages/PhonebookPage';
import ImagePage from './pages/ImagePage';

import Heder from './components/movies/components/header/Heder';
import Home from './components/movies/pages/home/HomePage';
import MoviesDetails from './components/movies/pages/moviedetails/MovieDetails';
import Cast from './components/movies/pages/cast/CastPage';
import Reviews from './components/movies/pages/reviews/ReviewsPage';
import Films from './pages/MoviesPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/images" element={<ImagePage />} />
        <Route path="/phonebook" element={<PhonebookPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/" element={<Heder />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Films />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
