import React, { useEffect } from "react";
import "../../index.css";

import FirstImage from "../../media/1st.jpeg";
import SecondImage from "../../media/2nd.jpeg";
import Thirdmage from "../../media/3rd.jpeg";
import FourthImage from "../../media/4th.jpeg";
import "aos/dist/aos.css";
import Aos from "aos";
import Feture3 from "./Feture3";

const Feture2 = () => {
  const Images = [FirstImage, SecondImage, Thirdmage, FourthImage];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full bg-slate-200 mt-10 min-h-[600px] flex flex-col  justify-center items-center">
      <div
        className="max-w-[1500px] min-h-[400px] p-6 gap-6 flex-wrap
       flex justify-center px-10 mt-12 m-4 items-center bg-white rounded-xl shadow-lg"
      >
        <div className="max-w-[900px] min-h-[300px] relative  flex justify-center item-center">
          <img
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="500"
            src={Images[0]}
            className="w-full h-full  rounded-xl"
            alt=""
          />
          <img
            src={Images[3]}
            data-aos="fade-right"
            data-aos-once="true"
            className="w-full hidden lg:block h-full absolute top-[-90px] left-[-150px]  rounded-xl"
            alt=""
          />
        </div>
        <div className="max-w-[600px] gap-7 flex flex-col justify-center item-center">
          <h1
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="500"
            className="text-4xl roboto-bold"
          >
            Easily add your design to a wide range of products
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="600"
            className="text-base roboto-regular"
          >
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>

          <button
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="700"
            className="bg-green-500 px-2 py-1 rounded-lg roboto-regular max-w-[120px] text-white text-lg"
          >
            All Product
          </button>
        </div>
      </div>

      {/* how our business works */}
      <div
        className="max-w-[1500px] min-h-[400px] p-6 gap-6 flex-wrap
       flex justify-center px-10 m-4 items-center  rounded-xl "
      >
        <Feture3 />
      </div>
    </div>
  );
};

export default Feture2;
