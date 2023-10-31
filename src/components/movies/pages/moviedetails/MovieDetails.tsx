import CardItem from "../../components/card/CardItem";
import { IfoItem } from "../../components/info/InfoItem";
import { useEffect, useRef, useState } from "react";

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieId } from "../../../../service/service";
type MovieDetails = {
  backdrop_path: string | null;
  original_title: string;
  overview: string;
  genres: Genre[];
};

type Genre = {
  id: number;
  name: string;
};

const MoviesDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [details, setDetails] = useState<MovieDetails | null>(null);

  const location = useLocation();
  const back = useRef(location.state ?? "/");

  useEffect(() => {
    if (movieId) {
      const id = parseInt(movieId);
      getMovieId(id)
        .then((data) => setDetails(data))
        .catch((error) => console.log(error));
    }
  }, [movieId]);

  if (!details) return;
  return (
    <div>
      <Link className="" to={back.current}>
        Back
      </Link>
      <CardItem card={details} />
      <IfoItem />

      <Outlet />
    </div>
  );
};
export default MoviesDetails;
