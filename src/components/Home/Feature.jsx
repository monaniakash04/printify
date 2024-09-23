import React, { useEffect } from "react";
import "../../index.css";
import profit from "../../media/profit.jpeg";
import rocket from "../../media/rocket.jpg";
import shop from "../../media/shop.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Feature = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="max-w-5xl mx-auto py-10 px-4 mt-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div
            data-aos="fade-top"
            data-aos-once="true"
            data-aos-delay="500"
            className="space-y-4 shadow-lg"
          >
            <img
              src={profit}
              alt="Higher Profits"
              className="w-24 h-24 mx-auto rounded"
            />
            <h3 className="text-xl roboto-medium">Higher Profits</h3>
            <p className="text-gray-600 roboto-regular">
              We offer some of the lowest prices in the industry because print
              providers continuously compete to win your business.
            </p>
          </div>

          <div
            data-aos="fade-top"
            data-aos-once="true"
            data-aos-delay="700"
            className="space-y-4 shadow-lg"
          >
            <img
              src={rocket}
              alt="Robust Scaling"
              className="w-24 h-24 mx-auto rounded"
            />
            <h3 className="text-xl  roboto-medium ">Robust Scaling</h3>
            <p className="text-gray-600  roboto-regular">
              Easily handle peak holiday seasons, with our wide network of
              partners and automatic routing functionality.
            </p>
          </div>

          <div
            data-aos="fade-top"
            data-aos-once="true"
            data-aos-delay="800"
            className="space-y-4 shadow-lg"
          >
            <img
              src={shop}
              alt="Best Selection"
              className="w-24 h-24 mx-auto rounded"
            />
            <h3 className="text-xl  roboto-medium">Best Selection</h3>
            <p className="text-gray-600  roboto-regular">
              With 900+ products and top quality brands, you can choose the best
              products for your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
