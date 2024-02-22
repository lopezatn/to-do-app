import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navContainer">
          <NavLink to="/" className="navLogo">
            Navigation Bar
          </NavLink>
          <ul>
            <li className="navItem">
              <NavLink to="/Login" className="navLink">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
