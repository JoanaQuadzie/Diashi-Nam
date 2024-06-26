import React from "react";
import Rider1removebg from "../assets/images/rider1removebg.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import Rider1removebg from "../assets/images/rider1removebg.png";

export default function profile() {
  return (
    <>
      <Navbar bgColor={"bg-gray-400 text-white"} />
      <div className="bg-gray-100 p-4">
        <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
          {/* <!-- top content --> */}
          <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <div className="mt-10 h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img src={Rider1removebg} />
            </div>

            <div className="w-2/3 sm:text-center pl-5 mt-16 text-start ">
              <p className="font-poppins font-bold text-heading sm:text-4xl text-primary text-2xl">
                Rexford Addae
              </p>
              <p className="text-primary text-heading">Diashi-Nam Rider</p>
            </div>
          </div>

          {/* <!-- main content --> */}
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="flex flex-col sm:w-1/3">
                {/* <!-- My contact --> */}
                <div className="py-3 sm:order-none order-3">
                  <h2 className="text-lg text-primary font-poppins font-bold text-top-color">
                    My Contact
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          ></path>
                        </svg>
                      </a>
                      <div className="ml-2 truncate">rexdiash@gmail.com</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a
                        className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds YouTube"
                        href=""
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                          ></path>
                        </svg>
                      </a>
                      <div>9145258775</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a
                        className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds Facebook"
                        href=""
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="h-4"
                        >
                          <path
                            fill="currentColor"
                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          ></path>
                        </svg>
                      </a>
                      <div>Rexford Addy</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a
                        className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds Twitter"
                        href=""
                        target="_blank"
                      >
                        <svg
                          className="h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          ></path>
                        </svg>
                      </a>
                      <div>amitpachange21</div>
                    </div>
                  </div>
                </div>

                {/* <!-- Education Background --> */}
                <div className="py-3 sm:order-none order-1">
                  <h2 className="text-lg text-primary font-poppins font-bold text-top-color">
                    Education Background
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">
                        2021
                      </p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700">
                          B.E. (INFORMATION TECHNOLOGY)
                        </span>
                        , PIMPRI CHINCHWAD COLLEGE OF ENGINEERING, PUNE.
                      </p>
                      <p className="font-bold text-xs text-gray-700 mb-2">
                        Percentage: 76.61
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">
                        2017
                      </p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700">HSC</span>, RAJARSHI
                        SHAHU COLLEGE, LATUR.
                      </p>
                      <p className="font-bold text-xs text-gray-700 mb-2">
                        Percentage: 80.77
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">
                        2015
                      </p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700">SSC</span>, DNYANESHWAR
                        HIGH SCHOOL, LATUR.
                      </p>
                      <p className="font-bold text-xs text-gray-700 mb-2">
                        Percentage: 93.80
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                {/* <!-- About me --> */}
                <div className="py-3">
                  <h2 className="text-lg text-primary font-poppins font-bold text-top-color">
                    About Me
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>
                  <p>
                    Rex is passionate about optimizing logistics operations to
                    improve efficiency and customer satisfaction. He thrives in
                    fast-paced environments and enjoys the challenge of meeting
                    tight deadlines while maintaining quality standards.
                  </p>
                </div>

                {/* <!-- Professional Experience --> */}
                <div className="py-3">
                  <h2 className="text-lg text-primary font-poppins font-bold text-top-color">
                    Professional Experience
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold text-primary">
                        Diashi-Nam | Dispatch Rider
                      </p>
                      <p className="font-semibold text-sm text-gray-700">
                        2021 - Present
                      </p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                        Key Responsibilities
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Working on customer facing product</li>
                        <li>Deliverying highly efficient products</li>
                      </ul>
                    </div>

                    <div className="flex flex-col mt-8">
                      <p className="text-lg font-bold text-primary">
                        Bolt Food | Driver
                      </p>
                      <p className="font-semibold text-sm text-gray-700">
                        2020-2021
                      </p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                        Key Responsibilities
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Dropping off salespersons</li>
                        <li>Supplying purchase products</li>
                        <li>Loading and offloading goods</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- Projects --> */}
                <div className="py-3">
                  <h2 className="text-lg text-primary font-poppins font-bold text-top-color">
                    Projects
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">
                        Used Books mobile app
                      </p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">
                        A platform to sell as well as to buy used books only for
                        PCCoE College due to this reuse of books will be there
                        beneficial for environment also indirectly helps
                        increase communication between juniors and seniors.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">
                        Parking Automation System
                      </p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">
                        it’s a web application which helps you to book your slot
                        for your car just like booking a movie ticket from home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
