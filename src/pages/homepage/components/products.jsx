import React from "react";
import Clothes from "../../../assets/images/clothes.png";
import Groceries from "../../../assets/images/groceries.png";
import Vegetables from "../../../assets/images/vegetables.png";
import Fruits from "../../../assets/images/fruits.png";
import Freshfood from "../../../assets/images/freshfood.jpg";
import Delivery from "../../../assets/images/delivery.png";
import Store from "../../../assets/images/store.png";
import Hero7 from "../../../assets/images/hero7.png";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const categories = [
    {
      title: "Groceries",
      img: Groceries,
    },
    {
      title: "Foodstuffs",
      img: Vegetables,
    },
    {
      title: "Fruits",
      img: Fruits,
    },
    {
      title: "Clothes",
      img: Clothes,
    },
  ];
  const motive = [
    {
      img: "Freshfood",
      title: "Freshfood",
    },
    {
      img: "Delivery",
      title: "Quiclest delivery",
    },
    {
      img: "Shop",
      title: "Genuine and Authentic Shop",
    },
  ];

  return (
    <div className="mt-[750px]">
      <h2 className="font-bold text-center text-5xl text-primary my-12">
        Product Categories
      </h2>
      <div>
        <div className="p-1 flex flex-wrap items-center justify-center">
          {categories.map((category, index) => (
            <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group">
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img className="w-40 h-40" src={category.img} alt="" />
              </div>
              <div className=" flex flex-col gap-y-4 px-6 pb-6 mt-6 text-lg font-semibold">
                <span className="text-black ">Want {category.title}?</span>
                <button
                  className=" bg-primary hover:bg-purple-800 text-white rounded-full justify-center text-xs font-bold px-2 py-3 leading-none flex items-center"
                  onClick={() => navigate("/ReceiptForm")}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100">
          <h2 className="font-bold text-center text-5xl text-primary pt-8 my-20">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-2 px-40 items-center">
            <div className="flex flex-col">
              <div className="w-full ">
                <div className="flex bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start p-5">
                  <div className="relative w-32 h-38 flex-shrink-0 pb-2">
                    <img src={Freshfood} alt="" />
                  </div>

                  <div className="flex flex-col gap-2 py-3">
                    <p className="text-xl font-bold text-primary">Fresh Food</p>

                    <p className="text-gray-500">
                      We try to keep our items safe and fresh. Our aim is to
                      make available everything to as many people as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-2xl mx-auto mt-10">
                <div className="flex  bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start p-5">
                  <div className="relative w-32 h-38 flex-shrink-0">
                    <img src={Delivery} alt="" />
                  </div>

                  <div className="flex flex-col gap-2 py-3">
                    <p className="text-xl font-bold text-primary">
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

              <div className="max-w-2xl mx-auto my-10">
                <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start p-5">
                  <div className="relative w-32 h-38 flex-shrink-0">
                    <img src={Store} alt="" />
                  </div>

                  <div className="flex flex-col gap-2 py-3">
                    <p className="text-xl font-bold text-primary">
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
            <img className="ml-20 mb-20 w-full" src={Hero7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
