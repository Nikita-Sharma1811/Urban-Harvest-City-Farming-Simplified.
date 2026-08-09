import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          🌱 Urban Harvest
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>

            <li>
              <NavLink to="/tutorials">Tutorials</NavLink>
            </li>

            <li>
              <NavLink to="/growsmart">GrowSmart</NavLink>
            </li>

            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
          </ul>
        </nav>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;