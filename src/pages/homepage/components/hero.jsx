import React from "react";
import Front4 from "../../../assets/images/front4.png";
import { Link } from "react-router-dom";
import { FadeIn } from "react-slide-fade-in";

export default function Hero() {
  return (
    <div className="bg-gray-100 top-16 absolute w-full py-16">
      <div className="w-full flex justify-between px-36">
        <FadeIn
          from="left"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={400}
        >
          <div className="space-y-9 pt-24">
            <h1 className="text-7xl font-bold text-primary">Diashi-Nam</h1>
            <h2 className="text-xl font-medium text-black w-2/4">
              I'm here to get you everything you need right at your doorstep in
              a minute
            </h2>
            <FadeIn
              from="bottom"
              positionOffset={100}
              triggerOffset={200}
              delayInMilliseconds={800}
            >
              <div className="space-x-7">
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
        <div>
          <FadeIn
            from="right"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={600}
          >
            <img className="h-full w-[450px]" src={Front4} alt="" />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
