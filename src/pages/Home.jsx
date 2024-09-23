import React from "react";
import Calculation from "../components/Home/Calculation";
import ConnecYourBusiness from "../components/Home/ConnecYourBusiness";
import Contact from "../components/Home/Contact";
import CopyRight from "../components/Home/CopyRight";
import Feature from "../components/Home/Feature";
import Feture2 from "../components/Home/Feture2";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Icon from "../components/Home/Icon";
import Testimonial from "../components/Home/Testimonial";
import moneyplant from "../media/mon.png";

const Home = () => {
  return (
    <>
      <div className="max-w-full min-h-full ">
        <Header />
        <Hero />
        <Feature />
        <Feture2 />
        <ConnecYourBusiness />
        <Contact />
        <Testimonial />
        <div className="relative">
          <Calculation />
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="100"
            className="absolute xl:block hidden bottom-[1px]  left-[900px] max-w-lg rounded-xl min-h-[600px]"
          >
            <img src={moneyplant} className="w-full h-full" alt="" />
          </div>
        </div>
        <Icon />
        <Footer />
        <CopyRight />
      </div>
    </>
  );
};

export default Home;
