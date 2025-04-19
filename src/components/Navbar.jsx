import { NavLink } from "react-router-dom";
import "../App.css";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`flex justify-between items-center py-2 ${
        theme === "light" ? "bg-gray-700 text-amber-50" : ""
      } `}
    >
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

      <div>
        <select>
          <option value="uz">Uz</option>
          <option value="en">Eng</option>
        </select>
        <button
          onClick={toggleTheme}
          className="border rounded px-7 py-1 cursor-pointer"
        >
          {theme === "light" ? <MdDarkMode /> : <CiLight />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
