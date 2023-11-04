import React from "react";
import Image from "next/image";

const Foodle = () => {
  return (
    <>
      <div className="all bg-red-50 py-16 container mx-auto">
  <div className="grid grid-cols-2 gap-6">
    <div className="container mx-auto">
      <h1 className="text-6xl font-bold mb-5 text-red-500">All Fast Food is <br /> Available at Foodle</h1>
      <p className="text-gray-600 mb-6">We Are Just A Click Away When You Crave For Delicious Fast Food</p>
    </div>
    <div className="flex justify-center items-center">
      <div className="w-96">
        <Image src="/burger.png" alt="image"  width={900} height={900} className="shadow mx-auto" />
      </div>
    </div>
  </div>
</div>
     
      <div className="best bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Best <span className="text-red-500">Delivered</span> Categories
          </h2>
          <p className="text-gray-600">
            Here Are Some Of Our Best Distributed <br />Categories. If You Want You Can Order <br />From Here
          </p>


          
        </div>
      </div>
    </>
  );
};
export default Foodle;