import Image from "next/image";
import React from "react";
import { BsBicycle } from "react-icons/bs";

function Header() {
  return (
    <div className="flex px-10 bg-offwhite text-goodblack h-12">
      <nav className="flex justify-evenly items-center w-full ">
        <ul className="flex gap-36 font-normal p-4 text-xl md:text-2xl">
          <li className="border-1 flex gap-1 justify-start text-2xl text-justify ">
            <BsBicycle size={40} /> POWER PEDAL
          </li>
          <li className="border-1 ">ABOUT</li>
          <li className="border-1 ">FEATURES</li>
          <li className="border-1 ">PRODUCTS</li>
          <li className="border-1 ">ORDER</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
