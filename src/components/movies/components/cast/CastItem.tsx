import defaultImg from "../../../../assets/noicon.png";

type CastItemProps = {
  profile_path: string | null;
  name: string;
  character: string;
};

const CastItem = ({ cast }: { cast: CastItemProps }) => {
  return (
    <div className="">
      <img
        className=""
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
            : defaultImg
        }
        alt={cast.name}
      />
      <h3>{cast.name}</h3>
      <span>Character: {cast.character}</span>
    </div>
  );
};

export default CastItem;
