import Trending from "../../components/popular/Trending";
import { useEffect, useState } from "react";
import { getAllmovies } from "../../../../service/service";
interface Movie {
  id: number;
  title: string;
}
interface TrendingData {
  trendingData: Movie[]; // Замініть `any` на відповідний тип, якщо відомо
}
const Home = () => {
  const [trending, setTrending] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response: TrendingData = await getAllmovies();
        setTrending(response.trendingData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrending();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <Trending trending={trending} />
    </>
  );
};
export default Home;
