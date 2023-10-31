import defaultImg from "../../../../assets/default.png";
type Card = {
  backdrop_path: string | null;
  original_title: string;
  overview: string;
  genres: { name: string }[] | null;
};
const CardItem = ({ card }: { card: Card }) => {
  return (
    <div className="">
      <img
        className=""
        src={
          card.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${card.backdrop_path}`
            : defaultImg
        }
        alt={card.original_title}
      />
      <div className="">
        <h3>{card.original_title}</h3>

        <div>
          <h4>Overview</h4>
          <p>{card.overview}</p>
        </div>
        <div>
          <h4>Genres</h4>
          <ul className="">
            {card.genres?.map((genre, index) => (
              <p key={index}>{genre.name}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
