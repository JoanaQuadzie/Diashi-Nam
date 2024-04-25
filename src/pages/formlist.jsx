import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const ReceiptForm = () => {
const navigate = useNavigate()
  return (
      <>
      <Navbar/>
    <div> 
      <h2 className="text-primary text-center text-5xl font-bold mt-20">
        Make your list below
      </h2>

      <div>
        <section class="text-gray-700 body-font overflow-hidden border-t border-gray-200 ">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            
            <div class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
              <div class="lg:w-1/3 lg:mt-px w-full mb-2 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div class="px-2 text-center h-32 flex flex-col items-center justify-center">
                  <h2 class="text-3xl text-primary font-medium leading-none mb-2 mt-2">
                    Item
                  </h2>
                </div>
                <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                  
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
    
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  
                </p>
                <p class="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                
                </p>
            
                
                
              </div>
              <div class="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg relative">
                <div class="px-2 text-center h-32 flex flex-col items-center justify-center">
                  <h2 class="text-3xl text-primary font-medium flex items-center justify-center leading-none mb-4 mt-2">
                    Quantity
                  </h2>
                </div>
                <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                 
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  
                </p>
                <p class="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                 
                </p>
  
              </div>
              <div class="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div class="px-2 text-center h-32 flex flex-col items-center justify-center">
                  <h2 class="text-3xl text-primary font-medium flex items-center justify-center leading-none mb-4 mt-2">
                    Budget
                  </h2>
                </div>
                <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                 
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  
                </p>
                
               
              
                <div class="p-6 text-center border-t border-gray-300">
                  <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"> onClick={() => navigate("/payment")}
                    Submit
                    
                  </button>
      
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ReceiptForm;
