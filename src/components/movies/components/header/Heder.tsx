import { NavLink, Outlet } from "react-router-dom";

const Heder = () => {
  return (
    <>
      <nav className="">
        <NavLink className="" to="/">
          Home
        </NavLink>
        <NavLink className="" to="/movies">
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default Heder;
