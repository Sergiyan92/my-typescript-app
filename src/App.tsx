import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

import FeedbackPage from "./pages/FeedbackPage";
import Images from "./components/images/Images";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </>
  );
}

export default App;
