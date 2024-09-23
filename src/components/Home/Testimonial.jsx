import React, { useEffect } from "react";
import "../../index.css";
import ReviewCard from "./ReviewCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-slate-300 flex w-full min-h-[400px]">
      <div className="max-w-5xl  bg-slate-300 flex   flex-col rounded-md items-center mx-auto py-10  px-6  ">
        <div className="w-full  px-3 flex justify-center gap-10 item-center">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
            className="md:text-3xl text-xl roboto-bold"
          >
            Trusted by over 8M sellers around the world
          </h1>
          <p
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="600"
            className="md:text-2xl text-base roboto-regular mt-5"
          >
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>
        {/* slider */}
        <ReviewCard />
      </div>
    </div>
  );
};

export default Testimonial;
