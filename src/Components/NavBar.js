import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about-us">
          <li>About Us</li>
        </Link>
        <Link to="/contact-us">
          <li>Contact Us</li>
        </Link>
        <Link to="/careers">
          <li>Careers</li>
        </Link>
        <Link to="/book-club">
          <li>Book Club</li>
        </Link>
        <Link to="/gift-a-book">
          <li>Gift-A-Book</li>
        </Link>
        <Link to="/shop-now">
          <li>Shop Now</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
