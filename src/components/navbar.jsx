import React from "react";
import Logoremove from "../assets/images/logoremove.png";
import { Link } from "react-router-dom";
export default function Navbar({ bgColor }) {
  return (
    <div>
      <nav className="bg-primary text-white fixed top-0 w-full py-2 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logoremove} className="h-4 w-full" alt="Flowbite Logo" />
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block px-3 text-white  rounded md:bg-transparent md:text-white text-xl md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link to="/about">About</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link to="/services">Services</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-xl  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link to="/categories">Categories</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link to="/contact">Contact</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
