import React from "react";
import { useNavigate } from "react-router-dom";
import Clothes from "../assets/images/clothes.png";
import Groceries from "../assets/images/groceries.png";
import Vegetables from "../assets/images/vegetables.png";
import Fruits from "../assets/images/fruits.png";
import Navbar from "../components/navbar";
import Cosmetics from "../assets/images/cosmetics.png";
import Utensils from "../assets/images/utensils.png";
import Stationary from "../assets/images/stationary.jpg";
import Others from "../assets/images/others.jpg";
// import Footer from "../components/footer";

export default function Categories() {
  // Corrected component name from "categories" to "Categories"
  const navigate = useNavigate();

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
      title: "Cosmetics",
      img: Cosmetics,
    },
    {
      title: "Clothes",
      img: Clothes,
    },
    {
      title: "Fruits",
      img: Fruits,
    },
    {
      title: "Utensils",
      img: Utensils,
    },
    {
      title: "Stationary",
      img: Stationary,
    },
    {
      title: "Others",
      img: Others,
    },
  ];

  return (
    <>
    <Navbar/>
      <div>
        <h2 className="font-bold text-center text-5xl text-primary my-12 mt-32">
          Product Categories
        </h2>
        <div className="p-1 flex flex-wrap items-center justify-center">
          {categories.map((category, index) => (
            <div
              key={index} // Added key prop to the outer div for list rendering
              className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group"
            >
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img className="w-40 h-40" src={category.img} alt="" />
              </div>
              <div className="flex flex-col gap-y-4 px-6 pb-6 mt-6 text-lg font-semibold">
                <span className="text-black">Want {category.title}?</span>
                <button
                  className="bg-primary hover:bg-purple-800 text-white rounded-full justify-center text-xs font-bold px-2 py-3 leading-none flex items-center"
                  onClick={() => navigate("/ReceiptForm")}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
