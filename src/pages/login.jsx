import React from "react";
import Signup2 from "../assets/images/signup2.png";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        <div
          className="bg-cover w-full bg-center bg-gradient-to-l md:bg-gradient-to-rw-full h-[600px]"
          style={{ backgroundImage: `url(${Signup2})` }}
        >
          <div className="flex flex-col items-start ml-48">
            <button className="text-green-900 text-xl font-bold py-12">
              Name:
            </button>
            <button className="text-green-900 text-xl font-bold py-5">
              Password:
            </button>
            <button className="text-green-900 text-xl font-bold py-5">
              Contact:
            </button>
            <button className="text-green-900 text-xl font-bold py-6">
              Location:
            </button>
            <button className="text-green-900 text-xl font-bold py-16">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
