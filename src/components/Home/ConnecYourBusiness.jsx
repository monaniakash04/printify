import React, { useEffect } from "react";
import "../../index.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ConnecYourBusiness = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className="max-w-[1500px] mb-10 min-h-[400px] p-6 gap-6 flex-wrap
       flex flex-col justify-center px-10 mx-auto mt-[-10px] items-center bg-white "
      >
        <h1 className="roboto-medium lg:text-4xl  text-2xl">
          Connect Your Store
        </h1>
        <p className="roboto-light lg:text-md  text-sm">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="500"
          className="max-w-[800px] max-h-[300px]"
        >
          <dotlottie-player
            src="https://lottie.host/3f6bcfca-624a-4b5e-81e7-372b486f0c9a/oBE8CulR6S.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </>
  );
};

export default ConnecYourBusiness;
