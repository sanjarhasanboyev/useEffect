import { NavLink } from "react-router-dom";
import "../App.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`flex justify-between transition-colors duration-200 items-center py-2  ${theme === 'light' ? 'bg-gray-700 text-amber-50' : ''}`}>
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
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>

      <button
        className="border rounded px-7 py-1 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default Navbar;
