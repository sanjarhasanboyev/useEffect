import { NavLink } from "react-router-dom";
import '../App.css'

function Navbar() {
  return (
    <ul className="flex gap-8 justify-center mt-3">
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
  )
}

export default Navbar;