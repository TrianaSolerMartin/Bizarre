import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Bazzar</Link>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="navbar-actions">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/sell" className="sell-button">Sell</Link>
      </div>
    </nav>
  );
};

export default Navbar;
