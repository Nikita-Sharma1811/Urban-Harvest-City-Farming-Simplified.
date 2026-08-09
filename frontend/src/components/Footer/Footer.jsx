import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-about">
          <h2>🌱 Urban Harvest</h2>
          <p>
            Empowering people to grow fresh vegetables and herbs in
            small urban spaces through smart gardening solutions.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/tutorials">Tutorials</Link>
          <Link to="/growsmart">GrowSmart</Link>
          <Link to="/community">Community</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email : support@urbanharvest.com</p>
          <p>Phone : +91 98765 43210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Urban Harvest | City Farming Simplified
      </div>
    </footer>
  );
}

export default Footer;