import React from "react";
import { MdOutlineLocalMall } from "react-icons/md";
import "../../index.css";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
// 39b75d
const Header = () => {
  const [dropDown, setDropDown] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="max-w-full shadow-md md:px-8 px-3 mt-2 h-[90px] 2xl:gap-16 gap-3 sticky flex lg:justify-center justify-between items-center">
        <div className="max-w-sm relative flex items-center gap-2">
          <RxHamburgerMenu
            onClick={() => {
              setSidebar(!sidebar);
            }}
            className="text-green-500 text-3xl lg:hidden"
          />
          <MdOutlineLocalMall className="text-green-500 text-4xl" />
          <h1 className="roboto-bold text-green-500 hidden sm:block  lg:text-4xl text-xl">
            Printify
          </h1>
        </div>

        {/*Side Bar  */}

        {/*  */}
        <div className="max-w-5xl lg:flex hidden   roboto-regular   items-center justify-center">
          <ul className="list-none flex 2xl:gap-11 gap-6 items-center p-1 lg:text-xl md:text-md">
            <li className="hover:text-green-500 cursor-pointer">Catalog</li>

            <li className="relative cursor-pointer flex items-center justify-center lg:gap-2 ">
              <span
                onClick={() => {
                  setDropDown(dropDown === 1 ? 0 : 1);
                }}
                className="hover:text-green-500 group flex items-center lg:gap-2"
              >
                How it works
                <IoIosArrowDown className="text-xl  duration-300" />
              </span>
              <div className="absolute mx-5 top-[60px] w-[150px] bg-white shadow-md rounded-md">
                <ul
                  className={`flex ${
                    dropDown === 1 ? "block" : "hidden"
                  } flex-col md:text-base py-1 text-sm lg:gap-2 p-1 list-none`}
                >
                  <li className="hover:text-green-500">How Printify Works</li>
                  <li className="hover:text-green-500">Print On Demand</li>
                  <li className="hover:text-green-500">
                    Printify Quality Promise
                  </li>
                  <li className="hover:text-green-500">What To Sell?</li>
                </ul>
              </div>
            </li>

            <li className="hover:text-green-500 cursor-pointer">Pricing</li>
            <li className="hover:text-green-500 cursor-pointer">Blog</li>

            <li className="relative cursor-pointer flex items-center justify-center lg:gap-2 ">
              <span
                onClick={() => {
                  setDropDown(dropDown === 2 ? 0 : 2);
                }}
                className="hover:text-green-500 group flex items-center lg:gap-2"
              >
                Services
                <IoIosArrowDown className="text-xl  duration-300" />
              </span>
              <div className="absolute mx-5 top-[60px] w-[150px] bg-white shadow-md rounded-md ">
                <ul
                  className={`flex ${
                    dropDown === 2 ? "block" : "hidden"
                  } flex-col md:text-base py-1 text-sm lg:gap-2 p-1 list-none`}
                >
                  <li className="hover:text-green-500">Printify Studio</li>
                  <li className="hover:text-green-500">
                    Print Express Delievery
                  </li>
                  <li className="hover:text-green-500">Transfer Product</li>
                  <li className="hover:text-green-500">Order In Boulk</li>
                  <li className="hover:text-green-500">Expert Program</li>
                </ul>
              </div>
            </li>

            <li className="relative cursor-pointer flex items-center justify-center lg:gap-2 ">
              <span
                onClick={() => {
                  setDropDown(dropDown === 3 ? 0 : 3);
                }}
                className="hover:text-green-500 group flex items-center lg:gap-2"
              >
                Use-Cases
                <IoIosArrowDown className="text-xl  duration-300" />
              </span>
              <div className="absolute mx-5 top-[60px] w-[150px] bg-white shadow-md rounded-md ">
                <ul
                  className={`flex ${
                    dropDown === 3 ? "block" : "hidden"
                  }  flex-col md:text-base py-1 text-sm lg:gap-2 p-1 list-none`}
                >
                  <li className="hover:text-green-500">Merch for Fans</li>
                  <li className="hover:text-green-500">Merch for eCommerce</li>
                  <li className="hover:text-green-500">Merch for Enterprise</li>
                  <li className="hover:text-green-500">Grow Your Store</li>
                </ul>
              </div>
            </li>

            <li className="relative cursor-pointer flex items-center justify-center lg:gap-2 ">
              <span
                onClick={() => {
                  setDropDown(dropDown === 4 ? 0 : 4);
                }}
                className="hover:text-green-500 group flex items-center lg:gap-2"
              >
                Need-help?
                <IoIosArrowDown className="text-xl  duration-300" />
              </span>
              <div className="absolute mx-5 top-[60px] w-[150px] bg-white shadow-md rounded-md ">
                <ul
                  className={`flex ${
                    dropDown === 4 ? "block" : "hidden"
                  }  flex-col md:text-base py-1 text-sm lg:gap-2 p-1 list-none`}
                >
                  <li className="hover:text-green-500">Help Center</li>
                  <li className="hover:text-green-500">Contact</li>
                  <li className="hover:text-green-500">My Requests</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="max-w-sm roboto-medium text-lg  flex gap-4 ">
          <button className="border-2 px-5 py-1 rounded-md border-[#bbc4c2] hover:text-green-500 ">
            Log in
          </button>
          <button className=" px-5 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 duration-200x">
            Sign up
          </button>
        </div>
        {/*  */}
      </div>

      <div
        style={{ transform: sidebar ? "translateX(0%)" : "translateX(-100%)" }}
        className="md:w-[400px] lg:hidden  max-w-[800px] duration-200 bg-white z-50  shadow-lg   min-h-[100%]   absolute border-2"
      >
        <h1 className="text-3xl roboto-bold text-center">Menu</h1>
        <div className="border-t-2 w-full"></div>
        <div className="w-full flex flex-col  md:px-5 mt-6 px-5 mb-3">
          <ul className="list-none roboto-medium text-xl flex flex-col gap-5">
            <li className="hover:text-green-500">Catalog</li>
            <li
              onClick={() => {
                setDropDown(dropDown === 1 ? 0 : 1);
              }}
              className="w-full flex justify-between hover:text-green-500 items-center gap-2"
            >
              How it works
              <IoIosArrowDown className="text-xl hover:rotate-[180deg] duration-300" />
            </li>
            <div
              className={`w-full flex flex-col ${
                dropDown === 1 ? "block" : "hidden"
              } `}
            >
              <ul className="list-none ml-4 roboto-regular text-base justify-center flex flex-col gap-3">
                <li className="hover:text-green-500">How Printify Works</li>
                <li className="hover:text-green-500">Print On Demand</li>
                <li className="hover:text-green-500">
                  Printify Quality Promise
                </li>
                <li className="hover:text-green-500">What To Sell?</li>
              </ul>
            </div>
            <li className="hover:text-green-500">Pricing</li>
            <li className="hover:text-green-500">Blog</li>
            <li
              onClick={() => {
                setDropDown(dropDown === 2 ? 0 : 2);
              }}
              className="w-full hover:text-green-500  flex justify-between items-center gap-2"
            >
              Services
              <IoIosArrowDown className="text-xl hover:rotate-[180deg] duration-300" />
            </li>
            <div
              className={`w-full flex flex-col ${
                dropDown === 2 ? "block" : "hidden"
              } `}
            >
              <ul className="list-none ml-4 roboto-regular text-base justify-center flex flex-col gap-3">
                <li className="hover:text-green-500">Printify Studio</li>
                <li className="hover:text-green-500">
                  Print Express Delievery
                </li>
                <li className="hover:text-green-500">Transfer Products</li>
                <li className="hover:text-green-500">Order In Bulk</li>
                <li className="hover:text-green-500">Exprert Program</li>
              </ul>
            </div>
            <li
              onClick={() => {
                setDropDown(dropDown === 3 ? 0 : 3);
              }}
              className="w-full hover:text-green-500 flex justify-between items-center gap-2"
            >
              Use-cases
              <IoIosArrowDown className="text-xl hover:rotate-[180deg] duration-300" />
            </li>
            <div
              className={`w-full flex flex-col ${
                dropDown === 3 ? "block" : "hidden"
              } `}
            >
              <ul className="list-none ml-4 roboto-regular text-base justify-center flex flex-col gap-3">
                <li className="hover:text-green-500">Merch for Fans</li>
                <li className="hover:text-green-500">Merch for eCommerce</li>
                <li className="hover:text-green-500">Merch for Enterprise</li>
                <li className="hover:text-green-500">Grow Your Store</li>
              </ul>
            </div>
            <li
              onClick={() => {
                setDropDown(dropDown === 4 ? 0 : 4);
              }}
              className="w-full hover:text-green-500 flex justify-between items-center gap-2"
            >
              Need-help?
              <IoIosArrowDown className="text-xl hover:rotate-[180deg] duration-300" />
            </li>
            <div
              className={`w-full flex flex-col ${
                dropDown === 4 ? "block" : "hidden"
              } `}
            >
              <ul className="list-none ml-4 roboto-regular text-base justify-center flex flex-col gap-3">
                <li className="hover:text-green-500">Help Center</li>
                <li className="hover:text-green-500">Contact</li>
                <li className="hover:text-green-500">My Requests</li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
