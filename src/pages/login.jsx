import React from "react";
import Bg3 from "../assets/images/bg3.jpg";


export default function () {
  return (
    <div>
        <div className="bg-cover bg-center w-full h-screen filter blur" style={{ backgroundImage: `url(${Bg3})`}}></div> 
       
<form class="max-w-sm mx-auto bg-gray-900 absolute top-14 left-10 right-14">
    <div className="text-white font-medium text-center">
    <h2 className="text-lg my-3">LOGIN</h2>
    </div>
  <div class="mb-5 mx-7">
    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@gmail.com" required />
  </div>
  <div class="mb-5 mx-7">
    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**********"required />
  </div>
  <div class="mb-5 mx-7">
    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Confirm Password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**********" required />
  </div>
  <div class="flex items-start mb-5 mx-7"></div>
  <button type="submit" class="text-white bg-amber-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 mb-5 mx-7 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

          
        
    </div>

  )
}
