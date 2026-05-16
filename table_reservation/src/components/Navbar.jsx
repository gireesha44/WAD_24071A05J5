import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Don't show navbar on login page
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">Gourmet Haven</div>
      <ul className="nav-links">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
