import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex px-10 bg-offwhite text-goodblack h-20">
      <nav className="flex gap-5">
        <ul>
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
