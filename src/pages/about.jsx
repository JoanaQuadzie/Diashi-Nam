import React from "react";
import Aboutimg2 from "../assets/images/aboutimg2.png";





export default function about() {
  return (
    <div className="flex flex-col px-16">
      <h1 className="text-primary text-5xl font-bold text-center py-10 ">
        About Us
      </h1>
      <div className="flex items-center gap-x-5">
        <p className="text-xl w-1/2 ">
          Welcome to Diashi-Nam, where authenticity, speed, and quality converge
          for an exceptional shopping experience. At Diashi-Nam, we pride
          ourselves on sourcing only genuine products from trusted suppliers,
          ensuring that every item you receive is of the highest quality. Our
          lightning-fast delivery service brings your purchases right to your
          doorstep, saving you time and hassle. With Diashi-Nam, you can shop
          confidently, knowing that your order will arrive swiftly and exceed
          your expectations in both authenticity and quality."
        </p>
        <img src={Aboutimg2} alt="" className="w-1/2" />
      </div>
    </div>
  );
}
