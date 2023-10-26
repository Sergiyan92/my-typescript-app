import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PhonebookPage from "./pages/PhonebookPage";
import FeedbackPage from "./pages/FeedbackPage";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PhonebookPage />} />
        <Route path="/feedback" element={<FeedbackPage/>}/>
      </Routes>
 
    </>
  );
}

export default App;
