import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/signin';
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li>
          {localStorage.getItem('user') ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
