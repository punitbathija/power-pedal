import Image from "next/image";
import React from "react";
import { BsBicycle } from "react-icons/bs";

function Header() {
  return (
    <div className="flex px-10 bg-offwhite text-goodblack h-12">
      <nav className="flex justify-around w-full">
        <ul className="flex gap-36 font-semibold p-3 text-xl md:text-2xl">
          <li className="flex gap-1 justify-start text-center text-2xl">
            <BsBicycle size={40} className="pt-2" /> POWER PEDAL
          </li>
          <li>About</li>
          <li>Feature</li>
          <li>Products</li>
          <li>Order</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
