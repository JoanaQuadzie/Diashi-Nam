import React from 'react';
import Note2 from "../assets/images/note2.jpg";

export default function contact() {
  return (
    <div>
        <div >
            
        <div
          className="bg-cover bg-center bg-gradient-to-l md:bg-gradient-to-r w-full h-screen"
          style={{ backgroundImage: `url(${Note2})` }}
        ></div>
<div class="w-96 m-auto p-8 bg-white border justify-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute top-12 right-12 left-12">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li>
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"></button>
        </li>
        <li>
            <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"></button>
        </li>
        <li>
            <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"></button>
        </li>
    </ul>
    <h1 className="text-4xl font-bold py-8">Contact Us</h1>
    <div>
    <label
                for="first_name"
                class="block mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
    </div>
    <div>
              <label
                for="company"
                class="block mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                Message
              </label>
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="message"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <button className="bg-teal-300 text-white p-2.5 w-full my-3 rounded-2g">Send Message</button>
    

    <div id="defaultTabContent">
    </div>
</div>

        </div>
    </div>
  )
}
