import React from 'react';
import Rider1 from "../assets/images/rider1.jpg";
import Rider2 from "../assets/images/rider2.jpg";
import Rider4 from "../assets/images/rider4.jpg";
import Rider5 from "../assets/images/rider5.jpg";
import Rider6 from "../assets/images/rider6.jpg";
import Rider7 from "../assets/images/rider7.jpg";
import { Link } from 'react-router-dom';



export default function availableriders() {
  return (
    <div>
      {/* <!-- source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html --> */}

      <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4 text-green-600">
          Choose Your Preferred Rider
        </h1>
        <h1 class="text-3xl text-green-600">We've got you!</h1>
      </div>

      {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={Rider1}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-red-400 mr-3 uppercase text-xs">Select</span>
              <p class="text-lg font-bold text-red-800 truncate block capitalize">
                Rexford
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-red-800 cursor-auto my-3">
                  <Link to="/profile">View Profile</Link>
                </p>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 1 - Ends Here  --> */}

        {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={Rider2}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-green-800 mr-3 uppercase text-xs">Select</span>
              <p class="text-lg font-bold text-green-900 truncate block capitalize">
                Larrisa
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-green-900 cursor-auto my-3">
                  View Profile
                </p>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 2- Ends Here  --> */}

        {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={Rider5}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-blue-700 mr-3 uppercase text-xs">select</span>
              <p class="text-lg font-bold text-blue-900 truncate block capitalize">
                Kyeila
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-blue-900 cursor-auto my-3">
                  View Profile
                </p>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 3 - Ends Here  --> */}

        {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={Rider4}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-red-400 mr-3 uppercase text-xs">select</span>
              <p class="text-lg font-bold text-red-800 truncate block capitalize">
                Monalisa
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-red-800 cursor-auto my-3">
                  View Profile
                </p>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 4 - Ends Here  --> */}

        {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={Rider6}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-green-800 mr-3 uppercase text-xs">select</span>
              <p class="text-lg font-bold text-green-900 truncate block capitalize">
                Petra
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-green-900 cursor-auto my-3">
                  View Profile
                </p>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 5 - Ends Here  --> */}

        {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={Rider7}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-green-800 mr-3 uppercase text-xs">select</span>
              <p class="text-lg font-bold text-green-900 truncate block capitalize">
                Jessica
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-green-900 cursor-auto my-3">
                  View Profile
                </p>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 6 - Ends Here  --> */}
      </section>

      {/* <!-- 🛑 Grid Section - Ends Here --> */}
    </div>
  );
}
