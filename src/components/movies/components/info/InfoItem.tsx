import { Link } from 'react-router-dom';

export const IfoItem = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h4 className="text-2xl font-bold mb-4">Additional information</h4>
      <ul className="text-gray-800">
        <li className="mb-2">
          <Link
            className="text-blue-700 font-semibold hover:underline"
            to="cast"
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-700 font-semibold hover:underline"
            to="reviews"
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
