import { NavLink } from "react-router-dom";
import "../App.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { i18n, t } = useTranslation();

  const handleLang = (e) => {
   console.log(e.target.value)
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div
      className={`flex justify-between transition-colors duration-200 items-center py-2  ${
        theme === "light" ? "bg-gray-700 text-amber-50" : ""
      }`}
    >
      <h1 className="text-2xl font-bold">Logo there</h1>
      <ul className="flex items-center gap-8">
        <li>
          <NavLink to="/home">{t("home")}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{t("about")}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{t("contact")}</NavLink>
        </li>
        <li>
          <NavLink to="/products">{t("products")}</NavLink>
        </li>
      </ul>

      <div>
        <select className="mr-2" onChange={handleLang}>
          <option value="en">En</option>
          <option value="uz">Uz</option>
        </select>
        <button
          className="border rounded px-7 py-1 cursor-pointer"
          onClick={toggleTheme}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
