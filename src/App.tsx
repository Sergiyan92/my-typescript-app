import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

import FeedbackPage from "./pages/FeedbackPage";
import PhonebookPage from "./pages/PhonebookPage";
import ImagePage from "./pages/ImagePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<ImagePage />} />
        <Route path="/phonebook" element={<PhonebookPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
