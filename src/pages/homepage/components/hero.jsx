import React from "react";
import Front4 from "../../../assets/images/front4.png";
import { Link } from "react-router-dom";
import { FadeIn } from "react-slide-fade-in";

export default function Hero() {
  return (
    <div className="bg-gray-100 md:top-16 w-full py-16 md:w-2/3 lg:w-full flex justify-center">
      <div className="w-full flex justify-between md:px-36 p-6">
        <FadeIn
          from="left"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={400}
        >
          <div className="space-y-9 pt-24 ">
            <div className="">
              <h1 className="md:text-7xl text-5xl font-bold text-primary">
                Diashi-Nam
              </h1>
              <FadeIn
                from="right"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={600}
              >
                <div className="flex">
                  <img
                    className=" my-8 md:w-[250px]  "
                    src={Front4}
                    alt="delivery guy image"
                  />
                </div>
              </FadeIn>
            </div>
            <h2 className="text-xl text-black md:w-2/4 ">
              Need to purchase an item?Look no further! With{" "}
              <span className="uppercase text-green-600 font-bold">
                Diashi-Nam
              </span>
              , you just have to place an order, and in a few minutes, our{" "}
              <span className="text-orange-600 font-bold">dedicated</span>{" "}
              riders will contact you and ensure your package is delivered
              without any stress or hassle. Experience the{" "}
              <span className="text-orange-600 font-bold">authenticity</span> of
              goods brought straight to your door.{" "}
              <span className="text-green-600 font-bold">Fast, reliable</span>,
              and <span className="text-orange-600 font-bold">hassle-free</span>{" "}
              – that’s our promise to you!
            </h2>
            <FadeIn
              from="bottom"
              positionOffset={100}
              triggerOffset={200}
              delayInMilliseconds={800}
            >
              <div className="flex space-x-8 md:space-x-7 ">
                <Link to="/signup">
                  <button className="bg-primary text-white py-2 px-5 rounded-full">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-primary text-white py-2 px-5 rounded-full ">
                    Login
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
