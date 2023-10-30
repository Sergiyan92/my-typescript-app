import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className=" sticky top-0 h-[50px]  flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">React-Typescript</span>
      <span>
        <Link to="/" className="mr-2">
          Images
        </Link>
        <Link to="/feedback" className="mr-2">
          Feedback
        </Link>
        <Link to="/phonebook" className="mr-2">
          Pnonebook
        </Link>
      </span>
    </nav>
  );
};

export default Navigation;
