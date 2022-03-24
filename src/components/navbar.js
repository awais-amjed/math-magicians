import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>MathMagicians</h1>
    <nav id="navbar">
      <NavLink className="link-button" to="/">
        Home
      </NavLink>
      <NavLink className="link-button" to="/calculator">
        Calculator
      </NavLink>
      <NavLink className="link-button" to="/quote">
        Quote
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
