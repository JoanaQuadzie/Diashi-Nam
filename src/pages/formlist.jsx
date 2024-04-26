import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const ReceiptForm = () => {
const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div>
        <div>
          <section class="text-gray-700 body-font overflow-hidden border-t border-gray-200 ">
            <h2 className="text-primary text-center text-5xl font-bold mt-32">
              Make your list below
            </h2>
            <div class="container px-5 py-10 mx-auto flex flex-wrap justify-center">
              <div class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
                <div class="lg:w-1/3 lg:mt-px w-full mb-2 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                  <div class="px-2 text-center h-32 flex flex-col items-center justify-center">
                    <h2 class="text-3xl text-primary font-medium leading-none mb-2 mt-2">
                      Item
                    </h2>
                  </div>

                  <input
                    type="text"
                    id="first_name"
                    class=" mb-8 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <input
                    type="text"
                    id="first_name"
                    class="mb-8 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <p class="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center"></p>
                </div>
                <div class="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg relative">
                  <div class="px-2 text-center h-32 flex flex-col items-center justify-center">
                    <h2 class="text-3xl text-primary font-medium flex items-center justify-center leading-none mb-4 mt-2">
                      Quantity
                    </h2>
                  </div>

                  <input
                    type="text"
                    id="first_name"
                    class="mb-8 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <input
                    type="text"
                    id="first_name"
                    class="mb-8 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <p class="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center"></p>
                </div>
                <div class="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                  <div class="px-2 text-center h-32 flex flex-col items-center justify-center">
                    <h2 class="text-3xl text-primary font-medium flex items-center justify-center leading-none mb-4 mt-2">
                      Budget
                    </h2>
                  </div>

                  <input
                    type="text"
                    id="first_name"
                    class="mb-8 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <input
                    type="text"
                    id="first_name"
                    class="mb-8 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <input
                    type="text"
                    id="first_name"
                    class="mb-8 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <input
                    type="text"
                    id="first_name"
                    class="mb-8 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Total"
                    required
                  />
                  <Link to="/availableriders">
                    <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                      Submit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReceiptForm;
