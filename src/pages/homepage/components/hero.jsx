import React from "react";
import Front4 from "../../../assets/images/front4.png";


import { Link } from "react-router-dom";

export default function Hero() {
  return (
   
      <div className="bg-gray-100 top-16 absolute w-full py-16">
        <div className="w-full flex justify-between px-36">
          <div className="space-y-9 pt-24">
            <h1 className="text-7xl font-bold text-green-600">Diashi-Nam</h1>
            <h2 className="text-xl font-medium text-green-800 w-2/4">
              I'm here to get you everything you need right at your doorstep in
              a minute
            </h2>
            <div className="space-x-7">
              <Link to="/signup">
                <button className="bg-green-800 text-white py-2 px-5 rounded-full">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-green-800 text-white py-2 px-5 rounded-full ">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img className="h-full w-[450px]" src={Front4} alt="" />
          </div>
        </div>
      </div>
    
  );
}
