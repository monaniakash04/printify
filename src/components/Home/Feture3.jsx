import React from "react";
import profit from "../../media/profit.jpeg";
import rocket from "../../media/rocket.jpg";
import shop from "../../media/shop.jpg";

const Feture3 = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto py-10 px-4 mt-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            data-aos-easing="ease-in"
            className="space-y-4 "
          >
            <img
              src={profit}
              alt="Higher Profits"
              className="w-24 h-24 mx-auto rounded"
            />
            <h3 className="text-xl roboto-medium text-green-500">CREATE</h3>
            <h3 className="text-xl roboto-medium">Custom Product</h3>
            <p className="text-gray-600 roboto-regular">
              Easily add your design to a wide range of prodcuts using pur free
              tools
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="600"
            data-aos-easing="ease-in"
            className="space-y-4"
          >
            <img
              src={rocket}
              alt="Robust Scaling"
              className="w-24 h-24 mx-auto rounded"
            />
            <h3 className="text-xl  roboto-medium text-green-500 ">SELL</h3>
            <h3 className="text-xl  roboto-medium ">On your terms</h3>
            <p className="text-gray-600  roboto-regular">
              You choose the product,sale,price and where to sell
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="700"
            data-aos-easing="ease-in"
            className="space-y-4 "
          >
            <img
              src={shop}
              alt="Best Selection"
              className="w-24 h-24 mx-auto rounded"
            />
            <h3 className="text-xl  roboto-medium text-green-500">WE HANDLE</h3>
            <h3 className="text-xl  roboto-medium">fulfillment</h3>
            <p className="text-gray-600  roboto-regular">
              Once an Order is placed,we automatically handle all the printing
              and delievery logistics
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feture3;
