import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';



export default function Payment() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar bgColor={"bg-gray-400"} />
      <div>
        <h1 className="text-primary text-5xl font-bold text-center py-24 ">
          Select Your Preferred Payment Method
        </h1>

        <div className="grid grid-cols-2  px-40">
          {/* <div class=" flex justify-center items-center w-full h-screen p-5"> */}
          <div class="bg-white px-10 pt-2 pb-8 mb-4 w-fit shadow-lg">
            <h1 class="text-3xl font-bold mb-4 text-center text-black">
              Mobile Money
            </h1>
            <form>
              <div class="mb-4">
                <label
                  class="block text-purple text-sm font-bold mb-2"
                  for="email"
                >
                  Name <span class="text-red-500">*</span>
                </label>
                <input
                  class="shadow appearance-none border rounded-md w-[400px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline dark:text-gray-200"
                  id="email"
                  type="email"
                  placeholder="Name"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                  for="password"
                >
                  Number <span class="text-red-500">*</span>
                </label>
                <input
                  class="shadow appearance-none border rounded-md w-[400px] py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline dark:text-gray-200"
                  id="password"
                  type="password"
                  placeholder="123-456-789"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                  for="password"
                >
                  Referrence <span class="text-red-500">*</span>
                </label>
                <input
                  class="shadow appearance-none border rounded-md w-[400px] py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-200"
                  id="password"
                  type="password"
                  placeholder="item details"
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-primary hover:bg-purple-900 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Enter
                </button>
              </div>
            </form>
          </div>
          {/* </div> */}

          <div class="w-full max-w-lg mx-auto p-8 ">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-3xl font-bold mb-6">Payment Information</h2>
              <form>
                <div class="grid grid-cols-2 gap-6">
                  <div class="col-span-2 sm:col-span-1">
                    <label
                      for="card-number"
                      class="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      placeholder="0000 0000 0000 0000"
                      class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <label
                      for="expiration-date"
                      class="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      placeholder="MM / YY"
                      class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <label
                      for="cvv"
                      class="block text-sm font-bold text-gray-700 mb-2"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      id="cvv"
                      placeholder="000"
                      class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <label
                      for="card-holder"
                      class="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Card Holder
                    </label>
                    <input
                      type="text"
                      name="card-holder"
                      id="card-holder"
                      placeholder="Full Name"
                      class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div class="mt-8">
                  <Link to="/confirmorder">
                    <button
                      type="submit"
                      class="w-full bg-primary hover:bg-purple-900 text-white font-medium py-3 rounded-lg focus:outline-none"
                    >
                      Submit
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// export default () => (
//   <Tabs>
//     <TabList>
//       <Tab>Mobile Money</Tab>
//       <Tab>Payment Information</Tab>
//     </TabList>

//     <TabPanel>
//       <h2>  <div class="bg-white px-10 pt-2 pb-8 mb-4 w-fit shadow-lg">
//             <h1 class="text-3xl font-bold mb-4 text-center text-black">
//               Mobile Money
//             </h1>
//             <form>
//               <div class="mb-4">
//                 <label
//                   class="block text-purple text-sm font-bold mb-2"
//                   for="email"
//                 >
//                   Name <span class="text-red-500">*</span>
//                 </label>
//                 <input
//                   class="shadow appearance-none border rounded-md w-[400px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline dark:text-gray-200"
//                   id="email"
//                   type="email"
//                   placeholder="Name"
//                 />
//               </div>
//               <div class="mb-4">
//                 <label
//                   class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
//                   for="password"
//                 >
//                   Number <span class="text-red-500">*</span>
//                 </label>
//                 <input
//                   class="shadow appearance-none border rounded-md w-[400px] py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline dark:text-gray-200"
//                   id="password"
//                   type="password"
//                   placeholder="123-456-789"
//                 />
//               </div>
//               <div class="mb-4">
//                 <label
//                   class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
//                   for="password"
//                 >
//                   Referrence <span class="text-red-500">*</span>
//                 </label>
//                 <input
//                   class="shadow appearance-none border rounded-md w-[400px] py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-200"
//                   id="password"
//                   type="password"
//                   placeholder="item details"
//                 />
//               </div>
//               <div class="flex items-center justify-between">
//                 <button
//                   class="bg-primary hover:bg-purple-900 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="button"
//                   onClick={() => navigate("/availableriders")}
//                 >
//                   Enter
//                 </button>
//               </div>
//             </form>
//           </div></h2>
//     </TabPanel>

//     <TabPanel>
//       <h2>
//           <div class="w-full max-w-lg mx-auto p-8 ">
//             <div class="bg-white rounded-lg shadow-lg p-6">
//               <h2 class="text-3xl font-bold mb-6">Payment Information</h2>
//               <form>
//                 <div class="grid grid-cols-2 gap-6">
//                   <div class="col-span-2 sm:col-span-1">
//                     <label
//                       for="card-number"
//                       class="block text-sm font-bold text-gray-700 mb-2"
//                     >
//                       Card Number
//                     </label>
//                     <input
//                       type="text"
//                       name="card-number"
//                       id="card-number"
//                       placeholder="0000 0000 0000 0000"
//                       class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
//                     />
//                   </div>
//                   <div class="col-span-2 sm:col-span-1">
//                     <label
//                       for="expiration-date"
//                       class="block text-sm font-bold text-gray-700 mb-2"
//                     >
//                       Expiration Date
//                     </label>
//                     <input
//                       type="text"
//                       name="expiration-date"
//                       id="expiration-date"
//                       placeholder="MM / YY"
//                       class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
//                     />
//                   </div>
//                   <div class="col-span-2 sm:col-span-1">
//                     <label
//                       for="cvv"
//                       class="block text-sm font-bold text-gray-700 mb-2"
//                     >
//                       CVV
//                     </label>
//                     <input
//                       type="text"
//                       name="cvv"
//                       id="cvv"
//                       placeholder="000"
//                       class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
//                     />
//                   </div>
//                   <div class="col-span-2 sm:col-span-1">
//                     <label
//                       for="card-holder"
//                       class="block text-sm font-bold text-gray-700 mb-2"
//                     >
//                       Card Holder
//                     </label>
//                     <input
//                       type="text"
//                       name="card-holder"
//                       id="card-holder"
//                       placeholder="Full Name"
//                       class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
//                     />
//                   </div>
//                 </div>
//                 <div class="mt-8">
//                   <button
//                     type="submit"
//                     class="w-full bg-primary hover:bg-purple-900 text-white font-medium py-3 rounded-lg focus:outline-none"
//                     onClick={() => navigate("/availableriders")}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div></h2>
//     </TabPanel>
//   </Tabs>
// );
