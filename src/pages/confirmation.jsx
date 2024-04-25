import React from "react";
import Thankyou from "../assets/images/thankyou.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function confirmation() {
  return (
    <>
      <Navbar />
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
        </div>
      </div>
      <Footer />
    </>
  );
}
