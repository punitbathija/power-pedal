import Image from "next/image";
import React from "react";
import { BsBicycle } from "react-icons/bs";

function Header() {
  return (
    <div className="md:flex md:px-10 bg-offwhite text-goodblack h-12 md:h-17">
      <nav className="flex md:justify-around md:items-center w-full">
        <div className="my-4 cursor-pointer border-2 mx-5 h-14 p-2 bg-goodwhite flex gap-1 justify-start text-xl md:text-2xl text-justify md:items-center  hover:text-goodwhite hover:bg-goodblack hover:rounded-md duration-700">
          <BsBicycle size={40} /> POWER PEDAL
        </div>
        <ul className="md:flex gap-24 font-normal md:p-4 text-xl md:text-2xl shadow w-fit md:z-auto md:opacity-100 opacity-0">
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            ABOUT
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            FEATURES
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            PRODUCTS
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            ORDER
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
