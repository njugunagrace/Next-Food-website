import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-red-200 rounded-lg mt-8 grid grid-cols-4 gap-8 p-8">
      <div>
        <h1 className="text-red-600 text-2xl font-semibold">Foodish</h1>
        <p className="text-gray-600">Continue Foodish 2023 all rights reserved</p>
        <h1 className="text-red-600 text-xl font-semibold mt-4">Follow Us On</h1>
        <div className="mt-2">
        </div>
      </div>

      <div>
        <h1 className="text-red-600 text-xl font-semibold">Menu</h1>
        <p className="text-gray-600">Home</p>
        <p className="text-gray-600">Offers</p>
        <p className="text-gray-600">Service</p>
        <p className="text-gray-600">About Us</p>
      </div>

      <div>
        <h1 className="text-red-600 text-xl font-semibold">Information</h1>
        <p className="text-gray-600">Menu</p>
        <p className="text-gray-600">Quality</p>
        <p className="text-gray-600">Make a Choice</p>
        <p className="text-gray-600">Salad with Vegetable</p>
        <p className="text-gray-600">Fast Delivery</p>
        <p className="text-gray-600">Subscribe</p>
      </div>

      <div>
        <h1 className="text-red-600 text-xl font-semibold">Contact</h1>
        <p className="text-gray-600">+123 456 789</p>
        <p className="text-gray-600">Explore</p>
        <p className="text-gray-600">info@Foodish.Com</p>
        <p className="text-gray-600">1245, New York, USA</p>
      </div>
    </div>
  );
};

export default Footer;
