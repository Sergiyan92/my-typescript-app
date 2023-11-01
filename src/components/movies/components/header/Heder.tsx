import { NavLink, Outlet } from 'react-router-dom';

const Heder = () => {
  return (
    <>
      <nav className="flex justify-center space-x-4">
        <NavLink
          className="text-red-800 font-bold text-lg hover:text-blue-600 no-underline"
          to="/"
        >
          Trending
        </NavLink>
        <NavLink
          className="text-red-800 font-bold text-lg hover:text-blue-600 no-underline"
          to="/movies"
        >
          Search Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default Heder;
