import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {

  return (
    <div className={`flex justify-between transition-colors duration-200 items-center py-2`}>
      <h1 className="text-2xl font-bold">Logo there</h1>
      <ul className="flex items-center gap-8">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <button
        className="border rounded px-7 py-1 cursor-pointer"
      >
        Dark mode
      </button>
    </div>
  );
}

export default Navbar;
