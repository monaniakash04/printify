import React from "react";
import "../../index.css";
import svgImage from "../../media/undraw_color_palette_re_dwy7.svg";

const Hero = () => {
  return (
    <>
      <div className="mt-5 lg:h-[600px] gradient lg:mx-auto max-w-[1400px] flex flex-wrap lg:justify-between justify-center px-9 items-center flex-shrink-0">
        {/* title */}
        <div className="max-w-[700px] flex flex-col ">
          {/* heading */}
          <div className="lg:text-6xl text-4xl roboto-bold ">
            Create And Sell
            <br />
            custom products
          </div>
          <div class="max-w-md roboto-medium mt-5 text-center space-y-6">
            <ul class="text-left space-y-2">
              <li class="flex items-center space-x-2">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>100% Free to use</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>900+ High-Quality Products</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Largest global print network</span>
              </li>
            </ul>

            <div class="flex justify-center space-x-4">
              <button class="bg-green-500 md:text-base text-sm text-white md:px-6 md:py-2 px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Start for free
              </button>
              <button class="border border-gray-300 md:text-base text-sm text-gray-600 md:px-6 md:py-2 px-2 py-1 rounded-md flex items-center space-x-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.963v4.074a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12A7 7 0 115 12a7 7 0 0114 0z"
                  ></path>
                </svg>
                <span>How it works?</span>
              </button>
            </div>

            <p class="text-green-500">
              Trusted by over 8M sellers around the world
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="max-w-[700px] lg:mt-0 mt-10  flex justify-center items-center">
          <img src={svgImage} className="w-full h-full animated-char" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
