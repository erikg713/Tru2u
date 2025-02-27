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
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">True-2-U</h1>
      <div>
        <Link className="mx-2" to="/">Home</Link>
        <Link className="mx-2" to="/profile">Profile</Link>
        <Link className="mx-2" to="/login">Login</Link>
        <Link className="mx-2" to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
