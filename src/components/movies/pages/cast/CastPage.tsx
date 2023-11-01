import { useState, useEffect } from 'react';
import CastItem from '../../components/cast/CastItem';
import { useParams } from 'react-router-dom';
import { getCast } from '../../../../service/service';

interface Cast {
  id: number;
  profile_path: string | null;
  name: string;
  character: string;
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
        .then(data => setData(data))
        .catch(error => console.error(error));
    }
  }, [movieId]);

  return (
    <div className="container mx-auto p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.cast.map(cast => (
          <li key={cast.id} className="p-4 rounded-md">
            <CastItem cast={cast} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
