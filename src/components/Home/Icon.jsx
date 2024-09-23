import React from "react";
import { MdOutlineLocalMall } from "react-icons/md";
import "../../index.css";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import { SlSocialReddit } from "react-icons/sl";

const Icon = () => {
  return (
    <div className="max-w-5xl  max-h-[500px]   flex flex-wrap  rounded-md gap-5 lg:justify-between mx-auto lg:py-10 py-1 px-8 mt-10 mb-10">
      <div className="max-w-sm gap-3 flex">
        <MdOutlineLocalMall className="text-green-500 text-4xl" />
        <h1 className="roboto-bold text-green-500  block  text-4xl ">
          Printify
        </h1>
      </div>

      <div className="max-w-sm gap-3 flex">
        <TiSocialFacebook className="text-3xl px-1 py-1 bg-green-500 text-white rounded-full" />
        <SlSocialInstagram className="text-3xl px-1 py-1 bg-green-500 text-white rounded-full" />
        <TiSocialLinkedin className="text-3xl px-1 py-1 bg-green-500 text-white rounded-full" />
        <FaXTwitter className="text-3xl px-1 py-1 bg-green-500 text-white rounded-full" />
        <FaYoutube className="text-3xl px-1 py-1 bg-green-500 text-white rounded-full" />
        <FaTiktok className="text-3xl px-1 py-1 bg-green-500 text-white rounded-full" />
        <SlSocialReddit className="text-3xl px-1 py-1 bg-green-500 text-white rounded-full" />
      </div>
    </div>
  );
};

export default Icon;
