import React from "react";
import Hero1 from "../assets/images/hero1-removebg.png";
import Clothes from "../assets/images/clothes.jpg";
import Fruits from "../assets/images/fruits.jpg"
import Groceries from "../assets/images/groceries.jpg"
import Accessories from "../assets/images/accessories.jpg";
import Stationary from "../assets/images/stationary.jpg"

export default function Hero() {
  return (
    <div>
      <div className="bg-green-100 top-16 absolute w-full py-20">
        <div className="w-full flex justify-between px-36">
          <div className="space-y-9 pt-24">
            <h1 className="text-7xl font-bold text-green-600">Diashi-Nam</h1>
            <h2 className="text-xl font-medium text-green-800">
              Hi! Just tell me what you need
            </h2>
            <div className="space-x-7">
              <button className="bg-green-800 text-white py-2 px-5 rounded-full">
                Sign Up
              </button>
              <button className="bg-green-800 text-white py-2 px-5 rounded-full ">
                Login
              </button>
            </div>
          </div>
          <div>
            <img className="h-full w-[500px]" src={Hero1} />
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-0 flex flex-col justify-center items-center">
      </div> */}

      <div className="mt-[850px]">
        <h2 className="font-bold text-center text-3xl">Product Categories</h2>
        <div class="h-2 w-px flex items-center justify-center py-4 md:py-8 flex-wrap"></div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <img
              className="h-[300px] w-full rounded-lg"
              src={Clothes}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[300px] w-full rounded-lg"
              src={Accessories}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={Groceries}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={Stationary}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={Fruits}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
