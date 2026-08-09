import { Link } from "react-router-dom";
import "./Hero.css";
import heroVideo from "../../assets/videos/video1.mp4";



function Hero() {
  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content container">

        <h1>
          Grow Fresh Food,
          <br />
          Right at Home
        </h1>

        <p>
          Urban Harvest helps you grow vegetables, herbs and fruits
          in balconies, rooftops and small urban spaces using smart
          and sustainable gardening techniques.
        </p>

        <div className="hero-buttons">
          <Link to="/growsmart" className="hero-btn">
            Start Growing
          </Link>

          <Link to="/tutorials" className="hero-outline-btn">
            Watch Tutorials
          </Link>
        </div>

      </div>

    </section>
  );
}

export default Hero;