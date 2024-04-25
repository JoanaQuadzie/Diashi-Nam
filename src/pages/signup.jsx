import React from "react";
import Logoremove from "../assets/images/logoremove.png";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function SignUp() {
  return (
    <>
    <Navbar/>
      <div>
        <div className="min-h-screen flex flex-col align-left py-6 sm:px-6 lg:px-8 mr-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-10 w-auto"
              src={Logoremove}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-primary">
              Create a new account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-primary max-w">
              Or{" "}
              <a
                href="#"
                className="font-medium text-primary hover:text-green-700 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                <Link to="/login">login to your account</Link>
              </a>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form method="POST" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      type="text"
                      required=""
                      value=""
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="password"
                      name="password"
                      placeholder="********"
                      type="password"
                      required=""
                      value=""
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Location
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="location"
                      name="password"
                      placeholder="Accra"
                      type="password"
                      required=""
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="password_confirmation"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Contact
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="contact"
                      name="contact"
                      placeholder="123-456-789"
                      type="password"
                      required=""
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-green-700 transition duration-150 ease-in-out"
                    >
                      Create account
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute top-28 left-56 text-primary">
          <svg
            width="45"
            height="43"
            viewBox="0 0 45 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.4822 41.8722C38.4822 41.8722 -3.08845 45.558 1.06709 24.3861C3.76607 10.6352 20.9941 16.3884 20.9941 16.3884C20.9941 16.3884 21.8094 -1.75829 35.6239 0.671643C54.8375 4.05124 38.4822 41.8722 38.4822 41.8722Z"
              fill="currentColor"
            />
          </svg>
          <div className="absolute top-60 left-36">
            <svg
              width="40"
              height="58"
              viewBox="0 0 45 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.4822 41.8722C38.4822 41.8722 -3.08845 45.558 1.06709 24.3861C3.76607 10.6352 20.9941 16.3884 20.9941 16.3884C20.9941 16.3884 21.8094 -1.75829 35.6239 0.671643C54.8375 4.05124 38.4822 41.8722 38.4822 41.8722Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
