import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

const Navbar = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user);

  return (
    <>
      <header className="header">
        <nav className="navContainer">
          <NavLink to="/">
            <img className="navLogo" src={logo} alt="logo" />
          </NavLink>
          <ul className="navList">
            {isAuthenticated ? (
              <li className="navItem">
                <NavLink to="/Logout" className="navLink">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="navItem">
                <NavLink to="/Login" className="navLink">
                  Login
                </NavLink>
              </li>
            )}
            <li className="navItem">
              <NavLink to="/Register" className="navLink">
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
