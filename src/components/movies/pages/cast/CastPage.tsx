import { useState, useEffect } from "react";
import CastItem from "../../components/cast/CastItem";
import { useParams } from "react-router-dom";
import { getCast } from "../../../../service/service";

interface Cast {
  id: number;
  profile_path: string | null;
  name: string;
  character: string;
  // Додайте інші властивості об'єкту Cast
}

interface CastData {
  cast: Cast[];
}
const Cast = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [data, setData] = useState<CastData | null>(null);

  useEffect(() => {
    if (movieId) {
      const id = parseInt(movieId);
      getCast(id)
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }
  }, [movieId]);

  return (
    <ul className="">
      {data?.cast.map((cast) => (
        <li key={cast.id}>
          <CastItem cast={cast} />
        </li>
      ))}
    </ul>
  );
};

export default Cast;
