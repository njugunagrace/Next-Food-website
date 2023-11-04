import React from 'react';

const Navbar = () => {
  return (
    <div className="mt-3">
      <nav className="navbar">
        <ul className="nav flex items-center">
          <li className="food text-red-dark text-4xl">Foodle</li>
          <li className="home pl-6"><a href="#" className="text-black ml-80">Home</a></li>
          <li><a href="#" className="text-black ml-10">Offer</a></li>
          <li><a href="#" className="text-black ml-10">Service</a></li>
          <li><a href="#" className="text-black ml-10">Menu</a></li>
          <li><a href="#" className="text-black ml-10">About Us</a></li>
          <li className="login text-red-600 pl-2 pr-2 cursor-pointer relative ml-80">Login</li>
          <li><button className=" text-red-600 px-4 py-2 rounded border border-red-500 cursor-pointer ml-80">SignUp</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
