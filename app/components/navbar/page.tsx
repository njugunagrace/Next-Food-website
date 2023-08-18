import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav">
          <li className="text-white">Foodle</li>
          <li>Home</li>
          <li>Offer</li>
          <li>Service</li>
          <li>Menu</li>
          <li>About Us</li>
          <span className="login">Login</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded">SignUp</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
