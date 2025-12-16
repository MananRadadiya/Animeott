import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./App.css"; 

function Navigation() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const ticking = useRef(false);
  const scrollThreshold = 40; 

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;

      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const lastY = lastScrollY.current;

          
          if (currentY <= 10) {
            setHidden(false);
          } else {
            
            if (currentY - lastY > 0 && currentY > scrollThreshold) {
              // Scrolling down
              setHidden(true);
            } else if (lastY - currentY > 0) {
              // Scrolling up
              setHidden(false);
            }
          }

          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    }


    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`anime-navbar ${hidden ? "anime-navbar--hidden" : "anime-navbar--visible"}`}
      sticky="top"
    >
      <Container fluid className="px-4">
        {/* Brand */}
        <Navbar.Brand as={NavLink} to="/" className="anime-brand">
          Ani<span>me</span>
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="animeNavbar" className="anime-toggler" />

        <Navbar.Collapse id="animeNavbar">
          {/* Center nav links */}
          <Nav className="mx-auto anime-nav-links">
            <Nav.Link as={NavLink} to="/" end className="anime-link">
              Homepage
            </Nav.Link>

            <NavDropdown title="Categories" id="categories-dropdown" className="anime-link-dropdown">

              <NavDropdown.Item as={NavLink} to="/category/anime" end>
                Anime
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/category/watch" end>
                Watch
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/category/details" end>
                Details
              </NavDropdown.Item>

              {/* AUTH LINKS */}
              <NavDropdown.Item as={NavLink} to="/login" end>
                Login
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/signup" end>
                Sign Up
              </NavDropdown.Item>

            </NavDropdown>


            <Nav.Link as={NavLink} to="/blog" className="anime-link">
              Our Blog
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacts" className="anime-link">
              Contacts
            </Nav.Link>
          </Nav>

          <div className="anime-right d-flex align-items-center gap-3">
            <button className="icon-btn" aria-label="Search">
              🔍
            </button>
            <button className="icon-btn" aria-label="User">
              👤
            </button>

            <Button className="menu-btn">
              <span className="menu-text">MENU</span>
              <span className="menu-icon">☰</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
