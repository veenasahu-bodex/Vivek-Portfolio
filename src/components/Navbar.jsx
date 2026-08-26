import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/vivek1.jpeg"
            alt="Vivek Sahu"
            className="navbar-profile"
          />

          <span className="navbar-logo-text">
            VS<span>.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <a href="#showreel">SHOWREEL</a>
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>

        {/* Availability */}
        <div className="navbar-availability">
          <span className="availability-dot"></span>
          AVAILABLE FOR WORK
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          {/* Menu Header */}
          <div className="mobile-menu-label">
            NAVIGATION / 2026
          </div>

          {/* Menu Links */}
          <div className="mobile-menu-links">
            <a href="#home" onClick={closeMenu}>
              <span>01</span>
              HOME
            </a>

            <a href="#showreel" onClick={closeMenu}>
              <span>02</span>
              SHOWREEL
            </a>

            <a href="#work" onClick={closeMenu}>
              <span>03</span>
              WORK
            </a>

            <a href="#about" onClick={closeMenu}>
              <span>04</span>
              ABOUT
            </a>

            <a href="#contact" onClick={closeMenu}>
              <span>05</span>
              CONTACT
            </a>
          </div>

          {/* Mobile Footer */}
          <div className="mobile-menu-footer">
            <div className="mobile-name">
              VIVEK SAHU
            </div>

            <div className="mobile-available">
              <span></span>
              AVAILABLE FOR WORK
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;