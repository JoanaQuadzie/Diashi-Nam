import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function services() {
  return (
    <>
      <Navbar bgColor={"bg-gray-400"} />
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />

        <section id="new-features" class="py-8 bg-white sm:py-10 lg:py-16">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-5xl mt-10 font-bold leading-tight text-primary sm:text-4xl xl:text-5xl">
                Our Services
              </h2>
              <p class="mt-2 text-base leading-7 text-primary sm:mt-8">
                Experience the best of shopping that comes with comfortability
              </p>
            </div>
            <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
              {/* <!-- Feature 1 --> */}
              <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                <div class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                  <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900">
                  Special Handling
                </h3>
                <p class="mt-5 text-base text-gray-600">
                  Offering specialized handling for fragile or sensitive items,
                  ensuring they are transported safely and securely.
                </p>
              </div>

              {/* <!-- Feature 2 --> */}
              <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                  <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900">
                  Custom Packaging
                </h3>
                <p class="mt-5 text-base text-gray-600">
                  Offering custom packaging solutions tailored to specific
                  items, providing extra protection and branding opportunities.
                </p>
              </div>

              {/* <!-- Feature 3 --> */}
              <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                  <i class="fa-solid fa-shield text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900">
                  Bulk Delivery Discounts
                </h3>
                <p class="mt-5 text-base text-gray-600">
                  Providing discounts or special rates for bulk orders
                  incentivizing larger purchases from businesses or individuals.
                </p>
              </div>

              {/* <!-- Feature 4 --> */}
              <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
                <div class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                  <i class="fa-solid fa-cloud text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900">
                  Customized Delivery Options
                </h3>
                <p class="mt-5 text-base text-gray-600">
                  Offering flexible delivery options such as same-day delivery,
                  scheduled delivery windows, or on-demand delivery to
                  accommodate varying customer schedules.
                </p>
              </div>

              {/* <!-- Feature 5 --> */}
              <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                <div class="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                  <i class="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900">
                  Real-Time Tracking
                </h3>
                <p class="mt-5 text-base text-gray-600">
                  Providing customers with real-time tracking updates via mobile
                  apps or websites, allowing them to monitor the progress of
                  their delivery from pickup to drop-off.
                </p>
              </div>

              {/* <!-- Feature 6 --> */}
              <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                <div class="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                  <i class="fa-solid fa-bolt text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900">
                  Personal Shopper Services
                </h3>
                <p class="mt-5 text-base text-gray-600">
                  Offering personalized shopping assistance where customers can
                  request specific items or brands for delivery, catering to
                  individual preferences and tastes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
