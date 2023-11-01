import defaultImg from '../../../../assets/default.png';
type Card = {
  backdrop_path: string | null;
  original_title: string;
  overview: string;
  genres: { name: string }[] | null;
};
const CardItem = ({ card }: { card: Card }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <img
        className="w-full rounded-lg mb-4"
        src={
          card.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${card.backdrop_path}`
            : defaultImg
        }
        alt={card.original_title}
      />
      <div className="text-gray-800">
        <h3 className="text-2xl font-bold mb-2">{card.original_title}</h3>

        <div className="mb-4">
          <h4 className="text-lg font-semibold">Overview</h4>
          <p className="text-sm">{card.overview}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Genres</h4>
          <ul className="list-disc list-inside">
            {card.genres?.map((genre, index) => (
              <li key={index} className="text-sm">
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
