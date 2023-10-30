import { Link } from "react-router-dom";

export const IfoItem = () => {
  return (
    <div>
      <h4>Additional information</h4>
      <ul className="">
        <Link className="" to="cast">
          Cast
        </Link>
        <Link className="" to="reviews">
          Reviews
        </Link>
      </ul>
    </div>
  );
};
