import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex px-10 bg-offwhite text-goodblack h-12">
      <nav className="flex justify-around w-full">
        <ul className="flex gap-5 font-semibold p-2 ">
          <li>POWER PEDAL</li>
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
