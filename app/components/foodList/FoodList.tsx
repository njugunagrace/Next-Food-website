import React from 'react';
import Image from 'next/image';


const FoodList = [
  {
    img: "/burgerList.png",
    name: 'Chicken Burger',
    buy: 'Order Now',
  },
  {
    img: "/chickenPizza.png",
    name: 'Chicken Pizza',
    buy: 'Order Now',
  },
  {
    img: "/chickenFry.png",
    name: 'French Fries',
    buy: 'Order Now',
  },
  {
    img: "/grill.png",
    name: 'French Fries',
    buy: 'Order Now',
  },
  {
    img: "/taco.png",
    name: 'French Fries',
    buy: 'Order Now',
  },
  {
    img: "/strawberries.png",
    name: 'French Fries',
    buy: 'Order Now',
  },
];
const Food = () => {
  return (
    <div className="product container mx-auto">
      <h1 className=''>Our <span className="text-red-500 ">Regular</span> Menu</h1>
      <p>These Are Our Regular Menus. You Can<br />Order Anything You Like</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 ">
        {FoodList.map((item, index) => (
          <div key={index} className="">
            <div className="flex justify-center mb-4">
            <Image
            src={item.img}
            alt={item.name}
            width={300}
            height={200}
            className=" object-cover mb-4 "
          />
            </div>
            <div className="text-center">
              <p className="">{item.name}</p>
              <p className="">{item.buy}</p>
              <span className="text-gray-700 font-bold text-lg">$4.80</span>
              <button className="">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Food;