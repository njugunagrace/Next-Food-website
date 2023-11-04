import React from "react";
import Image from "next/image";

const Discount = () => {
  return (
    <div className="container grid grid-cols-2 gap-8 ml-80">
      <div className="discount bg-black h-72 w-80 rounded-lg relative">
        <Image
          src="/burgerDiscount.png"
          alt="Discount Background"
          layout="fill"
          objectFit="cover"
        />
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-white text-4xl mb-2">25%</h2>
          <h2 className="text-white text-4xl">Discount</h2>
        </div>
      </div>

      <div className="save bg-red-500 h-72 w-80 rounded-lg relative">
        <Image
          src="/strawberries.png"
          alt="Save Background"
          layout="fill"
          objectFit="cover"
        />
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-white text-2xl">$3.80</h2>
          <h2 className="text-white text-2xl">Save 20%</h2>
        </div>
      </div>

      <div className="tacos bg-yellow-500 h-72 w-80 rounded-lg mt-8 relative">
        <Image
          src="/tacos.png"
          alt="Tacos Background"
          layout="fill"
          objectFit="cover"
        />
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-white text-2xl">Tortilla Wrap Tacos</h2>
          <p className="text-white">Get Your Order Fresh</p>
          <h2 className="text-white text-2xl">15% off</h2>
        </div>
      </div>
    </div>
  );
};

export default Discount;
