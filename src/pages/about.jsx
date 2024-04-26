import React from "react";
import Aboutimg2 from "../assets/images/aboutimg2.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



export default function about() {
  return (
    <>
      <Navbar bgColor={"bg-gray-400"} />
      <div className="flex flex-col px-16">
        <h1 className="text-primary text-5xl font-bold text-center py-10 mt-14">
          About Us
        </h1>
        <div className="flex items-center gap-x-5">
          <div className="flex flex-col-3 w-1/2">
            <p className="text-xl ">
              Welcome to Diashi-Nam, where authenticity, speed, and quality
              converge for an exceptional shopping experience.
            </p>
            <p className="text-xl">
              At Diashi-Nam, we pride ourselves on sourcing only genuine
              products from trusted suppliers, ensuring that every item you
              receive is of the highest quality. Our lightning-fast delivery
              service brings your purchases right to your doorstep, saving you
              time and hassle{" "}
            </p>
            <p className="text-xl">
              With Diashi-Nam, you can shop confidently, knowing that your order
              will arrive swiftly and exceed your expectations in both
              authenticity and quality."
            </p>
          </div>
          <img src={Aboutimg2} alt="" className="w-1/2" />
        </div>
      </div>
      <Footer />
    </>
  );
}
