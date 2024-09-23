import React, { useEffect } from "react";
import "../../index.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Calculation = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-delay="500"
        className="max-w-5xl relative min-h-[500px]  bg-blue-950 flex flex-col  rounded-md justify-center mx-auto lg:py-10 py-5 px-8 md:mt-52 mt-10 mb-10"
      >
        <h1 className="text-3xl roboto-medium text-white">
          Make Money, Risk-
          <br />
          Free
        </h1>
        <div className="max-w-md rounded-md mt-5 roboto-medium bg-blue-900 shadow-md  flex flex-col justify-center gap-5 px-5 py-2">
          <h1 className="text-lg roboto-regular text-white flex justify-between item-center">
            <span>You Sell A t-shirt</span>
            <span>$ 30</span>
          </h1>
          <h1 className="text-lg roboto-regular text-white flex justify-between item-center">
            <span>You pay for its production</span>
            <span>$ 12</span>
          </h1>
          <hr />
          <h1 className="text-xl roboto-regular text-white flex justify-between item-center">
            <span className="text-green-500">You Profit</span>
            <span className="text-green-500">$ 18</span>
          </h1>
        </div>
        <button className="max-w-md rounded-sm px-5 mt-2 bg-green-500 text-white py-2 roboto-medium">
          Start Selling
        </button>
        <h1 className="text-base roboto-light mt-5 text-white">
          100% Free to use · 900+ Products · Largest print network
        </h1>
        {/* <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="100"
          className="absolute lg:block hidden left-[520px] max-w-lg rounded-xl min-h-[700px]"
        >
          <img src={moneyplant} className="w-full h-full" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Calculation;
