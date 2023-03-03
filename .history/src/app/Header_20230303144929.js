import Image from "next/image";
import React from "react";
import { BsBicycle } from "react-icons/bs";

function Header() {
  return (
    <div className="flex px-10 bg-offwhite text-goodblack h-17">
      <nav className="flex justify-around items-center w-full">
        <ul className="flex gap-24 font-normal p-4 text-xl md:text-2xl shadow">
          <li className="cursor-pointer border-2 p-1 bg-goodwhite flex gap-1 justify-start text-2xl text-justify items-center ">
            <BsBicycle size={40} /> POWER PEDAL
          </li>
          <li className="cursor-pointer md:p-2 hover:text-goodred duration-500">
            ABOUT
          </li>
          <li className="cursor-pointer md:p-2 hover:text-goodred duration-500">
            FEATURES
          </li>
          <li className="cursor-pointer md:p-2 hover:text-goodred duration-500">
            PRODUCTS
          </li>
          <li className="cursor-pointer md:p-2 hover:text-goodred duration-500">
            ORDER
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
