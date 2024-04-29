import React from "react";
import Thankyou from "../assets/images/thankyou.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function confirmation() {
  return (
    <>
      <Navbar bgColor={"bg-gray-400"} />
      <div className="flex flex-col items-center w-full">
        <h1 className="text-5xl text-center text-primary font-bold py-6 mt-28">
          Expect A Call From Your Rider Soon!
        </h1>
        <div>
          <img
            className="w-[600px] flex justify-center items-center"
            src={Thankyou}
            alt="thank you image"
          />
          <Link to="/#">
            <button className="text-xl items-center justify-center text-white border border-rounded rounded-full bg-primary px-6 py-2 ml-60 mb-28 mt-12">
              Logout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
