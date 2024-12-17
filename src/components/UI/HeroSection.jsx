import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="grid container grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to="/country">
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
          </NavLink>
          
        </div>
        <div className="hero-image">
          <img className="banner-image" src="/images/world.png" alt="world" />
        </div>
      </div>
    </main>
  );
};
