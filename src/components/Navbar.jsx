import { NavLink } from "react-router-dom";
import "../App.css";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
   setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`flex justify-between items-center py-2 ${theme === 'light' ? '' : 'bg-gray-600 text-amber-50'} `}>
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
        onClick={handleTheme}
        className="border rounded px-7 py-1 cursor-pointer"
      >
        {theme === "light" ? <CiLight /> : <MdDarkMode />}
      </button>
    </div>
  );
}

export default Navbar;
