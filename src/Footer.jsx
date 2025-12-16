import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./App.css";

const Footer = () => {
  const navigate = useNavigate();

  // When clicking the ↑ arrow → Go to Home page
  const handleGoHome = () => {
    navigate("/"); // navigate to homepage
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional: also scroll to top
  };

  return (
    <footer className="anime-footer">
      {/* red round scroll-to-top button */}
      <button
        className="footer-scroll-top"
        onClick={handleGoHome}
        aria-label="Back to Home"
      >
        ↑
      </button>

      <div className="footer-inner container">
        {/* left: logo */}
        <div className="footer-brand">
          Ani<span>me</span>
        </div>

        {/* center: nav links */}
        <nav className="footer-links">
          <NavLink to="/" end>
            Homepage
          </NavLink>
          <NavLink to="/category/adventure">
            Categories
          </NavLink>
          <NavLink to="/blog">
            Our Blog
          </NavLink>
          <NavLink to="/contacts">
            Contacts
          </NavLink>
        </nav>

        {/* right: copyright */}
        <div className="footer-copy">
          <p>
            Copyright ©{new Date().getFullYear()} All rights reserved | This
            template is made with <span className="heart">♥</span> by Colorlib
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
