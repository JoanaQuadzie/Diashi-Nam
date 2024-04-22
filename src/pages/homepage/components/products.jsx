import React from "react";
import Clothes from "../../../assets/images/clothes.png";
import Groceries from "../../../assets/images/groceries.png";
import Vegetables from "../../../assets/images/vegetables.png";
import Fruits from "../../../assets/images/fruits.png";
import Freshfood from "../../../assets/images/freshfood.jpg";
import Delivery from "../../../assets/images/delivery.png";
import Store from "../../../assets/images/store.png";
import Hero4 from "../../../assets/images/hero4.png";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="mt-[750px]">
      <h2 className="font-bold text-center text-5xl text-green-600 my-12">
        Product Categories
      </h2>
      <div>
        <div className="p-1 flex flex-wrap items-center justify-center">
          <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: " rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              ></div>
              <img className="relative w-40" src={Groceries} alt="" />
            </div>
            <div className="relative text-black px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1 text-yellow-500">
                Want
              </span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl text-green-900">
                  Groceries?
                </span>
                <span className="block bg-white rounded-full text-yellow-500 hover:bg-green-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  <Link to="/availableriders">Shop Now</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              ></div>
              <img className="relative w-40" src={Vegetables} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1 text-yellow-500">
                Want
              </span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl text-green-900">
                  Foodstuff?
                </span>
                <span className="block bg-white rounded-full text-yellow-500 hover:bg-green-900 text-xs font-bold px-3 py-2 leading-none flex items-center text-yellow-500">
                  <Link to="/availableriders">Shop Now</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              ></div>
              <img className="relative w-40" src={Fruits} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1 text-yellow-500">
                Want
              </span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl text-green-900">
                  Fruits?
                </span>
                <span className="block bg-white rounded-full text-yellow-500 hover:bg-green-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  <Link to="/availableriders">Shop Now</Link>
                </span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              ></div>
              <img className="relative w-40" src={Clothes} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1 text-yellow-500">
                Want
              </span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl text-green-900">
                  Clothes?
                </span>
                <span className="block bg-white rounded-full text-yellow-500 hover:bg-green-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  <Link to="/availableriders">Shop Now</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-center text-5xl text-green-600 py-10">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-2">
            <div>
              <div className="max-w-2xl mx-auto mt-24">
                <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                  <div className="relative w-32 h-38 flex-shrink-0 pb-2">
                    <img src={Freshfood} alt="" />
                  </div>

                  <div className="flex flex-col gap-2 py-3">
                    <p className="text-xl font-bold text-green-900">
                      Fresh Food
                    </p>

                    <p className="text-gray-500">
                      We try to keep our items safe and fresh. Our aim is to
                      make available everything to as many people as possible.
                    </p>

                    <span className="flex items-center justify-start text-gray-500"></span>
                  </div>
                </div>
              </div>

              <div className="max-w-2xl mx-auto mt-24">
                <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                  <div className="relative w-32 h-38 flex-shrink-0">
                    <img src={Delivery} alt="" />
                  </div>

                  <div className="flex flex-col gap-2 py-3">
                    <p className="text-xl font-bold text-green-900">
                      Quickest Delivery
                    </p>

                    <p className="text-gray-500">
                      We love to make our consumers feel like shopping next to
                      their doors by ensuring the quickest delivery service.
                    </p>

                    <span className="flex items-center justify-start text-gray-500"></span>
                  </div>
                </div>
              </div>

              <div className="max-w-2xl mx-auto mt-24">
                <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                  <div className="relative w-32 h-38 flex-shrink-0">
                    <img src={Store} alt="" />
                  </div>

                  <div className="flex flex-col gap-2 py-3">
                    <p className="text-xl font-bold text-green-900">
                      Genuine and Authentic Shop
                    </p>

                    <p className="text-gray-500">
                      We focus on ensuring sound health by delivering
                      adulteration, additives, and chemical-free pure and safe
                      market at consumer's doorstep.
                    </p>

                    <span className="flex items-center justify-start text-gray-500"></span>
                  </div>
                </div>
              </div>
            </div>
            <img />
          </div>
          <img src={Hero4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
